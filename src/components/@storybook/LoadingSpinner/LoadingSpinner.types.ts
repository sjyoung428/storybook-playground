import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface LoadingSpinnerProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  color?: "primary" | "secondary";
  size?: "sm" | "md" | "lg";
}
