import { FiSearch } from "react-icons/fi";

export default function MainComponent() {
  return (
    <div className="w-screen h-[80vh] px-16 mt-20">
      <div className="w-full px-[18vw] h-16">
        <div className="w-full shadow-2xl items-center rounded-2xl h-full flex flex-row">
            <h2 className="pl-6 text-[#D8D8D8]"><FiSearch  size={30}/></h2>
          <input className="w-full text-black px-3 rounded-xl focus:outline-none" placeholder={` Cari Profil Partai...`} type="search" name="" id="" />
        </div>
      </div>
    </div>
  );
}
