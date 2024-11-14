import React from "react";
import MainButton from "../common/MainButton";

function ContactSection() {
  return (
    <section className="flex justify-between flex-col md:flex-row gap-4 items-center">
      <div>
        <p className="font-[850] md:leading-[5.0625rem] text-2xl md:text-[3.375rem] text-darkBlue">
          {/* Sustainable Power Solutions Anywhere, Anytime */}
          İletişim
        </p>
        <p className="text-[1.375rem] font-[500]">
          {/* Clean and sustainable energy solutions anytime, anywhere with SolarMP. */}
          İletişim Formu Gelecek
        </p>
        <br></br>
        <br></br>
        <br></br>
        
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
          src="/images/contact.png"
          alt="guy with phone surrounded by action icons"
        />
      </div>
    </section>
  );
}

export default ContactSection;
