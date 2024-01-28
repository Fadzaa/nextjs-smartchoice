import Image from "next/image";
import Link from "next/link";
import { logoSmartChoice } from "@/app/lib/utils/svg";


export default function Navbar() {
    return (
      <main>
        <div className="bg-white w-screen py-5 px-10 flex justify-between items-center shadow-md fixed top-0 z-30">
          <div className="flex">
            <Link href={"/"}>
              <div className="lg:flex lg:items-center lg:gap-3  ">
                <Image
                  className="w-[110px]"
                  src={logoSmartChoice}
                  alt="SmartChoice Logo"
                  height={50}
                  width={50}
                />
              </div>
            </Link>
          </div>
          <div className="flex h-full items-center flex-row gap-10">
          <ul className="hidden text-textPrimary font-medium gap-8 lg:flex ">
              <li>
                <Link href={"/courses"} className="text-base">
                  Kandidat
                </Link>
              </li>
              <li>
                <Link href={"/internship"} className="text-base">
                  Isu
                </Link>
              </li>
              <li>
                <Link href={"/partai"} className="text-base">
                  Partai
                </Link>
              </li>
              <li>
                <Link href={"/article"} className="text-base">
                  Tentang
                </Link>
              </li>
            </ul>
  
            <div>
              <button className="bg-primary text-white rounded-lg px-5 py-2 text-base font-medium">
                Pemilu 2024
              </button>
            </div>
  
          </div>
          
        </div>
      </main>
    );
  }