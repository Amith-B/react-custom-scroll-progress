import React from "react";

export const CircularBarType = {
  horizontal: "horizontal",
  vertical: "vertical",
};

function ScrollTrack({
  percentOuter = 0,
  percentInner = 0,
  verticalScrollColor,
  horizontalScrollColor,
  circularBarTrackStyle,
  circularBarType = CircularBarType.vertical,
  splitProgress = false,
  className,
}) {
  const isHorizontal = () => {
    return circularBarType === CircularBarType.horizontal;
  };
  const scrollColor = () => {
    return isHorizontal() ? horizontalScrollColor : verticalScrollColor;
  };

  return (
    <div
      className={`rcsp-circularbar__track ${className || ""} ${
        circularBarType === CircularBarType.horizontal
          ? "rcsp-circularbar__track-horizontal"
          : "rcsp-circularbar__track-vertical"
      } ${
        circularBarType === CircularBarType.horizontal && splitProgress
          ? "rcsp-circularbar__track-split"
          : ""
      }`}
      style={{
        backgroundColor: "black",
        borderRadius: "50%",
        ...circularBarTrackStyle,
        width: "50px",
        height: "50px",
      }}
    >
      <svg
        style={{
          "--percent-outer": percentOuter,
          "--percent-inner": !splitProgress && percentInner,
        }}
      >
        <circle
          cx="20"
          cy="20"
          r="22"
          style={{
            stroke: scrollColor() || "white",
          }}
        ></circle>
        <circle
          cx="20"
          cy="20"
          r="14"
          style={{
            stroke: horizontalScrollColor || "white",
          }}
        ></circle>
      </svg>
      {!splitProgress && (
        <div className="rcsp-circularbar__cross-arrow">
          <CrossArrowSvg color={scrollColor()} />
        </div>
      )}
      {splitProgress && (
        <div
          className="rcsp-circularbar__percent"
          style={{
            color: scrollColor() || "white",
          }}
        >
          <div className="rcsp-circularbar__percent-value">
            {Math.round(percentOuter || 0)}%
          </div>
          <div className="rcsp-circularbar__percent-orientation">
            {isHorizontal() ? (
              <TwoWayArrowSvg color={scrollColor()} />
            ) : (
              <TwoWayArrowSvg vertical color={scrollColor()} />
            )}
          </div>
        </div>
      )}
    </div>
  );
}

const TwoWayArrowSvg = ({ vertical, color }) => {
  return (
    <div
      style={{
        transform: vertical ? "rotate(90deg)" : "unset",
        display: "flex",
      }}
    >
      <svg id="doubleArray" x="0px" y="0px" viewBox="0 0 122.88 61.49">
        <g>
          <polygon
            className="rcsp-arrow"
            style={{
              fill: color || "white",
            }}
            points="122.88,30.75 90.9,0 90.9,19.79 31.98,19.79 31.98,0 0,30.75 31.98,61.49 31.98,41.7 90.9,41.7 90.9,61.49 122.88,30.75"
          />
        </g>
      </svg>
    </div>
  );
};

const CrossArrowSvg = ({ color }) => {
  return (
    <div
      style={{
        display: "flex",
      }}
    >
      <svg id="arrowCross" viewBox="0 0 122.88 122.88">
        <path
          style={{ fill: color || "white" }}
          d="M30.73,70.08h0V81.63A4.43,4.43,0,0,1,29,85.39a4.85,4.85,0,0,1-4.36.19,1.53,1.53,0,0,1-.52-.28C15.43,78.51,10.42,71.73,1.76,64.93l-.12-.1a4.32,4.32,0,0,1,0-6.78l.12-.1c8.66-6.8,13.67-13.59,22.33-20.37a1.75,1.75,0,0,1,.52-.29,4.82,4.82,0,0,1,4.35.2,4.41,4.41,0,0,1,1.77,3.76V52.8H52.88V30.73H41.25A4.43,4.43,0,0,1,37.49,29a4.85,4.85,0,0,1-.2-4.36,1.75,1.75,0,0,1,.29-.52C44.37,15.43,51.15,10.42,58,1.76l.1-.12a4.32,4.32,0,0,1,6.78,0l.1.12c6.8,8.66,13.58,13.67,20.37,22.33a1.53,1.53,0,0,1,.28.52A4.82,4.82,0,0,1,85.39,29a4.41,4.41,0,0,1-3.76,1.77H70V52.8H92.15V41.25a4.43,4.43,0,0,1,1.76-3.76,4.85,4.85,0,0,1,4.36-.2,1.88,1.88,0,0,1,.52.29c8.66,6.78,13.67,13.57,22.33,20.37l.12.1a4.32,4.32,0,0,1,0,6.78l-.12.1c-8.66,6.8-13.67,13.58-22.33,20.37a1.63,1.63,0,0,1-.52.28,4.85,4.85,0,0,1-4.36-.19,4.43,4.43,0,0,1-1.76-3.76V70.08H70V92.15H81.63a4.43,4.43,0,0,1,3.76,1.76,4.85,4.85,0,0,1,.19,4.36,1.63,1.63,0,0,1-.28.52c-6.79,8.66-13.57,13.67-20.37,22.33l-.1.12a4.32,4.32,0,0,1-6.78,0l-.1-.12c-6.8-8.66-13.58-13.67-20.37-22.33a1.88,1.88,0,0,1-.29-.52,4.85,4.85,0,0,1,.2-4.36,4.43,4.43,0,0,1,3.76-1.76H52.88V70.08Z"
        />
      </svg>
    </div>
  );
};

export default ScrollTrack;
