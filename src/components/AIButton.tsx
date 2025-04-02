
import React from 'react';
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useWebhook } from "@/contexts/WebhookContext";
import { Zap, Play, ArrowRight, ArrowLeft, Square } from "lucide-react";

type AIActionType = 'iniciar' | 'parar' | 'avançar' | 'voltar' | 'turbo';

interface AIButtonProps {
  type: AIActionType;
  label: string;
  className?: string;
}

// Mapeamento de tipos de ação para ícones e cores
const actionConfig = {
  iniciar: { 
    icon: Play, 
    gradient: 'bg-ai-green-gradient hover:bg-green-600',
    hoverScale: 'hover:scale-105'
  },
  parar: { 
    icon: Square, // Replacing Stop with Square which is a common stop icon alternative
    gradient: 'bg-ai-red-gradient hover:bg-red-600',
    hoverScale: 'hover:scale-105'
  },
  avançar: { 
    icon: ArrowRight, 
    gradient: 'bg-ai-blue-gradient hover:bg-blue-600',
    hoverScale: 'hover:scale-105'
  },
  voltar: { 
    icon: ArrowLeft, 
    gradient: 'bg-ai-yellow-gradient hover:bg-yellow-600',
    hoverScale: 'hover:scale-105'
  },
  turbo: { 
    icon: Zap, 
    gradient: 'bg-ai-purple-gradient hover:bg-purple-600',
    hoverScale: 'hover:scale-105'
  }
};

const AIButton = ({ type, label, className }: AIButtonProps) => {
  const { triggerWebhook, isLoading } = useWebhook();
  const config = actionConfig[type];
  const Icon = config.icon;

  const handleClick = async () => {
    await triggerWebhook(type);
  };

  return (
    <Button
      onClick={handleClick}
      disabled={isLoading}
      className={cn(
        'relative font-medium text-white transition-all duration-300 shadow-lg',
        'flex items-center gap-2 min-w-[180px] min-h-[50px] text-base',
        config.gradient,
        config.hoverScale,
        isLoading ? 'opacity-80' : '',
        className
      )}
    >
      <Icon className="w-5 h-5" />
      <span>{label}</span>
      {isLoading && (
        <span className="absolute top-0 right-0 bottom-0 left-0 flex items-center justify-center bg-black bg-opacity-20 rounded-md">
          <div className="w-5 h-5 border-t-2 border-white rounded-full animate-spin"></div>
        </span>
      )}
    </Button>
  );
};

export default AIButton;
