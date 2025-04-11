export type ExecuteCodeResultSuccess = {
  success: true,
  executionTime: string,
  opsPerSecond: string,
  memoryUsed: string,
  output: string
} 

export type ExecuteCodeResultError = {
  success: false,
  error: string
}

export type ExecuteCodeResult = ExecuteCodeResultSuccess | ExecuteCodeResultError

export type CodeContextType = {
  // context state
  code: string,
  activeTab: string,
  results: {
    success: boolean,
    executionTime: string,
    opsPerSecond: string,
    memoryUsed: string, 
    output: string,
    error?: string      
  }

  // context actions
  setCode: (code: string) => void
  runCode: () => void
  setActiveTab: (tab: string) => void,
  analyzeCode: () => void
}