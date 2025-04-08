"use client"
import { Button } from "@/components/ui/button";
import { Play, Copy } from "lucide-react";
import { Tooltip, TooltipProvider, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { toast } from "sonner";
import { useCodeContext } from "@/context/CodeContext";

export const EditorOptions = () => {
  const { code, runCode } = useCodeContext();

  const handleCopyToClipboard = async () => {
    await navigator.clipboard.writeText(code);
    toast('Code copied to clipboard', {
      style: {
        backgroundColor: 'black',
        color: 'white',
      }
    });
  }

  return (
    <div className="flex items-center space-x-2">
    <Button
      className="text-sm cursor-pointer bg-green-600 flex items-center hover:bg-green-700 group"
      onClick={runCode}
    >
      Run Benchmarks
      <Play className="w-5 h-5 group-hover:animate-pulse" />
    </Button>
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button onClick={handleCopyToClipboard} variant="ghost" className="w-fit cursor-pointer group hover:bg-green-600">
            <Copy className="w-5 h-5 stroke-green-600 group-hover:stroke-white" />
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <span>Copy Code</span>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  </div>
  )
}