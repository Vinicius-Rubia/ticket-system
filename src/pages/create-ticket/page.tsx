import { SubHeader } from "@/components/sub-header";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ChevronLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { CreateTicketForm } from "./create-ticket-form";

export function CreateTicketPage() {
  const navigate = useNavigate();

  const handleOnBack = () => {
    navigate("/tickets");
  };

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
      <div className="flex items-center gap-4">
        <Button
          size="icon-sm"
          variant="outline"
          className="mb-4"
          onClick={handleOnBack}
        >
          <ChevronLeft />
        </Button>
        <SubHeader title="Novo Ticket" />
      </div>
      <main className="bg-accent dark:bg-accent/30 rounded p-5 space-y-6">
        <div className="space-y-1">
          <h2 className="font-semibold text-lg">Crie um ticket rápido</h2>
          <p className="text-sm text-muted-foreground">
            Redija e responda a novas perguntas e questões.
          </p>
        </div>
        <CreateTicketForm />
      </main>
    </motion.div>
  );
}
