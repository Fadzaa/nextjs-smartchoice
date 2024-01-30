import CardCandidate from "@/app/(pages)/kandidat/[id]/components/card-candidate";
import {anies, cakimin} from "@/app/lib/utils/image";
import CardPartai from "@/app/(pages)/kandidat/[id]/components/card-partai";
import Link from "next/link";

function Page({params}) {
    const data = [
        {
            image: anies,
            name: "Anies Baswedan",
            position: "Calon Presiden No Urut 1",
            path: "/kandidat/anies-baswedan"
        },
        {
            image: cakimin,
            name: "Cak Imin",
            position: "Calon Wakil Presiden No Urut 1",
            path: "/kandidat/cak-imin"
        }
    ]

    const dataPartai = [
        {
            image: anies,
            name: "Anies Baswedan",
            description: "Partai Kebangkitan Bangsa (PKB) adalah partai politik Islam-Nasionalis yang didirikan pada tahun 1998 di awal era reformasi Indonesia. PKB deskripsikan oleh Carnegie Endowment sebagai partai sayap kanan yang memiliki hubungan sejarah kuat dengan organisasi Islam terbesar di Indonesia, Nahdlatul Ulama (NU)."
        },
        {
            image: anies,
            name: "Anies Baswedan",
            description: "Partai Kebangkitan Bangsa (PKB) adalah partai politik Islam-Nasionalis yang didirikan pada tahun 1998 di awal era reformasi Indonesia. PKB deskripsikan oleh Carnegie Endowment sebagai partai sayap kanan yang memiliki hubungan sejarah kuat dengan organisasi Islam terbesar di Indonesia, Nahdlatul Ulama (NU)."
        },
        {
            image: anies,
            name: "Anies Baswedan",
            description: "Partai Kebangkitan Bangsa (PKB) adalah partai politik Islam-Nasionalis yang didirikan pada tahun 1998 di awal era reformasi Indonesia. PKB deskripsikan oleh Carnegie Endowment sebagai partai sayap kanan yang memiliki hubungan sejarah kuat dengan organisasi Islam terbesar di Indonesia, Nahdlatul Ulama (NU)."
        },
        {
            image: anies,
            name: "Anies Baswedan",
            description: "Partai Kebangkitan Bangsa (PKB) adalah partai politik Islam-Nasionalis yang didirikan pada tahun 1998 di awal era reformasi Indonesia. PKB deskripsikan oleh Carnegie Endowment sebagai partai sayap kanan yang memiliki hubungan sejarah kuat dengan organisasi Islam terbesar di Indonesia, Nahdlatul Ulama (NU)."
        }
    ]

    return (
        <div className="h-[150vh] w-screen bg-white pt-32 px-[56px]">
            <h1 className="text-3xl font-bold text-primary ">No. {params.id}</h1>
            <div className="w-full h-full flex gap-10">
                <div className="w-full h-full mt-10">
                    <h1 className="font-bold text-[#333132] italic text-[48px]">Anies & Cak Imin</h1>
                    <h2 className="font-medium text-[#333132] italic text-[24px] mb-10">&apos;Indonesia Adil Makmur untuk Semua&apos;</h2>
                    {
                        data.map((item, index) => (
                            <CardCandidate
                                key={index}
                                {...data[index]}
                            />
                        ))

                    }

                    <h1 className="text-primary font-semibold text-[24px]">Didukung oleh partai:</h1>
                    <div className="flex gap-5 mt-5 relative">
                        {
                            dataPartai.map((item, index) => (
                                <CardPartai key={index} {...dataPartai[index]}/>
                            ))
                        }
                    </div>
                </div>

                <div className="w-full h-full mt-10">
                    <div className="w-full flex justify-between items-center">
                        <h1 className="text-primary font-semibold text-[36px]">Gagasan Utama</h1>
                        <button className="h-[40px] w-1/4 rounded-xl bg-primary">
                            <Link
                                href={`https://drive.google.com/drive/u/0/folders/1Q5YafoG9q6oUY4rZJXCm1nBC6GnXHCAr`}
                                target="_blank"
                            >

                                <div>
                                    <h2 className="font-medium text-[12px]">Unduh Visi Misi</h2>
                                </div>

                    </Link>
                        </button>

                </div>
            </div>
        </div>
        </div>
    );
}

export default Page;