
import React from 'react';
import { WebhookProvider } from '@/contexts/WebhookContext';
import AIButton from '@/components/AIButton';
import AIBackground from '@/components/AIBackground';
import { Toaster } from '@/components/ui/toaster';

const Index = () => {
  return (
    <WebhookProvider>
      <div className="relative min-h-screen flex flex-col items-center justify-center p-4 bg-gradient-to-b from-gray-50 to-gray-100">
        <AIBackground />
        
        <div className="max-w-4xl w-full mx-auto">
          <header className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-ai-blue to-ai-purple mb-4">
              Controle de IA
            </h1>
            <p className="text-gray-600 max-w-xl mx-auto">
              Use os botões abaixo para enviar comandos para a inteligência artificial através do webhook.
            </p>
          </header>

          <main className="bg-white/80 backdrop-blur-sm rounded-xl shadow-xl p-8 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
              <AIButton 
                type="iniciar" 
                label="Iniciar IA" 
                className="w-full"
              />
              <AIButton 
                type="parar" 
                label="Parar IA" 
                className="w-full"
              />
              <AIButton 
                type="turbo" 
                label="Modo Turbo" 
                className="w-full"
              />
              <AIButton 
                type="avançar" 
                label="Avançar" 
                className="w-full"
              />
              <AIButton 
                type="voltar" 
                label="Voltar" 
                className="w-full"
              />
            </div>

            <div className="mt-8 bg-gray-50 p-4 rounded-lg border border-gray-200">
              <h3 className="text-lg font-medium text-gray-800 mb-2">Sobre esta aplicação</h3>
              <p className="text-gray-600 text-sm">
                Esta aplicação envia comandos para um sistema de IA através de webhooks.
                Cada botão aciona uma função diferente e envia os dados necessários para que a IA execute a ação correspondente.
              </p>
            </div>
          </main>

          <footer className="text-center text-gray-500 text-sm">
            <p>© {new Date().getFullYear()} - Controle de IA via Webhook</p>
          </footer>
        </div>
      </div>
      <Toaster />
    </WebhookProvider>
  );
};

export default Index;
