import { Logo } from "./Logo"
import { SidebarRoutes } from "./Sidebar-routes"

export const Sidebar = () => {
  return (
    <div className=" h-full border-r flex flex-col overflow-y-auto inset-y-0 z-50 bg-sky-50">
      <div className="">
        <Logo />
        <hr />
        <SidebarRoutes />
      </div>
    </div>
  )
} 