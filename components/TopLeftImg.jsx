// Decorative top-left background glow element (replaces image dependency)
const TopLeftImg = () => {
  return (
    <div
      className="absolute left-0 top-0 z-10 w-[300px] xl:w-[450px] opacity-30 pointer-events-none select-none"
      aria-hidden
    >
      <div className="w-full h-[450px] bg-gradient-radial from-accent/20 via-purple-500/10 to-transparent rounded-full blur-3xl" />
    </div>
  );
};

export default TopLeftImg;
