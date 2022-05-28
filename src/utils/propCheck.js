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

export const ProgressBarCurrentState = {
  split: "split",
  collapse: "collapse",
};

export const checkProgressBarCurrentState = (state) => {
  if (state in ProgressBarCurrentState) {
    return state;
  }

  return ProgressBarCurrentState.collapse;
};
