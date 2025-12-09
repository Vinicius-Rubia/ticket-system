import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { TicketStatus } from "@/components/ui/ticket-status";
import { TICKET_STATUS_SELECT } from "@/constants/ticket-config";
import type { TicketStatusValue } from "@/enums/ticket-status";
import { Search } from "lucide-react";

interface FilterFieldsProps {
  query: string;
  typeSelect: TicketStatusValue | "all";
  setQuery: (query: string) => void;
  setTypeSelect: (typeSelect: TicketStatusValue | "all") => void;
}

export function FilterFields({
  query,
  setQuery,
  setTypeSelect,
  typeSelect,
}: FilterFieldsProps) {
  const ticketStatus = Object.keys(TICKET_STATUS_SELECT).map(
    Number
  ) as TicketStatusValue[];

  return (
    <section className="grid sm:flex sm:items-center sm:justify-between gap-2">
      <InputGroup className="w-full sm:max-w-md">
        <InputGroupInput
          placeholder="Pesquise pelo nome ou Id do ticket"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <InputGroupAddon>
          <Search />
        </InputGroupAddon>
      </InputGroup>

      <Select
        onValueChange={(value) =>
          setTypeSelect(
            value === "all" ? "all" : (Number(value) as TicketStatusValue)
          )
        }
        value={String(typeSelect)}
      >
        <SelectTrigger className="w-full sm:w-60">
          <SelectValue placeholder="Selecione o tipo" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">
            <TicketStatus className="bg-linear-to-r from-blue-500 via-green-500 to-amber-500" />
            Todos
          </SelectItem>
          {ticketStatus.map((typeId) => (
            <SelectItem key={typeId} value={String(typeId)}>
              <TicketStatus variant={typeId} />
              {TICKET_STATUS_SELECT[typeId]}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </section>
  );
}
