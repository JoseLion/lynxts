[**@lynxts/web**](../README.md) • **Docs**

***

[@lynxts/web](../README.md) / SelectProps

# Interface: SelectProps\<T, K\>

The [Select](../functions/Select.md) component props which extends from the
HTMLSelectElement attributes.

## Extends

- `HTMLAttributes`\<`HTMLSelectElement`\>

## Type parameters

• **T** *extends* `Struct`

struct type of the form values

• **K** *extends* `Path`\<`T`\>

the type of the Path<T> of the field

## Properties

### about?

> `optional` **about**: `string`

#### Inherited from

`HTMLAttributes.about`

#### Source

node\_modules/@types/react/index.d.ts:2920

***

### accessKey?

> `optional` **accessKey**: `string`

#### Inherited from

`HTMLAttributes.accessKey`

#### Source

node\_modules/@types/react/index.d.ts:2895

***

### aria-activedescendant?

> `optional` **aria-activedescendant**: `string`

Identifies the currently active element when DOM focus is on a composite widget, textbox, group, or application.

#### Inherited from

`HTMLAttributes.aria-activedescendant`

#### Source

node\_modules/@types/react/index.d.ts:2593

***

### aria-atomic?

> `optional` **aria-atomic**: `Booleanish`

Indicates whether assistive technologies will present all, or only parts of, the changed region based on the change notifications defined by the aria-relevant attribute.

#### Inherited from

`HTMLAttributes.aria-atomic`

#### Source

node\_modules/@types/react/index.d.ts:2595

***

### aria-autocomplete?

> `optional` **aria-autocomplete**: `"list"` \| `"none"` \| `"inline"` \| `"both"`

Indicates whether inputting text could trigger display of one or more predictions of the user's intended value for an input and specifies how predictions would be
presented if they are made.

#### Inherited from

`HTMLAttributes.aria-autocomplete`

#### Source

node\_modules/@types/react/index.d.ts:2600

***

### aria-braillelabel?

> `optional` **aria-braillelabel**: `string`

Defines a string value that labels the current element, which is intended to be converted into Braille.

#### See

aria-label.

#### Inherited from

`HTMLAttributes.aria-braillelabel`

#### Source

node\_modules/@types/react/index.d.ts:2606

***

### aria-brailleroledescription?

> `optional` **aria-brailleroledescription**: `string`

Defines a human-readable, author-localized abbreviated description for the role of an element, which is intended to be converted into Braille.

#### See

aria-roledescription.

#### Inherited from

`HTMLAttributes.aria-brailleroledescription`

#### Source

node\_modules/@types/react/index.d.ts:2611

***

### aria-busy?

> `optional` **aria-busy**: `Booleanish`

#### Inherited from

`HTMLAttributes.aria-busy`

#### Source

node\_modules/@types/react/index.d.ts:2612

***

### aria-checked?

> `optional` **aria-checked**: `boolean` \| `"true"` \| `"false"` \| `"mixed"`

Indicates the current "checked" state of checkboxes, radio buttons, and other widgets.

#### See

 - aria-pressed
 - aria-selected.

#### Inherited from

`HTMLAttributes.aria-checked`

#### Source

node\_modules/@types/react/index.d.ts:2617

***

### aria-colcount?

> `optional` **aria-colcount**: `number`

Defines the total number of columns in a table, grid, or treegrid.

#### See

aria-colindex.

#### Inherited from

`HTMLAttributes.aria-colcount`

#### Source

node\_modules/@types/react/index.d.ts:2622

***

### aria-colindex?

> `optional` **aria-colindex**: `number`

Defines an element's column index or position with respect to the total number of columns within a table, grid, or treegrid.

#### See

 - aria-colcount
 - aria-colspan.

#### Inherited from

`HTMLAttributes.aria-colindex`

#### Source

node\_modules/@types/react/index.d.ts:2627

***

### aria-colindextext?

> `optional` **aria-colindextext**: `string`

Defines a human readable text alternative of aria-colindex.

#### See

aria-rowindextext.

#### Inherited from

`HTMLAttributes.aria-colindextext`

#### Source

node\_modules/@types/react/index.d.ts:2632

***

### aria-colspan?

> `optional` **aria-colspan**: `number`

Defines the number of columns spanned by a cell or gridcell within a table, grid, or treegrid.

#### See

 - aria-colindex
 - aria-rowspan.

#### Inherited from

`HTMLAttributes.aria-colspan`

#### Source

node\_modules/@types/react/index.d.ts:2637

***

### aria-controls?

> `optional` **aria-controls**: `string`

Identifies the element (or elements) whose contents or presence are controlled by the current element.

#### See

aria-owns.

#### Inherited from

`HTMLAttributes.aria-controls`

#### Source

node\_modules/@types/react/index.d.ts:2642

***

### aria-current?

> `optional` **aria-current**: `boolean` \| `"time"` \| `"true"` \| `"false"` \| `"page"` \| `"step"` \| `"location"` \| `"date"`

Indicates the element that represents the current item within a container or set of related elements.

#### Inherited from

`HTMLAttributes.aria-current`

#### Source

node\_modules/@types/react/index.d.ts:2644

***

### aria-describedby?

> `optional` **aria-describedby**: `string`

Identifies the element (or elements) that describes the object.

#### See

aria-labelledby

#### Inherited from

`HTMLAttributes.aria-describedby`

#### Source

node\_modules/@types/react/index.d.ts:2649

***

### aria-description?

> `optional` **aria-description**: `string`

Defines a string value that describes or annotates the current element.

#### See

related aria-describedby.

#### Inherited from

`HTMLAttributes.aria-description`

#### Source

node\_modules/@types/react/index.d.ts:2654

***

### aria-details?

> `optional` **aria-details**: `string`

Identifies the element that provides a detailed, extended description for the object.

#### See

aria-describedby.

#### Inherited from

`HTMLAttributes.aria-details`

#### Source

node\_modules/@types/react/index.d.ts:2659

***

### aria-disabled?

> `optional` **aria-disabled**: `Booleanish`

Indicates that the element is perceivable but disabled, so it is not editable or otherwise operable.

#### See

 - aria-hidden
 - aria-readonly.

#### Inherited from

`HTMLAttributes.aria-disabled`

#### Source

node\_modules/@types/react/index.d.ts:2664

***

### ~~aria-dropeffect?~~

> `optional` **aria-dropeffect**: `"link"` \| `"none"` \| `"copy"` \| `"execute"` \| `"move"` \| `"popup"`

Indicates what functions can be performed when a dragged object is released on the drop target.

#### Deprecated

in ARIA 1.1

#### Inherited from

`HTMLAttributes.aria-dropeffect`

#### Source

node\_modules/@types/react/index.d.ts:2669

***

### aria-errormessage?

> `optional` **aria-errormessage**: `string`

Identifies the element that provides an error message for the object.

#### See

 - aria-invalid
 - aria-describedby.

#### Inherited from

`HTMLAttributes.aria-errormessage`

#### Source

node\_modules/@types/react/index.d.ts:2674

***

### aria-expanded?

> `optional` **aria-expanded**: `Booleanish`

Indicates whether the element, or another grouping element it controls, is currently expanded or collapsed.

#### Inherited from

`HTMLAttributes.aria-expanded`

#### Source

node\_modules/@types/react/index.d.ts:2676

***

### aria-flowto?

> `optional` **aria-flowto**: `string`

Identifies the next element (or elements) in an alternate reading order of content which, at the user's discretion,
allows assistive technology to override the general default of reading in document source order.

#### Inherited from

`HTMLAttributes.aria-flowto`

#### Source

node\_modules/@types/react/index.d.ts:2681

***

### ~~aria-grabbed?~~

> `optional` **aria-grabbed**: `Booleanish`

Indicates an element's "grabbed" state in a drag-and-drop operation.

#### Deprecated

in ARIA 1.1

#### Inherited from

`HTMLAttributes.aria-grabbed`

#### Source

node\_modules/@types/react/index.d.ts:2686

***

### aria-haspopup?

> `optional` **aria-haspopup**: `boolean` \| `"dialog"` \| `"menu"` \| `"true"` \| `"false"` \| `"grid"` \| `"listbox"` \| `"tree"`

Indicates the availability and type of interactive popup element, such as menu or dialog, that can be triggered by an element.

#### Inherited from

`HTMLAttributes.aria-haspopup`

#### Source

node\_modules/@types/react/index.d.ts:2688

***

### aria-hidden?

> `optional` **aria-hidden**: `Booleanish`

Indicates whether the element is exposed to an accessibility API.

#### See

aria-disabled.

#### Inherited from

`HTMLAttributes.aria-hidden`

#### Source

node\_modules/@types/react/index.d.ts:2693

***

### aria-invalid?

> `optional` **aria-invalid**: `boolean` \| `"true"` \| `"false"` \| `"grammar"` \| `"spelling"`

Indicates the entered value does not conform to the format expected by the application.

#### See

aria-errormessage.

#### Inherited from

`HTMLAttributes.aria-invalid`

#### Source

node\_modules/@types/react/index.d.ts:2698

***

### aria-keyshortcuts?

> `optional` **aria-keyshortcuts**: `string`

Indicates keyboard shortcuts that an author has implemented to activate or give focus to an element.

#### Inherited from

`HTMLAttributes.aria-keyshortcuts`

#### Source

node\_modules/@types/react/index.d.ts:2700

***

### aria-label?

> `optional` **aria-label**: `string`

Defines a string value that labels the current element.

#### See

aria-labelledby.

#### Inherited from

`HTMLAttributes.aria-label`

#### Source

node\_modules/@types/react/index.d.ts:2705

***

### aria-labelledby?

> `optional` **aria-labelledby**: `string`

Identifies the element (or elements) that labels the current element.

#### See

aria-describedby.

#### Inherited from

`HTMLAttributes.aria-labelledby`

#### Source

node\_modules/@types/react/index.d.ts:2710

***

### aria-level?

> `optional` **aria-level**: `number`

Defines the hierarchical level of an element within a structure.

#### Inherited from

`HTMLAttributes.aria-level`

#### Source

node\_modules/@types/react/index.d.ts:2712

***

### aria-live?

> `optional` **aria-live**: `"off"` \| `"assertive"` \| `"polite"`

Indicates that an element will be updated, and describes the types of updates the user agents, assistive technologies, and user can expect from the live region.

#### Inherited from

`HTMLAttributes.aria-live`

#### Source

node\_modules/@types/react/index.d.ts:2714

***

### aria-modal?

> `optional` **aria-modal**: `Booleanish`

Indicates whether an element is modal when displayed.

#### Inherited from

`HTMLAttributes.aria-modal`

#### Source

node\_modules/@types/react/index.d.ts:2716

***

### aria-multiline?

> `optional` **aria-multiline**: `Booleanish`

Indicates whether a text box accepts multiple lines of input or only a single line.

#### Inherited from

`HTMLAttributes.aria-multiline`

#### Source

node\_modules/@types/react/index.d.ts:2718

***

### aria-multiselectable?

> `optional` **aria-multiselectable**: `Booleanish`

Indicates that the user may select more than one item from the current selectable descendants.

#### Inherited from

`HTMLAttributes.aria-multiselectable`

#### Source

node\_modules/@types/react/index.d.ts:2720

***

### aria-orientation?

> `optional` **aria-orientation**: `"horizontal"` \| `"vertical"`

Indicates whether the element's orientation is horizontal, vertical, or unknown/ambiguous.

#### Inherited from

`HTMLAttributes.aria-orientation`

#### Source

node\_modules/@types/react/index.d.ts:2722

***

### aria-owns?

> `optional` **aria-owns**: `string`

Identifies an element (or elements) in order to define a visual, functional, or contextual parent/child relationship
between DOM elements where the DOM hierarchy cannot be used to represent the relationship.

#### See

aria-controls.

#### Inherited from

`HTMLAttributes.aria-owns`

#### Source

node\_modules/@types/react/index.d.ts:2728

***

### aria-placeholder?

> `optional` **aria-placeholder**: `string`

Defines a short hint (a word or short phrase) intended to aid the user with data entry when the control has no value.
A hint could be a sample value or a brief description of the expected format.

#### Inherited from

`HTMLAttributes.aria-placeholder`

#### Source

node\_modules/@types/react/index.d.ts:2733

***

### aria-posinset?

> `optional` **aria-posinset**: `number`

Defines an element's number or position in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.

#### See

aria-setsize.

#### Inherited from

`HTMLAttributes.aria-posinset`

#### Source

node\_modules/@types/react/index.d.ts:2738

***

### aria-pressed?

> `optional` **aria-pressed**: `boolean` \| `"true"` \| `"false"` \| `"mixed"`

Indicates the current "pressed" state of toggle buttons.

#### See

 - aria-checked
 - aria-selected.

#### Inherited from

`HTMLAttributes.aria-pressed`

#### Source

node\_modules/@types/react/index.d.ts:2743

***

### aria-readonly?

> `optional` **aria-readonly**: `Booleanish`

Indicates that the element is not editable, but is otherwise operable.

#### See

aria-disabled.

#### Inherited from

`HTMLAttributes.aria-readonly`

#### Source

node\_modules/@types/react/index.d.ts:2748

***

### aria-relevant?

> `optional` **aria-relevant**: `"text"` \| `"additions"` \| `"additions removals"` \| `"additions text"` \| `"all"` \| `"removals"` \| `"removals additions"` \| `"removals text"` \| `"text additions"` \| `"text removals"`

Indicates what notifications the user agent will trigger when the accessibility tree within a live region is modified.

#### See

aria-atomic.

#### Inherited from

`HTMLAttributes.aria-relevant`

#### Source

node\_modules/@types/react/index.d.ts:2753

***

### aria-required?

> `optional` **aria-required**: `Booleanish`

Indicates that user input is required on the element before a form may be submitted.

#### Inherited from

`HTMLAttributes.aria-required`

#### Source

node\_modules/@types/react/index.d.ts:2766

***

### aria-roledescription?

> `optional` **aria-roledescription**: `string`

Defines a human-readable, author-localized description for the role of an element.

#### Inherited from

`HTMLAttributes.aria-roledescription`

#### Source

node\_modules/@types/react/index.d.ts:2768

***

### aria-rowcount?

> `optional` **aria-rowcount**: `number`

Defines the total number of rows in a table, grid, or treegrid.

#### See

aria-rowindex.

#### Inherited from

`HTMLAttributes.aria-rowcount`

#### Source

node\_modules/@types/react/index.d.ts:2773

***

### aria-rowindex?

> `optional` **aria-rowindex**: `number`

Defines an element's row index or position with respect to the total number of rows within a table, grid, or treegrid.

#### See

 - aria-rowcount
 - aria-rowspan.

#### Inherited from

`HTMLAttributes.aria-rowindex`

#### Source

node\_modules/@types/react/index.d.ts:2778

***

### aria-rowindextext?

> `optional` **aria-rowindextext**: `string`

Defines a human readable text alternative of aria-rowindex.

#### See

aria-colindextext.

#### Inherited from

`HTMLAttributes.aria-rowindextext`

#### Source

node\_modules/@types/react/index.d.ts:2783

***

### aria-rowspan?

> `optional` **aria-rowspan**: `number`

Defines the number of rows spanned by a cell or gridcell within a table, grid, or treegrid.

#### See

 - aria-rowindex
 - aria-colspan.

#### Inherited from

`HTMLAttributes.aria-rowspan`

#### Source

node\_modules/@types/react/index.d.ts:2788

***

### aria-selected?

> `optional` **aria-selected**: `Booleanish`

Indicates the current "selected" state of various widgets.

#### See

 - aria-checked
 - aria-pressed.

#### Inherited from

`HTMLAttributes.aria-selected`

#### Source

node\_modules/@types/react/index.d.ts:2793

***

### aria-setsize?

> `optional` **aria-setsize**: `number`

Defines the number of items in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.

#### See

aria-posinset.

#### Inherited from

`HTMLAttributes.aria-setsize`

#### Source

node\_modules/@types/react/index.d.ts:2798

***

### aria-sort?

> `optional` **aria-sort**: `"none"` \| `"ascending"` \| `"descending"` \| `"other"`

Indicates if items in a table or grid are sorted in ascending or descending order.

#### Inherited from

`HTMLAttributes.aria-sort`

#### Source

node\_modules/@types/react/index.d.ts:2800

***

### aria-valuemax?

> `optional` **aria-valuemax**: `number`

Defines the maximum allowed value for a range widget.

#### Inherited from

`HTMLAttributes.aria-valuemax`

#### Source

node\_modules/@types/react/index.d.ts:2802

***

### aria-valuemin?

> `optional` **aria-valuemin**: `number`

Defines the minimum allowed value for a range widget.

#### Inherited from

`HTMLAttributes.aria-valuemin`

#### Source

node\_modules/@types/react/index.d.ts:2804

***

### aria-valuenow?

> `optional` **aria-valuenow**: `number`

Defines the current value for a range widget.

#### See

aria-valuetext.

#### Inherited from

`HTMLAttributes.aria-valuenow`

#### Source

node\_modules/@types/react/index.d.ts:2809

***

### aria-valuetext?

> `optional` **aria-valuetext**: `string`

Defines the human readable text alternative of aria-valuenow for a range widget.

#### Inherited from

`HTMLAttributes.aria-valuetext`

#### Source

node\_modules/@types/react/index.d.ts:2811

***

### autoCapitalize?

> `optional` **autoCapitalize**: `string`

#### Inherited from

`HTMLAttributes.autoCapitalize`

#### Source

node\_modules/@types/react/index.d.ts:2933

***

### autoCorrect?

> `optional` **autoCorrect**: `string`

#### Inherited from

`HTMLAttributes.autoCorrect`

#### Source

node\_modules/@types/react/index.d.ts:2934

***

### autoFocus?

> `optional` **autoFocus**: `boolean`

#### Inherited from

`HTMLAttributes.autoFocus`

#### Source

node\_modules/@types/react/index.d.ts:2896

***

### autoSave?

> `optional` **autoSave**: `string`

#### Inherited from

`HTMLAttributes.autoSave`

#### Source

node\_modules/@types/react/index.d.ts:2935

***

### children?

> `optional` **children**: `ReactNode`

#### Inherited from

`HTMLAttributes.children`

#### Source

node\_modules/@types/react/index.d.ts:2379

***

### className?

> `optional` **className**: `string`

#### Inherited from

`HTMLAttributes.className`

#### Source

node\_modules/@types/react/index.d.ts:2897

***

### color?

> `optional` **color**: `string`

#### Inherited from

`HTMLAttributes.color`

#### Source

node\_modules/@types/react/index.d.ts:2936

***

### content?

> `optional` **content**: `string`

#### Inherited from

`HTMLAttributes.content`

#### Source

node\_modules/@types/react/index.d.ts:2921

***

### contentEditable?

> `optional` **contentEditable**: `Booleanish` \| `"inherit"` \| `"plaintext-only"`

#### Inherited from

`HTMLAttributes.contentEditable`

#### Source

node\_modules/@types/react/index.d.ts:2898

***

### contextMenu?

> `optional` **contextMenu**: `string`

#### Inherited from

`HTMLAttributes.contextMenu`

#### Source

node\_modules/@types/react/index.d.ts:2899

***

### dangerouslySetInnerHTML?

> `optional` **dangerouslySetInnerHTML**: `object`

#### \_\_html

> **\_\_html**: `string` \| `TrustedHTML`

#### Inherited from

`HTMLAttributes.dangerouslySetInnerHTML`

#### Source

node\_modules/@types/react/index.d.ts:2380

***

### datatype?

> `optional` **datatype**: `string`

#### Inherited from

`HTMLAttributes.datatype`

#### Source

node\_modules/@types/react/index.d.ts:2922

***

### defaultChecked?

> `optional` **defaultChecked**: `boolean`

#### Inherited from

`HTMLAttributes.defaultChecked`

#### Source

node\_modules/@types/react/index.d.ts:2889

***

### defaultValue?

> `optional` **defaultValue**: `string` \| `number` \| readonly `string`[]

#### Inherited from

`HTMLAttributes.defaultValue`

#### Source

node\_modules/@types/react/index.d.ts:2890

***

### dir?

> `optional` **dir**: `string`

#### Inherited from

`HTMLAttributes.dir`

#### Source

node\_modules/@types/react/index.d.ts:2900

***

### draggable?

> `optional` **draggable**: `Booleanish`

#### Inherited from

`HTMLAttributes.draggable`

#### Source

node\_modules/@types/react/index.d.ts:2901

***

### hidden?

> `optional` **hidden**: `boolean`

#### Inherited from

`HTMLAttributes.hidden`

#### Source

node\_modules/@types/react/index.d.ts:2902

***

### id?

> `optional` **id**: `string`

#### Inherited from

`HTMLAttributes.id`

#### Source

node\_modules/@types/react/index.d.ts:2903

***

### inline?

> `optional` **inline**: `boolean`

Renders the label and select in inline mode when true, block mode
otherwise.

#### Default

```ts
false
```

#### Source

[packages/web/src/lib/fields/Select.component.tsx:28](https://github.com/JoseLion/lynxts/blob/main/packages/web/src/lib/fields/Select.component.tsx#L28)

***

### inlist?

> `optional` **inlist**: `any`

#### Inherited from

`HTMLAttributes.inlist`

#### Source

node\_modules/@types/react/index.d.ts:2923

***

### inputMode?

> `optional` **inputMode**: `"search"` \| `"text"` \| `"none"` \| `"tel"` \| `"url"` \| `"email"` \| `"numeric"` \| `"decimal"`

Hints at the type of data that might be entered by the user while editing the element or its contents

#### See

[https://html.spec.whatwg.org/multipage/interaction.html#input-modalities:-the-inputmode-attribute](https://html.spec.whatwg.org/multipage/interaction.html#input-modalities:-the-inputmode-attribute)

#### Inherited from

`HTMLAttributes.inputMode`

#### Source

node\_modules/@types/react/index.d.ts:2951

***

### is?

> `optional` **is**: `string`

Specify that a standard HTML element should behave like a defined custom built-in element

#### See

[https://html.spec.whatwg.org/multipage/custom-elements.html#attr-is](https://html.spec.whatwg.org/multipage/custom-elements.html#attr-is)

#### Inherited from

`HTMLAttributes.is`

#### Source

node\_modules/@types/react/index.d.ts:2956

***

### itemID?

> `optional` **itemID**: `string`

#### Inherited from

`HTMLAttributes.itemID`

#### Source

node\_modules/@types/react/index.d.ts:2940

***

### itemProp?

> `optional` **itemProp**: `string`

#### Inherited from

`HTMLAttributes.itemProp`

#### Source

node\_modules/@types/react/index.d.ts:2937

***

### itemRef?

> `optional` **itemRef**: `string`

#### Inherited from

`HTMLAttributes.itemRef`

#### Source

node\_modules/@types/react/index.d.ts:2941

***

### itemScope?

> `optional` **itemScope**: `boolean`

#### Inherited from

`HTMLAttributes.itemScope`

#### Source

node\_modules/@types/react/index.d.ts:2938

***

### itemType?

> `optional` **itemType**: `string`

#### Inherited from

`HTMLAttributes.itemType`

#### Source

node\_modules/@types/react/index.d.ts:2939

***

### label?

> `optional` **label**: `string`

The `<label>` text content. The component does not render a `<label>`
element when this prop is omited, `undefined`, or an empty string.

#### Source

[packages/web/src/lib/fields/Select.component.tsx:33](https://github.com/JoseLion/lynxts/blob/main/packages/web/src/lib/fields/Select.component.tsx#L33)

***

### lang?

> `optional` **lang**: `string`

#### Inherited from

`HTMLAttributes.lang`

#### Source

node\_modules/@types/react/index.d.ts:2904

***

### multiple?

> `optional` **multiple**: `false`

Multiple selection is not supported by this component.

#### Default

```ts
false
```

#### Source

[packages/web/src/lib/fields/Select.component.tsx:39](https://github.com/JoseLion/lynxts/blob/main/packages/web/src/lib/fields/Select.component.tsx#L39)

***

### name

> **name**: `K`

The name of the field as a Path|Path\<T\>.

#### Source

[packages/web/src/lib/fields/Select.component.tsx:43](https://github.com/JoseLion/lynxts/blob/main/packages/web/src/lib/fields/Select.component.tsx#L43)

***

### nonce?

> `optional` **nonce**: `string`

#### Inherited from

`HTMLAttributes.nonce`

#### Source

node\_modules/@types/react/index.d.ts:2905

***

### onAbort?

> `optional` **onAbort**: `ReactEventHandler`\<`HTMLSelectElement`\>

#### Inherited from

`HTMLAttributes.onAbort`

#### Source

node\_modules/@types/react/index.d.ts:2439

***

### onAbortCapture?

> `optional` **onAbortCapture**: `ReactEventHandler`\<`HTMLSelectElement`\>

#### Inherited from

`HTMLAttributes.onAbortCapture`

#### Source

node\_modules/@types/react/index.d.ts:2440

***

### onAnimationEnd?

> `optional` **onAnimationEnd**: `AnimationEventHandler`\<`HTMLSelectElement`\>

#### Inherited from

`HTMLAttributes.onAnimationEnd`

#### Source

node\_modules/@types/react/index.d.ts:2569

***

### onAnimationEndCapture?

> `optional` **onAnimationEndCapture**: `AnimationEventHandler`\<`HTMLSelectElement`\>

#### Inherited from

`HTMLAttributes.onAnimationEndCapture`

#### Source

node\_modules/@types/react/index.d.ts:2570

***

### onAnimationIteration?

> `optional` **onAnimationIteration**: `AnimationEventHandler`\<`HTMLSelectElement`\>

#### Inherited from

`HTMLAttributes.onAnimationIteration`

#### Source

node\_modules/@types/react/index.d.ts:2571

***

### onAnimationIterationCapture?

> `optional` **onAnimationIterationCapture**: `AnimationEventHandler`\<`HTMLSelectElement`\>

#### Inherited from

`HTMLAttributes.onAnimationIterationCapture`

#### Source

node\_modules/@types/react/index.d.ts:2572

***

### onAnimationStart?

> `optional` **onAnimationStart**: `AnimationEventHandler`\<`HTMLSelectElement`\>

#### Inherited from

`HTMLAttributes.onAnimationStart`

#### Source

node\_modules/@types/react/index.d.ts:2567

***

### onAnimationStartCapture?

> `optional` **onAnimationStartCapture**: `AnimationEventHandler`\<`HTMLSelectElement`\>

#### Inherited from

`HTMLAttributes.onAnimationStartCapture`

#### Source

node\_modules/@types/react/index.d.ts:2568

***

### onAuxClick?

> `optional` **onAuxClick**: `MouseEventHandler`\<`HTMLSelectElement`\>

#### Inherited from

`HTMLAttributes.onAuxClick`

#### Source

node\_modules/@types/react/index.d.ts:2487

***

### onAuxClickCapture?

> `optional` **onAuxClickCapture**: `MouseEventHandler`\<`HTMLSelectElement`\>

#### Inherited from

`HTMLAttributes.onAuxClickCapture`

#### Source

node\_modules/@types/react/index.d.ts:2488

***

### onBeforeInput?

> `optional` **onBeforeInput**: `FormEventHandler`\<`HTMLSelectElement`\>

#### Inherited from

`HTMLAttributes.onBeforeInput`

#### Source

node\_modules/@types/react/index.d.ts:2411

***

### onBeforeInputCapture?

> `optional` **onBeforeInputCapture**: `FormEventHandler`\<`HTMLSelectElement`\>

#### Inherited from

`HTMLAttributes.onBeforeInputCapture`

#### Source

node\_modules/@types/react/index.d.ts:2412

***

### onBlur?

> `optional` **onBlur**: `FocusEventHandler`\<`HTMLSelectElement`\>

#### Inherited from

`HTMLAttributes.onBlur`

#### Source

node\_modules/@types/react/index.d.ts:2405

***

### onBlurCapture?

> `optional` **onBlurCapture**: `FocusEventHandler`\<`HTMLSelectElement`\>

#### Inherited from

`HTMLAttributes.onBlurCapture`

#### Source

node\_modules/@types/react/index.d.ts:2406

***

### onCanPlay?

> `optional` **onCanPlay**: `ReactEventHandler`\<`HTMLSelectElement`\>

#### Inherited from

`HTMLAttributes.onCanPlay`

#### Source

node\_modules/@types/react/index.d.ts:2441

***

### onCanPlayCapture?

> `optional` **onCanPlayCapture**: `ReactEventHandler`\<`HTMLSelectElement`\>

#### Inherited from

`HTMLAttributes.onCanPlayCapture`

#### Source

node\_modules/@types/react/index.d.ts:2442

***

### onCanPlayThrough?

> `optional` **onCanPlayThrough**: `ReactEventHandler`\<`HTMLSelectElement`\>

#### Inherited from

`HTMLAttributes.onCanPlayThrough`

#### Source

node\_modules/@types/react/index.d.ts:2443

***

### onCanPlayThroughCapture?

> `optional` **onCanPlayThroughCapture**: `ReactEventHandler`\<`HTMLSelectElement`\>

#### Inherited from

`HTMLAttributes.onCanPlayThroughCapture`

#### Source

node\_modules/@types/react/index.d.ts:2444

***

### onChange?

> `optional` **onChange**: `FormEventHandler`\<`HTMLSelectElement`\>

#### Inherited from

`HTMLAttributes.onChange`

#### Source

node\_modules/@types/react/index.d.ts:2409

***

### onChangeCapture?

> `optional` **onChangeCapture**: `FormEventHandler`\<`HTMLSelectElement`\>

#### Inherited from

`HTMLAttributes.onChangeCapture`

#### Source

node\_modules/@types/react/index.d.ts:2410

***

### onClick?

> `optional` **onClick**: `MouseEventHandler`\<`HTMLSelectElement`\>

#### Inherited from

`HTMLAttributes.onClick`

#### Source

node\_modules/@types/react/index.d.ts:2489

***

### onClickCapture?

> `optional` **onClickCapture**: `MouseEventHandler`\<`HTMLSelectElement`\>

#### Inherited from

`HTMLAttributes.onClickCapture`

#### Source

node\_modules/@types/react/index.d.ts:2490

***

### onCompositionEnd?

> `optional` **onCompositionEnd**: `CompositionEventHandler`\<`HTMLSelectElement`\>

#### Inherited from

`HTMLAttributes.onCompositionEnd`

#### Source

node\_modules/@types/react/index.d.ts:2395

***

### onCompositionEndCapture?

> `optional` **onCompositionEndCapture**: `CompositionEventHandler`\<`HTMLSelectElement`\>

#### Inherited from

`HTMLAttributes.onCompositionEndCapture`

#### Source

node\_modules/@types/react/index.d.ts:2396

***

### onCompositionStart?

> `optional` **onCompositionStart**: `CompositionEventHandler`\<`HTMLSelectElement`\>

#### Inherited from

`HTMLAttributes.onCompositionStart`

#### Source

node\_modules/@types/react/index.d.ts:2397

***

### onCompositionStartCapture?

> `optional` **onCompositionStartCapture**: `CompositionEventHandler`\<`HTMLSelectElement`\>

#### Inherited from

`HTMLAttributes.onCompositionStartCapture`

#### Source

node\_modules/@types/react/index.d.ts:2398

***

### onCompositionUpdate?

> `optional` **onCompositionUpdate**: `CompositionEventHandler`\<`HTMLSelectElement`\>

#### Inherited from

`HTMLAttributes.onCompositionUpdate`

#### Source

node\_modules/@types/react/index.d.ts:2399

***

### onCompositionUpdateCapture?

> `optional` **onCompositionUpdateCapture**: `CompositionEventHandler`\<`HTMLSelectElement`\>

#### Inherited from

`HTMLAttributes.onCompositionUpdateCapture`

#### Source

node\_modules/@types/react/index.d.ts:2400

***

### onContextMenu?

> `optional` **onContextMenu**: `MouseEventHandler`\<`HTMLSelectElement`\>

#### Inherited from

`HTMLAttributes.onContextMenu`

#### Source

node\_modules/@types/react/index.d.ts:2491

***

### onContextMenuCapture?

> `optional` **onContextMenuCapture**: `MouseEventHandler`\<`HTMLSelectElement`\>

#### Inherited from

`HTMLAttributes.onContextMenuCapture`

#### Source

node\_modules/@types/react/index.d.ts:2492

***

### onCopy?

> `optional` **onCopy**: `ClipboardEventHandler`\<`HTMLSelectElement`\>

#### Inherited from

`HTMLAttributes.onCopy`

#### Source

node\_modules/@types/react/index.d.ts:2387

***

### onCopyCapture?

> `optional` **onCopyCapture**: `ClipboardEventHandler`\<`HTMLSelectElement`\>

#### Inherited from

`HTMLAttributes.onCopyCapture`

#### Source

node\_modules/@types/react/index.d.ts:2388

***

### onCut?

> `optional` **onCut**: `ClipboardEventHandler`\<`HTMLSelectElement`\>

#### Inherited from

`HTMLAttributes.onCut`

#### Source

node\_modules/@types/react/index.d.ts:2389

***

### onCutCapture?

> `optional` **onCutCapture**: `ClipboardEventHandler`\<`HTMLSelectElement`\>

#### Inherited from

`HTMLAttributes.onCutCapture`

#### Source

node\_modules/@types/react/index.d.ts:2390

***

### onDoubleClick?

> `optional` **onDoubleClick**: `MouseEventHandler`\<`HTMLSelectElement`\>

#### Inherited from

`HTMLAttributes.onDoubleClick`

#### Source

node\_modules/@types/react/index.d.ts:2493

***

### onDoubleClickCapture?

> `optional` **onDoubleClickCapture**: `MouseEventHandler`\<`HTMLSelectElement`\>

#### Inherited from

`HTMLAttributes.onDoubleClickCapture`

#### Source

node\_modules/@types/react/index.d.ts:2494

***

### onDrag?

> `optional` **onDrag**: `DragEventHandler`\<`HTMLSelectElement`\>

#### Inherited from

`HTMLAttributes.onDrag`

#### Source

node\_modules/@types/react/index.d.ts:2495

***

### onDragCapture?

> `optional` **onDragCapture**: `DragEventHandler`\<`HTMLSelectElement`\>

#### Inherited from

`HTMLAttributes.onDragCapture`

#### Source

node\_modules/@types/react/index.d.ts:2496

***

### onDragEnd?

> `optional` **onDragEnd**: `DragEventHandler`\<`HTMLSelectElement`\>

#### Inherited from

`HTMLAttributes.onDragEnd`

#### Source

node\_modules/@types/react/index.d.ts:2497

***

### onDragEndCapture?

> `optional` **onDragEndCapture**: `DragEventHandler`\<`HTMLSelectElement`\>

#### Inherited from

`HTMLAttributes.onDragEndCapture`

#### Source

node\_modules/@types/react/index.d.ts:2498

***

### onDragEnter?

> `optional` **onDragEnter**: `DragEventHandler`\<`HTMLSelectElement`\>

#### Inherited from

`HTMLAttributes.onDragEnter`

#### Source

node\_modules/@types/react/index.d.ts:2499

***

### onDragEnterCapture?

> `optional` **onDragEnterCapture**: `DragEventHandler`\<`HTMLSelectElement`\>

#### Inherited from

`HTMLAttributes.onDragEnterCapture`

#### Source

node\_modules/@types/react/index.d.ts:2500

***

### onDragExit?

> `optional` **onDragExit**: `DragEventHandler`\<`HTMLSelectElement`\>

#### Inherited from

`HTMLAttributes.onDragExit`

#### Source

node\_modules/@types/react/index.d.ts:2501

***

### onDragExitCapture?

> `optional` **onDragExitCapture**: `DragEventHandler`\<`HTMLSelectElement`\>

#### Inherited from

`HTMLAttributes.onDragExitCapture`

#### Source

node\_modules/@types/react/index.d.ts:2502

***

### onDragLeave?

> `optional` **onDragLeave**: `DragEventHandler`\<`HTMLSelectElement`\>

#### Inherited from

`HTMLAttributes.onDragLeave`

#### Source

node\_modules/@types/react/index.d.ts:2503

***

### onDragLeaveCapture?

> `optional` **onDragLeaveCapture**: `DragEventHandler`\<`HTMLSelectElement`\>

#### Inherited from

`HTMLAttributes.onDragLeaveCapture`

#### Source

node\_modules/@types/react/index.d.ts:2504

***

### onDragOver?

> `optional` **onDragOver**: `DragEventHandler`\<`HTMLSelectElement`\>

#### Inherited from

`HTMLAttributes.onDragOver`

#### Source

node\_modules/@types/react/index.d.ts:2505

***

### onDragOverCapture?

> `optional` **onDragOverCapture**: `DragEventHandler`\<`HTMLSelectElement`\>

#### Inherited from

`HTMLAttributes.onDragOverCapture`

#### Source

node\_modules/@types/react/index.d.ts:2506

***

### onDragStart?

> `optional` **onDragStart**: `DragEventHandler`\<`HTMLSelectElement`\>

#### Inherited from

`HTMLAttributes.onDragStart`

#### Source

node\_modules/@types/react/index.d.ts:2507

***

### onDragStartCapture?

> `optional` **onDragStartCapture**: `DragEventHandler`\<`HTMLSelectElement`\>

#### Inherited from

`HTMLAttributes.onDragStartCapture`

#### Source

node\_modules/@types/react/index.d.ts:2508

***

### onDrop?

> `optional` **onDrop**: `DragEventHandler`\<`HTMLSelectElement`\>

#### Inherited from

`HTMLAttributes.onDrop`

#### Source

node\_modules/@types/react/index.d.ts:2509

***

### onDropCapture?

> `optional` **onDropCapture**: `DragEventHandler`\<`HTMLSelectElement`\>

#### Inherited from

`HTMLAttributes.onDropCapture`

#### Source

node\_modules/@types/react/index.d.ts:2510

***

### onDurationChange?

> `optional` **onDurationChange**: `ReactEventHandler`\<`HTMLSelectElement`\>

#### Inherited from

`HTMLAttributes.onDurationChange`

#### Source

node\_modules/@types/react/index.d.ts:2445

***

### onDurationChangeCapture?

> `optional` **onDurationChangeCapture**: `ReactEventHandler`\<`HTMLSelectElement`\>

#### Inherited from

`HTMLAttributes.onDurationChangeCapture`

#### Source

node\_modules/@types/react/index.d.ts:2446

***

### onEmptied?

> `optional` **onEmptied**: `ReactEventHandler`\<`HTMLSelectElement`\>

#### Inherited from

`HTMLAttributes.onEmptied`

#### Source

node\_modules/@types/react/index.d.ts:2447

***

### onEmptiedCapture?

> `optional` **onEmptiedCapture**: `ReactEventHandler`\<`HTMLSelectElement`\>

#### Inherited from

`HTMLAttributes.onEmptiedCapture`

#### Source

node\_modules/@types/react/index.d.ts:2448

***

### onEncrypted?

> `optional` **onEncrypted**: `ReactEventHandler`\<`HTMLSelectElement`\>

#### Inherited from

`HTMLAttributes.onEncrypted`

#### Source

node\_modules/@types/react/index.d.ts:2449

***

### onEncryptedCapture?

> `optional` **onEncryptedCapture**: `ReactEventHandler`\<`HTMLSelectElement`\>

#### Inherited from

`HTMLAttributes.onEncryptedCapture`

#### Source

node\_modules/@types/react/index.d.ts:2450

***

### onEnded?

> `optional` **onEnded**: `ReactEventHandler`\<`HTMLSelectElement`\>

#### Inherited from

`HTMLAttributes.onEnded`

#### Source

node\_modules/@types/react/index.d.ts:2451

***

### onEndedCapture?

> `optional` **onEndedCapture**: `ReactEventHandler`\<`HTMLSelectElement`\>

#### Inherited from

`HTMLAttributes.onEndedCapture`

#### Source

node\_modules/@types/react/index.d.ts:2452

***

### onError?

> `optional` **onError**: `ReactEventHandler`\<`HTMLSelectElement`\>

#### Inherited from

`HTMLAttributes.onError`

#### Source

node\_modules/@types/react/index.d.ts:2425

***

### onErrorCapture?

> `optional` **onErrorCapture**: `ReactEventHandler`\<`HTMLSelectElement`\>

#### Inherited from

`HTMLAttributes.onErrorCapture`

#### Source

node\_modules/@types/react/index.d.ts:2426

***

### onFocus?

> `optional` **onFocus**: `FocusEventHandler`\<`HTMLSelectElement`\>

#### Inherited from

`HTMLAttributes.onFocus`

#### Source

node\_modules/@types/react/index.d.ts:2403

***

### onFocusCapture?

> `optional` **onFocusCapture**: `FocusEventHandler`\<`HTMLSelectElement`\>

#### Inherited from

`HTMLAttributes.onFocusCapture`

#### Source

node\_modules/@types/react/index.d.ts:2404

***

### onGotPointerCapture?

> `optional` **onGotPointerCapture**: `PointerEventHandler`\<`HTMLSelectElement`\>

#### Inherited from

`HTMLAttributes.onGotPointerCapture`

#### Source

node\_modules/@types/react/index.d.ts:2553

***

### onGotPointerCaptureCapture?

> `optional` **onGotPointerCaptureCapture**: `PointerEventHandler`\<`HTMLSelectElement`\>

#### Inherited from

`HTMLAttributes.onGotPointerCaptureCapture`

#### Source

node\_modules/@types/react/index.d.ts:2554

***

### onInput?

> `optional` **onInput**: `FormEventHandler`\<`HTMLSelectElement`\>

#### Inherited from

`HTMLAttributes.onInput`

#### Source

node\_modules/@types/react/index.d.ts:2413

***

### onInputCapture?

> `optional` **onInputCapture**: `FormEventHandler`\<`HTMLSelectElement`\>

#### Inherited from

`HTMLAttributes.onInputCapture`

#### Source

node\_modules/@types/react/index.d.ts:2414

***

### onInvalid?

> `optional` **onInvalid**: `FormEventHandler`\<`HTMLSelectElement`\>

#### Inherited from

`HTMLAttributes.onInvalid`

#### Source

node\_modules/@types/react/index.d.ts:2419

***

### onInvalidCapture?

> `optional` **onInvalidCapture**: `FormEventHandler`\<`HTMLSelectElement`\>

#### Inherited from

`HTMLAttributes.onInvalidCapture`

#### Source

node\_modules/@types/react/index.d.ts:2420

***

### onKeyDown?

> `optional` **onKeyDown**: `KeyboardEventHandler`\<`HTMLSelectElement`\>

#### Inherited from

`HTMLAttributes.onKeyDown`

#### Source

node\_modules/@types/react/index.d.ts:2429

***

### onKeyDownCapture?

> `optional` **onKeyDownCapture**: `KeyboardEventHandler`\<`HTMLSelectElement`\>

#### Inherited from

`HTMLAttributes.onKeyDownCapture`

#### Source

node\_modules/@types/react/index.d.ts:2430

***

### ~~onKeyPress?~~

> `optional` **onKeyPress**: `KeyboardEventHandler`\<`HTMLSelectElement`\>

#### Deprecated

#### Inherited from

`HTMLAttributes.onKeyPress`

#### Source

node\_modules/@types/react/index.d.ts:2432

***

### ~~onKeyPressCapture?~~

> `optional` **onKeyPressCapture**: `KeyboardEventHandler`\<`HTMLSelectElement`\>

#### Deprecated

#### Inherited from

`HTMLAttributes.onKeyPressCapture`

#### Source

node\_modules/@types/react/index.d.ts:2434

***

### onKeyUp?

> `optional` **onKeyUp**: `KeyboardEventHandler`\<`HTMLSelectElement`\>

#### Inherited from

`HTMLAttributes.onKeyUp`

#### Source

node\_modules/@types/react/index.d.ts:2435

***

### onKeyUpCapture?

> `optional` **onKeyUpCapture**: `KeyboardEventHandler`\<`HTMLSelectElement`\>

#### Inherited from

`HTMLAttributes.onKeyUpCapture`

#### Source

node\_modules/@types/react/index.d.ts:2436

***

### onLoad?

> `optional` **onLoad**: `ReactEventHandler`\<`HTMLSelectElement`\>

#### Inherited from

`HTMLAttributes.onLoad`

#### Source

node\_modules/@types/react/index.d.ts:2423

***

### onLoadCapture?

> `optional` **onLoadCapture**: `ReactEventHandler`\<`HTMLSelectElement`\>

#### Inherited from

`HTMLAttributes.onLoadCapture`

#### Source

node\_modules/@types/react/index.d.ts:2424

***

### onLoadStart?

> `optional` **onLoadStart**: `ReactEventHandler`\<`HTMLSelectElement`\>

#### Inherited from

`HTMLAttributes.onLoadStart`

#### Source

node\_modules/@types/react/index.d.ts:2457

***

### onLoadStartCapture?

> `optional` **onLoadStartCapture**: `ReactEventHandler`\<`HTMLSelectElement`\>

#### Inherited from

`HTMLAttributes.onLoadStartCapture`

#### Source

node\_modules/@types/react/index.d.ts:2458

***

### onLoadedData?

> `optional` **onLoadedData**: `ReactEventHandler`\<`HTMLSelectElement`\>

#### Inherited from

`HTMLAttributes.onLoadedData`

#### Source

node\_modules/@types/react/index.d.ts:2453

***

### onLoadedDataCapture?

> `optional` **onLoadedDataCapture**: `ReactEventHandler`\<`HTMLSelectElement`\>

#### Inherited from

`HTMLAttributes.onLoadedDataCapture`

#### Source

node\_modules/@types/react/index.d.ts:2454

***

### onLoadedMetadata?

> `optional` **onLoadedMetadata**: `ReactEventHandler`\<`HTMLSelectElement`\>

#### Inherited from

`HTMLAttributes.onLoadedMetadata`

#### Source

node\_modules/@types/react/index.d.ts:2455

***

### onLoadedMetadataCapture?

> `optional` **onLoadedMetadataCapture**: `ReactEventHandler`\<`HTMLSelectElement`\>

#### Inherited from

`HTMLAttributes.onLoadedMetadataCapture`

#### Source

node\_modules/@types/react/index.d.ts:2456

***

### onLostPointerCapture?

> `optional` **onLostPointerCapture**: `PointerEventHandler`\<`HTMLSelectElement`\>

#### Inherited from

`HTMLAttributes.onLostPointerCapture`

#### Source

node\_modules/@types/react/index.d.ts:2555

***

### onLostPointerCaptureCapture?

> `optional` **onLostPointerCaptureCapture**: `PointerEventHandler`\<`HTMLSelectElement`\>

#### Inherited from

`HTMLAttributes.onLostPointerCaptureCapture`

#### Source

node\_modules/@types/react/index.d.ts:2556

***

### onMouseDown?

> `optional` **onMouseDown**: `MouseEventHandler`\<`HTMLSelectElement`\>

#### Inherited from

`HTMLAttributes.onMouseDown`

#### Source

node\_modules/@types/react/index.d.ts:2511

***

### onMouseDownCapture?

> `optional` **onMouseDownCapture**: `MouseEventHandler`\<`HTMLSelectElement`\>

#### Inherited from

`HTMLAttributes.onMouseDownCapture`

#### Source

node\_modules/@types/react/index.d.ts:2512

***

### onMouseEnter?

> `optional` **onMouseEnter**: `MouseEventHandler`\<`HTMLSelectElement`\>

#### Inherited from

`HTMLAttributes.onMouseEnter`

#### Source

node\_modules/@types/react/index.d.ts:2513

***

### onMouseLeave?

> `optional` **onMouseLeave**: `MouseEventHandler`\<`HTMLSelectElement`\>

#### Inherited from

`HTMLAttributes.onMouseLeave`

#### Source

node\_modules/@types/react/index.d.ts:2514

***

### onMouseMove?

> `optional` **onMouseMove**: `MouseEventHandler`\<`HTMLSelectElement`\>

#### Inherited from

`HTMLAttributes.onMouseMove`

#### Source

node\_modules/@types/react/index.d.ts:2515

***

### onMouseMoveCapture?

> `optional` **onMouseMoveCapture**: `MouseEventHandler`\<`HTMLSelectElement`\>

#### Inherited from

`HTMLAttributes.onMouseMoveCapture`

#### Source

node\_modules/@types/react/index.d.ts:2516

***

### onMouseOut?

> `optional` **onMouseOut**: `MouseEventHandler`\<`HTMLSelectElement`\>

#### Inherited from

`HTMLAttributes.onMouseOut`

#### Source

node\_modules/@types/react/index.d.ts:2517

***

### onMouseOutCapture?

> `optional` **onMouseOutCapture**: `MouseEventHandler`\<`HTMLSelectElement`\>

#### Inherited from

`HTMLAttributes.onMouseOutCapture`

#### Source

node\_modules/@types/react/index.d.ts:2518

***

### onMouseOver?

> `optional` **onMouseOver**: `MouseEventHandler`\<`HTMLSelectElement`\>

#### Inherited from

`HTMLAttributes.onMouseOver`

#### Source

node\_modules/@types/react/index.d.ts:2519

***

### onMouseOverCapture?

> `optional` **onMouseOverCapture**: `MouseEventHandler`\<`HTMLSelectElement`\>

#### Inherited from

`HTMLAttributes.onMouseOverCapture`

#### Source

node\_modules/@types/react/index.d.ts:2520

***

### onMouseUp?

> `optional` **onMouseUp**: `MouseEventHandler`\<`HTMLSelectElement`\>

#### Inherited from

`HTMLAttributes.onMouseUp`

#### Source

node\_modules/@types/react/index.d.ts:2521

***

### onMouseUpCapture?

> `optional` **onMouseUpCapture**: `MouseEventHandler`\<`HTMLSelectElement`\>

#### Inherited from

`HTMLAttributes.onMouseUpCapture`

#### Source

node\_modules/@types/react/index.d.ts:2522

***

### onPaste?

> `optional` **onPaste**: `ClipboardEventHandler`\<`HTMLSelectElement`\>

#### Inherited from

`HTMLAttributes.onPaste`

#### Source

node\_modules/@types/react/index.d.ts:2391

***

### onPasteCapture?

> `optional` **onPasteCapture**: `ClipboardEventHandler`\<`HTMLSelectElement`\>

#### Inherited from

`HTMLAttributes.onPasteCapture`

#### Source

node\_modules/@types/react/index.d.ts:2392

***

### onPause?

> `optional` **onPause**: `ReactEventHandler`\<`HTMLSelectElement`\>

#### Inherited from

`HTMLAttributes.onPause`

#### Source

node\_modules/@types/react/index.d.ts:2459

***

### onPauseCapture?

> `optional` **onPauseCapture**: `ReactEventHandler`\<`HTMLSelectElement`\>

#### Inherited from

`HTMLAttributes.onPauseCapture`

#### Source

node\_modules/@types/react/index.d.ts:2460

***

### onPlay?

> `optional` **onPlay**: `ReactEventHandler`\<`HTMLSelectElement`\>

#### Inherited from

`HTMLAttributes.onPlay`

#### Source

node\_modules/@types/react/index.d.ts:2461

***

### onPlayCapture?

> `optional` **onPlayCapture**: `ReactEventHandler`\<`HTMLSelectElement`\>

#### Inherited from

`HTMLAttributes.onPlayCapture`

#### Source

node\_modules/@types/react/index.d.ts:2462

***

### onPlaying?

> `optional` **onPlaying**: `ReactEventHandler`\<`HTMLSelectElement`\>

#### Inherited from

`HTMLAttributes.onPlaying`

#### Source

node\_modules/@types/react/index.d.ts:2463

***

### onPlayingCapture?

> `optional` **onPlayingCapture**: `ReactEventHandler`\<`HTMLSelectElement`\>

#### Inherited from

`HTMLAttributes.onPlayingCapture`

#### Source

node\_modules/@types/react/index.d.ts:2464

***

### onPointerCancel?

> `optional` **onPointerCancel**: `PointerEventHandler`\<`HTMLSelectElement`\>

#### Inherited from

`HTMLAttributes.onPointerCancel`

#### Source

node\_modules/@types/react/index.d.ts:2545

***

### onPointerCancelCapture?

> `optional` **onPointerCancelCapture**: `PointerEventHandler`\<`HTMLSelectElement`\>

#### Inherited from

`HTMLAttributes.onPointerCancelCapture`

#### Source

node\_modules/@types/react/index.d.ts:2546

***

### onPointerDown?

> `optional` **onPointerDown**: `PointerEventHandler`\<`HTMLSelectElement`\>

#### Inherited from

`HTMLAttributes.onPointerDown`

#### Source

node\_modules/@types/react/index.d.ts:2539

***

### onPointerDownCapture?

> `optional` **onPointerDownCapture**: `PointerEventHandler`\<`HTMLSelectElement`\>

#### Inherited from

`HTMLAttributes.onPointerDownCapture`

#### Source

node\_modules/@types/react/index.d.ts:2540

***

### onPointerEnter?

> `optional` **onPointerEnter**: `PointerEventHandler`\<`HTMLSelectElement`\>

#### Inherited from

`HTMLAttributes.onPointerEnter`

#### Source

node\_modules/@types/react/index.d.ts:2547

***

### onPointerLeave?

> `optional` **onPointerLeave**: `PointerEventHandler`\<`HTMLSelectElement`\>

#### Inherited from

`HTMLAttributes.onPointerLeave`

#### Source

node\_modules/@types/react/index.d.ts:2548

***

### onPointerMove?

> `optional` **onPointerMove**: `PointerEventHandler`\<`HTMLSelectElement`\>

#### Inherited from

`HTMLAttributes.onPointerMove`

#### Source

node\_modules/@types/react/index.d.ts:2541

***

### onPointerMoveCapture?

> `optional` **onPointerMoveCapture**: `PointerEventHandler`\<`HTMLSelectElement`\>

#### Inherited from

`HTMLAttributes.onPointerMoveCapture`

#### Source

node\_modules/@types/react/index.d.ts:2542

***

### onPointerOut?

> `optional` **onPointerOut**: `PointerEventHandler`\<`HTMLSelectElement`\>

#### Inherited from

`HTMLAttributes.onPointerOut`

#### Source

node\_modules/@types/react/index.d.ts:2551

***

### onPointerOutCapture?

> `optional` **onPointerOutCapture**: `PointerEventHandler`\<`HTMLSelectElement`\>

#### Inherited from

`HTMLAttributes.onPointerOutCapture`

#### Source

node\_modules/@types/react/index.d.ts:2552

***

### onPointerOver?

> `optional` **onPointerOver**: `PointerEventHandler`\<`HTMLSelectElement`\>

#### Inherited from

`HTMLAttributes.onPointerOver`

#### Source

node\_modules/@types/react/index.d.ts:2549

***

### onPointerOverCapture?

> `optional` **onPointerOverCapture**: `PointerEventHandler`\<`HTMLSelectElement`\>

#### Inherited from

`HTMLAttributes.onPointerOverCapture`

#### Source

node\_modules/@types/react/index.d.ts:2550

***

### onPointerUp?

> `optional` **onPointerUp**: `PointerEventHandler`\<`HTMLSelectElement`\>

#### Inherited from

`HTMLAttributes.onPointerUp`

#### Source

node\_modules/@types/react/index.d.ts:2543

***

### onPointerUpCapture?

> `optional` **onPointerUpCapture**: `PointerEventHandler`\<`HTMLSelectElement`\>

#### Inherited from

`HTMLAttributes.onPointerUpCapture`

#### Source

node\_modules/@types/react/index.d.ts:2544

***

### onProgress?

> `optional` **onProgress**: `ReactEventHandler`\<`HTMLSelectElement`\>

#### Inherited from

`HTMLAttributes.onProgress`

#### Source

node\_modules/@types/react/index.d.ts:2465

***

### onProgressCapture?

> `optional` **onProgressCapture**: `ReactEventHandler`\<`HTMLSelectElement`\>

#### Inherited from

`HTMLAttributes.onProgressCapture`

#### Source

node\_modules/@types/react/index.d.ts:2466

***

### onRateChange?

> `optional` **onRateChange**: `ReactEventHandler`\<`HTMLSelectElement`\>

#### Inherited from

`HTMLAttributes.onRateChange`

#### Source

node\_modules/@types/react/index.d.ts:2467

***

### onRateChangeCapture?

> `optional` **onRateChangeCapture**: `ReactEventHandler`\<`HTMLSelectElement`\>

#### Inherited from

`HTMLAttributes.onRateChangeCapture`

#### Source

node\_modules/@types/react/index.d.ts:2468

***

### onReset?

> `optional` **onReset**: `FormEventHandler`\<`HTMLSelectElement`\>

#### Inherited from

`HTMLAttributes.onReset`

#### Source

node\_modules/@types/react/index.d.ts:2415

***

### onResetCapture?

> `optional` **onResetCapture**: `FormEventHandler`\<`HTMLSelectElement`\>

#### Inherited from

`HTMLAttributes.onResetCapture`

#### Source

node\_modules/@types/react/index.d.ts:2416

***

### onResize?

> `optional` **onResize**: `ReactEventHandler`\<`HTMLSelectElement`\>

#### Inherited from

`HTMLAttributes.onResize`

#### Source

node\_modules/@types/react/index.d.ts:2469

***

### onResizeCapture?

> `optional` **onResizeCapture**: `ReactEventHandler`\<`HTMLSelectElement`\>

#### Inherited from

`HTMLAttributes.onResizeCapture`

#### Source

node\_modules/@types/react/index.d.ts:2470

***

### onScroll?

> `optional` **onScroll**: `UIEventHandler`\<`HTMLSelectElement`\>

#### Inherited from

`HTMLAttributes.onScroll`

#### Source

node\_modules/@types/react/index.d.ts:2559

***

### onScrollCapture?

> `optional` **onScrollCapture**: `UIEventHandler`\<`HTMLSelectElement`\>

#### Inherited from

`HTMLAttributes.onScrollCapture`

#### Source

node\_modules/@types/react/index.d.ts:2560

***

### onSeeked?

> `optional` **onSeeked**: `ReactEventHandler`\<`HTMLSelectElement`\>

#### Inherited from

`HTMLAttributes.onSeeked`

#### Source

node\_modules/@types/react/index.d.ts:2471

***

### onSeekedCapture?

> `optional` **onSeekedCapture**: `ReactEventHandler`\<`HTMLSelectElement`\>

#### Inherited from

`HTMLAttributes.onSeekedCapture`

#### Source

node\_modules/@types/react/index.d.ts:2472

***

### onSeeking?

> `optional` **onSeeking**: `ReactEventHandler`\<`HTMLSelectElement`\>

#### Inherited from

`HTMLAttributes.onSeeking`

#### Source

node\_modules/@types/react/index.d.ts:2473

***

### onSeekingCapture?

> `optional` **onSeekingCapture**: `ReactEventHandler`\<`HTMLSelectElement`\>

#### Inherited from

`HTMLAttributes.onSeekingCapture`

#### Source

node\_modules/@types/react/index.d.ts:2474

***

### onSelect?

> `optional` **onSelect**: `ReactEventHandler`\<`HTMLSelectElement`\>

#### Inherited from

`HTMLAttributes.onSelect`

#### Source

node\_modules/@types/react/index.d.ts:2525

***

### onSelectCapture?

> `optional` **onSelectCapture**: `ReactEventHandler`\<`HTMLSelectElement`\>

#### Inherited from

`HTMLAttributes.onSelectCapture`

#### Source

node\_modules/@types/react/index.d.ts:2526

***

### onStalled?

> `optional` **onStalled**: `ReactEventHandler`\<`HTMLSelectElement`\>

#### Inherited from

`HTMLAttributes.onStalled`

#### Source

node\_modules/@types/react/index.d.ts:2475

***

### onStalledCapture?

> `optional` **onStalledCapture**: `ReactEventHandler`\<`HTMLSelectElement`\>

#### Inherited from

`HTMLAttributes.onStalledCapture`

#### Source

node\_modules/@types/react/index.d.ts:2476

***

### onSubmit?

> `optional` **onSubmit**: `FormEventHandler`\<`HTMLSelectElement`\>

#### Inherited from

`HTMLAttributes.onSubmit`

#### Source

node\_modules/@types/react/index.d.ts:2417

***

### onSubmitCapture?

> `optional` **onSubmitCapture**: `FormEventHandler`\<`HTMLSelectElement`\>

#### Inherited from

`HTMLAttributes.onSubmitCapture`

#### Source

node\_modules/@types/react/index.d.ts:2418

***

### onSuspend?

> `optional` **onSuspend**: `ReactEventHandler`\<`HTMLSelectElement`\>

#### Inherited from

`HTMLAttributes.onSuspend`

#### Source

node\_modules/@types/react/index.d.ts:2477

***

### onSuspendCapture?

> `optional` **onSuspendCapture**: `ReactEventHandler`\<`HTMLSelectElement`\>

#### Inherited from

`HTMLAttributes.onSuspendCapture`

#### Source

node\_modules/@types/react/index.d.ts:2478

***

### onTimeUpdate?

> `optional` **onTimeUpdate**: `ReactEventHandler`\<`HTMLSelectElement`\>

#### Inherited from

`HTMLAttributes.onTimeUpdate`

#### Source

node\_modules/@types/react/index.d.ts:2479

***

### onTimeUpdateCapture?

> `optional` **onTimeUpdateCapture**: `ReactEventHandler`\<`HTMLSelectElement`\>

#### Inherited from

`HTMLAttributes.onTimeUpdateCapture`

#### Source

node\_modules/@types/react/index.d.ts:2480

***

### onTouchCancel?

> `optional` **onTouchCancel**: `TouchEventHandler`\<`HTMLSelectElement`\>

#### Inherited from

`HTMLAttributes.onTouchCancel`

#### Source

node\_modules/@types/react/index.d.ts:2529

***

### onTouchCancelCapture?

> `optional` **onTouchCancelCapture**: `TouchEventHandler`\<`HTMLSelectElement`\>

#### Inherited from

`HTMLAttributes.onTouchCancelCapture`

#### Source

node\_modules/@types/react/index.d.ts:2530

***

### onTouchEnd?

> `optional` **onTouchEnd**: `TouchEventHandler`\<`HTMLSelectElement`\>

#### Inherited from

`HTMLAttributes.onTouchEnd`

#### Source

node\_modules/@types/react/index.d.ts:2531

***

### onTouchEndCapture?

> `optional` **onTouchEndCapture**: `TouchEventHandler`\<`HTMLSelectElement`\>

#### Inherited from

`HTMLAttributes.onTouchEndCapture`

#### Source

node\_modules/@types/react/index.d.ts:2532

***

### onTouchMove?

> `optional` **onTouchMove**: `TouchEventHandler`\<`HTMLSelectElement`\>

#### Inherited from

`HTMLAttributes.onTouchMove`

#### Source

node\_modules/@types/react/index.d.ts:2533

***

### onTouchMoveCapture?

> `optional` **onTouchMoveCapture**: `TouchEventHandler`\<`HTMLSelectElement`\>

#### Inherited from

`HTMLAttributes.onTouchMoveCapture`

#### Source

node\_modules/@types/react/index.d.ts:2534

***

### onTouchStart?

> `optional` **onTouchStart**: `TouchEventHandler`\<`HTMLSelectElement`\>

#### Inherited from

`HTMLAttributes.onTouchStart`

#### Source

node\_modules/@types/react/index.d.ts:2535

***

### onTouchStartCapture?

> `optional` **onTouchStartCapture**: `TouchEventHandler`\<`HTMLSelectElement`\>

#### Inherited from

`HTMLAttributes.onTouchStartCapture`

#### Source

node\_modules/@types/react/index.d.ts:2536

***

### onTransitionEnd?

> `optional` **onTransitionEnd**: `TransitionEventHandler`\<`HTMLSelectElement`\>

#### Inherited from

`HTMLAttributes.onTransitionEnd`

#### Source

node\_modules/@types/react/index.d.ts:2575

***

### onTransitionEndCapture?

> `optional` **onTransitionEndCapture**: `TransitionEventHandler`\<`HTMLSelectElement`\>

#### Inherited from

`HTMLAttributes.onTransitionEndCapture`

#### Source

node\_modules/@types/react/index.d.ts:2576

***

### onVolumeChange?

> `optional` **onVolumeChange**: `ReactEventHandler`\<`HTMLSelectElement`\>

#### Inherited from

`HTMLAttributes.onVolumeChange`

#### Source

node\_modules/@types/react/index.d.ts:2481

***

### onVolumeChangeCapture?

> `optional` **onVolumeChangeCapture**: `ReactEventHandler`\<`HTMLSelectElement`\>

#### Inherited from

`HTMLAttributes.onVolumeChangeCapture`

#### Source

node\_modules/@types/react/index.d.ts:2482

***

### onWaiting?

> `optional` **onWaiting**: `ReactEventHandler`\<`HTMLSelectElement`\>

#### Inherited from

`HTMLAttributes.onWaiting`

#### Source

node\_modules/@types/react/index.d.ts:2483

***

### onWaitingCapture?

> `optional` **onWaitingCapture**: `ReactEventHandler`\<`HTMLSelectElement`\>

#### Inherited from

`HTMLAttributes.onWaitingCapture`

#### Source

node\_modules/@types/react/index.d.ts:2484

***

### onWheel?

> `optional` **onWheel**: `WheelEventHandler`\<`HTMLSelectElement`\>

#### Inherited from

`HTMLAttributes.onWheel`

#### Source

node\_modules/@types/react/index.d.ts:2563

***

### onWheelCapture?

> `optional` **onWheelCapture**: `WheelEventHandler`\<`HTMLSelectElement`\>

#### Inherited from

`HTMLAttributes.onWheelCapture`

#### Source

node\_modules/@types/react/index.d.ts:2564

***

### options

> **options**: `ValueByPath`\<`T`, `K`\>[]

An array of values which will be used to create the `<option>` elements.

#### Source

[packages/web/src/lib/fields/Select.component.tsx:47](https://github.com/JoseLion/lynxts/blob/main/packages/web/src/lib/fields/Select.component.tsx#L47)

***

### prefix?

> `optional` **prefix**: `string`

#### Inherited from

`HTMLAttributes.prefix`

#### Source

node\_modules/@types/react/index.d.ts:2924

***

### property?

> `optional` **property**: `string`

#### Inherited from

`HTMLAttributes.property`

#### Source

node\_modules/@types/react/index.d.ts:2925

***

### radioGroup?

> `optional` **radioGroup**: `string`

#### Inherited from

`HTMLAttributes.radioGroup`

#### Source

node\_modules/@types/react/index.d.ts:2914

***

### rel?

> `optional` **rel**: `string`

#### Inherited from

`HTMLAttributes.rel`

#### Source

node\_modules/@types/react/index.d.ts:2926

***

### requiredText?

> `optional` **requiredText**: `string`

The text to render besides the label text when the field is requried.

#### Default

```ts
"*"
```

#### Source

[packages/web/src/lib/fields/Select.component.tsx:53](https://github.com/JoseLion/lynxts/blob/main/packages/web/src/lib/fields/Select.component.tsx#L53)

***

### resource?

> `optional` **resource**: `string`

#### Inherited from

`HTMLAttributes.resource`

#### Source

node\_modules/@types/react/index.d.ts:2927

***

### results?

> `optional` **results**: `number`

#### Inherited from

`HTMLAttributes.results`

#### Source

node\_modules/@types/react/index.d.ts:2942

***

### rev?

> `optional` **rev**: `string`

#### Inherited from

`HTMLAttributes.rev`

#### Source

node\_modules/@types/react/index.d.ts:2928

***

### role?

> `optional` **role**: `AriaRole`

#### Inherited from

`HTMLAttributes.role`

#### Source

node\_modules/@types/react/index.d.ts:2917

***

### security?

> `optional` **security**: `string`

#### Inherited from

`HTMLAttributes.security`

#### Source

node\_modules/@types/react/index.d.ts:2943

***

### slot?

> `optional` **slot**: `string`

#### Inherited from

`HTMLAttributes.slot`

#### Source

node\_modules/@types/react/index.d.ts:2906

***

### spellCheck?

> `optional` **spellCheck**: `Booleanish`

#### Inherited from

`HTMLAttributes.spellCheck`

#### Source

node\_modules/@types/react/index.d.ts:2907

***

### style?

> `optional` **style**: `CSSProperties`

#### Inherited from

`HTMLAttributes.style`

#### Source

node\_modules/@types/react/index.d.ts:2908

***

### suppressContentEditableWarning?

> `optional` **suppressContentEditableWarning**: `boolean`

#### Inherited from

`HTMLAttributes.suppressContentEditableWarning`

#### Source

node\_modules/@types/react/index.d.ts:2891

***

### suppressHydrationWarning?

> `optional` **suppressHydrationWarning**: `boolean`

#### Inherited from

`HTMLAttributes.suppressHydrationWarning`

#### Source

node\_modules/@types/react/index.d.ts:2892

***

### tabIndex?

> `optional` **tabIndex**: `number`

#### Inherited from

`HTMLAttributes.tabIndex`

#### Source

node\_modules/@types/react/index.d.ts:2909

***

### title?

> `optional` **title**: `string`

#### Inherited from

`HTMLAttributes.title`

#### Source

node\_modules/@types/react/index.d.ts:2910

***

### toText()?

> `optional` **toText**: (`option`) => `string`

Mapper function that allows you to map each option value to its text
representation. Each mapped values should be unique.

#### Default

```ts
option => String(option)
```

#### Parameters

• **option**: `ValueByPath`\<`T`, `K`\>

each option to be mapped

#### Returns

`string`

#### Source

[packages/web/src/lib/fields/Select.component.tsx:63](https://github.com/JoseLion/lynxts/blob/main/packages/web/src/lib/fields/Select.component.tsx#L63)

***

### translate?

> `optional` **translate**: `"yes"` \| `"no"`

#### Inherited from

`HTMLAttributes.translate`

#### Source

node\_modules/@types/react/index.d.ts:2911

***

### typeof?

> `optional` **typeof**: `string`

#### Inherited from

`HTMLAttributes.typeof`

#### Source

node\_modules/@types/react/index.d.ts:2929

***

### unselectable?

> `optional` **unselectable**: `"on"` \| `"off"`

#### Inherited from

`HTMLAttributes.unselectable`

#### Source

node\_modules/@types/react/index.d.ts:2944

***

### unselected?

> `optional` **unselected**: `string`

The text to use whenever the field has no selected values.

#### Default

```ts
"--"
```

#### Source

[packages/web/src/lib/fields/Select.component.tsx:69](https://github.com/JoseLion/lynxts/blob/main/packages/web/src/lib/fields/Select.component.tsx#L69)

***

### vocab?

> `optional` **vocab**: `string`

#### Inherited from

`HTMLAttributes.vocab`

#### Source

node\_modules/@types/react/index.d.ts:2930
