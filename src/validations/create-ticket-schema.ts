import { ETicketType } from "@/enums/ticket-type";
import z from "zod";

export const CreateTicketSchema = z.object({
  ticketType: z.enum(ETicketType, "Tipo inválido."),
  ticketTitle: z.string().min(1, "O título é obrigatório."),
  ticketMessage: z
    .string()
    .min(20, "A mensagem precisa ter no mínimo 20 caracteres.")
    .max(500, "A mensagem precisa ter no máximo 500 caracteres."),
});
