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

export default ScrollTrack;
