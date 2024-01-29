import Image from "next/image";

function InnerCard({image, name, position}) {
    return (
        <div className="w-full h-[270px] p-3 border border-black border-opacity-10 rounded-xl ">
            <Image
                className="w-full  rounded-xl object-cover"
                src={image}
                alt={name}
                width={300}
                height={270}
            />

            <h1 className="font-bold text-[#333132] text-lg my-2">{name}</h1>
            <p className="font-medium text-[#5C5757] text-[12px]">{position}</p>

        </div>
    );
}

export default InnerCard;