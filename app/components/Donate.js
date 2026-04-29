export default function Donate() {
  return (
    <section
      id="donate"
      className="py-20 px-6 text-center"
      style={{ background: "linear-gradient(135deg, #8B1A2B 0%, #6B1420 100%)" }}
    >
      <div className="max-w-2xl mx-auto">
        <h2 className="text-2xl lg:text-3xl font-extrabold text-white mb-4">
          ร่วมเป็นส่วนหนึ่งกับเรา
        </h2>
        <p className="text-white/85 text-base leading-relaxed mb-8">
          ทุกการบริจาคของคุณ จะถูกส่งต่อเป็นกำลังใจให้กับผู้ที่ต้องการความช่วยเหลือ
          <br />
          ร่วมสร้างพลังใจ 1 ขวด = 1 บาท
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#"
            className="px-8 py-3 bg-white text-primary rounded-full font-bold text-base shadow-lg hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
          >
            บริจาคเลย
          </a>
          <a
            href="#"
            className="px-8 py-3 bg-transparent text-white border-2 border-white rounded-full font-bold text-base hover:bg-white hover:text-primary hover:-translate-y-1 transition-all duration-300"
          >
            อุดหนุนน้ำกำลังใจ
          </a>
        </div>
      </div>
    </section>
  );
}
