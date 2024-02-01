import Image from "next/image";
import {anies} from "@/app/lib/utils/image";
import {iconArrow} from "@/app/lib/utils/svg";
import Link from "next/link";


function CardCandidate({image, name, position, id}) {
    return (
        <div className="w-full h-[240px] border border-black border-opacity-10 rounded-[20px] flex p-7 mb-6">
            <Image
                className="h-full w-1/3 rounded-[10px] me-10"
                src={image}
                alt="Anies"
                width={1000}
                height={1000}
            />
            <div className="flex flex-col w-full justify-between h-full">
                <div>
                    <h1 className="font-bold text-[#2B2B2B] text-lg">{name}</h1>
                    <h2 className="font-medium text-[#5C5757] text-base">{position}</h2>
                </div>
                <Link href={`/profile-kandidat/${id}`}>
                    <div className="flex mb-7 gap-3 items-center cursor-pointer">
                        <h1 className="text-primary font-bold">Pelajari Profil</h1>
                        <Image
                            src={iconArrow}
                            alt="Icon Arrow"
                            width={16}
                            height={16}
                        />

                    </div>
                </Link>
            </div>
        </div>
    );
}

export default CardCandidate;