import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaPython, FaCode,
} from "react-icons/fa";
import {
  SiMicrosoftoffice, SiMysql, SiPowerbi, SiTensorflow, SiScikitlearn,
} from "react-icons/si";
import CountUp from "react-countup";
import Avatar from "../../components/Avatar";
import Circles from "../../components/Circles";
import { fadeIn } from "../../variants";

// ── Tabs ──────────────────────────────────────────────────────────
const aboutData = [
  {
    title: "Skills",
    info: [
      {
        title: "Technical Skills",
        stage: "tools",
        icons: [
          { Icon: FaPython,          label: "Python"       },
          { Icon: SiMicrosoftoffice, label: "MS Office"    },
          { Icon: SiMysql,           label: "MySQL"        },
          { Icon: FaCode,            label: "Flask"        },
          { Icon: SiPowerbi,         label: "Power BI"     },
          { Icon: SiTensorflow,      label: "TensorFlow"   },
          { Icon: SiScikitlearn,     label: "Scikit-learn" },
        ],
      },
      {
        title: "Non-Technical Skills",
        stage: "badges",
        badges: [
          "Communication", "Teamwork", "Time Management",
          "Adaptability", "Problem Solving",
        ],
      },
    ],
  },
  {
    title: "Education",
    info: [
      {
        title: "10th Pass",
        stage: "2020 – 2021",
        detail: "From Orai, Uttar Pradesh",
      },
      {
        title: "AIPA Course",
        stage: "2025 – 2026",
        detail: "From Kanpur, Uttar Pradesh",
      },
    ],
  },
  {
    title: "Achievements",
    info: [
      {
        title: "5+ Data Analytics Projects",
        stage: "🏆",
        detail: "Real-world Power BI dashboards, ML models aur web apps jo actual business problems solve karte hain.",
      },
      {
        title: "Customer Segmentation Model",
        stage: "🥇",
        detail: "K-Means clustering se 200+ customers ko 5 segments mein classify kiya — Silhouette Score: 0.5547.",
      },
      {
        title: "Bank Churn Prediction",
        stage: "🤖",
        detail: "ML model se bank customers ka churn predict kiya — Scikit-learn, Pandas & Seaborn use karke.",
      },
      {
        title: "Full-Stack Web Application",
        stage: "💻",
        detail: "Flask + MySQL se User Management System banaya — OTP verification, profile upload aur session management.",
      },
      {
        title: "Professional Power BI Dashboard",
        stage: "📊",
        detail: "Multi-page professional dashboard with Customer Overview, Segmentation aur KPI tracking — client-ready design.",
      },
      {
        title: "VIEW ALL CERTIFICATES",
        stage: "📜",
        detail: "Saare certificates Google Drive mein available hain — click karke directly open karo.",
        link: "https://drive.google.com/drive/folders/160eN2Ckrpj5dD9vMb5IMD5wIeT579Lwt?usp=drive_link",
      },
    ],
  },
];

// ── Stats ─────────────────────────────────────────────────────────
const stats = [
  { num: 5,  label: "Projects Completed",       suffix: "+" },
  { num: 3,  label: "Dashboard Projects",        suffix: "+" },
  { num: 10, label: "K+ Rows Data Analyzed",     suffix: "K+" },
  { num: 5,  label: "Tools Known",               suffix: "+" },
];

// ── About Page ────────────────────────────────────────────────────
const About = () => {
  const [activeTab, setActiveTab] = useState("Skills");

  const currentData = aboutData.find((d) => d.title === activeTab)?.info || [];

  return (
    <div className="h-full bg-primary/30 py-32 text-center xl:text-left">
      <Circles />

      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden" animate="show" exit="hidden"
        className="hidden xl:flex absolute bottom-0 -left-[370px]"
      >
        <Avatar />
      </motion.div>

      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">

        {/* ── Left ── */}
        <div className="flex-1 flex flex-col justify-center">
          <motion.h2
            variants={fadeIn("right", 0.2)}
            initial="hidden" animate="show" exit="hidden"
            className="h2"
          >
            Turning Data Into{" "}
            <span className="text-accent">Meaningful</span> Business Insights.
          </motion.h2>

          <motion.p
            variants={fadeIn("right", 0.4)}
            initial="hidden" animate="show" exit="hidden"
            className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0"
          >
            I&apos;m Meher Jeevan — a Business Analyst & Data Analyst fresher passionate
            about transforming raw data into actionable insights. I work with Power BI,
            Python, MySQL aur Machine Learning to help businesses make smarter decisions.
          </motion.p>

          {/* Stats */}
          <motion.div
            variants={fadeIn("right", 0.6)}
            initial="hidden" animate="show" exit="hidden"
            className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8"
          >
            <div className="flex flex-1 xl:gap-x-6">
              {stats.map((stat, i) => (
                <div key={i} className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                  <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                    <CountUp start={0} end={stat.num} duration={5} />
                    {stat.suffix}
                  </div>
                  <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px] text-white/60">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* ── Right ── */}
        <motion.div
          variants={fadeIn("left", 0.4)}
          initial="hidden" animate="show" exit="hidden"
          className="flex flex-col w-full xl:max-w-[48%] h-[480px]"
        >
          {/* Tab Buttons */}
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
            {aboutData.map((tab) => (
              <button
                key={tab.title}
                onClick={() => setActiveTab(tab.title)}
                className={`cursor-pointer capitalize xl:text-lg font-medium relative pb-1 transition-all duration-300 ${
                  activeTab === tab.title ? "text-accent" : "text-white/50 hover:text-white"
                }`}
              >
                {tab.title}
                {activeTab === tab.title && (
                  <motion.span
                    layoutId="underline"
                    className="absolute left-0 bottom-0 h-[2px] w-full bg-accent rounded-full"
                  />
                )}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="py-2 xl:py-6 flex flex-col gap-y-4 xl:gap-y-5 items-center xl:items-start overflow-y-auto pr-1 scrollbar-thin scrollbar-thumb-accent/30">
            {currentData.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                className="w-full"
              >
                {/* ── Tools (icons) ── */}
                {item.stage === "tools" && (
                  <div className="mb-4">
                    <h4 className="text-sm text-white/50 uppercase tracking-widest mb-3">{item.title}</h4>
                    <div className="flex flex-wrap gap-4">
                      {item.icons.map(({ Icon, label }, j) => (
                        <div key={j} className="flex flex-col items-center gap-1 group">
                          <div className="w-10 h-10 rounded-xl flex items-center justify-center text-2xl text-white/70 group-hover:text-accent transition-colors duration-300"
                            style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }}>
                            <Icon />
                          </div>
                          <span className="text-[10px] text-white/40 group-hover:text-accent/70 transition-colors">{label}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* ── Badges (non-technical) ── */}
                {item.stage === "badges" && (
                  <div className="mb-2">
                    <h4 className="text-sm text-white/50 uppercase tracking-widest mb-3">{item.title}</h4>
                    <div className="flex flex-wrap gap-2">
                      {item.badges.map((badge, j) => (
                        <span key={j} className="text-xs px-3 py-1 rounded-full text-white/70 hover:text-accent hover:border-accent transition-all duration-300 cursor-default"
                          style={{ border: "1px solid rgba(255,255,255,0.15)", background: "rgba(255,255,255,0.03)" }}>
                          {badge}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* ── Education & Achievements ── */}
                {!item.stage || (item.stage !== "tools" && item.stage !== "badges") ? (
                  item.link ? (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex gap-x-4 items-center w-full mt-2 px-4 py-3 rounded-xl transition-all duration-300 group"
                      style={{ background: "rgba(241,48,36,0.08)", border: "1px solid rgba(241,48,36,0.3)" }}
                    >
                      <div className="text-2xl flex-shrink-0 w-10 text-center">{item.stage}</div>
                      <div className="flex-1">
                        <h4 className="text-sm font-bold text-accent tracking-widest uppercase">{item.title}</h4>
                        <p className="text-xs text-white/40 mt-1">{item.detail}</p>
                      </div>
                      <div className="text-accent text-lg group-hover:scale-110 transition-transform duration-300">↗</div>
                    </a>
                  ) : (
                    <div className="flex gap-x-4 items-start group">
                      <div className="text-2xl flex-shrink-0 w-10 text-center">
                        {item.stage}
                      </div>
                      <div className="flex-1 border-b border-white/5 pb-3">
                        <h4 className="text-sm font-semibold text-white group-hover:text-accent transition-colors duration-300">
                          {item.title}
                        </h4>
                        {item.detail && (
                          <p className="text-xs text-white/40 mt-1 leading-relaxed">{item.detail}</p>
                        )}
                      </div>
                    </div>
                  )
                ) : null}

              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default About;
