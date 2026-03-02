import { motion } from "framer-motion";
import { useState } from "react";
import CountUp from "react-countup";
import {
  FaPython, FaCode,
} from "react-icons/fa";
import {
  SiMysql, SiPowerbi, SiTensorflow, SiMicrosoftoffice, SiScikitlearn,
} from "react-icons/si";

import Circles from "../../components/Circles";
import { fadeIn } from "../../variants";

// ── About Data ──────────────────────────────────────────
export const aboutData = [
  {
    title: "skills",
    info: [
      {
        title: "Technical Skills:",
        icons: [FaPython, SiMicrosoftoffice, SiMysql, FaCode, SiPowerbi, SiTensorflow, SiScikitlearn],
        iconLabels: ["Python", "MS Office", "MySQL", "Web Dev", "Power BI", "ML", "DL"],
      },
      {
        title: "Non-Technical Skills:",
        texts: ["Communication", "Teamwork", "Time Management", "Adaptability", "Problem Solving"],
      },
    ],
  },

  {
    title: "education",
    info: [
      { title: "10th pass — From Orai, Uttar Pradesh",                 stage: "2020 – 2021" },
      { title: "AIPA Course — From Kanpur, Uttar Pradesh",   stage: "2025 - 2026" },
    ],
  },
];

// ── About Page ──────────────────────────────────────────
const About = () => {
  const [index, setIndex] = useState(0);

  return (
    <div className="h-full bg-primary/30 py-32 text-center xl:text-left">
      <Circles />

      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
        {/* ── Text & Content ── */}
        <div className="flex-1 flex flex-col justify-center">
          <motion.h2
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2"
          >
            Turning Data <span className="text-accent">Into</span> Meaningful
            Business Insights
          </motion.h2>

          <motion.p
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0"
          >
            I&apos;m Meher Jeevan, a passionate Business Analyst & Data Analyst fresher with hands-on experience in building real-world data projects.
            I&apos;enjoy solving business problems using data and continuously improving my analytical and strategic thinking skills.
          </motion.p>

          {/* Stats */}
          <motion.div
            variants={fadeIn("right", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8"
          >
            <div className="flex flex-1 xl:gap-x-6">
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-bold text-accent mb-2">
                  <CountUp start={0} end={5} duration={10} />+
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Projects Completed
                </div>
              </div>

              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-bold text-accent mb-2">
                  <CountUp start={0} end={10000} duration={5} />+
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Rows Data Analyzed
                </div>
              </div>

              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-bold text-accent mb-2">
                  <CountUp start={0} end={5} duration={5} />+
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Dashboard Projects
                </div>
              </div>

              <div className="relative flex-1">
                <div className="text-2xl xl:text-4xl font-bold text-accent mb-2">
                  <CountUp start={0} end={5} duration={5} />
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Tools Known
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ── Tabs & Info ── */}
        <motion.div
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex flex-col w-full xl:max-w-[48%] h-[480px]"
        >
          {/* Tab Buttons */}
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
            {aboutData.map((item, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`${
                  index === i
                    ? "text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300"
                    : "after:w-0"
                } capitalize cursor-pointer text-sm xl:text-base relative after:h-[2px] after:bg-accent after:absolute after:-bottom-1 after:left-0 transition-all duration-300 hover:text-accent`}
              >
                {item.title}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start overflow-y-auto scrollbar-thin scrollbar-thumb-accent scrollbar-track-primary/20">
            {aboutData[index].info.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60 mx-auto xl:mx-0 w-full"
              >
                {/* Title */}
                <div className="font-light mb-2 md:mb-0 text-sm xl:text-base">
                  {item.title}
                </div>

                {/* Stage / Year */}
                {item.stage && (
                  <>
                    <div className="hidden md:flex text-white/40">—</div>
                    <div className="text-accent text-sm font-semibold">
                      {item.stage}
                    </div>
                  </>
                )}

                {/* Icons with labels */}
                {item.icons && (
                  <div className="flex gap-x-4 mt-3 md:mt-0 md:ml-4 flex-wrap justify-center xl:justify-start gap-y-3">
                    {item.icons.map((Icon, iconIdx) => (
                      <motion.div
                        key={iconIdx}
                        whileHover={{ scale: 1.2, color: "#F13024" }}
                        className="flex flex-col items-center gap-1 text-white/60 hover:text-accent transition-colors cursor-default"
                        title={item.iconLabels?.[iconIdx] || ""}
                      >
                        <Icon className="text-2xl" />
                        {item.iconLabels?.[iconIdx] && (
                          <span className="text-[9px] uppercase tracking-wide text-white/40">
                            {item.iconLabels[iconIdx]}
                          </span>
                        )}
                      </motion.div>
                    ))}
                  </div>
                )}

                {/* Text-only skills (non-technical) */}
                {item.texts && (
                  <div className="flex flex-wrap gap-2 mt-3 md:mt-0 md:ml-4 justify-center xl:justify-start">
                    {item.texts.map((text, ti) => (
                      <motion.span
                        key={ti}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: ti * 0.08 }}
                        className="text-xs px-3 py-1 rounded-full text-white/70"
                        style={{ border: "1px solid rgba(241,48,36,0.3)", background: "rgba(241,48,36,0.06)" }}
                      >
                        {text}
                      </motion.span>
                    ))}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;