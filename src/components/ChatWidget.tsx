import { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { ChatInterface } from "./ChatInterface";
import { useToast } from "@/hooks/use-toast";

export interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      role: 'assistant',
      content: 'Olá! Sou a assistente virtual da Isabella Romano. Como posso ajudar você hoje?',
      timestamp: new Date(),
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [conversationId] = useState(() => crypto.randomUUID());
  const { toast } = useToast();

  const handleSendMessage = async () => {
    if (!inputText.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: inputText,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setIsLoading(true);

    try {
      const FUNCTION_URL = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/create-retell-call`;
      
      const response = await fetch(FUNCTION_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          message: inputText,
          conversation_id: conversationId 
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      const data = await response.json();

      // Simular resposta (RetellAI é principalmente para voz, mas podemos adaptar)
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: data?.access_token 
          ? 'Conexão estabelecida! Como posso ajudar?' 
          : 'Desculpe, não consegui processar sua mensagem. Tente novamente.',
        timestamp: new Date(),
      };

      setMessages(prev => [...prev, assistantMessage]);
    } catch (error) {
      console.error('Error sending message:', error);
      toast({
        title: "Erro",
        description: "Não foi possível enviar a mensagem. Tente novamente.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleSuggestionClick = (suggestion: string) => {
    setInputText(suggestion);
    handleSendMessage();
  };

  return (
    <>
      {/* Widget Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 z-50 bg-gold hover:bg-gold/90 text-charcoal rounded-full p-4 shadow-elegant hover:shadow-gold transition-all duration-300 hover:scale-110 animate-pulse"
          aria-label="Abrir chat"
        >
          <MessageCircle className="w-6 h-6" />
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 w-full max-w-md h-[600px] bg-cream rounded-lg shadow-2xl flex flex-col animate-scale-in sm:max-h-[600px] max-h-[100vh] sm:w-[400px]">
          {/* Header */}
          <div className="bg-gold text-charcoal px-6 py-4 rounded-t-lg flex items-center justify-between">
            <div className="flex items-center gap-3">
              <MessageCircle className="w-5 h-5" />
              <div>
                <h3 className="font-serif font-semibold text-lg">Isabella Romano</h3>
                <p className="text-sm opacity-80">Assistente Virtual</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="hover:bg-charcoal/10 p-2 rounded-full transition-colors"
              aria-label="Fechar chat"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Chat Interface */}
          <div className="flex-1 overflow-hidden">
            <ChatInterface
              messages={messages}
              inputText={inputText}
              isLoading={isLoading}
              onInputChange={setInputText}
              onSendMessage={handleSendMessage}
              onClose={() => setIsOpen(false)}
              onSuggestionClick={handleSuggestionClick}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default ChatWidget;
