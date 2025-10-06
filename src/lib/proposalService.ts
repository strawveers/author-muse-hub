import { v4 as uuidv4 } from 'uuid';
import { ProposalFormData, WebhookPayload } from '@/types/proposal';

const WEBHOOK_URL = 'https://hook.eu2.make.com/xlr8g13wv6eh1vu0bzvb0hxwsyfsnfcc';

export const generateWebhookId = (): string => {
  return `proposal-${uuidv4()}`;
};

export const sendProposalToMake = async (data: ProposalFormData): Promise<any> => {
  const payload: WebhookPayload = {
    webhook_id: generateWebhookId(),
    customer_name: data.customerName,
    customer_email: data.customerEmail,
    customer_company: data.customerCompany,
    customer_phone: data.customerPhone || "",
    product_ids: data.products.map(p => p.productId),
    quantities: data.products.map(p => p.quantity),
    proposal_date: data.proposalDate,
    notes: data.notes || "",
    timestamp: new Date().toISOString()
  };

  const response = await fetch(WEBHOOK_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload)
  });

  if (!response.ok) {
    throw new Error(`Erro ao enviar proposta: ${response.status}`);
  }

  return response.json();
};
