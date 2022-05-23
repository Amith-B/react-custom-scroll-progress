import React from "react";
import { positions, checkScrollBarPosition } from "./../../utils/propCheck";

function ScrollTrack({
  percent = 0,
  scrollBarThumbStyle,
  scrollBarTrackStyle,
  scrollBarPosition = positions.top,
}) {
  const isHorizontal = () => {
    return (
      scrollBarPosition === positions.top ||
      scrollBarPosition === positions.bottom
    );
  };

  return (
    <div
      className={`rcsp-progressbar__track rcsp-progressbar__position-${checkScrollBarPosition(
        scrollBarPosition
      )}`}
      style={{
        ...(isHorizontal() ? { height: "6px" } : { width: "6px" }),
        ...scrollBarTrackStyle,
        ...(isHorizontal() ? { width: "100%" } : { height: "100%" }),
      }}
    >
      <div
        className="rcsp-progressbar__thumb"
        style={{
          ...(isHorizontal() ? { height: "100%" } : { width: "100%" }),
          ...scrollBarThumbStyle,
          ...(isHorizontal()
            ? { width: `${percent}%` }
            : { height: `${percent}%` }),
        }}
      ></div>
    </div>
  );
}

export default ScrollTrack;
