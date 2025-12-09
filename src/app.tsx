import { ThemeProvider } from "./components/theme-provider";
import { AppRoutes } from "./routes/router";

export function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="ticket-system-theme">
      <AppRoutes />
    </ThemeProvider>
  );
}
