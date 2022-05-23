import React, { useRef } from "react";
import { ScrollContainer } from "../ScrollContainer";
import { positions } from "./../../utils/propCheck";
import { useScroll } from "./../../hooks/scroll";
import ScrollTrack from "./ScrollTrack";

export const ProgressBar = ({
  children,
  style,
  hideNativeScrollbar = false,
  yScrollBarPosition = positions.top,
  xScrollBarPosition = positions.left,
  yScrollBarThumbStyle,
  yScrollBarTrackStyle,
  xScrollBarThumbStyle,
  xScrollBarTrackStyle,
}) => {
  const contentRef = useRef();
  const [yPercent, xPercent] = useScroll(contentRef);

  return (
    <ScrollContainer
      children={children}
      style={style}
      ref={contentRef}
      hideNativeScrollbar={hideNativeScrollbar}
      yScrollComponent={
        yPercent !== undefined && (
          <ScrollTrack
            percent={yPercent}
            scrollBarThumbStyle={yScrollBarThumbStyle}
            scrollBarTrackStyle={yScrollBarTrackStyle}
            scrollBarPosition={yScrollBarPosition}
          />
        )
      }
      xScrollComponent={
        xPercent !== undefined && (
          <ScrollTrack
            percent={xPercent}
            scrollBarThumbStyle={xScrollBarThumbStyle}
            scrollBarTrackStyle={xScrollBarTrackStyle}
            scrollBarPosition={xScrollBarPosition}
          />
        )
      }
    />
  );
};
