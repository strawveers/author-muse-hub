export interface Product {
  id: string;
  name: string;
  price: number;
  currency: string;
}

export interface ProductLine {
  productId: string;
  quantity: number;
}

export interface ProposalFormData {
  customerName: string;
  customerEmail: string;
  customerCompany: string;
  customerPhone?: string;
  products: ProductLine[];
  notes?: string;
  proposalDate: string;
}

export interface WebhookPayload {
  webhook_id: string;
  customer_name: string;
  customer_email: string;
  customer_company: string;
  customer_phone: string;
  product_ids: string[];
  quantities: number[];
  proposal_date: string;
  notes: string;
  timestamp: string;
}

export const PRODUCTS: Product[] = [
  {
    id: "1",
    name: "Coração em Chamas",
    price: 29.90,
    currency: "€"
  },
  {
    id: "2",
    name: "Segredos do Destino",
    price: 27.90,
    currency: "€"
  },
  {
    id: "3",
    name: "Promessa Eterna",
    price: 24.90,
    currency: "€"
  }
];
