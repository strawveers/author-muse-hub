import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-cream">
      <div className="text-center max-w-md mx-auto px-4">
        <h1 className="font-serif text-6xl font-bold text-charcoal mb-4">404</h1>
        <h2 className="font-serif text-2xl font-semibold text-gold mb-4">Página não encontrada</h2>
        <p className="text-muted-foreground mb-8 leading-relaxed">
          Ops! A página que você está procurando não existe ou foi movida.
        </p>
        <Button 
          onClick={() => window.location.href = "/"}
          className="bg-gold text-charcoal hover:bg-gold/90 font-semibold px-8 py-3 shadow-gold hover:shadow-lg transition-all duration-300 hover:scale-105"
        >
          Voltar ao Início
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
