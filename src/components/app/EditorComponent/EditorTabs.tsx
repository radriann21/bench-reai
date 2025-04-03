"use client";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Play } from "lucide-react";
import { CodeEditor } from "./CodeEditor";
import { BenchmarksComponent } from "@/components/app/Benchmarks/BenchmarksComponent";
import { useCodeContext } from "@/context/CodeContext";

export const EditorTabs = () => {
  const { runCode, setActiveTab, activeTab } = useCodeContext()

  return (
    <section className="w-[50%] flex flex-col">
      <h2 className="font-headings text-xl font-bold text-main-text mb-4">
        Write your code and run to see the performance!
      </h2>
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <div className="w-full flex items-center justify-between mb-2">
          <TabsList className="bg-neutral-800 text-sm text-white p-1 space-x-1">
            <TabsTrigger
              value="editor"
              className="data-[state=active]:bg-emerald-800 data-[state=active]:text-emerald-50 text-gray-400 hover:text-gray-200 transition-colors cursor-pointer hover:bg-gray-50/10"
            >
              Editor
            </TabsTrigger>
            <TabsTrigger
              value="benchmark"
              className="data-[state=active]:bg-emerald-800 data-[state=active]:text-emerald-50 text-gray-400 hover:text-gray-200 transition-colors cursor-pointer hover:bg-gray-50/10"
            >
              Benchmarks
            </TabsTrigger>
          </TabsList>
          <Button className="text-sm cursor-pointer bg-green-600 flex items-center hover:bg-green-700 group" onClick={runCode}>
            Run Benchmarks
            <Play className="w-5 h-5 group-hover:animate-pulse" />
          </Button>
        </div>
        <TabsContent value="editor">
          <CodeEditor />
          <span className="text-xs text-secondary-text">
            Note: This is a simple benchmark. For more accurate results, consider running multiple iterations and using more sophisticated benchmarking tools.
          </span>
        </TabsContent>
        <TabsContent value="benchmark">
          <BenchmarksComponent />
        </TabsContent>
      </Tabs>
    </section>
  );
};
