import { motion } from "framer-motion";
import Bulb from "../../components/Bulb";
import Circles from "../../components/Circles";
import TestimonialSlider from "../../components/TestimonialSlider";
import { fadeIn } from "../../variants";

const Testimonials = () => {
  return (
    <div className="h-full bg-primary/30 py-36 flex items-center">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-x-8 items-center">
          {/* Text */}
          <div className="text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0">
            <motion.h2
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="h2"
            >
              What clients <span className="text-accent">say.</span>
            </motion.h2>

            <motion.p
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="mb-4 max-w-[400px] mx-auto lg:mx-0"
            >
              Don&apos;t just take my word for it — hear directly from the founders, CTOs, and
              product leaders I&apos;ve had the privilege of working with.
            </motion.p>

            {/* Stars summary */}
            <motion.div
              variants={fadeIn("up", 0.6)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="hidden xl:flex items-center gap-3 mt-4"
            >
              <div className="flex text-accent text-lg">★★★★★</div>
              <span className="text-white/50 text-sm">4.9 / 5 avg. from 80+ reviews</span>
            </motion.div>
          </div>

          {/* Testimonial Slider */}
          <motion.div
            variants={fadeIn("down", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="w-full xl:max-w-[65%]"
          >
            <TestimonialSlider />
          </motion.div>
        </div>
      </div>

      <Bulb />
      <Circles />
    </div>
  );
};

export default Testimonials;
