import { SubHeader } from "@/components/sub-header";
import { Button } from "@/components/ui/button";
import { TICKETS_DATA } from "@/data";
import { Plus } from "lucide-react";
import { Activity, useState } from "react";
import { CreateQuickTicket } from "./create-quick-ticket";
import { TicketCard } from "./ticket-card";

export function TicketsPage() {
  const [openQuickTicket, setOpenQuickTicket] = useState(false);

  const handleOpenQuickTicket = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.blur();

    if (openQuickTicket) return;
    setOpenQuickTicket(true);
  };

  return (
    <div>
      <SubHeader title="Tickets">
        <Button onClick={handleOpenQuickTicket}>
          <Plus /> Novo Ticket
        </Button>
      </SubHeader>

      <section className="flex items-start gap-6">
        <main className="flex-1 space-y-6 sm:bg-white rounded sm:px-5 sm:py-6">
          {TICKETS_DATA.map((ticket) => (
            <TicketCard key={ticket.ticketId} ticket={ticket} />
          ))}
        </main>

        <Activity mode={openQuickTicket ? "visible" : "hidden"}>
          <CreateQuickTicket
            open={openQuickTicket}
            setOpen={setOpenQuickTicket}
          />
        </Activity>
      </section>
    </div>
  );
}
