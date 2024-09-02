import Image from "next/image";
import { League_Spartan } from "next/font/google";
import Tiptap from "@/components/Tiptap";

const spartan = League_Spartan({ subsets: ["latin"] });
export default function Home() {
  return (
    <main
      className={`bg-neutral-50 w-screen flex h-screen border-red-400 flex-col items-center justify-center p-12 ${spartan.className}`}
    >
      <Tiptap />
    </main>
  );
}
