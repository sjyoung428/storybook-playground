export interface CursorProps {
  containerRef: React.RefObject<HTMLDivElement>;
  isHover?: boolean;
}

export interface CursorPositionState {
  x?: number;
  y?: number;
}
