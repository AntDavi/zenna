import { AppHeader } from "../_components/AppHeader";
import { AppSidebar } from "../_components/AppSidebar";
import { SidebarProvider } from "../_components/ui/sidebar";

export default function AuthLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="pt-BR">
            <SidebarProvider>
                <body>
                    <AppSidebar />
                    <main className="w-full">
                        <AppHeader />
                        {children}
                    </main>
                </body>
            </SidebarProvider>
        </html>
    );
}
