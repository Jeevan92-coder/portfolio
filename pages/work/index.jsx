import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import Bulb from "../../components/Bulb";
import Circles from "../../components/Circles";
import { fadeIn } from "../../variants";

const WorkSlider = dynamic(
  () => import("../../components/WorkSlider"),
  { ssr: false }
);

const Work = () => {
  return (
    <div className="h-full bg-primary/30 py-36 flex items-center">
      <Circles />

      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-x-8">
          {/* Text */}
          <div className="text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0">
            <motion.h2
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="h2 xl:mt-12"
            >
              My work <span className="text-accent">.</span>
            </motion.h2>

            <motion.p
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="mb-4 max-w-[400px] mx-auto lg:mx-0"
            >
              Real-world projects — Power BI dashboards, Machine Learning models
              aur Full-Stack web apps jo actual business problems solve karte hain.
            </motion.p>

            <motion.div
              variants={fadeIn("up", 0.6)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="hidden xl:flex gap-4 mt-4 flex-wrap"
            >
              {["All", "Power BI", "ML / Python", "Web Dev"].map((tag) => (
                <span
                  key={tag}
                  className="text-xs border border-white/20 px-3 py-1 rounded-full text-white/50 hover:border-accent hover:text-accent transition-all duration-300 cursor-pointer"
                >
                  {tag}
                </span>
              ))}
            </motion.div>
          </div>

          {/* Work Slider */}
          <motion.div
            variants={fadeIn("down", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="w-full xl:max-w-[65%]"
          >
            <WorkSlider />
          </motion.div>
        </div>
      </div>

      <Bulb />
    </div>
  );
};

export default Work;