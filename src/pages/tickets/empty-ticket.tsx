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
import { Link } from "react-router-dom";

export function EmptyTicket() {
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
        <Button size="sm" asChild>
          <Link to="/tickets/new">
            <Plus />
            Novo ticket
          </Link>
        </Button>
      </EmptyContent>
    </Empty>
  );
}
