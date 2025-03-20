"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { CodeEditor } from "./CodeEditor";

export const EditorComponent = () => {
  return (
    <Card className="bg-bg-card border-1 border-custom-border text-main-text col-span-1 row-span-1">
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
      </CardContent>
    </Card>
  )
}
