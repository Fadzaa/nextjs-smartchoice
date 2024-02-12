import { anies, cakimin, prabowo } from "@/app/lib/utils/image";
import HeroCandidate from "@/app/(pages)/profile-kandidat/[id]/components/hero-candidate";
import BiographyCandidate from "@/app/(pages)/profile-kandidat/[id]/components/biography-candidate";
import SosmedCandidate from "@/app/(pages)/profile-kandidat/[id]/components/sosmed-candidate";
import AchievementCandidate from "@/app/(pages)/profile-kandidat/[id]/components/achievement-candidate";
import { FiArrowLeftCircle } from "react-icons/fi";
import Link from "next/link";
import candidateProfile from "@/app/lib/services/candidate-profile";

async function Page({ params }) {
  const data = await candidateProfile(params.id);

  return (
    <div className=" w-screen pb-24 bg-white pt-32 px-[56px]">
      <Link href={`/kandidat`}>
        <div className="w-60 gap-3 text-primary flex cursor-pointer">
          <h2>
            {" "}
            <FiArrowLeftCircle size={25} />{" "}
          </h2>
          <h1 className="text-xl font-bold text-primary mb-16">
            KANDIDAT LAINNYA
          </h1>
        </div>
      </Link>

      <div className="flex flex-col gap-28">
        <HeroCandidate
          name={data.name}
          role={data.position}
          image={data.image}
          background={
            data.short_profile
          }
        />

        <BiographyCandidate
          number={data.id}
          birthdatePlace={data.birthday_place}
          position={data.candidate_as}
          asset={data.total_asset}
        />

        <SosmedCandidate
          linkInstagram={data.link_instagram}
          linkTwitter={data.link_twitter}
        />

        <AchievementCandidate dataGagasan={data.achievements} />
      </div>
    </div>
  );
}

export default Page;
