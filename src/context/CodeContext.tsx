"use client";
import { createContext, useContext, useState } from "react";
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

  const sendCodeToAI = async () => {
    const response = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ messages: [{ role: "user", content: code }] }),
    });
  
    if (!response.ok) {
      console.error("Error sending code to AI");
      return;
    }
  
    const data = await response.json();
    console.log("AI Response:", data)
  };

  return (
    <CodeContext.Provider value={{ code, setCode, runCode, results, activeTab, setActiveTab }}>
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