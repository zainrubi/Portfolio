import type { ComponentProps } from "react";
import FlipCard, { FlipCardBack, FlipCardFront } from "@/components/animata/card/flip-card";
import { cn } from "@/lib/utils";

type FlippingCardsRootProps = ComponentProps<"div">;

function FlippingCardsRoot({ className, ...props }: FlippingCardsRootProps) {
  return (
    <div
      className={cn(
        "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5",
        className
      )}
      {...props}
    />
  );
}

type FlippingCardsItemProps = ComponentProps<typeof FlipCard>;

function FlippingCardsItem({ className, ...props }: FlippingCardsItemProps) {
  return (
    <FlipCard
      className={cn("h-[310px] w-full", className)}
      rotate="y"
      {...props}
    />
  );
}

const FlippingCardsItemWithFaces = Object.assign(FlippingCardsItem, {
  Front: FlipCardFront,
  Back: FlipCardBack,
});

const FlippingCards = Object.assign(FlippingCardsRoot, {
  Item: FlippingCardsItemWithFaces,
}) as typeof FlippingCardsRoot & {
  Item: typeof FlippingCardsItemWithFaces;
};

export default FlippingCards;
export { FlippingCards, FlippingCardsItemWithFaces as FlippingCardsItem };
