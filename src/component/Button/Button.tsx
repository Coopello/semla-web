import type { ButtonProps } from "@mantine/core";
import { Button as MantineButton } from "@mantine/core";
import { forwardRef } from "react";

/**
 * @package
 */
export const Button = forwardRef<
  HTMLButtonElement,
  Omit<ButtonProps, "color"> & {
    color?: "primary" | "primaryOutLine" | "gray";
    onClick?: () => void;
  }
>(({ className, color = "primary", style, ...props }, ref) => {
  const colorClass = {
    primary: "bg-primary hover:bg-secondary-dark",
    primaryOutLine:
      "border bg-white border-primary text-primary hover:bg-gray-100",
    gray: "bg-custom-gray text-black hover:bg-custom-gray hover:opacity-80",
  };

  return (
    <MantineButton
      className={`${className} w-fit text-base ${colorClass[color]} `}
      style={{
        ...style,
        transform: "translateY(0)",
      }}
      ref={ref}
      {...props}
    />
  );
});

Button.displayName = "Button";
