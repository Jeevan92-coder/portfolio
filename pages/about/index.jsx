import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { FaPython, FaCode } from "react-icons/fa";
import { SiMicrosoftoffice, SiMysql, SiPowerbi, SiTensorflow, SiScikitlearn } from "react-icons/si";
import { HiX } from "react-icons/hi";
import { BsDownload } from "react-icons/bs";
import CountUp from "react-countup";
import Avatar from "../../components/Avatar";
import Circles from "../../components/Circles";
import { fadeIn } from "../../variants";

// ── Certificate list ───────────────────────────────────────────────
const certificates = [
  { name: "AI Fluency", file: "ai-fluency" },
  { name: "Accessibility Fundamentals", file: "accessibility-fundamentals" },
  { name: "Azure Architecture and Services", file: "azure-architecture-and-services" },
  { name: "Azure Management and Governance", file: "azure-management-and-governance" },
  { name: "Build Web Pages with HTML and CSS for Beginners", file: "build-web-pages-with-html-and-css-for-beginners" },
  { name: "Career Essentials in Cybersecurity (Course)", file: "career-essentials-in-cybersecurity-course" },
  { name: "Career Essentials in Cybersecurity (Learning Path)", file: "career-essentials-in-cybersecurity-learning-path" },
  { name: "Career Essentials in Cybersecurity (LinkedIn)", file: "career-essentials-in-cybersecurity-linkedin" },
  { name: "Career Essentials in Software Development (Course)", file: "career-essentials-in-software-development-course" },
  { name: "Career Essentials in Software Development (Learning Path)", file: "career-essentials-in-software-development-learning-path" },
  { name: "Career Essentials in Software Development (Oct 2025)", file: "career-essentials-in-software-development-oct-2025" },
  { name: "Collaborating with Microsoft Teams", file: "collaborating-with-microsoft-teams" },
  { name: "Create Machine Learning Models", file: "create-machine-learning-models" },
  { name: "Cybersecurity Awareness & Terminology (1)", file: "cybersecurity-awareness-and-terminology-1" },
  { name: "Cybersecurity Awareness & Terminology (2)", file: "cybersecurity-awareness-and-terminology-2" },
  { name: "Cybersecurity Awareness & Terminology (3)", file: "cybersecurity-awareness-and-terminology-3" },
  { name: "Cybersecurity Awareness & Terminology (4)", file: "cybersecurity-awareness-and-terminology-4" },
  { name: "Cybersecurity Foundations (1)", file: "cybersecurity-foundations-1" },
  { name: "Cybersecurity Foundations (2)", file: "cybersecurity-foundations-2" },
  { name: "Cybersecurity Foundations (3)", file: "cybersecurity-foundations-3" },
  { name: "Cybersecurity Foundations (4)", file: "cybersecurity-foundations-4" },
  { name: "Design a Dream Destination with AI", file: "design-a-dream-destination-with-ai" },
  { name: "Exploring Basic Computer Concepts", file: "exploring-basic-computer-concepts" },
  { name: "Get Started with Microsoft 365 Copilot", file: "get-started-with-microsoft-365-copilot" },
  { name: "Get Started with Microsoft Data Analytics (Copy)", file: "get-started-with-microsoft-data-analytics-copy" },
  { name: "Get Started with Microsoft Data Analytics", file: "get-started-with-microsoft-data-analytics" },
  { name: "Introduction to AI Skills for Nonprofits (EN-GB)", file: "introduction-to-ai-skills-for-nonprofits-en-gb" },
  { name: "Introduction to AI Skills for Nonprofits", file: "introduction-to-ai-skills-for-nonprofits" },
  { name: "Introduction to Cloud Concepts", file: "introduction-to-cloud-concepts" },
  { name: "Learn the Basics of Web Accessibility", file: "learn-the-basics-of-web-accessibility" },
  { name: "Microsoft Copilot for Productivity (Course)", file: "microsoft-copilot-for-productivity-course" },
  { name: "Microsoft Copilot for Productivity (Learning Path)", file: "microsoft-copilot-for-productivity-learning-path" },
  { name: "Microsoft Security Copilot (Course)", file: "microsoft-security-copilot-course" },
  { name: "Microsoft Security Copilot (Learning Path)", file: "microsoft-security-copilot-learning-path" },
  { name: "Prepare Data for Analysis with Power BI (2)", file: "prepare-data-for-analysis-with-power-bi-2" },
  { name: "Prepare Data for Analysis with Power BI", file: "prepare-data-for-analysis-with-power-bi" },
  { name: "Query and Modify Data with Transact-SQL", file: "query-and-modify-data-with-transact-sql" },
  { name: "Remote Development with VS Code", file: "remote-development-with-vs-code" },
  { name: "Responsible Use of AI in Education", file: "responsible-use-of-ai-in-education" },
  { name: "Strengthen Decision-Making with Generative AI (1)", file: "strengthen-decision-making-with-generative-ai-1" },
  { name: "Strengthen Decision-Making with Generative AI (2)", file: "strengthen-decision-making-with-generative-ai-2" },
  { name: "Strengthen Decision-Making with Generative AI (3)", file: "strengthen-decision-making-with-generative-ai-3" },
  { name: "The Cybersecurity Threat Landscape (1)", file: "the-cybersecurity-threat-landscape-1" },
  { name: "The Cybersecurity Threat Landscape (2)", file: "the-cybersecurity-threat-landscape-2" },
  { name: "Understand Data Concepts", file: "understand-data-concepts" },
];

// ── Tabs data ──────────────────────────────────────────────────────
const aboutData = [
  {
    title: "Skills",
    info: [
      {
        title: "Technical Skills", stage: "tools",
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
        title: "Non-Technical Skills", stage: "badges",
        badges: ["Communication", "Teamwork", "Time Management", "Adaptability", "Problem Solving"],
      },
    ],
  },
  {
    title: "Education",
    info: [
      { title: "10th Pass",    stage: "2020 – 2021", detail: "From Orai, Uttar Pradesh" },
      { title: "AIPA Course",  stage: "2025 – 2026", detail: "From Kanpur, Uttar Pradesh" },
    ],
  },
  {
    title: "Achievements",
    info: [
      { title: "5+ Data Analytics Projects",       stage: "🏆", detail: "Real-world Power BI dashboards, ML models aur web apps." },
      { title: "Customer Segmentation Model",       stage: "🥇", detail: "K-Means clustering — Silhouette Score: 0.5547." },
      { title: "Bank Churn Prediction",             stage: "🤖", detail: "ML model — Scikit-learn, Pandas & Seaborn." },
      { title: "Full-Stack Web Application",        stage: "💻", detail: "Flask + MySQL — OTP verification, session management." },
      { title: "Professional Power BI Dashboard",   stage: "📊", detail: "Multi-page dashboard — client-ready design." },
      { title: "45 Microsoft Certificates",         stage: "📜", detail: "Neeche saare certificates dekho — click karke full size mein open honge.", isCertSection: true },
    ],
  },
];

const stats = [
  { num: 5,  label: "Projects Completed", suffix: "+" },
  { num: 3,  label: "Dashboard Projects", suffix: "+" },
  { num: 10, label: "K+ Rows Analyzed",   suffix: "K+" },
  { num: 5,  label: "Tools Known",        suffix: "+" },
];

// ── Main ──────────────────────────────────────────────────────────
const About = () => {
  const [activeTab, setActiveTab] = useState("Skills");
  const [lightbox, setLightbox] = useState(null);

  const currentData = aboutData.find((d) => d.title === activeTab)?.info || [];

  return (
    <div className="h-full bg-primary/30 py-32 text-center xl:text-left">
      <Circles />

      <motion.div variants={fadeIn("right", 0.2)} initial="hidden" animate="show" exit="hidden"
        className="hidden xl:flex absolute bottom-0 -left-[370px]">
        <Avatar />
      </motion.div>

      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">

        {/* Left */}
        <div className="flex-1 flex flex-col justify-center">
          <motion.h2 variants={fadeIn("right", 0.2)} initial="hidden" animate="show" exit="hidden" className="h2">
            Turning Data Into <span className="text-accent">Meaningful</span> Business Insights.
          </motion.h2>
          <motion.p variants={fadeIn("right", 0.4)} initial="hidden" animate="show" exit="hidden"
            className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0">
            I&apos;m Meher Jeevan — a Business Analyst & Data Analyst fresher passionate about transforming raw data
            into actionable insights using Power BI, Python, MySQL aur Machine Learning.
          </motion.p>
          <motion.div variants={fadeIn("right", 0.6)} initial="hidden" animate="show" exit="hidden"
            className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8">
            <div className="flex flex-1 xl:gap-x-6">
              {stats.map((s, i) => (
                <div key={i} className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                  <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                    <CountUp start={0} end={s.num} duration={5} />{s.suffix}
                  </div>
                  <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px] text-white/60">{s.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Right */}
        <motion.div variants={fadeIn("left", 0.4)} initial="hidden" animate="show" exit="hidden"
          className="flex flex-col w-full xl:max-w-[48%]"
          style={{ maxHeight: "75vh" }}
        >
          {/* Tabs */}
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
            {aboutData.map((tab) => (
              <button key={tab.title} onClick={() => setActiveTab(tab.title)}
                className={`cursor-pointer capitalize xl:text-lg font-medium relative pb-1 transition-all duration-300 ${activeTab === tab.title ? "text-accent" : "text-white/50 hover:text-white"}`}>
                {tab.title}
                {activeTab === tab.title && (
                  <motion.span layoutId="underline" className="absolute left-0 bottom-0 h-[2px] w-full bg-accent rounded-full" />
                )}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="py-2 xl:py-4 flex flex-col gap-y-4 items-center xl:items-start overflow-y-auto pr-1"
            style={{ scrollbarWidth: "thin", scrollbarColor: "rgba(241,48,36,0.3) transparent" }}>
            {currentData.map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07 }} className="w-full">

                {/* Tools */}
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

                {/* Badges */}
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

                {/* Education rows */}
                {item.stage !== "tools" && item.stage !== "badges" && !item.isCertSection && (
                  <div className="flex gap-x-6 items-center w-full group border-b border-white/5 pb-4">
                    <div className="flex-shrink-0 text-center min-w-[80px]">
                      <span className="text-xs font-bold text-accent tracking-widest px-3 py-1 rounded-full"
                        style={{ background: "rgba(241,48,36,0.1)", border: "1px solid rgba(241,48,36,0.25)" }}>
                        {item.stage}
                      </span>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-sm font-semibold text-white group-hover:text-accent transition-colors duration-300">{item.title}</h4>
                      {item.detail && <p className="text-xs text-white/40 mt-1">{item.detail}</p>}
                    </div>
                  </div>
                )}

                {/* Achievement rows (emoji stage) */}
                {item.stage && !["tools","badges"].includes(item.stage) && !item.isCertSection && item.stage.length <= 2 && (
                  <div className="flex gap-x-4 items-start group border-b border-white/5 pb-3">
                    <div className="text-2xl flex-shrink-0 w-10 text-center">{item.stage}</div>
                    <div className="flex-1">
                      <h4 className="text-sm font-semibold text-white group-hover:text-accent transition-colors duration-300">{item.title}</h4>
                      {item.detail && <p className="text-xs text-white/40 mt-1">{item.detail}</p>}
                    </div>
                  </div>
                )}

                {/* Certificates Grid Section */}
                {item.isCertSection && (
                  <div className="w-full mt-2">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-2xl">📜</span>
                      <div>
                        <h4 className="text-sm font-semibold text-accent">{item.title}</h4>
                        <p className="text-xs text-white/40">{item.detail}</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                      {certificates.map((cert, ci) => (
                        <motion.div key={ci}
                          whileHover={{ scale: 1.03, y: -2 }}
                          onClick={() => setLightbox(cert)}
                          className="group cursor-pointer rounded-lg overflow-hidden"
                          style={{ border: "1px solid rgba(255,255,255,0.08)", background: "rgba(255,255,255,0.02)" }}
                        >
                          <div className="relative w-full bg-white overflow-hidden" style={{ aspectRatio: "4/3" }}>
                            <Image
                              src={`/certificates/${cert.file}.jpg`}
                              alt={cert.name}
                              fill
                              className="object-cover group-hover:scale-105 transition-transform duration-500"
                              sizes="150px"
                            />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-all duration-300 flex items-center justify-center">
                              <span className="opacity-0 group-hover:opacity-100 text-white text-[9px] px-2 py-0.5 rounded-full transition-all"
                                style={{ background: "rgba(241,48,36,0.9)" }}>View</span>
                            </div>
                          </div>
                          <div className="px-2 py-1.5">
                            <p className="text-[9px] text-white/60 leading-tight line-clamp-2 group-hover:text-accent transition-colors">{cert.name}</p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                )}

              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            style={{ background: "rgba(0,0,0,0.92)", backdropFilter: "blur(12px)" }}>
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-2xl w-full rounded-2xl overflow-hidden"
              style={{ border: "1px solid rgba(255,255,255,0.1)" }}
            >
              <button onClick={() => setLightbox(null)}
                className="absolute top-3 right-3 z-10 w-9 h-9 rounded-full flex items-center justify-center text-white hover:text-accent transition-colors"
                style={{ background: "rgba(0,0,0,0.7)" }}>
                <HiX size={18} />
              </button>
              <div className="relative w-full bg-white" style={{ aspectRatio: "4/3" }}>
                <Image src={`/certificates/${lightbox.file}.jpg`} alt={lightbox.name} fill className="object-contain" sizes="700px" />
              </div>
              <div className="flex items-center justify-between px-5 py-4" style={{ background: "rgba(10,10,18,0.97)" }}>
                <div>
                  <h3 className="text-sm font-semibold text-white">{lightbox.name}</h3>
                  <p className="text-xs text-white/40 mt-0.5">Microsoft Learn</p>
                </div>
                <a href={`/certificates/${lightbox.file}.jpg`} download
                  onClick={(e) => e.stopPropagation()}
                  className="flex items-center gap-2 text-xs px-4 py-2 rounded-full text-white transition-all"
                  style={{ background: "rgba(241,48,36,0.85)" }}>
                  <BsDownload size={12} /> Download
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default About;
