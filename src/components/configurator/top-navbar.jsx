export const TopNavBar = () => {
  return (
    <div
      aria-label="top navbar"
      className="flex h-12 items-center justify-center gap-8"
    >
      <button className="h-full text-xs font-medium uppercase tracking-wide">
        Exterior
      </button>
      <button className="h-full text-xs font-medium uppercase tracking-wide">
        Interior
      </button>
      <button className="h-full text-xs font-medium uppercase tracking-wide">
        Packages
      </button>
      <button className="h-full text-xs font-medium uppercase tracking-wide">
        Options
      </button>
      <button className="h-full text-xs font-medium uppercase tracking-wide">
        Summary
      </button>
    </div>
  );
};
