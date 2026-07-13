import { Loader2 } from "lucide-react";
import Image from "next/image";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-[9999] bg-[#f0f0f0] flex flex-col items-center justify-center min-h-screen selection:bg-[#e2241f] selection:text-white">
      <div className="relative flex flex-col items-center animate-in fade-in zoom-in duration-500">
        <Image
          src="/Logo.png"
          alt="NOXUSDYNAMICS Logo"
          width={72}
          height={72}
          className="rounded-md shadow-lg mb-8 animate-pulse"
          priority
        />
        <div className="flex items-center gap-3 text-[#1a1c1c] font-extrabold tracking-widest text-sm uppercase">
          <Loader2 className="w-5 h-5 animate-spin text-[#e2241f]" />
          <span>System Loading...</span>
        </div>
      </div>
    </div>
  );
}
