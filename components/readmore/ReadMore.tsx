
"use client";
import { cn } from "@/lib/utils";
import useReadmore, { ReadMoreProps } from "./useReadmore";
import HightLightWrapper from "../HightLightWrapper";

export default function ReadMore({
  text,
  status,
  lines = 2,
  className,
  moreLabel = "Read more",
  lessLabel = "Read less",
}: ReadMoreProps) { 
  const { textRef, expanded, setExpanded, isOverflowing } = useReadmore(text,lines);

  return (
    <HightLightWrapper title="ReadMore Component">
      <div className="w-full">
      <p
        ref={textRef}
        data-status={status}
        className={cn("wrap-break-word", className)}
        style={
          expanded
            ? undefined
            : {
                display: "-webkit-box",
                WebkitBoxOrient: "vertical",
                WebkitLineClamp: lines,
                overflow: "hidden",
              }
        }
      >
        {text}
      </p>

      {isOverflowing && (
        <button
          type="button"
          onClick={() => setExpanded((prev) => !prev)}
          aria-expanded={expanded}
          className="mt-1 text-sm font-medium text-primary hover:underline"
        >
          {expanded ? lessLabel : moreLabel}
        </button>
      )}
    </div>
    </HightLightWrapper>
  );
}
