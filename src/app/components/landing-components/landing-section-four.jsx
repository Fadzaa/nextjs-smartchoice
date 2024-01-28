import { girls } from "@/app/lib/utils/image";
import Image from "next/image";

export default function LandingComponentFour() {
  return (
    <main className="w-full h-[70vh] px-16 mt-32">
      <div
        className="w-full h-full rounded-3xl flex gap-6 flex-col items-center justify-center  relative overflow-hidden"
        style={{ boxShadow: "0 4px 8px rgba(255, 113, 113, 0.4)" }}
      >
        <div>
          <button
            className=" border border-primary  py-3 px-5 rounded-2xl"
            style={{ boxShadow: "0 4px 8px rgba(255, 113, 113, 0.4)" }}
          >
            <h2 className="text-base font-medium text-primary">
              14 Febuari 2024
            </h2>
          </button>
        </div>

        <h1 className="w-1/2 text-6xl text-center text-primary font-semibold">
        JANGAN LUPA GUNAKAN HAK PILIHMU
        </h1>

        <Image src={girls} className="w-[40vw]"/>

        <div className="w-96 h-96 absolute -top-20 -right-20 bg-[#FCEAEC] bg-opacity-50 rounded-full" />
        <div className="w-96 h-96 absolute -bottom-20 -left-20 bg-[#FCEAEC] bg-opacity-50 rounded-full" />
      </div>
    </main>
  );
}
