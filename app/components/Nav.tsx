import { Link, useLocation } from "react-router";

export function ShieldLogo({ size = 34, color = "#e8441a", checkColor = "#fff" }: { size?: number; color?: string; checkColor?: string }) {
  return (
    <svg width={size} height={size * 1.12} viewBox="0 0 34 38" fill="none">
      <path d="M17 2L3 8V18C3 27 17 36 17 36C17 36 31 27 31 18V8L17 2Z" fill={color} stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
      <path d="M12 19l3.5 3.5L22 15" stroke={checkColor} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function Nav() {
  const location = useLocation();

  const links = [
    { label: "Shop Packages", to: "/shop" },
    { label: "Monitoring", to: "/#monitoring" },
    { label: "Build My System", to: "/shop" },
  ];

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000,
      background: "var(--ss-dark)", height: "var(--nav-h)",
      display: "flex", alignItems: "center", padding: "0 32px",
    }}>
      <Link to="/" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none", marginRight: 40, flexShrink: 0 }}>
        <ShieldLogo size={34} />
        <span style={{ fontFamily: "var(--font-body)", fontSize: 20, fontWeight: 600, color: "#fff", letterSpacing: "-0.3px" }}>
          SimpliSafe<span style={{ color: "#6ec6e8" }}>®</span>
        </span>
      </Link>
      <div style={{ display: "flex", alignItems: "center", gap: 4, flex: 1 }}>
        {links.map(({ label, to }) => (
          <Link key={label} to={to} style={{
            color: "#fff", textDecoration: "none", fontSize: 14, fontWeight: 400,
            padding: "8px 14px", borderRadius: 4, transition: "background 0.15s",
            background: location.pathname === to ? "rgba(255,255,255,0.1)" : "transparent",
          }}
          onMouseEnter={e => (e.currentTarget.style.background = "rgba(255,255,255,0.08)")}
          onMouseLeave={e => (e.currentTarget.style.background = location.pathname === to ? "rgba(255,255,255,0.1)" : "transparent")}
          >{label}</Link>
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

export function TopBar() {
  return (
    <div style={{
      background: "#0d1f3c", textAlign: "center", padding: "9px 16px",
      fontSize: 13, color: "rgba(255,255,255,0.85)",
      position: "fixed", top: "var(--nav-h)", left: 0, right: 0, zIndex: 999,
    }}>
      ⚡ Your first month of professional monitoring is <strong>FREE</strong> —{" "}
      <Link to="/shop" style={{ color: "#6ec6e8", textDecoration: "none" }}>Shop now</Link>
    </div>
  );
}
