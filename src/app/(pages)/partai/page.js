
import HeroComponent from "./components/hero-component";
import SearchBar from "@/app/(pages)/partai/components/search-bar";
import partai from "@/app/lib/services/partai";
import PartaiCard from "@/app/(pages)/partai/components/partai-card";
import {anies, ganjar, prabowo} from "@/app/lib/utils/image";

export default async function PartaiPage({searchParams}) {

    const search =
        typeof searchParams.search === 'string' ? searchParams.search : "";

    // const listPartai = await partai(search)
    // console.log(listPartai)

    const listPartai = [
        {
            id: 1,
            image: prabowo,
            party_name: "Gerindra",
            description: "Partai Gerakan Indonesia Raya",
        },
        {
            id: 2,
            image: ganjar,
            party_name: "PDIP",
            description: "Partai Gerakan Indonesia Raya",
        },
        {
            id: 3,
            image: anies,
            party_name: "PKS",
            description: "Partai Gerakan Indonesia Raya",
        },
        {
            id: 4,
            image: anies,
            party_name: "PKB",
        },
        {
            id: 5,
            image: anies,
            party_name: "Nasdem",
        },
        {
            id: 6,
            image: anies,
            party_name: "Demokrat",
        },
        {
            id: 7,
            image: anies,
            party_name: "PAN",
        },
        {
            id: 8,
            image: anies,
            party_name: "PPP",
        },
        {
            id: 9,
            image: anies,
            party_name: "PKS",
        },
        {
            id: 10,
            image: anies,
            party_name: "PKB",
        },
        {
            id: 11,
            image: anies,
            party_name: "Nasdem",
        },
        {
            id: 12,
            image: anies,
            party_name: "Demokrat",
        },
        {
            id: 13,
            image: anies,
            party_name: "PAN",
        },
        {
            id: 14,
            image: anies,
            party_name: "PPP",
        },
        {
            id: 15,
            image: anies,
            party_name: "PKS",
        },
        {
            id: 16,
            image: anies,
            party_name: "PKB",
        },
        {
            id: 17,
            image: anies,
            party_name: "Nasdem",
        },
        {
            id: 18,
            image: anies,
            party_name: "Demokrat",
        },
        {
            id: 19,
            image: anies,
            party_name: "PAN",
        },
        {
            id: 20,
            image: anies,
            party_name: "PPP",
        },
    ]

    
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
                    {...listPartai[index]}
                />
            ))}
        </div>
    </main>
  );
}
