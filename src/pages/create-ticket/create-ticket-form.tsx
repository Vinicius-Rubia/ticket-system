import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { TICKET_TYPE_SELECT } from "@/constants/ticket-config";
import type { TicketTypeValue } from "@/enums/ticket-type";
import { cn } from "@/lib/utils";
import { CreateTicketSchema } from "@/validations/create-ticket-schema";
import type { CreateTicketSchemaType } from "@/validations/schemas-types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

export function CreateTicketForm({ className }: React.ComponentProps<"form">) {
  const form = useForm<CreateTicketSchemaType>({
    resolver: zodResolver(CreateTicketSchema),
    defaultValues: {
      ticketTitle: "",
      ticketMessage: "",
    },
  });

  const onSubmit = (data: CreateTicketSchemaType) => {
    console.log(data);
  };

  const ticketTypes = Object.keys(TICKET_TYPE_SELECT).map(
    Number
  ) as TicketTypeValue[];

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className={cn("space-y-6 grid", className)}
      >
        <div className="grid sm:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="ticketType"
            render={({ field, fieldState }) => (
              <FormItem>
                <FormLabel>Tipo de ticket</FormLabel>
                <FormControl>
                  <Select
                    onValueChange={(value) => field.onChange(Number(value))}
                  >
                    <SelectTrigger
                      aria-invalid={fieldState.invalid}
                      className="w-full"
                    >
                      <SelectValue placeholder="Selecione o tipo" />
                    </SelectTrigger>
                    <SelectContent>
                      {ticketTypes.map((typeId) => (
                        <SelectItem key={typeId} value={String(typeId)}>
                          {TICKET_TYPE_SELECT[typeId]}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="ticketTitle"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Título do ticket</FormLabel>
                <FormControl>
                  <Input placeholder="Digite o título" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="ticketMessage"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Mensagem do Ticket</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Digite o problema aqui..."
                  className="resize-none h-24"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button size="lg" className="sm:ml-auto">
          Enviar
        </Button>
      </form>
    </Form>
  );
}
