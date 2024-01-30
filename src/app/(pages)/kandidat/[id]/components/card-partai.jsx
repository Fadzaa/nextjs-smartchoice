import React from 'react';
import Image from "next/image";

function CardPartai({image, name, description}) {
    return (
        <div className="
        bg-white
        h-[70px] w-[70px] duration-300 flex justify-center items-center border border-black border-opacity-10 rounded-xl p-3 hover:p-8
        hover:w-full hover:h-auto hover:absolute hover:transition-transform transition-none hover:justify-start hover:items-start hover:flex-col
        group
        ">
            <div className="group-hover:flex group-hover:items-center group-hover:gap-5 group-hover:mb-7 block">
                <Image
                    className="h-full w-full group-hover:h-[70px] group-hover:w-[70px] rounded-[10px] bg-black block"
                    src={image}
                    alt="name"
                    width={1000}
                    height={1000}
                />
                <h1 className="font-semibold text-black text-2xl hidden group-hover:block">{name}</h1>
            </div>
            <p className="text-sm text-[#4D4D4D] hidden group-hover:block">{description}</p>

        </div>
    );
}

export default CardPartai;