"use client"
import Image from "next/image";
import {anies} from "@/app/lib/utils/image";

function AchievementCandidate({}) {
    return (
        <div className="w-full ">

            <div className="flex gap-5">

                <Image
                    src={anies}
                    alt="Icon Thropy"
                    width={20}
                    height={20} />

                <h1 className="font-semibold text-[40px] text-[#2B2B2B]">Pencapaian yang sering diklaim oleh paslon</h1>
            </div>

        {/*    Write Accordion Here*/}

        </div>
    );
}

export default AchievementCandidate;