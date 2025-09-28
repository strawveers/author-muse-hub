import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Books from "@/components/Books";
import FAQ from "@/components/FAQ";
import Chatbot from "@/components/Chatbot";
import Scheduling from "@/components/Scheduling";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Books />
        <FAQ />
        <Chatbot />
        <Scheduling />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
