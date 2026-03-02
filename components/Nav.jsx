import Link from "next/link";
import { useRouter } from "next/router";
import {
  HiHome,
  HiUser,
  HiViewColumns,
  HiRectangleGroup,
  HiEnvelope,
} from "react-icons/hi2";
import { motion } from "framer-motion";

export const navData = [
  { name: "home",     path: "/",          Icon: HiHome },
  { name: "about",    path: "/about",     Icon: HiUser },
  { name: "services", path: "/services",  Icon: HiRectangleGroup },
  { name: "work",     path: "/work",      Icon: HiViewColumns },
  { name: "contact",  path: "/contact",   Icon: HiEnvelope },
];

const Nav = () => {
  const router = useRouter();

  return (
    <nav className="flex flex-col items-center xl:justify-center gap-y-4 fixed h-max bottom-0 mt-auto xl:right-[2%] z-50 top-0 w-full xl:w-16 xl:max-w-md xl:h-screen">
      <div className="flex w-full xl:flex-col items-center justify-between xl:justify-center gap-y-10 px-4 md:px-40 xl:px-0 h-[80px] xl:h-max py-8 bg-black/30 backdrop-blur-md text-3xl xl:text-xl xl:rounded-full border border-white/5">
        {navData.map((link, i) => (
          <Link
            key={i}
            href={link.path}
            className={`${
              link.path === router.pathname ? "text-accent" : "text-white/50"
            } relative flex items-center group hover:text-accent transition-all duration-300`}
          >
            {/* Tooltip */}
            <div
              role="tooltip"
              className="absolute pr-14 right-0 hidden xl:group-hover:flex"
            >
              <div className="bg-white relative flex text-primary items-center p-[6px] rounded-[3px]">
                <div className="text-[12px] leading-none font-semibold capitalize">
                  {link.name}
                </div>
                <div className="border-solid border-l-white border-l-8 border-y-transparent border-y-[6px] border-r-0 absolute -right-2" />
              </div>
            </div>

            {/* Active indicator dot */}
            {link.path === router.pathname && (
              <motion.span
                layoutId="nav-active"
                className="absolute -left-1 w-[3px] h-[3px] rounded-full bg-accent hidden xl:block"
              />
            )}

            <link.Icon />
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Nav;