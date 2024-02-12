"use client"
import Image from "next/image";
import { trophyAchievment } from "@/app/lib/utils/svg";
import AccordionAchievment from "./accordion-achievment";

function AchievementCandidate({dataGagasan}) {
    
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