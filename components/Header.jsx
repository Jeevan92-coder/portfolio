import Link from "next/link";
import Socials from "./Socials";

const Header = () => {
  return (
    <header className="absolute z-30 w-full flex items-center px-8 xl:px-0 xl:h-[90px]">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-y-6 py-8">
          {/* Logo Text */}
          <Link href="/" className="group">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold tracking-widest text-white">
                MEHER
              </span>
              <span className="w-2 h-2 rounded-full bg-accent animate-glow-pulse" />
              <span className="text-2xl font-bold tracking-widest text-white/40 group-hover:text-white transition-colors duration-300">
                JEEVAN
              </span>
            </div>
          </Link>

          {/* Socials */}
          <Socials />
        </div>
      </div>
    </header>
  );
};

export default Header;
