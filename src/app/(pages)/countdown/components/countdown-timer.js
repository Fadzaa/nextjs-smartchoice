"use client"

import React, {useEffect, useState} from 'react';

function CountdownTimer({initialTime}) {
    // const storageKey = 'countdownDate';
    const [time, setTime] = useState(initialTime);
    const [days, setDays] = useState("");
    const [hours, setHours] = useState("");
    const [minutes, setMinutes] = useState("");
    const [seconds, setSeconds] = useState("");

    useEffect(() => {
        if (time <= 0) return;
        localStorage.clear()
        const intervalId = setInterval(() => {
            setTime((prevTime) => {
                // localStorage.setItem(storageKey, String(prevTime - 1));
                return prevTime - 1;
            });
        }, 1000);

        formatTime(time)

        return () => clearInterval(intervalId);
    }, [time]);

    const formatTime = (seconds) => {
        const days = Math.floor(seconds / 86400);
        const hours = Math.floor((seconds % 86400) / 3600);
        const minutes = Math.floor((seconds % 3600) / 60);
        const remainingSeconds = seconds % 60;
        setDays(String(days).padStart(2, '0'))
        setHours(String(hours).padStart(2, '0'))
        setMinutes(String(minutes).padStart(2, '0'))
        setSeconds(String(remainingSeconds).padStart(2, '0'))

        return `${String(days).padStart(2, '0')}:${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
    };

    return (
        <div className="flex gap-7 my-7">
            <div>
                <p className="text-[#C8C8C8] font-thin text-sm">Hari</p>
                <h1 className="text-[#4D4C59] text-[72px]">{days}:</h1>
            </div>
            <div>
                <p className="text-[#C8C8C8] font-thin text-sm">Jam</p>
                <h1 className="text-[#4D4C59] text-[72px]">{hours}:</h1>
            </div>
            <div>
                <p className="text-[#C8C8C8] font-thin text-sm">Menit</p>
                <h1 className="text-[#4D4C59] text-[72px]">{minutes}:</h1>
            </div>
            <div>
                <p className="text-[#C8C8C8] font-thin text-sm">Detik</p>
                <h1 className="text-[#4D4C59] text-[72px]">{seconds}</h1>
            </div>
        </div>
    );
}

export default CountdownTimer;