:: BASE_DOC ::

## API
### ColorPicker Props

name | type | default | description | required
-- | -- | -- | -- | --
className | String | - | 类名 | N
style | Object | - | 样式，Typescript：`React.CSSProperties` | N
closeBtn | TNode | true | Typescript：`string \| boolean \| TNode`。[see more ts definition](https://github.com/Tencent/tdesign-react/blob/develop/src/common.ts) | N
colorModes | Array | ()=> ['monochrome', 'linear-gradient'] | Typescript：`Array<'monochrome' \| 'linear-gradient'>` | N
disabled | Boolean | - | \- | N
enableAlpha | Boolean | false | \- | N
format | String | RGB | options：RGB/RGBA/HSL/HSLA/HSB/HSV/HSVA/HEX/CMYK/CSS | N
inputProps | Object | - | Typescript：`InputProps`，[Input API Documents](./input?tab=api)。[see more ts definition](https://github.com/Tencent/tdesign-react/blob/develop/src/color-picker/type.ts) | N
multiple | Boolean | false | \- | N
popupProps | Object | - | Typescript：`PopupProps`，[Popup API Documents](./popup?tab=api)。[see more ts definition](https://github.com/Tencent/tdesign-react/blob/develop/src/color-picker/type.ts) | N
recentColors | Array | [] | used color recently。Typescript：`boolean \| Array<string>` | N
defaultRecentColors | Array | [] | used color recently。uncontrolled property。Typescript：`boolean \| Array<string>` | N
selectInputProps | Object | - | Typescript：`SelectInputProps`，[SelectInput API Documents](./select-input?tab=api)。[see more ts definition](https://github.com/Tencent/tdesign-react/blob/develop/src/color-picker/type.ts) | N
showPrimaryColorPreview | Boolean | true | \- | N
swatchColors | Array | - | swatch colors。Typescript：`Array<string>` | N
value | String | - | color value | N
defaultValue | String | - | color value。uncontrolled property | N
onChange | Function |  | Typescript：`(value: string, context: { color: ColorObject; trigger: ColorPickerChangeTrigger }) => void`<br/>[see more ts definition](https://github.com/Tencent/tdesign-react/blob/develop/src/color-picker/type.ts)。<br/>`type ColorPickerChangeTrigger = 'palette-saturation-brightness' \| 'palette-saturation' \| 'palette-brightness' \| 'palette-hue-bar' \| 'palette-alpha-bar' \| 'input' \| 'preset' \| 'recent' `<br/> | N
onPaletteBarChange | Function |  | Typescript：`(context: { color: ColorObject }) => void`<br/>[see more ts definition](https://github.com/Tencent/tdesign-react/blob/develop/src/color-picker/type.ts)。<br/>`interface ColorObject { alpha: number; css: string; hex: string; hex8: string; hsl: string; hsla: string; hsv: string; hsva: string; rgb: string; rgba: string; saturation: number; value: number; isGradient: boolean; linearGradient?: string; }`<br/> | N
onRecentColorsChange | Function |  | Typescript：`(value: Array<string>) => void`<br/> | N