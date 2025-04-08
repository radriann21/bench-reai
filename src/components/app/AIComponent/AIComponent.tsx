"use client"
import { ChatComponent } from "./ChatComponent"
import { Button } from "@/components/ui/button"
import { Sparkles, Bot } from "lucide-react"

export const AIComponent = () => {
  return (
    <section className="w-[60%] flex flex-col">
      <div className="w-full flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2">
          <Bot className="stroke-green-500 w-5 h-5" />
          <h3 className="font-bold font-headings text-xl text-main-text">AI Assistant</h3>
        </div>
        <Button className="flex items-center bg-green-600 text-white cursor-pointer hover:bg-green-700">
          Analyze the code
          <Sparkles className="w-5 h-5 stroke-white" />
        </Button>
      </div>
      <ChatComponent />
    </section>
  )
}
