import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Books from "@/components/Books";
import ProposalForm from "@/components/ProposalForm";
import Scheduling from "@/components/Scheduling";
import Footer from "@/components/Footer";
import ChatWidget from "@/components/ChatWidget";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Books />
        <ProposalForm />
        <Scheduling />
      </main>
      <Footer />
      <ChatWidget />
    </div>
  );
};

export default Index;
