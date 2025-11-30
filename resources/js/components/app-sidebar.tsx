import { Home, Package, ShoppingCart, Users, LogOut } from "lucide-react"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { Link } from "@inertiajs/react"

// Menú del Sistema
const items = [
  { title: "Dashboard", url: "/dashboard", icon: Home },
  { title: "Punto de Venta", url: "/pos", icon: ShoppingCart },
  { title: "Pacientes", url: "/clients", icon: Users },
  { title: "Inventario", url: "/products", icon: Package },
]

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader className="p-4 font-bold text-xl">
        🦷 Dental POS
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Menu Principal</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
          {/* Aquí podrías poner un link rápido al perfil si quisieras */}
      </SidebarFooter>
    </Sidebar>
  )
}