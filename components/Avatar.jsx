import Image from "next/image";
import { motion } from "framer-motion";

const Avatar = () => {
  return (
    <div className="w-full h-full relative">

      {/* ── Glows ── */}
      <div className="absolute inset-0 z-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 60% 50% at 60% 70%, rgba(241,48,36,0.32) 0%, rgba(241,48,36,0.08) 50%, transparent 78%)", filter: "blur(30px)" }}
      />
      <div className="absolute top-20 left-0 w-52 h-52 rounded-full z-0 pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(124,58,237,0.22) 0%, transparent 70%)", filter: "blur(50px)" }}
      />

      {/* ── Decorative arc rings ── */}
      <svg className="absolute bottom-0 right-0 z-10 opacity-20 pointer-events-none" width="320" height="320" viewBox="0 0 320 320">
        <circle cx="160" cy="320" r="150" fill="none" stroke="#F13024" strokeWidth="1" strokeDasharray="5 8" />
        <circle cx="160" cy="320" r="110" fill="none" stroke="#7c3aed" strokeWidth="0.5" />
      </svg>

      {/* ── Floating Code Card ── */}
      <motion.div
        animate={{ y: [-6, 6, -6] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[5%] left-[0%] z-30"
        style={{
          background: "rgba(8,8,18,0.92)",
          border: "1px solid rgba(255,255,255,0.08)",
          borderRadius: 14,
          padding: "14px 18px",
          backdropFilter: "blur(20px)",
          boxShadow: "0 8px 32px rgba(0,0,0,0.5), 0 0 0 1px rgba(241,48,36,0.15)",
          minWidth: 240,
        }}
      >
        <div style={{ display: "flex", gap: 5, marginBottom: 10 }}>
          <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#ff5f57" }} />
          <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#ffbd2e" }} />
          <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#28c840" }} />
        </div>
        <div style={{ fontFamily: "'Fira Code','Courier New',monospace", fontSize: 11, lineHeight: "1.9" }}>
          <span style={{ color: "#F13024" }}>const </span>
          <span style={{ color: "#e2e8f0" }}>developer</span>
          <span style={{ color: "#94a3b8" }}> = &#123;</span><br />
          <span style={{ paddingLeft: 14, color: "#a78bfa" }}>name: </span>
          <span style={{ color: "#4ade80" }}>&quot;Meher Jeevan&quot;</span>
          <span style={{ color: "#94a3b8" }}>,</span><br />
          <span style={{ paddingLeft: 14, color: "#a78bfa" }}>role: </span>
          <span style={{ color: "#F13024" }}>&quot;Business &amp; Data Analyst&quot;</span>
          <span style={{ color: "#94a3b8" }}>,</span><br />
          <span style={{ paddingLeft: 14, color: "#a78bfa" }}>skills: </span>
          <span style={{ color: "#fbbf24" }}>[&quot;Python&quot;, &quot;MySQL&quot;, &quot;Power-BI&quot;]</span><br />
          <span style={{ color: "#94a3b8" }}>&#125;</span>
        </div>
      </motion.div>

      {/* ── Available Badge ── */}
      <motion.div
        animate={{ y: [-4, 4, -4] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        className="absolute z-30 flex items-center gap-2"
        style={{
          top: "32%",
          left: "0%",
          background: "rgba(8,8,18,0.85)",
          border: "1px solid rgba(74,222,128,0.35)",
          borderRadius: 10,
          padding: "8px 16px",
          backdropFilter: "blur(14px)",
        }}
      >
        <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#4ade80", display: "inline-block", boxShadow: "0 0 10px #4ade80" }} />
        <span style={{ color: "#4ade80", fontSize: 11, fontWeight: 600 }}>Available for work</span>
      </motion.div>

      {/* ── Projects Badge ── */}
      <motion.div
        animate={{ y: [6, -6, 6] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute z-30"
        style={{
          bottom: "18%",
          left: "0%",
          background: "linear-gradient(135deg,#F13024 0%,#c0392b 100%)",
          borderRadius: 16,
          padding: "12px 20px",
          boxShadow: "0 0 40px rgba(241,48,36,0.55), 0 4px 20px rgba(241,48,36,0.35)",
        }}
      >
        <div style={{ color: "white", fontWeight: 800, fontSize: 24, lineHeight: 1 }}>5+</div>
        <div style={{ color: "rgba(255,255,255,0.85)", fontSize: 9, letterSpacing: "2.5px", textTransform: "uppercase", marginTop: 4, fontWeight: 600 }}>Complete Projects</div>
      </motion.div>

      {/* ── Pulsing accent dot ── */}
      <motion.div
        animate={{ scale: [1, 1.4, 1], opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute z-30 pointer-events-none"
        style={{ top: "25%", right: "25%", width: 10, height: 10, borderRadius: "50%", background: "#F13024", boxShadow: "0 0 14px #F13024" }}
      />

      {/* ── Main Photo ── */}
      <motion.div
        initial={{ opacity: 0, scale: 0.92, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
        className="absolute bottom-0 right-0 z-20"
        style={{ width: "65%", height: "95%" }}
      >
        <Image
          src="/meher-avatar.png"
          alt="Meher Jeevan"
          fill
          className="object-contain object-bottom"
          priority
          style={{
            filter: "drop-shadow(0 0 50px rgba(241,48,36,0.4)) drop-shadow(0 20px 60px rgba(0,0,0,0.9)) contrast(1.08) brightness(1.05) saturate(1.1)",
          }}
        />
      </motion.div>

    </div>
  );
};

export default Avatar;