import { useState } from "react";
import { useRouter } from "next/router";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setErr(null);

    try {
      const res = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password })
      });

      const data = await res.json();
      if (!res.ok) {
        setErr(data.message || "เข้าสู่ระบบไม่สำเร็จ");
        return;
      }

      localStorage.setItem("token", data.token);
      router.push("/");
    } catch (e) {
      setErr("เกิดข้อผิดพลาด");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-200">
      <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-lg flex flex-col items-center">
        {/* โลโก้และหัวข้อ */}
        <h1 className="text-2xl font-bold mb-6 text-center">
          <span className="text-red-600 font-extrabold mr-1">F</span>
          <span className="text-gray-700 font-extrabold">ITMATE</span>
          <span className="text-gray-400 font-bold ml-2">Login</span>
        </h1>

        <form onSubmit={handleSubmit} className="w-full space-y-4">
          <div>
            <input
              type="email"
              placeholder="Email"
              className="w-full bg-gray-200 text-gray-700 font-bold text-lg rounded-md px-4 py-2 mb-2 focus:outline-none focus:ring-2 focus:ring-red-400"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              autoFocus
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Password"
              className="w-full bg-gray-200 text-gray-700 font-bold text-lg rounded-md px-4 py-2 mb-2 focus:outline-none focus:ring-2 focus:ring-red-400"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {err && <p className="text-red-600 text-sm">{err}</p>}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-red-600 text-white text-xl font-bold py-2 rounded-md shadow hover:bg-red-700 active:bg-red-800 transition-all duration-150"
            style={{ letterSpacing: 1 }}
          >
            {loading ? "กำลังเข้าสู่ระบบ..." : "LOGIN"}
          </button>
        </form>
        <div className="w-full flex justify-between mt-4 text-xs">
          <a href="/register" className="text-blue-800 font-bold hover:underline">Register</a>
          <a href="/forgotpass" className="text-blue-800 font-bold hover:underline">Forget Password ?</a>
        </div>
      </div>
    </main>
  );
}
