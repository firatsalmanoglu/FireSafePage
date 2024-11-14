import React from "react";
import MainButton from "../common/MainButton";

function AboutSection() {
  return (
    <section className="flex justify-between flex-col md:flex-row gap-4 items-center">
      <div>
        <p className="font-[850] md:leading-[5.0625rem] text-2xl md:text-[3.375rem] text-darkBlue">
          {/* Sustainable Power Solutions Anywhere, Anytime */}
          Hakkımızda
        </p>
        <p className="text-[1.375rem] font-[500]">
          {/* Clean and sustainable energy solutions anytime, anywhere with SolarMP. */}
          FireSafe, yangın güvenliği alanında yenilikçi çözümler sunan öncü bir firmadır. Misyonumuz, bireyler ve kurumlar için maksimum güvenlik sağlamak ve yangın risklerini en aza indirmektir. Uzman ekibimizle eğitim programları, danışmanlık hizmetleri ve yazılım çözümleri sunarak, müşterilerimizin yangın güvenliği standartlarını yükseltmelerine yardımcı oluyoruz. Teknoloji ve eğitimi birleştirerek, daha güvenli bir gelecek için çalışıyoruz.                           
        </p>
        <br></br>
        <br></br>
        <br></br>
        <p className="font-[400] md:leading-[5.0625rem] text-2xl md:text-[2.375rem] text-darkBlue">
          {/* Sustainable Power Solutions Anywhere, Anytime */}
          Misyonumuz
        </p>
        <p className="text-[1.375rem] font-[500]">
          {/* Clean and sustainable energy solutions anytime, anywhere with SolarMP. */}
          FireSafe olarak misyonumuz, bireyler ve kurumlar için yangın güvenliği bilincini artırarak hayatları ve mülkleri korumaktır. Eğitim programlarımız, danışmanlık hizmetlerimiz ve yenilikçi yazılım çözümlerimizle, müşterilerimizin yangın risklerini etkin bir şekilde yönetmelerine yardımcı olur, güvenli bir çevreye katkıda bulunuruz.

        </p>
        <br></br>
        <br></br>
        <p className="font-[400] md:leading-[5.0625rem] text-2xl md:text-[2.375rem] text-darkBlue">
          {/* Sustainable Power Solutions Anywhere, Anytime */}
          Vizyonumuz
        </p>
        <p className="text-[1.375rem] font-[500]">
          {/* Clean and sustainable energy solutions anytime, anywhere with SolarMP. */}
          Vizyonumuz, yangın güvenliği alanında lider bir çözüm sağlayıcı olarak tanınmak ve dünya genelinde güvenlik standartlarını yükseltmektir. Teknolojiyi ve eğitimi bir araya getirerek, tüm paydaşlarımız için daha güvenli bir gelecek inşa etmeyi amaçlıyoruz.
        </p>

        <div className="flex gap-[1.75rem] items-center mt-[3rem]">
          {/* <MainButton text="Get Started" classes="shadow-none w-[10.125rem]" /> */}
          {/* <div className="flex gap-[1.56rem] items-center">
            <img src="/images/yellow_play_icon.png" alt="play icon" />
            <p className="font-bold text-normal"><a href="https://eusolar.ege.edu.tr/">Daha Fazla Bilgi </a></p>
           

          </div> */}
        </div>
      </div>
      <div>
        <img
          src="/images/about_us.png"
          alt="guy with phone surrounded by action icons"
        />
      </div>
    </section>
  );
}

export default AboutSection;
