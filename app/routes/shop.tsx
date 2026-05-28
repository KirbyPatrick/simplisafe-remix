import type { MetaFunction } from "react-router";
import { Link } from "react-router";
import { useState } from "react";
import { Nav, TopBar, ShieldLogo } from "../components/Nav";

export const meta: MetaFunction = () => [
  { title: "Shop Home Security Packages — SimpliSafe®" },
  { name: "description", content: "Choose a SimpliSafe® security package. No contracts, free monitoring trial, 60-day money-back guarantee." },
];

const packages = [
  {
    id: "starter",
    name: "The Starter",
    tier: "Indoor Basic",
    featured: false,
    price: 189,
    orig: 249,
    desc: "Essential indoor protection for apartments and smaller homes. DIY setup in under 30 minutes.",
    color: "#132241",
    features: [
      "1 Base Station",
      "1 Keypad",
      "3 Entry Sensors",
      "1 Motion Sensor",
      "1 Indoor Camera",
      "24/7 Professional Monitoring",
      "Mobile App Control",
    ],
    monitoring: "$19.99/mo",
  },
  {
    id: "lighthouse",
    name: "The Lighthouse",
    tier: "Outdoor Basic",
    featured: true,
    price: 279,
    orig: 369,
    desc: "Complete indoor + outdoor protection with HD perimeter coverage. Our most popular choice.",
    color: "#e8441a",
    features: [
      "1 Base Station + Keypad",
      "5 Entry Sensors",
      "1 Motion Sensor",
      "1 Outdoor Camera",
      "1 Indoor Camera",
      "24/7 Professional Monitoring",
      "Mobile App + Smart Home",
    ],
    monitoring: "$24.99/mo",
  },
  {
    id: "beacon",
    name: "The Beacon",
    tier: "Outdoor Elite",
    featured: false,
    price: 399,
    orig: 529,
    desc: "Maximum protection with Active Guard — live agent outdoor monitoring that deters crime before it happens.",
    color: "#0d3b6e",
    features: [
      "1 Base Station + Keypad",
      "8 Entry Sensors",
      "2 Motion Sensors",
      "2 Outdoor Cameras",
      "Active Guard Live Monitoring",
      "1 Smart Lock + Video Doorbell",
      "Lifetime Warranty",
    ],
    monitoring: "$39.99/mo",
  },
];

const addons = [
  { name: "Outdoor Camera", price: 99, icon: "📷", desc: "1080p HDR, color night vision, IP65 weatherproof" },
  { name: "Indoor Camera", price: 49, icon: "🎥", desc: "1080p, privacy shutter, 140° wide-angle" },
  { name: "Smart Lock", price: 99, icon: "🔒", desc: "Touchpad entry, auto-lock, app control" },
  { name: "Video Doorbell", price: 149, icon: "🔔", desc: "HD video, motion zones, two-way audio" },
  { name: "Entry Sensor", price: 15, icon: "🚪", desc: "Doors & windows, wireless, 3-yr battery" },
  { name: "Motion Sensor", price: 29, icon: "👁️", desc: "Pet-friendly, 90° coverage, instant alert" },
  { name: "Smoke Detector", price: 29, icon: "🔥", desc: "Photoelectric, CO detection, 10-yr sensor" },
  { name: "Panic Button", price: 19, icon: "🆘", desc: "Wearable, waterproof, instant dispatch" },
];

function PackageCard({ pkg, isSelected, onSelect }: { pkg: typeof packages[0]; isSelected: boolean; onSelect: () => void }) {
  return (
    <div
      onClick={onSelect}
      style={{
        background: "#fff",
        borderRadius: 14,
        padding: "36px 28px",
        display: "flex",
        flexDirection: "column",
        gap: 20,
        position: "relative",
        border: isSelected
          ? `2px solid ${pkg.color}`
          : pkg.featured
          ? "2px solid var(--ss-accent)"
          : "1px solid var(--ss-light-gray)",
        cursor: "pointer",
        transition: "box-shadow 0.2s, transform 0.2s",
        boxShadow: isSelected ? `0 0 0 4px ${pkg.color}22` : "none",
      }}
      onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = "0 16px 48px rgba(0,0,0,0.12)"; }}
      onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = isSelected ? `0 0 0 4px ${pkg.color}22` : "none"; }}
    >
      {pkg.featured && (
        <span style={{
          position: "absolute", top: -13, left: "50%", transform: "translateX(-50%)",
          background: "var(--ss-accent)", color: "#fff", fontSize: 11, fontWeight: 700,
          letterSpacing: 1, textTransform: "uppercase", padding: "5px 18px", borderRadius: 20, whiteSpace: "nowrap",
        }}>Most Popular</span>
      )}
      {isSelected && (
        <span style={{
          position: "absolute", top: 14, right: 14, width: 24, height: 24,
          borderRadius: "50%", background: pkg.color, color: "#fff",
          display: "flex", alignItems: "center", justifyContent: "center", fontSize: 13, fontWeight: 700,
        }}>✓</span>
      )}

      <div style={{ width: 52, height: 52, borderRadius: 12, background: `${pkg.color}15`, display: "flex", alignItems: "center", justifyContent: "center" }}>
        <ShieldLogo size={28} color={pkg.color} />
      </div>

      <div>
        <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", color: "var(--ss-text-muted)", margin: "0 0 4px" }}>{pkg.tier}</p>
        <h3 style={{ fontFamily: "var(--font-serif)", fontSize: 24, fontWeight: 700, margin: 0, color: "var(--ss-dark)" }}>{pkg.name}</h3>
      </div>

      <p style={{ fontSize: 14, color: "var(--ss-text-muted)", lineHeight: 1.6, margin: 0 }}>{pkg.desc}</p>

      <div style={{ display: "flex", alignItems: "baseline", gap: 8, flexWrap: "wrap" }}>
        <span style={{ fontSize: 36, fontWeight: 700, letterSpacing: "-1px", color: "var(--ss-dark)" }}>${pkg.price}</span>
        <span style={{ fontSize: 14, color: "var(--ss-text-muted)", textDecoration: "line-through" }}>${pkg.orig}</span>
        <span style={{ background: "#e8f5e9", color: "#2e7d32", fontSize: 12, fontWeight: 700, padding: "3px 8px", borderRadius: 4 }}>
          Save ${pkg.orig - pkg.price}
        </span>
      </div>

      <div style={{ background: "var(--ss-off-white)", borderRadius: 8, padding: "10px 14px", fontSize: 13, color: "var(--ss-text-muted)" }}>
        + {pkg.monitoring} for professional monitoring
      </div>

      <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
        {pkg.features.map((f) => (
          <li key={f} style={{ fontSize: 13, color: "var(--ss-text)", display: "flex", alignItems: "center", gap: 10 }}>
            <span style={{ color: "#2e7d32", fontWeight: 700, flexShrink: 0 }}>✓</span>{f}
          </li>
        ))}
      </ul>

      <button
        className={pkg.featured || isSelected ? "btn-primary" : "btn-package"}
        style={{ width: "100%", padding: 15, fontSize: 15, marginTop: "auto",
          ...(isSelected ? { background: pkg.color } : {}),
        }}
      >
        {isSelected ? "Selected — Continue →" : "Select This Package"}
      </button>
    </div>
  );
}

function MonitoringBanner() {
  return (
    <div style={{
      background: "linear-gradient(135deg, #0a1628 0%, #1a3a7c 100%)",
      borderRadius: 16, padding: "40px 48px", color: "#fff",
      display: "flex", alignItems: "center", justifyContent: "space-between",
      gap: 32, flexWrap: "wrap", maxWidth: 1100, margin: "0 auto 64px",
    }}>
      <div>
        <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: 2, textTransform: "uppercase", color: "#6ec6e8", marginBottom: 8 }}>
          Limited Time Offer
        </p>
        <h3 style={{ fontFamily: "var(--font-serif)", fontSize: 26, fontWeight: 700, marginBottom: 8 }}>
          First month of monitoring FREE
        </h3>
        <p style={{ fontSize: 15, color: "rgba(255,255,255,0.7)", margin: 0 }}>
          All packages include a free trial of 24/7 professional monitoring — no credit card required to start.
        </p>
      </div>
      <div style={{ display: "flex", gap: 32, flexShrink: 0 }}>
        {[["$0", "First Month"], ["60", "Day Returns"], ["24/7", "Live Agents"]].map(([val, lbl]) => (
          <div key={lbl} style={{ textAlign: "center" }}>
            <div style={{ fontSize: 28, fontWeight: 700, color: "#6ec6e8" }}>{val}</div>
            <div style={{ fontSize: 12, color: "rgba(255,255,255,0.6)" }}>{lbl}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Addons({ cart, onAdd }: { cart: Set<string>; onAdd: (name: string) => void }) {
  return (
    <section style={{ padding: "64px 80px", background: "#fff" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ marginBottom: 40 }}>
          <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: 2.5, textTransform: "uppercase", color: "var(--ss-accent)", marginBottom: 8 }}>Customize Your System</p>
          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: 32, fontWeight: 700, margin: 0, color: "var(--ss-dark)" }}>Add more protection</h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16 }}>
          {addons.map((addon) => {
            const added = cart.has(addon.name);
            return (
              <div key={addon.name} style={{
                border: added ? "2px solid var(--ss-accent)" : "1px solid var(--ss-light-gray)",
                borderRadius: 10, padding: 20, display: "flex", flexDirection: "column", gap: 10,
                background: added ? "#fff8f6" : "#fff",
                transition: "all 0.15s",
              }}>
                <span style={{ fontSize: 28 }}>{addon.icon}</span>
                <div>
                  <strong style={{ fontSize: 14, display: "block", marginBottom: 2 }}>{addon.name}</strong>
                  <p style={{ fontSize: 12, color: "var(--ss-text-muted)", margin: 0, lineHeight: 1.4 }}>{addon.desc}</p>
                </div>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: "auto" }}>
                  <span style={{ fontSize: 18, fontWeight: 700 }}>${addon.price}</span>
                  <button
                    onClick={() => onAdd(addon.name)}
                    style={{
                      background: added ? "var(--ss-accent)" : "var(--ss-dark)",
                      color: "#fff", border: "none", padding: "6px 14px", borderRadius: 4,
                      fontSize: 12, fontWeight: 600, cursor: "pointer",
                    }}
                  >
                    {added ? "✓ Added" : "+ Add"}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function CartSummary({ selected, addonCart }: { selected: string | null; addonCart: Set<string> }) {
  const pkg = packages.find(p => p.id === selected);
  const addonTotal = [...addonCart].reduce((sum, name) => {
    const a = addons.find(a => a.name === name);
    return sum + (a?.price ?? 0);
  }, 0);
  const total = (pkg?.price ?? 0) + addonTotal;

  if (!pkg) return null;

  return (
    <div style={{
      position: "fixed", bottom: 24, right: 24, zIndex: 500,
      background: "var(--ss-dark)", color: "#fff", borderRadius: 14,
      padding: "20px 24px", boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
      minWidth: 280, border: "1px solid rgba(255,255,255,0.1)",
    }}>
      <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: 1.5, textTransform: "uppercase", color: "#6ec6e8", marginBottom: 8 }}>Your System</p>
      <p style={{ fontSize: 15, fontWeight: 600, marginBottom: 4 }}>{pkg.name}</p>
      {[...addonCart].map(name => (
        <p key={name} style={{ fontSize: 13, color: "rgba(255,255,255,0.65)", margin: "2px 0" }}>+ {name}</p>
      ))}
      <div style={{ borderTop: "1px solid rgba(255,255,255,0.1)", marginTop: 12, paddingTop: 12, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span style={{ fontSize: 13, color: "rgba(255,255,255,0.65)" }}>Total</span>
        <span style={{ fontSize: 22, fontWeight: 700 }}>${total}</span>
      </div>
      <button className="btn-primary" style={{ width: "100%", marginTop: 12, padding: 12 }}>
        Add to Cart
      </button>
    </div>
  );
}

function CompareTable() {
  const rows = [
    ["Cameras included", "1 Indoor", "1 Outdoor + 1 Indoor", "2 Outdoor + Active Guard"],
    ["Entry sensors", "3", "5", "8"],
    ["Motion sensors", "1", "1", "2"],
    ["Smart lock", "—", "—", "✓ Included"],
    ["Video doorbell", "—", "—", "✓ Included"],
    ["Active Guard monitoring", "—", "—", "✓ Included"],
    ["Lifetime warranty", "—", "—", "✓ Included"],
    ["Best for", "Apartments", "Single-family homes", "Large homes & estates"],
  ];
  return (
    <section style={{ background: "var(--ss-off-white)", padding: "64px 80px" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ marginBottom: 40 }}>
          <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: 2.5, textTransform: "uppercase", color: "var(--ss-accent)", marginBottom: 8 }}>Compare</p>
          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: 32, fontWeight: 700, margin: 0 }}>Side-by-side breakdown</h2>
        </div>
        <div style={{ overflowX: "auto" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14 }}>
            <thead>
              <tr>
                <th style={{ padding: "14px 20px", textAlign: "left", borderBottom: "2px solid var(--ss-light-gray)", color: "var(--ss-text-muted)", fontWeight: 600 }}></th>
                {packages.map(p => (
                  <th key={p.id} style={{ padding: "14px 20px", textAlign: "center", borderBottom: "2px solid var(--ss-light-gray)", color: p.featured ? "var(--ss-accent)" : "var(--ss-dark)", fontWeight: 700 }}>
                    {p.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map(([label, ...vals]) => (
                <tr key={label as string}>
                  <td style={{ padding: "13px 20px", borderBottom: "1px solid var(--ss-light-gray)", color: "var(--ss-text-muted)", fontSize: 13 }}>{label}</td>
                  {vals.map((v, i) => (
                    <td key={i} style={{ padding: "13px 20px", borderBottom: "1px solid var(--ss-light-gray)", textAlign: "center", fontSize: 13, color: v === "—" ? "var(--ss-light-gray)" : "var(--ss-text)" }}>
                      {v}
                    </td>
                  ))}
                </tr>
              ))}
              <tr>
                <td style={{ padding: "16px 20px" }}></td>
                {packages.map(p => (
                  <td key={p.id} style={{ padding: "16px 20px", textAlign: "center" }}>
                    <span style={{ fontSize: 20, fontWeight: 700, color: "var(--ss-dark)" }}>${p.price}</span>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

export default function Shop() {
  const [selected, setSelected] = useState<string | null>(null);
  const [addonCart, setAddonCart] = useState<Set<string>>(new Set());

  const toggleAddon = (name: string) => {
    setAddonCart(prev => {
      const next = new Set(prev);
      next.has(name) ? next.delete(name) : next.add(name);
      return next;
    });
  };

  return (
    <>
      <Nav />
      <TopBar />
      <main style={{ paddingTop: "calc(var(--nav-h) + 38px)" }}>

        {/* Page Header */}
        <div style={{ background: "var(--ss-dark)", color: "#fff", padding: "56px 80px 48px", textAlign: "center" }}>
          <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: 2.5, textTransform: "uppercase", color: "#6ec6e8", marginBottom: 12 }}>Shop Packages</p>
          <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(32px, 4vw, 48px)", fontWeight: 700, marginBottom: 16, lineHeight: 1.1 }}>
            Find your perfect system
          </h1>
          <p style={{ fontSize: 16, color: "rgba(255,255,255,0.7)", maxWidth: 520, margin: "0 auto", lineHeight: 1.65 }}>
            Every package ships free, installs in 30 minutes, and includes a 60-day money-back guarantee.
          </p>
        </div>

        {/* Packages */}
        <section style={{ background: "var(--ss-off-white)", padding: "64px 80px" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto" }}>
            <MonitoringBanner />
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 28 }}>
              {packages.map(pkg => (
                <PackageCard
                  key={pkg.id}
                  pkg={pkg}
                  isSelected={selected === pkg.id}
                  onSelect={() => setSelected(selected === pkg.id ? null : pkg.id)}
                />
              ))}
            </div>
            <p style={{ textAlign: "center", marginTop: 24, fontSize: 13, color: "var(--ss-text-muted)" }}>
              Not sure which to pick? <Link to="/" style={{ color: "var(--ss-accent)", textDecoration: "none", fontWeight: 600 }}>Take our quiz →</Link>
            </p>
          </div>
        </section>

        {/* Add-ons */}
        <Addons cart={addonCart} onAdd={toggleAddon} />

        {/* Compare */}
        <CompareTable />

        {/* Guarantee */}
        <section style={{ background: "var(--ss-dark)", color: "#fff", padding: "64px 80px", textAlign: "center" }}>
          <div style={{ width: 80, height: 80, borderRadius: "50%", background: "var(--ss-accent)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px", fontSize: 28 }}>🛡️</div>
          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: 32, fontWeight: 700, marginBottom: 12 }}>60-Day Money-Back Guarantee</h2>
          <p style={{ fontSize: 15, color: "rgba(255,255,255,0.7)", maxWidth: 440, margin: "0 auto 32px", lineHeight: 1.65 }}>
            Not happy? Return your system within 60 days for a full refund. No questions asked.
          </p>
          <Link to="/" style={{ color: "#6ec6e8", textDecoration: "none", fontSize: 14 }}>← Back to home</Link>
        </section>

      </main>

      {/* Floating cart */}
      <CartSummary selected={selected} addonCart={addonCart} />
    </>
  );
}
