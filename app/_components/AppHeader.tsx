import { MenuIcon, MoonIcon } from "lucide-react";
import { Button } from "./ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

export function AppHeader() {
    return (
        <header className="sticky top-0 z-40 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border shadow-md ">
            <div className="flex h-16 items-center px-8 md:px-8 justify-between md:justify-end">

                <Button size="icon" variant="outline" className="flex md:hidden">
                    <MenuIcon className="h-5 w-5 text-muted-foreground" />
                </Button>

                {/* Right Section - Actions */}
                <div className="flex items-center justify-end space-x-2">

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
    )
}