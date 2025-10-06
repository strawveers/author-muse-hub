import { UseFormRegister, FieldErrors } from "react-hook-form";
import { ProposalFormData } from "@/types/proposal";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { User, Mail, Building2, Phone } from "lucide-react";

interface CustomerInfoSectionProps {
  register: UseFormRegister<ProposalFormData>;
  errors: FieldErrors<ProposalFormData>;
}

const CustomerInfoSection = ({ register, errors }: CustomerInfoSectionProps) => {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2 mb-4">
        <User className="text-gold" size={24} />
        <h3 className="text-xl font-serif font-semibold text-charcoal">
          Informações do Cliente
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="customerName" className="text-foreground">
            Nome Completo <span className="text-destructive">*</span>
          </Label>
          <Input
            id="customerName"
            placeholder="Ex: João Silva"
            {...register("customerName")}
            className={errors.customerName ? "border-destructive" : ""}
          />
          {errors.customerName && (
            <p className="text-sm text-destructive">{errors.customerName.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="customerEmail" className="text-foreground">
            Email <span className="text-destructive">*</span>
          </Label>
          <Input
            id="customerEmail"
            type="email"
            placeholder="Ex: joao@empresa.pt"
            {...register("customerEmail")}
            className={errors.customerEmail ? "border-destructive" : ""}
          />
          {errors.customerEmail && (
            <p className="text-sm text-destructive">{errors.customerEmail.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="customerCompany" className="text-foreground">
            Empresa <span className="text-destructive">*</span>
          </Label>
          <Input
            id="customerCompany"
            placeholder="Ex: Empresa XPTO Lda"
            {...register("customerCompany")}
            className={errors.customerCompany ? "border-destructive" : ""}
          />
          {errors.customerCompany && (
            <p className="text-sm text-destructive">{errors.customerCompany.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="customerPhone" className="text-foreground">
            Telefone <span className="text-muted-foreground">(opcional)</span>
          </Label>
          <Input
            id="customerPhone"
            type="tel"
            placeholder="Ex: +351 912345678"
            {...register("customerPhone")}
            className={errors.customerPhone ? "border-destructive" : ""}
          />
          {errors.customerPhone && (
            <p className="text-sm text-destructive">{errors.customerPhone.message}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default CustomerInfoSection;
