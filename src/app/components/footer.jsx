import Image from "next/image";
import {
  iconFacebookWhite,
  iconInstagramWhite,
  iconTwitterWhite,
  logoSmartChoiceWhite,
} from "@/app/lib/utils/svg";

function Footer() {
  return (
    <div className="bg-primary justify-center items-center  flex flex-col px-[21px] py-[70px]">
      <div className="flex items-center text-white gap-3">
        <Image
          className="w-28"
          src={logoSmartChoiceWhite}
          alt="SmartCarrier Logo"
          width={25}
          height={25}
        />
      </div>

      <p className="text-white text-xs opacity-50 text-center my-7 lg:my-10 lg:text-sm">
        SmartChoice adalah sebuah gerakan independen, dan tidak terafiliasi
        kandidat atau partai politik tertentu
      </p>

      <ul className="gap-5 lg:gap-14 flex flex-col lg:flex-row items-center text-white text-[15px] mb-12 lg:mb-16">
        <li>Tentang Kami</li>
        <li>Kritik Saran</li>
        <li>Kontak</li>
      </ul>

      <div className="flex gap-10 items-center">
        <Image
          className="w-4 h-4 lg:w-6 lg:h-6"
          src={iconFacebookWhite}
          alt="IconFacebook"
          width={20}
          height={20}
        />
        <Image
          className="w-4 h-4 lg:w-6 lg:h-6"
          src={iconTwitterWhite}
          alt="Icon Twitter"
          width={20}
          height={20}
        />
        <Image
          className="w-4 h-4 lg:w-6 lg:h-6"
          src={iconInstagramWhite}
          alt="Icon Instagram"
          width={20}
          height={20}
        />
      </div>
    </div>
  );
}

export default Footer;
