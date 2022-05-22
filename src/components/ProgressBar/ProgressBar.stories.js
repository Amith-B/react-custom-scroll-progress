import { ProgressBar } from "./ProgressBar";
import { positions } from "./../../utils/propCheck";

export default {
  title: "ProgressBar",
  component: ProgressBar,
  argTypes: {
    hideNativeScrollbar: {
      control: { type: "boolean" },
    },
    yScrollBarPosition: {
      control: {
        type: "select",
        options: [...Object.values(positions)],
      },
    },
    xScrollBarPosition: {
      control: {
        type: "select",
        options: [...Object.values(positions)],
      },
    },
    style: { control: { type: "object" } },
    yScrollBarThumbStyle: { control: { type: "object" } },
    yScrollBarTrackStyle: { control: { type: "object" } },
    xScrollBarThumbStyle: { control: { type: "object" } },
    xScrollBarTrackStyle: { control: { type: "object" } },
    _exampleTextLineCount: { control: { type: "number", description: "test" } },
    _exampleText: { control: { type: "text", description: "test" } },
  },
};

export const Basic = (args) => {
  return (
    <ProgressBar {...args}>
      {Array.from(Array(args._exampleTextLineCount).keys()).map(() => (
        <div style={{ whiteSpace: "nowrap" }}>{args._exampleText}</div>
      ))}
    </ProgressBar>
  );
};

Basic.args = {
  style: { height: "calc(100vh - 50px)" },
  hideNativeScrollbar: true,
  yScrollBarPosition: positions.top,
  xScrollBarPosition: positions.left,
  yScrollBarThumbStyle: { backgroundColor: "red" },
  _exampleTextLineCount: 40,
  _exampleText:
    "Mollit Lorem cillum irure eiusmod aliquip ea officia. Exercitation ipsum officia laborum. Laboris enim quis incididunt labore esse ea voluptate",
};
