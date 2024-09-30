import { cn } from "@/lib/utils";
import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const scrollWithOffset = (el) => {
  const yCoordinate = el.getBoundingClientRect().top + window.scrollY;
  const yOffset = -48;
  window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" });
};

export const TopNavBar = () => {
  const location = useLocation();

  return (
    <div aria-label="top navbar" className="sticky top-0 z-50 bg-white">
      <hr className="hidden lg:block" />

      <div className="flex h-12 items-center justify-center gap-8">
        <HashLink
          scroll={(el) => scrollWithOffset(el)}
          to="#exterior"
          className={cn(
            "text-xs font-medium uppercase tracking-wide",
            location.hash === "#exterior" && "font-bold",
          )}
        >
          Exterior
        </HashLink>
        <HashLink
          scroll={(el) => scrollWithOffset(el)}
          to={"#interior"}
          className={cn(
            "text-xs font-medium uppercase tracking-wide",
            location.hash === "#interior" && "font-bold",
          )}
        >
          Interior
        </HashLink>
        <HashLink
          scroll={(el) => scrollWithOffset(el)}
          to={"#packages"}
          className={cn(
            "hidden text-xs font-medium uppercase tracking-wide lg:block",
            location.hash === "#packages" && "font-bold",
          )}
        >
          Packages
        </HashLink>
        <HashLink
          scroll={(el) => scrollWithOffset(el)}
          to={"#options"}
          className={cn(
            "hidden text-xs font-medium uppercase tracking-wide lg:block",
            location.hash === "#options" && "font-bold",
          )}
        >
          Options
        </HashLink>
        <HashLink
          scroll={(el) => scrollWithOffset(el)}
          to={"#summary"}
          className={cn(
            "text-xs font-medium uppercase tracking-wide",
            location.hash === "#summary" && "font-bold",
          )}
        >
          Summary
        </HashLink>
      </div>

      <hr />
    </div>
  );
};
