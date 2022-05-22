import React from "react";

export const ScrollContainer = React.forwardRef(
  (
    {
      children,
      style,
      hideNativeScrollbar = false,
      yScrollComponent,
      xScrollComponent,
    },
    ref
  ) => {
    return (
      <div
        className="rcsp-scrollbar__container"
        style={{
          width: "100%",
          height: "100%",
          position: "relative",
          ...style,
        }}
      >
        {yScrollComponent}
        {xScrollComponent}
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
          {children}
        </div>
      </div>
    );
  }
);
