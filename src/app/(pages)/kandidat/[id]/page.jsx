import CardCandidate from "@/app/(pages)/kandidat/[id]/components/card-candidate";
import { anies, cakimin } from "@/app/lib/utils/image";
import CardPartai from "@/app/(pages)/kandidat/[id]/components/card-partai";
import Link from "next/link";
import Image from "next/image";
import { iconDownload, iconPuzzle } from "@/app/lib/utils/svg";
import { LuPlus } from "react-icons/lu";
import { FaGraduationCap } from "react-icons/fa6";
import { FaMoneyBill } from "react-icons/fa";
import { HiSpeakerWave } from "react-icons/hi2";
import { IoEarthSharp } from "react-icons/io5";
import AccordionIdeas from "./components/accordion-idea";
import candidatePair from "@/app/lib/services/candidate-pair";

async function Page({ params }) {
  const data = await candidatePair(params.id)

  const dataCandidates = [
    {
      id: 1,
      image: data.pres_image,
      name: data.pres_candidate,
      position: `Calon Presiden No Urut ${params.id}`,
    },
    {
      id: 2,
      image: data.vice_image,
      name: data.vice_candidate,
      position: `Calon Wakil Presiden No Urut ${params.id}`,
    },
  ];

  const dataGagasan = [
    {
      id: 1,
      idea_title: "Pendidikan",
      idea_description: data.education,
    },
    {
      id: 2,
      idea_title: "Kesehatan",
      idea_description: data.health,
    },
    {
      id: 3,
      idea_title: "Lapangan Kerja",
      idea_description: data.job,
    },
    {
      id: 4,
      idea_title: "Pemberantasan Korupsi",
      idea_description: data.corrupt,
    },
    {
      id: 5,
      idea_title: "Kebebasan Berekspresi",
      idea_description:data.freedom_of_expression,
    },
    {
      id: 6,
      idea_title: "Krisis Iklim",
      idea_description: data.climate_crisis,
    },
  ];

  const iconIdeas = [
    {
      id: 1,
      icon: <FaGraduationCap size={20} />,
    },
    {
      id: 2,
      icon: <LuPlus size={20} />,
    },
    {
      id: 3,
      icon: <FaGraduationCap size={20} />,
    },
    {
      id: 3,
      icon: <FaGraduationCap size={20} />,
    },
    {
      id: 4,
      icon: <FaMoneyBill size={20} />,
    },
    {
      id: 5,
      icon: <FaMoneyBill size={20} />,
    },
    {
      id: 6,
      icon: <HiSpeakerWave size={20} />,
    },
    {
      id: 7,
      icon: <IoEarthSharp size={20} />,
    },
  ];

  return (
   
      <div className=" w-screen pb-24 bg-white pt-32 px-[56px]">
        <h1 className="text-3xl font-bold text-primary ">No. {params.id}</h1>

        <div className="w-full h-full flex gap-10">
          <div className="w-full h-full mt-10">
            <h1 className="font-bold text-[#333132] italic text-[48px]">
              {data.pair_name}
            </h1>
            <h2 className="font-medium text-[#333132] italic text-[24px] mb-10">
              {data.pair_slogan}
            </h2>

            {dataCandidates.map((item, index) => (
              <CardCandidate key={index} {...dataCandidates[index]} />
            ))}

            <h1 className="text-primary font-semibold text-[24px]">
              Didukung oleh partai:
            </h1>
            <div className="flex gap-5 mt-5 relative">
              {data.parties.map((item, index) => (
                <CardPartai key={index} {...data.parties[index]} />
              ))}
            </div>
          </div>

          <div className="w-full h-full mt-10">
            <div className="w-full flex mb-24 justify-between items-center">
              <div className="flex gap-3 items-center">
                <Image
                  src={iconPuzzle}
                  alt="Icon Puzzle"
                  width={40}
                  height={40}
                />
                <h1 className="text-primary font-semibold text-[32px]">
                  Gagasan Utama
                </h1>
              </div>

              <button className="h-[40px] w-1/4 rounded-xl bg-primary">
                <Link
                  href={data.vision_mission_link}
                  target="_blank"
                >
                  <div className="flex gap-2 items-center justify-center">
                    <Image
                      src={iconDownload}
                      alt="Icon Download"
                      width={16}
                      height={16}
                    />
                    <h2 className="font-medium text-[12px]">Unduh Visi Misi</h2>
                  </div>
                </Link>
              </button>
            </div>

            <AccordionIdeas dataGagasan={dataGagasan} iconIdeas={iconIdeas} />
          </div>
        </div>
      </div>
    
  );
}

export default Page;
