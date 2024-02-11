"use client"
import Image from "next/image";
import { trophyAchievment } from "@/app/lib/utils/svg";
import AccordionAchievment from "./accordion-achievment";

function AchievementCandidate({}) {
    const dataGagasan = [
        {
          id: 1,
          idea_title: "Modernisasi Alutsista Pertahanan RI",
          idea_description:
            "Modernisasi Alutsista Pertahanan RI",
        },
        {
          id: 2,
          idea_title: "Modernisasi Alutsista Pertahanan RI",
          idea_description:[
            "Kementerian Pertahanan di bawah kepemimpinan Prabowo telah membelanjakan lebih dari Rp500 triliun secara total untuk merevitalisasi Alat Utama Sistem Pertahanan (Alutsista) TNI.",
            "Berdasarkan APBN 2023, program modernisasi alutsista, non-alutsista, dan Sarpras Pertahanan dianggarkan sebesar Rp35,19t (Rp39,47triliun untuk RAPBN 2024) dari total anggaran Kementerian Pertahanan sebesar Rp134,32t, di mana anggaran Kemenhan merupakan anggaran terbesar jika dibandingkan K/L lainnya."
    
          ]
        },
        
      ];
    return (
        <div className="w-full flex flex-col gap-12 ">

            <div className="flex gap-5">

                <Image
                    src={trophyAchievment}
                    alt="Icon Thropy"
                    width={60}
                    height={60} />

                <h1 className="font-semibold text-[40px] text-[#2B2B2B]">Pencapaian yang sering diklaim oleh paslon</h1>
            </div>

        
        <AccordionAchievment dataGagasan={dataGagasan}/>

        </div>
    );
}

export default AchievementCandidate;