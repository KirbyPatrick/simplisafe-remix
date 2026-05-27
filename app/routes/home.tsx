import type { MetaFunction } from "react-router";
import { useState } from "react";

export const meta: MetaFunction = () => [
  { title: "SimpliSafe® Home Security Systems" },
  { name: "description", content: "Advanced whole home security with 24/7 professional monitoring. No contracts. No cancellation fees." },
];

// ─── Sub-components ───────────────────────────────────────────

function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000,
      background: "var(--ss-dark)", height: "var(--nav-h)",
      display: "flex", alignItems: "center", padding: "0 32px", gap: 0,
    }}>
      <a href="/" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none", marginRight: 40, flexShrink: 0 }}>
        <ShieldLogo size={34} />
        <span style={{ fontFamily: "var(--font-body)", fontSize: 20, fontWeight: 600, color: "#fff", letterSpacing: "-0.3px" }}>
          SimpliSafe<span style={{ color: "#6ec6e8" }}>®</span>
        </span>
      </a>
      <div style={{ display: "flex", alignItems: "center", gap: 4, flex: 1 }}>
        {["Shop Packages", "Monitoring", "Build My System"].map((label) => (
          <a key={label} href="#packages" style={{
            color: "#fff", textDecoration: "none", fontSize: 14, fontWeight: 400,
            padding: "8px 14px", borderRadius: 4, transition: "background 0.15s",
          }}
          onMouseEnter={e => (e.currentTarget.style.background = "rgba(255,255,255,0.08)")}
          onMouseLeave={e => (e.currentTarget.style.background = "transparent")}
          >{label}</a>
        ))}
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: 12, marginLeft: "auto" }}>
        <a href="tel:1-833-838-3556" style={{ color: "#fff", textDecoration: "none", fontSize: 13, opacity: 0.85 }}>
          1-833-838-3556
        </a>
        <button style={{
          background: "transparent", border: "1.5px solid rgba(255,255,255,0.3)",
          color: "#fff", padding: "7px 18px", borderRadius: 4, fontFamily: "var(--font-body)",
          fontSize: 13, fontWeight: 500, cursor: "pointer",
        }}>Cart (0)</button>
      </div>
    </nav>
  );
}

function TopBar() {
  return (
    <div style={{
      background: "#0d1f3c", textAlign: "center", padding: "9px 16px",
      fontSize: 13, color: "rgba(255,255,255,0.85)",
      position: "fixed", top: "var(--nav-h)", left: 0, right: 0, zIndex: 999,
    }}>
      ⚡ Your first month of professional monitoring is <strong>FREE</strong> —{" "}
      <a href="#packages" style={{ color: "#6ec6e8", textDecoration: "none" }}>Shop now</a>
    </div>
  );
}

function Hero() {
  return (
    <section style={{
      background: "var(--ss-dark)", color: "#fff",
      display: "grid", gridTemplateColumns: "1fr 1fr",
      minHeight: 620, overflow: "hidden",
    }}>
      <div style={{ padding: "72px 56px 72px 80px", display: "flex", flexDirection: "column", justifyContent: "center", gap: 28 }}>
        <p style={{ fontSize: 12, fontWeight: 600, letterSpacing: 2, textTransform: "uppercase", color: "#6ec6e8", margin: 0 }}>
          Whole Home Protection
        </p>
        <h1 style={{
          fontFamily: "var(--font-serif)", fontSize: "clamp(32px, 3.8vw, 52px)",
          fontWeight: 700, lineHeight: 1.1, letterSpacing: "-0.5px", margin: 0,
        }}>
          Built for security.<br />Not surveillance.
        </h1>
        <p style={{ fontSize: 16, fontWeight: 300, lineHeight: 1.65, color: "rgba(255,255,255,0.78)", maxWidth: 440, margin: 0 }}>
          SimpliSafe® delivers advanced, whole home security, plus gives you control of your personal information.
          More than 5 million people trust our system backed by 24/7 professional monitoring.
        </p>
        <div style={{ display: "flex", alignItems: "center", gap: 20, flexWrap: "wrap" }}>
          <a href="#quiz" className="btn-primary">Take Our Quiz</a>
          <a href="#packages" className="btn-outline-white">Build Your System</a>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 10, marginTop: 8 }}>
          {[
            'US News "Best Home Security Systems" — 5 Years Running',
            "No contracts. No cancellation fees. No kidding.",
            "Anti-Theft Guarantee helps cover loss from break-ins",
            "Your first month of professional monitoring is free",
          ].map((text) => (
            <div key={text} style={{ display: "flex", alignItems: "flex-start", gap: 12, fontSize: 13, color: "rgba(255,255,255,0.75)" }}>
              <span style={{ color: "#6ec6e8", fontWeight: 700, flexShrink: 0 }}>✓</span>
              {text}
            </div>
          ))}
        </div>
      </div>
      <div style={{
        background: "linear-gradient(135deg, #0d1f3c 0%, #1a3a7c 50%, #0f2d5c 100%)",
        display: "flex", alignItems: "center", justifyContent: "center", position: "relative",
      }}>
        <div style={{
          width: 300, background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.12)",
          borderRadius: 20, display: "flex", flexDirection: "column", alignItems: "center",
          justifyContent: "center", gap: 24, padding: 32,
        }}>
          <ShieldLogo size={80} color="#e8441a" checkColor="#fff" />
          <div style={{ textAlign: "center", color: "rgba(255,255,255,0.85)", fontSize: 15, fontWeight: 300, lineHeight: 1.5 }}>
            Whole home protection<br />24/7 professional monitoring
          </div>
          <span style={{
            background: "rgba(110,198,232,0.15)", border: "1px solid rgba(110,198,232,0.3)",
            color: "#6ec6e8", fontSize: 12, fontWeight: 600, letterSpacing: 1,
            textTransform: "uppercase", padding: "6px 16px", borderRadius: 20,
          }}>Armed &amp; Active</span>
        </div>
      </div>
    </section>
  );
}

function TrustBar() {
  const items = [
    { icon: "🏆", title: '"Best Home Security"', sub: "US News — 6 Years Running" },
    { icon: "⭐", title: "5M+ Protected Homes", sub: "Across the United States" },
    { icon: "🛡️", title: "24/7 Monitoring", sub: "Professional agents always on" },
    { icon: "📱", title: "4.8★ App Rating", sub: "300K ratings on App Store" },
    { icon: "💯", title: "60-Day Money Back", sub: "Try it risk-free" },
  ];
  return (
    <div style={{
      background: "var(--ss-off-white)", borderBottom: "1px solid var(--ss-light-gray)",
      padding: "28px 80px", display: "flex", alignItems: "center",
      justifyContent: "center", gap: 64, flexWrap: "wrap",
    }}>
      {items.map((item) => (
        <div key={item.title} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4, textAlign: "center" }}>
          <span style={{ fontSize: 24 }}>{item.icon}</span>
          <strong style={{ fontSize: 14, fontWeight: 600 }}>{item.title}</strong>
          <span style={{ fontSize: 12, color: "var(--ss-text-muted)", maxWidth: 140 }}>{item.sub}</span>
        </div>
      ))}
    </div>
  );
}

function ActiveGuard() {
  const steps = [
    { title: "AI camera detects a potential threat", body: "Our outdoor camera alerts the monitoring center of a possible intruder on your property." },
    { title: "Agent assesses in under 30 seconds", body: "A live agent reviews the situation — they can see, speak, and sound your siren remotely." },
    { title: "Priority police dispatch", body: "Agents can request priority dispatch with video verification of a crime in progress." },
  ];
  return (
    <section id="monitoring" style={{ background: "var(--ss-dark)", color: "#fff", padding: "80px" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}>
        <div>
          <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: 2.5, textTransform: "uppercase", color: "#6ec6e8", marginBottom: 12 }}>
            SimpliSafe® Exclusive
          </p>
          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(28px, 3vw, 40px)", fontWeight: 700, lineHeight: 1.18, marginBottom: 16 }}>
            Goodbye old guard. Say hello to modern home security.
          </h2>
          <p style={{ fontSize: 16, fontWeight: 300, color: "rgba(255,255,255,0.65)", lineHeight: 1.65, marginBottom: 32 }}>
            AI-powered outdoor cameras and live agents work together to help prevent crime before it happens.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
            {steps.map((step, i) => (
              <div key={i} style={{ display: "flex", gap: 18, alignItems: "flex-start" }}>
                <div style={{
                  width: 36, height: 36, borderRadius: "50%", background: "var(--ss-accent)",
                  color: "#fff", display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: 14, fontWeight: 700, flexShrink: 0,
                }}>{i + 1}</div>
                <div>
                  <strong style={{ display: "block", fontSize: 14, fontWeight: 600, marginBottom: 4 }}>{step.title}</strong>
                  <p style={{ fontSize: 13, color: "rgba(255,255,255,0.65)", lineHeight: 1.5, margin: 0 }}>{step.body}</p>
                </div>
              </div>
            ))}
          </div>
          <a href="#packages" className="btn-primary" style={{ display: "inline-block", marginTop: 32 }}>
            See How We Guard Your Home
          </a>
        </div>
        <div style={{
          background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)",
          borderRadius: 16, padding: 40, display: "flex", flexDirection: "column", gap: 20,
        }}>
          <div style={{
            background: "#0d1f3c", borderRadius: 10, height: 180,
            display: "flex", alignItems: "center", justifyContent: "center",
            border: "1px solid rgba(255,255,255,0.08)", position: "relative",
          }}>
            <span style={{ position: "absolute", top: 12, left: 12, background: "rgba(0,0,0,0.6)", color: "#fff", fontSize: 11, padding: "3px 8px", borderRadius: 3 }}>
              📷 Front Yard — LIVE
            </span>
            <span style={{ position: "absolute", top: 12, right: 12, background: "var(--ss-accent)", color: "#fff", fontSize: 10, fontWeight: 700, padding: "3px 10px", borderRadius: 3 }}>
              ⚠ Motion Detected
            </span>
            <div style={{ display: "flex", flexDirection: "column", gap: 6, width: "60%" }}>
              {[80, 60, 90].map((w, i) => (
                <div key={i} style={{ height: 2, width: `${w}%`, background: "rgba(110,198,232,0.3)", borderRadius: 2 }} />
              ))}
            </div>
          </div>
          <div style={{ display: "flex", gap: 12 }}>
            {[["< 28s", "Avg. Response"], ["Active", "Agent Status"], ["HD", "Feed Quality"]].map(([val, lbl]) => (
              <div key={lbl} style={{
                flex: 1, background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: 8, padding: 12, textAlign: "center", fontSize: 12, color: "rgba(255,255,255,0.7)",
              }}>
                <strong style={{ display: "block", fontSize: 16, color: "#6ec6e8", marginBottom: 2 }}>{val}</strong>
                {lbl}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Packages() {
  const packages = [
    {
      name: "Indoor Basic", title: "The Starter Package", featured: false,
      desc: "Essential indoor protection for apartments and smaller homes. Easy DIY setup.",
      price: "$189", orig: "$249", save: "Save $60",
      features: ["1 Base Station", "1 Keypad", "3 Entry Sensors", "1 Motion Sensor", "1 Indoor Camera"],
    },
    {
      name: "Outdoor Basic", title: "The Lighthouse Package", featured: true,
      desc: "Complete indoor + outdoor protection with HD outdoor camera for whole-perimeter coverage.",
      price: "$279", orig: "$369", save: "Save $90",
      features: ["1 Base Station + Keypad", "5 Entry Sensors", "1 Motion Sensor", "1 Outdoor Camera", "1 Indoor Camera"],
    },
    {
      name: "Outdoor Elite", title: "The Beacon Package", featured: false,
      desc: "Maximum protection with Active Guard outdoor monitoring — our most complete system.",
      price: "$399", orig: "$529", save: "Save $130",
      features: ["1 Base Station + Keypad", "8 Entry Sensors", "2 Motion Sensors", "2 Outdoor Cameras + Active Guard", "1 Smart Lock + Video Doorbell"],
    },
  ];

  return (
    <section id="packages" style={{ background: "var(--ss-off-white)", padding: "80px" }}>
      <div style={{ textAlign: "center", maxWidth: 680, margin: "0 auto 56px" }}>
        <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: 2.5, textTransform: "uppercase", color: "var(--ss-accent)", marginBottom: 12 }}>Shop Packages</p>
        <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(28px, 3vw, 40px)", fontWeight: 700, marginBottom: 16 }}>Find your perfect system</h2>
        <p style={{ fontSize: 16, fontWeight: 300, color: "var(--ss-text-muted)", lineHeight: 1.65, margin: 0 }}>
          Every package includes 24/7 monitoring, cellular backup, and a 60-day money-back guarantee.
        </p>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24, maxWidth: 1100, margin: "0 auto" }}>
        {packages.map((pkg) => (
          <div key={pkg.name} style={{
            background: "#fff", borderRadius: 12, padding: "36px 28px",
            display: "flex", flexDirection: "column", gap: 20, position: "relative",
            border: pkg.featured ? "2px solid var(--ss-accent)" : "1px solid var(--ss-light-gray)",
            transition: "box-shadow 0.2s, transform 0.2s",
          }}
          onMouseEnter={e => { e.currentTarget.style.boxShadow = "0 12px 40px rgba(0,0,0,0.1)"; e.currentTarget.style.transform = "translateY(-3px)"; }}
          onMouseLeave={e => { e.currentTarget.style.boxShadow = "none"; e.currentTarget.style.transform = "translateY(0)"; }}
          >
            {pkg.featured && (
              <span style={{
                position: "absolute", top: -12, left: "50%", transform: "translateX(-50%)",
                background: "var(--ss-accent)", color: "#fff", fontSize: 11, fontWeight: 700,
                letterSpacing: 1, textTransform: "uppercase", padding: "4px 16px", borderRadius: 20, whiteSpace: "nowrap",
              }}>Most Popular</span>
            )}
            <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", color: "var(--ss-text-muted)", margin: 0 }}>{pkg.name}</p>
            <h3 style={{ fontFamily: "var(--font-serif)", fontSize: 22, fontWeight: 700, margin: 0 }}>{pkg.title}</h3>
            <p style={{ fontSize: 14, color: "var(--ss-text-muted)", lineHeight: 1.55, margin: 0 }}>{pkg.desc}</p>
            <div style={{ display: "flex", alignItems: "baseline", gap: 8 }}>
              <span style={{ fontSize: 32, fontWeight: 700, letterSpacing: "-1px" }}>{pkg.price}</span>
              <span style={{ fontSize: 14, color: "var(--ss-text-muted)", textDecoration: "line-through" }}>{pkg.orig}</span>
              <span style={{ background: "#e8f5e9", color: "#2e7d32", fontSize: 12, fontWeight: 700, padding: "3px 8px", borderRadius: 4 }}>{pkg.save}</span>
            </div>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 8 }}>
              {pkg.features.map((f) => (
                <li key={f} style={{ fontSize: 13, color: "var(--ss-text-muted)", display: "flex", alignItems: "center", gap: 8 }}>
                  <span style={{ color: "#2e7d32", fontWeight: 700 }}>✓</span>{f}
                </li>
              ))}
            </ul>
            <button className={pkg.featured ? "btn-primary" : "btn-package"} style={{ marginTop: "auto", width: "100%", padding: 14 }}>
              Get This Package
            </button>
          </div>
        ))}
      </div>
      <div style={{ textAlign: "center", marginTop: 32, display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
        <a href="#quiz" className="btn-primary">Take Our Quiz</a>
        <a href="#packages" style={{
          background: "transparent", border: "1.5px solid var(--ss-light-gray)", color: "var(--ss-text)",
          padding: "14px 28px", borderRadius: 4, textDecoration: "none", fontSize: 14, fontWeight: 500,
        }}>Build My Own System →</a>
      </div>
    </section>
  );
}

function ComparisonTable() {
  const rows = [
    ["24/7 professional monitoring", true, true],
    ["No long-term contracts", true, false],
    ["Mobile app & smart home integration", true, true],
    ["Up to 24-hr battery backup, Wi-Fi & cellular", true, false],
    ["AI-powered Active Guard outdoor protection", true, false],
    ["Integrated privacy shutter on indoor cameras", true, false],
    ["Anti-Theft Guarantee (up to $500)", true, false],
    ["Lifetime warranty for subscribers", true, false],
    ["No installation fees", true, false],
  ];
  return (
    <section style={{ background: "#fff", padding: "80px" }}>
      <div style={{ textAlign: "center", maxWidth: 680, margin: "0 auto 56px" }}>
        <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: 2.5, textTransform: "uppercase", color: "var(--ss-accent)", marginBottom: 12 }}>The Difference</p>
        <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(28px, 3vw, 40px)", fontWeight: 700, marginBottom: 16 }}>The SimpliSafe® difference</h2>
        <p style={{ fontSize: 16, fontWeight: 300, color: "var(--ss-text-muted)", lineHeight: 1.65, margin: 0 }}>See how we compare to traditional security companies.</p>
      </div>
      <div style={{ maxWidth: 900, margin: "0 auto", overflowX: "auto" }}>
        <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14 }}>
          <thead>
            <tr>
              <th style={{ padding: "16px 24px", textAlign: "left", fontSize: 13, fontWeight: 700, borderBottom: "2px solid var(--ss-light-gray)" }}>Feature</th>
              <th style={{ padding: "16px 24px", textAlign: "center", fontSize: 13, fontWeight: 700, borderBottom: "2px solid var(--ss-light-gray)", color: "var(--ss-dark)" }}>SimpliSafe®</th>
              <th style={{ padding: "16px 24px", textAlign: "center", fontSize: 13, fontWeight: 700, borderBottom: "2px solid var(--ss-light-gray)", color: "var(--ss-text-muted)" }}>Traditional</th>
            </tr>
          </thead>
          <tbody>
            {rows.map(([label, ss, other], i) => (
              <tr key={i}>
                <td style={{ padding: "14px 24px", borderBottom: "1px solid var(--ss-light-gray)", color: "var(--ss-text-muted)", fontSize: 13 }}>{label as string}</td>
                <td style={{ padding: "14px 24px", borderBottom: "1px solid var(--ss-light-gray)", textAlign: "center" }}>
                  <span style={{ color: ss ? "#2e7d32" : "#c62828", fontSize: 18 }}>{ss ? "✓" : "✗"}</span>
                </td>
                <td style={{ padding: "14px 24px", borderBottom: "1px solid var(--ss-light-gray)", textAlign: "center" }}>
                  <span style={{ color: other ? "#2e7d32" : "#c62828", fontSize: 18 }}>{other ? "✓" : "✗"}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

function AppSection() {
  const features = [
    { icon: "📡", title: "Live camera feeds anywhere", body: "Watch crisp HD and night-vision footage from every camera, right from your phone." },
    { icon: "🔔", title: "Instant smart alerts", body: "Get notified the moment a sensor trips, a camera detects motion, or an agent responds." },
    { icon: "🔒", title: "Arm, disarm, lock from anywhere", body: "Full system control in your pocket — arm modes, smart lock, and siren all in one tap." },
  ];
  return (
    <section id="app" style={{ background: "var(--ss-dark)", color: "#fff", padding: "80px" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}>
        <div>
          <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: 2.5, textTransform: "uppercase", color: "#6ec6e8", marginBottom: 12 }}>The SimpliSafe® App</p>
          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(28px, 3vw, 40px)", fontWeight: 700, marginBottom: 32 }}>You're in control</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
            {features.map((f) => (
              <div key={f.title} style={{ display: "flex", gap: 18 }}>
                <div style={{
                  width: 44, height: 44, borderRadius: 12, background: "rgba(110,198,232,0.12)",
                  border: "1px solid rgba(110,198,232,0.2)", display: "flex", alignItems: "center",
                  justifyContent: "center", flexShrink: 0, fontSize: 20,
                }}>{f.icon}</div>
                <div>
                  <strong style={{ display: "block", fontSize: 14, fontWeight: 600, marginBottom: 4 }}>{f.title}</strong>
                  <p style={{ fontSize: 13, color: "rgba(255,255,255,0.6)", lineHeight: 1.5, margin: 0 }}>{f.body}</p>
                </div>
              </div>
            ))}
          </div>
          <div style={{ display: "flex", gap: 16, marginTop: 32, flexWrap: "wrap" }}>
            {[["🍎 App Store", "4.8 ★", "300K Ratings"], ["▶ Google Play", "4.6 ★", "23K Ratings"]].map(([name, rating, count]) => (
              <a key={name} href="#" style={{
                background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.2)",
                color: "#fff", padding: "10px 20px", borderRadius: 8, fontSize: 13, fontWeight: 500,
                display: "flex", alignItems: "center", gap: 8, textDecoration: "none",
              }}>
                {name}
                <div>
                  <div style={{ fontSize: 11, fontWeight: 700 }}>{rating}</div>
                  <div style={{ fontSize: 10, color: "rgba(255,255,255,0.5)" }}>{count}</div>
                </div>
              </a>
            ))}
          </div>
        </div>
        <div>
          <div style={{
            background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.12)",
            borderRadius: 40, padding: "24px 16px", width: 260, margin: "0 auto",
          }}>
            <div style={{ background: "#0d1f3c", borderRadius: 24, padding: 20, display: "flex", flexDirection: "column", gap: 12 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ fontSize: 11, color: "rgba(255,255,255,0.5)", fontWeight: 600 }}>SIMPLISAFE</span>
                <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: 1.5, textTransform: "uppercase", color: "#f44336" }}>● ARMED AWAY</span>
              </div>
              {["📷 Front Yard — Live", "📷 Back Door — Live"].map((label, i) => (
                <div key={i} style={{
                  background: "#0a1628", borderRadius: 8, height: i === 0 ? 80 : 60,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  border: "1px solid rgba(255,255,255,0.08)", fontSize: 10, color: "rgba(255,255,255,0.4)",
                }}>{label}</div>
              ))}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
                {[["Front Door", "Closed ✓"], ["Garage", "Closed ✓"], ["Motion", "Clear ✓"], ["Smoke/CO", "OK ✓"]].map(([lbl, val]) => (
                  <div key={lbl} style={{ background: "rgba(255,255,255,0.05)", borderRadius: 6, padding: 10 }}>
                    <strong style={{ display: "block", fontSize: 9, letterSpacing: 1, textTransform: "uppercase", color: "rgba(255,255,255,0.4)", marginBottom: 2 }}>{lbl}</strong>
                    <span style={{ fontSize: 10, color: "rgba(255,255,255,0.65)" }}>{val}</span>
                  </div>
                ))}
              </div>
              <div style={{ background: "rgba(232,68,26,0.15)", borderRadius: 6, padding: 10, textAlign: "center" }}>
                <span style={{ fontSize: 11, color: "#f87d64", fontWeight: 600 }}>TAP TO DISARM</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Reviews() {
  const reviews = [
    { stars: 5, text: '"SimpliSafe® Outdoor Protection truly makes me feel safer. Now, I can rest easier knowing someone is checking on my cameras when I\'m sleeping."', author: "Timothy" },
    { stars: 5, text: '"Y\'all, I just switched from a security company I will not name. I am extremely pleased. Setup was a breeze and the app is fantastic."', author: "Laura E." },
    { stars: 5, text: '"Easiest. Thing. I. Have. Ever. Installed. Had the whole system up and running in about 20 minutes, and monitoring within the hour."', author: "Crystal M." },
    { stars: 5, text: '"This system just works. Zero complaints. The app is clean, sensors have never missed a beat, and response time is incredible."', author: "Richard M." },
  ];
  return (
    <section style={{ background: "var(--ss-off-white)", padding: "80px" }}>
      <div style={{ textAlign: "center", maxWidth: 680, margin: "0 auto 56px" }}>
        <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: 2.5, textTransform: "uppercase", color: "var(--ss-accent)", marginBottom: 12 }}>Customer Reviews</p>
        <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(28px, 3vw, 40px)", fontWeight: 700, margin: 0 }}>Over 5 million people trust SimpliSafe®</h2>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 20, maxWidth: 1100, margin: "0 auto 40px" }}>
        {reviews.map((r) => (
          <div key={r.author} style={{ background: "#fff", border: "1px solid var(--ss-light-gray)", borderRadius: 10, padding: 24, display: "flex", flexDirection: "column", gap: 12 }}>
            <div style={{ color: "#f9a825", fontSize: 14, letterSpacing: 2 }}>{"★".repeat(r.stars)}</div>
            <p style={{ fontSize: 14, color: "var(--ss-text)", lineHeight: 1.6, fontStyle: "italic", flex: 1, margin: 0 }}>{r.text}</p>
            <span style={{ fontSize: 13, fontWeight: 600, color: "var(--ss-text-muted)" }}>— {r.author}</span>
          </div>
        ))}
      </div>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 48, flexWrap: "wrap", paddingTop: 40, borderTop: "1px solid var(--ss-light-gray)" }}>
        {[["🏆", '"Best Home Security" 6 Years Running'], ["⭐", '"America\'s Best Customer Service"'], ["🎖️", '"America\'s Customer Service Champions"']].map(([icon, title]) => (
          <div key={title as string} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 6, textAlign: "center" }}>
            <span style={{ fontSize: 32 }}>{icon}</span>
            <p style={{ fontSize: 12, fontWeight: 700, maxWidth: 120, lineHeight: 1.3, margin: 0 }}>{title as string}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function MoneyBack() {
  return (
    <section style={{ background: "var(--ss-dark)", color: "#fff", padding: "72px 80px", textAlign: "center" }}>
      <div style={{ width: 100, height: 100, borderRadius: "50%", background: "var(--ss-accent)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 24px", fontSize: 32 }}>🛡️</div>
      <h2 style={{ fontFamily: "var(--font-serif)", fontSize: 36, fontWeight: 700, marginBottom: 12 }}>Try it. Test it. Love it or return it.</h2>
      <p style={{ fontSize: 16, color: "rgba(255,255,255,0.7)", marginBottom: 32, maxWidth: 480, marginLeft: "auto", marginRight: "auto" }}>
        Every SimpliSafe® system comes with a 60-day money-back guarantee. No restocking fees. No hassle.
      </p>
      <div style={{ display: "flex", gap: 20, justifyContent: "center", flexWrap: "wrap" }}>
        <a href="#quiz" className="btn-primary">Take Our Quiz</a>
        <a href="#packages" className="btn-outline-white">Build a System</a>
      </div>
    </section>
  );
}

function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };
  return (
    <section id="quiz" style={{ background: "var(--ss-off-white)", padding: "56px 80px", textAlign: "center" }}>
      <h2 style={{ fontFamily: "var(--font-serif)", fontSize: 24, fontWeight: 700, marginBottom: 8 }}>Get offers and security advice</h2>
      <p style={{ fontSize: 14, color: "var(--ss-text-muted)", marginBottom: 24 }}>Tailored to your home and budget.</p>
      {submitted ? (
        <p style={{ fontSize: 15, color: "var(--ss-accent)", fontWeight: 600 }}>✓ Thanks! Check your inbox for offers.</p>
      ) : (
        <form onSubmit={handleSubmit} style={{ display: "flex", gap: 12, justifyContent: "center", maxWidth: 420, margin: "0 auto" }}>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email Address"
            style={{
              flex: 1, padding: "12px 16px", border: "1px solid var(--ss-light-gray)",
              borderRadius: 4, fontFamily: "var(--font-body)", fontSize: 14, background: "#fff",
            }}
          />
          <button type="submit" className="btn-primary" style={{ whiteSpace: "nowrap" }}>Submit</button>
        </form>
      )}
      <p style={{ fontSize: 12, color: "var(--ss-text-muted)", marginTop: 12 }}>
        You may receive email offers in accordance with our Privacy Policy.
      </p>
    </section>
  );
}

function Footer() {
  const cols = [
    { heading: "Shop", links: ["Meet The System", "Outdoor Camera", "Indoor Camera", "Smart Lock", "Video Doorbell", "Build My System"] },
    { heading: "Monitoring", links: ["Active Guard", "Professional Monitoring", "Self Monitoring", "Mobile App", "Smart Home Integration"] },
    { heading: "Company", links: ["Privacy Promise", "Careers", "Press", "Partner With Us", "Blog"] },
    { heading: "Support", links: ["Contact Us", "Help Center", "Reviews", "Legal", "Privacy Policy"] },
  ];
  return (
    <footer style={{ background: "var(--ss-dark)", color: "rgba(255,255,255,0.65)", padding: "56px 80px 32px" }}>
      <div style={{ display: "grid", gridTemplateColumns: "220px repeat(4, 1fr)", gap: 40, paddingBottom: 48, borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
        <div>
          <span style={{ fontSize: 18, fontWeight: 600, color: "#fff", display: "block", marginBottom: 12 }}>
            SimpliSafe<span style={{ color: "#6ec6e8" }}>®</span>
          </span>
          <p style={{ fontSize: 13, lineHeight: 1.6, marginBottom: 20 }}>
            Professional home security without the professional price tag. No contracts, no fine print, no kidding.
          </p>
          <a href="tel:1-833-727-6492" style={{ color: "#6ec6e8", textDecoration: "none", fontSize: 14, fontWeight: 500 }}>
            Call 1-833-727-6492
          </a>
        </div>
        {cols.map((col) => (
          <div key={col.heading}>
            <h4 style={{ fontSize: 12, fontWeight: 700, letterSpacing: 1.5, textTransform: "uppercase", color: "#fff", marginBottom: 16 }}>{col.heading}</h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
              {col.links.map((link) => (
                <li key={link}>
                  <a href="#" style={{ fontSize: 13, color: "rgba(255,255,255,0.55)", textDecoration: "none" }}
                  onMouseEnter={e => (e.currentTarget.style.color = "#fff")}
                  onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.55)")}
                  >{link}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div style={{ paddingTop: 28, display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 16 }}>
        <p style={{ fontSize: 12 }}>© 2026 SimpliSafe, Inc. — <em>Demo site built with Optimizely Web Experimentation on React Router (Remix)</em></p>
        <div style={{ display: "flex", gap: 16 }}>
          {["Instagram", "Facebook", "YouTube", "TikTok"].map((s) => (
            <a key={s} href="#" style={{ color: "rgba(255,255,255,0.5)", textDecoration: "none", fontSize: 13 }}
            onMouseEnter={e => (e.currentTarget.style.color = "#fff")}
            onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.5)")}
            >{s}</a>
          ))}
        </div>
      </div>
    </footer>
  );
}

// ─── Shared icon ────────────────────────────────────────────

function ShieldLogo({ size = 34, color = "#e8441a", checkColor = "#fff" }: { size?: number; color?: string; checkColor?: string }) {
  return (
    <svg width={size} height={size * 1.12} viewBox="0 0 34 38" fill="none">
      <path d={`M17 2L3 8V18C3 27 17 36 17 36C17 36 31 27 31 18V8L17 2Z`} fill={color} stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
      <path d="M12 19l3.5 3.5L22 15" stroke={checkColor} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

// ─── Page ───────────────────────────────────────────────────

export default function Home() {
  return (
    <>
      <Nav />
      <TopBar />
      <main style={{ paddingTop: "calc(var(--nav-h) + 38px)" }}>
        <Hero />
        <TrustBar />
        <ActiveGuard />
        <Packages />
        <ComparisonTable />
        <AppSection />
        <Reviews />
        <MoneyBack />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}
