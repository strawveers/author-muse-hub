import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      id: "item-1",
      question: "Como posso comprar seus livros?",
      answer: "Meus livros estão disponíveis em todas as principais livrarias online como Amazon, Saraiva, e Submarino. Também podem ser encontrados em livrarias físicas por todo o Brasil. Para facilitar, sempre coloco links diretos nas páginas de cada livro aqui no site."
    },
    {
      id: "item-2", 
      question: "Você tem eventos de lançamento e sessões de autógrafos?",
      answer: "Sim! Regularmente participo de feiras literárias, eventos em livrarias e sessões de autógrafos. Todos os eventos são divulgados aqui no site e nas minhas redes sociais. Você também pode agendar um meet & greet personalizado através da seção de agendamento."
    },
    {
      id: "item-3",
      question: "Seus livros fazem parte de uma série?",
      answer: "Alguns sim! 'Promessa Eterna' é o primeiro livro de uma trilogia. Cada livro pode ser lido independentemente, mas juntos formam uma saga emocionante. 'Coração em Chamas' e 'Segredos do Destino' são romances independentes."
    },
    {
      id: "item-4",
      question: "Como posso entrar em contato com você?",
      answer: "Você pode me encontrar nas redes sociais @isabella_romano ou usar o chatbot aqui do site para tirar dúvidas rápidas. Para questões mais específicas, use o formulário de contato ou agende uma conversa comigo através do sistema de agendamento."
    },
    {
      id: "item-5",
      question: "Você aceita sugestões de temas para novos livros?",
      answer: "Adoro ouvir as ideias dos meus leitores! Embora nem sempre seja possível incorporar todas as sugestões, elas são uma grande fonte de inspiração. Pode me enviar suas ideias através das redes sociais ou do formulário de contato."
    },
    {
      id: "item-6",
      question: "Há planos para adaptações dos seus livros?",
      answer: "Estamos em negociações para possíveis adaptações de 'Segredos do Destino' para outras mídias. Ainda não posso dar detalhes, mas assim que tiver novidades concretas, vocês serão os primeiros a saber!"
    },
    {
      id: "item-7",
      question: "Como funciona a newsletter?",
      answer: "Na newsletter você recebe em primeira mão informações sobre lançamentos, eventos, trechos exclusivos dos próximos livros e promoções especiais. É enviada mensalmente e você pode se descadastrar a qualquer momento."
    },
    {
      id: "item-8",
      question: "Você dá dicas para escritores iniciantes?",
      answer: "Claro! Adoro ajudar novos talentos. Regularmente posto dicas nas redes sociais e, ocasionalmente, faço lives sobre escrita criativa. Se você tem dúvidas específicas, pode me procurar através dos canais de contato."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal mb-6">
            Perguntas Frequentes
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-6"></div>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Aqui estão as respostas para as perguntas mais comuns dos meus leitores. 
            Não encontrou o que procurava? Use o chatbot ou entre em contato!
          </p>
        </div>

        <div className="animate-fade-in-up">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={faq.id} 
                value={faq.id}
                className={`bg-cream border-none rounded-lg shadow-elegant hover:shadow-gold transition-all duration-300 animate-fade-in-up`}
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <AccordionTrigger className="px-6 py-4 text-left font-serif text-lg md:text-xl font-semibold text-charcoal hover:text-gold transition-colors duration-300 hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6 text-muted-foreground leading-relaxed text-base md:text-lg">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-6">
            Ainda tem dúvidas? Converse comigo!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#chatbot"
              className="inline-flex items-center justify-center bg-gold text-charcoal hover:bg-gold/90 font-semibold px-6 py-3 rounded-md transition-all duration-300 hover:scale-105"
            >
              Usar Chatbot
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center border border-gold text-gold hover:bg-gold hover:text-charcoal font-semibold px-6 py-3 rounded-md transition-all duration-300 hover:scale-105"
            >
              Enviar Mensagem
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;