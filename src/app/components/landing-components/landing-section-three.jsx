import { anies, ganjar, prabowo } from "@/app/lib/utils/image";
import Image from "next/image";

const data = [
  {
    id: 1,
    name: "Anies Rasyid Baswedan",
    position: "Calon presiden No Urut 1",
    imageSrc: anies,
  },{
    id: 2,
    name: "Prabowo Subianto",
    position: "Calon presiden No Urut 2",
    imageSrc: prabowo,
  },{
    id: 3,
    name: "Ganjar Pranowo",
    position: "Calon presiden No Urut 3",
    imageSrc: ganjar,
  },
];

export default function LandingComponentThree() {
  return (
    <main className="w-screen h-[45vh] mt-32 px-16">
      <div className="w-full h-full flex flex-row rounded-2xl py-8 px-16 bg-[#FCEAEC]">
        <div className="w-2/5 h-full ">
          <div className="w-full h-full gap-8 flex flex-col">
            <h1 className="text-primary font-bold text-5xl leading-[60px]">
              <span className="text-black">Kenali</span> rekam jejak & gagasan{" "}
              <span className="text-black">kandidat</span>
            </h1>
            <h3 className="text-base font-normal text-black pr-6">
              Kandidat presiden dan wakil presiden memainkan peran sentral dalam
              pemilihan, sehingga penting untuk memahami latar belakang,
              afiliasi partai, dukungan, dan visi mereka.
            </h3>
            <div>
              <button className="bg-gradient-to-b from-rose-400 to-red-500  py-3 px-5 rounded-2xl">
                <h2 className="text-base font-semibold">
                  Lihat Profil Kandidat
                </h2>
              </button>
            </div>
          </div>
        </div>
        <div className="w-3/5 h-full flex flex-row justify-between">
          {data.map((candidate, index) => (
            <div
              key={index}
              className="w-[30%] h-full px-8 py-4 flex flex-col gap-4 bg-white rounded-xl"
              style={{ boxShadow: "0 5px 4px rgba(255, 113, 113, 0.4)" }}
            >
              <Image src={candidate.imageSrc} className="w-full rounded-xl" />
              <h1 className="text-xl font-semibold text-black">
                {candidate.name}
              </h1>
              <p className="text-sm font-normal text-primary">
                {candidate.position}
              </p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
