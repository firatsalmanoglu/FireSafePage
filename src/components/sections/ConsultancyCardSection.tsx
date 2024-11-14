import React from "react";
import Header from "../common/Header";
import ConsultancyCard from "../cards/ConsultancyCard";

function ConsultancyCardSection() {
  const serviceData = [
    {
      id: 0,
      iconUrl: "/images/risk_assessment_icon.png",
      title: "Risk Değerlendirme ve Analizi",
      // title: "Portable Mobile Power Systems",
      description:
        "Yangın risklerini belirlemek ve minimize etmek için kapsamlı bina ve süreç değerlendirmeleri sunar.",
        // "SolarMP meets your energy needs anywhere with portable power systems that offer fast and practical installation.",
      url:"/"
    },
    {
      id: 1,
      iconUrl: "/images/planning_icon.png",
      title: "Yangın Güvenliği Planlaması",
      // title: "Renewable Energy Software Development",
      description:
        "Kurumunuza özel, etkili yangın önleme ve müdahale stratejileri geliştirir.",
        // "We offer advanced software solutions for the effective management and optimisation of renewable energy sources.",    },
        url:"/"
    },
    {
      id: 2,
      iconUrl: "/images/equipment_select_icon.png",
      title: "Ekipman Seçimi ve Yerleşimi",
      // title: "Yeşil Enerji Danışmanlığı",
      description:
        "Yangın güvenliği ekipmanlarının doğru seçimi ve stratejik yerleşimi konusunda uzman rehberliği sağlar.",
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
          <ConsultancyCard
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

export default ConsultancyCardSection;
