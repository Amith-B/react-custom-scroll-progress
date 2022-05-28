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
  onScroll,
}) => {
  const contentRef = useRef();
  const [yPercent, xPercent] = useScroll(contentRef);

  useEffect(() => {
    if (onScroll && typeof onScroll === "function") {
      onScroll({
        verticalPercent: yPercent,
        horizontalPercent: xPercent,
      });
    }
  }, [yPercent, xPercent]);

  return (
    <ScrollContainer
      children={children}
      style={style}
      ref={contentRef}
      hideNativeScrollbar={hideNativeScrollbar}
      scrollComponent1={
        yPercent !== undefined && (
          <ScrollTrack
            percent={yPercent}
            scrollBarThumbStyle={yScrollBarThumbStyle}
            scrollBarTrackStyle={yScrollBarTrackStyle}
            scrollBarPosition={yScrollBarPosition}
          />
        )
      }
      scrollComponent2={
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
