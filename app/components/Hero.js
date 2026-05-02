"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

function HeartSVG() {
  return (
    <svg viewBox="0 0 100 100" fill="currentColor">
      <path d="M50 88.7C50 88.7 6.3 58.3 6.3 31.3C6.3 18.1 17.1 7.3 30.3 7.3C38.5 7.3 45.8 11.4 50 17.7C54.2 11.4 61.5 7.3 69.7 7.3C82.9 7.3 93.7 18.1 93.7 31.3C93.7 58.3 50 88.7 50 88.7Z" />
    </svg>
  );
}

export default function Hero() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = ["/images/promote1.png", "/images/promote2.png", "/images/promote3.png"];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <section
      id="home"
      className={`relative ${isExpanded ? 'h-auto min-h-[500px]' : 'h-[450px] md:h-[500px] lg:h-[550px]'} flex items-center overflow-hidden pt-[90px] bg-white transition-all duration-500`}
    >
      {/* Left Red Banner Background */}
      <div className="absolute top-0 left-0 w-[35%] h-full bg-[#8B1A2B] z-[1]" />

      {/* Floating Hearts over Red */}
      {[
        { cls: "w-20 top-[15%] left-[5%]", delay: "0s", opacity: "0.8" },
        { cls: "w-12 top-[60%] left-[2%]", delay: "1.5s", opacity: "0.9" },
        { cls: "w-10 top-[30%] left-[15%]", delay: "3s", opacity: "0.7" },
        { cls: "w-16 bottom-[15%] left-[8%]", delay: "2s", opacity: "0.85" },
        { cls: "w-9 bottom-[25%] left-[20%]", delay: "4s", opacity: "0.75" },
      ].map((heart, i) => (
        <div
          key={i}
          className={`absolute ${heart.cls} animate-float-heart z-[2]`}
          style={{
            color: `rgba(255,255,255,${heart.opacity})`,
            animationDelay: heart.delay,
          }}
        >
          <HeartSVG />
        </div>
      ))}

      {/* Slider Background Images */}
      <div className="absolute top-0 right-0 w-[65%] h-full z-[1]">
        {images.map((img, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${i === currentSlide ? "opacity-100" : "opacity-0"
              }`}
          >
            <Image
              src={img}
              alt="Promote Image"
              fill
              className="object-cover"
              priority={i === 0}
            />
          </div>
        ))}
        {/* Soft gradient overlay so text is readable */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="max-w-7xl w-full mx-auto px-4 md:px-6 relative z-[10] flex items-center h-full py-8">
        {/* White Text Box overlapping Red and Slider */}
        <div className="bg-white p-6 md:p-8 lg:p-10 rounded-3xl shadow-xl max-w-lg mx-2 sm:mx-4 lg:mx-0 w-full lg:w-auto relative left-0 lg:left-[5%] transition-all duration-500">
          <h1 className="text-2xl sm:text-3xl lg:text-[36px] font-black leading-tight text-primary-dark">
            เพราะเราเชื่อว่า{" "}
            <span className="text-primary-light">&apos;กำลังใจ&apos;</span>
            <br />
            คือพลังที่ยิ่งใหญ่ที่สุด
          </h1>
          <p className="mt-3 md:mt-4 text-xs lg:text-sm text-gray-800 font-bold">
            โครงการเพื่อสังคม ภายใต้มูลนิธิดั่งพ่อสอน
          </p>

          <div className="mt-6 md:mt-8">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#E63946] text-white rounded-full text-xs font-bold hover:bg-primary-dark transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-0.5"
            >
              อ่านเพิ่มเติม
              <svg className={`w-3 h-3 transition-transform duration-300 ${isExpanded ? 'rotate-90' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            <div className={`transition-all duration-500 overflow-hidden ${isExpanded ? 'max-h-96 opacity-100 mt-6' : 'max-h-0 opacity-0 mt-0'}`}>
              <div className="p-4 bg-gray-50 rounded-xl border border-gray-100 shadow-inner text-xs lg:text-sm text-gray-700 leading-relaxed text-left">
                เรามุ่งมั่นเป็นสะพานเชื่อมโยงความดีระหว่าง &quot;ผู้ให้&quot; และ &quot;ผู้รับ&quot; ผ่าน โครงการเต็มใจ เพื่อสร้างสังคมแห่งการแบ่งปันที่ยั่งยืน พร้อมต่อลมหายใจผู้ป่วยด้วยโลหิตที่ปลอดภัย
                ส่งต่อความหวังให้ครอบครัว และสร้างความภาคภูมิใจให้ผู้บริจาค โดยมีผลิตภัณฑ์ &quot;น้ำกำลังใจ&quot; เป็นสื่อกลางแทนคำขอบคุณและร่วมรณรงค์ให้ทุกคนออกมาบริจาคเลือด
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
