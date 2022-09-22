import { useState, useEffect, useCallback } from "react";
import * as S from "./Cursor.styles";
import { CursorPositionState, CursorProps } from "./Cusor.types";

/**
 *
 * @typedef {import("./Cusor.types").CursorProps} CursorProps
 * @param {CursorProps} props
 * @param [props.containerRef] - default 값으로 document.body이다.
 *
 * 왜 스토리북에선 가운데 정렬이 안될까..?
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
    if (containerRef && containerRef.current) {
      const container = containerRef.current;
      container.addEventListener("mousemove", onMove);
      return () => {
        container.removeEventListener("mousemove", onMove);
      };
    } else {
      if (!containerRef) {
        const container = document.body;
        container.addEventListener("mousemove", onMove);
        return () => {
          container.removeEventListener("mousemove", onMove);
        };
      }
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
