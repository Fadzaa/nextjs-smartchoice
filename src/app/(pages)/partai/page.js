
import HeroComponent from "./components/hero-component";
import SearchBar from "@/app/(pages)/partai/components/search-bar";
import partai from "@/app/lib/services/partai";
import PartaiCard from "@/app/(pages)/partai/components/partai-card";
import {anies, ganjar, prabowo} from "@/app/lib/utils/image";

export default async function PartaiPage({searchParams}) {

    const search =
        typeof searchParams.search === 'string' ? searchParams.search : "";

    const listPartai = await partai(search)
    console.log(listPartai)

    
  return (
    <main className="w-screen pt-32 pb-32 bg-white ">
      <div className="px-[15vw] gap-16 mb-16">
          <HeroComponent />
          <SearchBar/>
      </div>
        <div className="grid grid-cols-4 w-full gap-8 px-[94px]">
            {listPartai.map((partai, index) => (
                <PartaiCard
                    key={partai.id}
                    number={partai.id}
                    image={partai.image}
                    name={partai.party_name}
                />
            ))}
        </div>
    </main>
  );
}
