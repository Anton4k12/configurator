import { cn } from "@/lib/utils";
import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { HashLink, NavHashLink } from "react-router-hash-link";

const scrollWithOffset = (el) => {
  const yCoordinate = el.getBoundingClientRect().top + window.scrollY;
  const yOffset = -40;
  window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" });
};

export const TopNavBar = () => {
  const location = useLocation();
  console.log(location.hash);

  return (
    <div aria-label="top navbar" className="sticky top-0 z-40 bg-white">
      <hr className="hidden lg:block" />

      <div className="flex h-12 items-center justify-center gap-8">
        <HashLink
          scroll={(el) => scrollWithOffset(el)}
          to="#exterior"
          className={cn("text-xs font-medium uppercase tracking-wide")}
        >
          Exterior
        </HashLink>
        <HashLink
          scroll={(el) => scrollWithOffset(el)}
          to={"#interior"}
          className={cn("text-xs font-medium uppercase tracking-wide")}
        >
          Interior
        </HashLink>
        <HashLink
          scroll={(el) => scrollWithOffset(el)}
          to={"#packages"}
          className={cn(
            "hidden text-xs font-medium uppercase tracking-wide lg:block",
          )}
        >
          Packages
        </HashLink>
        <HashLink
          scroll={(el) => scrollWithOffset(el)}
          to={"#options"}
          className={cn(
            "hidden text-xs font-medium uppercase tracking-wide lg:block",
          )}
        >
          Options
        </HashLink>
        <HashLink
          scroll={(el) => scrollWithOffset(el)}
          to={"#summary"}
          className={cn("text-xs font-medium uppercase tracking-wide")}
        >
          Summary
        </HashLink>
      </div>

      <hr />
    </div>
  );
};
