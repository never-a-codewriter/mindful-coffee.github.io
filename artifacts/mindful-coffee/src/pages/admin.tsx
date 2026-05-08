import { useState, useEffect } from "react";

interface Signup {
  name: string;
  contact: string;
  language: string;
  source: string;
  message: string;
  submittedAt?: string;
  timestamp?: string;
  lang?: string;
}

const STORAGE_KEY = "mindfulcoffee_signups";

function exportCSV(signups: Signup[]) {
  const headers = ["Name", "Contact", "Language", "Source", "Message", "Submitted At"];
  const rows = signups.map((s) => [
    s.name,
    s.contact,
    s.language,
    s.source,
    s.message,
    s.submittedAt || s.timestamp || "",
  ].map((v) => `"${(v || "").replace(/"/g, '""')}"`));
  const csv = [headers.join(","), ...rows.map((r) => r.join(","))].join("\n");
  const blob = new Blob(["\uFEFF" + csv], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `mindful-coffee-signups-${new Date().toISOString().slice(0, 10)}.csv`;
  a.click();
  URL.revokeObjectURL(url);
}

const langMap: Record<string, string> = { zh: "中文", en: "English", de: "Deutsch" };
const sourceMap: Record<string, string> = { friend: "朋友介绍", social: "社交媒体", other: "其他" };

export default function Admin() {
  const [signups, setSignups] = useState<Signup[]>([]);
  const [pin, setPin] = useState("");
  const [unlocked, setUnlocked] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!unlocked) return;
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      const data: Signup[] = raw ? JSON.parse(raw) : [];
      setSignups(data.reverse());
    } catch {
      setSignups([]);
    }
  }, [unlocked]);

  function handleDelete(index: number) {
    if (!confirm("确认删除这条记录？")) return;
    const updated = [...signups];
    updated.splice(index, 1);
    setSignups(updated);
    localStorage.setItem(STORAGE_KEY, JSON.stringify([...updated].reverse()));
  }

  function handleClearAll() {
    if (!confirm("确认清空所有报名记录？此操作不可撤销。")) return;
    localStorage.removeItem(STORAGE_KEY);
    setSignups([]);
  }

  if (!unlocked) {
    return (
      <div
        style={{
          minHeight: "100vh",
          background: "hsl(38 28% 95%)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "'IBM Plex Mono', monospace",
        }}
      >
        <div
          style={{
            padding: "2.5rem",
            background: "hsl(38 22% 91%)",
            border: "1px solid hsl(38 15% 78% / 0.6)",
            maxWidth: "360px",
            width: "100%",
          }}
        >
          <p
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "1.5rem",
              fontWeight: 300,
              color: "hsl(0 0% 15%)",
              marginBottom: "0.4rem",
            }}
          >
            报名管理
          </p>
          <p style={{ fontSize: "0.7rem", color: "hsl(0 0% 45%)", marginBottom: "1.5rem", letterSpacing: "0.1em" }}>
            Admin · Signup Records
          </p>
          <input
            type="password"
            placeholder="PIN码"
            value={pin}
            onChange={(e) => setPin(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                if (pin === "2025") {
                  setUnlocked(true);
                  setError("");
                } else {
                  setError("PIN码错误");
                }
              }
            }}
            style={{
              width: "100%",
              background: "transparent",
              border: "none",
              borderBottom: "1px solid hsl(0 0% 55%)",
              padding: "0.5rem 0",
              fontSize: "0.85rem",
              color: "hsl(0 0% 15%)",
              outline: "none",
              marginBottom: "1rem",
              letterSpacing: "0.15em",
            }}
          />
          {error && (
            <p style={{ fontSize: "0.7rem", color: "hsl(0 60% 45%)", marginBottom: "0.5rem" }}>{error}</p>
          )}
          <button
            onClick={() => {
              if (pin === "2025") {
                setUnlocked(true);
                setError("");
              } else {
                setError("PIN码错误");
              }
            }}
            style={{
              width: "100%",
              padding: "0.6rem",
              background: "hsl(148 20% 29%)",
              color: "hsl(38 28% 92%)",
              border: "none",
              fontSize: "0.7rem",
              letterSpacing: "0.15em",
              cursor: "pointer",
            }}
          >
            进入 / Enter
          </button>
          <p style={{ fontSize: "0.65rem", color: "hsl(0 0% 60%)", marginTop: "1.5rem", lineHeight: 1.7 }}>
            默认PIN码：2025<br />
            数据储存在此浏览器本地，仅限本设备查看。
          </p>
        </div>
      </div>
    );
  }

  return (
    <div style={{ minHeight: "100vh", background: "hsl(38 28% 95%)", padding: "2rem 1rem" }}>
      <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
        {/* Header */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "2rem", flexWrap: "wrap", gap: "1rem" }}>
          <div>
            <p
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "1.8rem",
                fontWeight: 300,
                color: "hsl(0 0% 15%)",
                marginBottom: "0.2rem",
              }}
            >
              报名记录
            </p>
            <p style={{ fontSize: "0.7rem", color: "hsl(0 0% 50%)", fontFamily: "'IBM Plex Mono', monospace", letterSpacing: "0.1em" }}>
              {signups.length} 条记录 · 数据储存于本地浏览器
            </p>
          </div>
          <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
            <button
              onClick={() => exportCSV(signups)}
              disabled={signups.length === 0}
              style={{
                padding: "0.5rem 1rem",
                background: "hsl(148 20% 29%)",
                color: "hsl(38 28% 92%)",
                border: "none",
                fontSize: "0.7rem",
                letterSpacing: "0.12em",
                cursor: signups.length === 0 ? "not-allowed" : "pointer",
                opacity: signups.length === 0 ? 0.5 : 1,
                fontFamily: "'IBM Plex Mono', monospace",
              }}
            >
              导出 CSV
            </button>
            <button
              onClick={handleClearAll}
              disabled={signups.length === 0}
              style={{
                padding: "0.5rem 1rem",
                background: "transparent",
                color: "hsl(0 50% 40%)",
                border: "1px solid hsl(0 50% 70%)",
                fontSize: "0.7rem",
                letterSpacing: "0.12em",
                cursor: signups.length === 0 ? "not-allowed" : "pointer",
                opacity: signups.length === 0 ? 0.5 : 1,
                fontFamily: "'IBM Plex Mono', monospace",
              }}
            >
              清空全部
            </button>
            <a
              href="/"
              style={{
                padding: "0.5rem 1rem",
                background: "transparent",
                color: "hsl(0 0% 45%)",
                border: "1px solid hsl(0 0% 75%)",
                fontSize: "0.7rem",
                letterSpacing: "0.12em",
                textDecoration: "none",
                fontFamily: "'IBM Plex Mono', monospace",
              }}
            >
              ← 返回网站
            </a>
          </div>
        </div>

        {/* Notice */}
        <div
          style={{
            background: "hsl(38 22% 91%)",
            border: "1px solid hsl(38 15% 78% / 0.6)",
            padding: "0.75rem 1rem",
            marginBottom: "1.5rem",
            fontSize: "0.7rem",
            color: "hsl(0 0% 40%)",
            lineHeight: 1.8,
            fontFamily: "'IBM Plex Mono', monospace",
          }}
        >
          ⚠ 报名数据仅储存在用户提交报名时所用的浏览器本地（localStorage）。<br />
          此管理页面只能查看当前设备/浏览器中收集的数据。如需跨设备汇总，请在每台设备上分别导出 CSV。
        </div>

        {/* Table */}
        {signups.length === 0 ? (
          <div
            style={{
              textAlign: "center",
              padding: "4rem",
              color: "hsl(0 0% 55%)",
              fontSize: "0.8rem",
              fontFamily: "'IBM Plex Mono', monospace",
              letterSpacing: "0.1em",
            }}
          >
            暂无报名记录
          </div>
        ) : (
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.78rem", fontFamily: "'IBM Plex Mono', monospace" }}>
              <thead>
                <tr style={{ background: "hsl(148 20% 29%)", color: "hsl(38 28% 90%)" }}>
                  {["#", "姓名", "联系方式", "语言", "来源", "留言", "提交时间", ""].map((h, i) => (
                    <th
                      key={i}
                      style={{
                        padding: "0.6rem 0.75rem",
                        textAlign: "left",
                        fontWeight: 400,
                        letterSpacing: "0.08em",
                        whiteSpace: "nowrap",
                        fontSize: "0.65rem",
                      }}
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {signups.map((s, i) => (
                  <tr
                    key={i}
                    style={{
                      background: i % 2 === 0 ? "hsl(38 28% 95%)" : "hsl(38 22% 92%)",
                      borderBottom: "1px solid hsl(38 15% 82%)",
                    }}
                  >
                    <td style={{ padding: "0.6rem 0.75rem", color: "hsl(0 0% 55%)" }}>{signups.length - i}</td>
                    <td style={{ padding: "0.6rem 0.75rem", color: "hsl(0 0% 15%)", fontWeight: 500 }}>{s.name || "—"}</td>
                    <td style={{ padding: "0.6rem 0.75rem", color: "hsl(0 0% 25%)" }}>{s.contact || "—"}</td>
                    <td style={{ padding: "0.6rem 0.75rem", color: "hsl(148 20% 30%)" }}>{langMap[s.language] || s.language || "—"}</td>
                    <td style={{ padding: "0.6rem 0.75rem", color: "hsl(0 0% 40%)" }}>{sourceMap[s.source] || s.source || "—"}</td>
                    <td style={{ padding: "0.6rem 0.75rem", color: "hsl(0 0% 35%)", maxWidth: "200px" }}>
                      <span title={s.message} style={{ display: "block", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", maxWidth: "180px" }}>
                        {s.message || "—"}
                      </span>
                    </td>
                    <td style={{ padding: "0.6rem 0.75rem", color: "hsl(0 0% 50%)", whiteSpace: "nowrap", fontSize: "0.68rem" }}>
                      {(s.submittedAt || s.timestamp) ? new Date(s.submittedAt || s.timestamp!).toLocaleString("zh-CN", { timeZone: "Europe/Berlin" }) : "—"}
                    </td>
                    <td style={{ padding: "0.6rem 0.75rem" }}>
                      <button
                        onClick={() => handleDelete(i)}
                        style={{
                          background: "transparent",
                          border: "none",
                          color: "hsl(0 50% 55%)",
                          cursor: "pointer",
                          fontSize: "0.7rem",
                          padding: "0.1rem 0.3rem",
                        }}
                        title="删除"
                      >
                        ✕
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
