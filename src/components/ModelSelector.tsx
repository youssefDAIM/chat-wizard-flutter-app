
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface ModelSelectorProps {
  selectedModel: string;
  onSelectModel: (model: string) => void;
}

const models = [
  { id: "gpt-3.5", name: "GPT-3.5" },
  { id: "gpt-4", name: "GPT-4" },
  { id: "llama-3", name: "Llama 3" },
  { id: "claude-3", name: "Claude 3" }
];

const ModelSelector = ({ selectedModel, onSelectModel }: ModelSelectorProps) => {
  const currentModel = models.find(model => model.id === selectedModel) || models[0];
  
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm">
          {currentModel.name}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {models.map(model => (
          <DropdownMenuItem
            key={model.id}
            onClick={() => onSelectModel(model.id)}
          >
            {model.name}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ModelSelector;
