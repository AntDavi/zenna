import { AppHeader } from "../_components/AppHeader";
import { AppSidebar } from "../_components/AppSidebar";
import { ThemeProvider } from "../_components/theme-provider";
import { SidebarProvider } from "../_components/ui/sidebar";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <SidebarProvider>
            <AppSidebar />
            <main className="w-full">
              <AppHeader />

              <div className="p-8 ">{children}</div>
            </main>
          </SidebarProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
