import React, { useRef, useState, useEffect } from "react";
import { ScrollContainer } from "../ScrollContainer";
import { useScroll } from "../../hooks/scroll";
import ScrollTrack, { CircularBarType } from "./ScrollTrack";
import {
  ProgressBarCurrentState,
  checkProgressBarCurrentState,
} from "../../utils/propCheck";

export const CircularProgressBar = ({
  children,
  style,
  hideNativeScrollbar = false,
  verticalScrollColor,
  horizontalScrollColor,
  verticalScrollTrackStyle,
  horizontalScrollTrackStyle,
  currentState = ProgressBarCurrentState.collapse,
  hideVerticalScrollProgress = false,
  hideHorizontalScrollProgress = false,
  autoSplit = true,
  autoHide = false,
}) => {
  const contentRef = useRef();
  const [yPercent, xPercent] = useScroll(contentRef);
  const [splitProgress, setSplitProgress] = useState(false);
  const [hide, setHide] = useState(false);

  useEffect(() => {
    setSplitProgress(
      checkProgressBarCurrentState(currentState) ===
        ProgressBarCurrentState.split
    );
  }, [currentState]);

  useEffect(() => {
    if (autoSplit) {
      setSplitProgress(true);
      const timmer = setTimeout(() => {
        setSplitProgress(false);
      }, 1000);

      return () => clearTimeout(timmer);
    }
  }, [yPercent, xPercent, autoSplit]);

  useEffect(() => {
    if (autoHide) {
      setHide(false);
      const timmer = setTimeout(() => {
        setHide(true);
      }, 1000);

      return () => clearTimeout(timmer);
    } else {
      setHide(false);
    }
  }, [yPercent, xPercent, autoHide]);

  return (
    <ScrollContainer
      children={children}
      style={style}
      ref={contentRef}
      hideNativeScrollbar={hideNativeScrollbar}
      scrollComponent1={
        yPercent !== undefined &&
        !hideVerticalScrollProgress && (
          <ScrollTrack
            className={hide && "rcsp-circularbar__track-hidden"}
            percentOuter={yPercent}
            percentInner={xPercent}
            verticalScrollColor={verticalScrollColor}
            horizontalScrollColor={horizontalScrollColor}
            circularBarTrackStyle={verticalScrollTrackStyle}
            circularBarType={CircularBarType.vertical}
            splitProgress={splitProgress}
          />
        )
      }
      scrollComponent2={
        xPercent !== undefined &&
        !hideHorizontalScrollProgress && (
          <ScrollTrack
            className={hide && "rcsp-circularbar__track-hidden"}
            percentOuter={xPercent}
            horizontalScrollColor={horizontalScrollColor}
            circularBarTrackStyle={{
              ...horizontalScrollTrackStyle,
              ...((yPercent === undefined || hideVerticalScrollProgress) && {
                opacity: 1,
                right: "8px",
              }),
            }}
            circularBarType={CircularBarType.horizontal}
            splitProgress={yPercent === undefined ? true : splitProgress}
          />
        )
      }
    />
  );
};
