"use client"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { EditorTab } from "@/components/app/EditorComponent/EditorTab"
import { BenchmarksComponent } from "@/components/app/Benchmarks/BenchmarksComponent"
import { useCodeContext } from "@/context/CodeContext"

export const TabsSectionContainer = () => {

  const { setActiveTab, activeTab } = useCodeContext()

  return (
    <Tabs defaultValue={activeTab} onValueChange={setActiveTab} value={activeTab} className="w-full border-t-2 rounded-t-md">
      <TabsList className="rounded-md bg-transparent text-white">
        {
          tabsOptions.map((tab, index) => (
            <TabsTrigger
              key={index}
              className="text-white data-[state=active]:text-black data-[state=inactive]:text-gray-300 cursor-pointer"
              value={tab.value}
            >
              {tab.label}
            </TabsTrigger>
          ))
        }
      </TabsList>
      <TabsContent value="editor" className="h-full">
        <div className="h-full">
          <EditorTab />
        </div>
      </TabsContent>
      <TabsContent value="benchmark" className="h-full">
        <BenchmarksComponent />
      </TabsContent>
    </Tabs>
  )
}

const tabsOptions = [
  { value: "editor", label: "Editor" },
  { value: "benchmark", label: "Benchmarks" },
  { value: "chat", label: "Chat" },
]