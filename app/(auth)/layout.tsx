import { AppHeader } from "../_components/AppHeader";
import { AppSidebar } from "../_components/AppSidebar";
import { SidebarProvider } from "../_components/ui/sidebar";

export default function AuthLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="pt-br">
            <body>
                <SidebarProvider>
                    <AppSidebar />
                    <main className="w-full">
                        <AppHeader />

                        <div className="p-8 ">
                            {children}

                        </div>
                    </main>
                </SidebarProvider>
            </body>
        </html>
    );
}
