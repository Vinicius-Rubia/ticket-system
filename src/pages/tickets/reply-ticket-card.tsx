import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import type { ReplyTicket } from "@/types/ticket";
import { format } from "date-fns";

interface ReplyTicketCardProps {
  ticket: ReplyTicket;
}

export function ReplyTicketCard({ ticket }: ReplyTicketCardProps) {
  return (
    <div
      data-company={ticket.isCompanyResponse}
      className="border rounded-sm p-4 space-y-2 bg-primary-foreground dark:bg-accent/30 data-[company=true]:border-b-primary data-[company=true]:dark:bg-black/40 data-[company=true]:bg-secondary"
    >
      <div className="flex items-center gap-2">
        <Avatar>
          <AvatarImage src={ticket.userImageUrl} alt={ticket.username} />
          <AvatarFallback>{ticket.userInitials}</AvatarFallback>
        </Avatar>
        <span>{ticket.username}</span>
        <span className="font-medium text-xs text-muted-foreground">
          Postado às {format(ticket.createdAt, "HH:mm")}
        </span>
      </div>
      <p
        className={cn(
          "text-xs font-medium text-muted-foreground sm:ml-9",
          ticket.isCompanyResponse && "text-foreground"
        )}
      >
        {ticket.replyMessage}
      </p>
    </div>
  );
}
