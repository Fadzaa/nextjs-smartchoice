import Image from "next/image";
import {iconWarning} from "@/app/lib/utils/svg";
import OuterCard from "@/app/(pages)/kandidat/components/outer-card";
import {anies, cakimin, ganjar, gibran, mahfud, prabowo} from "@/app/lib/utils/image";

function AboutPage() {
    const data = [
        {
            namePres: 'Anis',
            nameVice: 'Cak Imin',
            slogan: 'Indonesia Adil Makmur untuk Semua',
            path: '/about',
            image1: anies,
            fullName1: 'Anies Baswedan',
            position1: 'Calon Presiden',
            image2: cakimin,
            fullName2: 'Muhaimin Iskandar',
            position2: 'Calon Wakil Presiden'
        },
        {
            namePres: 'Prabowo',
            nameVice: 'Gibran',
            slogan: 'Bersama Indonesia Maju Menuju Indonesia Emas 2045',
            path: '/about',
            image1: prabowo,
            fullName1: 'Prabowo Subianto',
            position1: 'Calon Presiden',
            image2: gibran,
            fullName2: 'Gibran Rakabuming',
            position2: 'Calon Wakil Presiden'
        },

        {
            namePres: 'Ganjar',
            nameVice: 'Mahfud',
            slogan: 'Gerak Cepat Menuju Indonesia Unggul',
            path: '/about',
            image1: ganjar,
            fullName1: 'Ganjar Pranowo',
            position1: 'Calon Presiden',
            image2: mahfud,
            fullName2: 'Mahfud MD',
            position2: 'Calon Wakil Presiden'
        },



    ]

    return (
        <div className="w-screen  bg-white flex flex-col items-center pt-[150px] pb-[120px] px-[72px]">

            <div className="flex font-extrabold text-[84px] gap-7">
                <span className="text-[#333132] ">Kenali</span>
                <h1 className="text-primary">Para</h1>
                <h1 className="text-primary">kandidat  </h1>
            </div>

            <div className="w-full  bg-primary rounded-[18px] flex items-center justify-center px-[74px] mb-20">
                <div className="flex gap-4 my-[22px] items-center">
                    <Image
                        src={iconWarning}
                        alt="Icon Warning"
                        width={30}
                        height={30}/>
                    <h3 className="text-white text-lg">Sebelum kamu memilih paslon yang akan kamu pilih di pemilu ini hendaknya ketahui visi dan misi mereka terlebih dulu</h3>
                </div>
            </div>

            <div className="w-full grid grid-cols-3 gap-10">
                {data.map((item, index) => {
                    return (
                        <OuterCard
                            key={index}
                            {...data[index]}
                        />
                    )
                })}
            </div>
        </div>
    );
}

export default AboutPage;