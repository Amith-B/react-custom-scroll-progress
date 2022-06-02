# react-custom-scroll-progress

# Usage

### Installation

`npm i react-custom-scroll-progress`

### Import styles in App.js

`import 'react-custom-scroll-progress/dist/index.css'`

This assumes that you are using react project to consume this library.

# Storybook Demo

[Storybook Demo Link](https://react-custom-scroll-progress.vercel.app/ "Storybook Link")

# Stackblitz Demo

[Stackblitz Demo Link](https://stackblitz.com/edit/react-ts-7gwrbm?file=App.tsx "Stackblitz Link")

# Types of progressbars

1. `<ProgressBar />`

   | Props                  | Description                                                     |                  PropType                   |
   | ---------------------- | --------------------------------------------------------------- | :-----------------------------------------: |
   | `hideNativeScrollbar`  | to hide native scrollbar                                        |                  `boolean`                  |
   | `yScrollBarPosition`   | to set scrollbar position for vertical scroll.                  | `'top'` , `'right'` , `'bottom'` , `'left'` |
   | `xScrollBarPosition`   | to set scrollbar position for horizontal scroll.                | `'top'` , `'right'` , `'bottom'` , `'left'` |
   | `yScrollBarThumbStyle` | style to add custom styles to vertical scollbar thumb           |                  `object`                   |
   | `yScrollBarTrackStyle` | style to add custom styles to vertical scollbar track           |                  `object`                   |
   | `xScrollBarThumbStyle` | style to add custom styles to horizontal scollbar thumb         |                  `object`                   |
   | `xScrollBarTrackStyle` | style to add custom styles to horizontal scollbar track         |                  `object`                   |
   | `onScroll`             | emits the percentage of scroll for both vertical and horizontal |                 `callback`                  |

2. `<CircularProgressBar />`

   | Props                          | Description                                                                                       |         PropType         |
   | ------------------------------ | ------------------------------------------------------------------------------------------------- | :----------------------: |
   | `hideNativeScrollbar`          | to hide native scrollbar                                                                          |        `boolean`         |
   | `verticalScrollColor`          | color string to add custom styles to circular progressbar which shows a vertical scroll percent   |         `string`         |
   | `horizontalScrollColor`        | color string to add custom styles to circular progressbar which shows a horizontal scroll percent |         `string`         |
   | `verticalScrollTrackStyle`     | style to add custom styles to vertical scollbar track                                             |         `object`         |
   | `horizontalScrollTrackStyle`   | style to add custom styles to horizontal scollbar track                                           |         `object`         |
   | `currentState`                 | to show collapsed or slit varient.                                                                | `'split'` , `'collapse'` |
   | `hideVerticalScrollProgress`   | to hide vertical scroll progress                                                                  |        `boolean`         |
   | `hideHorizontalScrollProgress` | to hide horizontal scroll progress                                                                |        `boolean`         |
   | `autoSplit`                    | to auto split vertical and horizontal progressbar when user scrolls on page                       |        `boolean`         |
   | `autoHide`                     | to auto hide the progress bar when there is no scroll interaction                                 |        `boolean`         |
   | `onScroll`                     | emits the percentage of scroll for both vertical and horizontal                                   |        `callback`        |

## Note: The parent html element of progressbar component or the progressbar component itself should have some width and height specified to show the progress bar.
