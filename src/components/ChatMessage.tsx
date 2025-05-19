
import { Avatar } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

interface Message {
  id: string;
  sender: "user" | "ai";
  text: string;
  timestamp: Date;
}

interface ChatMessageProps {
  message: Message;
}

const ChatMessage = ({ message }: ChatMessageProps) => {
  const isAi = message.sender === "ai";
  
  return (
    <div
      className={cn(
        "flex items-start gap-3",
        isAi ? "" : "flex-row-reverse"
      )}
    >
      <Avatar className={cn(
        "w-8 h-8 mt-1",
        isAi ? "bg-primary text-primary-foreground" : "bg-secondary"
      )}>
        <span className="text-xs font-bold">
          {isAi ? "AI" : "U"}
        </span>
      </Avatar>
      
      <div className={isAi ? "ai-message" : "user-message"}>
        <div className="text-sm">
          {message.text}
        </div>
        <div className="text-xs text-muted-foreground mt-1">
          {message.timestamp.toLocaleTimeString([], { 
            hour: '2-digit', 
            minute: '2-digit' 
          })}
        </div>
      </div>
    </div>
  );
};

export default ChatMessage;
