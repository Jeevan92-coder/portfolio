import { Sora } from "@next/font/google";
import Head from "next/head";
import { useEffect } from "react";

import Header from "./Header";
import Nav from "./Nav";
import TopLeftImg from "./TopLeftImg";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

const Layout = ({ children }) => {
  // Custom cursor effect
  useEffect(() => {
    const dot     = document.getElementById("cursor-dot");
    const outline = document.getElementById("cursor-outline");
    if (!dot || !outline) return;

    let mouseX = 0, mouseY = 0;
    let outX = 0, outY = 0;

    const onMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dot.style.left = mouseX + "px";
      dot.style.top  = mouseY + "px";
    };
    document.addEventListener("mousemove", onMove);

    const loop = () => {
      outX += (mouseX - outX) * 0.15;
      outY += (mouseY - outY) * 0.15;
      outline.style.left = outX + "px";
      outline.style.top  = outY + "px";
      requestAnimationFrame(loop);
    };
    loop();

    return () => document.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <main
      className={`page bg-site text-white bg-cover bg-no-repeat ${sora.variable} font-sora relative noise-overlay`}
    >
      <Head>
        <title>Meher Jeevan | BUSINESS ANALYST & DATA ANALYST</title>
        <meta
          name="description"
          content="Meher Jeevan — BUSINESS ANALYST & DATA ANALYST"
        />
        <meta
          name="keywords"
          content="react, nextjs, full-stack, developer, portfolio, UI/UX, design, framer-motion"
        />
        <meta name="author" content="Meher Jeevan" />
        <meta name="theme-color" content="#F13024" />
        <meta property="og:title" content="Meher Jeevan | Portfolio" />
        <meta property="og:description" content="BUSINESS ANALYST & DATA ANALYST" />
      </Head>

      {/* Custom cursor */}
      <div id="cursor-dot" />
      <div id="cursor-outline" />

      <TopLeftImg />
      <Nav />
      <Header />

      {children}
    </main>
  );
};

export default Layout;
