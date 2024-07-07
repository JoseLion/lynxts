[**@lynxts/web**](../README.md) • **Docs**

***

[@lynxts/web](../README.md) / FormProps

# Interface: FormProps\<T\>

From component props

## Extends

- `FormProviderProps`\<`T`\>.`HTMLFormProps`

## Type Parameters

• **T** *extends* `Struct`

struct type of the form values

## Properties

### about?

> `optional` **about**: `string`

#### Inherited from

`HTMLFormProps.about`

#### Defined in

node\_modules/@types/react/index.d.ts:2920

***

### acceptCharset?

> `optional` **acceptCharset**: `string`

#### Inherited from

`HTMLFormProps.acceptCharset`

#### Defined in

node\_modules/@types/react/index.d.ts:3201

***

### accessKey?

> `optional` **accessKey**: `string`

#### Inherited from

`HTMLFormProps.accessKey`

#### Defined in

node\_modules/@types/react/index.d.ts:2895

***

### action?

> `optional` **action**: `string`

#### Inherited from

`HTMLFormProps.action`

#### Defined in

node\_modules/@types/react/index.d.ts:3202

***

### aria-activedescendant?

> `optional` **aria-activedescendant**: `string`

Identifies the currently active element when DOM focus is on a composite widget, textbox, group, or application.

#### Inherited from

`HTMLFormProps.aria-activedescendant`

#### Defined in

node\_modules/@types/react/index.d.ts:2593

***

### aria-atomic?

> `optional` **aria-atomic**: `Booleanish`

Indicates whether assistive technologies will present all, or only parts of, the changed region based on the change notifications defined by the aria-relevant attribute.

#### Inherited from

`HTMLFormProps.aria-atomic`

#### Defined in

node\_modules/@types/react/index.d.ts:2595

***

### aria-autocomplete?

> `optional` **aria-autocomplete**: `"list"` \| `"none"` \| `"inline"` \| `"both"`

Indicates whether inputting text could trigger display of one or more predictions of the user's intended value for an input and specifies how predictions would be
presented if they are made.

#### Inherited from

`HTMLFormProps.aria-autocomplete`

#### Defined in

node\_modules/@types/react/index.d.ts:2600

***

### aria-braillelabel?

> `optional` **aria-braillelabel**: `string`

Defines a string value that labels the current element, which is intended to be converted into Braille.

#### See

aria-label.

#### Inherited from

`HTMLFormProps.aria-braillelabel`

#### Defined in

node\_modules/@types/react/index.d.ts:2606

***

### aria-brailleroledescription?

> `optional` **aria-brailleroledescription**: `string`

Defines a human-readable, author-localized abbreviated description for the role of an element, which is intended to be converted into Braille.

#### See

aria-roledescription.

#### Inherited from

`HTMLFormProps.aria-brailleroledescription`

#### Defined in

node\_modules/@types/react/index.d.ts:2611

***

### aria-busy?

> `optional` **aria-busy**: `Booleanish`

#### Inherited from

`HTMLFormProps.aria-busy`

#### Defined in

node\_modules/@types/react/index.d.ts:2612

***

### aria-checked?

> `optional` **aria-checked**: `boolean` \| `"true"` \| `"false"` \| `"mixed"`

Indicates the current "checked" state of checkboxes, radio buttons, and other widgets.

#### See

 - aria-pressed
 - aria-selected.

#### Inherited from

`HTMLFormProps.aria-checked`

#### Defined in

node\_modules/@types/react/index.d.ts:2617

***

### aria-colcount?

> `optional` **aria-colcount**: `number`

Defines the total number of columns in a table, grid, or treegrid.

#### See

aria-colindex.

#### Inherited from

`HTMLFormProps.aria-colcount`

#### Defined in

node\_modules/@types/react/index.d.ts:2622

***

### aria-colindex?

> `optional` **aria-colindex**: `number`

Defines an element's column index or position with respect to the total number of columns within a table, grid, or treegrid.

#### See

 - aria-colcount
 - aria-colspan.

#### Inherited from

`HTMLFormProps.aria-colindex`

#### Defined in

node\_modules/@types/react/index.d.ts:2627

***

### aria-colindextext?

> `optional` **aria-colindextext**: `string`

Defines a human readable text alternative of aria-colindex.

#### See

aria-rowindextext.

#### Inherited from

`HTMLFormProps.aria-colindextext`

#### Defined in

node\_modules/@types/react/index.d.ts:2632

***

### aria-colspan?

> `optional` **aria-colspan**: `number`

Defines the number of columns spanned by a cell or gridcell within a table, grid, or treegrid.

#### See

 - aria-colindex
 - aria-rowspan.

#### Inherited from

`HTMLFormProps.aria-colspan`

#### Defined in

node\_modules/@types/react/index.d.ts:2637

***

### aria-controls?

> `optional` **aria-controls**: `string`

Identifies the element (or elements) whose contents or presence are controlled by the current element.

#### See

aria-owns.

#### Inherited from

`HTMLFormProps.aria-controls`

#### Defined in

node\_modules/@types/react/index.d.ts:2642

***

### aria-current?

> `optional` **aria-current**: `boolean` \| `"time"` \| `"true"` \| `"false"` \| `"page"` \| `"step"` \| `"location"` \| `"date"`

Indicates the element that represents the current item within a container or set of related elements.

#### Inherited from

`HTMLFormProps.aria-current`

#### Defined in

node\_modules/@types/react/index.d.ts:2644

***

### aria-describedby?

> `optional` **aria-describedby**: `string`

Identifies the element (or elements) that describes the object.

#### See

aria-labelledby

#### Inherited from

`HTMLFormProps.aria-describedby`

#### Defined in

node\_modules/@types/react/index.d.ts:2649

***

### aria-description?

> `optional` **aria-description**: `string`

Defines a string value that describes or annotates the current element.

#### See

related aria-describedby.

#### Inherited from

`HTMLFormProps.aria-description`

#### Defined in

node\_modules/@types/react/index.d.ts:2654

***

### aria-details?

> `optional` **aria-details**: `string`

Identifies the element that provides a detailed, extended description for the object.

#### See

aria-describedby.

#### Inherited from

`HTMLFormProps.aria-details`

#### Defined in

node\_modules/@types/react/index.d.ts:2659

***

### aria-disabled?

> `optional` **aria-disabled**: `Booleanish`

Indicates that the element is perceivable but disabled, so it is not editable or otherwise operable.

#### See

 - aria-hidden
 - aria-readonly.

#### Inherited from

`HTMLFormProps.aria-disabled`

#### Defined in

node\_modules/@types/react/index.d.ts:2664

***

### ~~aria-dropeffect?~~

> `optional` **aria-dropeffect**: `"link"` \| `"none"` \| `"copy"` \| `"execute"` \| `"move"` \| `"popup"`

Indicates what functions can be performed when a dragged object is released on the drop target.

#### Deprecated

in ARIA 1.1

#### Inherited from

`HTMLFormProps.aria-dropeffect`

#### Defined in

node\_modules/@types/react/index.d.ts:2669

***

### aria-errormessage?

> `optional` **aria-errormessage**: `string`

Identifies the element that provides an error message for the object.

#### See

 - aria-invalid
 - aria-describedby.

#### Inherited from

`HTMLFormProps.aria-errormessage`

#### Defined in

node\_modules/@types/react/index.d.ts:2674

***

### aria-expanded?

> `optional` **aria-expanded**: `Booleanish`

Indicates whether the element, or another grouping element it controls, is currently expanded or collapsed.

#### Inherited from

`HTMLFormProps.aria-expanded`

#### Defined in

node\_modules/@types/react/index.d.ts:2676

***

### aria-flowto?

> `optional` **aria-flowto**: `string`

Identifies the next element (or elements) in an alternate reading order of content which, at the user's discretion,
allows assistive technology to override the general default of reading in document source order.

#### Inherited from

`HTMLFormProps.aria-flowto`

#### Defined in

node\_modules/@types/react/index.d.ts:2681

***

### ~~aria-grabbed?~~

> `optional` **aria-grabbed**: `Booleanish`

Indicates an element's "grabbed" state in a drag-and-drop operation.

#### Deprecated

in ARIA 1.1

#### Inherited from

`HTMLFormProps.aria-grabbed`

#### Defined in

node\_modules/@types/react/index.d.ts:2686

***

### aria-haspopup?

> `optional` **aria-haspopup**: `boolean` \| `"dialog"` \| `"menu"` \| `"true"` \| `"false"` \| `"grid"` \| `"listbox"` \| `"tree"`

Indicates the availability and type of interactive popup element, such as menu or dialog, that can be triggered by an element.

#### Inherited from

`HTMLFormProps.aria-haspopup`

#### Defined in

node\_modules/@types/react/index.d.ts:2688

***

### aria-hidden?

> `optional` **aria-hidden**: `Booleanish`

Indicates whether the element is exposed to an accessibility API.

#### See

aria-disabled.

#### Inherited from

`HTMLFormProps.aria-hidden`

#### Defined in

node\_modules/@types/react/index.d.ts:2693

***

### aria-invalid?

> `optional` **aria-invalid**: `boolean` \| `"true"` \| `"false"` \| `"grammar"` \| `"spelling"`

Indicates the entered value does not conform to the format expected by the application.

#### See

aria-errormessage.

#### Inherited from

`HTMLFormProps.aria-invalid`

#### Defined in

node\_modules/@types/react/index.d.ts:2698

***

### aria-keyshortcuts?

> `optional` **aria-keyshortcuts**: `string`

Indicates keyboard shortcuts that an author has implemented to activate or give focus to an element.

#### Inherited from

`HTMLFormProps.aria-keyshortcuts`

#### Defined in

node\_modules/@types/react/index.d.ts:2700

***

### aria-label?

> `optional` **aria-label**: `string`

Defines a string value that labels the current element.

#### See

aria-labelledby.

#### Inherited from

`HTMLFormProps.aria-label`

#### Defined in

node\_modules/@types/react/index.d.ts:2705

***

### aria-labelledby?

> `optional` **aria-labelledby**: `string`

Identifies the element (or elements) that labels the current element.

#### See

aria-describedby.

#### Inherited from

`HTMLFormProps.aria-labelledby`

#### Defined in

node\_modules/@types/react/index.d.ts:2710

***

### aria-level?

> `optional` **aria-level**: `number`

Defines the hierarchical level of an element within a structure.

#### Inherited from

`HTMLFormProps.aria-level`

#### Defined in

node\_modules/@types/react/index.d.ts:2712

***

### aria-live?

> `optional` **aria-live**: `"off"` \| `"assertive"` \| `"polite"`

Indicates that an element will be updated, and describes the types of updates the user agents, assistive technologies, and user can expect from the live region.

#### Inherited from

`HTMLFormProps.aria-live`

#### Defined in

node\_modules/@types/react/index.d.ts:2714

***

### aria-modal?

> `optional` **aria-modal**: `Booleanish`

Indicates whether an element is modal when displayed.

#### Inherited from

`HTMLFormProps.aria-modal`

#### Defined in

node\_modules/@types/react/index.d.ts:2716

***

### aria-multiline?

> `optional` **aria-multiline**: `Booleanish`

Indicates whether a text box accepts multiple lines of input or only a single line.

#### Inherited from

`HTMLFormProps.aria-multiline`

#### Defined in

node\_modules/@types/react/index.d.ts:2718

***

### aria-multiselectable?

> `optional` **aria-multiselectable**: `Booleanish`

Indicates that the user may select more than one item from the current selectable descendants.

#### Inherited from

`HTMLFormProps.aria-multiselectable`

#### Defined in

node\_modules/@types/react/index.d.ts:2720

***

### aria-orientation?

> `optional` **aria-orientation**: `"horizontal"` \| `"vertical"`

Indicates whether the element's orientation is horizontal, vertical, or unknown/ambiguous.

#### Inherited from

`HTMLFormProps.aria-orientation`

#### Defined in

node\_modules/@types/react/index.d.ts:2722

***

### aria-owns?

> `optional` **aria-owns**: `string`

Identifies an element (or elements) in order to define a visual, functional, or contextual parent/child relationship
between DOM elements where the DOM hierarchy cannot be used to represent the relationship.

#### See

aria-controls.

#### Inherited from

`HTMLFormProps.aria-owns`

#### Defined in

node\_modules/@types/react/index.d.ts:2728

***

### aria-placeholder?

> `optional` **aria-placeholder**: `string`

Defines a short hint (a word or short phrase) intended to aid the user with data entry when the control has no value.
A hint could be a sample value or a brief description of the expected format.

#### Inherited from

`HTMLFormProps.aria-placeholder`

#### Defined in

node\_modules/@types/react/index.d.ts:2733

***

### aria-posinset?

> `optional` **aria-posinset**: `number`

Defines an element's number or position in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.

#### See

aria-setsize.

#### Inherited from

`HTMLFormProps.aria-posinset`

#### Defined in

node\_modules/@types/react/index.d.ts:2738

***

### aria-pressed?

> `optional` **aria-pressed**: `boolean` \| `"true"` \| `"false"` \| `"mixed"`

Indicates the current "pressed" state of toggle buttons.

#### See

 - aria-checked
 - aria-selected.

#### Inherited from

`HTMLFormProps.aria-pressed`

#### Defined in

node\_modules/@types/react/index.d.ts:2743

***

### aria-readonly?

> `optional` **aria-readonly**: `Booleanish`

Indicates that the element is not editable, but is otherwise operable.

#### See

aria-disabled.

#### Inherited from

`HTMLFormProps.aria-readonly`

#### Defined in

node\_modules/@types/react/index.d.ts:2748

***

### aria-relevant?

> `optional` **aria-relevant**: `"text"` \| `"additions"` \| `"additions removals"` \| `"additions text"` \| `"all"` \| `"removals"` \| `"removals additions"` \| `"removals text"` \| `"text additions"` \| `"text removals"`

Indicates what notifications the user agent will trigger when the accessibility tree within a live region is modified.

#### See

aria-atomic.

#### Inherited from

`HTMLFormProps.aria-relevant`

#### Defined in

node\_modules/@types/react/index.d.ts:2753

***

### aria-required?

> `optional` **aria-required**: `Booleanish`

Indicates that user input is required on the element before a form may be submitted.

#### Inherited from

`HTMLFormProps.aria-required`

#### Defined in

node\_modules/@types/react/index.d.ts:2766

***

### aria-roledescription?

> `optional` **aria-roledescription**: `string`

Defines a human-readable, author-localized description for the role of an element.

#### Inherited from

`HTMLFormProps.aria-roledescription`

#### Defined in

node\_modules/@types/react/index.d.ts:2768

***

### aria-rowcount?

> `optional` **aria-rowcount**: `number`

Defines the total number of rows in a table, grid, or treegrid.

#### See

aria-rowindex.

#### Inherited from

`HTMLFormProps.aria-rowcount`

#### Defined in

node\_modules/@types/react/index.d.ts:2773

***

### aria-rowindex?

> `optional` **aria-rowindex**: `number`

Defines an element's row index or position with respect to the total number of rows within a table, grid, or treegrid.

#### See

 - aria-rowcount
 - aria-rowspan.

#### Inherited from

`HTMLFormProps.aria-rowindex`

#### Defined in

node\_modules/@types/react/index.d.ts:2778

***

### aria-rowindextext?

> `optional` **aria-rowindextext**: `string`

Defines a human readable text alternative of aria-rowindex.

#### See

aria-colindextext.

#### Inherited from

`HTMLFormProps.aria-rowindextext`

#### Defined in

node\_modules/@types/react/index.d.ts:2783

***

### aria-rowspan?

> `optional` **aria-rowspan**: `number`

Defines the number of rows spanned by a cell or gridcell within a table, grid, or treegrid.

#### See

 - aria-rowindex
 - aria-colspan.

#### Inherited from

`HTMLFormProps.aria-rowspan`

#### Defined in

node\_modules/@types/react/index.d.ts:2788

***

### aria-selected?

> `optional` **aria-selected**: `Booleanish`

Indicates the current "selected" state of various widgets.

#### See

 - aria-checked
 - aria-pressed.

#### Inherited from

`HTMLFormProps.aria-selected`

#### Defined in

node\_modules/@types/react/index.d.ts:2793

***

### aria-setsize?

> `optional` **aria-setsize**: `number`

Defines the number of items in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.

#### See

aria-posinset.

#### Inherited from

`HTMLFormProps.aria-setsize`

#### Defined in

node\_modules/@types/react/index.d.ts:2798

***

### aria-sort?

> `optional` **aria-sort**: `"none"` \| `"ascending"` \| `"descending"` \| `"other"`

Indicates if items in a table or grid are sorted in ascending or descending order.

#### Inherited from

`HTMLFormProps.aria-sort`

#### Defined in

node\_modules/@types/react/index.d.ts:2800

***

### aria-valuemax?

> `optional` **aria-valuemax**: `number`

Defines the maximum allowed value for a range widget.

#### Inherited from

`HTMLFormProps.aria-valuemax`

#### Defined in

node\_modules/@types/react/index.d.ts:2802

***

### aria-valuemin?

> `optional` **aria-valuemin**: `number`

Defines the minimum allowed value for a range widget.

#### Inherited from

`HTMLFormProps.aria-valuemin`

#### Defined in

node\_modules/@types/react/index.d.ts:2804

***

### aria-valuenow?

> `optional` **aria-valuenow**: `number`

Defines the current value for a range widget.

#### See

aria-valuetext.

#### Inherited from

`HTMLFormProps.aria-valuenow`

#### Defined in

node\_modules/@types/react/index.d.ts:2809

***

### aria-valuetext?

> `optional` **aria-valuetext**: `string`

Defines the human readable text alternative of aria-valuenow for a range widget.

#### Inherited from

`HTMLFormProps.aria-valuetext`

#### Defined in

node\_modules/@types/react/index.d.ts:2811

***

### autoCapitalize?

> `optional` **autoCapitalize**: `string`

#### Inherited from

`HTMLFormProps.autoCapitalize`

#### Defined in

node\_modules/@types/react/index.d.ts:2933

***

### autoComplete?

> `optional` **autoComplete**: `string`

#### Inherited from

`HTMLFormProps.autoComplete`

#### Defined in

node\_modules/@types/react/index.d.ts:3208

***

### autoCorrect?

> `optional` **autoCorrect**: `string`

#### Inherited from

`HTMLFormProps.autoCorrect`

#### Defined in

node\_modules/@types/react/index.d.ts:2934

***

### autoFocus?

> `optional` **autoFocus**: `boolean`

#### Inherited from

`HTMLFormProps.autoFocus`

#### Defined in

node\_modules/@types/react/index.d.ts:2896

***

### autoSave?

> `optional` **autoSave**: `string`

#### Inherited from

`HTMLFormProps.autoSave`

#### Defined in

node\_modules/@types/react/index.d.ts:2935

***

### children

> **children**: `ReactNode` \| `ReactNode`[] \| (`props`) => `ReactNode`

The children of the provider may rather be any kind of React.js node(s),
or a function which takes RenderProps<T>|RenderProps\<T\> and
returns a React.js node.

#### Inherited from

`FormProviderProps.children`

#### Defined in

packages/core/dist/lib/Form.provider.d.ts:87

***

### className?

> `optional` **className**: `string`

#### Inherited from

`HTMLFormProps.className`

#### Defined in

node\_modules/@types/react/index.d.ts:2897

***

### color?

> `optional` **color**: `string`

#### Inherited from

`HTMLFormProps.color`

#### Defined in

node\_modules/@types/react/index.d.ts:2936

***

### content?

> `optional` **content**: `string`

#### Inherited from

`HTMLFormProps.content`

#### Defined in

node\_modules/@types/react/index.d.ts:2921

***

### contentEditable?

> `optional` **contentEditable**: `Booleanish` \| `"inherit"` \| `"plaintext-only"`

#### Inherited from

`HTMLFormProps.contentEditable`

#### Defined in

node\_modules/@types/react/index.d.ts:2898

***

### contextMenu?

> `optional` **contextMenu**: `string`

#### Inherited from

`HTMLFormProps.contextMenu`

#### Defined in

node\_modules/@types/react/index.d.ts:2899

***

### dangerouslySetInnerHTML?

> `optional` **dangerouslySetInnerHTML**: `object`

#### \_\_html

> **\_\_html**: `string` \| `TrustedHTML`

#### Inherited from

`HTMLFormProps.dangerouslySetInnerHTML`

#### Defined in

node\_modules/@types/react/index.d.ts:2380

***

### datatype?

> `optional` **datatype**: `string`

#### Inherited from

`HTMLFormProps.datatype`

#### Defined in

node\_modules/@types/react/index.d.ts:2922

***

### defaultChecked?

> `optional` **defaultChecked**: `boolean`

#### Inherited from

`HTMLFormProps.defaultChecked`

#### Defined in

node\_modules/@types/react/index.d.ts:2889

***

### defaultValue?

> `optional` **defaultValue**: `string` \| `number` \| readonly `string`[]

#### Inherited from

`HTMLFormProps.defaultValue`

#### Defined in

node\_modules/@types/react/index.d.ts:2890

***

### dir?

> `optional` **dir**: `string`

#### Inherited from

`HTMLFormProps.dir`

#### Defined in

node\_modules/@types/react/index.d.ts:2900

***

### draggable?

> `optional` **draggable**: `Booleanish`

#### Inherited from

`HTMLFormProps.draggable`

#### Defined in

node\_modules/@types/react/index.d.ts:2901

***

### encType?

> `optional` **encType**: `string`

#### Inherited from

`HTMLFormProps.encType`

#### Defined in

node\_modules/@types/react/index.d.ts:3209

***

### hidden?

> `optional` **hidden**: `boolean`

#### Inherited from

`HTMLFormProps.hidden`

#### Defined in

node\_modules/@types/react/index.d.ts:2902

***

### id?

> `optional` **id**: `string`

#### Inherited from

`HTMLFormProps.id`

#### Defined in

node\_modules/@types/react/index.d.ts:2903

***

### inlist?

> `optional` **inlist**: `any`

#### Inherited from

`HTMLFormProps.inlist`

#### Defined in

node\_modules/@types/react/index.d.ts:2923

***

### inputMode?

> `optional` **inputMode**: `"search"` \| `"text"` \| `"none"` \| `"tel"` \| `"url"` \| `"email"` \| `"numeric"` \| `"decimal"`

Hints at the type of data that might be entered by the user while editing the element or its contents

#### See

[https://html.spec.whatwg.org/multipage/interaction.html#input-modalities:-the-inputmode-attribute](https://html.spec.whatwg.org/multipage/interaction.html#input-modalities:-the-inputmode-attribute)

#### Inherited from

`HTMLFormProps.inputMode`

#### Defined in

node\_modules/@types/react/index.d.ts:2951

***

### is?

> `optional` **is**: `string`

Specify that a standard HTML element should behave like a defined custom built-in element

#### See

[https://html.spec.whatwg.org/multipage/custom-elements.html#attr-is](https://html.spec.whatwg.org/multipage/custom-elements.html#attr-is)

#### Inherited from

`HTMLFormProps.is`

#### Defined in

node\_modules/@types/react/index.d.ts:2956

***

### itemID?

> `optional` **itemID**: `string`

#### Inherited from

`HTMLFormProps.itemID`

#### Defined in

node\_modules/@types/react/index.d.ts:2940

***

### itemProp?

> `optional` **itemProp**: `string`

#### Inherited from

`HTMLFormProps.itemProp`

#### Defined in

node\_modules/@types/react/index.d.ts:2937

***

### itemRef?

> `optional` **itemRef**: `string`

#### Inherited from

`HTMLFormProps.itemRef`

#### Defined in

node\_modules/@types/react/index.d.ts:2941

***

### itemScope?

> `optional` **itemScope**: `boolean`

#### Inherited from

`HTMLFormProps.itemScope`

#### Defined in

node\_modules/@types/react/index.d.ts:2938

***

### itemType?

> `optional` **itemType**: `string`

#### Inherited from

`HTMLFormProps.itemType`

#### Defined in

node\_modules/@types/react/index.d.ts:2939

***

### key?

> `optional` **key**: `null` \| `Key`

#### Inherited from

`HTMLFormProps.key`

#### Defined in

node\_modules/@types/react/index.d.ts:261

***

### lang?

> `optional` **lang**: `string`

#### Inherited from

`HTMLFormProps.lang`

#### Defined in

node\_modules/@types/react/index.d.ts:2904

***

### method?

> `optional` **method**: `string`

#### Inherited from

`HTMLFormProps.method`

#### Defined in

node\_modules/@types/react/index.d.ts:3210

***

### name?

> `optional` **name**: `string`

#### Inherited from

`HTMLFormProps.name`

#### Defined in

node\_modules/@types/react/index.d.ts:3211

***

### noValidate?

> `optional` **noValidate**: `boolean`

#### Inherited from

`HTMLFormProps.noValidate`

#### Defined in

node\_modules/@types/react/index.d.ts:3212

***

### nonce?

> `optional` **nonce**: `string`

#### Inherited from

`HTMLFormProps.nonce`

#### Defined in

node\_modules/@types/react/index.d.ts:2905

***

### onAbort?

> `optional` **onAbort**: `ReactEventHandler`\<`HTMLFormElement`\>

#### Inherited from

`HTMLFormProps.onAbort`

#### Defined in

node\_modules/@types/react/index.d.ts:2439

***

### onAbortCapture?

> `optional` **onAbortCapture**: `ReactEventHandler`\<`HTMLFormElement`\>

#### Inherited from

`HTMLFormProps.onAbortCapture`

#### Defined in

node\_modules/@types/react/index.d.ts:2440

***

### onAnimationEnd?

> `optional` **onAnimationEnd**: `AnimationEventHandler`\<`HTMLFormElement`\>

#### Inherited from

`HTMLFormProps.onAnimationEnd`

#### Defined in

node\_modules/@types/react/index.d.ts:2569

***

### onAnimationEndCapture?

> `optional` **onAnimationEndCapture**: `AnimationEventHandler`\<`HTMLFormElement`\>

#### Inherited from

`HTMLFormProps.onAnimationEndCapture`

#### Defined in

node\_modules/@types/react/index.d.ts:2570

***

### onAnimationIteration?

> `optional` **onAnimationIteration**: `AnimationEventHandler`\<`HTMLFormElement`\>

#### Inherited from

`HTMLFormProps.onAnimationIteration`

#### Defined in

node\_modules/@types/react/index.d.ts:2571

***

### onAnimationIterationCapture?

> `optional` **onAnimationIterationCapture**: `AnimationEventHandler`\<`HTMLFormElement`\>

#### Inherited from

`HTMLFormProps.onAnimationIterationCapture`

#### Defined in

node\_modules/@types/react/index.d.ts:2572

***

### onAnimationStart?

> `optional` **onAnimationStart**: `AnimationEventHandler`\<`HTMLFormElement`\>

#### Inherited from

`HTMLFormProps.onAnimationStart`

#### Defined in

node\_modules/@types/react/index.d.ts:2567

***

### onAnimationStartCapture?

> `optional` **onAnimationStartCapture**: `AnimationEventHandler`\<`HTMLFormElement`\>

#### Inherited from

`HTMLFormProps.onAnimationStartCapture`

#### Defined in

node\_modules/@types/react/index.d.ts:2568

***

### onAuxClick?

> `optional` **onAuxClick**: `MouseEventHandler`\<`HTMLFormElement`\>

#### Inherited from

`HTMLFormProps.onAuxClick`

#### Defined in

node\_modules/@types/react/index.d.ts:2487

***

### onAuxClickCapture?

> `optional` **onAuxClickCapture**: `MouseEventHandler`\<`HTMLFormElement`\>

#### Inherited from

`HTMLFormProps.onAuxClickCapture`

#### Defined in

node\_modules/@types/react/index.d.ts:2488

***

### onBeforeInput?

> `optional` **onBeforeInput**: `FormEventHandler`\<`HTMLFormElement`\>

#### Inherited from

`HTMLFormProps.onBeforeInput`

#### Defined in

node\_modules/@types/react/index.d.ts:2411

***

### onBeforeInputCapture?

> `optional` **onBeforeInputCapture**: `FormEventHandler`\<`HTMLFormElement`\>

#### Inherited from

`HTMLFormProps.onBeforeInputCapture`

#### Defined in

node\_modules/@types/react/index.d.ts:2412

***

### onBlur?

> `optional` **onBlur**: `FocusEventHandler`\<`HTMLFormElement`\>

#### Inherited from

`HTMLFormProps.onBlur`

#### Defined in

node\_modules/@types/react/index.d.ts:2405

***

### onBlurCapture?

> `optional` **onBlurCapture**: `FocusEventHandler`\<`HTMLFormElement`\>

#### Inherited from

`HTMLFormProps.onBlurCapture`

#### Defined in

node\_modules/@types/react/index.d.ts:2406

***

### onCanPlay?

> `optional` **onCanPlay**: `ReactEventHandler`\<`HTMLFormElement`\>

#### Inherited from

`HTMLFormProps.onCanPlay`

#### Defined in

node\_modules/@types/react/index.d.ts:2441

***

### onCanPlayCapture?

> `optional` **onCanPlayCapture**: `ReactEventHandler`\<`HTMLFormElement`\>

#### Inherited from

`HTMLFormProps.onCanPlayCapture`

#### Defined in

node\_modules/@types/react/index.d.ts:2442

***

### onCanPlayThrough?

> `optional` **onCanPlayThrough**: `ReactEventHandler`\<`HTMLFormElement`\>

#### Inherited from

`HTMLFormProps.onCanPlayThrough`

#### Defined in

node\_modules/@types/react/index.d.ts:2443

***

### onCanPlayThroughCapture?

> `optional` **onCanPlayThroughCapture**: `ReactEventHandler`\<`HTMLFormElement`\>

#### Inherited from

`HTMLFormProps.onCanPlayThroughCapture`

#### Defined in

node\_modules/@types/react/index.d.ts:2444

***

### onChange?

> `optional` **onChange**: `FormEventHandler`\<`HTMLFormElement`\>

#### Inherited from

`HTMLFormProps.onChange`

#### Defined in

node\_modules/@types/react/index.d.ts:2409

***

### onChangeCapture?

> `optional` **onChangeCapture**: `FormEventHandler`\<`HTMLFormElement`\>

#### Inherited from

`HTMLFormProps.onChangeCapture`

#### Defined in

node\_modules/@types/react/index.d.ts:2410

***

### onClick?

> `optional` **onClick**: `MouseEventHandler`\<`HTMLFormElement`\>

#### Inherited from

`HTMLFormProps.onClick`

#### Defined in

node\_modules/@types/react/index.d.ts:2489

***

### onClickCapture?

> `optional` **onClickCapture**: `MouseEventHandler`\<`HTMLFormElement`\>

#### Inherited from

`HTMLFormProps.onClickCapture`

#### Defined in

node\_modules/@types/react/index.d.ts:2490

***

### onCompositionEnd?

> `optional` **onCompositionEnd**: `CompositionEventHandler`\<`HTMLFormElement`\>

#### Inherited from

`HTMLFormProps.onCompositionEnd`

#### Defined in

node\_modules/@types/react/index.d.ts:2395

***

### onCompositionEndCapture?

> `optional` **onCompositionEndCapture**: `CompositionEventHandler`\<`HTMLFormElement`\>

#### Inherited from

`HTMLFormProps.onCompositionEndCapture`

#### Defined in

node\_modules/@types/react/index.d.ts:2396

***

### onCompositionStart?

> `optional` **onCompositionStart**: `CompositionEventHandler`\<`HTMLFormElement`\>

#### Inherited from

`HTMLFormProps.onCompositionStart`

#### Defined in

node\_modules/@types/react/index.d.ts:2397

***

### onCompositionStartCapture?

> `optional` **onCompositionStartCapture**: `CompositionEventHandler`\<`HTMLFormElement`\>

#### Inherited from

`HTMLFormProps.onCompositionStartCapture`

#### Defined in

node\_modules/@types/react/index.d.ts:2398

***

### onCompositionUpdate?

> `optional` **onCompositionUpdate**: `CompositionEventHandler`\<`HTMLFormElement`\>

#### Inherited from

`HTMLFormProps.onCompositionUpdate`

#### Defined in

node\_modules/@types/react/index.d.ts:2399

***

### onCompositionUpdateCapture?

> `optional` **onCompositionUpdateCapture**: `CompositionEventHandler`\<`HTMLFormElement`\>

#### Inherited from

`HTMLFormProps.onCompositionUpdateCapture`

#### Defined in

node\_modules/@types/react/index.d.ts:2400

***

### onContextMenu?

> `optional` **onContextMenu**: `MouseEventHandler`\<`HTMLFormElement`\>

#### Inherited from

`HTMLFormProps.onContextMenu`

#### Defined in

node\_modules/@types/react/index.d.ts:2491

***

### onContextMenuCapture?

> `optional` **onContextMenuCapture**: `MouseEventHandler`\<`HTMLFormElement`\>

#### Inherited from

`HTMLFormProps.onContextMenuCapture`

#### Defined in

node\_modules/@types/react/index.d.ts:2492

***

### onCopy?

> `optional` **onCopy**: `ClipboardEventHandler`\<`HTMLFormElement`\>

#### Inherited from

`HTMLFormProps.onCopy`

#### Defined in

node\_modules/@types/react/index.d.ts:2387

***

### onCopyCapture?

> `optional` **onCopyCapture**: `ClipboardEventHandler`\<`HTMLFormElement`\>

#### Inherited from

`HTMLFormProps.onCopyCapture`

#### Defined in

node\_modules/@types/react/index.d.ts:2388

***

### onCut?

> `optional` **onCut**: `ClipboardEventHandler`\<`HTMLFormElement`\>

#### Inherited from

`HTMLFormProps.onCut`

#### Defined in

node\_modules/@types/react/index.d.ts:2389

***

### onCutCapture?

> `optional` **onCutCapture**: `ClipboardEventHandler`\<`HTMLFormElement`\>

#### Inherited from

`HTMLFormProps.onCutCapture`

#### Defined in

node\_modules/@types/react/index.d.ts:2390

***

### onDoubleClick?

> `optional` **onDoubleClick**: `MouseEventHandler`\<`HTMLFormElement`\>

#### Inherited from

`HTMLFormProps.onDoubleClick`

#### Defined in

node\_modules/@types/react/index.d.ts:2493

***

### onDoubleClickCapture?

> `optional` **onDoubleClickCapture**: `MouseEventHandler`\<`HTMLFormElement`\>

#### Inherited from

`HTMLFormProps.onDoubleClickCapture`

#### Defined in

node\_modules/@types/react/index.d.ts:2494

***

### onDrag?

> `optional` **onDrag**: `DragEventHandler`\<`HTMLFormElement`\>

#### Inherited from

`HTMLFormProps.onDrag`

#### Defined in

node\_modules/@types/react/index.d.ts:2495

***

### onDragCapture?

> `optional` **onDragCapture**: `DragEventHandler`\<`HTMLFormElement`\>

#### Inherited from

`HTMLFormProps.onDragCapture`

#### Defined in

node\_modules/@types/react/index.d.ts:2496

***

### onDragEnd?

> `optional` **onDragEnd**: `DragEventHandler`\<`HTMLFormElement`\>

#### Inherited from

`HTMLFormProps.onDragEnd`

#### Defined in

node\_modules/@types/react/index.d.ts:2497

***

### onDragEndCapture?

> `optional` **onDragEndCapture**: `DragEventHandler`\<`HTMLFormElement`\>

#### Inherited from

`HTMLFormProps.onDragEndCapture`

#### Defined in

node\_modules/@types/react/index.d.ts:2498

***

### onDragEnter?

> `optional` **onDragEnter**: `DragEventHandler`\<`HTMLFormElement`\>

#### Inherited from

`HTMLFormProps.onDragEnter`

#### Defined in

node\_modules/@types/react/index.d.ts:2499

***

### onDragEnterCapture?

> `optional` **onDragEnterCapture**: `DragEventHandler`\<`HTMLFormElement`\>

#### Inherited from

`HTMLFormProps.onDragEnterCapture`

#### Defined in

node\_modules/@types/react/index.d.ts:2500

***

### onDragExit?

> `optional` **onDragExit**: `DragEventHandler`\<`HTMLFormElement`\>

#### Inherited from

`HTMLFormProps.onDragExit`

#### Defined in

node\_modules/@types/react/index.d.ts:2501

***

### onDragExitCapture?

> `optional` **onDragExitCapture**: `DragEventHandler`\<`HTMLFormElement`\>

#### Inherited from

`HTMLFormProps.onDragExitCapture`

#### Defined in

node\_modules/@types/react/index.d.ts:2502

***

### onDragLeave?

> `optional` **onDragLeave**: `DragEventHandler`\<`HTMLFormElement`\>

#### Inherited from

`HTMLFormProps.onDragLeave`

#### Defined in

node\_modules/@types/react/index.d.ts:2503

***

### onDragLeaveCapture?

> `optional` **onDragLeaveCapture**: `DragEventHandler`\<`HTMLFormElement`\>

#### Inherited from

`HTMLFormProps.onDragLeaveCapture`

#### Defined in

node\_modules/@types/react/index.d.ts:2504

***

### onDragOver?

> `optional` **onDragOver**: `DragEventHandler`\<`HTMLFormElement`\>

#### Inherited from

`HTMLFormProps.onDragOver`

#### Defined in

node\_modules/@types/react/index.d.ts:2505

***

### onDragOverCapture?

> `optional` **onDragOverCapture**: `DragEventHandler`\<`HTMLFormElement`\>

#### Inherited from

`HTMLFormProps.onDragOverCapture`

#### Defined in

node\_modules/@types/react/index.d.ts:2506

***

### onDragStart?

> `optional` **onDragStart**: `DragEventHandler`\<`HTMLFormElement`\>

#### Inherited from

`HTMLFormProps.onDragStart`

#### Defined in

node\_modules/@types/react/index.d.ts:2507

***

### onDragStartCapture?

> `optional` **onDragStartCapture**: `DragEventHandler`\<`HTMLFormElement`\>

#### Inherited from

`HTMLFormProps.onDragStartCapture`

#### Defined in

node\_modules/@types/react/index.d.ts:2508

***

### onDrop?

> `optional` **onDrop**: `DragEventHandler`\<`HTMLFormElement`\>

#### Inherited from

`HTMLFormProps.onDrop`

#### Defined in

node\_modules/@types/react/index.d.ts:2509

***

### onDropCapture?

> `optional` **onDropCapture**: `DragEventHandler`\<`HTMLFormElement`\>

#### Inherited from

`HTMLFormProps.onDropCapture`

#### Defined in

node\_modules/@types/react/index.d.ts:2510

***

### onDurationChange?

> `optional` **onDurationChange**: `ReactEventHandler`\<`HTMLFormElement`\>

#### Inherited from

`HTMLFormProps.onDurationChange`

#### Defined in

node\_modules/@types/react/index.d.ts:2445

***

### onDurationChangeCapture?

> `optional` **onDurationChangeCapture**: `ReactEventHandler`\<`HTMLFormElement`\>

#### Inherited from

`HTMLFormProps.onDurationChangeCapture`

#### Defined in

node\_modules/@types/react/index.d.ts:2446

***

### onEmptied?

> `optional` **onEmptied**: `ReactEventHandler`\<`HTMLFormElement`\>

#### Inherited from

`HTMLFormProps.onEmptied`

#### Defined in

node\_modules/@types/react/index.d.ts:2447

***

### onEmptiedCapture?

> `optional` **onEmptiedCapture**: `ReactEventHandler`\<`HTMLFormElement`\>

#### Inherited from

`HTMLFormProps.onEmptiedCapture`

#### Defined in

node\_modules/@types/react/index.d.ts:2448

***

### onEncrypted?

> `optional` **onEncrypted**: `ReactEventHandler`\<`HTMLFormElement`\>

#### Inherited from

`HTMLFormProps.onEncrypted`

#### Defined in

node\_modules/@types/react/index.d.ts:2449

***

### onEncryptedCapture?

> `optional` **onEncryptedCapture**: `ReactEventHandler`\<`HTMLFormElement`\>

#### Inherited from

`HTMLFormProps.onEncryptedCapture`

#### Defined in

node\_modules/@types/react/index.d.ts:2450

***

### onEnded?

> `optional` **onEnded**: `ReactEventHandler`\<`HTMLFormElement`\>

#### Inherited from

`HTMLFormProps.onEnded`

#### Defined in

node\_modules/@types/react/index.d.ts:2451

***

### onEndedCapture?

> `optional` **onEndedCapture**: `ReactEventHandler`\<`HTMLFormElement`\>

#### Inherited from

`HTMLFormProps.onEndedCapture`

#### Defined in

node\_modules/@types/react/index.d.ts:2452

***

### onError?

> `optional` **onError**: `ReactEventHandler`\<`HTMLFormElement`\>

#### Inherited from

`HTMLFormProps.onError`

#### Defined in

node\_modules/@types/react/index.d.ts:2425

***

### onErrorCapture?

> `optional` **onErrorCapture**: `ReactEventHandler`\<`HTMLFormElement`\>

#### Inherited from

`HTMLFormProps.onErrorCapture`

#### Defined in

node\_modules/@types/react/index.d.ts:2426

***

### onFocus?

> `optional` **onFocus**: `FocusEventHandler`\<`HTMLFormElement`\>

#### Inherited from

`HTMLFormProps.onFocus`

#### Defined in

node\_modules/@types/react/index.d.ts:2403

***

### onFocusCapture?

> `optional` **onFocusCapture**: `FocusEventHandler`\<`HTMLFormElement`\>

#### Inherited from

`HTMLFormProps.onFocusCapture`

#### Defined in

node\_modules/@types/react/index.d.ts:2404

***

### onGotPointerCapture?

> `optional` **onGotPointerCapture**: `PointerEventHandler`\<`HTMLFormElement`\>

#### Inherited from

`HTMLFormProps.onGotPointerCapture`

#### Defined in

node\_modules/@types/react/index.d.ts:2553

***

### onGotPointerCaptureCapture?

> `optional` **onGotPointerCaptureCapture**: `PointerEventHandler`\<`HTMLFormElement`\>

#### Inherited from

`HTMLFormProps.onGotPointerCaptureCapture`

#### Defined in

node\_modules/@types/react/index.d.ts:2554

***

### onInput?

> `optional` **onInput**: `FormEventHandler`\<`HTMLFormElement`\>

#### Inherited from

`HTMLFormProps.onInput`

#### Defined in

node\_modules/@types/react/index.d.ts:2413

***

### onInputCapture?

> `optional` **onInputCapture**: `FormEventHandler`\<`HTMLFormElement`\>

#### Inherited from

`HTMLFormProps.onInputCapture`

#### Defined in

node\_modules/@types/react/index.d.ts:2414

***

### onInvalid?

> `optional` **onInvalid**: `FormEventHandler`\<`HTMLFormElement`\>

#### Inherited from

`HTMLFormProps.onInvalid`

#### Defined in

node\_modules/@types/react/index.d.ts:2419

***

### onInvalidCapture?

> `optional` **onInvalidCapture**: `FormEventHandler`\<`HTMLFormElement`\>

#### Inherited from

`HTMLFormProps.onInvalidCapture`

#### Defined in

node\_modules/@types/react/index.d.ts:2420

***

### onKeyDown?

> `optional` **onKeyDown**: `KeyboardEventHandler`\<`HTMLFormElement`\>

#### Inherited from

`HTMLFormProps.onKeyDown`

#### Defined in

node\_modules/@types/react/index.d.ts:2429

***

### onKeyDownCapture?

> `optional` **onKeyDownCapture**: `KeyboardEventHandler`\<`HTMLFormElement`\>

#### Inherited from

`HTMLFormProps.onKeyDownCapture`

#### Defined in

node\_modules/@types/react/index.d.ts:2430

***

### ~~onKeyPress?~~

> `optional` **onKeyPress**: `KeyboardEventHandler`\<`HTMLFormElement`\>

#### Deprecated

#### Inherited from

`HTMLFormProps.onKeyPress`

#### Defined in

node\_modules/@types/react/index.d.ts:2432

***

### ~~onKeyPressCapture?~~

> `optional` **onKeyPressCapture**: `KeyboardEventHandler`\<`HTMLFormElement`\>

#### Deprecated

#### Inherited from

`HTMLFormProps.onKeyPressCapture`

#### Defined in

node\_modules/@types/react/index.d.ts:2434

***

### onKeyUp?

> `optional` **onKeyUp**: `KeyboardEventHandler`\<`HTMLFormElement`\>

#### Inherited from

`HTMLFormProps.onKeyUp`

#### Defined in

node\_modules/@types/react/index.d.ts:2435

***

### onKeyUpCapture?

> `optional` **onKeyUpCapture**: `KeyboardEventHandler`\<`HTMLFormElement`\>

#### Inherited from

`HTMLFormProps.onKeyUpCapture`

#### Defined in

node\_modules/@types/react/index.d.ts:2436

***

### onLoad?

> `optional` **onLoad**: `ReactEventHandler`\<`HTMLFormElement`\>

#### Inherited from

`HTMLFormProps.onLoad`

#### Defined in

node\_modules/@types/react/index.d.ts:2423

***

### onLoadCapture?

> `optional` **onLoadCapture**: `ReactEventHandler`\<`HTMLFormElement`\>

#### Inherited from

`HTMLFormProps.onLoadCapture`

#### Defined in

node\_modules/@types/react/index.d.ts:2424

***

### onLoadStart?

> `optional` **onLoadStart**: `ReactEventHandler`\<`HTMLFormElement`\>

#### Inherited from

`HTMLFormProps.onLoadStart`

#### Defined in

node\_modules/@types/react/index.d.ts:2457

***

### onLoadStartCapture?

> `optional` **onLoadStartCapture**: `ReactEventHandler`\<`HTMLFormElement`\>

#### Inherited from

`HTMLFormProps.onLoadStartCapture`

#### Defined in

node\_modules/@types/react/index.d.ts:2458

***

### onLoadedData?

> `optional` **onLoadedData**: `ReactEventHandler`\<`HTMLFormElement`\>

#### Inherited from

`HTMLFormProps.onLoadedData`

#### Defined in

node\_modules/@types/react/index.d.ts:2453

***

### onLoadedDataCapture?

> `optional` **onLoadedDataCapture**: `ReactEventHandler`\<`HTMLFormElement`\>

#### Inherited from

`HTMLFormProps.onLoadedDataCapture`

#### Defined in

node\_modules/@types/react/index.d.ts:2454

***

### onLoadedMetadata?

> `optional` **onLoadedMetadata**: `ReactEventHandler`\<`HTMLFormElement`\>

#### Inherited from

`HTMLFormProps.onLoadedMetadata`

#### Defined in

node\_modules/@types/react/index.d.ts:2455

***

### onLoadedMetadataCapture?

> `optional` **onLoadedMetadataCapture**: `ReactEventHandler`\<`HTMLFormElement`\>

#### Inherited from

`HTMLFormProps.onLoadedMetadataCapture`

#### Defined in

node\_modules/@types/react/index.d.ts:2456

***

### onLostPointerCapture?

> `optional` **onLostPointerCapture**: `PointerEventHandler`\<`HTMLFormElement`\>

#### Inherited from

`HTMLFormProps.onLostPointerCapture`

#### Defined in

node\_modules/@types/react/index.d.ts:2555

***

### onLostPointerCaptureCapture?

> `optional` **onLostPointerCaptureCapture**: `PointerEventHandler`\<`HTMLFormElement`\>

#### Inherited from

`HTMLFormProps.onLostPointerCaptureCapture`

#### Defined in

node\_modules/@types/react/index.d.ts:2556

***

### onMouseDown?

> `optional` **onMouseDown**: `MouseEventHandler`\<`HTMLFormElement`\>

#### Inherited from

`HTMLFormProps.onMouseDown`

#### Defined in

node\_modules/@types/react/index.d.ts:2511

***

### onMouseDownCapture?

> `optional` **onMouseDownCapture**: `MouseEventHandler`\<`HTMLFormElement`\>

#### Inherited from

`HTMLFormProps.onMouseDownCapture`

#### Defined in

node\_modules/@types/react/index.d.ts:2512

***

### onMouseEnter?

> `optional` **onMouseEnter**: `MouseEventHandler`\<`HTMLFormElement`\>

#### Inherited from

`HTMLFormProps.onMouseEnter`

#### Defined in

node\_modules/@types/react/index.d.ts:2513

***

### onMouseLeave?

> `optional` **onMouseLeave**: `MouseEventHandler`\<`HTMLFormElement`\>

#### Inherited from

`HTMLFormProps.onMouseLeave`

#### Defined in

node\_modules/@types/react/index.d.ts:2514

***

### onMouseMove?

> `optional` **onMouseMove**: `MouseEventHandler`\<`HTMLFormElement`\>

#### Inherited from

`HTMLFormProps.onMouseMove`

#### Defined in

node\_modules/@types/react/index.d.ts:2515

***

### onMouseMoveCapture?

> `optional` **onMouseMoveCapture**: `MouseEventHandler`\<`HTMLFormElement`\>

#### Inherited from

`HTMLFormProps.onMouseMoveCapture`

#### Defined in

node\_modules/@types/react/index.d.ts:2516

***

### onMouseOut?

> `optional` **onMouseOut**: `MouseEventHandler`\<`HTMLFormElement`\>

#### Inherited from

`HTMLFormProps.onMouseOut`

#### Defined in

node\_modules/@types/react/index.d.ts:2517

***

### onMouseOutCapture?

> `optional` **onMouseOutCapture**: `MouseEventHandler`\<`HTMLFormElement`\>

#### Inherited from

`HTMLFormProps.onMouseOutCapture`

#### Defined in

node\_modules/@types/react/index.d.ts:2518

***

### onMouseOver?

> `optional` **onMouseOver**: `MouseEventHandler`\<`HTMLFormElement`\>

#### Inherited from

`HTMLFormProps.onMouseOver`

#### Defined in

node\_modules/@types/react/index.d.ts:2519

***

### onMouseOverCapture?

> `optional` **onMouseOverCapture**: `MouseEventHandler`\<`HTMLFormElement`\>

#### Inherited from

`HTMLFormProps.onMouseOverCapture`

#### Defined in

node\_modules/@types/react/index.d.ts:2520

***

### onMouseUp?

> `optional` **onMouseUp**: `MouseEventHandler`\<`HTMLFormElement`\>

#### Inherited from

`HTMLFormProps.onMouseUp`

#### Defined in

node\_modules/@types/react/index.d.ts:2521

***

### onMouseUpCapture?

> `optional` **onMouseUpCapture**: `MouseEventHandler`\<`HTMLFormElement`\>

#### Inherited from

`HTMLFormProps.onMouseUpCapture`

#### Defined in

node\_modules/@types/react/index.d.ts:2522

***

### onPaste?

> `optional` **onPaste**: `ClipboardEventHandler`\<`HTMLFormElement`\>

#### Inherited from

`HTMLFormProps.onPaste`

#### Defined in

node\_modules/@types/react/index.d.ts:2391

***

### onPasteCapture?

> `optional` **onPasteCapture**: `ClipboardEventHandler`\<`HTMLFormElement`\>

#### Inherited from

`HTMLFormProps.onPasteCapture`

#### Defined in

node\_modules/@types/react/index.d.ts:2392

***

### onPause?

> `optional` **onPause**: `ReactEventHandler`\<`HTMLFormElement`\>

#### Inherited from

`HTMLFormProps.onPause`

#### Defined in

node\_modules/@types/react/index.d.ts:2459

***

### onPauseCapture?

> `optional` **onPauseCapture**: `ReactEventHandler`\<`HTMLFormElement`\>

#### Inherited from

`HTMLFormProps.onPauseCapture`

#### Defined in

node\_modules/@types/react/index.d.ts:2460

***

### onPlay?

> `optional` **onPlay**: `ReactEventHandler`\<`HTMLFormElement`\>

#### Inherited from

`HTMLFormProps.onPlay`

#### Defined in

node\_modules/@types/react/index.d.ts:2461

***

### onPlayCapture?

> `optional` **onPlayCapture**: `ReactEventHandler`\<`HTMLFormElement`\>

#### Inherited from

`HTMLFormProps.onPlayCapture`

#### Defined in

node\_modules/@types/react/index.d.ts:2462

***

### onPlaying?

> `optional` **onPlaying**: `ReactEventHandler`\<`HTMLFormElement`\>

#### Inherited from

`HTMLFormProps.onPlaying`

#### Defined in

node\_modules/@types/react/index.d.ts:2463

***

### onPlayingCapture?

> `optional` **onPlayingCapture**: `ReactEventHandler`\<`HTMLFormElement`\>

#### Inherited from

`HTMLFormProps.onPlayingCapture`

#### Defined in

node\_modules/@types/react/index.d.ts:2464

***

### onPointerCancel?

> `optional` **onPointerCancel**: `PointerEventHandler`\<`HTMLFormElement`\>

#### Inherited from

`HTMLFormProps.onPointerCancel`

#### Defined in

node\_modules/@types/react/index.d.ts:2545

***

### onPointerCancelCapture?

> `optional` **onPointerCancelCapture**: `PointerEventHandler`\<`HTMLFormElement`\>

#### Inherited from

`HTMLFormProps.onPointerCancelCapture`

#### Defined in

node\_modules/@types/react/index.d.ts:2546

***

### onPointerDown?

> `optional` **onPointerDown**: `PointerEventHandler`\<`HTMLFormElement`\>

#### Inherited from

`HTMLFormProps.onPointerDown`

#### Defined in

node\_modules/@types/react/index.d.ts:2539

***

### onPointerDownCapture?

> `optional` **onPointerDownCapture**: `PointerEventHandler`\<`HTMLFormElement`\>

#### Inherited from

`HTMLFormProps.onPointerDownCapture`

#### Defined in

node\_modules/@types/react/index.d.ts:2540

***

### onPointerEnter?

> `optional` **onPointerEnter**: `PointerEventHandler`\<`HTMLFormElement`\>

#### Inherited from

`HTMLFormProps.onPointerEnter`

#### Defined in

node\_modules/@types/react/index.d.ts:2547

***

### onPointerLeave?

> `optional` **onPointerLeave**: `PointerEventHandler`\<`HTMLFormElement`\>

#### Inherited from

`HTMLFormProps.onPointerLeave`

#### Defined in

node\_modules/@types/react/index.d.ts:2548

***

### onPointerMove?

> `optional` **onPointerMove**: `PointerEventHandler`\<`HTMLFormElement`\>

#### Inherited from

`HTMLFormProps.onPointerMove`

#### Defined in

node\_modules/@types/react/index.d.ts:2541

***

### onPointerMoveCapture?

> `optional` **onPointerMoveCapture**: `PointerEventHandler`\<`HTMLFormElement`\>

#### Inherited from

`HTMLFormProps.onPointerMoveCapture`

#### Defined in

node\_modules/@types/react/index.d.ts:2542

***

### onPointerOut?

> `optional` **onPointerOut**: `PointerEventHandler`\<`HTMLFormElement`\>

#### Inherited from

`HTMLFormProps.onPointerOut`

#### Defined in

node\_modules/@types/react/index.d.ts:2551

***

### onPointerOutCapture?

> `optional` **onPointerOutCapture**: `PointerEventHandler`\<`HTMLFormElement`\>

#### Inherited from

`HTMLFormProps.onPointerOutCapture`

#### Defined in

node\_modules/@types/react/index.d.ts:2552

***

### onPointerOver?

> `optional` **onPointerOver**: `PointerEventHandler`\<`HTMLFormElement`\>

#### Inherited from

`HTMLFormProps.onPointerOver`

#### Defined in

node\_modules/@types/react/index.d.ts:2549

***

### onPointerOverCapture?

> `optional` **onPointerOverCapture**: `PointerEventHandler`\<`HTMLFormElement`\>

#### Inherited from

`HTMLFormProps.onPointerOverCapture`

#### Defined in

node\_modules/@types/react/index.d.ts:2550

***

### onPointerUp?

> `optional` **onPointerUp**: `PointerEventHandler`\<`HTMLFormElement`\>

#### Inherited from

`HTMLFormProps.onPointerUp`

#### Defined in

node\_modules/@types/react/index.d.ts:2543

***

### onPointerUpCapture?

> `optional` **onPointerUpCapture**: `PointerEventHandler`\<`HTMLFormElement`\>

#### Inherited from

`HTMLFormProps.onPointerUpCapture`

#### Defined in

node\_modules/@types/react/index.d.ts:2544

***

### onProgress?

> `optional` **onProgress**: `ReactEventHandler`\<`HTMLFormElement`\>

#### Inherited from

`HTMLFormProps.onProgress`

#### Defined in

node\_modules/@types/react/index.d.ts:2465

***

### onProgressCapture?

> `optional` **onProgressCapture**: `ReactEventHandler`\<`HTMLFormElement`\>

#### Inherited from

`HTMLFormProps.onProgressCapture`

#### Defined in

node\_modules/@types/react/index.d.ts:2466

***

### onRateChange?

> `optional` **onRateChange**: `ReactEventHandler`\<`HTMLFormElement`\>

#### Inherited from

`HTMLFormProps.onRateChange`

#### Defined in

node\_modules/@types/react/index.d.ts:2467

***

### onRateChangeCapture?

> `optional` **onRateChangeCapture**: `ReactEventHandler`\<`HTMLFormElement`\>

#### Inherited from

`HTMLFormProps.onRateChangeCapture`

#### Defined in

node\_modules/@types/react/index.d.ts:2468

***

### onReset?

> `optional` **onReset**: `FormEventHandler`\<`HTMLFormElement`\>

#### Inherited from

`HTMLFormProps.onReset`

#### Defined in

node\_modules/@types/react/index.d.ts:2415

***

### onResetCapture?

> `optional` **onResetCapture**: `FormEventHandler`\<`HTMLFormElement`\>

#### Inherited from

`HTMLFormProps.onResetCapture`

#### Defined in

node\_modules/@types/react/index.d.ts:2416

***

### onResize?

> `optional` **onResize**: `ReactEventHandler`\<`HTMLFormElement`\>

#### Inherited from

`HTMLFormProps.onResize`

#### Defined in

node\_modules/@types/react/index.d.ts:2469

***

### onResizeCapture?

> `optional` **onResizeCapture**: `ReactEventHandler`\<`HTMLFormElement`\>

#### Inherited from

`HTMLFormProps.onResizeCapture`

#### Defined in

node\_modules/@types/react/index.d.ts:2470

***

### onScroll?

> `optional` **onScroll**: `UIEventHandler`\<`HTMLFormElement`\>

#### Inherited from

`HTMLFormProps.onScroll`

#### Defined in

node\_modules/@types/react/index.d.ts:2559

***

### onScrollCapture?

> `optional` **onScrollCapture**: `UIEventHandler`\<`HTMLFormElement`\>

#### Inherited from

`HTMLFormProps.onScrollCapture`

#### Defined in

node\_modules/@types/react/index.d.ts:2560

***

### onSeeked?

> `optional` **onSeeked**: `ReactEventHandler`\<`HTMLFormElement`\>

#### Inherited from

`HTMLFormProps.onSeeked`

#### Defined in

node\_modules/@types/react/index.d.ts:2471

***

### onSeekedCapture?

> `optional` **onSeekedCapture**: `ReactEventHandler`\<`HTMLFormElement`\>

#### Inherited from

`HTMLFormProps.onSeekedCapture`

#### Defined in

node\_modules/@types/react/index.d.ts:2472

***

### onSeeking?

> `optional` **onSeeking**: `ReactEventHandler`\<`HTMLFormElement`\>

#### Inherited from

`HTMLFormProps.onSeeking`

#### Defined in

node\_modules/@types/react/index.d.ts:2473

***

### onSeekingCapture?

> `optional` **onSeekingCapture**: `ReactEventHandler`\<`HTMLFormElement`\>

#### Inherited from

`HTMLFormProps.onSeekingCapture`

#### Defined in

node\_modules/@types/react/index.d.ts:2474

***

### onSelect?

> `optional` **onSelect**: `ReactEventHandler`\<`HTMLFormElement`\>

#### Inherited from

`HTMLFormProps.onSelect`

#### Defined in

node\_modules/@types/react/index.d.ts:2525

***

### onSelectCapture?

> `optional` **onSelectCapture**: `ReactEventHandler`\<`HTMLFormElement`\>

#### Inherited from

`HTMLFormProps.onSelectCapture`

#### Defined in

node\_modules/@types/react/index.d.ts:2526

***

### onStalled?

> `optional` **onStalled**: `ReactEventHandler`\<`HTMLFormElement`\>

#### Inherited from

`HTMLFormProps.onStalled`

#### Defined in

node\_modules/@types/react/index.d.ts:2475

***

### onStalledCapture?

> `optional` **onStalledCapture**: `ReactEventHandler`\<`HTMLFormElement`\>

#### Inherited from

`HTMLFormProps.onStalledCapture`

#### Defined in

node\_modules/@types/react/index.d.ts:2476

***

### onSubmit()

> **onSubmit**: (`values`) => `void`

The function to be called uppon form submision.

#### Parameters

• **values**: `T`

the validated values `T` of the form

#### Returns

`void`

#### Inherited from

`FormProviderProps.onSubmit`

#### Defined in

packages/core/dist/lib/Form.provider.d.ts:93

***

### onSubmitCapture?

> `optional` **onSubmitCapture**: `FormEventHandler`\<`HTMLFormElement`\>

#### Inherited from

`HTMLFormProps.onSubmitCapture`

#### Defined in

node\_modules/@types/react/index.d.ts:2418

***

### onSuspend?

> `optional` **onSuspend**: `ReactEventHandler`\<`HTMLFormElement`\>

#### Inherited from

`HTMLFormProps.onSuspend`

#### Defined in

node\_modules/@types/react/index.d.ts:2477

***

### onSuspendCapture?

> `optional` **onSuspendCapture**: `ReactEventHandler`\<`HTMLFormElement`\>

#### Inherited from

`HTMLFormProps.onSuspendCapture`

#### Defined in

node\_modules/@types/react/index.d.ts:2478

***

### onTimeUpdate?

> `optional` **onTimeUpdate**: `ReactEventHandler`\<`HTMLFormElement`\>

#### Inherited from

`HTMLFormProps.onTimeUpdate`

#### Defined in

node\_modules/@types/react/index.d.ts:2479

***

### onTimeUpdateCapture?

> `optional` **onTimeUpdateCapture**: `ReactEventHandler`\<`HTMLFormElement`\>

#### Inherited from

`HTMLFormProps.onTimeUpdateCapture`

#### Defined in

node\_modules/@types/react/index.d.ts:2480

***

### onTouchCancel?

> `optional` **onTouchCancel**: `TouchEventHandler`\<`HTMLFormElement`\>

#### Inherited from

`HTMLFormProps.onTouchCancel`

#### Defined in

node\_modules/@types/react/index.d.ts:2529

***

### onTouchCancelCapture?

> `optional` **onTouchCancelCapture**: `TouchEventHandler`\<`HTMLFormElement`\>

#### Inherited from

`HTMLFormProps.onTouchCancelCapture`

#### Defined in

node\_modules/@types/react/index.d.ts:2530

***

### onTouchEnd?

> `optional` **onTouchEnd**: `TouchEventHandler`\<`HTMLFormElement`\>

#### Inherited from

`HTMLFormProps.onTouchEnd`

#### Defined in

node\_modules/@types/react/index.d.ts:2531

***

### onTouchEndCapture?

> `optional` **onTouchEndCapture**: `TouchEventHandler`\<`HTMLFormElement`\>

#### Inherited from

`HTMLFormProps.onTouchEndCapture`

#### Defined in

node\_modules/@types/react/index.d.ts:2532

***

### onTouchMove?

> `optional` **onTouchMove**: `TouchEventHandler`\<`HTMLFormElement`\>

#### Inherited from

`HTMLFormProps.onTouchMove`

#### Defined in

node\_modules/@types/react/index.d.ts:2533

***

### onTouchMoveCapture?

> `optional` **onTouchMoveCapture**: `TouchEventHandler`\<`HTMLFormElement`\>

#### Inherited from

`HTMLFormProps.onTouchMoveCapture`

#### Defined in

node\_modules/@types/react/index.d.ts:2534

***

### onTouchStart?

> `optional` **onTouchStart**: `TouchEventHandler`\<`HTMLFormElement`\>

#### Inherited from

`HTMLFormProps.onTouchStart`

#### Defined in

node\_modules/@types/react/index.d.ts:2535

***

### onTouchStartCapture?

> `optional` **onTouchStartCapture**: `TouchEventHandler`\<`HTMLFormElement`\>

#### Inherited from

`HTMLFormProps.onTouchStartCapture`

#### Defined in

node\_modules/@types/react/index.d.ts:2536

***

### onTransitionEnd?

> `optional` **onTransitionEnd**: `TransitionEventHandler`\<`HTMLFormElement`\>

#### Inherited from

`HTMLFormProps.onTransitionEnd`

#### Defined in

node\_modules/@types/react/index.d.ts:2575

***

### onTransitionEndCapture?

> `optional` **onTransitionEndCapture**: `TransitionEventHandler`\<`HTMLFormElement`\>

#### Inherited from

`HTMLFormProps.onTransitionEndCapture`

#### Defined in

node\_modules/@types/react/index.d.ts:2576

***

### onVolumeChange?

> `optional` **onVolumeChange**: `ReactEventHandler`\<`HTMLFormElement`\>

#### Inherited from

`HTMLFormProps.onVolumeChange`

#### Defined in

node\_modules/@types/react/index.d.ts:2481

***

### onVolumeChangeCapture?

> `optional` **onVolumeChangeCapture**: `ReactEventHandler`\<`HTMLFormElement`\>

#### Inherited from

`HTMLFormProps.onVolumeChangeCapture`

#### Defined in

node\_modules/@types/react/index.d.ts:2482

***

### onWaiting?

> `optional` **onWaiting**: `ReactEventHandler`\<`HTMLFormElement`\>

#### Inherited from

`HTMLFormProps.onWaiting`

#### Defined in

node\_modules/@types/react/index.d.ts:2483

***

### onWaitingCapture?

> `optional` **onWaitingCapture**: `ReactEventHandler`\<`HTMLFormElement`\>

#### Inherited from

`HTMLFormProps.onWaitingCapture`

#### Defined in

node\_modules/@types/react/index.d.ts:2484

***

### onWheel?

> `optional` **onWheel**: `WheelEventHandler`\<`HTMLFormElement`\>

#### Inherited from

`HTMLFormProps.onWheel`

#### Defined in

node\_modules/@types/react/index.d.ts:2563

***

### onWheelCapture?

> `optional` **onWheelCapture**: `WheelEventHandler`\<`HTMLFormElement`\>

#### Inherited from

`HTMLFormProps.onWheelCapture`

#### Defined in

node\_modules/@types/react/index.d.ts:2564

***

### prefix?

> `optional` **prefix**: `string`

#### Inherited from

`HTMLFormProps.prefix`

#### Defined in

node\_modules/@types/react/index.d.ts:2924

***

### property?

> `optional` **property**: `string`

#### Inherited from

`HTMLFormProps.property`

#### Defined in

node\_modules/@types/react/index.d.ts:2925

***

### radioGroup?

> `optional` **radioGroup**: `string`

#### Inherited from

`HTMLFormProps.radioGroup`

#### Defined in

node\_modules/@types/react/index.d.ts:2914

***

### ref?

> `optional` **ref**: `LegacyRef`\<`HTMLFormElement`\>

Allows getting a ref to the component instance.
Once the component unmounts, React will set `ref.current` to `null`
(or call the ref with `null` if you passed a callback ref).

#### See

[React Docs](https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom)

#### Inherited from

`HTMLFormProps.ref`

#### Defined in

node\_modules/@types/react/index.d.ts:303

***

### rel?

> `optional` **rel**: `string`

#### Inherited from

`HTMLFormProps.rel`

#### Defined in

node\_modules/@types/react/index.d.ts:2926

***

### resource?

> `optional` **resource**: `string`

#### Inherited from

`HTMLFormProps.resource`

#### Defined in

node\_modules/@types/react/index.d.ts:2927

***

### results?

> `optional` **results**: `number`

#### Inherited from

`HTMLFormProps.results`

#### Defined in

node\_modules/@types/react/index.d.ts:2942

***

### rev?

> `optional` **rev**: `string`

#### Inherited from

`HTMLFormProps.rev`

#### Defined in

node\_modules/@types/react/index.d.ts:2928

***

### role?

> `optional` **role**: `AriaRole`

#### Inherited from

`HTMLFormProps.role`

#### Defined in

node\_modules/@types/react/index.d.ts:2917

***

### security?

> `optional` **security**: `string`

#### Inherited from

`HTMLFormProps.security`

#### Defined in

node\_modules/@types/react/index.d.ts:2943

***

### slot?

> `optional` **slot**: `string`

#### Inherited from

`HTMLFormProps.slot`

#### Defined in

node\_modules/@types/react/index.d.ts:2906

***

### spellCheck?

> `optional` **spellCheck**: `Booleanish`

#### Inherited from

`HTMLFormProps.spellCheck`

#### Defined in

node\_modules/@types/react/index.d.ts:2907

***

### style?

> `optional` **style**: `CSSProperties`

#### Inherited from

`HTMLFormProps.style`

#### Defined in

node\_modules/@types/react/index.d.ts:2908

***

### suppressContentEditableWarning?

> `optional` **suppressContentEditableWarning**: `boolean`

#### Inherited from

`HTMLFormProps.suppressContentEditableWarning`

#### Defined in

node\_modules/@types/react/index.d.ts:2891

***

### suppressHydrationWarning?

> `optional` **suppressHydrationWarning**: `boolean`

#### Inherited from

`HTMLFormProps.suppressHydrationWarning`

#### Defined in

node\_modules/@types/react/index.d.ts:2892

***

### tabIndex?

> `optional` **tabIndex**: `number`

#### Inherited from

`HTMLFormProps.tabIndex`

#### Defined in

node\_modules/@types/react/index.d.ts:2909

***

### target?

> `optional` **target**: `string`

#### Inherited from

`HTMLFormProps.target`

#### Defined in

node\_modules/@types/react/index.d.ts:3213

***

### title?

> `optional` **title**: `string`

#### Inherited from

`HTMLFormProps.title`

#### Defined in

node\_modules/@types/react/index.d.ts:2910

***

### translate?

> `optional` **translate**: `"yes"` \| `"no"`

#### Inherited from

`HTMLFormProps.translate`

#### Defined in

node\_modules/@types/react/index.d.ts:2911

***

### typeof?

> `optional` **typeof**: `string`

#### Inherited from

`HTMLFormProps.typeof`

#### Defined in

node\_modules/@types/react/index.d.ts:2929

***

### unselectable?

> `optional` **unselectable**: `"on"` \| `"off"`

#### Inherited from

`HTMLFormProps.unselectable`

#### Defined in

node\_modules/@types/react/index.d.ts:2944

***

### validation

> **validation**: `ObjectSchema`\<`T`, `AnyObject`, `any`, `""`\> \| `ZodType`\<`T`, `ZodTypeDef`, `T`\> \| `Adapter`\<`T`\>

A validation schema of `T` used to validate the form fields. Both Yup and
Zod schemas are supported out-of-the-box.

However, if you want to use another validation library, or your own
schemas, you can also pass a validation Adapter|Adapter<T> which
tells the form and the hooks how to handle the validation.

#### Inherited from

`FormProviderProps.validation`

#### Defined in

packages/core/dist/lib/Form.provider.d.ts:102

***

### values?

> `optional` **values**: `DeepPartial`\<`T`\>

The values `T` of the form. Changing this prop with a state will change
the field values as well.

#### Inherited from

`FormProviderProps.values`

#### Defined in

packages/core/dist/lib/Form.provider.d.ts:107

***

### vocab?

> `optional` **vocab**: `string`

#### Inherited from

`HTMLFormProps.vocab`

#### Defined in

node\_modules/@types/react/index.d.ts:2930
