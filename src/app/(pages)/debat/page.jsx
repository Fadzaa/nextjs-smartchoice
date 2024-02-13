import Debate from "@/app/lib/services/debate";
import React from "react";
import DebateEmbedVideo from "./components/DebateEmbedVideo";
import DebateSection from "./components/DebateSection";
import DebateCard from "./components/DebateSection";
import TitleDebate from "./components/TitleDebate";

export default async function DebatPage() {
  const listDebate = await Debate();
  const data = [
    {
      createdAt: "2024-02-12",
      Title: "Debate Title 1",
      Theme: "Theme 1",
      LinkYt: "https://youtu.be/3_NZRBahmb0?si=63MXK81zl_QoSKZb",
      embed: "https://www.youtube.com/embed/3_NZRBahmb0?si=63MXK81zl_QoSKZb",
    },
    {
      createdAt: "2024-02-13",
      Title: "Debate Title 2",
      Theme: "Theme 2",
      LinkYt: "https://youtu.be/3_NZRBahmb0?si=63MXK81zl_QoSKZb",
      embed: "https://www.youtube.com/embed/3_NZRBahmb0?si=63MXK81zl_QoSKZb",
    },
    {
      createdAt: "2024-02-14",
      Title: "Debate Title 3",
      Theme: "Theme 3",
      LinkYt: "https://youtu.be/3_NZRBahmb0?si=63MXK81zl_QoSKZb",
      embed: "https://www.youtube.com/embed/3_NZRBahmb0?si=63MXK81zl_QoSKZb",
    },
  ];

  return (
    <div className="bg-white">
      <div className="py-20 pb-20">
        <TitleDebate />
        <div className="flex flex-col gap-32 mx-24 ">
          {listDebate.map((debate, index) => (
            <div
              key={index}
              className={`h-[350px] flex justify-between ${
                index % 2 === 0 ? "flex-row" : "flex-row-reverse"
              }`}
            >
              <DebateSection
                createdAt={debate.date}
                Title={debate.name}
                Theme={debate.description}
                LinkYt={debate.link}
                index={index}
              />
              <DebateEmbedVideo embed={debate.link} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
