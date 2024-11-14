import React from "react";
import Header from "../common/Header";
import SoftwareCard from "../cards/SoftwareCard";

function SoftwareCardSection() {
  const serviceData = [
    {
      id: 0,
      iconUrl: "/images/monitoring_icon.png",
      title: "Otomatik İzleme ve Hatırlatma Hizmeti",
      // title: "Portable Mobile Power Systems",
      description:
        "Kurumsal firmalar için yangın tüplerinin düzenli kontrollerini ve değişim tarihlerini yönetmeyi kolaylaştırır. Barkod okuma teknolojisi sayesinde tüp üzerindeki tüm bilgilere hızlıca erişir ve yaklaşan değişim tarihlerini otomatik hatırlatmalarla bildirerek güvenliğinizi aksatmaz.",
        // "SolarMP meets your energy needs anywhere with portable power systems that offer fast and practical installation.",
      url:"/"
    },
    {
      id: 1,
      iconUrl: "/images/supplier_icon.png",
      title: "Entegre Tedarikçi Ağı",
      // title: "Renewable Energy Software Development",
      description:
        "Değişim veya dolum zamanı gelen yangın tüpleri için yazılım aracılığıyla, sistemde kayıtlı tedarikçilerden anında fiyat teklifi alabilirsiniz. Böylece en uygun teklifi değerlendirerek süreçlerinizi hızlı ve verimli bir şekilde yürütebilirsiniz.",
        // "We offer advanced software solutions for the effective management and optimisation of renewable energy sources.",
        url:"/"
    },
    {
      id: 2,
      iconUrl: "/images/dashboard_icon.png",
      title: "Detaylı Raporlama ve Analiz",
      // title: "Yeşil Enerji Danışmanlığı",
      description:
        "Tüm yangın tüpü envanterinizi ve değişim süreçlerinizi detaylı raporlama ile takip edin. Bu özellik, güvenlik düzenlemelerine uyum sağlamanıza yardımcı olurken, yangın güvenliği stratejilerinizi optimize etmenizi kolaylaştırır.",
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
          <SoftwareCard
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

export default SoftwareCardSection;
