"use client";
import { createContext, useContext, useState } from "react";
import { executeCode } from "@/actions/executeCode";

type CodeContext = {
  // context state
  code: string,
  results: {
    success: boolean,
    executionTime: string,
    opsPerSecond: string,
    memoryUsed: string
  }

  // context actions
  setCode: (code: string) => void
  runCode: () => void
}

export const CodeContext = createContext<CodeContext>({
  code: "",
  results: {
    success: false,
    executionTime: "",
    opsPerSecond: "",
    memoryUsed: ""
  },
  setCode: () => {},
  runCode: () => {} 
})

export const CodeContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [code, setCode] = useState("const arr = Array.from({ length: 1000 }, (_,i) => i)\nconst findNumber = arr.find(item => item === 50)")
  const [results, setResults] = useState({
    success: false,
    executionTime: "",
    opsPerSecond: "",
    memoryUsed: ""
  })

  const runCode = async () => {
    const result = await executeCode(code)
    if (result?.success) {
      setResults(result)
    }
  }

  return (
    <CodeContext.Provider value={{ code, setCode, runCode, results }}>
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