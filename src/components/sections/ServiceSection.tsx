import React from "react";
import Header from "../common/Header";
import ServiceCard from "../cards/ServiceCard";

function ServiceSection() {
  const serviceData = [
    {
      id: 0,
      iconUrl: "/images/fire_training_icon.png",
      title: "Yangın Eğitim Programları",
      // title: "Portable Mobile Power Systems",
      description:
        "FireSafe, kapsamlı yangın eğitimi programları ile bireyleri ve kurumları bilinçlendirir. Yangın tehlikelerine karşı önlem alma, acil durum prosedürleri ve müdahale tekniklerini profesyonel eğitmenlerimizden öğrenin.",
        // "SolarMP meets your energy needs anywhere with portable power systems that offer fast and practical installation.",
      url:"/Mps",
      
    },
   
    {
      id: 1,
      iconUrl: "/images/fire_software_icon.png",
      title: "Yangın Güvenliği Yazılımı",
      // title: "Yeşil Enerji Danışmanlığı",
      description:
        "Bu yazılım, firmaları yangın tüplerinin yönetiminde bilinçlendirir. Barkod okuma ile tüp bilgileri ve değişim tarihlerini izleyin. Değişim gereken tüpler için hızlıca fiyat teklifi alın ve süreçlerinizi etkin yönetin.",
        // "We provide expert consultancy services in the field of renewable energy to increase your energy efficiency and reduce your environmental impact.",
      url: "/Software",
    },

    {
      id: 2,
      iconUrl: "/images/fire_consultancy_icon.png",
      title: "Yangın Danışmanlık Hizmetleri",
      // title: "Renewable Energy Software Development",
      description:
        "Uzman danışmanlarımız, tesislerinizi ve süreçlerinizi inceleyerek size özel yangın güvenliği stratejileri geliştirir. Riski en aza indirerek, maksimum koruma sağlayan çözümler sunarız.",
        // "We offer advanced software solutions for the effective management and optimisation of renewable energy sources.",
      url: "/Consultancy",
    },

    
  ];
  return (
    <section>
      {/* <Header title="service" subtitle="Our Vison & Our Goal" /> */}
      <Header title="hizmetler" subtitle="Çözümlerimiz" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-[3.56rem] justify-around mt-8 md:mt-[6.75rem]">
        {serviceData.map((service) => (
          <ServiceCard
            key={service.id}
            title={service.title}
            description={service.description}
            iconUrl={service.iconUrl}
            url = {service.url}
          />
        ))}
      </div>
    </section>
  );
}

export default ServiceSection;
