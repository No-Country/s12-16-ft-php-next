import { cva } from "class-variance-authority";

export const textVariants = cva("", {
  variants: {
    variant: {
      base: "text-base font-normal",
      title: "text-2xl font-bold text-gray-900",
    },
  },
  defaultVariants: {
    variant: "body",
  },
});
