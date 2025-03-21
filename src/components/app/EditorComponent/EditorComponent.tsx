"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { CodeEditor } from "./CodeEditor";
import { Button } from "@/components/ui/button";
import { useCodeContext } from "@/context/CodeContext";

export const EditorComponent = () => {

  const { runCode } = useCodeContext()

  return (
    <div className="col-span-1 row-span-2">
      <Card className="bg-bg-card border-1 border-custom-border text-main-text">
        <CardHeader>
          <CardTitle className="font-headings text-lg">
            Code Editor
          </CardTitle>
          <CardDescription className="font-body text-secondary-text">
            Write your code and run the benchmarks
          </CardDescription>
        </CardHeader>
        <CardContent>
        <CodeEditor />
        <Button onClick={runCode} className="px-8 mt-4 bg-custom-accent text-white font-bold cursor-pointer hover:bg-custom-accent/60">
          Run
        </Button>
        </CardContent>
      </Card>
      <Card className="bg-bg-card border-1 border-custom-border text-main-text mt-8">
        <CardHeader>
          <CardTitle className="font-headings text-lg">
            AI Assistant
          </CardTitle>
          <CardDescription className="font-body text-secondary-text">
            Ask to the AI Assistant to improve your code, give explanations and suggestions about what you need.
          </CardDescription>
        </CardHeader>
      </Card>
    </div>
  )
}
