import { HtmlHTMLAttributes } from "react";

export interface ScrollProgressState
  extends HtmlHTMLAttributes<HTMLDivElement> {
  colors: string | string[];
  progress: number;
}
