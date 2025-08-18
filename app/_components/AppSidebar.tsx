'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarMenu, SidebarMenuButton, SidebarMenuItem, useSidebar } from "./ui/sidebar";
import { TrendingUp, PieChart, Settings } from "lucide-react";
import Image from "next/image";
import { DialogAddTransaction } from "./DialogAddTransaction";

const menuItems = [
    { title: "Dashboard", href: "/dashboard", icon: PieChart },
    { title: "Transações", href: "/transactions", icon: TrendingUp },
    { title: "Configurações", href: "/settings", icon: Settings },
]

export function AppSidebar() {
    const { state } = useSidebar();
    const pathname = usePathname();
    const collapsed = state === "collapsed";

    const isActiveRoute = (href: string) => pathname === href;

    return (
        <Sidebar>
            <SidebarContent className="bg-sidebar border-r border-sidebar-border shadow-medium">

                <div className="p-4 border-b border-sidebar-border items-center flex flex-col space-y-2">
                    <Image
                        src="/zenna.svg"
                        alt="Zenna Logo"
                        width={100}
                        height={100}
                    />
                    <span className="text-xs text-sidebar-foreground/60">Tranquilidade com sua grana</span>
                </div>

                {/* Navegação */}
                <SidebarGroup className="bg-sidebar border-r border-sidebar-border shadow-medium">
                    <SidebarGroupLabel className="text-sidebar-foreground/70 font-medium">
                        {!collapsed && "Navegação"}
                    </SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {menuItems.map((item) => {
                                const isActive = isActiveRoute(item.href);
                                return (
                                    <SidebarMenuItem key={item.title}>
                                        <SidebarMenuButton asChild>
                                            <Link
                                                href={item.href}
                                                className={`transition-all duration-300 ease-in-out rounded-lg group/menuitem
                                                    ${isActive
                                                        ? 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200 border-l-4 border-green-600 shadow-md'
                                                        : 'hover:bg-sidebar-accent/50 hover:text-green-700 dark:hover:text-green-300'
                                                    }`}
                                            >
                                                <item.icon
                                                    className={`w-4 h-4 transition-colors duration-300
                                                        ${isActive
                                                            ? 'text-green-700 dark:text-green-300'
                                                            : 'group-hover/menuitem:text-green-600 dark:group-hover/menuitem:text-green-400'
                                                        }`}
                                                />
                                                <span
                                                    className={`transition-colors duration-300
                                                        ${isActive
                                                            ? 'font-semibold text-green-800 dark:text-green-200'
                                                            : 'group-hover/menuitem:text-green-700 dark:group-hover/menuitem:text-green-300'
                                                        }`}
                                                >
                                                    {item.title}
                                                </span>
                                            </Link>

                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                );
                            })}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>

                {/* Ações rápidas */}
                <SidebarGroup>
                    <SidebarGroupLabel className="text-sidebar-foreground/70 font-medium">
                        {!collapsed && "Ações Rápidas"}
                    </SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu className="space-y-2 w-full">
                            <SidebarMenuItem>
                                <DialogAddTransaction type="income" />
                            </SidebarMenuItem>
                            <SidebarMenuItem>
                                <DialogAddTransaction type="expense" />
                            </SidebarMenuItem>
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>

            </SidebarContent>
        </Sidebar>
    );
}
