import React, { useState, useEffect, useCallback } from "react";
import * as S from "./Cursor.styles";

interface CursorProps {
  containerRef: React.RefObject<HTMLDivElement>;
}

export interface CursorPositionState {
  x?: number;
  y?: number;
}
/**
 *
 * @todo 리팩토링 하기...
 * @todo hover시 어떻게 할지 좀 더 고민해보기
 */

const Cursor = ({ containerRef }: CursorProps) => {
  const [cursorPosition, setCursorPosition] = useState<CursorPositionState>({
    x: undefined,
    y: undefined,
  });

  const onMove = useCallback((event: MouseEvent) => {
    setCursorPosition(() => ({
      x: event.clientX,
      y: event.clientY,
    }));
  }, []);

  useEffect(() => {
    if (containerRef.current) {
      const container = containerRef.current;
      container.addEventListener("mousemove", onMove);
      return () => {
        container.removeEventListener("mousemove", onMove);
      };
    }
  }, []);

  return (
    <>
      <S.OuterCursor x={cursorPosition.x} y={cursorPosition.y} />
      <S.InnerCursor x={cursorPosition.x} y={cursorPosition.y} />
    </>
  );
};

export default Cursor;
