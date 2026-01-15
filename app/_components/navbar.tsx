"use client";

import { UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="flex justify-between border-b border-solid px-8 py-4">
      <div className="flex items-center gap-10">
        <p className="text-primary text-xl">Zenna</p>
        <Link
          href="/"
          className={
            pathname === "/"
              ? "text-primary font-bold"
              : "text-muted-foreground font-normal"
          }
        >
          Dashboard
        </Link>
        <Link
          href="/transactions"
          className={
            pathname === "/transactions"
              ? "text-primary font-bold"
              : "text-muted-foreground font-normal"
          }
        >
          Transações
        </Link>
        <Link
          href="/subscription"
          className={
            pathname === "/subscription"
              ? "text-primary font-bold"
              : "text-muted-foreground font-normal"
          }
        >
          Assinatura
        </Link>
      </div>

      <UserButton />
    </nav>
  );
};

export default Navbar;
