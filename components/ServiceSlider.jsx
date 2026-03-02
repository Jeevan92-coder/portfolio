import { motion } from "framer-motion";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  RxCrop, RxPencil2, RxDesktop, RxReader, RxRocket, RxArrowTopRight,
} from "react-icons/rx";
import { MdOutlineWebhook } from "react-icons/md";

import "swiper/css";
import "swiper/css/pagination";

export const serviceData = [
  {
    Icon: RxDesktop,
    title: "Data Analysis",
    description: "Raw data ko meaningful insights mein convert karna — cleaning, exploration, aur statistical analysis ke through business decisions support karna.",
  },
  {
    Icon: RxCrop,
    title: "Dashboard & Visualization",
    description: "Power BI aur Excel mein interactive dashboards banana jo complex data ko simple, actionable visuals mein present kare.",
  },
  {
    Icon: RxReader,
    title: "Business Reporting",
    description: "Clear aur concise business reports banana jo stakeholders ko data-driven decisions lene mein help kare.",
  },
  {
    Icon: RxPencil2,
    title: "SQL & Database Work",
    description: "MySQL mein complex queries likhna, data extract karna, aur databases ko efficiently manage karna.",
  },
  {
    Icon: RxRocket,
    title: "ML / Predictive Modeling",
    description: "Python se machine learning models banana jo future trends predict kare aur business problems solve kare.",
  },
  {
    Icon: MdOutlineWebhook,
    title: "Excel & Automation",
    description: "Advanced Excel formulas, Pivot Tables, aur automation se repetitive tasks fast aur error-free banana.",
  },
];

const ServiceSlider = () => {
  return (
    <Swiper
      breakpoints={{
        320: { slidesPerView: 1, spaceBetween: 15 },
        640: { slidesPerView: 2, spaceBetween: 20 },
        1024: { slidesPerView: 3, spaceBetween: 20 },
      }}
      pagination={{ clickable: true }}
      modules={[Pagination]}
      className="h-[300px] sm:h-[400px] pb-10"
    >
      {serviceData.map((item, i) => (
        <SwiperSlide key={i}>
          <motion.div
            whileHover={{ y: -6, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
            style={{
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.1)",
            }}
            className="h-[240px] sm:h-[340px] rounded-2xl px-6 py-8 flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer backdrop-blur-sm transition-all duration-300"
          >
            {/* Icon */}
            <div className="text-4xl text-accent mb-4">
              <item.Icon />
            </div>

            {/* Title & Description */}
            <div className="flex-1">
              <h3 className="text-lg font-semibold mb-2 group-hover:text-accent transition-colors duration-300">
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed text-white/50">
                {item.description}
              </p>
            </div>

            {/* Arrow */}
            <div className="mt-4 text-2xl text-white/30 group-hover:text-accent transition-all duration-300 group-hover:rotate-45">
              <RxArrowTopRight />
            </div>
          </motion.div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ServiceSlider;