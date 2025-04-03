"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send, Copy, Check } from "lucide-react";
import { EmptyState } from "@/components/app/EmptyState/EmptyState";
import { cn } from "@/lib/utils";

import { useChat } from "@ai-sdk/react";
import { useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { HTMLAttributes } from 'react';
import { ScrollArea } from "@/components/ui/scroll-area";

interface CodeProps extends HTMLAttributes<HTMLElement> {
  inline?: boolean;
  className?: string;
  children?: React.ReactNode;
  node?: any;
}

export const ChatComponent = () => {
  const { messages, input, handleInputChange, handleSubmit } = useChat();
  const [copied, setCopied] = useState<string | null>(null);

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(id);
      setTimeout(() => setCopied(null), 2000);
    });
  };

  const renderMessageContent = (content: string) => {
    return (
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          code: ({ node, inline, className, children, ...props }: CodeProps) => {
            const match = /language-(\w+)/.exec(className || '');
            return !inline && match ? (
              <div className="relative my-4 bg-gray-800 p-4 rounded-lg shadow-sm">
                <div className="absolute right-2 top-2 z-10">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 bg-secondary/50 hover:bg-secondary text-muted-foreground"
                    onClick={() => copyToClipboard(String(children).trim(), `code-${node?.index}`)}
                  >
                    {copied === `code-${node?.index}` ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                  </Button>
                </div>
                <div className="overflow-x-auto max-h-[300px]">
                  <SyntaxHighlighter
                    language={match?.[1]}
                    PreTag="div"
                    {...props}
                    style={atomDark}
                    customStyle={{
                      margin: 0,
                      borderRadius: "0.375em",
                      fontSize: "0.875rem",
                      whiteSpace: "pre-wrap",
                      wordBreak: "break-word"
                    }}
                  >
                    {String(children).replace(/\n$/, '')}
                  </SyntaxHighlighter>
                </div>
              </div>
            ) : (
              <code className={className} {...props}>
                {children}
              </code>
            );
          },
        }}
      >
        {content}
      </ReactMarkdown>
    );
  };

  return (
    <div className="flex flex-col h-[670px] px-4">
      {/* Scrollable area for messages */}
      <ScrollArea className="flex-grow overflow-y-auto pr-4">
        <div className="space-y-6 pb-4">
          {messages.length > 0 ? (
            messages.map((message) => (
              <div key={message.id} className={cn("flex items-start", message.role === "user" ? "flex-row-reverse" : "")}>
                <img
                  className={cn("h-8 w-8 rounded-full", message.role === "user" ? "ml-2" : "mr-2")}
                  src="https://dummyimage.com/128x128/363536/ffffff&text=J"
                />
                <div
                  className={cn(
                    "rounded-b-xl rounded-tr-xl p-4 bg-slate-800 text-white break-words",
                    message.role === "user"
                      ? "bg-custom-accent ml-auto max-w-fit" // Estilos para mensajes del usuario
                      : "bg-slate-800 max-w-md" // Estilos para mensajes del asistente
                  )}
                >
                  {renderMessageContent(message.content)}
                </div>
              </div>
            ))
          ) : (
            <EmptyState />
          )}
        </div>
      </ScrollArea>

      <form onSubmit={handleSubmit} className="flex items-center space-x-4 mt-4">
        <Input
          className="w-full rounded-md p-2 font-body text-sm placeholder:text-slate-300"
          placeholder="Write your message"
          value={input}
          onChange={handleInputChange}
        />
        <Button variant={"default"} className="bg-custom-accent cursor-pointer hover:bg-custom-accent/60">
          <Send className="w-8 h-8" />
        </Button>
      </form>
    </div>
  );
};