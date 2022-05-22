export const positions = {
  top: "top",
  right: "right",
  bottom: "bottom",
  left: "left",
};

export const checkScrollBarPosition = (position) => {
  if (position in positions) {
    return position;
  }

  return positions.top;
};
