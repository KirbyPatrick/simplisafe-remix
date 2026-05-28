import type { MetaFunction } from "react-router";
import { Link } from "react-router";
import { useState } from "react";
import { Nav, TopBar, ShieldLogo } from "../components/Nav";

export const meta: MetaFunction = () => [
  { title: "SimpliSafe® Home Security Systems" },
  { name: "description", content: "Advanced whole home security with 24/7 professional monitoring. No contracts. No cancellation fees." },
];

function Hero() {
  return (
    <section style={{
      background: "var(--ss-dark)", color: "#fff",
      minHeight: 620, overflow: "hidden",
      display: "flex", alignItems: "center", justifyContent: "center",
    }}>
      <div style={{
        maxWidth: 860,
        width: "100%",
        padding: "80px 40px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        gap: 28,
      }}>
        <p style={{ fontSize: 12, fontWeight: 600, letterSpacing: 2, textTransform: "uppercase", color: "#6ec6e8", margin: 0 }}>
          Whole Home Protection
        </p>
        <h1 style={{
          fontFamily: "var(--font-serif)", fontSize: "clamp(36px, 5vw, 60px)",
          fontWeight: 700, lineHeight: 1.1, letterSpacing: "-0.5px", margin: 0,
        }}>
          Built for security.<br />Not surveillance.
        </h1>
        <p style={{ fontSize: 18, fontWeight: 300, lineHeight: 1.65, color: "rgba(255,255,255,0.78)", maxWidth: 560, margin: 0 }}>
          SimpliSafe® delivers advanced, whole home security with 24/7 professional monitoring.
          More than 5 million people trust us — and there's no contract to sign.
        </p>
        <div style={{ display: "flex", alignItems: "center", gap: 16, flexWrap: "wrap", justifyContent: "center", marginTop: 8 }}>
          <Link to="/shop" className="btn-primary" style={{ fontSize: 16, padding: "16px 40px" }}>
            Shop Packages
          </Link>
          <a href="#monitoring" className="btn-outline-white">
            See How It Works
          </a>
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "10px 32px", marginTop: 8 }}>
          {[
            'US News "Best Home Security" — 5 Years Running',
            "No contracts. No cancellation fees.",
            "60-day money-back guarantee",
          ].map((text) => (
            <div key={text} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13, color: "rgba(255,255,255,0.7)" }}>
              <span style={{ color: "#6ec6e8", fontWeight: 700 }}>✓</span>
              {text}
            </div>
          ))}
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
          <Link to="/shop" className="btn-primary" style={{ display: "inline-block", marginTop: 32 }}>
            See All Packages
          </Link>
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

function Reviews() {
  const reviews = [
    { stars: 5, text: '"SimpliSafe® Outdoor Protection truly makes me feel safer. Now I can rest easier knowing someone is watching when I\'m sleeping."', author: "Timothy" },
    { stars: 5, text: '"I just switched from a competitor. Setup was a breeze and the app is fantastic. Could not be happier."', author: "Laura E." },
    { stars: 5, text: '"Easiest. Thing. I. Have. Ever. Installed. Up and running in 20 minutes, monitoring within the hour."', author: "Crystal M." },
    { stars: 5, text: '"This system just works. Zero complaints. Clean app, sensors never miss a beat, incredible response time."', author: "Richard M." },
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
        <Link to="/shop" className="btn-primary">Shop Packages</Link>
        <a href="#monitoring" className="btn-outline-white">See How It Works</a>
      </div>
    </section>
  );
}

function Footer() {
  const cols = [
    { heading: "Shop", links: ["Meet The System", "Outdoor Camera", "Indoor Camera", "Smart Lock", "Video Doorbell"] },
    { heading: "Monitoring", links: ["Active Guard", "Professional Monitoring", "Self Monitoring", "Mobile App"] },
    { heading: "Company", links: ["Privacy Promise", "Careers", "Press", "Blog"] },
    { heading: "Support", links: ["Contact Us", "Help Center", "Reviews", "Privacy Policy"] },
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
                  <a href="#" style={{ fontSize: 13, color: "rgba(255,255,255,0.55)", textDecoration: "none" }}>{link}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div style={{ paddingTop: 28, display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 16 }}>
        <p style={{ fontSize: 12 }}>© 2026 SimpliSafe, Inc. — <em>Demo · React Router (Remix) + Optimizely Web</em></p>
        <div style={{ display: "flex", gap: 16 }}>
          {["Instagram", "Facebook", "YouTube", "TikTok"].map((s) => (
            <a key={s} href="#" style={{ color: "rgba(255,255,255,0.5)", textDecoration: "none", fontSize: 13 }}>{s}</a>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <>
      <Nav />
      <TopBar />
      <main style={{ paddingTop: "calc(var(--nav-h) + 38px)" }}>
        <Hero />
        <TrustBar />
        <ActiveGuard />
        <Reviews />
        <MoneyBack />
      </main>
      <Footer />
    </>
  );
}
