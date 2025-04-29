import { toast } from "sonner"

export const copyToClipboard = async (text: string) => {
  if (!text) return
  try {
    await navigator.clipboard.writeText(text)
    toast("Code copied to clipboard", {
      style: {
        backgroundColor: "black",
        color: "white",
      },
    })
  } catch (err) {
    if (err instanceof Error) {
      toast.error(`Failed to copy code: ${err.message}`)
    }
  }
}