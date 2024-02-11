"use client"

import {useEffect, useState} from "react";
import {useRouter} from "next/navigation";
import {useDebounce} from "use-debounce";

function SearchBar() {
    const router = useRouter()
    const [searchQuery, setSearchQuery] = useState('');
    const [query] = useDebounce(searchQuery, 300);

    useEffect(() => {
        if (searchQuery) {
            router.push(`/partai?search=${searchQuery}`, {scroll: false})
        } else {
            router.push(`/partai`)
        }
    }, [query, router]);
    return (
        <div>
            <div className="w-full h-[50px] flex shadow-md rounded-[16px] overflow-hidden hover:shadow-lg hover:transition">
                <div className="w-full h-6 relative">
                    <div className="h-6 p-6 flex items-center absolute z-10">
                        {/*<Image src={iconSearch} alt="Icon Search" width={24} height={24}/>*/}
                    </div>

                    <input className="w-full h-6 p-6 ps-16 text-black absolute focus:outline-none"
                           type="text"
                           placeholder="Cari Profil Partai..."
                           value={searchQuery}
                           onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>
            </div>
        </div>
    );
}

export default SearchBar;