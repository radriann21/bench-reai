"use client";
import ReactMarkdown from "react-markdown";
import Image from "next/image";
import { useCallback } from "react";
import { useCodeContext } from "@/context/CodeContext";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { SendHorizontal, Repeat, LoaderCircle, Sparkles } from "lucide-react";
import { Message, useChat } from "@ai-sdk/react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { AIResponse } from "./AIResponse";

export const ChatComponent = () => {
  const { code } = useCodeContext();
  const {
    messages,
    input,
    handleInputChange,
    handleSubmit,
    error,
    reload,
    status,
    append,
  } = useChat();

  const analyzeCode = useCallback(async () => {
    if (code === "") return;
    try {
      const message: Message = {
        id: crypto.randomUUID(),
        role: "user",
        content: `Analyze the code: \n\n\`\`\`javascript\n${code}\n\`\`\``,
      };
      await append(message);
    } catch (err) {
      if (err instanceof Error) {
        console.log("error!");
        return;
      }
    }
  }, [append, code]);

  return (
    <section className="w-full p-2 rounded-md bg-[#0d131f] border-1 border-gray-700">
      <ScrollArea className="flex flex-col w-full py-4 mx-auto h-[380px] text-sm">
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
              className="flex-1 bg-slate-900 flex flex-col md:flex-row md:items-center justify-center p-4"
            >
              <div className="flex flex-row">
                <Image
                  width={32}
                  height={32}
                  className="mb-2 md:mb-0 flex h-8 w-8 rounded-full sm:mr-4"
                  src="https://dummyimage.com/256x256/363536/ffffff&text=U"
                  alt="something"
                />
              </div>
              <div className="flex flex-col w-full markdown-body">
                <ReactMarkdown>
                  {message.content}
                </ReactMarkdown>
              </div>
            </div>
          ) : (
            <AIResponse key={message.id} message={message} />
          )
        )}
      </ScrollArea>

      <form className="flex space-x-2 items-end" onSubmit={handleSubmit}>
        <Textarea
          className="h-12 w-[520px] p-2 resize-none border-1 border-gray-800 text-xs placeholder:text-xs placeholder:text-secondary-text mr-2"
          placeholder="Write your message..."
          value={input}
          onChange={handleInputChange}
        />
        <div className="flex items-center space-x-2">
          <Button
            onClick={analyzeCode}
            className="flex items-center bg-green-600 text-white cursor-pointer hover:bg-green-700"
          >
            Analyze
            <Sparkles className="w-5 h-5 stroke-white" />
          </Button>
          <Button
            className="bg-green-600 text-white hover:bg-green-700 flex items-center"
            type="submit"
            disabled={status === "streaming"}
          >
            Send
            {status === "streaming" ? (
              <LoaderCircle className="w-5 h-5 animate-spin" />
            ) : (
              <SendHorizontal className="w-5 h-5" />
            )}
          </Button>
        </div>
      </form>
    </section>
  );
};
