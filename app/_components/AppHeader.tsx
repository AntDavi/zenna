import { MenuIcon, MoonIcon, Plus } from "lucide-react";
import { Button } from "./ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { DialogAddTransaction } from "./DialogAddTransaction";
import { menuItems } from "../_types/links";
import Link from "next/link";

export function AppHeader() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border shadow-md ">
      <div className="flex h-16 items-center px-8 md:px-8 justify-between md:justify-end">
        <div className="md:hidden block">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button size="icon" variant="outline" className="h-9 w-9">
                <MenuIcon className="h-5 w-5 text-muted-foreground" />
                <span className="sr-only">Menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuLabel>Navegação</DropdownMenuLabel>
              <DropdownMenuSeparator />
              {menuItems.map((item) => {
                const Icon = item.icon;
                return (
                  <DropdownMenuItem key={item.href} asChild>
                    <Link
                      href={item.href}
                      className="flex items-center cursor-pointer"
                    >
                      <Icon className="mr-2 h-4 w-4" />
                      <span>{item.title}</span>
                    </Link>
                  </DropdownMenuItem>
                );
              })}
              <DropdownMenuSeparator />
              <DropdownMenuLabel>Adicionar Transação</DropdownMenuLabel>
              <DropdownMenuItem asChild>
                <DialogAddTransaction
                  type="income"
                  trigger={
                    <Button
                      variant="ghost"
                      className="w-full justify-start p-2 h-auto"
                    >
                      <Plus className="mr-2 h-4 w-4" />
                      Nova Receita
                    </Button>
                  }
                />
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <DialogAddTransaction
                  type="expense"
                  trigger={
                    <Button
                      variant="ghost"
                      className="w-full justify-start p-2 h-auto"
                    >
                      <Plus className="mr-2 h-4 w-4" />
                      Nova Despesa
                    </Button>
                  }
                />
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* Right Section - Actions */}
        <div className="flex items-center justify-end space-x-2">
          {/* Menu Dropdown */}

          {/* Theme Toggle */}
          <Button
            size="icon"
            className="h-9 w-9 hover:bg-blue-500 bg-transparent text-muted-foreground transition-all hover:text-background"
          >
            <MoonIcon className="h-4 w-4 red" />
            <span className="sr-only">Alternar tema</span>
          </Button>

          {/* Profile/User Menu */}
          <Avatar>
            <AvatarImage src="https://github.com/antdavi.png" alt="@antdavi" />
            <AvatarFallback>AD</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </header>
  );
}
