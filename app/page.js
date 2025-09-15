// app/page.js
"use client";

import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [lang, setLang] = useState("la");

  const text = {
    th: {
      login: "เข้าสู่ระบบ",
      register: "สมัครสมาชิก",
    },
    la: {
      login: "ເຂົ້າລະບົບ",
      register: "ລົງທະບຽນສະມາຊິກ",
    },
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      const isLoaded = document.readyState === "complete";
      const currentURL = window.location.href;

      if (!isLoaded) {
        // ตรวจสอบว่าอยู่ vercel หรือ netlify
        if (currentURL.includes("vercel.app")) {
          window.location.href = "https://laostar789.netlify.app/";
        } else if (currentURL.includes("netlify.app")) {
          window.location.href = "https://laostar789.vercel.app/";
        } else {
          // fallback ถ้าอยู่โดเมนอื่น
          window.location.href = "https://laostar789.vercel.app/";
        }
      }
    }, 10000); // 10 วินาที

    return () => clearTimeout(timer);
  }, []);

  const getLogin = () => {
    window.location.href = "https://app.laostar789.net/";
  };
  const getRegister = () => {
    window.location.href = "https://app.laostar789.net/register";
  };

  return (
    <div className="min-h-screen bg-[url('/bg.jpg')] bg-cover bg-center text-white relative">
      {/* dropdown เปลี่ยนภาษา */}
      <div className="absolute top-4 right-4 z-10 bg-gray-300 bg-opacity-50 rounded-md p-2">
        <select
          value={lang}
          onChange={(e) => setLang(e.target.value)}
          className="text-black px-3 py-1 rounded-md shadow"
        >
          <option value="th">🇹🇭 ไทย</option>
          <option value="la">🇱🇦 ລາວ</option>
        </select>
      </div>

      {/* โลโก้ + ปุ่ม */}
      <div className="container mx-auto px-4 py-24 text-center flex flex-col items-center justify-center min-h-screen">
        <Image
          src="/logo.gif"
          alt="Logo"
          width={450}
          height={450}
          className="mx-auto mb-8"
        />
        <button onClick={getLogin} className="button-like-glow mb-4">
          {text[lang].login}
        </button>
        <button onClick={getRegister} className="button-like-glow">
          {text[lang].register}
        </button>
      </div>
    </div>
  );
}
