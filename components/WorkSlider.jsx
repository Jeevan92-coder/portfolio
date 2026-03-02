import Link from "next/link";
import { motion } from "framer-motion";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

export const workSlides = [
  {
    title: "Business Data Analysis Dashboard",
    category: "Power BI Dashboard",
    tech: ["Power BI", "DAX", "Data Modeling"],
    description: "Multi-page Power BI dashboard with Welcome, Performance Insights & Academic Analysis pages. KPIs, bar charts, histograms aur trend visuals se business performance track kiya.",
    color: "#F13024", icon: "📊", link: "#", github: "https://github.com/Jeevan92-coder",
  },
  {
    title: "Professional Data Analytics Dashboard",
    category: "Power BI Dashboard",
    tech: ["Power BI", "DAX", "Customer Analytics"],
    description: "3-page professional dashboard — Welcome Page, Customer Overview & Customer Segmentation. Customer behavior, demographics aur segment-wise insights visualize kiye gaye hain.",
    color: "#f59e0b", icon: "📈", link: "#", github: "https://github.com/Jeevan92-coder",
  },
  {
    title: "Customer Segmentation",
    category: "Machine Learning",
    tech: ["Python", "Scikit-learn", "Pandas", "Matplotlib"],
    description: "K-Means clustering se 200 mall customers ko 5 segments mein divide kiya. Silhouette Score: 0.5547. Target, Standard, Careful, Careless & Sensible customers identify kiye.",
    color: "#7c3aed", icon: "🧠", link: "#", github: "https://github.com/Jeevan92-coder",
  },
  {
    title: "User Management System",
    category: "Web Development",
    tech: ["Python", "Flask", "MySQL", "HTML/CSS/JS"],
    description: "Full-stack web app with login, register, dashboard & settings. Features: OTP email verification, profile picture upload, password hashing aur session management.",
    color: "#10b981", icon: "🔐", link: "#", github: "https://github.com/Jeevan92-coder",
  },
];

const WorkSlider = () => {
  return (
    <Swiper
      spaceBetween={20}
      slidesPerView={1}
      pagination={{ clickable: true }}
      modules={[Pagination]}
      className="h-[420px] xl:h-[480px] pb-10"
    >
      {workSlides.map((project, pi) => (
        <SwiperSlide key={pi}>
          <motion.div
            whileHover={{ y: -4 }}
            transition={{ type: "spring", stiffness: 300 }}
            style={{ border: "1px solid rgba(255,255,255,0.1)" }}
            className="relative group rounded-2xl overflow-hidden bg-black/30 backdrop-blur-sm cursor-pointer h-[380px] xl:h-[440px]"
          >
            <div className="h-1 w-full" style={{ background: project.color }} />
            <div className="p-6 flex flex-col h-[calc(100%-4px)]">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <span className="text-xs uppercase tracking-widest text-white/40 font-light">{project.category}</span>
                  <h3 className="text-lg font-semibold mt-1 group-hover:text-accent transition-colors duration-300 leading-tight">{project.title}</h3>
                </div>
                <span className="text-3xl ml-2 flex-shrink-0">{project.icon}</span>
              </div>
              <p className="text-xs text-white/50 leading-relaxed flex-1">{project.description}</p>
              <div className="flex gap-2 flex-wrap mt-3 mb-4">
                {project.tech.map((t, ti) => (
                  <span key={ti} className="text-[10px] px-2 py-1 rounded-full text-white/60" style={{ border: "1px solid rgba(255,255,255,0.15)" }}>{t}</span>
                ))}
              </div>
              <div className="flex gap-3">
                <Link href={project.link} className="flex items-center gap-1 text-xs text-white/60 hover:text-accent transition-colors duration-300">
                  <BsArrowUpRight size={12} /> Live Demo
                </Link>
                <Link href={project.github} target="_blank" className="flex items-center gap-1 text-xs text-white/60 hover:text-white transition-colors duration-300">
                  <BsGithub size={12} /> GitHub
                </Link>
              </div>
            </div>
            <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none"
              style={{ background: `radial-gradient(circle at center, ${project.color}, transparent)` }} />
          </motion.div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default WorkSlider;