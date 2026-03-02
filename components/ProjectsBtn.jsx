import Link from "next/link";
import { motion } from "framer-motion";
import { HiArrowRight } from "react-icons/hi2";

const ProjectsBtn = () => {
  return (
    <div className="mx-auto xl:mx-0">
      <Link
        href="/work"
        className="relative w-[185px] h-[185px] flex justify-center items-center group"
        aria-label="View my work"
      >
        {/* Rotating text ring */}
        <motion.svg
          animate={{ rotate: 360 }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          viewBox="0 0 180 180"
          className="absolute w-full h-full select-none"
        >
          <defs>
            <path id="circlePath" d="M 90,90 m -65,0 a 65,65 0 1,1 130,0 a 65,65 0 1,1 -130,0"/>
          </defs>
          <text fill="#ffffff" fontSize="14" letterSpacing="8" opacity="0.7">
            <textPath href="#circlePath">
              MY PORTFOLIO • MY PORTFOLIO •
            </textPath>
          </text>
        </motion.svg>

        {/* Center circle */}
        <div className="w-[80px] h-[80px] rounded-full bg-accent flex items-center justify-center shadow-glow-accent group-hover:scale-110 transition-transform duration-300">
          <HiArrowRight
            className="text-2xl text-white group-hover:translate-x-1 transition-transform duration-300"
            aria-hidden
          />
        </div>
      </Link>
    </div>
  );
};

export default ProjectsBtn;
