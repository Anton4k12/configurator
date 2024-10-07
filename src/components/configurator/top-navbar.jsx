import useScrollSpy from "@/hooks/useScrollSpy";
import { cn } from "@/lib/utils";
import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { HashLink, NavHashLink } from "react-router-hash-link";

const scrollWithOffset = (el) => {
  const yCoordinate = el.getBoundingClientRect().top + window.scrollY;
  const yOffset = -47;
  window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" });
};

export const TopNavBar = () => {
  const location = useLocation();

  const ids = ["exterior", "interior", "packages", "options", "summary"];

  const activeId = useScrollSpy(ids, 48);

  return (
    <div aria-label="top navbar" className="sticky top-0 z-40 bg-white">
      <hr className="hidden lg:block" />

      <div className="flex h-12 items-center justify-center gap-8">
        {ids.map((id) => {
          return (
            <HashLink
              key={id}
              scroll={(el) => scrollWithOffset(el)}
              to={`#${id}`}
              className={cn(
                "text-xs font-medium uppercase tracking-wide",
                activeId === id && "font-bold",
                (id === "packages" || id === "options") && "hidden lg:inline",
              )}
            >
              {id}
            </HashLink>
          );
        })}
      </div>

      <hr />
    </div>
  );
};
