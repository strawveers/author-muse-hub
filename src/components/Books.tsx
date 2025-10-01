import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, Star } from "lucide-react";
import bookCover1 from "@/assets/book-cover-1.jpg";
import bookCover2 from "@/assets/book-cover-2.jpg";
import bookCover3 from "@/assets/book-cover-3.jpg";

const Books = () => {
  const books = [
    {
      id: 1,
      title: "Coração em Chamas",
      description: "Uma paixão que desafia todas as convenções. Elena, uma arquiteta independente, encontra o amor quando menos espera em um projeto que mudará sua vida para sempre.",
      cover: bookCover1,
      rating: 4.8,
      reviews: 1247,
      price: "29,90 €",
      status: "Lançamento",
      buyLink: "#"
    },
    {
      id: 2,
      title: "Segredos do Destino",
      description: "Um romance que atravessa gerações. Quando Sofia herda uma casa misteriosa, descobre cartas de amor que revelam segredos de família há muito esquecidos.",
      cover: bookCover2,
      rating: 4.9,
      reviews: 2156,
      price: "R$ 27,90",
      status: "Bestseller",
      buyLink: "#"
    },
    {
      id: 3,
      title: "Promessa Eterna",
      description: "O primeiro livro da série que conquistou o Brasil. Uma história de segundas chances e de como o amor verdadeiro sempre encontra um caminho.",
      cover: bookCover3,
      rating: 4.7,
      reviews: 3421,
      price: "R$ 24,90",
      status: "Série",
      buyLink: "#"
    }
  ];

  return (
    <section id="books" className="py-20 bg-cream">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal mb-6">
            Meus Livros
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-6"></div>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Histórias que celebram o amor em todas as suas formas. Cada livro é uma jornada 
            emocional que conecta corações e desperta sentimentos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {books.map((book, index) => (
            <Card 
              key={book.id} 
              className={`group bg-background border-none shadow-elegant hover:shadow-gold transition-all duration-500 hover:scale-105 animate-fade-in-up`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="p-0">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={book.cover}
                    alt={`Capa do livro ${book.title}`}
                    className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      book.status === 'Lançamento' ? 'bg-gold text-charcoal' :
                      book.status === 'Bestseller' ? 'bg-charcoal text-gold' :
                      'bg-warm-gray text-charcoal'
                    }`}>
                      {book.status}
                    </span>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="p-6">
                <CardTitle className="font-serif text-xl md:text-2xl font-bold text-charcoal mb-3 group-hover:text-gold transition-colors duration-300">
                  {book.title}
                </CardTitle>
                
                <CardDescription className="text-muted-foreground leading-relaxed mb-4 line-clamp-3">
                  {book.description}
                </CardDescription>

                <div className="flex items-center gap-2 mb-4">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className={`${
                          i < Math.floor(book.rating) 
                            ? "text-gold fill-gold" 
                            : "text-warm-gray"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm font-semibold text-charcoal">{book.rating}</span>
                  <span className="text-sm text-muted-foreground">({book.reviews} avaliações)</span>
                </div>

                <div className="text-2xl font-bold text-gold mb-4">
                  {book.price}
                </div>
              </CardContent>

              <CardFooter className="p-6 pt-0 space-y-3">
                <Button 
                  className="w-full bg-gold text-charcoal hover:bg-gold/90 font-semibold transition-all duration-300 hover:scale-105"
                  onClick={() => window.open(book.buyLink, '_blank')}
                >
                  Comprar Agora
                  <ExternalLink size={16} className="ml-2" />
                </Button>
                
                <Button 
                  variant="outline" 
                  className="w-full border-gold text-gold hover:bg-gold hover:text-charcoal transition-all duration-300"
                >
                  Ler Prévia
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-6">
            Quer saber quando novos livros serão lançados?
          </p>
          <Button 
            variant="outline"
            className="border-gold text-gold hover:bg-gold hover:text-charcoal font-semibold px-8 py-3 transition-all duration-300 hover:scale-105"
          >
            Cadastrar na Newsletter
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Books;