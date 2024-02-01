import Image from "next/image";
import {prabowo} from "@/app/lib/utils/image";
import Link from "next/link";

function SosmedCandidate({linkInstagram, linkTwitter}) {
    return (
        <div className="w-full">
            <h1 className="font-semibold text-[36px] text-[#2B2B2B] mb-6">Yuk Jelajahi Sosial Medianya juga!</h1>\
            <div className="flex gap-5">

                <Link href={linkInstagram} target="_blank">
                    <div
                        className="cursor-pointer flex gap-5 bg-white border border-primary rounded-3xl justify-between items-center p-4">
                        <Image
                            src={prabowo}
                            alt="Icon Instagram"
                            width={30}
                            height={30}
                        />
                        <h1 className="text-primary font-semibold text-[20px]">Instagram</h1>
                    </div>
                </Link>

                <Link href={linkTwitter} target="_blank">
                <div className="flex gap-5 bg-white border border-primary rounded-3xl justify-between items-center p-4">
                    <Image
                        src={prabowo}
                        alt="Icon Twitter"
                        width={30}
                        height={30}
                    />
                    <h1 className="text-primary font-semibold text-[20px]">Twitter</h1>
                </div>
                </Link>

            </div>
        </div>
    );
}

export default SosmedCandidate;