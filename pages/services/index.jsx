import { motion } from "framer-motion";
import Bulb from "../../components/Bulb";
import Circles from "../../components/Circles";
import ServiceSlider from "../../components/ServiceSlider";
import { fadeIn } from "../../variants";

const Services = () => {
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
              className="h2 xl:mt-8"
            >
              My services <span className="text-accent">.</span>
            </motion.h2>

            <motion.p
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="mb-4 max-w-[400px] mx-auto lg:mx-0"
            >
              From concept to insight — I deliver end-to-end data solutions with
              meticulous attention to accuracy, visualization, and business impact.
            </motion.p>

            {/* CTA */}
            <motion.a
              variants={fadeIn("up", 0.6)}
              initial="hidden"
              animate="show"
              exit="hidden"
              href="/contact"
              className="hidden xl:flex w-max border border-accent text-accent px-6 py-3 rounded-full text-sm uppercase tracking-widest hover:bg-accent hover:text-white transition-all duration-300 mt-4"
            >
              Let&apos;s work together
            </motion.a>
          </div>

          {/* Slider */}
          <motion.div
            variants={fadeIn("down", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="w-full xl:max-w-[65%]"
          >
            <ServiceSlider />
          </motion.div>
        </div>
      </div>

      <Bulb />
    </div>
  );
};

export default Services;