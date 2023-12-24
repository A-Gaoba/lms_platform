'use client'

import { Compass, Layout, icons } from "lucide-react"
import { SidebarItem } from "./SidebarItem";

const gustRoutes = [
  {
    icon: Layout,
    label: "Dashboard",
    href: "/"
  },
  {
    icon: Compass,
    label: "Brouws",
    href: "/search"
  }
]

export const SidebarRoutes = () => {
  const routes = gustRoutes;
  return (
    <div className="flex flex-col w-full py-3">
      {routes.map((route)=>(
        <SidebarItem 
        key={route.href}
        icon={route.icon} 
        href={route.href} 
        label={route.label} 
        
        />
      ))}
    </div>
  )
}