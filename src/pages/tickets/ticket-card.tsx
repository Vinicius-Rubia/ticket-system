import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { TicketStatus } from "@/components/ui/ticket-status";
import type { Ticket } from "@/types/ticket";
import { format } from "date-fns";

interface TicketCardProps {
  ticket: Ticket;
}

export function TicketCard({ ticket }: TicketCardProps) {
  return (
    <div className="border bg-[#FEFEFE] rounded p-4 pb-2">
      <div className="flex items-center justify-between flex-wrap gap-4">
        <div className="flex items-center gap-2.5">
          <TicketStatus variant={ticket.status} />
          <h4 className="font-semibold">{ticket.ticketId}</h4>
        </div>
        <div className="flex items-center gap-2">
          <Avatar className="size-7">
            <AvatarImage src={ticket.userImageUrl} alt={ticket.username} />
            <AvatarFallback>{ticket.userInitials}</AvatarFallback>
          </Avatar>
          <span className="text-muted-foreground">{ticket.username}</span>
        </div>
      </div>
      <div className="my-4">
        <h3 className="text-sm font-medium mb-1">{ticket.title}</h3>
        <p className="text-xs font-medium text-muted-foreground line-clamp-4">
          {ticket.description}
        </p>
      </div>
      <Separator />
      <div className="flex items-center justify-between gap-4 mt-2">
        <span className="font-medium text-xs text-muted-foreground">
          Postado às {format(ticket.publishedAt, "HH:mm")}
        </span>
        <Button variant="link" size="sm">
          Abrir Ticket
        </Button>
      </div>
    </div>
  );
}
