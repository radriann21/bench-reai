import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
  CardContent
} from "@/components/ui/card";
import { ChatComponent } from "./ChatComponent";

export const AIComponent = () => {
  return (
    <Card className="bg-bg-card border-1 border-custom-border text-main-text mt-8">
      <CardHeader>
        <CardTitle className="font-headings text-lg">AI Assistant</CardTitle>
        <CardDescription className="font-body text-secondary-text">
          Ask to the AI Assistant to improve your code, give explanations and
          suggestions about what you need.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChatComponent />
      </CardContent>
    </Card>
  )
}
