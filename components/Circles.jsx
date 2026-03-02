// Decorative circles element (SVG-based, no image dependency)
const Circles = () => {
  return (
    <div
      className="w-[200px] xl:w-[300px] absolute -right-8 -bottom-4 mix-blend-color-dodge animate-pulse z-10 select-none pointer-events-none"
      aria-hidden
    >
      <svg viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="150" cy="150" r="140" stroke="#F13024" strokeWidth="0.5" opacity="0.3"/>
        <circle cx="150" cy="150" r="100" stroke="#F13024" strokeWidth="0.5" opacity="0.4"/>
        <circle cx="150" cy="150" r="60"  stroke="#F13024" strokeWidth="1"   opacity="0.5"/>
        <circle cx="150" cy="150" r="20"  fill="#F13024" opacity="0.2"/>
        {[0,60,120,180,240,300].map((deg, i) => {
          const rad = (deg * Math.PI) / 180;
          const x = 150 + 140 * Math.cos(rad);
          const y = 150 + 140 * Math.sin(rad);
          return <circle key={i} cx={x} cy={y} r="3" fill="#F13024" opacity="0.6"/>;
        })}
      </svg>
    </div>
  );
};

export default Circles;
