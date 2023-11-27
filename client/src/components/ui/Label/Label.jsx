import React from "react";
import { cn } from "@/utils/cn";

export const Label = ({ id, label, className }) => {
  return (
    <label
      htmlFor={id}
      className={cn(
        "text-sm font-medium text-slate-900 dark:text-slate-200",
        className,
      )}
    >
      {label}
    </label>
  );
};
