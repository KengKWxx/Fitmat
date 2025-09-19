import { useState } from "react";
import { useRouter } from "next/router";

export default function RegisterPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cfPassword, setCfPassword] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [showCfPass, setShowCfPass] = useState(false);
  const [err, setErr] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setErr(null);
    if (password !== cfPassword) {
      setErr("รหัสผ่านไม่ตรงกัน");
      return;
    }
    setLoading(true);
    // TODO: call API register
    setTimeout(() => {
      setLoading(false);
      router.push("/login");
    }, 1000);
  }

  return (
    <main
      className="min-h-screen flex items-center justify-center"
      style={{
        background: "radial-gradient(ellipse at bottom right, #ffeaea 0%, #e5e7eb 100%)",
      }}
    >
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-2xl flex flex-col items-center"
        style={{
          boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.15)",
          background: "linear-gradient(135deg, #fff 80%, #ffeaea 100%)",
        }}
      >
        <h1 className="text-3xl font-extrabold mb-2 text-center select-none">
          <span className="text-red-600 font-extrabold mr-1">F</span>
          <span className="text-gray-800 font-extrabold">ITMATE</span>
        </h1>
        <div className="text-gray-400 text-lg font-bold mb-6 select-none">เข้าสู่ระบบ</div>
        <form onSubmit={handleSubmit} className="w-full space-y-4">
          <div>
            <label className="block text-gray-700 font-bold mb-1" htmlFor="email">
              อีเมล
            </label>
            <input
              id="email"
              type="email"
              placeholder="your@email.com"
              className="w-full bg-gray-100 text-gray-700 font-medium text-base rounded-md px-4 py-2 mb-1 focus:outline-none focus:ring-2 focus:ring-red-400"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
              autoFocus
            />
          </div>
          <div className="relative">
            <label className="block text-gray-700 font-bold mb-1" htmlFor="password">
              รหัสผ่าน
            </label>
            <input
              id="password"
              type={showPass ? "text" : "password"}
              placeholder="รหัสผ่าน"
              className="w-full bg-gray-100 text-gray-700 font-medium text-base rounded-md px-4 py-2 mb-1 focus:outline-none focus:ring-2 focus:ring-red-400 pr-10"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
            />
            <button
              type="button"
              className="absolute right-3 top-9 text-gray-600"
              tabIndex={-1}
              onClick={() => setShowPass(v => !v)}
              aria-label={showPass ? "ซ่อนรหัสผ่าน" : "แสดงรหัสผ่าน"}
            >
              {showPass ? (
                <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
                  <circle cx="12" cy="12" r="3" fill="currentColor" />
                </svg>
              ) : (
                <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <rect x="3" y="3" width="18" height="18" rx="4" stroke="currentColor" strokeWidth="2"/>
                  <circle cx="12" cy="12" r="3" fill="currentColor" />
                </svg>
              )}
            </button>
          </div>
          <div className="relative">
            <label className="block text-gray-700 font-bold mb-1" htmlFor="cfPassword">
              ยืนยันรหัสผ่าน
            </label>
            <input
              id="cfPassword"
              type={showCfPass ? "text" : "password"}
              placeholder="ยืนยันรหัสผ่าน"
              className="w-full bg-gray-100 text-gray-700 font-medium text-base rounded-md px-4 py-2 mb-1 focus:outline-none focus:ring-2 focus:ring-red-400 pr-10"
              value={cfPassword}
              onChange={e => setCfPassword(e.target.value)}
              required
            />
            <button
              type="button"
              className="absolute right-3 top-9 text-gray-600"
              tabIndex={-1}
              onClick={() => setShowCfPass(v => !v)}
              aria-label={showCfPass ? "ซ่อนรหัสผ่าน" : "แสดงรหัสผ่าน"}
            >
              {showCfPass ? (
                <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
                  <circle cx="12" cy="12" r="3" fill="currentColor" />
                </svg>
              ) : (
                <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <rect x="3" y="3" width="18" height="18" rx="4" stroke="currentColor" strokeWidth="2"/>
                  <circle cx="12" cy="12" r="3" fill="currentColor" />
                </svg>
              )}
            </button>
          </div>
          {err && <p className="text-red-600 text-sm">{err}</p>}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-gradient-to-r from-red-500 to-red-400 text-white text-xl font-bold py-2 rounded-md shadow hover:from-red-600 hover:to-red-500 active:from-red-700 active:to-red-600 transition-all duration-150"
            style={{ letterSpacing: 1 }}
          >
            {loading ? "กำลังสมัคร..." : "สมัครสมาชิก"}
          </button>
        </form>
        <div className="w-full flex justify-between mt-4 text-xs text-gray-700">
          <a
            href="/login"
            className="text-blue-800 font-bold hover:underline hover:text-blue-600 transition"
          >
            เข้าสู่ระบบ
          </a>
            <a
            href="/forgotpass"
            className="text-blue-800 font-bold hover:underline hover:text-blue-600 transition"
            >
            ลืมรหัสผ่าน ?
            </a>
        </div>
      </div>
    </main>
  );
}