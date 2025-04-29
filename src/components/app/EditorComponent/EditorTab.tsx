"use client"
import { useCodeContext } from "@/context/CodeContext"
import { CodeEditor } from "@/components/app/EditorComponent/CodeEditor"
import { Button } from "@/components/ui/button"
import { Copy } from "lucide-react"
import { copyToClipboard } from "@/lib/copyToClipboard"

export const EditorTab = () => {

  const { code, runCode } = useCodeContext()

  return (
    <section className="flex flex-col">
      <CodeEditor />
      <section className="flex items-center space-x-4 mt-2">
        <Button
          className="cursor-pointer transition-colors duration-200 hover:bg-foreground"
          onClick={() =>
            copyToClipboard(code)}
        >
          <Copy />
        </Button>
        <Button onClick={runCode} className="bg-custom-accent text-white cursor-pointer">
          Run Code
        </Button>
      </section>
      <section>
        <span className="text-xs">
          This benchmark executes basic code tests, if you want to get more specifics results, use specialized tools.
        </span>
      </section>
    </section>
  )
}
