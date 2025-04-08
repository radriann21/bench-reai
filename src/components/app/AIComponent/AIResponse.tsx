import { Message } from "@ai-sdk/react";
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"

export const AIResponse = ({ message }: { message: Message }) => {
  return (
    <div
      key={message.id}
      className="flex-1 shadow-md sm:leading-6 flex justify-center p-4"
    >
      <div className="flex flex-row">
        <img
          className="mr-2 flex h-8 w-8 rounded-full sm:mr-4"
          src="https://dummyimage.com/256x256/363536/ffffff&text=AI"
          alt="something"
        />
      </div>
      <div className="flex flex-col space-y-1 w-full markdown-body">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
        >
          {
            message.content
          }
        </ReactMarkdown>
      </div>
    </div>
  )
}
