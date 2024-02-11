import React from 'react';
import Image from "next/image";

function PartaiCard({id, image, name, description}) {
    return (
        <div className="
        flex flex-col justify-between items-center h-[395px] pt-6 w-full overflow-hidden border border-black border-opacity-10 rounded-2xl shadow-md
        hover:shadow-lg hover:transition-all duration-1000 ease-out group hover:relative hover:pt-0 hover:justify-center
        ">
            <h3 className="text-primary">No {id}</h3>
            <Image
                src={image}
                alt={name}
                width={200}
                height={200}
            />
            <div className="
            bg-[#FBFBFB] bg-opacity-95 w-full h-[100px]
            group-hover:items-center group-hover:justify-start
            group-hover:h-full group-hover:absolute flex flex-col items-center justify-center p-6">
                <h3 className="text-[#4D4D4D] text-[20px] font-semibold text-center">{name}</h3>
                <p className="text-[#4D4D4D] text-sm hidden group-hover:block text-center">{description}</p>

            </div>
        </div>
    );
}

export default PartaiCard;