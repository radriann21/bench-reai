"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send } from "lucide-react";
import { EmptyState } from "@/components/app/EmptyState/EmptyState";
import { cn } from "@/lib/utils";

import { useChat } from "@ai-sdk/react";

export const ChatComponent = () => {
  const { messages, input, handleInputChange, handleSubmit } = useChat()

  return (
    <div className="flex-1 space-y-6 overflow-y-auto rounded-xl p-4 leading-6 shadow-sm bg-gray-900  text-main-text sm:text-base sm:leading-7 font-body text-sm">
      {
        messages.length > 0
        ? (
          messages.map((message) => (
            <div key={message.id} className={cn("flex items-start", message.role === "user" ? "flex-row-reverse" : "")}>
              <img  
                className="mr-2 h-8 w-8 rounded-full"
                src="https://dummyimage.com/128x128/363536/ffffff&text=J"
              />
              <div className="flex rounded-b-xl rounded-tr-xl p-4 bg-slate-800 sm:max-w-md md:max-w-2xl">
                <p>{message.content}</p>
              </div>
            </div>
          ))
        )
        : <EmptyState />
      }
      <form onSubmit={handleSubmit} className="flex items-center justify-between">
        <Input
          className="w-[90%] rounded-md p-2 font-body text-sm placeholder:text-slate-300"
          placeholder="Write your message"
          value={input}
          onChange={handleInputChange}
        />
        <Button
          variant={"default"}
          className="bg-custom-accent cursor-pointer hover:bg-custom-accent/60"
        >
          <Send className="w-8 h-8" />
        </Button>
      </form>
    </div>
  );
};
