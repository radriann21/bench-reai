import { ChatComponent } from "./ChatComponent"
import { Bot } from "lucide-react"

export const AIComponent = () => {
  return (
    <section className="w-full xl:w-[60%] flex flex-col px-4">
      <div className="w-full flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2">
          <Bot className="stroke-green-500 w-5 h-5" />
          <h3 className="font-bold font-headings text-xl text-main-text">AI Assistant</h3>
        </div>
      </div>
      <ChatComponent />
    </section>
  )
}
