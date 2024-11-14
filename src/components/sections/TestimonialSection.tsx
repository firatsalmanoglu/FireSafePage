import React from "react";
import Header from "../common/Header";
import TestimonialCard from "../cards/TestimonialCard";

function TestimonialSection() {
  const appReviewData = [
    {
      id: 0,
      imageUrl: "/images/proj1_icon.png",
      reviewerName: "Kurum içi ve kamuya açık yangın güvenliği eğitimlerinin düzenlenmesi, simülasyonlarla desteklenmesi ve sertifikalı eğitmenlerle yangın bilincinin artırılması.",
      review:
        "Yangın Güvenliği Eğitim Programları",
    },

    {
      id: 1,
      imageUrl: "/images/proj2_icon.png",
      reviewerName: "Tesislerdeki yangın ekipmanlarının durumunu takip eden, periyodik bakım ve değişim tarihlerini hatırlatan dijital bir platform geliştirilmesi.",
      review:
        "Yangın Uygunluk Takip Sistemi",
    },
    {
      id: 2,
      imageUrl: "/images/proj3_icon.png",
      reviewerName: "Fotovoltaik ve rüzgar enerji sistemlerine yönelik yangın güvenlik önlemlerinin geliştirilmesi ve bu tesislerde özel eğitim programları hazırlanması.",
      review: "Yenilenebilir Enerji Tesislerinde Yangın Güvenliği",
    },
    {
      id: 3,
      imageUrl: "/images/proj4_icon.png",
      reviewerName: "Özellikle yüksek ve kompleks yapılar için özelleştirilmiş acil durum tatbikatlarının planlanması ve uygulanması, acil durumda etkili müdahaleyi sağlayacak senaryoların geliştirilmesi.",
      review:
        "Yüksek Yapılar için Yangın Tatbikatları ve Acil Durum Yönetimi",
    },
  ];
  return (
    <section className="mt-[9rem]">
      <Header title="projeler" subtitle="Yangın Eğitimi ve Bilinciyle Geleceğinize Güven Veriyoruz" />
      <div className="grid grid-cols-1 gap-16  md:grid-cols-2 mt-8 md:mt-[6.75rem]">
        {appReviewData.map((review) => (
          <TestimonialCard
            key={review.id}
            imageUrl={review.imageUrl}
            review={review.review}
            reviewerName={review.reviewerName}
          />
        ))}
      </div>
    </section>
  );
}

export default TestimonialSection;
