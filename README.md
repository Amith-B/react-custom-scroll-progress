# react-custom-scroll-progress

# Usage
   
   ### Installation
   `npm i react-custom-scroll-progress`
   
   ### Style import
   `import 'react-custom-scroll-progress/dist/index.css'`

This assumes that you are using react project to consume this library.

# Storybook Demo

[Storybook Demo Link](https://react-custom-scroll-progress.vercel.app/ "Storybook Link")

# Types of progressbars

1. `<ProgressBar />`

   ### props

   * `hideNativeScrollbar`-> `boolean` to hide native scrollbar
   * `yScrollBarPosition` -> `string` to set scrollbar position for vertical scroll. Allowed values: `top` | `right` | `bottom` | `left`
   * `xScrollBarPosition` -> `string` to set scrollbar position for horizontal scroll. Allowed these values: `top` | `right` | `bottom` | `left`
   * `yScrollBarThumbStyle` -> style `object` to add custom styles to vertical scollbar thumb
   * `yScrollBarTrackStyle` -> style `object` to add custom styles to vertical scollbar track
   * `xScrollBarThumbStyle` -> style `object` to add custom styles to horizontal scollbar thumb
   * `xScrollBarTrackStyle` -> style `object` to add custom styles to horizontal scollbar track
   * `onScroll` -> emits the percentage of scroll for both vertical and horizontal

2. `<CircularProgressBar />`

   ### props

   * `hideNativeScrollbar` -> `boolean` to hide native scrollbar
   * `verticalScrollColor` -> color `string` to add custom styles to circular progressbar which shows a vertical scroll percent
   * `horizontalScrollColor` -> color `string` to add custom styles to circular progressbar which shows a horizontal scroll percent
   * `verticalScrollTrackStyle` -> style `object` to add custom styles to vertical scollbar track
   * `horizontalScrollTrackStyle` -> style `object` to add custom styles to horizontal scollbar track
   * `currentState` -> `string` to show collapsed or slit varient. Allowed values `collapse` | `split`
   * `hideVerticalScrollProgress` -> `boolean` to hide vertical scroll progress
   * `hideHorizontalScrollProgress` -> `boolean` to hide horizontal scroll progress
   * `autoSplit` -> `boolean` to auto split vertical and horizontal progressbar when user scrolls on page
   * `autoHide` -> `boolean` to auto hide the progress bar when there is no scroll interaction
   * `onScroll` -> emits the percentage of scroll for both vertical and horizontal
