import { LayoutDashboard, ShoppingCart, Users, Truck, DollarSign, Settings, LogOut, Fuel } from "lucide-react";
import { NavLink } from "@/components/NavLink";
import { useLocation } from "react-router-dom";
import type { User } from "@supabase/supabase-js";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarFooter,
  useSidebar,
} from "@/components/ui/sidebar";

const menuItems = [
  { title: "Dashboard", url: "/admin", icon: LayoutDashboard },
  { title: "Orders", url: "/admin/orders", icon: ShoppingCart },
  { title: "Agents", url: "/admin/agents", icon: Truck },
  { title: "Customers", url: "/admin/customers", icon: Users },
  { title: "Pricing", url: "/admin/pricing", icon: DollarSign },
  { title: "Settings", url: "/admin/settings", icon: Settings },
];

interface AdminSidebarProps {
  user: User | null;
  onSignOut: () => void;
}

export function AdminSidebar({ user, onSignOut }: AdminSidebarProps) {
  const { state } = useSidebar();
  const collapsed = state === "collapsed";
  const location = useLocation();

  return (
    <Sidebar collapsible="icon">
      <SidebarContent>
        {/* Logo */}
        <div className="p-4 flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-hero flex items-center justify-center shrink-0">
            <Fuel className="w-4 h-4 text-primary-foreground" />
          </div>
          {!collapsed && <span className="font-bold text-foreground">Ikang</span>}
        </div>

        <SidebarGroup>
          <SidebarGroupLabel>Management</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink
                      to={item.url}
                      end={item.url === "/admin"}
                      className="hover:bg-muted/50"
                      activeClassName="bg-muted text-primary font-medium"
                    >
                      <item.icon className="mr-2 h-4 w-4" />
                      {!collapsed && <span>{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="p-2">
        {!collapsed && user && (
          <p className="text-xs text-muted-foreground px-2 mb-1 truncate">
            {user.email || user.phone}
          </p>
        )}
        <SidebarMenuButton onClick={onSignOut} className="text-destructive hover:bg-destructive/10">
          <LogOut className="mr-2 h-4 w-4" />
          {!collapsed && <span>Sign Out</span>}
        </SidebarMenuButton>
      </SidebarFooter>
    </Sidebar>
  );
}
