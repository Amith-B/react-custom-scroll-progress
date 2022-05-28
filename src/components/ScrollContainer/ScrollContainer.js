import React from "react";

export const ScrollContainer = React.forwardRef(
  (
    {
      children,
      style,
      hideNativeScrollbar = false,
      scrollComponent1,
      scrollComponent2,
    },
    ref
  ) => {
    return (
      <div
        className="rcsp-scrollbar__container"
        style={{
          width: "100%",
          height: "100%",
          ...style,
          position: "relative",
          overflow: "hidden",
        }}
      >
        {scrollComponent1}
        {scrollComponent2}
        <div
          className={`rcsp-scrollbar__content ${
            hideNativeScrollbar ? "rcsp-native-scrollbar__hidden" : ""
          }`}
          ref={ref}
          style={{
            width: "100%",
            height: "100%",
            overflow: "auto",
          }}
        >
          <div
            className="rcsp-scrollbar__content-wrapper"
            style={{ width: "fit-content" }}
          >
            {children}
          </div>
        </div>
      </div>
    );
  }
);
