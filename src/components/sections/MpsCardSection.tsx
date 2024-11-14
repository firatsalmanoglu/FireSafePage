import React from "react";
import Header from "../common/Header";
import MpsCard from "../cards/MpsCard";

function MpsCardSection() {
  const serviceData = [
    {
      id: 0,
      iconUrl: "/images/fire_safety_training_icon.png",
      title: "Temel Yangın Güvenliği Eğitimi",
      // title: "Portable Mobile Power Systems",
      description:
        "Çalışanlar ve bireyler için yangın güvenliği konusunda temel bilgi ve becerileri kazandırmayı hedefler.",
        // "SolarMP meets your energy needs anywhere with portable power systems that offer fast and practical installation.",
      url:"/"
    },
    {
      id: 1,
      iconUrl: "/images/fire_intervention_icon.png",
      title: "İleri Seviye Müdahale Teknikleri",
      // title: "Renewable Energy Software Development",
      description:
        "Yangınla mücadelede ileri seviye müdahale yöntemleri ve ekipman kullanımı konusunda derinlemesine eğitim sunar.",
        // "We offer advanced software solutions for the effective management and optimisation of renewable energy sources.",
        url:"/"
    },
    {
      id: 2,
      iconUrl: "/images/fire_emergncy_icon.png",
      title: "Acil Durum ve Tahliye Tatbikatları",
      // title: "Yeşil Enerji Danışmanlığı",
      description:
        "Katılımcıları acil durumlara hazırlamak için pratik tahliye senaryoları ve tatbikat uygulamaları gerçekleştirir.",
        // "We provide expert consultancy services in the field of renewable energy to increase your energy efficiency and reduce your environmental impact.",
        url:"/"
    },
  ];
  return (
    <section>
      {/* <Header title="service" subtitle="Our Vison & Our Goal" /> */}
      {/* <Header title="hizmetler" subtitle="Çözümlerimiz" /> */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-[3.56rem] justify-around mt-8 md:mt-[6.75rem]">
        {serviceData.map((service) => (
          <MpsCard
            key={service.id}
            title={service.title}
            description={service.description}
            iconUrl={service.iconUrl}
            url={service.url}
          />
        ))}
      </div>
    </section>
  );
}

export default MpsCardSection;
