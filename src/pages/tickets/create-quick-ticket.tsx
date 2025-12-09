import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import { Separator } from "@/components/ui/separator";
import { useIsMobile } from "@/hooks/use-mobile";
import { X } from "lucide-react";
import { TicketForm } from "./ticket-form";

interface CreateQuickTicketProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

export function CreateQuickTicket({ setOpen, open }: CreateQuickTicketProps) {
  const isMobile = useIsMobile();

  const handleCloseQuickTicket = () => {
    if (!open) return;
    setOpen(false);
  };

  if (isMobile) {
    return (
      <Drawer open={open} onOpenChange={setOpen}>
        <DrawerContent>
          <DrawerHeader className="text-left">
            <DrawerTitle>Criar um ticket rápido</DrawerTitle>
            <DrawerDescription>
              Redija e responda a novas perguntas e questões.
            </DrawerDescription>
          </DrawerHeader>
          <TicketForm className="px-4" />
          <DrawerFooter className="pt-2">
            <DrawerClose asChild>
              <Button variant="outline" size="lg">
                Fechar
              </Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    );
  }

  return (
    <aside className="sticky top-4 bg-accent dark:bg-accent/30 rounded px-5 py-6 max-w-md flex-1">
      <Button
        size="icon-sm"
        variant="outline"
        className="absolute top-4 right-5 size-7"
        onClick={handleCloseQuickTicket}
      >
        <X />
      </Button>
      <div className="space-y-1">
        <h2 className="font-semibold text-lg">Criar um ticket rápido</h2>
        <p className="text-sm text-muted-foreground">
          Redija e responda a novas perguntas e questões.
        </p>
      </div>
      <Separator className="mt-4 mb-6" />
      <TicketForm />
    </aside>
  );
}
