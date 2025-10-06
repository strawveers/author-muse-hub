import { UseFormRegister, FieldErrors, Control, useFieldArray } from "react-hook-form";
import { ProposalFormData, PRODUCTS } from "@/types/proposal";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Package, Plus, Trash2 } from "lucide-react";
import { Controller } from "react-hook-form";

interface ProductSelectionSectionProps {
  register: UseFormRegister<ProposalFormData>;
  errors: FieldErrors<ProposalFormData>;
  control: Control<ProposalFormData>;
}

const ProductSelectionSection = ({ register, errors, control }: ProductSelectionSectionProps) => {
  const { fields, append, remove } = useFieldArray({
    control,
    name: "products"
  });

  const calculateSubtotal = (productId: string, quantity: number) => {
    const product = PRODUCTS.find(p => p.id === productId);
    if (!product) return 0;
    return product.price * quantity;
  };

  const calculateTotalSubtotal = () => {
    return fields.reduce((total, field, index) => {
      const productId = field.productId;
      const quantity = field.quantity;
      return total + calculateSubtotal(productId, quantity);
    }, 0);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2 mb-4">
        <Package className="text-gold" size={24} />
        <h3 className="text-xl font-serif font-semibold text-charcoal">
          Seleção de Produtos
        </h3>
      </div>

      <div className="space-y-4">
        {fields.map((field, index) => {
          const selectedProductId = field.productId;
          const selectedProduct = PRODUCTS.find(p => p.id === selectedProductId);
          const quantity = field.quantity;
          const lineTotal = selectedProduct ? selectedProduct.price * quantity : 0;

          return (
            <div key={field.id} className="p-4 border border-border rounded-lg bg-background/50">
              <div className="flex flex-col md:flex-row gap-4 items-end">
                <div className="flex-1 space-y-2">
                  <Label htmlFor={`product-${index}`}>
                    Produto {index + 1} <span className="text-destructive">*</span>
                  </Label>
                  <Controller
                    name={`products.${index}.productId`}
                    control={control}
                    render={({ field }) => (
                      <Select onValueChange={field.onChange} value={field.value}>
                        <SelectTrigger id={`product-${index}`}>
                          <SelectValue placeholder="Selecione um livro" />
                        </SelectTrigger>
                        <SelectContent>
                          {PRODUCTS.map((product) => (
                            <SelectItem key={product.id} value={product.id}>
                              {product.name} - {product.price.toFixed(2)} {product.currency}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    )}
                  />
                  {errors.products?.[index]?.productId && (
                    <p className="text-sm text-destructive">
                      {errors.products[index]?.productId?.message}
                    </p>
                  )}
                </div>

                <div className="w-full md:w-32 space-y-2">
                  <Label htmlFor={`quantity-${index}`}>Quantidade</Label>
                  <Input
                    id={`quantity-${index}`}
                    type="number"
                    min="1"
                    max="999"
                    {...register(`products.${index}.quantity`, { valueAsNumber: true })}
                    className={errors.products?.[index]?.quantity ? "border-destructive" : ""}
                  />
                  {errors.products?.[index]?.quantity && (
                    <p className="text-sm text-destructive">
                      {errors.products[index]?.quantity?.message}
                    </p>
                  )}
                </div>

                <div className="w-full md:w-32 space-y-2">
                  <Label>Total</Label>
                  <div className="h-10 px-3 py-2 border border-border rounded-md bg-muted text-center font-semibold">
                    {lineTotal.toFixed(2)} €
                  </div>
                </div>

                {fields.length > 1 && (
                  <Button
                    type="button"
                    variant="outline"
                    size="icon"
                    onClick={() => remove(index)}
                    className="border-destructive text-destructive hover:bg-destructive hover:text-destructive-foreground"
                  >
                    <Trash2 size={18} />
                  </Button>
                )}
              </div>
            </div>
          );
        })}

        {errors.products && (
          <p className="text-sm text-destructive">{errors.products.message}</p>
        )}

        <Button
          type="button"
          variant="outline"
          onClick={() => append({ productId: "", quantity: 1 })}
          className="w-full border-gold text-gold hover:bg-gold hover:text-charcoal"
        >
          <Plus size={18} className="mr-2" />
          Adicionar outro produto
        </Button>

        <div className="pt-4 border-t border-border">
          <div className="flex justify-between items-center text-lg font-semibold">
            <span className="text-foreground">Subtotal Estimado:</span>
            <span className="text-gold text-2xl">
              {calculateTotalSubtotal().toFixed(2)} €
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductSelectionSection;
