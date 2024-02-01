import Image from "next/image";

function HeroCandidate({name, role, image, background}){
    return (
        <div className="w-full">
            <h1 className="text-[#333132] font-bold text-[72px]">{name}</h1>
            <p className="text-[#333132] text-[32px] mb-10">{role}</p>

            <div className="h-[1px] w-full bg-[#333132] bg-opacity-30"></div>

            <div className="flex justify-between w-full h-[40vh] mt-16">

                <div className="w-1/3 h-full">
                    <Image
                        className="h-full w-full object-cover rounded-3xl"
                        src={image}
                        alt={name}
                        width={1000}
                        height={1000}
                    />
                </div>

                <div className="w-[60%] h-full">
                    <h1 className="font-semibold text-[36px] text-primary mb-5">Profil Singkat</h1>
                    <h1 className="text-[18px] text-black leading-8">{background}</h1>
                </div>

            </div>
        </div>
    );
}

export default HeroCandidate;