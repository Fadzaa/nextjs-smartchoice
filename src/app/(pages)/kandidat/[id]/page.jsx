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

function Page({ params }) {
  const data = [
    {
      id: 1,
      image: anies,
      name: "Anies Baswedan",
      position: "Calon Presiden No Urut 1",
    },
    {
      id: 2,
      image: cakimin,
      name: "Cak Imin",
      position: "Calon Wakil Presiden No Urut 1",
    },
  ];

  const dataPartai = [
    {
      image: anies,

      name: "Anies Baswedan",
      description:
        "Partai Kebangkitan Bangsa (PKB) adalah partai politik Islam-Nasionalis yang didirikan pada tahun 1998 di awal era reformasi Indonesia. PKB deskripsikan oleh Carnegie Endowment sebagai partai sayap kanan yang memiliki hubungan sejarah kuat dengan organisasi Islam terbesar di Indonesia, Nahdlatul Ulama (NU).",
    },
    {
      image: anies,
      name: "Anies Baswedan",
      description:
        "Partai Kebangkitan Bangsa (PKB) adalah partai politik Islam-Nasionalis yang didirikan pada tahun 1998 di awal era reformasi Indonesia. PKB deskripsikan oleh Carnegie Endowment sebagai partai sayap kanan yang memiliki hubungan sejarah kuat dengan organisasi Islam terbesar di Indonesia, Nahdlatul Ulama (NU).",
    },
    {
      image: anies,
      name: "Anies Baswedan",
      description:
        "Partai Kebangkitan Bangsa (PKB) adalah partai politik Islam-Nasionalis yang didirikan pada tahun 1998 di awal era reformasi Indonesia. PKB deskripsikan oleh Carnegie Endowment sebagai partai sayap kanan yang memiliki hubungan sejarah kuat dengan organisasi Islam terbesar di Indonesia, Nahdlatul Ulama (NU).",
    },
    {
      image: anies,
      name: "Anies Baswedan",
      description:
        "Partai Kebangkitan Bangsa (PKB) adalah partai politik Islam-Nasionalis yang didirikan pada tahun 1998 di awal era reformasi Indonesia. PKB deskripsikan oleh Carnegie Endowment sebagai partai sayap kanan yang memiliki hubungan sejarah kuat dengan organisasi Islam terbesar di Indonesia, Nahdlatul Ulama (NU).",
    },
  ];

  const dataGagasan = [
    {
      id: 1,
      idea_title: "Pendidikan",
      idea_description:
        "Indonesia harus melakukan investasi yang serius untuk menaikkan kualitas dan akses pendidikan. Laboratorium sains, bengkel kerja, dan perpustakan harus dibangun di semua sekolah yang membutuhkan. Anggaran dan daya saing riset perlu ditingkatkan.",
    },
    {
      id: 2,
      idea_title: "Kesehatan",
      idea_description:
        "Layanan kesehatan tanpa diskriminasi yang andal dan efisien",
    },
    {
      id: 3,
      idea_title: "Lapangan Kerja",
      idea_description:
        "Kota adalah tempat dimana orang-orang dengan kekayaan melimpah dapat hidup dengan nyaman, sementara di sudut-sudut kota, banyak keluarga miskin berjuang untuk sekedar hidup. Negara harus hadir untuk memitigasi ketimpangan sosial agar tidak menjadi konflik antar kelas.",
    },
    {
      id: 4,
      idea_title: "Pemberantasan Korupsi",
      idea_description:
        "Mengembalikan peran KPK dalam pemberantasan korupsi yang independen tidak tebang pilih dan memperkuat sinergi dengan aparat penegak hukum lain.",
    },
    {
      id: 5,
      idea_title: "Kebebasan Berekspresi",
      idea_description:
        "Memperbaiki regulasi yang berpotensi menimbulkan salah interpretasi yang dapat menghambat upaya menjamin kebebasan berbicara, berkumpul, dan berekspresi",
    },
    {
      id: 6,
      idea_title: "Krisis Iklim",
      idea_description:
        "Pembangunan tanpa visi ekologis menyulut krisis biodiversity yang merupakan aset berharga kita.",
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
              Anies & Cak Imin
            </h1>
            <h2 className="font-medium text-[#333132] italic text-[24px] mb-10">
              &apos;Indonesia Adil Makmur untuk Semua&apos;
            </h2>
            {data.map((item, index) => (
              <CardCandidate key={index} {...data[index]} />
            ))}

            <h1 className="text-primary font-semibold text-[24px]">
              Didukung oleh partai:
            </h1>
            <div className="flex gap-5 mt-5 relative">
              {dataPartai.map((item, index) => (
                <CardPartai key={index} {...dataPartai[index]} />
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
                  href={`https://drive.google.com/drive/u/0/folders/1Q5YafoG9q6oUY4rZJXCm1nBC6GnXHCAr`}
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
