
import React, { useState } from 'react';
import { WebhookProvider, useWebhook } from '@/contexts/WebhookContext';
import AIButton from '@/components/AIButton';
import AIBackground from '@/components/AIBackground';
import { Toaster } from '@/components/ui/toaster';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

// Componente principal da página
const IndexContent = () => {
  const [phoneNumber, setPhoneNumber] = useState('559884286874@s.whatsapp.net');
  const { setTarget } = useWebhook();
  
  // Atualiza o número de telefone no contexto quando o valor muda
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhoneNumber(e.target.value);
    setTarget(e.target.value);
  };

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center p-4 bg-gradient-to-b from-gray-50 to-gray-100">
      <AIBackground />
      
      <div className="max-w-4xl w-full mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-ai-blue to-ai-purple mb-4">
            Controle de IA
          </h1>
          <p className="text-gray-600 max-w-xl mx-auto">
            Configure o número e clique no botão abaixo para iniciar a inteligência artificial.
          </p>
        </header>

        <main className="bg-white/80 backdrop-blur-sm rounded-xl shadow-xl p-8 mb-8 flex flex-col items-center">
          <div className="w-full max-w-md mb-8">
            <Label htmlFor="phone-number" className="text-base text-gray-700 mb-2 block">
              Número do WhatsApp para ativar a IA
            </Label>
            <Input 
              id="phone-number"
              type="text" 
              value={phoneNumber}
              onChange={handlePhoneChange}
              placeholder="88567675"
              className="w-full mb-2 text-base"
            />
            <p className="text-xs text-gray-500">
              Formato esperado: DDI+DDD+NÚMERO@s.whatsapp.net
            </p>
          </div>
          
          <AIButton 
            type="iniciar" 
            label="Iniciar IA" 
            className="w-64 h-16 text-lg mb-8"
          />

          <div className="w-full bg-gray-50 p-4 rounded-lg border border-gray-200">
            <h3 className="text-lg font-medium text-gray-800 mb-2">Sobre esta aplicação</h3>
            <p className="text-gray-600 text-sm">
              Esta aplicação envia comandos para um sistema de IA através de webhooks.
              Basta inserir o número do WhatsApp e clicar no botão para iniciar a IA.
            </p>
          </div>
        </main>

        <footer className="text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} - Controle de IA via Webhook</p>
        </footer>
      </div>
    </div>
  );
};

// Wrapper com o provedor de contexto
const Index = () => {
  return (
    <WebhookProvider>
      <IndexContent />
      <Toaster />
    </WebhookProvider>
  );
};

export default Index;
