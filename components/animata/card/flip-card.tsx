"use client";

import {
  type ComponentProps,
  createContext,
  useContext,
  useMemo,
  useState,
  useCallback,
  type KeyboardEvent,
} from "react";
import { cn } from "@/lib/utils";

export type FlipCardRotate = "x" | "y";

type FlipCardContextValue = {
  rotate: FlipCardRotate;
  isFlipped: boolean;
  toggleFlip: () => void;
};

const FlipCardContext = createContext<FlipCardContextValue | null>(null);

const ROTATION_CLASS = {
  x: {
    hover: "group-hover/card:rotate-x-180 group-focus-visible/card:rotate-x-180",
    back: "rotate-x-180",
  },
  y: {
    hover: "group-hover/card:rotate-y-180 group-focus-visible/card:rotate-y-180",
    back: "rotate-y-180",
  },
} as const;

export function useFlipCard() {
  const context = useContext(FlipCardContext);
  if (!context) {
    throw new Error("FlipCard.Front and FlipCard.Back must be used within <FlipCard>.");
  }
  return context;
}

export type FlipCardRootProps = ComponentProps<"div"> & {
  rotate?: FlipCardRotate;
};

function FlipCardRoot({
  rotate = "y",
  className,
  children,
  onClick,
  onKeyDown,
  ...props
}: FlipCardRootProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  const toggleFlip = useCallback(() => {
    setIsFlipped((prev) => !prev);
  }, []);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent<HTMLDivElement>) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        toggleFlip();
      }
      onKeyDown?.(e);
    },
    [toggleFlip, onKeyDown]
  );

  const value = useMemo(
    () => ({ rotate, isFlipped, toggleFlip }),
    [rotate, isFlipped, toggleFlip]
  );

  return (
    <FlipCardContext.Provider value={value}>
      <div
        role="button"
        tabIndex={0}
        aria-pressed={isFlipped}
        onClick={(e) => {
          toggleFlip();
          onClick?.(e);
        }}
        onKeyDown={handleKeyDown}
        className={cn(
          "group/card relative h-72 w-56 perspective-1000 select-none cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#08090d]",
          className
        )}
        data-flipped={isFlipped ? "true" : "false"}
        {...props}
      >
        <div
          className={cn(
            "relative h-full w-full transition-transform duration-500 ease-out transform-3d will-change-transform motion-reduce:transition-none",
            ROTATION_CLASS[rotate].hover,
            isFlipped && (rotate === "x" ? "rotate-x-180" : "rotate-y-180")
          )}
        >
          {children}
        </div>
      </div>
    </FlipCardContext.Provider>
  );
}

export type FlipCardFaceProps = ComponentProps<"div">;

function FlipCardFront({ className, ...props }: FlipCardFaceProps) {
  useFlipCard();

  return (
    <div
      className={cn("absolute inset-0 backface-hidden", className)}
      {...props}
    />
  );
}

function FlipCardBack({ className, ...props }: FlipCardFaceProps) {
  const { rotate } = useFlipCard();

  return (
    <div
      className={cn(
        "absolute inset-0 backface-hidden",
        ROTATION_CLASS[rotate].back,
        className
      )}
      {...props}
    />
  );
}

const FlipCard = Object.assign(FlipCardRoot, {
  Front: FlipCardFront,
  Back: FlipCardBack,
}) as typeof FlipCardRoot & {
  Front: typeof FlipCardFront;
  Back: typeof FlipCardBack;
};

export default FlipCard;
export { FlipCard, FlipCardBack, FlipCardFront, FlipCardRoot };
