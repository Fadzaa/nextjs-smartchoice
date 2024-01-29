import Image from "next/image";
import {cardBottomDecor, cardTopDecor} from "@/app/lib/utils/svg";
import InnerCard from "@/app/(pages)/kandidat/components/inner-card";
import Link from "next/link";


function OuterCard({number, namePres, nameVice, slogan, path, image1, fullName1, position1, image2, fullName2, position2}) {
    return (
        <div
            className="h-[594px] border border-opacity-10 border-black rounded-xl relative overflow-hidden shadow-md hover:shadow-xl transition ">
            <Image
                className="absolute right-0 -top-2"
                src={cardTopDecor}
                alt="Card Top Decoration"
                width={196}
                height={196}
            />

            <div className="w-full h-full p-7 flex flex-col justify-between">
                <div>
                    <h3 className="font-bold text-primary">NO.{number}</h3>
                    <h1 className="font-bold text-[#333132] text-[24px] my-5">{namePres} & {nameVice}</h1>
                    <h2 className="font-medium text-[#5C5757]">{slogan}</h2>
                </div>

                <div>
                    <div className="flex justify-between gap-4">
                        <InnerCard image={image1} name={fullName1} position={position1}/>
                        <InnerCard image={image2} name={fullName2} position={position2}/>
                    </div>

                    <Link href={`${path}`}>
                        <button className="w-full h-[60px] bg-primary rounded-xl mt-8">
                            <h3 className="font-bold text-white text-[18px]">Visi dan Misi</h3>
                        </button>
                    </Link>
                </div>
            </div>

            <Image
                className="absolute left-0 bottom-0"
                src={cardBottomDecor}
                alt="Card Bottom Decoration"
                width={130}
                height={130}
            />
        </div>
    );
}

export default OuterCard;