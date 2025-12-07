import { SubHeader } from "@/components/sub-header";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

export function TicketsPage() {
  return (
    <div>
      <SubHeader title="Tickets">
        <Button>
          <Plus /> Novo Ticket
        </Button>
      </SubHeader>
    </div>
  );
}
