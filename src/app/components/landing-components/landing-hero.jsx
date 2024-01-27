"use client";
import { useState } from "react";
import PresidenCard from "../presiden-card.jsx";
import { anies, ganjar, prabowo } from "@/app/lib/utils/image.js";

function LandingComponentHero() {
  const [activeCard, setActiveCard] = useState(0);

  const cards = [
    { title: "Anies Baswedan", image: anies },
    { title: "Prabowo Subianto", image: prabowo },
    { title: "Ganjar Pranowo", image: ganjar },
  ];

  const handleCardHover = (index) => {
    setActiveCard(index);
  };

  return (
    <div className="w-screen relative  bg-white h-[80vh] flex flex-col items-start  py-4 px-8 md:flex md:flex-row  md:px-20 md:justify-between md:items-center">
      <div className="w-[450px] h-[450px] bg-fuchsia-200 bg-opacity-30 absolute top-[-30px] -left-10 z-10 rounded-full blur-3xl" />
      <div>
        <h1 className=" z-50 font-bold text-black leading-[90px] text-6xl">
          <span className="text-primary">Temukan </span>
          <br />
          Paslon Favoritmu Disini
        </h1>
        <div className="w-24 h-1.5 bg-gradient-to-b from-rose-400 to-red-500 rounded-2xl my-4" />

        <p className="text-black font-light text-primaryText  text-lg mt-5 pr-16 ">
          Website ini menyediakan informasi seputar isu, partai politik, dan
          kandidat presiden yang relevan untuk membuat keputusan di Pemilu 2024.
        </p>

        <div className="mt-14">
          <button className="bg-gradient-to-b from-rose-400 to-red-500 text-white rounded-lg px-7 py-3 text-base font-medium">
            Cek Disini
          </button>
        </div>
      </div>

      <div className="flex mt-7 lg:ms-5 ">
        {cards.map((card, index) => (
          <PresidenCard
            key={index}
            image={card.image}
            title={card.title}
            isActive={index === activeCard}
            onHover={() => handleCardHover(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default LandingComponentHero;
