"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

function AnimatedNumber({ target, suffix = "", colorClass = "text-primary-dark" }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const animated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animated.current) {
          animated.current = true;
          const duration = 2000;
          const steps = 60;
          const increment = target / steps;
          let current = 0;
          const interval = setInterval(() => {
            current += increment;
            if (current >= target) {
              setCount(target);
              clearInterval(interval);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <span ref={ref} className={`text-4xl lg:text-5xl font-black ${colorClass}`}>
      {count.toLocaleString()}{suffix}
    </span>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 bg-[#FAFAFA] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-10 right-10 text-[#E63946] opacity-30 animate-pulse">
        <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
      </div>
      <div className="absolute bottom-20 left-10 text-[#E63946] opacity-40 animate-bounce" style={{animationDuration: '4s'}}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
      </div>
      
      <h2 className="text-center text-3xl lg:text-4xl font-extrabold text-[#8B1A2B] mb-12 relative z-[2]">
        โครงการและกิจกรรมหลัก
      </h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 pt-8">
        {/* Card 1 - Blood Donation */}
        <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group">
          <div className="bg-[#E63946] px-6 py-4 text-center">
            <h3 className="text-white text-[17px] font-bold">บริจาคโลหิต</h3>
          </div>
          <div className="p-8 flex flex-col items-center text-center">
            <div className="w-20 h-20 mb-2 flex items-center justify-center text-[#2B4B8A]">
              {/* Antenna SVG */}
              <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 14a2 2 0 100-4 2 2 0 000 4z" fill="#2B4B8A"/>
                <path d="M16.24 7.76a6 6 0 010 8.49m-8.48 0a6 6 0 010-8.49m11.31-2.82a10 10 0 010 14.14m-14.14 0a10 10 0 010-14.14" stroke="#2B4B8A" strokeWidth="2"/>
                <path d="M12 14v7" stroke="#2B4B8A" strokeWidth="2"/>
              </svg>
            </div>
            <div className="mb-1">
              <AnimatedNumber target={50} colorClass="text-[#5A101D]" />
            </div>
            <p className="text-[11px] sm:text-xs text-gray-800 leading-relaxed font-medium mt-1">
              ออกหน่วยและรับบริจาคเลือด
              <br />
              จัดบูธรับบริจาคโลหิต
            </p>
          </div>
        </div>

        {/* Card 2 - Help Patients */}
        <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group">
          <div className="bg-[#E63946] px-6 py-4 text-center">
            <h3 className="text-white text-[17px] font-bold">ช่วยเหลือผู้ป่วย</h3>
          </div>
          <div className="p-8 text-center flex flex-col items-center">
            <div className="w-20 h-20 mb-2 flex items-center justify-center text-[#E63946]">
              {/* Hand with Heart SVG */}
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-16 h-16">
                <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" fill="#FBA6A6" stroke="#E63946" strokeWidth="1"/>
                <path d="M7 14h.01M17 14h.01M12 18h.01" />
                <path d="M12 22v-4" />
                <path d="M10 22h4" />
              </svg>
            </div>
            <div className="mb-1">
              <AnimatedNumber target={4500} colorClass="text-black" />
            </div>
            <p className="text-[11px] sm:text-xs text-gray-800 leading-relaxed font-medium mt-1">
              ผู้ป่วยที่ได้รับการช่วยเหลือ
              <br />
              และต่อลมหายใจ
            </p>
          </div>
        </div>

        {/* Card 3 - Nam Kamlangjai */}
        <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group flex flex-col relative z-20">
          <div className="bg-[#E63946] px-6 py-4 text-center rounded-t-2xl">
            <h3 className="text-white text-[17px] font-bold">น้ำกำลังใจ</h3>
          </div>
          <div className="p-5 flex-1 flex flex-col justify-center items-center bg-[#F8F9FA] rounded-b-2xl relative">
            {/* The Inner Card Layout */}
            <div className="w-full bg-white rounded-2xl shadow-sm border border-gray-100 p-4 flex items-center relative h-full min-h-[220px]">
              
              {/* Left Column: Text & Quote */}
              <div className="w-[65%] md:w-[60%] pr-2 md:pr-4 relative z-10">
                {/* Dotted border decoration */}
                <div className="absolute left-0 top-2 bottom-6 w-full border-l-2 border-b-2 border-dotted border-primary/30 rounded-bl-lg pointer-events-none"></div>
                
                <div className="pl-2 md:pl-3 relative">
                  <div className="text-primary text-3xl font-serif leading-none absolute -top-1 -left-2">“</div>
                  <h4 className="text-[18px] md:text-[22px] font-black text-gray-900 mt-3 text-center tracking-tight">ขอบคุณ</h4>
                  <p className="text-[10px] sm:text-[11px] text-gray-600 mt-1 text-center leading-tight">
                    ที่ร่วมบริจาคและเป็นส่วนหนึ่ง...
                  </p>
                  
                  <div className="flex items-end justify-center gap-1 mt-3">
                    <span className="text-gray-500 text-[10px] md:text-[11px] font-medium mb-0.5">จาก.</span>
                    <div className="h-4 md:h-5 w-12 md:w-14 bg-red-50/50 border border-primary/20 rounded-sm"></div>
                    <span className="text-primary text-xl md:text-2xl font-serif leading-none">”</span>
                  </div>
                  
                  <div className="text-center mt-5">
                    <a href="#contact" className="inline-block text-[11px] md:text-[12px] font-bold text-primary underline decoration-2 underline-offset-4 hover:text-primary-dark transition-colors">
                      ขอบคุณกำลังใจ &gt;
                    </a>
                  </div>
                </div>
              </div>

              {/* Right Column: Bottle Image (Overflowing) */}
              <div className="absolute right-[-30px] md:right-[-60px] top-1/2 -translate-y-1/2 flex justify-center items-center z-50 pointer-events-none">
                {/* Floating Hearts */}
                <div className="absolute -left-2 md:-left-4 top-5 md:top-10 text-[#E63946] animate-pulse">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="md:w-6 md:h-6">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                  </svg>
                </div>
                
                <Image
                  src="/images/Bottle.png"
                  alt="ขวดน้ำกำลังใจ"
                  width={400}
                  height={800}
                  className="object-contain drop-shadow-2xl animate-float-bottle"
                  style={{ height: 'var(--bottle-height, 180px)', width: 'auto', maxWidth: 'none', transform: 'translateY(-10px)' }}
                  unoptimized={true}
                />
                <style jsx>{`
                  @media (min-width: 768px) {
                    img { --bottle-height: 320px !important; }
                  }
                `}</style>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
