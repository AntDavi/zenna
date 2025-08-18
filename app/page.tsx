import Image from "next/image";

export default function Home() {
  return (
    <main className="h-screen flex items-center justify-center">
      <Image
        src="/zenna.svg"
        alt="Zenna Logo"
        width={500}
        height={500}
      />
    </main>
  );
}
