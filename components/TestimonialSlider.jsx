import { motion } from "framer-motion";
import dynamic from "next/dynamic";

const Swiper = dynamic(
  () => import("swiper/react").then((mod) => mod.Swiper),
  { ssr: false }
);

const SwiperSlide = dynamic(
  () => import("swiper/react").then((mod) => mod.SwiperSlide),
  { ssr: false }
);
import { FaQuoteLeft, FaStar } from "react-icons/fa";
import { Navigation, Pagination } from "swiper/modules";


import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const testimonialData = [
  {
    initials: "AS",
    color: "#F13024",
    name: "Anne Smith",
    position: "CEO, TechVentures Inc.",
    rating: 5,
    message:
      "Working with Meher was an absolute game-changer for our product. The attention to detail, design sensibility, and technical depth are top-notch. Our conversion rates jumped 45% after the redesign.",
  },
  {
    initials: "JD",
    color: "#7c3aed",
    name: "James Davidson",
    position: "CTO, NovaStar Labs",
    rating: 5,
    message:
      "Meher delivered a full-stack solution that exceeded all expectations — clean architecture, beautiful UI, and delivered ahead of schedule. Truly a rare combination of design and engineering talent.",
  },
  {
    initials: "SK",
    color: "#0ea5e9",
    name: "Shriya Kumar",
    position: "Founder, DesignFlow",
    rating: 5,
    message:
      "The portfolio website Meher built for us is simply stunning. Clients constantly compliment the design. The animations and interactions feel premium. 10/10 would recommend to anyone serious about their brand.",
  },
  {
    initials: "MR",
    color: "#10b981",
    name: "Marco Rossi",
    position: "Product Manager, Cloudify",
    rating: 5,
    message:
      "From discovery to deployment, the process was smooth and professional. Meher has a gift for translating complex requirements into elegant, user-friendly interfaces. Truly exceptional work.",
  },
];

const StarRating = ({ count }) => (
  <div className="flex gap-1 mb-4">
    {Array.from({ length: count }).map((_, i) => (
      <FaStar key={i} className="text-accent text-sm" />
    ))}
  </div>
);

const TestimonialSlider = () => {
  return (
    <Swiper
      navigation
      pagination={{ clickable: true }}
      modules={[Navigation, Pagination]}
      className="h-[400px] xl:h-[440px]"
    >
      {testimonialData.map((person, i) => (
        <SwiperSlide key={i}>
          <div className="flex flex-col items-center md:flex-row gap-x-8 h-full px-8 xl:px-16">
            {/* Avatar section */}
            <div className="flex-shrink-0 flex flex-col xl:justify-center items-center">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="w-[80px] h-[80px] rounded-full flex items-center justify-center text-white font-bold text-2xl mb-3 shadow-lg"
                style={{ background: `linear-gradient(135deg, ${person.color}, ${person.color}88)` }}
              >
                {person.initials}
              </motion.div>
              <div className="text-center">
                <p className="text-base font-semibold">{person.name}</p>
                <p className="text-xs uppercase tracking-widest text-white/40 font-light mt-1">
                  {person.position}
                </p>
              </div>
            </div>

            {/* Divider */}
            <div className="hidden xl:block w-[1px] h-[180px] bg-white/10" />

            {/* Quote section */}
            <div className="flex-1 flex flex-col justify-center xl:pl-8 mt-6 xl:mt-0">
              <FaQuoteLeft className="text-4xl xl:text-5xl text-accent/30 mb-4" />
              <StarRating count={person.rating} />
              <p className="text-base xl:text-lg text-white/70 leading-relaxed text-center md:text-left">
                {person.message}
              </p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default TestimonialSlider;