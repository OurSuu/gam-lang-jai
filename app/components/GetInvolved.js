export default function GetInvolved() {
  const cards = [
    {
      title: "สมัครอาสาสมัคร",
      desc: "ร่วมเป็นส่วนหนึ่งในทีมอาสาสมัครของเรา เพื่อช่วยเหลือผู้ป่วยและผู้ด้อยโอกาส",
      btn: "สมัครเลย",
    },
    {
      title: "ส่งโครงการ",
      desc: "หากคุณมีโครงการเพื่อสังคมที่อยากนำเสนอ ส่งรายละเอียดมาให้เราพิจารณา",
      btn: "ส่งรายละเอียด",
    },
    {
      title: "แชร์เรื่องราว",
      desc: "แบ่งปันเรื่องราวดีๆ ของมูลนิธิให้คนรอบข้างรู้จัก เพื่อขยายพลังแห่งกำลังใจ",
      btn: "แชร์ตอนนี้",
    },
  ];

  return (
    <section id="involved" className="py-20 px-6 bg-light-gray">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-center text-2xl lg:text-3xl font-extrabold text-primary-dark mb-12">
          มีส่วนร่วมกับเรา
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, i) => (
            <div
              key={i}
              className="bg-white p-8 rounded-2xl flex flex-col items-center text-center shadow-md hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300"
            >
              <div className="w-16 h-16 mb-5 rounded-full bg-primary/10 flex items-center justify-center">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#C41E3A"
                  strokeWidth="2"
                  className="w-8 h-8"
                >
                  {i === 0 && (
                    <>
                      <circle cx="12" cy="8" r="4" />
                      <path d="M6 20c0-3.3 2.7-6 6-6s6 2.7 6 6" />
                    </>
                  )}
                  {i === 1 && (
                    <>
                      <rect x="5" y="3" width="14" height="18" rx="2" />
                      <path d="M9 10h6M9 14h4" />
                    </>
                  )}
                  {i === 2 && (
                    <path d="M12 3l2.5 5.5H20l-4.5 3.5 1.5 5.5L12 14l-5 3.5 1.5-5.5L4 8.5h5.5z" />
                  )}
                </svg>
              </div>
              <h3 className="text-lg font-bold text-primary-dark mb-3">
                {card.title}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed mb-6">
                {card.desc}
              </p>
              <a
                href="#"
                className="inline-block px-6 py-2.5 bg-primary text-white rounded-full font-semibold text-sm hover:bg-primary-dark hover:-translate-y-0.5 transition-all duration-300"
              >
                {card.btn}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
