"use client";
import { useEffect, useRef, useState } from "react";

function AnimatedStat({ target, label }) {
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
    <div ref={ref} className="text-center p-6 bg-off-white rounded-2xl hover:-translate-y-1 transition-all duration-300">
      <h3 className="text-3xl lg:text-4xl font-black text-primary mb-1">
        {count.toLocaleString()}
      </h3>
      <p className="text-sm text-gray-500">{label}</p>
    </div>
  );
}

export default function Impact() {
  const stats = [
    { target: 12000, label: "ขวดน้ำที่จำหน่ายแล้ว" },
    { target: 350, label: "ครอบครัวที่ได้รับการช่วยเหลือ" },
    { target: 85, label: "อาสาสมัครทั่วประเทศ" },
    { target: 15, label: "โครงการที่ดำเนินการ" },
  ];

  return (
    <section id="impact" className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-center text-2xl lg:text-3xl font-extrabold text-primary-dark mb-12">
          ผลกระทบที่เราสร้าง
        </h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <AnimatedStat key={i} target={stat.target} label={stat.label} />
          ))}
        </div>
      </div>
    </section>
  );
}
