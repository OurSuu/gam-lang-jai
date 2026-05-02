"use client";
import Image from "next/image";

function HeartSVG() {
  return (
    <svg viewBox="0 0 100 100" fill="currentColor">
      <path d="M50 85C50 85 10 55 10 30C10 15 25 5 40 15C50 22 50 22 50 22C50 22 50 22 60 15C75 5 90 15 90 30C90 55 50 85 50 85Z" />
      <path
        d="M25 25C30 15 45 25 50 35"
        stroke="white"
        strokeWidth="4"
        strokeLinecap="round"
        fill="none"
        opacity="0.5"
      />
    </svg>
  );
}

export default function About() {
  return (
    <section id="about" className="py-20 md:py-28 px-6 bg-[#F8F9FA] relative overflow-hidden">
      {/* Floating Hearts */}
      {[
        { cls: "w-12 top-[10%] left-[5%]", delay: "0s", opacity: "0.6" },
        { cls: "w-8 top-[60%] left-[10%]", delay: "1.5s", opacity: "0.5" },
        { cls: "w-16 bottom-[10%] right-[5%]", delay: "2s", opacity: "0.7" },
        { cls: "w-10 top-[20%] right-[15%]", delay: "3s", opacity: "0.5" },
      ].map((heart, i) => (
        <div
          key={i}
          className={`absolute ${heart.cls} animate-float-heart z-[1] text-[#E63946]`}
          style={{
            opacity: heart.opacity,
            animationDelay: heart.delay,
          }}
        >
          <HeartSVG />
        </div>
      ))}

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-start relative z-[2]">
        {/* Left Column */}
        <div className="animate-fade-in-up delay-100">
          <h2 className="text-3xl lg:text-[36px] font-extrabold text-[#8B1A2B] mb-6">
            เกี่ยวกับเรา
          </h2>
          <p className="text-[13px] md:text-[15px] leading-[1.8] text-gray-800 font-medium mb-6">
            เรามุ่งมั่นเป็นสะพานเชื่อมโยงความดีระหว่าง &quot;ผู้ให้&quot; และ &quot;ผู้รับ&quot; ผ่าน โครงการเต็มใจ เพื่อสร้างสังคมแห่งการแบ่งปันที่ยั่งยืน พร้อมต่อลมหายใจผู้ป่วยด้วยโลหิตที่ปลอดภัย
          </p>
          <a href="#projects" className="inline-block text-[#8B1A2B] text-[14px] font-bold underline decoration-2 underline-offset-4 hover:text-primary-light transition-colors">
            เรียนรู้เพิ่มเติม ทางคอมพิวเตอร์ &gt;
          </a>
        </div>

        {/* Right Column */}
        <div className="md:pt-14 animate-fade-in-up delay-200">
          <p className="text-[13px] md:text-[15px] leading-[1.8] text-gray-800 font-medium mb-6">
            โครงการเพื่อสังคม ภายใต้มูลนิธิดั่งพ่อสอนพาพวกเรา<br className="hidden md:block" />
            ผลักดันและเผยแพร่ ผลิตภัณฑ์ &quot;น้ำกำลังใจ&quot;
          </p>
          <a
            href="#projects"
            className="inline-block px-8 py-2.5 bg-[#8B1A2B] text-white rounded-full text-[14px] font-bold hover:bg-primary-dark transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5"
          >
            เรียนรู้เพิ่มเติม &gt;
          </a>
        </div>
      </div>
    </section>
  );
}
