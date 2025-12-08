import { ETicketType } from "@/enums/ticket-type";
import z from "zod";

export const CreateTicketSchema = z.object({
  ticketType: z.enum(ETicketType, "Tipo inválido."),
  ticketTitle: z.string().trim().min(1, "O título é obrigatório."),
  ticketMessage: z
    .string()
    .trim()
    .min(20, "A mensagem precisa ter no mínimo 20 caracteres.")
    .max(500, "A mensagem precisa ter no máximo 500 caracteres."),
});
