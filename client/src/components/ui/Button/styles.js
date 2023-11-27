import { cva } from "class-variance-authority";

export const buttonVariants = cva("disabled:pointer-events-none", {
  variants: {
    variant: {
      base: " flex h-12 min-w-[12.8125rem] items-center justify-center rounded-lg border-blue-400 bg-blue-400 text-base font-medium text-white duration-300 hover:border-blue-300 hover:bg-blue-300",
      formSubmit:
        "mt-7 flex h-12 w-full min-w-[12.8125rem] items-center justify-center rounded-lg border-blue-400 bg-blue-400 text-lg font-semibold text-white duration-300 hover:border-blue-300 hover:bg-blue-300",
    },
  },
  defaultVariants: {
    variant: "base",
  },
});
