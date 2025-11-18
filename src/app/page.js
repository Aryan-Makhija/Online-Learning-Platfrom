import { UserButton } from "@clerk/nextjs";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex gap-2 min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      Hello World
      <UserButton></UserButton>
    </div>
  );
}
