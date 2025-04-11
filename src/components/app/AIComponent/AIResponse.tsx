import { Message } from "@ai-sdk/react";
import ReactMarkdown from "react-markdown"

export const AIResponse = ({ message }: { message: Message }) => {
  return (
    <div
      key={message.id}
      className="flex-1 shadow-md sm:leading-6 flex flex-col md:flex-row md:items-center justify-center p-2 mt-2"
    >
      <div className="flex flex-row">
        <img
          className="mb-2 md:mb-0 flex h-8 w-8 rounded-full sm:mr-4"
          src="https://dummyimage.com/256x256/363536/ffffff&text=AI"
          alt="something"
        />
      </div>
      <div className="flex flex-col space-y-1 w-full markdown-body">
        <ReactMarkdown>
          {
            message.content
          }
        </ReactMarkdown>
      </div>
    </div>
  )
}
