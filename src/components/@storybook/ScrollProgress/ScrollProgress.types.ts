import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface ScrollProgressState
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  colors: string | string[];
  progress: number;
}
