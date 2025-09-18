import React, { useState } from "react";

export default function Trainer() {
  const [open, setOpen] = useState(false);

  return (
    <main className="w-full text-gray-800 bg-gray-100">
      {/* ===== Header ===== */}
      <header className="absolute top-0 inset-x-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-16 sm:h-20 flex items-center justify-between">
            {/* โลโก้ */}
            <a href="/" className="flex items-center gap-2">
              <span className="text-white text-2xl sm:text-3xl font-extrabold tracking-wide">
                <span className="text-red-500">FIT</span>MATE
              </span>
            </a>
            {/* เมนู desktop */}
            <nav className="hidden md:flex items-center gap-8">
              {[
                { name: "home", href: "/" },
                { name: "trainers", href: "/trainer" }, // <-- เชื่อมไป trainer.tsx
                { name: "reviews", href: "/review" },
                { name: "contact us", href: "/contactus" }
              ].map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-white text-lg font-semibold hover:text-red-400 hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer"
                >
                  {item.name}
                </a>
              ))}
            </nav>
            {/* Hamburger icon mobile */}
            <button
              className="md:hidden flex items-center text-white"
              onClick={() => setOpen(!open)}
              aria-label="Open menu"
            >
              <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
                <path
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
        {/* Mobile menu */}
        {open && (
          <div className="md:hidden bg-red-600 px-6 py-8">
            <nav className="flex flex-col gap-6">
              {[
                { name: "home", href: "/" },
                { name: "trainers", href: "/trainer" }, // <-- เชื่อมไป trainer.tsx
                { name: "reviews", href: "/review" },
                { name: "contact us", href: "/contactus" }
              ].map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-white text-xl font-bold"
                  onClick={() => setOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </nav>
          </div>
        )}
      </header>

      {/* ===== Hero Section ===== */}
      <section className="relative overflow-hidden">
        <div className="relative h-[220px] sm:h-[320px]">
          <img
            src="/images/hero-trainer.jpg"
            alt="Personal training"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="relative z-10 max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
            <h1 className="text-white font-extrabold leading-tight text-2xl sm:text-4xl md:text-5xl mb-4">
              พบกับเทรนเนอร์ของเรา
            </h1>
          </div>
        </div>
      </section>

      {/* ===== จุดเด่นเทรนเนอร์ ===== */}
      <section className="bg-white py-8">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          <div className="md:col-span-2 flex flex-col items-start md:items-center md:text-left">
            <div className="inline-block bg-red-500 text-white px-4 py-2 rounded-full font-bold mb-4">
              จุดเด่นเทรนเนอร์ของเรา
            </div>
            <div className="text-gray-800 font-bold mb-2">
              เทรนเนอร์มืออาชีพของเรา<br />
              พร้อมช่วยคุณบรรลุสู่เป้าหมายด้านสุขภาพและฟิตเนส<br />
              ด้วยประสบการณ์และความเข้าใจในแต่ละเป้าหมายของลูกค้าอย่างแท้จริง
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="flex flex-col items-center mb-2">
              <img src="/images/icon1.png" alt="" className="w-10 h-10 mb-1" />
              <span className="text-red-500 font-bold text-sm">พร้อมให้คำปรึกษาและแนะนำ</span>
            </div>
            <div className="flex flex-col items-center mb-2">
              <img src="/images/icon2.png" alt="" className="w-10 h-10 mb-1" />
              <span className="text-red-500 font-bold text-sm">ประสบการณ์จริง</span>
            </div>
            <div className="flex flex-col items-center">
              <img src="/images/icon3.png" alt="" className="w-10 h-10 mb-1" />
              <span className="text-red-500 font-bold text-sm">รีวิวลูกค้ากว่า 500+ คน</span>
            </div>
          </div>
        </div>
      </section>

      {/* ===== ค้นหาเทรนเนอร์ที่คุณต้องการ ===== */}
      <section className="py-6 bg-white">
        <div className="max-w-6xl mx-auto px-4 flex flex-col items-center">
          <a
            href="#trainer-list"
            className="bg-red-500 text-white px-6 py-2 rounded-full font-semibold hover:bg-red-600 active:bg-red-700 transition-all duration-200 mb-6"
          >
            ค้นหาเทรนเนอร์ที่คุณต้องการ
          </a>
        </div>
      </section>

      {/* ===== ความเชี่ยวชาญของเรา ===== */}
      <section className="bg-white py-6">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1">
            <img
              src="/images/trainer-session.jpg"
              alt="Personal training session"
              className="w-full h-auto object-cover rounded-2xl"
            />
          </div>
          <div className="flex-1">
            <div className="inline-block bg-red-500 text-white px-4 py-2 rounded-full font-bold mb-4">
              ความเชี่ยวชาญของเรา
            </div>
            <div className="text-gray-800 font-bold mb-2">
              เรามุ่งมั่นที่จะช่วยให้คุณไปถึงเป้าหมายสุขภาพด้วยโปรแกรมการฝึกที่ออกแบบเฉพาะบุคคล พร้อมให้คำแนะนำเรื่องการออกกำลังกาย และโภชนาการ
            </div>
          </div>
        </div>
      </section>

      {/* ===== ทีมเทรนเนอร์ของเรา ===== */}
      <section id="trainer-list" className="py-8 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-center text-red-600 mb-8">
            ทีมเทรนเนอร์ของเรา
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="bg-gray-100 rounded-2xl shadow p-4 flex flex-col items-center">
                <img
                  src={`/images/trainer${i}.jpg`}
                  alt={`เทรนเนอร์ ${i}`}
                  className="w-28 h-28 rounded-full object-cover mb-4"
                />
                <div className="bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold mb-2">
                  2023
                </div>
                <div className="font-bold text-lg mb-1">ชื่อเทรนเนอร์ {i}</div>
                <div className="text-gray-600 text-sm mb-2">ตำแหน่ง / ความถนัด</div>
                <div className="flex gap-1 text-yellow-400 justify-center" aria-label="5 stars">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <svg key={j} viewBox="0 0 20 20" className="w-5 h-5 fill-current">
                      <path d="M10 15.27 16.18 19l-1.64-7.03L20 7.24l-7.19-.61L10 0 7.19 6.63 0 7.24l5.46 4.73L3.82 19z" />
                    </svg>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
{/* ===== Footer ===== */}
      <footer className="bg-red-600 text-white py-12">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h4 className="text-2xl font-extrabold mb-4">FITMATE</h4>
            <p className="text-red-100 text-sm leading-6">
              เปลี่ยนพลังงานให้เป็นรูปร่างในแบบของคุณ ออกแบบโปรแกรมเวิร์คเอาต์ให้เหมาะกับแต่ละคน
            </p>
          </div>
          <div>
            <h5 className="font-bold mb-4">สำนักงานใหญ่</h5>
            <p className="text-red-100 text-sm leading-6">
              FitMate Co., Ltd.<br />
              123 ถนนสุขภาพดี<br />
              เขตออกกำลัง กรุงเทพมหานคร 10110<br />
              ประเทศไทย
            </p>
          </div>
          <div>
            <h5 className="font-bold mb-4">หน้าเรา</h5>
            <ul className="space-y-2 text-red-100 text-sm">
              <li>
                <a href="/contactus" className="hover:text-white">เกี่ยวกับเรา</a>
              </li>
              <li>
                <a href="/trainer" className="hover:text-white">เทรนเนอร์ทั้งหมด</a>
              </li>
              <li>
                <a href="/review" className="hover:text-white">รีวิวลูกค้า</a>
              </li>
              <li>
                <a href="/contactus" className="hover:text-white">ติดต่อเรา</a>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold mb-4">social links</h5>
            <div className="flex gap-4">
              <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
                <span className="text-white text-sm">f</span>
              </div>
              <div className="w-8 h-8 bg-pink-500 rounded flex items-center justify-center">
                <span className="text-white text-sm">ig</span>
              </div>
              <div className="w-8 h-8 bg-red-500 rounded flex items-center justify-center">
                <span className="text-white text-sm">yt</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
