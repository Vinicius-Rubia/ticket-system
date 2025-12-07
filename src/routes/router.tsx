import { BaseLayout } from "@/layouts/base-layout";
import { DashboardPage } from "@/pages/dashboard/page";
import { TicketsPage } from "@/pages/tickets/page";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<BaseLayout />}>
          <Route path="/" element={<TicketsPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
