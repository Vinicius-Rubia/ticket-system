import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";
import { LayoutGrid, Settings, Ticket, Users, Users2 } from "lucide-react";
import { NavLink } from "react-router-dom";

const data = {
  navMain: [
    {
      title: "Dashboard",
      isActive: true,
      icon: LayoutGrid,
      url: "/dashboard",
    },
    {
      title: "Usuários",
      icon: Users,
      url: "/users",
    },
    {
      title: "Tickets",
      icon: Ticket,
      url: "/",
    },
    {
      title: "Oficiais",
      icon: Users2,
      url: "/officials",
    },
    {
      title: "Configurações",
      icon: Settings,
      url: "/settings",
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <h1 className="uppercase text-center text-2xl font-semibold text-[#2E2C34] mt-7 mb-4">
          Ticket Lead
        </h1>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {data.navMain.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <NavLink to={item.url}>
                    {({ isActive }) => (
                      <SidebarMenuButton size="lg" isActive={isActive}>
                        <item.icon className="size-5" />
                        {item.title}
                      </SidebarMenuButton>
                    )}
                  </NavLink>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
