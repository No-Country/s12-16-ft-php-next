import { cva } from "class-variance-authority";

export const textVariants = cva("", {
  variants: {
    variant: {
      base: "text-base font-normal",
      title: "text-xl font-bold text-red-500",
    },
  },
  defaultVariants: {
    variant: "body",
  },
});
