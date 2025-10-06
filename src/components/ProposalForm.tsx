import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { ProposalFormData } from "@/types/proposal";
import { sendProposalToMake } from "@/lib/proposalService";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { toast } from "@/hooks/use-toast";
import CustomerInfoSection from "@/components/ProposalForm/CustomerInfoSection";
import ProductSelectionSection from "@/components/ProposalForm/ProductSelectionSection";
import { Loader2, Send, Edit, Mail, CheckCircle, FileText } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const proposalSchema = z.object({
  customerName: z.string()
    .min(3, "Nome deve ter pelo menos 3 caracteres")
    .max(100, "Nome muito longo")
    .trim(),
  customerEmail: z.string()
    .email("Email inválido")
    .max(255, "Email muito longo")
    .trim(),
  customerCompany: z.string()
    .min(2, "Nome da empresa é obrigatório")
    .max(100, "Nome da empresa muito longo")
    .trim(),
  customerPhone: z.string()
    .regex(/^(\+351)?[0-9]{9}$/, "Formato: +351 912345678 ou 912345678")
    .optional()
    .or(z.literal("")),
  products: z.array(z.object({
    productId: z.string().min(1, "Selecione um produto"),
    quantity: z.number()
      .int("Quantidade deve ser um número inteiro")
      .min(1, "Quantidade mínima: 1")
      .max(999, "Quantidade máxima: 999")
  })).min(1, "Adicione pelo menos um produto"),
  notes: z.string()
    .max(1000, "Notas muito longas (máximo 1000 caracteres)")
    .optional(),
  proposalDate: z.string()
});

const ProposalForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors }
  } = useForm<ProposalFormData>({
    resolver: zodResolver(proposalSchema),
    defaultValues: {
      customerName: "",
      customerEmail: "",
      customerCompany: "",
      customerPhone: "",
      products: [{ productId: "", quantity: 1 }],
      notes: "",
      proposalDate: new Date().toISOString().split('T')[0]
    }
  });

  const onSubmit = async (data: ProposalFormData) => {
    setIsSubmitting(true);

    try {
      await sendProposalToMake(data);
      
      toast({
        title: "✅ Proposta enviada com sucesso!",
        description: "Receberá o documento por email em breve.",
        duration: 5000,
      });

      // Limpar formulário após 2 segundos
      setTimeout(() => {
        reset({
          customerName: "",
          customerEmail: "",
          customerCompany: "",
          customerPhone: "",
          products: [{ productId: "", quantity: 1 }],
          notes: "",
          proposalDate: new Date().toISOString().split('T')[0]
        });
      }, 2000);
    } catch (error) {
      console.error("Erro ao enviar proposta:", error);
      toast({
        title: "❌ Erro ao enviar proposta",
        description: "Por favor, tente novamente ou entre em contato conosco.",
        variant: "destructive",
        duration: 5000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClearForm = () => {
    reset({
      customerName: "",
      customerEmail: "",
      customerCompany: "",
      customerPhone: "",
      products: [{ productId: "", quantity: 1 }],
      notes: "",
      proposalDate: new Date().toISOString().split('T')[0]
    });
  };

  return (
    <section id="proposal" className="py-20 bg-cream">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-charcoal mb-4">
            Pedido de Proposta
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Solicite uma proposta personalizada para os livros da Isabella Romano
          </p>
        </div>

        {/* Como Funciona */}
        <div className="mb-12 animate-fade-in-up animate-delay-100">
          <Card className="border-gold/20 shadow-elegant">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl font-serif text-charcoal">
                Como Funciona o Pedido?
              </CardTitle>
              <CardDescription className="text-base">
                Processo simples em 3 passos
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center space-y-3">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gold/10 mb-2">
                    <Edit className="text-gold" size={32} />
                  </div>
                  <h4 className="font-semibold text-lg text-charcoal">1. Preencher Formulário</h4>
                  <p className="text-sm text-muted-foreground">
                    Preencha com suas informações e selecione os livros desejados
                  </p>
                </div>
                <div className="text-center space-y-3">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gold/10 mb-2">
                    <Mail className="text-gold" size={32} />
                  </div>
                  <h4 className="font-semibold text-lg text-charcoal">2. Receber Proposta</h4>
                  <p className="text-sm text-muted-foreground">
                    Receba o PDF com cálculos de IVA por email
                  </p>
                </div>
                <div className="text-center space-y-3">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gold/10 mb-2">
                    <CheckCircle className="text-gold" size={32} />
                  </div>
                  <h4 className="font-semibold text-lg text-charcoal">3. Aprovar e Avançar</h4>
                  <p className="text-sm text-muted-foreground">
                    Aprove a proposta e finalize sua compra
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Formulário */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8 animate-fade-in-up animate-delay-200">
          {/* Informações do Cliente */}
          <Card className="shadow-elegant">
            <CardContent className="pt-6">
              <CustomerInfoSection register={register} errors={errors} />
            </CardContent>
          </Card>

          {/* Seleção de Produtos */}
          <Card className="shadow-elegant">
            <CardContent className="pt-6">
              <ProductSelectionSection register={register} errors={errors} control={control} />
            </CardContent>
          </Card>

          {/* Informações Adicionais */}
          <Card className="shadow-elegant">
            <CardContent className="pt-6">
              <div className="space-y-6">
                <div className="flex items-center gap-2 mb-4">
                  <FileText className="text-gold" size={24} />
                  <h3 className="text-xl font-serif font-semibold text-charcoal">
                    Informações Adicionais
                  </h3>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="notes" className="text-foreground">
                    Notas/Observações <span className="text-muted-foreground">(opcional)</span>
                  </Label>
                  <Textarea
                    id="notes"
                    placeholder="Ex: Gostaria da versão autografada, entrega expressa, etc."
                    rows={4}
                    {...register("notes")}
                    className={errors.notes ? "border-destructive" : ""}
                  />
                  {errors.notes && (
                    <p className="text-sm text-destructive">{errors.notes.message}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="proposalDate" className="text-foreground">
                    Data da Proposta
                  </Label>
                  <Input
                    id="proposalDate"
                    type="date"
                    {...register("proposalDate")}
                    className="w-full md:w-64"
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Botões de Ação */}
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Button
              type="button"
              variant="outline"
              size="lg"
              onClick={handleClearForm}
              disabled={isSubmitting}
              className="border-border hover:bg-muted"
            >
              Limpar Formulário
            </Button>
            <Button
              type="submit"
              size="lg"
              disabled={isSubmitting}
              className="bg-gold text-charcoal hover:bg-gold/90 shadow-gold"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 animate-spin" size={20} />
                  Enviando proposta...
                </>
              ) : (
                <>
                  <Send className="mr-2" size={20} />
                  Solicitar Proposta
                </>
              )}
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ProposalForm;
