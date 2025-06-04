import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const gameCardVariant = cva("rounded-sm border border-white cursor-pointer", {
  variants: {
    variant: {
      default: "",
    },
    size: {
      xl: "h-[211px] w-[156px]",
      sm: "h-[64px] w-[46px]",
      lg: "h-[155px] w-[114px]",
      md: "h-[96px] w-[70px]",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "xl",
  },
});

function GameCard({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"div"> &
  VariantProps<typeof gameCardVariant> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "div";

  return (
    <Comp
      data-slot="div"
      className={cn(gameCardVariant({ variant, size, className }))}
      {...props}
    />
  );
}

export { GameCard, gameCardVariant };
