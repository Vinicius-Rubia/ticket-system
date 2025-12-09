import { Button } from "@/components/ui/button";
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty";
import { Plus, Ticket } from "lucide-react";
import type { MouseEvent } from "react";

interface EmptyTicketProps {
  onNewTicket: (e: MouseEvent<HTMLButtonElement>) => void;
}

export function EmptyTicket({ onNewTicket }: EmptyTicketProps) {
  return (
    <Empty className="border border-dashed">
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <Ticket />
        </EmptyMedia>
        <EmptyTitle>Nenhum ticket encontrado</EmptyTitle>
        <EmptyDescription>
          No momento não existe nenhum ticket.
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <Button size="sm" onClick={onNewTicket}>
          <Plus />
          Novo ticket
        </Button>
      </EmptyContent>
    </Empty>
  );
}
