import React from 'react';
import Image from "next/image";

function PartaiCard({number, image, name}) {
    return (
        <div className="flex flex-col justify-between items-center h-[395px] p-6 w-full border border-black border-opacity-10 rounded-2xl shadow-md hover:shadow-lg hover:transition">
            <h3 className="text-primary">No {number}</h3>
            <Image
                src={image}
                alt={name}
                width={200}
                height={200}
            />
            <h3 className="text-[#4D4D4D] text-[20px] font-semibold text-center">{name}</h3>
        </div>
    );
}

export default PartaiCard;