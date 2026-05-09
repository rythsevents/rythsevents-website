import React from "react";
import { cn } from "../lib/utils";

interface LogoProps {
  className?: string;
  isLight?: boolean;
  forceDark?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  className,
  isLight = false,
  forceDark = false,
}) => {
  return (
    <div
      className={cn(
        "flex items-center gap-2 group cursor-pointer justify-start",
        className,
      )}
    >
      <div className="relative flex items-center justify-center">
        {/* Logo Image */}
        <img
          src="assets/images/Logo/riths-logo.jpeg"
          alt="RITHS Events Logo"
          className="w-12 h-12 md:w-16 md:h-16 transition-transform duration-500 group-hover:rotate-12 rounded-full"
        />
      </div>

      <div className="flex flex-col items-start leading-none">
        <span
          className={cn(
            "text-3xl md:text-5xl font-serif font-bold tracking-tight transition-colors",
            forceDark
              ? "text-charcoal"
              : isLight
                ? "text-charcoal"
                : "text-white",
          )}
        >
          RITHS
        </span>
        <span className="text-[11px] md:text-base font-sans font-bold text-gold uppercase -mt-1 ml-[2px] md:ml-[3px]">
          Events
        </span>
      </div>
    </div>
  );
};

export default Logo;
