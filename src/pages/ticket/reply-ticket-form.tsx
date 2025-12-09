import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { ReplyTicketSchema } from "@/validations/reply-ticket-schema";
import type { ReplyTicketSchemaType } from "@/validations/schemas-types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

export function ReplyTicketForm() {
  const form = useForm<ReplyTicketSchemaType>({
    resolver: zodResolver(ReplyTicketSchema),
    defaultValues: {
      replyMessage: "",
    },
  });

  const onSubmit = (data: ReplyTicketSchemaType) => {
    console.log(data);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="border border-muted bg-primary-foreground dark:bg-accent/30 rounded p-5 space-y-4 grid"
      >
        <FormField
          control={form.control}
          name="replyMessage"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Resposta ao Ticket</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Digite a sua responta aqui..."
                  className="resize-none h-24"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="ml-auto">
          Enviar resposta
        </Button>
      </form>
    </Form>
  );
}
