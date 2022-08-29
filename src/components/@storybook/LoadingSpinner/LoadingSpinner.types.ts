import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface LoadingSpinnerProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  color?: "primary" | "secondary" | string;
  size?: "sm" | "md" | "lg";
}
