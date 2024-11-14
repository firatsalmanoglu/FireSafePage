import React from "react";
import Header from "../common/Header";
import TeamCard from "../cards/TeamCard";

function TeamSection() {
  const teamData = [
    {
      id: 0,
      imageUrl: "/images/ceo.png",
      name: <a href="Serkan_Korkmaz">Serkan Korkmaz</a>,
      profession: "Yangın Risk Uzmanı",
    },
    // {
    //   id: 1,
    //   imageUrl: "/images/firat.jpg",
    //   name: <a href="FS">Fırat Salmanoğlu</a>,
    //   profession: "Yazılım Geliştirme",
    // },
    // {
    //   id: 2,
    //   imageUrl: "/images/irea.jpg",
    //   name: "Irea Evans",
    //   profession: "Client Manager",
    // },
  ];
  return (
    <section className="mt-[9rem]">
      <Header title="ekibimiz" subtitle="Bizi Tanıyın" />
      <div className="grid grid-cols-1 gap-16  md:grid-cols-2 lg:grid-cols-3 mt-8 md:mt-[3.31rem]">
        {teamData.map((team) => (
          <TeamCard
            key={team.id}
            imageUrl={team.imageUrl}
            name= {team.name}
            profession={team.profession}
          />
        ))}
      </div>
    </section>
  );
}

export default TeamSection;
