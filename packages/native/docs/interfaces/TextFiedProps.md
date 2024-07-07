[**@lynxts/native**](../README.md) • **Docs**

***

[@lynxts/native](../README.md) / TextFiedProps

# Interface: TextFiedProps\<T\>

The [TextField](../functions/TextField.md) component props which extend from
TextInputProps.

## Extends

- `Omit`\<`TextInputProps`, `"value"`\>

## Type Parameters

• **T** *extends* `Struct`

struct type of the form values

## Properties

### accessibilityActions?

> `optional` **accessibilityActions**: readonly `Readonly`\<`object`\>[]

Provides an array of custom actions available for accessibility.

#### Inherited from

`Omit.accessibilityActions`

#### Defined in

node\_modules/react-native/Libraries/Components/View/ViewAccessibility.d.ts:27

***

### accessibilityElementsHidden?

> `optional` **accessibilityElementsHidden**: `boolean`

A Boolean value indicating whether the accessibility elements contained within this accessibility element
are hidden to the screen reader.

#### Platform

ios

#### Inherited from

`Omit.accessibilityElementsHidden`

#### Defined in

node\_modules/react-native/Libraries/Components/View/ViewAccessibility.d.ts:284

***

### accessibilityHint?

> `optional` **accessibilityHint**: `string`

An accessibility hint helps users understand what will happen when they perform an action on the accessibility element when that result is not obvious from the accessibility label.

#### Inherited from

`Omit.accessibilityHint`

#### Defined in

node\_modules/react-native/Libraries/Components/View/ViewAccessibility.d.ts:64

***

### accessibilityIgnoresInvertColors?

> `optional` **accessibilityIgnoresInvertColors**: `boolean`

https://reactnative.dev/docs/accessibility#accessibilityignoresinvertcolorsios

#### Platform

ios

#### Inherited from

`Omit.accessibilityIgnoresInvertColors`

#### Defined in

node\_modules/react-native/Libraries/Components/View/ViewAccessibility.d.ts:314

***

### accessibilityLabel?

> `optional` **accessibilityLabel**: `string`

Overrides the text that's read by the screen reader when the user interacts with the element. By default, the
label is constructed by traversing all the children and accumulating all the Text nodes separated by space.

#### Inherited from

`Omit.accessibilityLabel`

#### Defined in

node\_modules/react-native/Libraries/Components/View/ViewAccessibility.d.ts:33

***

### accessibilityLabelledBy?

> `optional` **accessibilityLabelledBy**: `string` \| `string`[]

Identifies the element that labels the element it is applied to. When the assistive technology focuses on the component with this props,
the text is read aloud. The value should should match the nativeID of the related element.

#### Platform

android

#### Inherited from

`Omit.accessibilityLabelledBy`

#### Defined in

node\_modules/react-native/Libraries/Components/View/ViewAccessibility.d.ts:227

***

### accessibilityLanguage?

> `optional` **accessibilityLanguage**: `string`

By using the accessibilityLanguage property, the screen reader will understand which language to use while reading the element's label, value and hint. The provided string value must follow the BCP 47 specification (https://www.rfc-editor.org/info/bcp47).
https://reactnative.dev/docs/accessibility#accessibilitylanguage-ios

#### Platform

ios

#### Inherited from

`Omit.accessibilityLanguage`

#### Defined in

node\_modules/react-native/Libraries/Components/View/ViewAccessibility.d.ts:321

***

### accessibilityLiveRegion?

> `optional` **accessibilityLiveRegion**: `"none"` \| `"polite"` \| `"assertive"`

Indicates to accessibility services whether the user should be notified
when this view changes. Works for Android API >= 19 only.

#### Platform

android

See https://reactnative.dev/docs/view#accessibilityliveregion

#### Inherited from

`Omit.accessibilityLiveRegion`

#### Defined in

node\_modules/react-native/Libraries/Components/View/ViewAccessibility.d.ts:245

***

### accessibilityRole?

> `optional` **accessibilityRole**: `AccessibilityRole`

Accessibility Role tells a person using either VoiceOver on iOS or TalkBack on Android the type of element that is focused on.

#### Inherited from

`Omit.accessibilityRole`

#### Defined in

node\_modules/react-native/Libraries/Components/View/ViewAccessibility.d.ts:44

***

### accessibilityState?

> `optional` **accessibilityState**: `AccessibilityState`

Accessibility State tells a person using either VoiceOver on iOS or TalkBack on Android the state of the element currently focused on.

#### Inherited from

`Omit.accessibilityState`

#### Defined in

node\_modules/react-native/Libraries/Components/View/ViewAccessibility.d.ts:48

***

### accessibilityValue?

> `optional` **accessibilityValue**: `AccessibilityValue`

Represents the current value of a component. It can be a textual description of a component's value, or for range-based components, such as sliders and progress bars,
it contains range information (minimum, current, and maximum).

#### Inherited from

`Omit.accessibilityValue`

#### Defined in

node\_modules/react-native/Libraries/Components/View/ViewAccessibility.d.ts:69

***

### accessibilityViewIsModal?

> `optional` **accessibilityViewIsModal**: `boolean`

A Boolean value indicating whether VoiceOver should ignore the elements within views that are siblings of the receiver.

#### Platform

ios

#### Inherited from

`Omit.accessibilityViewIsModal`

#### Defined in

node\_modules/react-native/Libraries/Components/View/ViewAccessibility.d.ts:290

***

### accessible?

> `optional` **accessible**: `boolean`

When true, indicates that the view is an accessibility element.
By default, all the touchable elements are accessible.

#### Inherited from

`Omit.accessible`

#### Defined in

node\_modules/react-native/Libraries/Components/View/ViewAccessibility.d.ts:22

***

### allowFontScaling?

> `optional` **allowFontScaling**: `boolean`

Specifies whether fonts should scale to respect Text Size accessibility settings.
The default is `true`.

#### Inherited from

`Omit.allowFontScaling`

#### Defined in

node\_modules/react-native/Libraries/Components/TextInput/TextInput.d.ts:509

***

### aria-busy?

> `optional` **aria-busy**: `boolean`

alias for accessibilityState

see https://reactnative.dev/docs/accessibility#accessibilitystate

#### Inherited from

`Omit.aria-busy`

#### Defined in

node\_modules/react-native/Libraries/Components/View/ViewAccessibility.d.ts:55

***

### aria-checked?

> `optional` **aria-checked**: `boolean` \| `"mixed"`

#### Inherited from

`Omit.aria-checked`

#### Defined in

node\_modules/react-native/Libraries/Components/View/ViewAccessibility.d.ts:56

***

### aria-disabled?

> `optional` **aria-disabled**: `boolean`

#### Inherited from

`Omit.aria-disabled`

#### Defined in

node\_modules/react-native/Libraries/Components/View/ViewAccessibility.d.ts:57

***

### aria-expanded?

> `optional` **aria-expanded**: `boolean`

#### Inherited from

`Omit.aria-expanded`

#### Defined in

node\_modules/react-native/Libraries/Components/View/ViewAccessibility.d.ts:58

***

### aria-hidden?

> `optional` **aria-hidden**: `boolean`

A value indicating whether the accessibility elements contained within
this accessibility element are hidden.

#### Inherited from

`Omit.aria-hidden`

#### Defined in

node\_modules/react-native/Libraries/Components/View/ViewAccessibility.d.ts:93

***

### aria-label?

> `optional` **aria-label**: `string`

Alias for accessibilityLabel  https://reactnative.dev/docs/view#accessibilitylabel
https://github.com/facebook/react-native/issues/34424

#### Inherited from

`Omit.aria-label`

#### Defined in

node\_modules/react-native/Libraries/Components/View/ViewAccessibility.d.ts:39

***

### aria-labelledby?

> `optional` **aria-labelledby**: `string`

Identifies the element that labels the element it is applied to. When the assistive technology focuses on the component with this props,
the text is read aloud. The value should should match the nativeID of the related element.

#### Platform

android

#### Inherited from

`Omit.aria-labelledby`

#### Defined in

node\_modules/react-native/Libraries/Components/View/ViewAccessibility.d.ts:235

***

### aria-live?

> `optional` **aria-live**: `"polite"` \| `"assertive"` \| `"off"`

Indicates to accessibility services whether the user should be notified
when this view changes. Works for Android API >= 19 only.

#### Platform

android

See https://reactnative.dev/docs/view#accessibilityliveregion

#### Inherited from

`Omit.aria-live`

#### Defined in

node\_modules/react-native/Libraries/Components/View/ViewAccessibility.d.ts:255

***

### aria-modal?

> `optional` **aria-modal**: `boolean`

#### Inherited from

`Omit.aria-modal`

#### Defined in

node\_modules/react-native/Libraries/Components/View/ViewAccessibility.d.ts:95

***

### aria-selected?

> `optional` **aria-selected**: `boolean`

#### Inherited from

`Omit.aria-selected`

#### Defined in

node\_modules/react-native/Libraries/Components/View/ViewAccessibility.d.ts:59

***

### aria-valuemax?

> `optional` **aria-valuemax**: `number`

#### Inherited from

`Omit.aria-valuemax`

#### Defined in

node\_modules/react-native/Libraries/Components/View/ViewAccessibility.d.ts:71

***

### aria-valuemin?

> `optional` **aria-valuemin**: `number`

#### Inherited from

`Omit.aria-valuemin`

#### Defined in

node\_modules/react-native/Libraries/Components/View/ViewAccessibility.d.ts:72

***

### aria-valuenow?

> `optional` **aria-valuenow**: `number`

#### Inherited from

`Omit.aria-valuenow`

#### Defined in

node\_modules/react-native/Libraries/Components/View/ViewAccessibility.d.ts:73

***

### aria-valuetext?

> `optional` **aria-valuetext**: `string`

#### Inherited from

`Omit.aria-valuetext`

#### Defined in

node\_modules/react-native/Libraries/Components/View/ViewAccessibility.d.ts:74

***

### autoCapitalize?

> `optional` **autoCapitalize**: `"none"` \| `"sentences"` \| `"words"` \| `"characters"`

Can tell TextInput to automatically capitalize certain characters.
     characters: all characters,
     words: first letter of each word
     sentences: first letter of each sentence (default)
     none: don't auto capitalize anything

https://reactnative.dev/docs/textinput#autocapitalize

#### Inherited from

`Omit.autoCapitalize`

#### Defined in

node\_modules/react-native/Libraries/Components/TextInput/TextInput.d.ts:520

***

### autoComplete?

> `optional` **autoComplete**: `"off"` \| `"name"` \| `"additional-name"` \| `"address-line1"` \| `"address-line2"` \| `"birthdate-day"` \| `"birthdate-full"` \| `"birthdate-month"` \| `"birthdate-year"` \| `"cc-csc"` \| `"cc-exp"` \| `"cc-exp-day"` \| `"cc-exp-month"` \| `"cc-exp-year"` \| `"cc-number"` \| `"cc-name"` \| `"cc-given-name"` \| `"cc-middle-name"` \| `"cc-family-name"` \| `"cc-type"` \| `"country"` \| `"current-password"` \| `"email"` \| `"family-name"` \| `"gender"` \| `"given-name"` \| `"honorific-prefix"` \| `"honorific-suffix"` \| `"name-family"` \| `"name-given"` \| `"name-middle"` \| `"name-middle-initial"` \| `"name-prefix"` \| `"name-suffix"` \| `"new-password"` \| `"nickname"` \| `"one-time-code"` \| `"organization"` \| `"organization-title"` \| `"password"` \| `"password-new"` \| `"postal-address"` \| `"postal-address-country"` \| `"postal-address-extended"` \| `"postal-address-extended-postal-code"` \| `"postal-address-locality"` \| `"postal-address-region"` \| `"postal-code"` \| `"street-address"` \| `"sms-otp"` \| `"tel"` \| `"tel-country-code"` \| `"tel-national"` \| `"tel-device"` \| `"url"` \| `"username"` \| `"username-new"`

Specifies autocomplete hints for the system, so it can provide autofill.
On Android, the system will always attempt to offer autofill by using heuristics to identify the type of content.
To disable autocomplete, set autoComplete to off.

The following values work across platforms:

- `additional-name`
- `address-line1`
- `address-line2`
- `cc-number`
- `country`
- `current-password`
- `email`
- `family-name`
- `given-name`
- `honorific-prefix`
- `honorific-suffix`
- `name`
- `new-password`
- `off`
- `one-time-code`
- `postal-code`
- `street-address`
- `tel`
- `username`

The following values work on iOS only:

- `nickname`
- `organization`
- `organization-title`
- `url`

The following values work on Android only:

- `birthdate-day`
- `birthdate-full`
- `birthdate-month`
- `birthdate-year`
- `cc-csc`
- `cc-exp`
- `cc-exp-day`
- `cc-exp-month`
- `cc-exp-year`
- `gender`
- `name-family`
- `name-given`
- `name-middle`
- `name-middle-initial`
- `name-prefix`
- `name-suffix`
- `password`
- `password-new`
- `postal-address`
- `postal-address-country`
- `postal-address-extended`
- `postal-address-extended-postal-code`
- `postal-address-locality`
- `postal-address-region`
- `sms-otp`
- `tel-country-code`
- `tel-national`
- `tel-device`
- `username-new`

#### Inherited from

`Omit.autoComplete`

#### Defined in

node\_modules/react-native/Libraries/Components/TextInput/TextInput.d.ts:588

***

### autoCorrect?

> `optional` **autoCorrect**: `boolean`

If false, disables auto-correct.
The default value is true.

#### Inherited from

`Omit.autoCorrect`

#### Defined in

node\_modules/react-native/Libraries/Components/TextInput/TextInput.d.ts:652

***

### autoFocus?

> `optional` **autoFocus**: `boolean`

If true, focuses the input on componentDidMount.
The default value is false.

#### Inherited from

`Omit.autoFocus`

#### Defined in

node\_modules/react-native/Libraries/Components/TextInput/TextInput.d.ts:658

***

### blurOnSubmit?

> `optional` **blurOnSubmit**: `boolean`

If true, the text field will blur when submitted.
The default value is true.

#### Inherited from

`Omit.blurOnSubmit`

#### Defined in

node\_modules/react-native/Libraries/Components/TextInput/TextInput.d.ts:664

***

### caretHidden?

> `optional` **caretHidden**: `boolean`

If true, caret is hidden. The default value is false.

#### Inherited from

`Omit.caretHidden`

#### Defined in

node\_modules/react-native/Libraries/Components/TextInput/TextInput.d.ts:669

***

### children?

> `optional` **children**: `ReactNode`

#### Inherited from

`Omit.children`

#### Defined in

node\_modules/react-native/Libraries/Components/View/ViewPropTypes.d.ts:171

***

### clearButtonMode?

> `optional` **clearButtonMode**: `"never"` \| `"while-editing"` \| `"unless-editing"` \| `"always"`

enum('never', 'while-editing', 'unless-editing', 'always')
When the clear button should appear on the right side of the text view

#### Inherited from

`Omit.clearButtonMode`

#### Defined in

node\_modules/react-native/Libraries/Components/TextInput/TextInput.d.ts:141

***

### clearTextOnFocus?

> `optional` **clearTextOnFocus**: `boolean`

If true, clears the text field automatically when editing begins

#### Inherited from

`Omit.clearTextOnFocus`

#### Defined in

node\_modules/react-native/Libraries/Components/TextInput/TextInput.d.ts:151

***

### collapsable?

> `optional` **collapsable**: `boolean`

Views that are only used to layout their children or otherwise don't draw anything
may be automatically removed from the native hierarchy as an optimization.
Set this property to false to disable this optimization and ensure that this View exists in the native view hierarchy.

#### Inherited from

`Omit.collapsable`

#### Defined in

node\_modules/react-native/Libraries/Components/View/ViewPropTypes.d.ts:133

***

### contextMenuHidden?

> `optional` **contextMenuHidden**: `boolean`

If true, context menu is hidden. The default value is false.

#### Inherited from

`Omit.contextMenuHidden`

#### Defined in

node\_modules/react-native/Libraries/Components/TextInput/TextInput.d.ts:674

***

### cursorColor?

> `optional` **cursorColor**: `null` \| `ColorValue`

When provided it will set the color of the cursor (or "caret") in the component.
Unlike the behavior of `selectionColor` the cursor color will be set independently
from the color of the text selection box.

#### Platform

android

#### Inherited from

`Omit.cursorColor`

#### Defined in

node\_modules/react-native/Libraries/Components/TextInput/TextInput.d.ts:337

***

### dataDetectorTypes?

> `optional` **dataDetectorTypes**: `DataDetectorTypes` \| `DataDetectorTypes`[]

Determines the types of data converted to clickable URLs in the text input.
Only valid if `multiline={true}` and `editable={false}`.
By default no data types are detected.

You can provide one type or an array of many types.

Possible values for `dataDetectorTypes` are:

- `'phoneNumber'`
- `'link'`
- `'address'`
- `'calendarEvent'`
- `'none'`
- `'all'`

#### Inherited from

`Omit.dataDetectorTypes`

#### Defined in

node\_modules/react-native/Libraries/Components/TextInput/TextInput.d.ts:169

***

### defaultValue?

> `optional` **defaultValue**: `string`

Provides an initial value that will change when the user starts typing.
Useful for simple use-cases where you don't want to deal with listening to events
and updating the value prop to keep the controlled state in sync.

#### Inherited from

`Omit.defaultValue`

#### Defined in

node\_modules/react-native/Libraries/Components/TextInput/TextInput.d.ts:681

***

### disableFullscreenUI?

> `optional` **disableFullscreenUI**: `boolean`

When false, if there is a small amount of space available around a text input (e.g. landscape orientation on a phone),
  the OS may choose to have the user edit the text inside of a full screen text input mode.
When true, this feature is disabled and users will always edit the text directly inside of the text input.
Defaults to false.

#### Inherited from

`Omit.disableFullscreenUI`

#### Defined in

node\_modules/react-native/Libraries/Components/TextInput/TextInput.d.ts:376

***

### editable?

> `optional` **editable**: `boolean`

If false, text is not editable. The default value is true.

#### Inherited from

`Omit.editable`

#### Defined in

node\_modules/react-native/Libraries/Components/TextInput/TextInput.d.ts:686

***

### enablesReturnKeyAutomatically?

> `optional` **enablesReturnKeyAutomatically**: `boolean`

If true, the keyboard disables the return key when there is no text and automatically enables it when there is text.
The default value is false.

#### Inherited from

`Omit.enablesReturnKeyAutomatically`

#### Defined in

node\_modules/react-native/Libraries/Components/TextInput/TextInput.d.ts:175

***

### enterKeyHint?

> `optional` **enterKeyHint**: `EnterKeyHintTypeOptions`

Determines what text should be shown to the return key on virtual keyboards.
Has precedence over the returnKeyType prop.

#### Inherited from

`Omit.enterKeyHint`

#### Defined in

node\_modules/react-native/Libraries/Components/TextInput/TextInput.d.ts:848

***

### errorStyle?

> `optional` **errorStyle**: `StyleProp`\<`TextStyle`\>

The styles of the error `<Text>` component.

#### Defined in

[packages/native/src/lib/fields/TextField.component.tsx:29](https://github.com/JoseLion/lynxts/blob/main/packages/native/src/lib/fields/TextField.component.tsx#L29)

***

### focusable?

> `optional` **focusable**: `boolean`

Whether this `View` should be focusable with a non-touch input device, eg. receive focus with a hardware keyboard.

#### Inherited from

`Omit.focusable`

#### Defined in

node\_modules/react-native/Libraries/Components/View/ViewPropTypes.d.ts:147

***

### hasTVPreferredFocus?

> `optional` **hasTVPreferredFocus**: `boolean`

*(Apple TV only)* May be set to true to force the Apple TV focus engine to move focus to this view.

#### Platform

ios

#### Inherited from

`Omit.hasTVPreferredFocus`

#### Defined in

node\_modules/react-native/Libraries/Components/View/ViewPropTypes.d.ts:75

***

### hitSlop?

> `optional` **hitSlop**: `null` \| `number` \| `Insets`

This defines how far a touch event can start away from the view.
Typical interface guidelines recommend touch targets that are at least
30 - 40 points/density-independent pixels. If a Touchable view has
a height of 20 the touchable height can be extended to 40 with
hitSlop={{top: 10, bottom: 10, left: 0, right: 0}}
NOTE The touch area never extends past the parent view bounds and
the Z-index of sibling views always takes precedence if a touch
hits two overlapping views.

#### Inherited from

`Omit.hitSlop`

#### Defined in

node\_modules/react-native/Libraries/Components/View/ViewPropTypes.d.ts:182

***

### id?

> `optional` **id**: `string`

Used to reference react managed views from native code.

#### Inherited from

`Omit.id`

#### Defined in

node\_modules/react-native/Libraries/Components/View/ViewPropTypes.d.ts:187

***

### importantForAccessibility?

> `optional` **importantForAccessibility**: `"auto"` \| `"yes"` \| `"no"` \| `"no-hide-descendants"`

[Android] Controlling if a view fires accessibility events and if it is reported to accessibility services.

#### Inherited from

`Omit.importantForAccessibility`

#### Defined in

node\_modules/react-native/Libraries/Components/View/ViewAccessibility.d.ts:85

***

### importantForAutofill?

> `optional` **importantForAutofill**: `"auto"` \| `"yes"` \| `"no"` \| `"noExcludeDescendants"` \| `"yesExcludeDescendants"`

Determines whether the individual fields in your app should be included in a
view structure for autofill purposes on Android API Level 26+. Defaults to auto.
To disable auto complete, use `off`.

*Android Only*

The following values work on Android only:

- `auto` - let Android decide
- `no` - not important for autofill
- `noExcludeDescendants` - this view and its children aren't important for autofill
- `yes` - is important for autofill
- `yesExcludeDescendants` - this view is important for autofill but its children aren't

#### Inherited from

`Omit.importantForAutofill`

#### Defined in

node\_modules/react-native/Libraries/Components/TextInput/TextInput.d.ts:362

***

### inlineImageLeft?

> `optional` **inlineImageLeft**: `string`

If defined, the provided image resource will be rendered on the left.

#### Inherited from

`Omit.inlineImageLeft`

#### Defined in

node\_modules/react-native/Libraries/Components/TextInput/TextInput.d.ts:381

***

### inlineImagePadding?

> `optional` **inlineImagePadding**: `number`

Padding between the inline image, if any, and the text input itself.

#### Inherited from

`Omit.inlineImagePadding`

#### Defined in

node\_modules/react-native/Libraries/Components/TextInput/TextInput.d.ts:386

***

### inputAccessoryViewID?

> `optional` **inputAccessoryViewID**: `string`

Used to connect to an InputAccessoryView. Not part of react-natives documentation, but present in examples and
code.
See https://reactnative.dev/docs/inputaccessoryview for more information.

#### Inherited from

`Omit.inputAccessoryViewID`

#### Defined in

node\_modules/react-native/Libraries/Components/TextInput/TextInput.d.ts:892

***

### inputMode?

> `optional` **inputMode**: `InputModeOptions`

Works like the inputmode attribute in HTML, it determines which keyboard to open, e.g. numeric and has precedence over keyboardType.

#### Inherited from

`Omit.inputMode`

#### Defined in

node\_modules/react-native/Libraries/Components/TextInput/TextInput.d.ts:701

***

### isTVSelectable?

> `optional` **isTVSelectable**: `boolean`

*(Apple TV only)* When set to true, this view will be focusable
and navigable using the Apple TV remote.

#### Platform

ios

#### Inherited from

`Omit.isTVSelectable`

#### Defined in

node\_modules/react-native/Libraries/Components/View/ViewPropTypes.d.ts:68

***

### keyboardAppearance?

> `optional` **keyboardAppearance**: `"light"` \| `"default"` \| `"dark"`

Determines the color of the keyboard.

#### Inherited from

`Omit.keyboardAppearance`

#### Defined in

node\_modules/react-native/Libraries/Components/TextInput/TextInput.d.ts:180

***

### keyboardType?

> `optional` **keyboardType**: `KeyboardTypeOptions`

enum("default", 'numeric', 'email-address', "ascii-capable", 'numbers-and-punctuation', 'url', 'number-pad', 'phone-pad', 'name-phone-pad',
'decimal-pad', 'twitter', 'web-search', 'visible-password')
Determines which keyboard to open, e.g.numeric.
The following values work across platforms: - default - numeric - email-address - phone-pad
The following values work on iOS: - ascii-capable - numbers-and-punctuation - url - number-pad - name-phone-pad - decimal-pad - twitter - web-search
The following values work on Android: - visible-password

#### Inherited from

`Omit.keyboardType`

#### Defined in

node\_modules/react-native/Libraries/Components/TextInput/TextInput.d.ts:696

***

### label?

> `optional` **label**: `string`

The text to use as label on top of the field. The component does not
render the `<Text>` component when this prop is omited, `undefined`, or an
empty string.

#### Defined in

[packages/native/src/lib/fields/TextField.component.tsx:35](https://github.com/JoseLion/lynxts/blob/main/packages/native/src/lib/fields/TextField.component.tsx#L35)

***

### labelStyle?

> `optional` **labelStyle**: `StyleProp`\<`TextStyle`\>

The styles of the label `<Text>` component.

#### Defined in

[packages/native/src/lib/fields/TextField.component.tsx:39](https://github.com/JoseLion/lynxts/blob/main/packages/native/src/lib/fields/TextField.component.tsx#L39)

***

### lineBreakStrategyIOS?

> `optional` **lineBreakStrategyIOS**: `"none"` \| `"standard"` \| `"hangul-word"` \| `"push-out"`

Set line break strategy on iOS.

#### Inherited from

`Omit.lineBreakStrategyIOS`

#### Defined in

node\_modules/react-native/Libraries/Components/TextInput/TextInput.d.ts:310

***

### maxFontSizeMultiplier?

> `optional` **maxFontSizeMultiplier**: `null` \| `number`

Specifies largest possible scale a font can reach when allowFontScaling is enabled. Possible values:
- null/undefined (default): inherit from the parent node or the global default (0)
- 0: no max, ignore parent/global default
- >= 1: sets the maxFontSizeMultiplier of this node to this value

#### Inherited from

`Omit.maxFontSizeMultiplier`

#### Defined in

node\_modules/react-native/Libraries/Components/TextInput/TextInput.d.ts:909

***

### maxLength?

> `optional` **maxLength**: `number`

Limits the maximum number of characters that can be entered.
Use this instead of implementing the logic in JS to avoid flicker.

#### Inherited from

`Omit.maxLength`

#### Defined in

node\_modules/react-native/Libraries/Components/TextInput/TextInput.d.ts:707

***

### multiline?

> `optional` **multiline**: `boolean`

If true, the text input can be multiple lines. The default value is false.

#### Inherited from

`Omit.multiline`

#### Defined in

node\_modules/react-native/Libraries/Components/TextInput/TextInput.d.ts:712

***

### name

> **name**: `GetPath`\<`T`, `string`, `T`\>

The name of the field as a Path|Path\<T, string\>.

#### Defined in

[packages/native/src/lib/fields/TextField.component.tsx:43](https://github.com/JoseLion/lynxts/blob/main/packages/native/src/lib/fields/TextField.component.tsx#L43)

***

### nativeID?

> `optional` **nativeID**: `string`

Used to reference react managed views from native code.

#### Inherited from

`Omit.nativeID`

#### Defined in

node\_modules/react-native/Libraries/Components/View/ViewPropTypes.d.ts:255

***

### needsOffscreenAlphaCompositing?

> `optional` **needsOffscreenAlphaCompositing**: `boolean`

Whether this view needs to rendered offscreen and composited with an alpha in order to preserve 100% correct colors and blending behavior.
The default (false) falls back to drawing the component and its children
with an alpha applied to the paint used to draw each element instead of rendering the full component offscreen and compositing it back with an alpha value.
This default may be noticeable and undesired in the case where the View you are setting an opacity on
has multiple overlapping elements (e.g. multiple overlapping Views, or text and a background).

Rendering offscreen to preserve correct alpha behavior is extremely expensive
and hard to debug for non-native developers, which is why it is not turned on by default.
If you do need to enable this property for an animation,
consider combining it with renderToHardwareTextureAndroid if the view contents are static (i.e. it doesn't need to be redrawn each frame).
If that property is enabled, this View will be rendered off-screen once,
saved in a hardware texture, and then composited onto the screen with an alpha each frame without having to switch rendering targets on the GPU.

#### Inherited from

`Omit.needsOffscreenAlphaCompositing`

#### Defined in

node\_modules/react-native/Libraries/Components/View/ViewPropTypes.d.ts:203

***

### numberOfLines?

> `optional` **numberOfLines**: `number`

Sets the number of lines for a TextInput.
Use it with multiline set to true to be able to fill the lines.

#### Inherited from

`Omit.numberOfLines`

#### Defined in

node\_modules/react-native/Libraries/Components/TextInput/TextInput.d.ts:392

***

### onAccessibilityAction()?

> `optional` **onAccessibilityAction**: (`event`) => `void`

When `accessible` is true, the system will try to invoke this function when the user performs an accessibility custom action.

#### Parameters

• **event**: `AccessibilityActionEvent`

#### Returns

`void`

#### Inherited from

`Omit.onAccessibilityAction`

#### Defined in

node\_modules/react-native/Libraries/Components/View/ViewAccessibility.d.ts:78

***

### onAccessibilityEscape()?

> `optional` **onAccessibilityEscape**: () => `void`

When accessible is true, the system will invoke this function when the user performs the escape gesture (scrub with two fingers).

#### Returns

`void`

#### Platform

ios

#### Inherited from

`Omit.onAccessibilityEscape`

#### Defined in

node\_modules/react-native/Libraries/Components/View/ViewAccessibility.d.ts:296

***

### onAccessibilityTap()?

> `optional` **onAccessibilityTap**: () => `void`

When `accessible` is true, the system will try to invoke this function when the user performs accessibility tap gesture.

#### Returns

`void`

#### Platform

ios

#### Inherited from

`Omit.onAccessibilityTap`

#### Defined in

node\_modules/react-native/Libraries/Components/View/ViewAccessibility.d.ts:302

***

### onBlur()?

> `optional` **onBlur**: (`e`) => `void`

Callback that is called when the text input is blurred

#### Parameters

• **e**: `NativeSyntheticEvent`\<`TextInputFocusEventData`\>

#### Returns

`void`

#### Inherited from

`Omit.onBlur`

#### Defined in

node\_modules/react-native/Libraries/Components/TextInput/TextInput.d.ts:717

***

### onChange()?

> `optional` **onChange**: (`e`) => `void`

Callback that is called when the text input's text changes.

#### Parameters

• **e**: `NativeSyntheticEvent`\<`TextInputChangeEventData`\>

#### Returns

`void`

#### Inherited from

`Omit.onChange`

#### Defined in

node\_modules/react-native/Libraries/Components/TextInput/TextInput.d.ts:724

***

### onChangeText()?

> `optional` **onChangeText**: (`text`) => `void`

Callback that is called when the text input's text changes.
Changed text is passed as an argument to the callback handler.

#### Parameters

• **text**: `string`

#### Returns

`void`

#### Inherited from

`Omit.onChangeText`

#### Defined in

node\_modules/react-native/Libraries/Components/TextInput/TextInput.d.ts:732

***

### onContentSizeChange()?

> `optional` **onContentSizeChange**: (`e`) => `void`

Callback that is called when the text input's content size changes.
This will be called with
`{ nativeEvent: { contentSize: { width, height } } }`.

Only called for multiline text inputs.

#### Parameters

• **e**: `NativeSyntheticEvent`\<`TextInputContentSizeChangeEventData`\>

#### Returns

`void`

#### Inherited from

`Omit.onContentSizeChange`

#### Defined in

node\_modules/react-native/Libraries/Components/TextInput/TextInput.d.ts:741

***

### onEndEditing()?

> `optional` **onEndEditing**: (`e`) => `void`

Callback that is called when text input ends.

#### Parameters

• **e**: `NativeSyntheticEvent`\<`TextInputEndEditingEventData`\>

#### Returns

`void`

#### Inherited from

`Omit.onEndEditing`

#### Defined in

node\_modules/react-native/Libraries/Components/TextInput/TextInput.d.ts:748

***

### onFocus()?

> `optional` **onFocus**: (`e`) => `void`

Callback that is called when the text input is focused

#### Parameters

• **e**: `NativeSyntheticEvent`\<`TextInputFocusEventData`\>

#### Returns

`void`

#### Inherited from

`Omit.onFocus`

#### Defined in

node\_modules/react-native/Libraries/Components/TextInput/TextInput.d.ts:772

***

### onKeyPress()?

> `optional` **onKeyPress**: (`e`) => `void`

Callback that is called when a key is pressed.
This will be called with
 `{ nativeEvent: { key: keyValue } }`
where keyValue is 'Enter' or 'Backspace' for respective keys and the typed-in character otherwise including ' ' for space.

Fires before onChange callbacks.
Note: on Android only the inputs from soft keyboard are handled, not the hardware keyboard inputs.

#### Parameters

• **e**: `NativeSyntheticEvent`\<`TextInputKeyPressEventData`\>

#### Returns

`void`

#### Inherited from

`Omit.onKeyPress`

#### Defined in

node\_modules/react-native/Libraries/Components/TextInput/TextInput.d.ts:819

***

### onLayout()?

> `optional` **onLayout**: (`event`) => `void`

Invoked on mount and layout changes with

{nativeEvent: { layout: {x, y, width, height}}}.

#### Parameters

• **event**: `LayoutChangeEvent`

#### Returns

`void`

#### Inherited from

`Omit.onLayout`

#### Defined in

node\_modules/react-native/Libraries/Components/View/ViewPropTypes.d.ts:210

***

### onMagicTap()?

> `optional` **onMagicTap**: () => `void`

When accessible is true, the system will invoke this function when the user performs the magic tap gesture.

#### Returns

`void`

#### Platform

ios

#### Inherited from

`Omit.onMagicTap`

#### Defined in

node\_modules/react-native/Libraries/Components/View/ViewAccessibility.d.ts:308

***

### onMoveShouldSetResponder()?

> `optional` **onMoveShouldSetResponder**: (`event`) => `boolean`

Called for every touch move on the View when it is not the responder: does this view want to "claim" touch responsiveness?

#### Parameters

• **event**: `GestureResponderEvent`

#### Returns

`boolean`

#### Inherited from

`Omit.onMoveShouldSetResponder`

#### Defined in

node\_modules/react-native/types/public/ReactNativeRenderer.d.ts:53

***

### onMoveShouldSetResponderCapture()?

> `optional` **onMoveShouldSetResponderCapture**: (`event`) => `boolean`

onStartShouldSetResponder and onMoveShouldSetResponder are called with a bubbling pattern,
where the deepest node is called first.
That means that the deepest component will become responder when multiple Views return true for *ShouldSetResponder handlers.
This is desirable in most cases, because it makes sure all controls and buttons are usable.

However, sometimes a parent will want to make sure that it becomes responder.
This can be handled by using the capture phase.
Before the responder system bubbles up from the deepest component,
it will do a capture phase, firing on*ShouldSetResponderCapture.
So if a parent View wants to prevent the child from becoming responder on a touch start,
it should have a onStartShouldSetResponderCapture handler which returns true.

#### Parameters

• **event**: `GestureResponderEvent`

#### Returns

`boolean`

#### Inherited from

`Omit.onMoveShouldSetResponderCapture`

#### Defined in

node\_modules/react-native/types/public/ReactNativeRenderer.d.ts:135

***

### onPointerCancel()?

> `optional` **onPointerCancel**: (`event`) => `void`

#### Parameters

• **event**: `PointerEvent`

#### Returns

`void`

#### Inherited from

`Omit.onPointerCancel`

#### Defined in

node\_modules/react-native/Libraries/Types/CoreEventTypes.d.ts:260

***

### onPointerCancelCapture()?

> `optional` **onPointerCancelCapture**: (`event`) => `void`

#### Parameters

• **event**: `PointerEvent`

#### Returns

`void`

#### Inherited from

`Omit.onPointerCancelCapture`

#### Defined in

node\_modules/react-native/Libraries/Types/CoreEventTypes.d.ts:261

***

### onPointerDown()?

> `optional` **onPointerDown**: (`event`) => `void`

#### Parameters

• **event**: `PointerEvent`

#### Returns

`void`

#### Inherited from

`Omit.onPointerDown`

#### Defined in

node\_modules/react-native/Libraries/Types/CoreEventTypes.d.ts:262

***

### onPointerDownCapture()?

> `optional` **onPointerDownCapture**: (`event`) => `void`

#### Parameters

• **event**: `PointerEvent`

#### Returns

`void`

#### Inherited from

`Omit.onPointerDownCapture`

#### Defined in

node\_modules/react-native/Libraries/Types/CoreEventTypes.d.ts:263

***

### onPointerEnter()?

> `optional` **onPointerEnter**: (`event`) => `void`

#### Parameters

• **event**: `PointerEvent`

#### Returns

`void`

#### Inherited from

`Omit.onPointerEnter`

#### Defined in

node\_modules/react-native/Libraries/Types/CoreEventTypes.d.ts:254

***

### onPointerEnterCapture()?

> `optional` **onPointerEnterCapture**: (`event`) => `void`

#### Parameters

• **event**: `PointerEvent`

#### Returns

`void`

#### Inherited from

`Omit.onPointerEnterCapture`

#### Defined in

node\_modules/react-native/Libraries/Types/CoreEventTypes.d.ts:255

***

### onPointerLeave()?

> `optional` **onPointerLeave**: (`event`) => `void`

#### Parameters

• **event**: `PointerEvent`

#### Returns

`void`

#### Inherited from

`Omit.onPointerLeave`

#### Defined in

node\_modules/react-native/Libraries/Types/CoreEventTypes.d.ts:256

***

### onPointerLeaveCapture()?

> `optional` **onPointerLeaveCapture**: (`event`) => `void`

#### Parameters

• **event**: `PointerEvent`

#### Returns

`void`

#### Inherited from

`Omit.onPointerLeaveCapture`

#### Defined in

node\_modules/react-native/Libraries/Types/CoreEventTypes.d.ts:257

***

### onPointerMove()?

> `optional` **onPointerMove**: (`event`) => `void`

#### Parameters

• **event**: `PointerEvent`

#### Returns

`void`

#### Inherited from

`Omit.onPointerMove`

#### Defined in

node\_modules/react-native/Libraries/Types/CoreEventTypes.d.ts:258

***

### onPointerMoveCapture()?

> `optional` **onPointerMoveCapture**: (`event`) => `void`

#### Parameters

• **event**: `PointerEvent`

#### Returns

`void`

#### Inherited from

`Omit.onPointerMoveCapture`

#### Defined in

node\_modules/react-native/Libraries/Types/CoreEventTypes.d.ts:259

***

### onPointerUp()?

> `optional` **onPointerUp**: (`event`) => `void`

#### Parameters

• **event**: `PointerEvent`

#### Returns

`void`

#### Inherited from

`Omit.onPointerUp`

#### Defined in

node\_modules/react-native/Libraries/Types/CoreEventTypes.d.ts:264

***

### onPointerUpCapture()?

> `optional` **onPointerUpCapture**: (`event`) => `void`

#### Parameters

• **event**: `PointerEvent`

#### Returns

`void`

#### Inherited from

`Omit.onPointerUpCapture`

#### Defined in

node\_modules/react-native/Libraries/Types/CoreEventTypes.d.ts:265

***

### onPress()?

> `optional` **onPress**: (`e`) => `void`

Called when a single tap gesture is detected.

#### Parameters

• **e**: `NativeSyntheticEvent`\<`NativeTouchEvent`\>

#### Returns

`void`

#### Inherited from

`Omit.onPress`

#### Defined in

node\_modules/react-native/Libraries/Components/TextInput/TextInput.d.ts:755

***

### onPressIn()?

> `optional` **onPressIn**: (`e`) => `void`

Callback that is called when a touch is engaged.

#### Parameters

• **e**: `NativeSyntheticEvent`\<`NativeTouchEvent`\>

#### Returns

`void`

#### Inherited from

`Omit.onPressIn`

#### Defined in

node\_modules/react-native/Libraries/Components/TextInput/TextInput.d.ts:760

***

### onPressOut()?

> `optional` **onPressOut**: (`e`) => `void`

Callback that is called when a touch is released.

#### Parameters

• **e**: `NativeSyntheticEvent`\<`NativeTouchEvent`\>

#### Returns

`void`

#### Inherited from

`Omit.onPressOut`

#### Defined in

node\_modules/react-native/Libraries/Components/TextInput/TextInput.d.ts:765

***

### onResponderEnd()?

> `optional` **onResponderEnd**: (`event`) => `void`

If the View returns true and attempts to become the responder, one of the following will happen:

#### Parameters

• **event**: `GestureResponderEvent`

#### Returns

`void`

#### Inherited from

`Omit.onResponderEnd`

#### Defined in

node\_modules/react-native/types/public/ReactNativeRenderer.d.ts:61

***

### onResponderGrant()?

> `optional` **onResponderGrant**: (`event`) => `void`

The View is now responding for touch events.
This is the time to highlight and show the user what is happening

#### Parameters

• **event**: `GestureResponderEvent`

#### Returns

`void`

#### Inherited from

`Omit.onResponderGrant`

#### Defined in

node\_modules/react-native/types/public/ReactNativeRenderer.d.ts:67

***

### onResponderMove()?

> `optional` **onResponderMove**: (`event`) => `void`

The user is moving their finger

#### Parameters

• **event**: `GestureResponderEvent`

#### Returns

`void`

#### Inherited from

`Omit.onResponderMove`

#### Defined in

node\_modules/react-native/types/public/ReactNativeRenderer.d.ts:81

***

### onResponderReject()?

> `optional` **onResponderReject**: (`event`) => `void`

Something else is the responder right now and will not release it

#### Parameters

• **event**: `GestureResponderEvent`

#### Returns

`void`

#### Inherited from

`Omit.onResponderReject`

#### Defined in

node\_modules/react-native/types/public/ReactNativeRenderer.d.ts:72

***

### onResponderRelease()?

> `optional` **onResponderRelease**: (`event`) => `void`

Fired at the end of the touch, ie "touchUp"

#### Parameters

• **event**: `GestureResponderEvent`

#### Returns

`void`

#### Inherited from

`Omit.onResponderRelease`

#### Defined in

node\_modules/react-native/types/public/ReactNativeRenderer.d.ts:86

***

### onResponderStart()?

> `optional` **onResponderStart**: (`event`) => `void`

#### Parameters

• **event**: `GestureResponderEvent`

#### Returns

`void`

#### Inherited from

`Omit.onResponderStart`

#### Defined in

node\_modules/react-native/types/public/ReactNativeRenderer.d.ts:88

***

### onResponderTerminate()?

> `optional` **onResponderTerminate**: (`event`) => `void`

The responder has been taken from the View.
Might be taken by other views after a call to onResponderTerminationRequest,
or might be taken by the OS without asking (happens with control center/ notification center on iOS)

#### Parameters

• **event**: `GestureResponderEvent`

#### Returns

`void`

#### Inherited from

`Omit.onResponderTerminate`

#### Defined in

node\_modules/react-native/types/public/ReactNativeRenderer.d.ts:103

***

### onResponderTerminationRequest()?

> `optional` **onResponderTerminationRequest**: (`event`) => `boolean`

Something else wants to become responder.
 Should this view release the responder? Returning true allows release

#### Parameters

• **event**: `GestureResponderEvent`

#### Returns

`boolean`

#### Inherited from

`Omit.onResponderTerminationRequest`

#### Defined in

node\_modules/react-native/types/public/ReactNativeRenderer.d.ts:94

***

### onScroll()?

> `optional` **onScroll**: (`e`) => `void`

Invoked on content scroll with
 `{ nativeEvent: { contentOffset: { x, y } } }`.

May also contain other properties from ScrollEvent but on Android contentSize is not provided for performance reasons.

#### Parameters

• **e**: `NativeSyntheticEvent`\<`TextInputScrollEventData`\>

#### Returns

`void`

#### Inherited from

`Omit.onScroll`

#### Defined in

node\_modules/react-native/Libraries/Components/TextInput/TextInput.d.ts:806

***

### onSelectionChange()?

> `optional` **onSelectionChange**: (`e`) => `void`

Callback that is called when the text input selection is changed.

#### Parameters

• **e**: `NativeSyntheticEvent`\<`TextInputSelectionChangeEventData`\>

#### Returns

`void`

#### Inherited from

`Omit.onSelectionChange`

#### Defined in

node\_modules/react-native/Libraries/Components/TextInput/TextInput.d.ts:779

***

### onStartShouldSetResponder()?

> `optional` **onStartShouldSetResponder**: (`event`) => `boolean`

Does this view want to become responder on the start of a touch?

#### Parameters

• **event**: `GestureResponderEvent`

#### Returns

`boolean`

#### Inherited from

`Omit.onStartShouldSetResponder`

#### Defined in

node\_modules/react-native/types/public/ReactNativeRenderer.d.ts:46

***

### onStartShouldSetResponderCapture()?

> `optional` **onStartShouldSetResponderCapture**: (`event`) => `boolean`

onStartShouldSetResponder and onMoveShouldSetResponder are called with a bubbling pattern,
where the deepest node is called first.
That means that the deepest component will become responder when multiple Views return true for *ShouldSetResponder handlers.
This is desirable in most cases, because it makes sure all controls and buttons are usable.

However, sometimes a parent will want to make sure that it becomes responder.
This can be handled by using the capture phase.
Before the responder system bubbles up from the deepest component,
it will do a capture phase, firing on*ShouldSetResponderCapture.
So if a parent View wants to prevent the child from becoming responder on a touch start,
it should have a onStartShouldSetResponderCapture handler which returns true.

#### Parameters

• **event**: `GestureResponderEvent`

#### Returns

`boolean`

#### Inherited from

`Omit.onStartShouldSetResponderCapture`

#### Defined in

node\_modules/react-native/types/public/ReactNativeRenderer.d.ts:118

***

### onSubmitEditing()?

> `optional` **onSubmitEditing**: (`e`) => `void`

Callback that is called when the text input's submit button is pressed.

#### Parameters

• **e**: `NativeSyntheticEvent`\<`TextInputSubmitEditingEventData`\>

#### Returns

`void`

#### Inherited from

`Omit.onSubmitEditing`

#### Defined in

node\_modules/react-native/Libraries/Components/TextInput/TextInput.d.ts:786

***

### onTextInput()?

> `optional` **onTextInput**: (`e`) => `void`

Callback that is called on new text input with the argument
 `{ nativeEvent: { text, previousText, range: { start, end } } }`.

This prop requires multiline={true} to be set.

#### Parameters

• **e**: `NativeSyntheticEvent`\<`TextInputTextInputEventData`\>

#### Returns

`void`

#### Inherited from

`Omit.onTextInput`

#### Defined in

node\_modules/react-native/Libraries/Components/TextInput/TextInput.d.ts:796

***

### onTouchCancel()?

> `optional` **onTouchCancel**: (`event`) => `void`

#### Parameters

• **event**: `GestureResponderEvent`

#### Returns

`void`

#### Inherited from

`Omit.onTouchCancel`

#### Defined in

node\_modules/react-native/Libraries/Components/Touchable/Touchable.d.ts:22

***

### onTouchEnd()?

> `optional` **onTouchEnd**: (`event`) => `void`

#### Parameters

• **event**: `GestureResponderEvent`

#### Returns

`void`

#### Inherited from

`Omit.onTouchEnd`

#### Defined in

node\_modules/react-native/Libraries/Components/Touchable/Touchable.d.ts:21

***

### onTouchEndCapture()?

> `optional` **onTouchEndCapture**: (`event`) => `void`

#### Parameters

• **event**: `GestureResponderEvent`

#### Returns

`void`

#### Inherited from

`Omit.onTouchEndCapture`

#### Defined in

node\_modules/react-native/Libraries/Components/Touchable/Touchable.d.ts:23

***

### onTouchMove()?

> `optional` **onTouchMove**: (`event`) => `void`

#### Parameters

• **event**: `GestureResponderEvent`

#### Returns

`void`

#### Inherited from

`Omit.onTouchMove`

#### Defined in

node\_modules/react-native/Libraries/Components/Touchable/Touchable.d.ts:20

***

### onTouchStart()?

> `optional` **onTouchStart**: (`event`) => `void`

#### Parameters

• **event**: `GestureResponderEvent`

#### Returns

`void`

#### Inherited from

`Omit.onTouchStart`

#### Defined in

node\_modules/react-native/Libraries/Components/Touchable/Touchable.d.ts:19

***

### passwordRules?

> `optional` **passwordRules**: `null` \| `string`

Provide rules for your password.
For example, say you want to require a password with at least eight characters consisting of a mix of uppercase and lowercase letters, at least one number, and at most two consecutive characters.
"required: upper; required: lower; required: digit; max-consecutive: 2; minlength: 8;"

#### Inherited from

`Omit.passwordRules`

#### Defined in

node\_modules/react-native/Libraries/Components/TextInput/TextInput.d.ts:187

***

### placeholder?

> `optional` **placeholder**: `string`

The string that will be rendered before text input has been entered

#### Inherited from

`Omit.placeholder`

#### Defined in

node\_modules/react-native/Libraries/Components/TextInput/TextInput.d.ts:826

***

### placeholderTextColor?

> `optional` **placeholderTextColor**: `ColorValue`

The text color of the placeholder string

#### Inherited from

`Omit.placeholderTextColor`

#### Defined in

node\_modules/react-native/Libraries/Components/TextInput/TextInput.d.ts:831

***

### pointerEvents?

> `optional` **pointerEvents**: `"none"` \| `"auto"` \| `"box-none"` \| `"box-only"`

In the absence of auto property, none is much like CSS's none value. box-none is as if you had applied the CSS class:

.box-none {
  pointer-events: none;
}
.box-none * {
  pointer-events: all;
}

box-only is the equivalent of

.box-only {
  pointer-events: all;
}
.box-only * {
  pointer-events: none;
}

But since pointerEvents does not affect layout/appearance, and we are already deviating from the spec by adding additional modes,
we opt to not include pointerEvents on style. On some platforms, we would need to implement it as a className anyways. Using style or not is an implementation detail of the platform.

#### Inherited from

`Omit.pointerEvents`

#### Defined in

node\_modules/react-native/Libraries/Components/View/ViewPropTypes.d.ts:235

***

### readOnly?

> `optional` **readOnly**: `boolean`

If `true`, text is not editable. The default value is `false`.

#### Inherited from

`Omit.readOnly`

#### Defined in

node\_modules/react-native/Libraries/Components/TextInput/TextInput.d.ts:836

***

### rejectResponderTermination?

> `optional` **rejectResponderTermination**: `null` \| `boolean`

If `true`, allows TextInput to pass touch events to the parent component.
This allows components to be swipeable from the TextInput on iOS,
as is the case on Android by default.
If `false`, TextInput always asks to handle the input (except when disabled).

#### Inherited from

`Omit.rejectResponderTermination`

#### Defined in

node\_modules/react-native/Libraries/Components/TextInput/TextInput.d.ts:195

***

### removeClippedSubviews?

> `optional` **removeClippedSubviews**: `boolean`

This is a special performance property exposed by RCTView and is useful for scrolling content when there are many subviews,
most of which are offscreen. For this property to be effective, it must be applied to a view that contains many subviews that extend outside its bound.
The subviews must also have overflow: hidden, as should the containing view (or one of its superviews).

#### Inherited from

`Omit.removeClippedSubviews`

#### Defined in

node\_modules/react-native/Libraries/Components/View/ViewPropTypes.d.ts:243

***

### renderToHardwareTextureAndroid?

> `optional` **renderToHardwareTextureAndroid**: `boolean`

Whether this view should render itself (and all of its children) into a single hardware texture on the GPU.

On Android, this is useful for animations and interactions that only modify opacity, rotation, translation, and/or scale:
in those cases, the view doesn't have to be redrawn and display lists don't need to be re-executed. The texture can just be
re-used and re-composited with different parameters. The downside is that this can use up limited video memory, so this prop should be set back to false at the end of the interaction/animation.

#### Inherited from

`Omit.renderToHardwareTextureAndroid`

#### Defined in

node\_modules/react-native/Libraries/Components/View/ViewPropTypes.d.ts:142

***

### requiredText?

> `optional` **requiredText**: `string`

The text to render besides the label text when the field is requried.

#### Default

```ts
"*"
```

#### Defined in

[packages/native/src/lib/fields/TextField.component.tsx:49](https://github.com/JoseLion/lynxts/blob/main/packages/native/src/lib/fields/TextField.component.tsx#L49)

***

### returnKeyLabel?

> `optional` **returnKeyLabel**: `string`

Sets the return key to the label. Use it instead of `returnKeyType`.

#### Platform

android

#### Inherited from

`Omit.returnKeyLabel`

#### Defined in

node\_modules/react-native/Libraries/Components/TextInput/TextInput.d.ts:398

***

### returnKeyType?

> `optional` **returnKeyType**: `ReturnKeyTypeOptions`

enum('default', 'go', 'google', 'join', 'next', 'route', 'search', 'send', 'yahoo', 'done', 'emergency-call')
Determines how the return key should look.

#### Inherited from

`Omit.returnKeyType`

#### Defined in

node\_modules/react-native/Libraries/Components/TextInput/TextInput.d.ts:842

***

### role?

> `optional` **role**: `Role`

Indicates to accessibility services to treat UI component like a specific role.

#### Inherited from

`Omit.role`

#### Defined in

node\_modules/react-native/Libraries/Components/View/ViewAccessibility.d.ts:100

***

### scrollEnabled?

> `optional` **scrollEnabled**: `boolean`

If false, scrolling of the text view will be disabled. The default value is true. Only works with multiline={true}

#### Inherited from

`Omit.scrollEnabled`

#### Defined in

node\_modules/react-native/Libraries/Components/TextInput/TextInput.d.ts:305

***

### secureTextEntry?

> `optional` **secureTextEntry**: `boolean`

If true, the text input obscures the text entered so that sensitive text like passwords stay secure.
The default value is false.

#### Inherited from

`Omit.secureTextEntry`

#### Defined in

node\_modules/react-native/Libraries/Components/TextInput/TextInput.d.ts:854

***

### selectTextOnFocus?

> `optional` **selectTextOnFocus**: `boolean`

If true, all text will automatically be selected on focus

#### Inherited from

`Omit.selectTextOnFocus`

#### Defined in

node\_modules/react-native/Libraries/Components/TextInput/TextInput.d.ts:859

***

### selection?

> `optional` **selection**: `object`

The start and end of the text input's selection. Set start and end to
the same value to position the cursor.

#### end?

> `optional` **end**: `number`

#### start

> **start**: `number`

#### Inherited from

`Omit.selection`

#### Defined in

node\_modules/react-native/Libraries/Components/TextInput/TextInput.d.ts:865

***

### selectionColor?

> `optional` **selectionColor**: `ColorValue`

The highlight (and cursor on ios) color of the text input

#### Inherited from

`Omit.selectionColor`

#### Defined in

node\_modules/react-native/Libraries/Components/TextInput/TextInput.d.ts:870

***

### selectionHandleColor?

> `optional` **selectionHandleColor**: `null` \| `ColorValue`

When provided it will set the color of the selection handles when highlighting text.
Unlike the behavior of `selectionColor` the handle color will be set independently
from the color of the text selection box.

#### Platform

android

#### Inherited from

`Omit.selectionHandleColor`

#### Defined in

node\_modules/react-native/Libraries/Components/TextInput/TextInput.d.ts:345

***

### selectionState?

> `optional` **selectionState**: `DocumentSelectionState`

See DocumentSelectionState.js, some state that is responsible for maintaining selection information for a document

#### Inherited from

`Omit.selectionState`

#### Defined in

node\_modules/react-native/Libraries/Components/TextInput/TextInput.d.ts:200

***

### shouldRasterizeIOS?

> `optional` **shouldRasterizeIOS**: `boolean`

Whether this view should be rendered as a bitmap before compositing.

On iOS, this is useful for animations and interactions that do not modify this component's dimensions nor its children;
for example, when translating the position of a static view, rasterization allows the renderer to reuse a cached bitmap of a static view
and quickly composite it during each frame.

Rasterization incurs an off-screen drawing pass and the bitmap consumes memory.
Test and measure when using this property.

#### Inherited from

`Omit.shouldRasterizeIOS`

#### Defined in

node\_modules/react-native/Libraries/Components/View/ViewPropTypes.d.ts:124

***

### showSoftInputOnFocus?

> `optional` **showSoftInputOnFocus**: `boolean`

When false, it will prevent the soft keyboard from showing when the field is focused. The default value is true

#### Inherited from

`Omit.showSoftInputOnFocus`

#### Defined in

node\_modules/react-native/Libraries/Components/TextInput/TextInput.d.ts:419

***

### smartInsertDelete?

> `optional` **smartInsertDelete**: `boolean`

If `false`, the iOS system will not insert an extra space after a paste operation
neither delete one or two spaces after a cut or delete operation.

The default value is `true`.

#### Inherited from

`Omit.smartInsertDelete`

#### Defined in

node\_modules/react-native/Libraries/Components/TextInput/TextInput.d.ts:323

***

### spellCheck?

> `optional` **spellCheck**: `boolean`

If false, disables spell-check style (i.e. red underlines). The default value is inherited from autoCorrect

#### Inherited from

`Omit.spellCheck`

#### Defined in

node\_modules/react-native/Libraries/Components/TextInput/TextInput.d.ts:205

***

### style?

> `optional` **style**: `StyleProp`\<`ViewStyle`\>

The styles of the View wrapping the field.

#### Overrides

`Omit.style`

#### Defined in

[packages/native/src/lib/fields/TextField.component.tsx:53](https://github.com/JoseLion/lynxts/blob/main/packages/native/src/lib/fields/TextField.component.tsx#L53)

***

### supStyle?

> `optional` **supStyle**: `StyleProp`\<`TextStyle`\>

The styles of the superscript `<Text>` component.

#### Defined in

[packages/native/src/lib/fields/TextField.component.tsx:57](https://github.com/JoseLion/lynxts/blob/main/packages/native/src/lib/fields/TextField.component.tsx#L57)

***

### tabIndex?

> `optional` **tabIndex**: `0` \| `-1`

Indicates whether this `View` should be focusable with a non-touch input device, eg. receive focus with a hardware keyboard.
See https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex
for more details.

Supports the following values:
-  0 (View is focusable)
- -1 (View is not focusable)

#### Inherited from

`Omit.tabIndex`

#### Defined in

node\_modules/react-native/Libraries/Components/View/ViewPropTypes.d.ts:158

***

### testID?

> `optional` **testID**: `string`

Used to locate this view in end-to-end tests

#### Inherited from

`Omit.testID`

#### Defined in

node\_modules/react-native/Libraries/Components/TextInput/TextInput.d.ts:885

***

### textAlign?

> `optional` **textAlign**: `"center"` \| `"left"` \| `"right"`

Align the input text to the left, center, or right sides of the input field.

#### Inherited from

`Omit.textAlign`

#### Defined in

node\_modules/react-native/Libraries/Components/TextInput/TextInput.d.ts:880

***

### textAlignVertical?

> `optional` **textAlignVertical**: `"center"` \| `"auto"` \| `"top"` \| `"bottom"`

Vertically align text when `multiline` is set to true

#### Inherited from

`Omit.textAlignVertical`

#### Defined in

node\_modules/react-native/Libraries/Components/TextInput/TextInput.d.ts:414

***

### textBreakStrategy?

> `optional` **textBreakStrategy**: `"simple"` \| `"highQuality"` \| `"balanced"`

Set text break strategy on Android API Level 23+, possible values are simple, highQuality, balanced
The default value is simple.

#### Inherited from

`Omit.textBreakStrategy`

#### Defined in

node\_modules/react-native/Libraries/Components/TextInput/TextInput.d.ts:404

***

### textContentType?

> `optional` **textContentType**: `"none"` \| `"name"` \| `"nickname"` \| `"password"` \| `"username"` \| `"URL"` \| `"addressCity"` \| `"addressCityAndState"` \| `"addressState"` \| `"countryName"` \| `"creditCardNumber"` \| `"creditCardExpiration"` \| `"creditCardExpirationMonth"` \| `"creditCardExpirationYear"` \| `"creditCardSecurityCode"` \| `"creditCardType"` \| `"creditCardName"` \| `"creditCardGivenName"` \| `"creditCardMiddleName"` \| `"creditCardFamilyName"` \| `"emailAddress"` \| `"familyName"` \| `"fullStreetAddress"` \| `"givenName"` \| `"jobTitle"` \| `"location"` \| `"middleName"` \| `"namePrefix"` \| `"nameSuffix"` \| `"organizationName"` \| `"postalCode"` \| `"streetAddressLine1"` \| `"streetAddressLine2"` \| `"sublocality"` \| `"telephoneNumber"` \| `"newPassword"` \| `"oneTimeCode"` \| `"birthdate"` \| `"birthdateDay"` \| `"birthdateMonth"` \| `"birthdateYear"`

Give the keyboard and the system information about the expected
semantic meaning for the content that users enter.

To disable autofill, set textContentType to `none`.

Possible values for `textContentType` are:

 - `'none'`
 - `'URL'`
 - `'addressCity'`
 - `'addressCityAndState'`
 - `'addressState'`
 - `'countryName'`
 - `'creditCardNumber'`
 - `'creditCardExpiration'` (iOS 17+)
 - `'creditCardExpirationMonth'` (iOS 17+)
 - `'creditCardExpirationYear'` (iOS 17+)
 - `'creditCardSecurityCode'` (iOS 17+)
 - `'creditCardType'` (iOS 17+)
 - `'creditCardName'` (iOS 17+)
 - `'creditCardGivenName'` (iOS 17+)
 - `'creditCardMiddleName'` (iOS 17+)
 - `'creditCardFamilyName'` (iOS 17+)
 - `'emailAddress'`
 - `'familyName'`
 - `'fullStreetAddress'`
 - `'givenName'`
 - `'jobTitle'`
 - `'location'`
 - `'middleName'`
 - `'name'`
 - `'namePrefix'`
 - `'nameSuffix'`
 - `'nickname'`
 - `'organizationName'`
 - `'postalCode'`
 - `'streetAddressLine1'`
 - `'streetAddressLine2'`
 - `'sublocality'`
 - `'telephoneNumber'`
 - `'username'`
 - `'password'`
 - `'newPassword'`
 - `'oneTimeCode'`
 - `'birthdate'` (iOS 17+)
 - `'birthdateDay'` (iOS 17+)
 - `'birthdateMonth'` (iOS 17+)
 - `'birthdateYear'` (iOS 17+)

#### Inherited from

`Omit.textContentType`

#### Defined in

node\_modules/react-native/Libraries/Components/TextInput/TextInput.d.ts:258

***

### textInputStyle?

> `optional` **textInputStyle**: `StyleProp`\<`TextStyle`\>

The styles of the `<TextInput>` component.

#### Defined in

[packages/native/src/lib/fields/TextField.component.tsx:61](https://github.com/JoseLion/lynxts/blob/main/packages/native/src/lib/fields/TextField.component.tsx#L61)

***

### tvParallaxMagnification?

> `optional` **tvParallaxMagnification**: `number`

*(Apple TV only)* May be used to change the appearance of the Apple TV parallax effect when this view goes in or out of focus.  Defaults to 1.0.

#### Platform

ios

#### Inherited from

`Omit.tvParallaxMagnification`

#### Defined in

node\_modules/react-native/Libraries/Components/View/ViewPropTypes.d.ts:110

***

### tvParallaxProperties?

> `optional` **tvParallaxProperties**: `TVParallaxProperties`

*(Apple TV only)* Object with properties to control Apple TV parallax effects.

#### Platform

ios

#### Inherited from

`Omit.tvParallaxProperties`

#### Defined in

node\_modules/react-native/Libraries/Components/View/ViewPropTypes.d.ts:82

***

### tvParallaxShiftDistanceX?

> `optional` **tvParallaxShiftDistanceX**: `number`

*(Apple TV only)* May be used to change the appearance of the Apple TV parallax effect when this view goes in or out of focus.  Defaults to 2.0.

#### Platform

ios

#### Inherited from

`Omit.tvParallaxShiftDistanceX`

#### Defined in

node\_modules/react-native/Libraries/Components/View/ViewPropTypes.d.ts:89

***

### tvParallaxShiftDistanceY?

> `optional` **tvParallaxShiftDistanceY**: `number`

*(Apple TV only)* May be used to change the appearance of the Apple TV parallax effect when this view goes in or out of focus.  Defaults to 2.0.

#### Platform

ios

#### Inherited from

`Omit.tvParallaxShiftDistanceY`

#### Defined in

node\_modules/react-native/Libraries/Components/View/ViewPropTypes.d.ts:96

***

### tvParallaxTiltAngle?

> `optional` **tvParallaxTiltAngle**: `number`

*(Apple TV only)* May be used to change the appearance of the Apple TV parallax effect when this view goes in or out of focus.  Defaults to 0.05.

#### Platform

ios

#### Inherited from

`Omit.tvParallaxTiltAngle`

#### Defined in

node\_modules/react-native/Libraries/Components/View/ViewPropTypes.d.ts:103

***

### underlineColorAndroid?

> `optional` **underlineColorAndroid**: `ColorValue`

The color of the textInput underline.

#### Inherited from

`Omit.underlineColorAndroid`

#### Defined in

node\_modules/react-native/Libraries/Components/TextInput/TextInput.d.ts:409

***

### verticalAlign?

> `optional` **verticalAlign**: `"auto"` \| `"top"` \| `"bottom"` \| `"middle"`

Vertically align text when `multiline` is set to true

#### Inherited from

`Omit.verticalAlign`

#### Defined in

node\_modules/react-native/Libraries/Components/TextInput/TextInput.d.ts:424
