import React from "react";

export default function DebateSection({ createdAt, Title, Theme, LinkYt, index }) {
  return (
    <div className={`flex flex-col justify-between ${index % 2 === 0 ? "text-start" : "text-end"} w-6/12`}>
      <div className="flex flex-col gap-3">
        <h3 className="text-gray-400 font-medium text-lg">
          {createdAt}
        </h3>
        <h1 className="text-textSemiBlack text-5xl font-extrabold">{Title}</h1>
        <h3 className="text-textSemiBlack font-medium text-xl">
          {Theme}
        </h3>
      </div>
      <a href={LinkYt}><button className="bg-gradient-to-b from-rose-400 to-red-500 text-white rounded-lg px-7 py-3 text-base font-medium">
        Tonton Debat
      </button></a>
    </div>
  );
}
