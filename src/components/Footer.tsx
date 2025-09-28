import { Heart, Instagram, Facebook, Twitter, Mail, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-charcoal text-cream py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div className="lg:col-span-2">
            <h3 className="font-serif text-2xl font-bold text-gold mb-4">
              Isabella Romano
            </h3>
            <p className="text-cream/80 leading-relaxed mb-6 max-w-md">
              Autora bestseller apaixonada por criar histórias que tocam o coração. 
              Cada livro é uma jornada emocional que conecta almas através do amor.
            </p>
            <div className="flex items-center gap-2 text-cream/60">
              <MapPin size={16} />
              <span className="text-sm">São Paulo, Brasil</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-semibold text-gold mb-4">
              Links Rápidos
            </h4>
            <ul className="space-y-2">
              {[
                { name: "Meus Livros", href: "#books" },
                { name: "FAQ", href: "#faq" },
                { name: "Chatbot", href: "#chatbot" },
                { name: "Agendamento", href: "#contact" },
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-cream/80 hover:text-gold transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="font-serif text-lg font-semibold text-gold mb-4">
              Redes Sociais
            </h4>
            <div className="space-y-3 mb-6">
              <a
                href="mailto:contato@isabellaromano.com"
                className="flex items-center gap-3 text-cream/80 hover:text-gold transition-colors duration-300 text-sm"
              >
                <Mail size={16} />
                contato@isabellaromano.com
              </a>
            </div>
            
            <div className="flex items-center gap-4">
              {[
                { icon: Instagram, href: "#", label: "Instagram" },
                { icon: Facebook, href: "#", label: "Facebook" },
                { icon: Twitter, href: "#", label: "Twitter" },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 bg-cream/10 hover:bg-gold/20 rounded-full flex items-center justify-center text-cream hover:text-gold transition-all duration-300 hover:scale-110"
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="border-t border-cream/20 mt-12 pt-8">
          <div className="text-center max-w-2xl mx-auto">
            <h4 className="font-serif text-xl font-semibold text-gold mb-3">
              Fique por dentro das novidades
            </h4>
            <p className="text-cream/80 mb-6 text-sm">
              Receba em primeira mão informações sobre lançamentos, eventos e conteúdo exclusivo.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Seu melhor email"
                className="flex-1 px-4 py-2 rounded-md bg-cream/10 border border-cream/20 text-cream placeholder-cream/50 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold"
              />
              <button className="px-6 py-2 bg-gold text-charcoal font-semibold rounded-md hover:bg-gold/90 transition-colors duration-300">
                Inscrever-se
              </button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-cream/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-cream/60 text-sm">
              © {currentYear} Isabella Romano. Todos os direitos reservados.
            </p>
            <div className="flex items-center gap-1 text-cream/60 text-sm">
              <span>Feito com</span>
              <Heart className="text-gold fill-gold" size={16} />
              <span>para conectar corações através da literatura</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;