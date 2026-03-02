import Link from "next/link";
import {
  RiInstagramLine,
  RiFacebookLine,
  RiGithubLine,
  RiLinkedinLine,
  RiTwitterXLine,
} from "react-icons/ri";

export const socialData = [
  { name: "GitHub",    link: "https://github.com/Jeevan92-coder",                                          Icon: RiGithubLine,    highlight: true },
  { name: "LinkedIn",  link: "https://www.linkedin.com/in/meher-jeevan-3884b8388/",                        Icon: RiLinkedinLine },
  { name: "Twitter",   link: "https://x.com/MeherJeeva77285",                                              Icon: RiTwitterXLine },
  { name: "Instagram", link: "https://www.instagram.com/mrsh.akya92?igsh=MTE5OTN2aDRvcmc1bg==",            Icon: RiInstagramLine },
  { name: "Facebook",  link: "https://www.facebook.com/share/1CMEdVCiqR/",                                 Icon: RiFacebookLine },
];

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg">
      {socialData.map((social, i) => (
        <Link
          key={i}
          title={social.name}
          href={social.link}
          target="_blank"
          rel="noreferrer noopener"
          className={`${
            social.highlight
              ? "bg-accent rounded-full p-[5px] hover:bg-accent-hover"
              : "hover:text-accent"
          } transition-all duration-300 text-white/70`}
        >
          <social.Icon />
          <span className="sr-only">{social.name}</span>
        </Link>
      ))}
    </div>
  );
};

export default Socials;