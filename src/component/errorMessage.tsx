import { ComponentProps } from "react";

export default function ErrorMessage({
  children,
  ...props
}: ComponentProps<"p">) {
  return (
    <p {...props} className="select-none text-xs text-red-400">
      {children}
    </p>
  );
}
