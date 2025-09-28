import { Button } from "@/components/ui/button";
import authorPhoto from "@/assets/author-photo.jpg";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center gradient-elegant py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Author Photo */}
          <div className="order-2 lg:order-1 flex justify-center lg:justify-start">
            <div className="relative animate-fade-in-up">
              <div className="w-80 h-80 md:w-96 md:h-96 lg:w-[500px] lg:h-[500px] relative overflow-hidden rounded-full shadow-gold">
                <img
                  src={authorPhoto}
                  alt="Isabella Romano - Autora"
                  className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gold/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gold/10 rounded-full blur-2xl"></div>
            </div>
          </div>

          {/* Bio and Content */}
          <div className="order-1 lg:order-2 text-center lg:text-left">
            <div className="animate-fade-in-up animate-delay-200">
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-charcoal mb-6 leading-tight">
                Isabella
                <span className="block text-gold">Romano</span>
              </h1>
              
              <div className="w-24 h-1 bg-gold mx-auto lg:mx-0 mb-8"></div>
              
              <div className="prose-author max-w-2xl mx-auto lg:mx-0">
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-6">
                  Autora bestseller de romances contemporâneos que tocam o coração. 
                  Com mais de <span className="text-gold font-semibold">500 mil livros vendidos</span>, 
                  Isabella cria histórias que exploram o amor em suas mais diversas formas.
                </p>
                
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-8">
                  Formada em Literatura pela USP, encontrou na escrita sua verdadeira paixão. 
                  Seus romances já conquistaram leitores em todo o Brasil e estão sendo traduzidos 
                  para outros idiomas.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button
                  onClick={() => scrollToSection("books")}
                  className="bg-gold text-charcoal hover:bg-gold/90 font-semibold px-8 py-6 text-lg shadow-gold hover:shadow-lg transition-all duration-300 hover:scale-105"
                >
                  Descobrir Livros
                </Button>
                
                <Button
                  variant="outline"
                  onClick={() => scrollToSection("contact")}
                  className="border-gold text-gold hover:bg-gold hover:text-charcoal font-semibold px-8 py-6 text-lg transition-all duration-300 hover:scale-105"
                >
                  Falar Comigo
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;