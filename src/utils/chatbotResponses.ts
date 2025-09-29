interface ResponsePattern {
  keywords: string[];
  responses: string[];
}

const responsePatterns: ResponsePattern[] = [
  {
    keywords: ['próximo livro', 'novo livro', 'lançamento', 'quando sai'],
    responses: [
      'Estou trabalhando no segundo livro da trilogia "Promessa Eterna"! A continuação promete mergulhar ainda mais fundo na história dos personagens que você conheceu no primeiro livro. Fique de olho nas redes sociais para atualizações sobre o lançamento! 📚✨',
    ],
  },
  {
    keywords: ['promessa eterna', 'trilogia', 'primeiro livro'],
    responses: [
      '"Promessa Eterna" é o primeiro livro da minha trilogia de romance contemporâneo. A história acompanha personagens complexos lidando com amor, perda e renovação. É uma jornada emocional que explora as promessas que fazemos e como elas moldam nosso destino. Você já leu? 💫',
    ],
  },
  {
    keywords: ['sombras do passado', 'segundo livro'],
    responses: [
      '"Sombras do Passado" é um romance intenso sobre como nossos segredos e arrependimentos nos assombram. É uma história de redenção, perdão e a coragem de enfrentar o que deixamos para trás. Um dos meus livros mais pessoais! 🌙',
    ],
  },
  {
    keywords: ['luz da esperança', 'terceiro livro'],
    responses: [
      '"Luz da Esperança" é uma história sobre recomeços e a força que encontramos nos momentos mais difíceis. Escrevi este livro para mostrar que, mesmo na escuridão, sempre há uma luz nos guiando. É uma leitura inspiradora e cheia de emoção! ☀️',
    ],
  },
  {
    keywords: ['autógrafo', 'sessão', 'encontro', 'evento', 'meet'],
    responses: [
      'Que legal que você quer me conhecer pessoalmente! Faço sessões de autógrafos regularmente. Você pode agendar através da seção "Agende uma Sessão" aqui no site. Também ofereço meet & greet e conversas virtuais. Será um prazer te conhecer! 🤗',
    ],
  },
  {
    keywords: ['sobre você', 'quem é', 'autora', 'isabella'],
    responses: [
      'Sou Isabella Romano, autora de romances contemporâneos. Escrevo sobre amor, drama e as complexidades das relações humanas. Minha missão é criar histórias que toquem o coração dos leitores e os façam refletir sobre suas próprias vidas. Cada livro é um pedaço do meu coração! ❤️',
    ],
  },
  {
    keywords: ['inspiração', 'como escreve', 'processo', 'criativo'],
    responses: [
      'Minha inspiração vem das experiências reais, das emoções humanas e das histórias que ouço ao meu redor. Escrevo principalmente pela manhã, com muito café! ☕ Gosto de criar personagens complexos e situações que reflitam a realidade, mesmo em contextos dramáticos.',
    ],
  },
  {
    keywords: ['comprar', 'onde comprar', 'adquirir', 'livro físico', 'ebook'],
    responses: [
      'Meus livros estão disponíveis em formato físico e digital nas principais livrarias online e físicas do Brasil. Você encontra links para compra na seção "Meus Livros" aqui no site. Se preferir, também trabalho com vendas autografadas - é só entrar em contato! 📖',
    ],
  },
  {
    keywords: ['contato', 'email', 'falar com', 'mensagem'],
    responses: [
      'Adoraria conversar com você! Você pode me enviar uma mensagem através do formulário de contato no site ou através das minhas redes sociais. Sempre respondo mensagens dos leitores com muito carinho! 💌',
    ],
  },
  {
    keywords: ['resenha', 'clube do livro', 'parceria', 'divulgação'],
    responses: [
      'Fico muito feliz com o interesse! Adoro trabalhar com blogueiros, bookstagrammers e clubes de leitura. Me envie uma mensagem detalhando sua proposta e vamos conversar sobre parcerias e envio de exemplares para resenha! 📚✨',
    ],
  },
];

const defaultResponses = [
  'Essa é uma ótima pergunta! Para informações mais específicas, recomendo entrar em contato diretamente através do formulário no site. Ficarei feliz em ajudar! 😊',
  'Obrigada pelo interesse! Para te responder melhor, sugiro que me envie uma mensagem através do formulário de contato. Assim posso dar uma resposta mais detalhada! 💫',
  'Que legal você querer saber mais! Entre em contato comigo através do site para conversarmos melhor sobre isso. Estou sempre disponível para meus leitores! 🌟',
];

const greetings = ['olá', 'oi', 'ola', 'hey', 'bom dia', 'boa tarde', 'boa noite'];

export const generateResponse = (userMessage: string): string => {
  const normalizedMessage = userMessage.toLowerCase().trim();

  // Check for greetings
  if (greetings.some(greeting => normalizedMessage.startsWith(greeting))) {
    return 'Olá! Que prazer ter você aqui! Sou a assistente virtual da Isabella Romano. Posso te ajudar com informações sobre os livros, próximos lançamentos, eventos e muito mais. O que você gostaria de saber? 😊';
  }

  // Check for thanks
  if (normalizedMessage.includes('obrigad') || normalizedMessage.includes('valeu')) {
    return 'Por nada! Estou aqui para ajudar sempre que precisar. Se tiver mais alguma dúvida, é só perguntar! 💕';
  }

  // Find matching pattern
  for (const pattern of responsePatterns) {
    if (pattern.keywords.some(keyword => normalizedMessage.includes(keyword))) {
      return pattern.responses[Math.floor(Math.random() * pattern.responses.length)];
    }
  }

  // Default response
  return defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
};
