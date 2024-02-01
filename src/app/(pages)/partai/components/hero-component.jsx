import { humanSearching } from "@/app/lib/utils/image";
import Image from "next/image";

export default async function HeroComponent() {
  return (
    <div className=" h-[30vh] mt-16 w-full mb-16">
      <div className="w-full h-full flex gap-6 justify-center flex-row ">
        <Image src={humanSearching} width={10000} height={10000} quality={100} alt="human-searching" className="w-60" />
        <div className=" w-3/5 flex pr-12 gap-3 flex-col text-black">
          <h1 className="text-[50px] font-semibold">
            Kenali Track Record <br/> <span className="text-primary">Partai</span>
          </h1>
          <p className="font-normal text-lg">
          Memprofilling Partai Sebelum Memilih Kandidat Membantu Pemilih Menilai Arah Kebijakan Dan Kredibilitas Partai
          </p>
        </div>
      </div>
    </div>
  );
}
