// Decorative light bulb glow element (SVG-based, no image dependency)
const Bulb = () => {
  return (
    <div
      className="absolute -left-24 -bottom-8 rotate-12 mix-blend-color-dodge animate-pulse z-10 w-[180px] xl:w-[240px] select-none pointer-events-none"
      aria-hidden
    >
      <svg viewBox="0 0 200 300" fill="none" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="100" cy="100" rx="80" ry="80" fill="url(#bulbGrad)" opacity="0.8"/>
        <rect x="80" y="170" width="40" height="12" rx="4" fill="#F13024" opacity="0.6"/>
        <rect x="82" y="185" width="36" height="10" rx="3" fill="#F13024" opacity="0.5"/>
        <rect x="84" y="198" width="32" height="8"  rx="3" fill="#F13024" opacity="0.4"/>
        <defs>
          <radialGradient id="bulbGrad" cx="50%" cy="50%" r="50%">
            <stop offset="0%"   stopColor="#FFB347" stopOpacity="0.9"/>
            <stop offset="60%"  stopColor="#F13024" stopOpacity="0.5"/>
            <stop offset="100%" stopColor="#F13024" stopOpacity="0"/>
          </radialGradient>
        </defs>
      </svg>
    </div>
  );
};

export default Bulb;
