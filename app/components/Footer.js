"use client";
import Image from "next/image";

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#8B1A2B] text-white relative pt-12 pb-6 border-t-8 border-white/20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Top Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 pb-8 border-b border-white/15 items-center">
          {/* Logos in White Box */}
          <div className="bg-white rounded-3xl p-6 lg:p-8 flex items-center justify-center gap-6 lg:gap-8 shadow-lg max-w-md mx-auto lg:mx-0 w-full lg:w-auto">

            <Image
              src="/images/logo2.png"
              alt="Foundation Logo 2"
              width={150}
              height={150}
              className="h-16 lg:h-[160px] w-auto object-contain"
            />
          </div>

          {/* New Contact Info */}
          <div className="w-full lg:w-fit mx-auto lg:mx-0 lg:ml-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-6 text-base font-medium w-fit mx-auto lg:mx-0">

              {/* Email */}
              <div className="flex items-center gap-4 hover:text-white/80 transition-colors cursor-pointer">
                <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-[#FFD600] via-[#FF004E] to-[#8A2387] flex items-center justify-center shadow-md flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <span>kamrungjai2569@hotmail.com</span>
              </div>

              {/* Facebook */}
              <div className="flex items-center gap-4 hover:text-white/80 transition-colors cursor-pointer">
                <div className="w-12 h-12 rounded-full bg-[#1877F2] flex items-center justify-center shadow-md flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                  </svg>
                </div>
                <span>EncourageHeroes</span>
              </div>

              {/* TikTok */}
              <div className="flex items-center gap-4 hover:text-white/80 transition-colors cursor-pointer">
                <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center shadow-md flex-shrink-0 relative overflow-hidden">
                  <svg className="w-6 h-6 text-white relative z-10" fill="currentColor" viewBox="0 0 448 512">
                    <path d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z" />
                  </svg>
                  {/* Fake shadow/colors for TikTok */}
                  <svg className="w-6 h-6 text-[#25F4EE] absolute top-[11px] left-[10px]" fill="currentColor" viewBox="0 0 448 512"><path d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z" /></svg>
                  <svg className="w-6 h-6 text-[#FE2C55] absolute top-[13px] left-[14px]" fill="currentColor" viewBox="0 0 448 512"><path d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z" /></svg>
                </div>
                <span>@kamrupxbfcx</span>
              </div>

              {/* Phone/WhatsApp */}
              <div className="flex items-center gap-4 hover:text-white/80 transition-colors cursor-pointer">
                <div className="w-12 h-12 rounded-full bg-[#25D366] flex items-center justify-center shadow-md flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.52 3.48C18.24 1.2 15.24 0 12 0 5.38 0 0 5.38 0 12c0 2.12.55 4.19 1.59 6L.05 24l6.14-1.61c1.76.96 3.75 1.47 5.81 1.47 6.62 0 12-5.38 12-12 0-3.21-1.25-6.23-3.48-8.38zM12 21.86c-1.78 0-3.53-.48-5.07-1.39l-.36-.21-3.77.99.99-3.68-.23-.37A9.87 9.87 0 0 1 2.14 12C2.14 6.56 6.56 2.14 12 2.14c2.63 0 5.1.1 6.97 2.89 1.86 1.87 2.89 4.35 2.89 6.97 0 5.43-4.43 9.86-9.86 9.86zm5.41-7.39c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-1.4-.66-2.58-1.46-3.66-2.81-.27-.35.03-.33.32-.91.1-.19.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51-.17-.01-.37-.01-.57-.01-.2 0-.52.07-.8.37-.27.3-1.05 1.02-1.05 2.5 0 1.47 1.07 2.9 1.22 3.1.15.2 2.12 3.23 5.12 4.53 2.01.87 2.76.94 3.78.79 1.15-.17 2.37-.97 2.7-1.9.32-.92.32-1.72.22-1.9-.1-.17-.37-.27-.67-.42z" />
                  </svg>
                </div>
                <span>091 889 9654 , 081-9739393</span>
              </div>

            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex justify-center items-center pt-8 text-[11px] text-white/50">
          <p>น้ำกำลังใจ เพื่อผู้ป่วย</p>
        </div>
      </div>
    </footer>
  );
}
