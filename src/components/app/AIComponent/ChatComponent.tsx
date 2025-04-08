"use client";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { SendHorizontal, Repeat, LoaderCircle } from "lucide-react";
import { useChat } from "@ai-sdk/react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { AIResponse } from "./AIResponse";

export const ChatComponent = () => {
  const { messages, input, handleInputChange, handleSubmit, error, reload, status } =
    useChat();

  return (
    <section className="w-full p-2 rounded-md bg-[#0d131f] border-1 border-gray-700">
      <ScrollArea className="flex flex-col w-full py-4 px-4 mx-auto h-[380px] text-sm">
        {error && (
          <div className="w-fit mx-auto text-center flex flex-col">
            <span className="font-headings text-lg text-red-500">
              Error generating the response.
            </span>
            <Button
              className="bg-green-600 text-white hover:bg-green-700 flex items-center w-fit mt-2"
              type="submit"
              onClick={() => reload()}
            >
              <Repeat className="w-5 h-5" />
            </Button>
          </div>
        )}
        {messages.map((message) =>
          message.role === "user" ? (
            <div
              key={message.id}
              className="flex-1 bg-slate-800 shadow-md sm:leading-6 flex items-center justify-center p-4"
            >
              <div className="flex flex-row">
                <img
                  className="mr-2 flex h-8 w-8 rounded-full sm:mr-4"
                  src="https://dummyimage.com/256x256/363536/ffffff&text=U"
                  alt="something"
                />
              </div>
              <div className="flex w-full items-center">
                <p>{message.content}</p>
              </div>
            </div>
          ) : (
            <AIResponse message={message} />
          )
        )}
      </ScrollArea>

      <form className="flex space-x-2 items-end" onSubmit={handleSubmit}>
        <Textarea
          className="h-12 w-full p-2 resize-none border-1 border-gray-800 text-xs placeholder:text-xs placeholder:text-secondary-text"
          placeholder="Write your message..."
          value={input}
          onChange={handleInputChange}
        />
        <Button
          className="bg-green-600 text-white hover:bg-green-700 flex items-center"
          type="submit"
          disabled={status === "streaming"}
        >
          Send
          {
            status === "streaming" ? <LoaderCircle className="w-5 h-5 animate-spin" /> : <SendHorizontal className="w-5 h-5" />
          }
        </Button>
      </form>
    </section>
  );
};
