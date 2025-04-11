"use client";
import { createContext, useContext, useState, useCallback } from "react";
import { Message, useChat } from "@ai-sdk/react";
import { executeCode } from "@/actions/executeCode";
import { type CodeContextType } from "@/types";

export const CodeContext = createContext<CodeContextType>({
  code: "",
  activeTab: "editor",
  results: {
    success: false,
    executionTime: "",
    opsPerSecond: "",
    memoryUsed: "",
    output: "",
    error: ""
  },
  setCode: () => {},
  runCode: () => {},
  setActiveTab: (tab: string) => {},
  analyzeCode: () => {}
})

export const CodeContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [code, setCode] = useState("const arr = Array.from({ length: 1000 }, (_,i) => i)\r\nconst findNumber = arr.find(item => item === 50)")
  const [activeTab, setActiveTab] = useState<string>('editor')
  const [results, setResults] = useState({
    success: false,
    executionTime: "",
    opsPerSecond: "",
    memoryUsed: "",
    output: "",
    error: ""
  })
  const { setMessages, append } = useChat()

  const runCode = async () => {
    const result = await executeCode(code)
    if (!result?.success) {
      setResults({
        success: false,
        executionTime: "",
        opsPerSecond: "",
        memoryUsed: "",
        output: "",
        error: result?.error
      })
      setActiveTab('benchmark')
    } else {
      setResults({...result, error: ""})
      setActiveTab('benchmark')
    }
  }

  const analyzeCode = useCallback(async () => {
    if (code === '') return
    try {
      const message: Message = {
        id: crypto.randomUUID(),
        role: "user",
        content: `Analiza el siguiente código y dame sugerencias, explicaciones, mejoras, la notación Big O y posibles problemas de memoria, tiempo de ejecución y número de operaciones:\n\n\`\`\`javascript\n${code}\n\`\`\``,
      }
      await append(message)
      setMessages((prev) => [...prev, message])
    } catch (err) {
      if (err instanceof Error) {
        console.log('error!')
        return
      }
    }
  }, [code, append])

  return (
    <CodeContext.Provider value={{ code, setCode, runCode, results, activeTab, setActiveTab, analyzeCode }}>
      {children}
    </CodeContext.Provider>
  )
}

export const useCodeContext = () => {
  const context = useContext(CodeContext)

  if (!context) {
    throw new Error("useCodeContext must be used within a CodeContextProvider")
  }

  return context
}