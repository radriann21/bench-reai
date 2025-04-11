"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CodeEditor } from "./CodeEditor";
import { BenchmarksComponent } from "../Benchmarks/BenchmarksComponent";
import { useCodeContext } from "@/context/CodeContext";
import { EditorOptions } from "./EditorOptions";

export const EditorTabs = () => {
  const { setActiveTab, activeTab } = useCodeContext();

  return (
    <section className="w-full xl:w-[40%] flex flex-col px-4">
      <h2 className="font-headings text-xl font-bold text-main-text mb-4">
        Write your code and run it!
      </h2>
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <div className="w-full flex flex-col md:flex-row md:items-center justify-between mb-2">
          <TabsList className="bg-neutral-800 text-sm text-white p-1 space-x-1 mb-2">
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
          <EditorOptions />
        </div>
        <TabsContent value="editor">
          <CodeEditor />
          <span className="text-[11px] text-secondary-text">
            Note: This is a simple benchmark. For more accurate results,
            consider running multiple iterations and using more sophisticated
            benchmarking tools.
          </span>
        </TabsContent>
        <TabsContent value="benchmark">
          <BenchmarksComponent />
        </TabsContent>
      </Tabs>
    </section>
  );
};
