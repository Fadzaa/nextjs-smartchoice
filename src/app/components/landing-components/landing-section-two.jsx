import {
  discussingIdeas,
  humanSearching,
  manStudying,
} from "@/app/lib/utils/image";
import Image from "next/image";
import { IoArrowForwardOutline } from "react-icons/io5";

const data = [
  {
    id: 1,
    title: "Pahami Isu",
    image: discussingIdeas,
    description:
      "Mulai dengan mencari tahu kebijakan terkait masalah sehari-hari yang jadi keresahanmu.",
  },
  {
    id: 2,
    title: "Kenali Partai",
    image: humanSearching,
    description:
      "Kenali partai yang sesuai denganmu dari ideologi, serta rekam jejak pemungutan suara dan korupsi.",
  },
  {
    id: 3,
    title: "Pelajari Kandidat",
    image: manStudying,
    description:
      "Cari tahu tentang rekam jejak dan gagasan dari masing-masing pasangan kandidat.",
  },
];

function LandingComponentTwo() {
  return (
    <div className="w-full bg-white h-[80vh] justify-between px-20 flex pt-28 flex-col items-center">
      <div className="flex flex-col ">
        <h2 className="font-semibold text-black text-3xl">
          3 Cara Untuk Memilih
        </h2>

        <button className="bg-primary mt-6 text-white rounded-lg px-5 py-4 text-3xl font-semibold">
          Paslon Terbaik
        </button>
      </div>
      <div className="flex flex-row w-screen mt-20 h-[35vw] justify-evenly gap-12">
        {data.map((item, index) => (
          <div
            key={index}
            className="w-[25%] h-full items-center justify-evenly flex flex-col  shadow-xl relative rounded-3xl overflow-hidden"
            style={{ boxShadow: "0 4px 8px rgba(255, 113, 113, 0.4)" }}
          >
            <Image src={item.image} className="w-52 items-center" />
            <div className="w-full flex flex-col px-16 gap-2">
              <h2 className="text-[28px] font-semibold text-primary">
                {item.title}
              </h2>
              <p className="text-sm font-normal  text-[#7F7F7F]">
                {item.description}
              </p>
            </div>
            <div className="flex flex-row w-full px-16 text-primary">
              <h2 className="text-lg font-medium">Pelajari Sekarang</h2>
              <h4>
                <IoArrowForwardOutline size={30} />
              </h4>
            </div>

            <div className="w-40 h-40 bg-red-400 pl-14 pb-8 flex absolute -top-10 -right-10 bg-opacity-60 items-end justify-start rounded-full border-2 border-rose-400">
              {" "}
              <h1 className="text-6xl font-semibold text-white">{item.id}</h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LandingComponentTwo;
