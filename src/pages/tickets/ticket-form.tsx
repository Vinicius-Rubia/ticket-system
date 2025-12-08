import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

export function TicketForm({ className }: React.ComponentProps<"form">) {
  return (
    <form className={cn("space-y-6 grid", className)}>
      <div className="space-y-2">
        <Label>E-mail do cliente</Label>
        <Input type="email" placeholder="Digite o e-mail" />
      </div>
      <div className="space-y-2">
        <Label>Tipo de ticket solicitado</Label>
        <Input placeholder="Selecione o tipo" />
      </div>
      <div className="space-y-2">
        <Label>Status de prioridade</Label>
        <Input placeholder="Selecone o status" />
      </div>
      <div className="space-y-2">
        <Label>Mensagem do Ticket</Label>
        <Textarea
          placeholder="Digite o problema aqui..."
          className="resize-none max-h-24"
        />
      </div>
      <Button size="lg">Enviar</Button>
    </form>
  );
}
