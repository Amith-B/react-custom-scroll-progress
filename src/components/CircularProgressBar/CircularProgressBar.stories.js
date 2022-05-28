import { CircularProgressBar } from "./CircularProgressBar";
import { ProgressBarCurrentState } from "../../utils/propCheck";

export default {
  title: "CircularProgressBar",
  component: CircularProgressBar,
  argTypes: {
    hideNativeScrollbar: {
      control: { type: "boolean" },
    },
    style: { control: { type: "object" } },
    currentState: {
      control: {
        type: "select",
        options: [...Object.values(ProgressBarCurrentState)],
      },
    },
    autoHide: { control: { type: "boolean" } },
    autoSplit: { control: { type: "boolean" } },
    hideVerticalScrollProgress: { control: { type: "boolean" } },
    hideHorizontalScrollProgress: { control: { type: "boolean" } },
    verticalScrollColor: { control: { type: "color" } },
    horizontalScrollColor: { control: { type: "color" } },
    verticalScrollTrackStyle: { control: { type: "object" } },
    horizontalScrollTrackStyle: { control: { type: "object" } },
    _exampleTextLineCount: { control: { type: "number", description: "test" } },
    _exampleText: { control: { type: "text", description: "test" } },
  },
};

export const Basic = (args) => {
  return (
    <CircularProgressBar {...args}>
      {Array.from(Array(args._exampleTextLineCount).keys()).map(() => (
        <div style={{ whiteSpace: "nowrap" }}>{args._exampleText}</div>
      ))}
    </CircularProgressBar>
  );
};

Basic.args = {
  style: { height: "calc(100vh - 50px)", border: "1px solid" },
  hideNativeScrollbar: true,
  currentState: ProgressBarCurrentState.collapse,
  autoSplit: true,
  verticalScrollColor: "white",
  horizontalScrollColor: "white",
  hideVerticalScrollProgress: false,
  hideHorizontalScrollProgress: false,
  autoHide: false,
  _exampleTextLineCount: 100,
  _exampleText:
    "Mollit Lorem cillum irure eiusmod aliquip ea officia. Exercitation ipsum officia laborum. Laboris enim quis incididunt labore esse ea voluptate.Mollit Lorem cillum irure eiusmod aliquip ea officia. Exercitation ipsum officia laborum. Laboris enim quis incididunt labore esse ea voluptate",
};

export const Customized = (args) => {
  return Basic(args);
};

Customized.args = {
  ...Basic.args,
  autoHide: true,
  verticalScrollColor: "white",
  horizontalScrollColor: "black",
  verticalScrollTrackStyle: {
    backgroundColor: "slategrey",
    boxShadow: "0 0 16px 4px slategrey",
  },
  horizontalScrollTrackStyle: {
    backgroundColor: "coral",
    boxShadow: "0 0 16px 4px coral",
  },
};
