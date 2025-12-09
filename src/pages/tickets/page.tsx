import { SubHeader } from "@/components/sub-header";
import { Button } from "@/components/ui/button";
import { TICKETS_DATA } from "@/data";
import type { TicketStatusValue } from "@/enums/ticket-status";
import { Plus } from "lucide-react";
import { Activity, useState } from "react";
import { CreateQuickTicket } from "./create-quick-ticket";
import { EmptyTicket } from "./empty-ticket";
import { FilterFields } from "./filter-fields";
import { TicketCard } from "./ticket-card";

export function TicketsPage() {
  const [openQuickTicket, setOpenQuickTicket] = useState(false);
  const [ticketQuery, setTicketQuery] = useState("");
  const [ticketTypeSelect, setTicketTypeSelect] = useState<
    TicketStatusValue | "all"
  >("all");

  const handleOpenQuickTicket = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.blur();

    if (openQuickTicket) return;
    setOpenQuickTicket(true);
  };

  const filteredTickets = () => {
    const query = ticketQuery.toLowerCase();

    return TICKETS_DATA.filter((ticket) => {
      const matchSearch =
        ticket.title.toLowerCase().includes(query) ||
        ticket.ticketId.toLowerCase().includes(query);

      const matchType =
        ticketTypeSelect === "all" ||
        ticket.status === Number(ticketTypeSelect);

      return matchSearch && matchType;
    });
  };

  return (
    <div>
      <SubHeader title="Tickets">
        <Button onClick={handleOpenQuickTicket}>
          <Plus /> Novo Ticket
        </Button>
      </SubHeader>

      <section className="flex items-start gap-6">
        <main className="flex-1 space-y-6 sm:bg-accent sm:dark:bg-accent/30 rounded sm:px-5 sm:py-6">
          <FilterFields
            setQuery={setTicketQuery}
            query={ticketQuery}
            setTypeSelect={setTicketTypeSelect}
            typeSelect={ticketTypeSelect}
          />
          {filteredTickets().length > 0 ? (
            filteredTickets().map((ticket) => (
              <TicketCard key={ticket.ticketId} ticket={ticket} />
            ))
          ) : (
            <EmptyTicket onNewTicket={handleOpenQuickTicket} />
          )}
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
