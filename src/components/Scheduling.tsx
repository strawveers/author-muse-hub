import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Clock, Users, Video, MapPin, Sparkles } from "lucide-react";
import CalcomModal from "./CalcomModal";
import { useState } from "react";

const Scheduling = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedMeeting, setSelectedMeeting] = useState<typeof meetingTypes[0] | null>(null);

  const handleSchedule = (meeting: typeof meetingTypes[0]) => {
    setSelectedMeeting(meeting);
    setModalOpen(true);
  };

  const meetingTypes = [
    {
      id: "meet-greet",
      title: "Meet & Greet",
      description: "Converse comigo pessoalmente sobre livros, escrita e muito mais",
      duration: "30 minutos",
      price: "45 €",
      icon: Users,
      features: ["Bate-papo pessoal", "Sessão de fotos", "Autógrafo personalizado"],
      type: "Presencial",
      calUrl: "https://cal.com/isabella-romano/meet-greet"
    },
    {
      id: "book-signing",
      title: "Sessão de Autógrafos",
      description: "Tenha seus livros autografados e receba uma dedicatória especial",
      duration: "15 minutos",
      price: "25 €",
      icon: MapPin,
      features: ["Autógrafo em até 3 livros", "Dedicatória personalizada", "Foto opcional"],
      type: "Presencial",
      calUrl: "https://cal.com/isabella-romano/book-signing"
    },
    {
      id: "virtual-chat",
      title: "Conversa Virtual",
      description: "Uma videochamada exclusiva para falar sobre escrita e literatura",
      duration: "45 minutos",
      price: "80 €",
      icon: Video,
      features: ["Videochamada privada", "Dicas de escrita", "Q&A personalizado"],
      type: "Online",
      calUrl: "https://cal.com/isabella-romano/virtual-chat"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal mb-6">
            Agende um Encontro
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-6"></div>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Que tal conversarmos pessoalmente? Ofereço diferentes tipos de encontros 
            para conectar com meus leitores de forma mais próxima.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {meetingTypes.map((meeting, index) => {
            const IconComponent = meeting.icon;
            
            return (
              <Card 
                key={meeting.id}
                className={`group bg-cream border-none shadow-elegant hover:shadow-gold transition-all duration-500 hover:scale-105 animate-fade-in-up`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-gold/30 transition-colors duration-300">
                    <IconComponent className="text-gold" size={28} />
                  </div>
                  
                  <CardTitle className="font-serif text-xl md:text-2xl font-bold text-charcoal group-hover:text-gold transition-colors duration-300">
                    {meeting.title}
                  </CardTitle>
                  
                  <CardDescription className="text-muted-foreground">
                    {meeting.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2">
                      <Clock className="text-gold" size={16} />
                      <span className="text-muted-foreground">{meeting.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                        meeting.type === 'Online' ? 'bg-blue-100 text-blue-800' : 'bg-green-100 text-green-800'
                      }`}>
                        {meeting.type}
                      </span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    {meeting.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <Sparkles className="text-gold flex-shrink-0" size={14} />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4 border-t border-warm-gray">
                    <div className="text-center mb-4">
                      <span className="text-2xl font-bold text-gold">{meeting.price}</span>
                    </div>
                    
                    <Button
                      onClick={() => handleSchedule(meeting)}
                      className="w-full bg-gold text-charcoal hover:bg-gold/90 font-semibold transition-all duration-300 hover:scale-105"
                    >
                      <Calendar className="mr-2" size={16} />
                      Agendar Agora
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Cal.com Integration Info */}
        <div className="bg-cream rounded-lg p-8 shadow-elegant animate-fade-in-up animate-delay-300">
          <div className="text-center max-w-3xl mx-auto">
            <h3 className="font-serif text-2xl font-bold text-charcoal mb-4">
              Como Funciona o Agendamento
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-gold font-bold text-lg">1</span>
                </div>
                <h4 className="font-semibold text-charcoal mb-2">Escolha o Tipo</h4>
                <p className="text-sm text-muted-foreground">
                  Selecione o formato que mais combina com você
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-gold font-bold text-lg">2</span>
                </div>
                <h4 className="font-semibold text-charcoal mb-2">Agende Online</h4>
                <p className="text-sm text-muted-foreground">
                  Use nosso sistema integrado com Cal.com
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-gold font-bold text-lg">3</span>
                </div>
                <h4 className="font-semibold text-charcoal mb-2">Nos Encontramos</h4>
                <p className="text-sm text-muted-foreground">
                  Receba confirmação e detalhes por email
                </p>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-warm-gray">
              <p className="text-muted-foreground mb-4">
                📅 <strong>Disponibilidade:</strong> Terças e quintas, 14h às 18h | Sábados, 9h às 12h
              </p>
              <p className="text-sm text-muted-foreground">
                Sistema de agendamento integrado com Cal.com - Clique em qualquer botão para agendar!
              </p>
            </div>
          </div>
        </div>

        {/* Cal.com Modal */}
        {selectedMeeting && (
          <CalcomModal
            isOpen={modalOpen}
            onClose={() => setModalOpen(false)}
            calUrl={selectedMeeting.calUrl}
            title={selectedMeeting.title}
          />
        )}
      </div>
    </section>
  );
};

export default Scheduling;