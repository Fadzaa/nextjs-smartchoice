import Image from "next/image";
import {bottomCountdown, iconCountdown, topCountdown} from "@/app/lib/utils/svg";
import CountdownTimer from "@/app/(pages)/countdown/components/countdown-timer";

function CountdownPage() {
    const date = new Date('2024-02-14T00:00:00')
    const seconds = Math.floor((date - new Date()) / 1000)
    return (
        <div className="h-[120vh] w-screen relative bg-white">
            <Image
                className="w-full object-cover absolute -top-10"
                src={topCountdown}
                alt="Top Countdown Decoration"
                width={1000}
                height={280}
            />

            <div className="h-full w-full flex items-center justify-center px-[100px] py-[295px]">
                <div className="w-full flex flex-col items-center">
                    <h1 className="text-primary font-bold text-[36px] tracking-widest">COUNTDOWN PEMILU 2024</h1>
                    <CountdownTimer initialTime={seconds}/>
                    <p className="text-[#9C9AB6] text-sm">Ayo ramaikan pemilu 2024 di tanggal 14 Februari 2023</p>
                </div>
                <div className="h-full w-full">
                <Image
                        className="w-full h-full object-fill"
                        src={iconCountdown}
                        alt="Icon Countdown"
                        width={1000}
                        height={1000}/>
                </div>
            </div>

            <Image
                className="w-full object-cover absolute bottom-0"
                src={bottomCountdown}
                alt="Bottom Countdown Decoration"
                width={1000}
                height={280}
            />
        </div>
    );
}

export default CountdownPage;