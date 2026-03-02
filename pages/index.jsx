import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Head from "next/head";
import { RiGithubLine, RiLinkedinLine, RiTwitterXLine, RiInstagramLine, RiFacebookLine } from "react-icons/ri";

const socialData = [
  { name: "GitHub",    link: "https://github.com/Jeevan92-coder",                                       Icon: RiGithubLine,   highlight: true },
  { name: "LinkedIn",  link: "https://www.linkedin.com/in/meher-jeevan-3884b8388/",                     Icon: RiLinkedinLine },
  { name: "Twitter",   link: "https://x.com/MeherJeeva77285",                                           Icon: RiTwitterXLine },
  { name: "Instagram", link: "https://www.instagram.com/mrsh.akya92?igsh=MTE5OTN2aDRvcmc1bg==",         Icon: RiInstagramLine },
  { name: "Facebook",  link: "https://www.facebook.com/share/1CMEdVCiqR/",                              Icon: RiFacebookLine },
];

// ── Particle Network ──────────────────────────────────────────────
const ParticleNetwork = () => {
  const canvasRef = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let W = (canvas.width = window.innerWidth);
    let H = (canvas.height = window.innerHeight);
    const N = 90, DIST = 140;
    const particles = Array.from({ length: N }, () => ({
      x: Math.random() * W, y: Math.random() * H,
      vx: (Math.random() - 0.5) * 0.4, vy: (Math.random() - 0.5) * 0.4,
      r: Math.random() * 2 + 1,
    }));
    let raf;
    const draw = () => {
      ctx.clearRect(0, 0, W, H);
      for (let i = 0; i < N; i++) {
        const p = particles[i];
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > W) p.vx *= -1;
        if (p.y < 0 || p.y > H) p.vy *= -1;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(241,48,36,0.55)";
        ctx.fill();
        for (let j = i + 1; j < N; j++) {
          const q = particles[j];
          const dx = p.x - q.x, dy = p.y - q.y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < DIST) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(q.x, q.y);
            ctx.strokeStyle = `rgba(241,48,36,${0.15 * (1 - d / DIST)})`;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }
      }
      raf = requestAnimationFrame(draw);
    };
    draw();
    const onResize = () => { W = canvas.width = window.innerWidth; H = canvas.height = window.innerHeight; };
    window.addEventListener("resize", onResize);
    return () => { cancelAnimationFrame(raf); window.removeEventListener("resize", onResize); };
  }, []);
  return <canvas ref={canvasRef} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none" }} />;
};

// ── Typing effect ─────────────────────────────────────────────────
const useTyping = (words, speed = 80, pause = 1800) => {
  const [display, setDisplay] = useState("");
  const [wi, setWi] = useState(0);
  const [deleting, setDeleting] = useState(false);
  useEffect(() => {
    const word = words[wi];
    let timeout;
    if (!deleting && display === word) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && display === "") {
      setDeleting(false);
      setWi((wi + 1) % words.length);
    } else {
      timeout = setTimeout(() => {
        setDisplay(deleting ? word.slice(0, display.length - 1) : word.slice(0, display.length + 1));
      }, deleting ? speed / 2 : speed);
    }
    return () => clearTimeout(timeout);
  }, [display, deleting, wi]);
  return display;
};

// ── Code Card ─────────────────────────────────────────────────────
const CodeCard = () => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.9, duration: 0.8, ease: "easeOut" }}
    style={{
      background: "rgba(10,10,18,0.85)",
      border: "1px solid rgba(241,48,36,0.25)",
      borderRadius: 14,
      padding: "20px 24px",
      backdropFilter: "blur(18px)",
      fontFamily: "monospace",
      fontSize: 13,
      lineHeight: 1.7,
      boxShadow: "0 20px 60px rgba(0,0,0,0.5)",
      minWidth: 310,
    }}
  >
    <div style={{ display: "flex", gap: 7, marginBottom: 16 }}>
      {["#FF5F57", "#FEBC2E", "#28C840"].map((c, i) => (
        <span key={i} style={{ width: 12, height: 12, borderRadius: "50%", background: c, display: "block" }} />
      ))}
    </div>
    <div style={{ color: "#888" }}>{"// developer profile"}</div>
    <div><span style={{ color: "#c792ea" }}>const</span> <span style={{ color: "#82aaff" }}>developer</span> <span style={{ color: "#89ddff" }}>=</span> {"{"}</div>
    <div style={{ paddingLeft: 20 }}>
      <div><span style={{ color: "#f07178" }}>name</span><span style={{ color: "#89ddff" }}>:</span> <span style={{ color: "#c3e88d" }}>"Meher Jeevan"</span>,</div>
      <div><span style={{ color: "#f07178" }}>role</span><span style={{ color: "#89ddff" }}>:</span> <span style={{ color: "#c3e88d" }}>"Business & Data Analyst"</span>,</div>
      <div><span style={{ color: "#f07178" }}>skills</span><span style={{ color: "#89ddff" }}>:</span> [<span style={{ color: "#c3e88d" }}>"Python"</span>, <span style={{ color: "#c3e88d" }}>"MySQL"</span>, <span style={{ color: "#c3e88d" }}>"Power-BI"</span>],</div>
      <div><span style={{ color: "#f07178" }}>status</span><span style={{ color: "#89ddff" }}>:</span> <span style={{ color: "#c3e88d" }}>"Available for work"</span></div>
    </div>
    <div>{"}"}</div>
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1.8, duration: 0.4 }}
      style={{ marginTop: 16, display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(40,200,64,0.12)", border: "1px solid rgba(40,200,64,0.3)", borderRadius: 20, padding: "6px 14px", color: "#28C840", fontSize: 12 }}
    >
      <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#28C840", display: "inline-block" }} />
      Available for work
    </motion.div>
  </motion.div>
);

// ── Stats ─────────────────────────────────────────────────────────
const StatCard = ({ num, label, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay, duration: 0.5 }}
    style={{ display: "flex", flexDirection: "column", gap: 4 }}
  >
    <span style={{ fontSize: 32, fontWeight: 800, color: "#f13024", letterSpacing: -1 }}>{num}</span>
    <span style={{ fontSize: 10, letterSpacing: "0.2em", color: "rgba(255,255,255,0.35)", textTransform: "uppercase" }}>{label}</span>
  </motion.div>
);

// ── Social Link ───────────────────────────────────────────────────
const SocialLink = ({ Icon, href, delay, highlight }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    initial={{ opacity: 0, x: 20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ delay }}
    whileHover={{ scale: 1.2 }}
    style={{
      color: highlight ? "#f13024" : "rgba(255,255,255,0.45)",
      textDecoration: "none",
      fontSize: 20,
      display: "flex",
      alignItems: "center",
      filter: highlight ? "drop-shadow(0 0 6px rgba(241,48,36,0.6))" : "none",
    }}
  >
    <Icon />
  </motion.a>
);

// ── Main Home ─────────────────────────────────────────────────────
const Home = () => {
  const typed = useTyping(["Strategic Business Growth", "Actionable Insights", "Data-Driven Decisions", "Performance Dashboards"]);

  return (
    <>
      {/* ✅ Fonts yahan — SSR safe */}
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:ital,wght@0,300;0,400;0,500;1,300&display=swap"
          rel="stylesheet"
        />
      </Head>

      {/* ✅ CSS — @import hataya, SSR safe */}
      <style jsx global>{`
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { background: #060610; }

        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes blink {
          50% { opacity: 0; }
        }

        .portfolio-btn {
          position: relative;
          width: 140px;
          height: 140px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .portfolio-btn-ring {
          position: absolute;
          inset: 0;
          animation: spin-slow 10s linear infinite;
        }
        .portfolio-btn-arrow {
          width: 52px;
          height: 52px;
          border-radius: 50%;
          background: #f13024;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 22px;
          transition: transform 0.2s, box-shadow 0.2s;
          box-shadow: 0 0 30px rgba(241,48,36,0.4);
          z-index: 1;
        }
        .portfolio-btn:hover .portfolio-btn-arrow {
          transform: scale(1.1);
          box-shadow: 0 0 50px rgba(241,48,36,0.7);
        }
        .nav-icon {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: rgba(255,255,255,0.5);
          transition: all 0.2s;
          cursor: pointer;
          font-size: 16px;
        }
        .nav-icon:hover, .nav-icon.active {
          background: rgba(241,48,36,0.15);
          color: #f13024;
        }
        .cursor-blink {
          display: inline-block;
          width: 3px;
          height: 0.85em;
          background: #f13024;
          margin-left: 4px;
          vertical-align: middle;
          animation: blink 1s step-end infinite;
        }
      `}</style>

      <div style={{ minHeight: "100vh", background: "#060610", fontFamily: "'DM Sans', sans-serif", color: "white", position: "relative", overflow: "hidden" }}>

        <ParticleNetwork />

        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 60% 60% at 70% 50%, rgba(241,48,36,0.07), transparent 70%)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 40% 40% at 20% 60%, rgba(241,48,36,0.04), transparent 60%)", pointerEvents: "none" }} />

        {/* Top Nav */}
        <motion.header
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "22px 48px", backdropFilter: "blur(12px)", background: "rgba(6,6,16,0.6)", borderBottom: "1px solid rgba(255,255,255,0.05)" }}
        >
          <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: 18, letterSpacing: 2 }}>
            MEHER <span style={{ color: "#f13024" }}>•</span> JEEVAN
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            {socialData.map((s, i) => (
              <SocialLink key={i} Icon={s.Icon} href={s.link} highlight={s.highlight} delay={0.2 + i * 0.1} />
            ))}
          </div>
        </motion.header>

        {/* Right Side Nav */}
        <div style={{ position: "fixed", right: 24, top: "50%", transform: "translateY(-50%)", zIndex: 100, display: "flex", flexDirection: "column", gap: 8 }}>
          {[
            { icon: "⌂", active: true },
            { icon: "◉", active: false },
            { icon: "▦", active: false },
            { icon: "≡", active: false },
            { icon: "✉", active: false },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 + i * 0.08 }}
              className={`nav-icon${item.active ? " active" : ""}`}
            >
              {item.icon}
            </motion.div>
          ))}
        </div>

        {/* Main Content */}
        <div style={{ maxWidth: 1400, margin: "0 auto", padding: "0 48px", minHeight: "100vh", display: "flex", alignItems: "center", paddingTop: 100 }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%", gap: 48 }}>

            {/* Left */}
            <div style={{ flex: "1 1 0", maxWidth: 620 }}>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}
              >
                <span style={{ width: 36, height: 1, background: "#f13024", display: "block" }} />
                <span style={{ color: "#f13024", fontSize: 11, letterSpacing: "0.25em", textTransform: "uppercase", fontWeight: 500 }}>
                  Business Analyst & Data Analyst
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                style={{ fontFamily: "'Syne', sans-serif", fontSize: "clamp(38px, 4.5vw, 64px)", fontWeight: 800, lineHeight: 1.1, letterSpacing: -2, marginBottom: 20 }}
              >
                Turning Data
                <br />
                Into{" "}
                <span style={{ color: "#f13024", position: "relative" }}>
                  {typed}
                  <span className="cursor-blink" />
                  <motion.span
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ delay: 1.5, duration: 0.8 }}
                    style={{ position: "absolute", bottom: 0, left: 0, height: 3, background: "rgba(241,48,36,0.4)", borderRadius: 4 }}
                  />
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.35 }}
                style={{ fontSize: 15, color: "rgba(255,255,255,0.55)", lineHeight: 1.8, maxWidth: 480, marginBottom: 40, fontWeight: 300 }}
              >
                I help organizations make smarter decisions by transforming raw data into actionable insights, optimizing processes, and building performance-driven dashboards.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                style={{ display: "flex", alignItems: "center", gap: 32, marginBottom: 56 }}
              >
                <div className="portfolio-btn">
                  <svg className="portfolio-btn-ring" viewBox="0 0 140 140" fill="none">
                    <path id="circle" d="M 70,70 m -55,0 a 55,55 0 1,1 110,0 a 55,55 0 1,1 -110,0" fill="none" />
                    <text fontSize="10.5" fill="rgba(255,255,255,0.55)" letterSpacing="9" fontFamily="'DM Sans', sans-serif" fontWeight="500">
                      <textPath href="#circle">MY PORTFOLIO • MY PORTFOLIO • </textPath>
                    </text>
                  </svg>
                  <div className="portfolio-btn-arrow">→</div>
                </div>

                <motion.a
                  href="/CV.pdf"
                  download="MeherJeevan_CV.pdf"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  style={{
                    display: "inline-flex", alignItems: "center", gap: 10,
                    border: "1px solid rgba(241,48,36,0.4)", borderRadius: 50,
                    padding: "12px 28px", color: "rgba(255,255,255,0.75)", textDecoration: "none",
                    fontSize: 13, letterSpacing: "0.05em", transition: "all 0.2s",
                    background: "rgba(241,48,36,0.06)",
                  }}
                >
                  Download CV <span style={{ fontSize: 14 }}>↓</span>
                </motion.a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                style={{ display: "flex", gap: 40, paddingTop: 24, borderTop: "1px solid rgba(255,255,255,0.07)" }}
              >
                <StatCard num="5+" label="Data Analytics Projects" delay={0.85} />
                <div style={{ width: 1, background: "rgba(255,255,255,0.07)" }} />
                <StatCard num="5+" label="Tools Mastered" delay={0.95} />
                <div style={{ width: 1, background: "rgba(255,255,255,0.07)" }} />
                <StatCard num="5+" label="Projects Completed" delay={1.05} />
              </motion.div>
            </div>

            {/* Right */}
            <div style={{ flex: "0 0 auto", display: "flex", flexDirection: "column", gap: 20, alignItems: "flex-end" }}>
              <CodeCard />
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.4, duration: 0.5, type: "spring" }}
                style={{
                  background: "linear-gradient(135deg, #f13024, #c0220c)",
                  borderRadius: 14, padding: "18px 28px",
                  display: "flex", flexDirection: "column", alignItems: "center",
                  boxShadow: "0 20px 50px rgba(241,48,36,0.3)",
                  alignSelf: "flex-end", marginRight: 20,
                }}
              >
                <span style={{ fontFamily: "'Syne', sans-serif", fontSize: 36, fontWeight: 800, lineHeight: 1 }}>5+</span>
                <span style={{ fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase", marginTop: 4, opacity: 0.85 }}>Complete Projects</span>
              </motion.div>
            </div>
          </div>
        </div>

        <div style={{ position: "fixed", bottom: 0, left: 0, right: 0, height: 80, background: "linear-gradient(to top, rgba(6,6,16,0.8), transparent)", pointerEvents: "none" }} />
      </div>
    </>
  );
};

export default Home;