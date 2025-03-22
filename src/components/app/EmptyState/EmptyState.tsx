import { MessageCircleDashed } from "lucide-react"

export const EmptyState = () => {
  return (
    <section className="font-body w-full h-full">
      <div className="flex items-center space-x-4">
        <MessageCircleDashed className="w-8 h-8 text-main-text" />
        <div>
          <h3 className="font-headings text-xl text-main-text">No chat yet.</h3>
          <p className="text-secondary-text">Start asking the AI Assistant to get started.</p>
        </div>
      </div>
    </section>
  )
}