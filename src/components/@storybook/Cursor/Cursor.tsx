import React, { useState, useEffect, useCallback } from "react";
import * as S from "./Cursor.styles";
import { CursorPositionState, CursorProps } from "./Cusor.types";

/**
 *
 * @todo hover시 어떻게 할지 좀 더 고민해보기
 *
 */

const Cursor = ({ containerRef, isHover = false }: CursorProps) => {
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
      {!isHover && <S.OuterCursor x={cursorPosition.x} y={cursorPosition.y} />}
      <S.InnerCursor
        isHover={isHover}
        x={cursorPosition.x}
        y={cursorPosition.y}
      />
    </>
  );
};

export default Cursor;
