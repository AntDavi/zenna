import { AppSidebar } from "../_components/AppSidebar";
import { SidebarProvider } from "../_components/ui/sidebar";

export default function AuthLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="pt-BR">
            <SidebarProvider>
                <body>
                    <AppSidebar />
                    <main>{children}</main>
                </body>
            </SidebarProvider>
        </html>
    );
}
