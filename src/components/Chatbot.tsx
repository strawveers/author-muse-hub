import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageCircle, Bot, Sparkles } from "lucide-react";

const Chatbot = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const handleStartChat = () => {
    // Placeholder para integração com RetellAI
    alert("Chatbot será integrado com RetellAI em breve!");
    setIsChatOpen(true);
  };

  return (
    <section id="chatbot" className="py-20 bg-cream">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal mb-6">
              Converse Comigo
            </h2>
            <div className="w-24 h-1 bg-gold mx-auto mb-6"></div>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Tenho um assistente virtual que conhece tudo sobre meus livros, eventos e pode 
              responder suas perguntas a qualquer hora do dia!
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Chatbot Info */}
            <div className="animate-fade-in-up">
              <Card className="bg-background border-none shadow-elegant hover:shadow-gold transition-all duration-500">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 font-serif text-2xl text-charcoal">
                    <Bot className="text-gold" size={28} />
                    Assistente Virtual Isabella
                  </CardTitle>
                  <CardDescription className="text-lg text-muted-foreground">
                    Powered by RetellAI - Respostas inteligentes baseadas em IA
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <Sparkles className="text-gold flex-shrink-0 mt-1" size={20} />
                      <p className="text-muted-foreground">
                        Pergunte sobre meus livros, personagens e tramas
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <Sparkles className="text-gold flex-shrink-0 mt-1" size={20} />
                      <p className="text-muted-foreground">
                        Descubra eventos próximos e sessões de autógrafos
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <Sparkles className="text-gold flex-shrink-0 mt-1" size={20} />
                      <p className="text-muted-foreground">
                        Receba recomendações personalizadas de leitura
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <Sparkles className="text-gold flex-shrink-0 mt-1" size={20} />
                      <p className="text-muted-foreground">
                        Tire dúvidas sobre o processo criativo
                      </p>
                    </div>
                  </div>

                  <div className="pt-4">
                    <Button
                      onClick={handleStartChat}
                      className="w-full bg-gold text-charcoal hover:bg-gold/90 font-semibold py-6 text-lg shadow-gold hover:shadow-lg transition-all duration-300 hover:scale-105"
                    >
                      <MessageCircle className="mr-2" size={20} />
                      Iniciar Conversa
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Chat Preview */}
            <div className="animate-fade-in-up animate-delay-200">
              <div className="bg-background rounded-lg shadow-elegant border-2 border-gold/20 p-6 h-96 flex flex-col">
                <div className="flex items-center gap-3 mb-4 pb-4 border-b border-warm-gray">
                  <div className="w-10 h-10 bg-gold rounded-full flex items-center justify-center">
                    <Bot className="text-charcoal" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-charcoal">Assistente Isabella</h3>
                    <p className="text-sm text-muted-foreground">Online agora</p>
                  </div>
                </div>

                <div className="flex-1 space-y-4 overflow-y-auto">
                  <div className="flex gap-3">
                    <div className="w-8 h-8 bg-gold rounded-full flex items-center justify-center flex-shrink-0">
                      <Bot className="text-charcoal" size={16} />
                    </div>
                    <div className="bg-gold/10 rounded-lg p-3 max-w-xs">
                      <p className="text-sm text-charcoal">
                        Olá! Sou a assistente virtual da Isabella. Como posso ajudar você hoje?
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3 justify-end">
                    <div className="bg-charcoal rounded-lg p-3 max-w-xs">
                      <p className="text-sm text-cream">
                        Qual é o próximo livro da Isabella?
                      </p>
                    </div>
                    <div className="w-8 h-8 bg-warm-gray rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-xs">👤</span>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <div className="w-8 h-8 bg-gold rounded-full flex items-center justify-center flex-shrink-0">
                      <Bot className="text-charcoal" size={16} />
                    </div>
                    <div className="bg-gold/10 rounded-lg p-3 max-w-xs">
                      <p className="text-sm text-charcoal">
                        Isabella está trabalhando no segundo livro da trilogia "Promessa Eterna"! O lançamento está previsto para o primeiro semestre de 2024. 📚✨
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-warm-gray">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <div className="w-2 h-2 bg-gold rounded-full animate-pulse"></div>
                    Assistente está digitando...
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">
              💡 <strong>Dica:</strong> O chatbot aprende com cada conversa e fica cada vez mais inteligente!
            </p>
            <p className="text-sm text-muted-foreground">
              Integração com RetellAI em desenvolvimento
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Chatbot;