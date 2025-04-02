
import React, { createContext, useContext, useState, ReactNode } from 'react';
import { useToast } from "@/components/ui/use-toast";

interface WebhookContextType {
  triggerWebhook: (actionType: string) => Promise<void>;
  isLoading: boolean;
}

const WebhookContext = createContext<WebhookContextType | undefined>(undefined);

export const useWebhook = () => {
  const context = useContext(WebhookContext);
  if (!context) {
    throw new Error('useWebhook must be used within a WebhookProvider');
  }
  return context;
};

interface WebhookProviderProps {
  children: ReactNode;
}

export const WebhookProvider = ({ children }: WebhookProviderProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  
  // URL do webhook fixo
  const webhookUrl = "https://n8n-sgo8ksokg404ocg8sgc4sooc.vemprajogo.com/webhook/2822d385-68cf-4e2c-a987-15329ae404b8";

  const triggerWebhook = async (actionType: string) => {
    setIsLoading(true);
    console.log(`Ativando IA via webhook para ação: ${actionType}`);

    try {
      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        mode: "no-cors", // Lidar com CORS
        body: JSON.stringify({
          action: actionType,
          timestamp: new Date().toISOString(),
          source: window.location.origin,
        }),
      });

      // Como estamos usando no-cors, não teremos um status de resposta apropriado
      toast({
        title: "IA Ativada",
        description: `Comando "${actionType}" enviado com sucesso para a IA`,
      });
    } catch (error) {
      console.error("Erro ao acionar webhook:", error);
      toast({
        title: "Erro",
        description: "Falha ao acionar a IA. Tente novamente.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <WebhookContext.Provider value={{ triggerWebhook, isLoading }}>
      {children}
    </WebhookContext.Provider>
  );
};
