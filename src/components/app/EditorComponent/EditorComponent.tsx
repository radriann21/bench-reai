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
import { AIComponent } from "../AIComponent/AIComponent";

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
      <AIComponent />
    </div>
  )
}
