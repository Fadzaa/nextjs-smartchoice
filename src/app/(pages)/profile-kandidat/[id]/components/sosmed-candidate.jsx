
import Link from "next/link";
import { RiInstagramFill } from "react-icons/ri";
import { FaTwitter } from "react-icons/fa";


function SosmedCandidate({linkInstagram, linkTwitter}) {
    return (
        <div className="w-full">
            <h1 className="font-semibold text-[36px] text-[#2B2B2B] mb-6">Yuk Jelajahi Sosial Medianya juga!</h1>\
            <div className="flex gap-5">

                <Link href={linkInstagram} target="_blank">
                    <div
                        className="cursor-pointer flex gap-3 bg-white border border-primary rounded-3xl justify-between items-center text-primary p-4">
                        <RiInstagramFill size={35}/>
                        <h1 className=" font-semibold text-[20px]">Instagram</h1>
                    </div>
                </Link>

                <Link href={linkTwitter} target="_blank">
                <div className="flex gap-5 bg-white border border-primary rounded-3xl justify-between items-center text-primary p-4">
                    <FaTwitter size={35}/>
                    <h1 className=" font-semibold text-[20px]">Twitter</h1>
                </div>
                </Link>

            </div>
        </div>
    );
}

export default SosmedCandidate;