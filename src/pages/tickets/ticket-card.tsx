import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { TicketStatus } from "@/components/ui/ticket-status";
import { IMAGES } from "@/constants/images";
import { TICKET_TYPE_SELECT } from "@/constants/ticket-config";
import type { Ticket } from "@/types/ticket";
import { format } from "date-fns";
import { MessageCircle } from "lucide-react";
import { Activity, useState } from "react";
import { Link } from "react-router-dom";
import { ReplyTicketCard } from "./reply-ticket-card";

interface TicketCardProps {
  ticket: Ticket;
}

export function TicketCard({ ticket }: TicketCardProps) {
  const [openReplies, setOpenReplies] = useState(false);

  const firtsThreeReplies =
    ticket.replies &&
    ticket.replies.filter((c) => !c.isCompanyResponse).slice(0, 3);

  const hasReplyCompany =
    ticket.replies && ticket.replies.some((c) => c.isCompanyResponse);

  const sortByCompanyResponses = ticket.replies?.sort(
    (a, b) => Number(b.isCompanyResponse) - Number(a.isCompanyResponse)
  );

  return (
    <div className="border bg-accent/80 dark:bg-input/30 rounded p-4 pb-2">
      <div className="flex items-center justify-between flex-wrap gap-4">
        <div className="flex items-center gap-2.5">
          <TicketStatus variant={ticket.status} />
          <h4 className="font-semibold">Ticket - {ticket.ticketId}</h4>
          <Badge variant="secondary">
            {TICKET_TYPE_SELECT[ticket.ticketType]}
          </Badge>
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
        <span className="font-medium text-xs text-muted-foreground">
          Postado às {format(ticket.createdAt, "HH:mm")}
        </span>
        <h3 className="text-sm font-medium my-1">{ticket.title}</h3>
        <p className="text-xs font-medium text-muted-foreground line-clamp-4">
          {ticket.description}
        </p>
      </div>
      <Separator />
      <div className="flex items-center justify-between gap-4 mt-2">
        <div className="flex items-center gap-2">
          <Button
            size="sm"
            variant="ghost"
            className="gap-1"
            disabled={!ticket.replies?.length}
            onClick={() => setOpenReplies(true)}
          >
            <MessageCircle />
            <span className="text-sm">
              {ticket.replies?.length ?? "Sem respostas"}
            </span>
          </Button>
          <Activity mode={firtsThreeReplies ? "visible" : "hidden"}>
            <div className="*:data-[slot=avatar]:size-6 *:data-[slot=avatar]:ring-secondary flex -space-x-2 *:data-[slot=avatar]:ring-2">
              {firtsThreeReplies?.map((c) => (
                <Avatar key={c.id}>
                  <AvatarImage src={c.userImageUrl} alt={c.username} />
                  <AvatarFallback>{c.userInitials}</AvatarFallback>
                </Avatar>
              ))}
            </div>
          </Activity>
          <Activity mode={hasReplyCompany ? "visible" : "hidden"}>
            <Separator className="w-2! bg-secondary-foreground/40" />
            <div className="size-8 shrink-0 bg-secondary dark:bg-black/40 rounded-full flex items-center justify-center p-1 border">
              <img src={IMAGES.SantanderSampleLogo} alt="Santander" />
            </div>
          </Activity>
        </div>
        <Button asChild variant="link" size="sm">
          <Link to={`/tickets/${ticket.ticketId}`}>Abrir Ticket</Link>
        </Button>
      </div>
      <Activity mode={ticket.replies && openReplies ? "visible" : "hidden"}>
        <Separator className="my-4" />
        <div className="space-y-4 mb-4">
          {sortByCompanyResponses?.map((replyTicket) => (
            <ReplyTicketCard key={replyTicket.id} ticket={replyTicket} />
          ))}
        </div>
      </Activity>
    </div>
  );
}
