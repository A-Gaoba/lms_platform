'use client'

import { BarChart, Compass, Layout, List, icons } from "lucide-react"
import { SidebarItem } from "./SidebarItem";
import { usePathname } from "next/navigation";
import { Istok_Web } from "next/font/google";

const TeaherRoutes = [
  {
    icon: List,
    label: "Courses",
    href: "/teacher/courses"
  },
  {
    icon: BarChart,
    label: "Analytics",
    href: "/teacher/analytics"
  }
]

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
  ,
  {
    icon: Compass,
    label: "My courses",
    href: "/my-courses"
  }
]

export const SidebarRoutes = () => {
  const pathname = usePathname()
  const isTeaherPage = pathname?.includes("/teacher")

  const routes = isTeaherPage ? TeaherRoutes : gustRoutes;
  return (
    <div className="flex flex-col w-full py-3">
      {routes.map((route) => (
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