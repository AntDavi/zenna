import Image from "next/image";
import { Button } from "./_components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main className="h-screen flex items-center justify-center flex-col space-y-3">
      <Image
        src="/zenna.svg"
        alt="Zenna Logo"
        width={500}
        height={500}
      />
      <Button>
        <Link href="/dashboard">Login</Link>
      </Button>
    </main>
  );
}
