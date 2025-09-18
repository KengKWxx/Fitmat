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
    <main className="min-h-screen flex items-center justify-center bg-gray-200">
      <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-lg flex flex-col items-center">
        <h1 className="text-2xl font-bold mb-6 text-center">
          <span className="text-red-600 font-extrabold mr-1">F</span>
          <span className="text-gray-700 font-extrabold">ITMATE</span>
          <span className="text-gray-400 font-bold ml-2">Register</span>
        </h1>
        <form onSubmit={handleSubmit} className="w-full space-y-4">
          <div>
            <input
              type="email"
              placeholder="Email"
              className="w-full bg-gray-200 text-gray-700 font-bold text-lg rounded-md px-4 py-2 mb-2 focus:outline-none focus:ring-2 focus:ring-red-400"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
              autoFocus
            />
          </div>
          <div className="relative">
            <input
              type={showPass ? "text" : "password"}
              placeholder="Password"
              className="w-full bg-gray-200 text-gray-700 font-bold text-lg rounded-md px-4 py-2 mb-2 focus:outline-none focus:ring-2 focus:ring-red-400 pr-10"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
            />
            <button
              type="button"
              className="absolute right-3 top-3 text-gray-600"
              tabIndex={-1}
              onClick={() => setShowPass(v => !v)}
              aria-label={showPass ? "ซ่อนรหัสผ่าน" : "แสดงรหัสผ่าน"}
            >
              {showPass ? (
                // ไอคอน "เปิดตา"
                <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
                  <circle cx="12" cy="12" r="3" fill="currentColor" />
                </svg>
              ) : (
                // ไอคอน "ปิดตา"
                <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <rect x="3" y="3" width="18" height="18" rx="4" stroke="currentColor" strokeWidth="2"/>
                  <circle cx="12" cy="12" r="3" fill="currentColor" />
                </svg>
              )}
            </button>
          </div>
          <div className="relative">
            <input
              type={showCfPass ? "text" : "password"}
              placeholder="Confirm Password"
              className="w-full bg-gray-200 text-gray-700 font-bold text-lg rounded-md px-4 py-2 mb-2 focus:outline-none focus:ring-2 focus:ring-red-400 pr-10"
              value={cfPassword}
              onChange={e => setCfPassword(e.target.value)}
              required
            />
            <button
              type="button"
              className="absolute right-3 top-3 text-gray-600"
              tabIndex={-1}
              onClick={() => setShowCfPass(v => !v)}
              aria-label={showCfPass ? "ซ่อนรหัสผ่าน" : "แสดงรหัสผ่าน"}
            >
              {showCfPass ? (
                // ไอคอน "เปิดตา"
                <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
                  <circle cx="12" cy="12" r="3" fill="currentColor" />
                </svg>
              ) : (
                // ไอคอน "ปิดตา"
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
            className="w-full bg-red-600 text-white text-xl font-bold py-2 rounded-md shadow hover:bg-red-700 active:bg-red-800 transition-all duration-150"
            style={{ letterSpacing: 1 }}
          >
            {loading ? "กำลังสมัคร..." : "Register"}
          </button>
        </form>
        <div className="w-full flex justify-center mt-4 text-xs">
          <a
            href="/login"
            className="text-blue-800 font-bold hover:underline text-base"
          >
            Login
          </a>
        </div>
      </div>
    </main>
  );
}