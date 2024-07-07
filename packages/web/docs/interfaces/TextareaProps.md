[**@lynxts/web**](../README.md) • **Docs**

***

[@lynxts/web](../README.md) / TextareaProps

# Interface: TextareaProps\<T\>

The [Textarea](../functions/Textarea.md) component props which extends from the
HTMLTextAreaElement attributes.

## Extends

- `TextareaHTMLAttributes`\<`HTMLTextAreaElement`\>

## Type Parameters

• **T** *extends* `Struct`

struct type of the form values

## Properties

### about?

> `optional` **about**: `string`

#### Inherited from

`TextareaHTMLAttributes.about`

#### Defined in

node\_modules/@types/react/index.d.ts:2920

***

### accessKey?

> `optional` **accessKey**: `string`

#### Inherited from

`TextareaHTMLAttributes.accessKey`

#### Defined in

node\_modules/@types/react/index.d.ts:2895

***

### aria-activedescendant?

> `optional` **aria-activedescendant**: `string`

Identifies the currently active element when DOM focus is on a composite widget, textbox, group, or application.

#### Inherited from

`TextareaHTMLAttributes.aria-activedescendant`

#### Defined in

node\_modules/@types/react/index.d.ts:2593

***

### aria-atomic?

> `optional` **aria-atomic**: `Booleanish`

Indicates whether assistive technologies will present all, or only parts of, the changed region based on the change notifications defined by the aria-relevant attribute.

#### Inherited from

`TextareaHTMLAttributes.aria-atomic`

#### Defined in

node\_modules/@types/react/index.d.ts:2595

***

### aria-autocomplete?

> `optional` **aria-autocomplete**: `"list"` \| `"none"` \| `"inline"` \| `"both"`

Indicates whether inputting text could trigger display of one or more predictions of the user's intended value for an input and specifies how predictions would be
presented if they are made.

#### Inherited from

`TextareaHTMLAttributes.aria-autocomplete`

#### Defined in

node\_modules/@types/react/index.d.ts:2600

***

### aria-braillelabel?

> `optional` **aria-braillelabel**: `string`

Defines a string value that labels the current element, which is intended to be converted into Braille.

#### See

aria-label.

#### Inherited from

`TextareaHTMLAttributes.aria-braillelabel`

#### Defined in

node\_modules/@types/react/index.d.ts:2606

***

### aria-brailleroledescription?

> `optional` **aria-brailleroledescription**: `string`

Defines a human-readable, author-localized abbreviated description for the role of an element, which is intended to be converted into Braille.

#### See

aria-roledescription.

#### Inherited from

`TextareaHTMLAttributes.aria-brailleroledescription`

#### Defined in

node\_modules/@types/react/index.d.ts:2611

***

### aria-busy?

> `optional` **aria-busy**: `Booleanish`

#### Inherited from

`TextareaHTMLAttributes.aria-busy`

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

`TextareaHTMLAttributes.aria-checked`

#### Defined in

node\_modules/@types/react/index.d.ts:2617

***

### aria-colcount?

> `optional` **aria-colcount**: `number`

Defines the total number of columns in a table, grid, or treegrid.

#### See

aria-colindex.

#### Inherited from

`TextareaHTMLAttributes.aria-colcount`

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

`TextareaHTMLAttributes.aria-colindex`

#### Defined in

node\_modules/@types/react/index.d.ts:2627

***

### aria-colindextext?

> `optional` **aria-colindextext**: `string`

Defines a human readable text alternative of aria-colindex.

#### See

aria-rowindextext.

#### Inherited from

`TextareaHTMLAttributes.aria-colindextext`

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

`TextareaHTMLAttributes.aria-colspan`

#### Defined in

node\_modules/@types/react/index.d.ts:2637

***

### aria-controls?

> `optional` **aria-controls**: `string`

Identifies the element (or elements) whose contents or presence are controlled by the current element.

#### See

aria-owns.

#### Inherited from

`TextareaHTMLAttributes.aria-controls`

#### Defined in

node\_modules/@types/react/index.d.ts:2642

***

### aria-current?

> `optional` **aria-current**: `boolean` \| `"time"` \| `"true"` \| `"false"` \| `"page"` \| `"step"` \| `"location"` \| `"date"`

Indicates the element that represents the current item within a container or set of related elements.

#### Inherited from

`TextareaHTMLAttributes.aria-current`

#### Defined in

node\_modules/@types/react/index.d.ts:2644

***

### aria-describedby?

> `optional` **aria-describedby**: `string`

Identifies the element (or elements) that describes the object.

#### See

aria-labelledby

#### Inherited from

`TextareaHTMLAttributes.aria-describedby`

#### Defined in

node\_modules/@types/react/index.d.ts:2649

***

### aria-description?

> `optional` **aria-description**: `string`

Defines a string value that describes or annotates the current element.

#### See

related aria-describedby.

#### Inherited from

`TextareaHTMLAttributes.aria-description`

#### Defined in

node\_modules/@types/react/index.d.ts:2654

***

### aria-details?

> `optional` **aria-details**: `string`

Identifies the element that provides a detailed, extended description for the object.

#### See

aria-describedby.

#### Inherited from

`TextareaHTMLAttributes.aria-details`

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

`TextareaHTMLAttributes.aria-disabled`

#### Defined in

node\_modules/@types/react/index.d.ts:2664

***

### ~~aria-dropeffect?~~

> `optional` **aria-dropeffect**: `"link"` \| `"none"` \| `"copy"` \| `"execute"` \| `"move"` \| `"popup"`

Indicates what functions can be performed when a dragged object is released on the drop target.

#### Deprecated

in ARIA 1.1

#### Inherited from

`TextareaHTMLAttributes.aria-dropeffect`

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

`TextareaHTMLAttributes.aria-errormessage`

#### Defined in

node\_modules/@types/react/index.d.ts:2674

***

### aria-expanded?

> `optional` **aria-expanded**: `Booleanish`

Indicates whether the element, or another grouping element it controls, is currently expanded or collapsed.

#### Inherited from

`TextareaHTMLAttributes.aria-expanded`

#### Defined in

node\_modules/@types/react/index.d.ts:2676

***

### aria-flowto?

> `optional` **aria-flowto**: `string`

Identifies the next element (or elements) in an alternate reading order of content which, at the user's discretion,
allows assistive technology to override the general default of reading in document source order.

#### Inherited from

`TextareaHTMLAttributes.aria-flowto`

#### Defined in

node\_modules/@types/react/index.d.ts:2681

***

### ~~aria-grabbed?~~

> `optional` **aria-grabbed**: `Booleanish`

Indicates an element's "grabbed" state in a drag-and-drop operation.

#### Deprecated

in ARIA 1.1

#### Inherited from

`TextareaHTMLAttributes.aria-grabbed`

#### Defined in

node\_modules/@types/react/index.d.ts:2686

***

### aria-haspopup?

> `optional` **aria-haspopup**: `boolean` \| `"dialog"` \| `"menu"` \| `"true"` \| `"false"` \| `"grid"` \| `"listbox"` \| `"tree"`

Indicates the availability and type of interactive popup element, such as menu or dialog, that can be triggered by an element.

#### Inherited from

`TextareaHTMLAttributes.aria-haspopup`

#### Defined in

node\_modules/@types/react/index.d.ts:2688

***

### aria-hidden?

> `optional` **aria-hidden**: `Booleanish`

Indicates whether the element is exposed to an accessibility API.

#### See

aria-disabled.

#### Inherited from

`TextareaHTMLAttributes.aria-hidden`

#### Defined in

node\_modules/@types/react/index.d.ts:2693

***

### aria-invalid?

> `optional` **aria-invalid**: `boolean` \| `"true"` \| `"false"` \| `"grammar"` \| `"spelling"`

Indicates the entered value does not conform to the format expected by the application.

#### See

aria-errormessage.

#### Inherited from

`TextareaHTMLAttributes.aria-invalid`

#### Defined in

node\_modules/@types/react/index.d.ts:2698

***

### aria-keyshortcuts?

> `optional` **aria-keyshortcuts**: `string`

Indicates keyboard shortcuts that an author has implemented to activate or give focus to an element.

#### Inherited from

`TextareaHTMLAttributes.aria-keyshortcuts`

#### Defined in

node\_modules/@types/react/index.d.ts:2700

***

### aria-label?

> `optional` **aria-label**: `string`

Defines a string value that labels the current element.

#### See

aria-labelledby.

#### Inherited from

`TextareaHTMLAttributes.aria-label`

#### Defined in

node\_modules/@types/react/index.d.ts:2705

***

### aria-labelledby?

> `optional` **aria-labelledby**: `string`

Identifies the element (or elements) that labels the current element.

#### See

aria-describedby.

#### Inherited from

`TextareaHTMLAttributes.aria-labelledby`

#### Defined in

node\_modules/@types/react/index.d.ts:2710

***

### aria-level?

> `optional` **aria-level**: `number`

Defines the hierarchical level of an element within a structure.

#### Inherited from

`TextareaHTMLAttributes.aria-level`

#### Defined in

node\_modules/@types/react/index.d.ts:2712

***

### aria-live?

> `optional` **aria-live**: `"off"` \| `"assertive"` \| `"polite"`

Indicates that an element will be updated, and describes the types of updates the user agents, assistive technologies, and user can expect from the live region.

#### Inherited from

`TextareaHTMLAttributes.aria-live`

#### Defined in

node\_modules/@types/react/index.d.ts:2714

***

### aria-modal?

> `optional` **aria-modal**: `Booleanish`

Indicates whether an element is modal when displayed.

#### Inherited from

`TextareaHTMLAttributes.aria-modal`

#### Defined in

node\_modules/@types/react/index.d.ts:2716

***

### aria-multiline?

> `optional` **aria-multiline**: `Booleanish`

Indicates whether a text box accepts multiple lines of input or only a single line.

#### Inherited from

`TextareaHTMLAttributes.aria-multiline`

#### Defined in

node\_modules/@types/react/index.d.ts:2718

***

### aria-multiselectable?

> `optional` **aria-multiselectable**: `Booleanish`

Indicates that the user may select more than one item from the current selectable descendants.

#### Inherited from

`TextareaHTMLAttributes.aria-multiselectable`

#### Defined in

node\_modules/@types/react/index.d.ts:2720

***

### aria-orientation?

> `optional` **aria-orientation**: `"horizontal"` \| `"vertical"`

Indicates whether the element's orientation is horizontal, vertical, or unknown/ambiguous.

#### Inherited from

`TextareaHTMLAttributes.aria-orientation`

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

`TextareaHTMLAttributes.aria-owns`

#### Defined in

node\_modules/@types/react/index.d.ts:2728

***

### aria-placeholder?

> `optional` **aria-placeholder**: `string`

Defines a short hint (a word or short phrase) intended to aid the user with data entry when the control has no value.
A hint could be a sample value or a brief description of the expected format.

#### Inherited from

`TextareaHTMLAttributes.aria-placeholder`

#### Defined in

node\_modules/@types/react/index.d.ts:2733

***

### aria-posinset?

> `optional` **aria-posinset**: `number`

Defines an element's number or position in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.

#### See

aria-setsize.

#### Inherited from

`TextareaHTMLAttributes.aria-posinset`

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

`TextareaHTMLAttributes.aria-pressed`

#### Defined in

node\_modules/@types/react/index.d.ts:2743

***

### aria-readonly?

> `optional` **aria-readonly**: `Booleanish`

Indicates that the element is not editable, but is otherwise operable.

#### See

aria-disabled.

#### Inherited from

`TextareaHTMLAttributes.aria-readonly`

#### Defined in

node\_modules/@types/react/index.d.ts:2748

***

### aria-relevant?

> `optional` **aria-relevant**: `"text"` \| `"additions"` \| `"additions removals"` \| `"additions text"` \| `"all"` \| `"removals"` \| `"removals additions"` \| `"removals text"` \| `"text additions"` \| `"text removals"`

Indicates what notifications the user agent will trigger when the accessibility tree within a live region is modified.

#### See

aria-atomic.

#### Inherited from

`TextareaHTMLAttributes.aria-relevant`

#### Defined in

node\_modules/@types/react/index.d.ts:2753

***

### aria-required?

> `optional` **aria-required**: `Booleanish`

Indicates that user input is required on the element before a form may be submitted.

#### Inherited from

`TextareaHTMLAttributes.aria-required`

#### Defined in

node\_modules/@types/react/index.d.ts:2766

***

### aria-roledescription?

> `optional` **aria-roledescription**: `string`

Defines a human-readable, author-localized description for the role of an element.

#### Inherited from

`TextareaHTMLAttributes.aria-roledescription`

#### Defined in

node\_modules/@types/react/index.d.ts:2768

***

### aria-rowcount?

> `optional` **aria-rowcount**: `number`

Defines the total number of rows in a table, grid, or treegrid.

#### See

aria-rowindex.

#### Inherited from

`TextareaHTMLAttributes.aria-rowcount`

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

`TextareaHTMLAttributes.aria-rowindex`

#### Defined in

node\_modules/@types/react/index.d.ts:2778

***

### aria-rowindextext?

> `optional` **aria-rowindextext**: `string`

Defines a human readable text alternative of aria-rowindex.

#### See

aria-colindextext.

#### Inherited from

`TextareaHTMLAttributes.aria-rowindextext`

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

`TextareaHTMLAttributes.aria-rowspan`

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

`TextareaHTMLAttributes.aria-selected`

#### Defined in

node\_modules/@types/react/index.d.ts:2793

***

### aria-setsize?

> `optional` **aria-setsize**: `number`

Defines the number of items in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.

#### See

aria-posinset.

#### Inherited from

`TextareaHTMLAttributes.aria-setsize`

#### Defined in

node\_modules/@types/react/index.d.ts:2798

***

### aria-sort?

> `optional` **aria-sort**: `"none"` \| `"ascending"` \| `"descending"` \| `"other"`

Indicates if items in a table or grid are sorted in ascending or descending order.

#### Inherited from

`TextareaHTMLAttributes.aria-sort`

#### Defined in

node\_modules/@types/react/index.d.ts:2800

***

### aria-valuemax?

> `optional` **aria-valuemax**: `number`

Defines the maximum allowed value for a range widget.

#### Inherited from

`TextareaHTMLAttributes.aria-valuemax`

#### Defined in

node\_modules/@types/react/index.d.ts:2802

***

### aria-valuemin?

> `optional` **aria-valuemin**: `number`

Defines the minimum allowed value for a range widget.

#### Inherited from

`TextareaHTMLAttributes.aria-valuemin`

#### Defined in

node\_modules/@types/react/index.d.ts:2804

***

### aria-valuenow?

> `optional` **aria-valuenow**: `number`

Defines the current value for a range widget.

#### See

aria-valuetext.

#### Inherited from

`TextareaHTMLAttributes.aria-valuenow`

#### Defined in

node\_modules/@types/react/index.d.ts:2809

***

### aria-valuetext?

> `optional` **aria-valuetext**: `string`

Defines the human readable text alternative of aria-valuenow for a range widget.

#### Inherited from

`TextareaHTMLAttributes.aria-valuetext`

#### Defined in

node\_modules/@types/react/index.d.ts:2811

***

### autoCapitalize?

> `optional` **autoCapitalize**: `string`

#### Inherited from

`TextareaHTMLAttributes.autoCapitalize`

#### Defined in

node\_modules/@types/react/index.d.ts:2933

***

### autoComplete?

> `optional` **autoComplete**: `string`

#### Inherited from

`TextareaHTMLAttributes.autoComplete`

#### Defined in

node\_modules/@types/react/index.d.ts:3572

***

### autoCorrect?

> `optional` **autoCorrect**: `string`

#### Inherited from

`TextareaHTMLAttributes.autoCorrect`

#### Defined in

node\_modules/@types/react/index.d.ts:2934

***

### autoFocus?

> `optional` **autoFocus**: `boolean`

#### Inherited from

`TextareaHTMLAttributes.autoFocus`

#### Defined in

node\_modules/@types/react/index.d.ts:2896

***

### autoSave?

> `optional` **autoSave**: `string`

#### Inherited from

`TextareaHTMLAttributes.autoSave`

#### Defined in

node\_modules/@types/react/index.d.ts:2935

***

### children?

> `optional` **children**: `ReactNode`

#### Inherited from

`TextareaHTMLAttributes.children`

#### Defined in

node\_modules/@types/react/index.d.ts:2379

***

### className?

> `optional` **className**: `string`

#### Inherited from

`TextareaHTMLAttributes.className`

#### Defined in

node\_modules/@types/react/index.d.ts:2897

***

### color?

> `optional` **color**: `string`

#### Inherited from

`TextareaHTMLAttributes.color`

#### Defined in

node\_modules/@types/react/index.d.ts:2936

***

### cols?

> `optional` **cols**: `number`

#### Inherited from

`TextareaHTMLAttributes.cols`

#### Defined in

node\_modules/@types/react/index.d.ts:3573

***

### content?

> `optional` **content**: `string`

#### Inherited from

`TextareaHTMLAttributes.content`

#### Defined in

node\_modules/@types/react/index.d.ts:2921

***

### contentEditable?

> `optional` **contentEditable**: `Booleanish` \| `"inherit"` \| `"plaintext-only"`

#### Inherited from

`TextareaHTMLAttributes.contentEditable`

#### Defined in

node\_modules/@types/react/index.d.ts:2898

***

### contextMenu?

> `optional` **contextMenu**: `string`

#### Inherited from

`TextareaHTMLAttributes.contextMenu`

#### Defined in

node\_modules/@types/react/index.d.ts:2899

***

### dangerouslySetInnerHTML?

> `optional` **dangerouslySetInnerHTML**: `object`

#### \_\_html

> **\_\_html**: `string` \| `TrustedHTML`

#### Inherited from

`TextareaHTMLAttributes.dangerouslySetInnerHTML`

#### Defined in

node\_modules/@types/react/index.d.ts:2380

***

### datatype?

> `optional` **datatype**: `string`

#### Inherited from

`TextareaHTMLAttributes.datatype`

#### Defined in

node\_modules/@types/react/index.d.ts:2922

***

### defaultChecked?

> `optional` **defaultChecked**: `boolean`

#### Inherited from

`TextareaHTMLAttributes.defaultChecked`

#### Defined in

node\_modules/@types/react/index.d.ts:2889

***

### defaultValue?

> `optional` **defaultValue**: `string` \| `number` \| readonly `string`[]

#### Inherited from

`TextareaHTMLAttributes.defaultValue`

#### Defined in

node\_modules/@types/react/index.d.ts:2890

***

### dir?

> `optional` **dir**: `string`

#### Inherited from

`TextareaHTMLAttributes.dir`

#### Defined in

node\_modules/@types/react/index.d.ts:2900

***

### dirName?

> `optional` **dirName**: `string`

#### Inherited from

`TextareaHTMLAttributes.dirName`

#### Defined in

node\_modules/@types/react/index.d.ts:3574

***

### disabled?

> `optional` **disabled**: `boolean`

#### Inherited from

`TextareaHTMLAttributes.disabled`

#### Defined in

node\_modules/@types/react/index.d.ts:3575

***

### draggable?

> `optional` **draggable**: `Booleanish`

#### Inherited from

`TextareaHTMLAttributes.draggable`

#### Defined in

node\_modules/@types/react/index.d.ts:2901

***

### form?

> `optional` **form**: `string`

#### Inherited from

`TextareaHTMLAttributes.form`

#### Defined in

node\_modules/@types/react/index.d.ts:3576

***

### hidden?

> `optional` **hidden**: `boolean`

#### Inherited from

`TextareaHTMLAttributes.hidden`

#### Defined in

node\_modules/@types/react/index.d.ts:2902

***

### id?

> `optional` **id**: `string`

#### Inherited from

`TextareaHTMLAttributes.id`

#### Defined in

node\_modules/@types/react/index.d.ts:2903

***

### inline?

> `optional` **inline**: `boolean`

Renders the label and textarea in inline mode when true, block mode
otherwise.

#### Default

```ts
false
```

#### Defined in

[packages/web/src/lib/fields/Textarea.component.tsx:27](https://github.com/JoseLion/lynxts/blob/main/packages/web/src/lib/fields/Textarea.component.tsx#L27)

***

### inlist?

> `optional` **inlist**: `any`

#### Inherited from

`TextareaHTMLAttributes.inlist`

#### Defined in

node\_modules/@types/react/index.d.ts:2923

***

### inputMode?

> `optional` **inputMode**: `"search"` \| `"text"` \| `"none"` \| `"tel"` \| `"url"` \| `"email"` \| `"numeric"` \| `"decimal"`

Hints at the type of data that might be entered by the user while editing the element or its contents

#### See

[https://html.spec.whatwg.org/multipage/interaction.html#input-modalities:-the-inputmode-attribute](https://html.spec.whatwg.org/multipage/interaction.html#input-modalities:-the-inputmode-attribute)

#### Inherited from

`TextareaHTMLAttributes.inputMode`

#### Defined in

node\_modules/@types/react/index.d.ts:2951

***

### is?

> `optional` **is**: `string`

Specify that a standard HTML element should behave like a defined custom built-in element

#### See

[https://html.spec.whatwg.org/multipage/custom-elements.html#attr-is](https://html.spec.whatwg.org/multipage/custom-elements.html#attr-is)

#### Inherited from

`TextareaHTMLAttributes.is`

#### Defined in

node\_modules/@types/react/index.d.ts:2956

***

### itemID?

> `optional` **itemID**: `string`

#### Inherited from

`TextareaHTMLAttributes.itemID`

#### Defined in

node\_modules/@types/react/index.d.ts:2940

***

### itemProp?

> `optional` **itemProp**: `string`

#### Inherited from

`TextareaHTMLAttributes.itemProp`

#### Defined in

node\_modules/@types/react/index.d.ts:2937

***

### itemRef?

> `optional` **itemRef**: `string`

#### Inherited from

`TextareaHTMLAttributes.itemRef`

#### Defined in

node\_modules/@types/react/index.d.ts:2941

***

### itemScope?

> `optional` **itemScope**: `boolean`

#### Inherited from

`TextareaHTMLAttributes.itemScope`

#### Defined in

node\_modules/@types/react/index.d.ts:2938

***

### itemType?

> `optional` **itemType**: `string`

#### Inherited from

`TextareaHTMLAttributes.itemType`

#### Defined in

node\_modules/@types/react/index.d.ts:2939

***

### label?

> `optional` **label**: `string`

The `<label>` text content. The component does not render a `<label>`
element when this prop is omited, `undefined`, or an empty string.

#### Defined in

[packages/web/src/lib/fields/Textarea.component.tsx:32](https://github.com/JoseLion/lynxts/blob/main/packages/web/src/lib/fields/Textarea.component.tsx#L32)

***

### lang?

> `optional` **lang**: `string`

#### Inherited from

`TextareaHTMLAttributes.lang`

#### Defined in

node\_modules/@types/react/index.d.ts:2904

***

### maxLength?

> `optional` **maxLength**: `number`

#### Inherited from

`TextareaHTMLAttributes.maxLength`

#### Defined in

node\_modules/@types/react/index.d.ts:3577

***

### minLength?

> `optional` **minLength**: `number`

#### Inherited from

`TextareaHTMLAttributes.minLength`

#### Defined in

node\_modules/@types/react/index.d.ts:3578

***

### name

> **name**: `GetPath`\<`T`, `string`, `T`\>

The name of the field as a Path|Path\<T, string\>.

#### Overrides

`TextareaHTMLAttributes.name`

#### Defined in

[packages/web/src/lib/fields/Textarea.component.tsx:36](https://github.com/JoseLion/lynxts/blob/main/packages/web/src/lib/fields/Textarea.component.tsx#L36)

***

### nonce?

> `optional` **nonce**: `string`

#### Inherited from

`TextareaHTMLAttributes.nonce`

#### Defined in

node\_modules/@types/react/index.d.ts:2905

***

### onAbort?

> `optional` **onAbort**: `ReactEventHandler`\<`HTMLTextAreaElement`\>

#### Inherited from

`TextareaHTMLAttributes.onAbort`

#### Defined in

node\_modules/@types/react/index.d.ts:2439

***

### onAbortCapture?

> `optional` **onAbortCapture**: `ReactEventHandler`\<`HTMLTextAreaElement`\>

#### Inherited from

`TextareaHTMLAttributes.onAbortCapture`

#### Defined in

node\_modules/@types/react/index.d.ts:2440

***

### onAnimationEnd?

> `optional` **onAnimationEnd**: `AnimationEventHandler`\<`HTMLTextAreaElement`\>

#### Inherited from

`TextareaHTMLAttributes.onAnimationEnd`

#### Defined in

node\_modules/@types/react/index.d.ts:2569

***

### onAnimationEndCapture?

> `optional` **onAnimationEndCapture**: `AnimationEventHandler`\<`HTMLTextAreaElement`\>

#### Inherited from

`TextareaHTMLAttributes.onAnimationEndCapture`

#### Defined in

node\_modules/@types/react/index.d.ts:2570

***

### onAnimationIteration?

> `optional` **onAnimationIteration**: `AnimationEventHandler`\<`HTMLTextAreaElement`\>

#### Inherited from

`TextareaHTMLAttributes.onAnimationIteration`

#### Defined in

node\_modules/@types/react/index.d.ts:2571

***

### onAnimationIterationCapture?

> `optional` **onAnimationIterationCapture**: `AnimationEventHandler`\<`HTMLTextAreaElement`\>

#### Inherited from

`TextareaHTMLAttributes.onAnimationIterationCapture`

#### Defined in

node\_modules/@types/react/index.d.ts:2572

***

### onAnimationStart?

> `optional` **onAnimationStart**: `AnimationEventHandler`\<`HTMLTextAreaElement`\>

#### Inherited from

`TextareaHTMLAttributes.onAnimationStart`

#### Defined in

node\_modules/@types/react/index.d.ts:2567

***

### onAnimationStartCapture?

> `optional` **onAnimationStartCapture**: `AnimationEventHandler`\<`HTMLTextAreaElement`\>

#### Inherited from

`TextareaHTMLAttributes.onAnimationStartCapture`

#### Defined in

node\_modules/@types/react/index.d.ts:2568

***

### onAuxClick?

> `optional` **onAuxClick**: `MouseEventHandler`\<`HTMLTextAreaElement`\>

#### Inherited from

`TextareaHTMLAttributes.onAuxClick`

#### Defined in

node\_modules/@types/react/index.d.ts:2487

***

### onAuxClickCapture?

> `optional` **onAuxClickCapture**: `MouseEventHandler`\<`HTMLTextAreaElement`\>

#### Inherited from

`TextareaHTMLAttributes.onAuxClickCapture`

#### Defined in

node\_modules/@types/react/index.d.ts:2488

***

### onBeforeInput?

> `optional` **onBeforeInput**: `FormEventHandler`\<`HTMLTextAreaElement`\>

#### Inherited from

`TextareaHTMLAttributes.onBeforeInput`

#### Defined in

node\_modules/@types/react/index.d.ts:2411

***

### onBeforeInputCapture?

> `optional` **onBeforeInputCapture**: `FormEventHandler`\<`HTMLTextAreaElement`\>

#### Inherited from

`TextareaHTMLAttributes.onBeforeInputCapture`

#### Defined in

node\_modules/@types/react/index.d.ts:2412

***

### onBlur?

> `optional` **onBlur**: `FocusEventHandler`\<`HTMLTextAreaElement`\>

#### Inherited from

`TextareaHTMLAttributes.onBlur`

#### Defined in

node\_modules/@types/react/index.d.ts:2405

***

### onBlurCapture?

> `optional` **onBlurCapture**: `FocusEventHandler`\<`HTMLTextAreaElement`\>

#### Inherited from

`TextareaHTMLAttributes.onBlurCapture`

#### Defined in

node\_modules/@types/react/index.d.ts:2406

***

### onCanPlay?

> `optional` **onCanPlay**: `ReactEventHandler`\<`HTMLTextAreaElement`\>

#### Inherited from

`TextareaHTMLAttributes.onCanPlay`

#### Defined in

node\_modules/@types/react/index.d.ts:2441

***

### onCanPlayCapture?

> `optional` **onCanPlayCapture**: `ReactEventHandler`\<`HTMLTextAreaElement`\>

#### Inherited from

`TextareaHTMLAttributes.onCanPlayCapture`

#### Defined in

node\_modules/@types/react/index.d.ts:2442

***

### onCanPlayThrough?

> `optional` **onCanPlayThrough**: `ReactEventHandler`\<`HTMLTextAreaElement`\>

#### Inherited from

`TextareaHTMLAttributes.onCanPlayThrough`

#### Defined in

node\_modules/@types/react/index.d.ts:2443

***

### onCanPlayThroughCapture?

> `optional` **onCanPlayThroughCapture**: `ReactEventHandler`\<`HTMLTextAreaElement`\>

#### Inherited from

`TextareaHTMLAttributes.onCanPlayThroughCapture`

#### Defined in

node\_modules/@types/react/index.d.ts:2444

***

### onChange?

> `optional` **onChange**: `ChangeEventHandler`\<`HTMLTextAreaElement`\>

#### Inherited from

`TextareaHTMLAttributes.onChange`

#### Defined in

node\_modules/@types/react/index.d.ts:3587

***

### onChangeCapture?

> `optional` **onChangeCapture**: `FormEventHandler`\<`HTMLTextAreaElement`\>

#### Inherited from

`TextareaHTMLAttributes.onChangeCapture`

#### Defined in

node\_modules/@types/react/index.d.ts:2410

***

### onClick?

> `optional` **onClick**: `MouseEventHandler`\<`HTMLTextAreaElement`\>

#### Inherited from

`TextareaHTMLAttributes.onClick`

#### Defined in

node\_modules/@types/react/index.d.ts:2489

***

### onClickCapture?

> `optional` **onClickCapture**: `MouseEventHandler`\<`HTMLTextAreaElement`\>

#### Inherited from

`TextareaHTMLAttributes.onClickCapture`

#### Defined in

node\_modules/@types/react/index.d.ts:2490

***

### onCompositionEnd?

> `optional` **onCompositionEnd**: `CompositionEventHandler`\<`HTMLTextAreaElement`\>

#### Inherited from

`TextareaHTMLAttributes.onCompositionEnd`

#### Defined in

node\_modules/@types/react/index.d.ts:2395

***

### onCompositionEndCapture?

> `optional` **onCompositionEndCapture**: `CompositionEventHandler`\<`HTMLTextAreaElement`\>

#### Inherited from

`TextareaHTMLAttributes.onCompositionEndCapture`

#### Defined in

node\_modules/@types/react/index.d.ts:2396

***

### onCompositionStart?

> `optional` **onCompositionStart**: `CompositionEventHandler`\<`HTMLTextAreaElement`\>

#### Inherited from

`TextareaHTMLAttributes.onCompositionStart`

#### Defined in

node\_modules/@types/react/index.d.ts:2397

***

### onCompositionStartCapture?

> `optional` **onCompositionStartCapture**: `CompositionEventHandler`\<`HTMLTextAreaElement`\>

#### Inherited from

`TextareaHTMLAttributes.onCompositionStartCapture`

#### Defined in

node\_modules/@types/react/index.d.ts:2398

***

### onCompositionUpdate?

> `optional` **onCompositionUpdate**: `CompositionEventHandler`\<`HTMLTextAreaElement`\>

#### Inherited from

`TextareaHTMLAttributes.onCompositionUpdate`

#### Defined in

node\_modules/@types/react/index.d.ts:2399

***

### onCompositionUpdateCapture?

> `optional` **onCompositionUpdateCapture**: `CompositionEventHandler`\<`HTMLTextAreaElement`\>

#### Inherited from

`TextareaHTMLAttributes.onCompositionUpdateCapture`

#### Defined in

node\_modules/@types/react/index.d.ts:2400

***

### onContextMenu?

> `optional` **onContextMenu**: `MouseEventHandler`\<`HTMLTextAreaElement`\>

#### Inherited from

`TextareaHTMLAttributes.onContextMenu`

#### Defined in

node\_modules/@types/react/index.d.ts:2491

***

### onContextMenuCapture?

> `optional` **onContextMenuCapture**: `MouseEventHandler`\<`HTMLTextAreaElement`\>

#### Inherited from

`TextareaHTMLAttributes.onContextMenuCapture`

#### Defined in

node\_modules/@types/react/index.d.ts:2492

***

### onCopy?

> `optional` **onCopy**: `ClipboardEventHandler`\<`HTMLTextAreaElement`\>

#### Inherited from

`TextareaHTMLAttributes.onCopy`

#### Defined in

node\_modules/@types/react/index.d.ts:2387

***

### onCopyCapture?

> `optional` **onCopyCapture**: `ClipboardEventHandler`\<`HTMLTextAreaElement`\>

#### Inherited from

`TextareaHTMLAttributes.onCopyCapture`

#### Defined in

node\_modules/@types/react/index.d.ts:2388

***

### onCut?

> `optional` **onCut**: `ClipboardEventHandler`\<`HTMLTextAreaElement`\>

#### Inherited from

`TextareaHTMLAttributes.onCut`

#### Defined in

node\_modules/@types/react/index.d.ts:2389

***

### onCutCapture?

> `optional` **onCutCapture**: `ClipboardEventHandler`\<`HTMLTextAreaElement`\>

#### Inherited from

`TextareaHTMLAttributes.onCutCapture`

#### Defined in

node\_modules/@types/react/index.d.ts:2390

***

### onDoubleClick?

> `optional` **onDoubleClick**: `MouseEventHandler`\<`HTMLTextAreaElement`\>

#### Inherited from

`TextareaHTMLAttributes.onDoubleClick`

#### Defined in

node\_modules/@types/react/index.d.ts:2493

***

### onDoubleClickCapture?

> `optional` **onDoubleClickCapture**: `MouseEventHandler`\<`HTMLTextAreaElement`\>

#### Inherited from

`TextareaHTMLAttributes.onDoubleClickCapture`

#### Defined in

node\_modules/@types/react/index.d.ts:2494

***

### onDrag?

> `optional` **onDrag**: `DragEventHandler`\<`HTMLTextAreaElement`\>

#### Inherited from

`TextareaHTMLAttributes.onDrag`

#### Defined in

node\_modules/@types/react/index.d.ts:2495

***

### onDragCapture?

> `optional` **onDragCapture**: `DragEventHandler`\<`HTMLTextAreaElement`\>

#### Inherited from

`TextareaHTMLAttributes.onDragCapture`

#### Defined in

node\_modules/@types/react/index.d.ts:2496

***

### onDragEnd?

> `optional` **onDragEnd**: `DragEventHandler`\<`HTMLTextAreaElement`\>

#### Inherited from

`TextareaHTMLAttributes.onDragEnd`

#### Defined in

node\_modules/@types/react/index.d.ts:2497

***

### onDragEndCapture?

> `optional` **onDragEndCapture**: `DragEventHandler`\<`HTMLTextAreaElement`\>

#### Inherited from

`TextareaHTMLAttributes.onDragEndCapture`

#### Defined in

node\_modules/@types/react/index.d.ts:2498

***

### onDragEnter?

> `optional` **onDragEnter**: `DragEventHandler`\<`HTMLTextAreaElement`\>

#### Inherited from

`TextareaHTMLAttributes.onDragEnter`

#### Defined in

node\_modules/@types/react/index.d.ts:2499

***

### onDragEnterCapture?

> `optional` **onDragEnterCapture**: `DragEventHandler`\<`HTMLTextAreaElement`\>

#### Inherited from

`TextareaHTMLAttributes.onDragEnterCapture`

#### Defined in

node\_modules/@types/react/index.d.ts:2500

***

### onDragExit?

> `optional` **onDragExit**: `DragEventHandler`\<`HTMLTextAreaElement`\>

#### Inherited from

`TextareaHTMLAttributes.onDragExit`

#### Defined in

node\_modules/@types/react/index.d.ts:2501

***

### onDragExitCapture?

> `optional` **onDragExitCapture**: `DragEventHandler`\<`HTMLTextAreaElement`\>

#### Inherited from

`TextareaHTMLAttributes.onDragExitCapture`

#### Defined in

node\_modules/@types/react/index.d.ts:2502

***

### onDragLeave?

> `optional` **onDragLeave**: `DragEventHandler`\<`HTMLTextAreaElement`\>

#### Inherited from

`TextareaHTMLAttributes.onDragLeave`

#### Defined in

node\_modules/@types/react/index.d.ts:2503

***

### onDragLeaveCapture?

> `optional` **onDragLeaveCapture**: `DragEventHandler`\<`HTMLTextAreaElement`\>

#### Inherited from

`TextareaHTMLAttributes.onDragLeaveCapture`

#### Defined in

node\_modules/@types/react/index.d.ts:2504

***

### onDragOver?

> `optional` **onDragOver**: `DragEventHandler`\<`HTMLTextAreaElement`\>

#### Inherited from

`TextareaHTMLAttributes.onDragOver`

#### Defined in

node\_modules/@types/react/index.d.ts:2505

***

### onDragOverCapture?

> `optional` **onDragOverCapture**: `DragEventHandler`\<`HTMLTextAreaElement`\>

#### Inherited from

`TextareaHTMLAttributes.onDragOverCapture`

#### Defined in

node\_modules/@types/react/index.d.ts:2506

***

### onDragStart?

> `optional` **onDragStart**: `DragEventHandler`\<`HTMLTextAreaElement`\>

#### Inherited from

`TextareaHTMLAttributes.onDragStart`

#### Defined in

node\_modules/@types/react/index.d.ts:2507

***

### onDragStartCapture?

> `optional` **onDragStartCapture**: `DragEventHandler`\<`HTMLTextAreaElement`\>

#### Inherited from

`TextareaHTMLAttributes.onDragStartCapture`

#### Defined in

node\_modules/@types/react/index.d.ts:2508

***

### onDrop?

> `optional` **onDrop**: `DragEventHandler`\<`HTMLTextAreaElement`\>

#### Inherited from

`TextareaHTMLAttributes.onDrop`

#### Defined in

node\_modules/@types/react/index.d.ts:2509

***

### onDropCapture?

> `optional` **onDropCapture**: `DragEventHandler`\<`HTMLTextAreaElement`\>

#### Inherited from

`TextareaHTMLAttributes.onDropCapture`

#### Defined in

node\_modules/@types/react/index.d.ts:2510

***

### onDurationChange?

> `optional` **onDurationChange**: `ReactEventHandler`\<`HTMLTextAreaElement`\>

#### Inherited from

`TextareaHTMLAttributes.onDurationChange`

#### Defined in

node\_modules/@types/react/index.d.ts:2445

***

### onDurationChangeCapture?

> `optional` **onDurationChangeCapture**: `ReactEventHandler`\<`HTMLTextAreaElement`\>

#### Inherited from

`TextareaHTMLAttributes.onDurationChangeCapture`

#### Defined in

node\_modules/@types/react/index.d.ts:2446

***

### onEmptied?

> `optional` **onEmptied**: `ReactEventHandler`\<`HTMLTextAreaElement`\>

#### Inherited from

`TextareaHTMLAttributes.onEmptied`

#### Defined in

node\_modules/@types/react/index.d.ts:2447

***

### onEmptiedCapture?

> `optional` **onEmptiedCapture**: `ReactEventHandler`\<`HTMLTextAreaElement`\>

#### Inherited from

`TextareaHTMLAttributes.onEmptiedCapture`

#### Defined in

node\_modules/@types/react/index.d.ts:2448

***

### onEncrypted?

> `optional` **onEncrypted**: `ReactEventHandler`\<`HTMLTextAreaElement`\>

#### Inherited from

`TextareaHTMLAttributes.onEncrypted`

#### Defined in

node\_modules/@types/react/index.d.ts:2449

***

### onEncryptedCapture?

> `optional` **onEncryptedCapture**: `ReactEventHandler`\<`HTMLTextAreaElement`\>

#### Inherited from

`TextareaHTMLAttributes.onEncryptedCapture`

#### Defined in

node\_modules/@types/react/index.d.ts:2450

***

### onEnded?

> `optional` **onEnded**: `ReactEventHandler`\<`HTMLTextAreaElement`\>

#### Inherited from

`TextareaHTMLAttributes.onEnded`

#### Defined in

node\_modules/@types/react/index.d.ts:2451

***

### onEndedCapture?

> `optional` **onEndedCapture**: `ReactEventHandler`\<`HTMLTextAreaElement`\>

#### Inherited from

`TextareaHTMLAttributes.onEndedCapture`

#### Defined in

node\_modules/@types/react/index.d.ts:2452

***

### onError?

> `optional` **onError**: `ReactEventHandler`\<`HTMLTextAreaElement`\>

#### Inherited from

`TextareaHTMLAttributes.onError`

#### Defined in

node\_modules/@types/react/index.d.ts:2425

***

### onErrorCapture?

> `optional` **onErrorCapture**: `ReactEventHandler`\<`HTMLTextAreaElement`\>

#### Inherited from

`TextareaHTMLAttributes.onErrorCapture`

#### Defined in

node\_modules/@types/react/index.d.ts:2426

***

### onFocus?

> `optional` **onFocus**: `FocusEventHandler`\<`HTMLTextAreaElement`\>

#### Inherited from

`TextareaHTMLAttributes.onFocus`

#### Defined in

node\_modules/@types/react/index.d.ts:2403

***

### onFocusCapture?

> `optional` **onFocusCapture**: `FocusEventHandler`\<`HTMLTextAreaElement`\>

#### Inherited from

`TextareaHTMLAttributes.onFocusCapture`

#### Defined in

node\_modules/@types/react/index.d.ts:2404

***

### onGotPointerCapture?

> `optional` **onGotPointerCapture**: `PointerEventHandler`\<`HTMLTextAreaElement`\>

#### Inherited from

`TextareaHTMLAttributes.onGotPointerCapture`

#### Defined in

node\_modules/@types/react/index.d.ts:2553

***

### onGotPointerCaptureCapture?

> `optional` **onGotPointerCaptureCapture**: `PointerEventHandler`\<`HTMLTextAreaElement`\>

#### Inherited from

`TextareaHTMLAttributes.onGotPointerCaptureCapture`

#### Defined in

node\_modules/@types/react/index.d.ts:2554

***

### onInput?

> `optional` **onInput**: `FormEventHandler`\<`HTMLTextAreaElement`\>

#### Inherited from

`TextareaHTMLAttributes.onInput`

#### Defined in

node\_modules/@types/react/index.d.ts:2413

***

### onInputCapture?

> `optional` **onInputCapture**: `FormEventHandler`\<`HTMLTextAreaElement`\>

#### Inherited from

`TextareaHTMLAttributes.onInputCapture`

#### Defined in

node\_modules/@types/react/index.d.ts:2414

***

### onInvalid?

> `optional` **onInvalid**: `FormEventHandler`\<`HTMLTextAreaElement`\>

#### Inherited from

`TextareaHTMLAttributes.onInvalid`

#### Defined in

node\_modules/@types/react/index.d.ts:2419

***

### onInvalidCapture?

> `optional` **onInvalidCapture**: `FormEventHandler`\<`HTMLTextAreaElement`\>

#### Inherited from

`TextareaHTMLAttributes.onInvalidCapture`

#### Defined in

node\_modules/@types/react/index.d.ts:2420

***

### onKeyDown?

> `optional` **onKeyDown**: `KeyboardEventHandler`\<`HTMLTextAreaElement`\>

#### Inherited from

`TextareaHTMLAttributes.onKeyDown`

#### Defined in

node\_modules/@types/react/index.d.ts:2429

***

### onKeyDownCapture?

> `optional` **onKeyDownCapture**: `KeyboardEventHandler`\<`HTMLTextAreaElement`\>

#### Inherited from

`TextareaHTMLAttributes.onKeyDownCapture`

#### Defined in

node\_modules/@types/react/index.d.ts:2430

***

### ~~onKeyPress?~~

> `optional` **onKeyPress**: `KeyboardEventHandler`\<`HTMLTextAreaElement`\>

#### Deprecated

#### Inherited from

`TextareaHTMLAttributes.onKeyPress`

#### Defined in

node\_modules/@types/react/index.d.ts:2432

***

### ~~onKeyPressCapture?~~

> `optional` **onKeyPressCapture**: `KeyboardEventHandler`\<`HTMLTextAreaElement`\>

#### Deprecated

#### Inherited from

`TextareaHTMLAttributes.onKeyPressCapture`

#### Defined in

node\_modules/@types/react/index.d.ts:2434

***

### onKeyUp?

> `optional` **onKeyUp**: `KeyboardEventHandler`\<`HTMLTextAreaElement`\>

#### Inherited from

`TextareaHTMLAttributes.onKeyUp`

#### Defined in

node\_modules/@types/react/index.d.ts:2435

***

### onKeyUpCapture?

> `optional` **onKeyUpCapture**: `KeyboardEventHandler`\<`HTMLTextAreaElement`\>

#### Inherited from

`TextareaHTMLAttributes.onKeyUpCapture`

#### Defined in

node\_modules/@types/react/index.d.ts:2436

***

### onLoad?

> `optional` **onLoad**: `ReactEventHandler`\<`HTMLTextAreaElement`\>

#### Inherited from

`TextareaHTMLAttributes.onLoad`

#### Defined in

node\_modules/@types/react/index.d.ts:2423

***

### onLoadCapture?

> `optional` **onLoadCapture**: `ReactEventHandler`\<`HTMLTextAreaElement`\>

#### Inherited from

`TextareaHTMLAttributes.onLoadCapture`

#### Defined in

node\_modules/@types/react/index.d.ts:2424

***

### onLoadStart?

> `optional` **onLoadStart**: `ReactEventHandler`\<`HTMLTextAreaElement`\>

#### Inherited from

`TextareaHTMLAttributes.onLoadStart`

#### Defined in

node\_modules/@types/react/index.d.ts:2457

***

### onLoadStartCapture?

> `optional` **onLoadStartCapture**: `ReactEventHandler`\<`HTMLTextAreaElement`\>

#### Inherited from

`TextareaHTMLAttributes.onLoadStartCapture`

#### Defined in

node\_modules/@types/react/index.d.ts:2458

***

### onLoadedData?

> `optional` **onLoadedData**: `ReactEventHandler`\<`HTMLTextAreaElement`\>

#### Inherited from

`TextareaHTMLAttributes.onLoadedData`

#### Defined in

node\_modules/@types/react/index.d.ts:2453

***

### onLoadedDataCapture?

> `optional` **onLoadedDataCapture**: `ReactEventHandler`\<`HTMLTextAreaElement`\>

#### Inherited from

`TextareaHTMLAttributes.onLoadedDataCapture`

#### Defined in

node\_modules/@types/react/index.d.ts:2454

***

### onLoadedMetadata?

> `optional` **onLoadedMetadata**: `ReactEventHandler`\<`HTMLTextAreaElement`\>

#### Inherited from

`TextareaHTMLAttributes.onLoadedMetadata`

#### Defined in

node\_modules/@types/react/index.d.ts:2455

***

### onLoadedMetadataCapture?

> `optional` **onLoadedMetadataCapture**: `ReactEventHandler`\<`HTMLTextAreaElement`\>

#### Inherited from

`TextareaHTMLAttributes.onLoadedMetadataCapture`

#### Defined in

node\_modules/@types/react/index.d.ts:2456

***

### onLostPointerCapture?

> `optional` **onLostPointerCapture**: `PointerEventHandler`\<`HTMLTextAreaElement`\>

#### Inherited from

`TextareaHTMLAttributes.onLostPointerCapture`

#### Defined in

node\_modules/@types/react/index.d.ts:2555

***

### onLostPointerCaptureCapture?

> `optional` **onLostPointerCaptureCapture**: `PointerEventHandler`\<`HTMLTextAreaElement`\>

#### Inherited from

`TextareaHTMLAttributes.onLostPointerCaptureCapture`

#### Defined in

node\_modules/@types/react/index.d.ts:2556

***

### onMouseDown?

> `optional` **onMouseDown**: `MouseEventHandler`\<`HTMLTextAreaElement`\>

#### Inherited from

`TextareaHTMLAttributes.onMouseDown`

#### Defined in

node\_modules/@types/react/index.d.ts:2511

***

### onMouseDownCapture?

> `optional` **onMouseDownCapture**: `MouseEventHandler`\<`HTMLTextAreaElement`\>

#### Inherited from

`TextareaHTMLAttributes.onMouseDownCapture`

#### Defined in

node\_modules/@types/react/index.d.ts:2512

***

### onMouseEnter?

> `optional` **onMouseEnter**: `MouseEventHandler`\<`HTMLTextAreaElement`\>

#### Inherited from

`TextareaHTMLAttributes.onMouseEnter`

#### Defined in

node\_modules/@types/react/index.d.ts:2513

***

### onMouseLeave?

> `optional` **onMouseLeave**: `MouseEventHandler`\<`HTMLTextAreaElement`\>

#### Inherited from

`TextareaHTMLAttributes.onMouseLeave`

#### Defined in

node\_modules/@types/react/index.d.ts:2514

***

### onMouseMove?

> `optional` **onMouseMove**: `MouseEventHandler`\<`HTMLTextAreaElement`\>

#### Inherited from

`TextareaHTMLAttributes.onMouseMove`

#### Defined in

node\_modules/@types/react/index.d.ts:2515

***

### onMouseMoveCapture?

> `optional` **onMouseMoveCapture**: `MouseEventHandler`\<`HTMLTextAreaElement`\>

#### Inherited from

`TextareaHTMLAttributes.onMouseMoveCapture`

#### Defined in

node\_modules/@types/react/index.d.ts:2516

***

### onMouseOut?

> `optional` **onMouseOut**: `MouseEventHandler`\<`HTMLTextAreaElement`\>

#### Inherited from

`TextareaHTMLAttributes.onMouseOut`

#### Defined in

node\_modules/@types/react/index.d.ts:2517

***

### onMouseOutCapture?

> `optional` **onMouseOutCapture**: `MouseEventHandler`\<`HTMLTextAreaElement`\>

#### Inherited from

`TextareaHTMLAttributes.onMouseOutCapture`

#### Defined in

node\_modules/@types/react/index.d.ts:2518

***

### onMouseOver?

> `optional` **onMouseOver**: `MouseEventHandler`\<`HTMLTextAreaElement`\>

#### Inherited from

`TextareaHTMLAttributes.onMouseOver`

#### Defined in

node\_modules/@types/react/index.d.ts:2519

***

### onMouseOverCapture?

> `optional` **onMouseOverCapture**: `MouseEventHandler`\<`HTMLTextAreaElement`\>

#### Inherited from

`TextareaHTMLAttributes.onMouseOverCapture`

#### Defined in

node\_modules/@types/react/index.d.ts:2520

***

### onMouseUp?

> `optional` **onMouseUp**: `MouseEventHandler`\<`HTMLTextAreaElement`\>

#### Inherited from

`TextareaHTMLAttributes.onMouseUp`

#### Defined in

node\_modules/@types/react/index.d.ts:2521

***

### onMouseUpCapture?

> `optional` **onMouseUpCapture**: `MouseEventHandler`\<`HTMLTextAreaElement`\>

#### Inherited from

`TextareaHTMLAttributes.onMouseUpCapture`

#### Defined in

node\_modules/@types/react/index.d.ts:2522

***

### onPaste?

> `optional` **onPaste**: `ClipboardEventHandler`\<`HTMLTextAreaElement`\>

#### Inherited from

`TextareaHTMLAttributes.onPaste`

#### Defined in

node\_modules/@types/react/index.d.ts:2391

***

### onPasteCapture?

> `optional` **onPasteCapture**: `ClipboardEventHandler`\<`HTMLTextAreaElement`\>

#### Inherited from

`TextareaHTMLAttributes.onPasteCapture`

#### Defined in

node\_modules/@types/react/index.d.ts:2392

***

### onPause?

> `optional` **onPause**: `ReactEventHandler`\<`HTMLTextAreaElement`\>

#### Inherited from

`TextareaHTMLAttributes.onPause`

#### Defined in

node\_modules/@types/react/index.d.ts:2459

***

### onPauseCapture?

> `optional` **onPauseCapture**: `ReactEventHandler`\<`HTMLTextAreaElement`\>

#### Inherited from

`TextareaHTMLAttributes.onPauseCapture`

#### Defined in

node\_modules/@types/react/index.d.ts:2460

***

### onPlay?

> `optional` **onPlay**: `ReactEventHandler`\<`HTMLTextAreaElement`\>

#### Inherited from

`TextareaHTMLAttributes.onPlay`

#### Defined in

node\_modules/@types/react/index.d.ts:2461

***

### onPlayCapture?

> `optional` **onPlayCapture**: `ReactEventHandler`\<`HTMLTextAreaElement`\>

#### Inherited from

`TextareaHTMLAttributes.onPlayCapture`

#### Defined in

node\_modules/@types/react/index.d.ts:2462

***

### onPlaying?

> `optional` **onPlaying**: `ReactEventHandler`\<`HTMLTextAreaElement`\>

#### Inherited from

`TextareaHTMLAttributes.onPlaying`

#### Defined in

node\_modules/@types/react/index.d.ts:2463

***

### onPlayingCapture?

> `optional` **onPlayingCapture**: `ReactEventHandler`\<`HTMLTextAreaElement`\>

#### Inherited from

`TextareaHTMLAttributes.onPlayingCapture`

#### Defined in

node\_modules/@types/react/index.d.ts:2464

***

### onPointerCancel?

> `optional` **onPointerCancel**: `PointerEventHandler`\<`HTMLTextAreaElement`\>

#### Inherited from

`TextareaHTMLAttributes.onPointerCancel`

#### Defined in

node\_modules/@types/react/index.d.ts:2545

***

### onPointerCancelCapture?

> `optional` **onPointerCancelCapture**: `PointerEventHandler`\<`HTMLTextAreaElement`\>

#### Inherited from

`TextareaHTMLAttributes.onPointerCancelCapture`

#### Defined in

node\_modules/@types/react/index.d.ts:2546

***

### onPointerDown?

> `optional` **onPointerDown**: `PointerEventHandler`\<`HTMLTextAreaElement`\>

#### Inherited from

`TextareaHTMLAttributes.onPointerDown`

#### Defined in

node\_modules/@types/react/index.d.ts:2539

***

### onPointerDownCapture?

> `optional` **onPointerDownCapture**: `PointerEventHandler`\<`HTMLTextAreaElement`\>

#### Inherited from

`TextareaHTMLAttributes.onPointerDownCapture`

#### Defined in

node\_modules/@types/react/index.d.ts:2540

***

### onPointerEnter?

> `optional` **onPointerEnter**: `PointerEventHandler`\<`HTMLTextAreaElement`\>

#### Inherited from

`TextareaHTMLAttributes.onPointerEnter`

#### Defined in

node\_modules/@types/react/index.d.ts:2547

***

### onPointerLeave?

> `optional` **onPointerLeave**: `PointerEventHandler`\<`HTMLTextAreaElement`\>

#### Inherited from

`TextareaHTMLAttributes.onPointerLeave`

#### Defined in

node\_modules/@types/react/index.d.ts:2548

***

### onPointerMove?

> `optional` **onPointerMove**: `PointerEventHandler`\<`HTMLTextAreaElement`\>

#### Inherited from

`TextareaHTMLAttributes.onPointerMove`

#### Defined in

node\_modules/@types/react/index.d.ts:2541

***

### onPointerMoveCapture?

> `optional` **onPointerMoveCapture**: `PointerEventHandler`\<`HTMLTextAreaElement`\>

#### Inherited from

`TextareaHTMLAttributes.onPointerMoveCapture`

#### Defined in

node\_modules/@types/react/index.d.ts:2542

***

### onPointerOut?

> `optional` **onPointerOut**: `PointerEventHandler`\<`HTMLTextAreaElement`\>

#### Inherited from

`TextareaHTMLAttributes.onPointerOut`

#### Defined in

node\_modules/@types/react/index.d.ts:2551

***

### onPointerOutCapture?

> `optional` **onPointerOutCapture**: `PointerEventHandler`\<`HTMLTextAreaElement`\>

#### Inherited from

`TextareaHTMLAttributes.onPointerOutCapture`

#### Defined in

node\_modules/@types/react/index.d.ts:2552

***

### onPointerOver?

> `optional` **onPointerOver**: `PointerEventHandler`\<`HTMLTextAreaElement`\>

#### Inherited from

`TextareaHTMLAttributes.onPointerOver`

#### Defined in

node\_modules/@types/react/index.d.ts:2549

***

### onPointerOverCapture?

> `optional` **onPointerOverCapture**: `PointerEventHandler`\<`HTMLTextAreaElement`\>

#### Inherited from

`TextareaHTMLAttributes.onPointerOverCapture`

#### Defined in

node\_modules/@types/react/index.d.ts:2550

***

### onPointerUp?

> `optional` **onPointerUp**: `PointerEventHandler`\<`HTMLTextAreaElement`\>

#### Inherited from

`TextareaHTMLAttributes.onPointerUp`

#### Defined in

node\_modules/@types/react/index.d.ts:2543

***

### onPointerUpCapture?

> `optional` **onPointerUpCapture**: `PointerEventHandler`\<`HTMLTextAreaElement`\>

#### Inherited from

`TextareaHTMLAttributes.onPointerUpCapture`

#### Defined in

node\_modules/@types/react/index.d.ts:2544

***

### onProgress?

> `optional` **onProgress**: `ReactEventHandler`\<`HTMLTextAreaElement`\>

#### Inherited from

`TextareaHTMLAttributes.onProgress`

#### Defined in

node\_modules/@types/react/index.d.ts:2465

***

### onProgressCapture?

> `optional` **onProgressCapture**: `ReactEventHandler`\<`HTMLTextAreaElement`\>

#### Inherited from

`TextareaHTMLAttributes.onProgressCapture`

#### Defined in

node\_modules/@types/react/index.d.ts:2466

***

### onRateChange?

> `optional` **onRateChange**: `ReactEventHandler`\<`HTMLTextAreaElement`\>

#### Inherited from

`TextareaHTMLAttributes.onRateChange`

#### Defined in

node\_modules/@types/react/index.d.ts:2467

***

### onRateChangeCapture?

> `optional` **onRateChangeCapture**: `ReactEventHandler`\<`HTMLTextAreaElement`\>

#### Inherited from

`TextareaHTMLAttributes.onRateChangeCapture`

#### Defined in

node\_modules/@types/react/index.d.ts:2468

***

### onReset?

> `optional` **onReset**: `FormEventHandler`\<`HTMLTextAreaElement`\>

#### Inherited from

`TextareaHTMLAttributes.onReset`

#### Defined in

node\_modules/@types/react/index.d.ts:2415

***

### onResetCapture?

> `optional` **onResetCapture**: `FormEventHandler`\<`HTMLTextAreaElement`\>

#### Inherited from

`TextareaHTMLAttributes.onResetCapture`

#### Defined in

node\_modules/@types/react/index.d.ts:2416

***

### onResize?

> `optional` **onResize**: `ReactEventHandler`\<`HTMLTextAreaElement`\>

#### Inherited from

`TextareaHTMLAttributes.onResize`

#### Defined in

node\_modules/@types/react/index.d.ts:2469

***

### onResizeCapture?

> `optional` **onResizeCapture**: `ReactEventHandler`\<`HTMLTextAreaElement`\>

#### Inherited from

`TextareaHTMLAttributes.onResizeCapture`

#### Defined in

node\_modules/@types/react/index.d.ts:2470

***

### onScroll?

> `optional` **onScroll**: `UIEventHandler`\<`HTMLTextAreaElement`\>

#### Inherited from

`TextareaHTMLAttributes.onScroll`

#### Defined in

node\_modules/@types/react/index.d.ts:2559

***

### onScrollCapture?

> `optional` **onScrollCapture**: `UIEventHandler`\<`HTMLTextAreaElement`\>

#### Inherited from

`TextareaHTMLAttributes.onScrollCapture`

#### Defined in

node\_modules/@types/react/index.d.ts:2560

***

### onSeeked?

> `optional` **onSeeked**: `ReactEventHandler`\<`HTMLTextAreaElement`\>

#### Inherited from

`TextareaHTMLAttributes.onSeeked`

#### Defined in

node\_modules/@types/react/index.d.ts:2471

***

### onSeekedCapture?

> `optional` **onSeekedCapture**: `ReactEventHandler`\<`HTMLTextAreaElement`\>

#### Inherited from

`TextareaHTMLAttributes.onSeekedCapture`

#### Defined in

node\_modules/@types/react/index.d.ts:2472

***

### onSeeking?

> `optional` **onSeeking**: `ReactEventHandler`\<`HTMLTextAreaElement`\>

#### Inherited from

`TextareaHTMLAttributes.onSeeking`

#### Defined in

node\_modules/@types/react/index.d.ts:2473

***

### onSeekingCapture?

> `optional` **onSeekingCapture**: `ReactEventHandler`\<`HTMLTextAreaElement`\>

#### Inherited from

`TextareaHTMLAttributes.onSeekingCapture`

#### Defined in

node\_modules/@types/react/index.d.ts:2474

***

### onSelect?

> `optional` **onSelect**: `ReactEventHandler`\<`HTMLTextAreaElement`\>

#### Inherited from

`TextareaHTMLAttributes.onSelect`

#### Defined in

node\_modules/@types/react/index.d.ts:2525

***

### onSelectCapture?

> `optional` **onSelectCapture**: `ReactEventHandler`\<`HTMLTextAreaElement`\>

#### Inherited from

`TextareaHTMLAttributes.onSelectCapture`

#### Defined in

node\_modules/@types/react/index.d.ts:2526

***

### onStalled?

> `optional` **onStalled**: `ReactEventHandler`\<`HTMLTextAreaElement`\>

#### Inherited from

`TextareaHTMLAttributes.onStalled`

#### Defined in

node\_modules/@types/react/index.d.ts:2475

***

### onStalledCapture?

> `optional` **onStalledCapture**: `ReactEventHandler`\<`HTMLTextAreaElement`\>

#### Inherited from

`TextareaHTMLAttributes.onStalledCapture`

#### Defined in

node\_modules/@types/react/index.d.ts:2476

***

### onSubmit?

> `optional` **onSubmit**: `FormEventHandler`\<`HTMLTextAreaElement`\>

#### Inherited from

`TextareaHTMLAttributes.onSubmit`

#### Defined in

node\_modules/@types/react/index.d.ts:2417

***

### onSubmitCapture?

> `optional` **onSubmitCapture**: `FormEventHandler`\<`HTMLTextAreaElement`\>

#### Inherited from

`TextareaHTMLAttributes.onSubmitCapture`

#### Defined in

node\_modules/@types/react/index.d.ts:2418

***

### onSuspend?

> `optional` **onSuspend**: `ReactEventHandler`\<`HTMLTextAreaElement`\>

#### Inherited from

`TextareaHTMLAttributes.onSuspend`

#### Defined in

node\_modules/@types/react/index.d.ts:2477

***

### onSuspendCapture?

> `optional` **onSuspendCapture**: `ReactEventHandler`\<`HTMLTextAreaElement`\>

#### Inherited from

`TextareaHTMLAttributes.onSuspendCapture`

#### Defined in

node\_modules/@types/react/index.d.ts:2478

***

### onTimeUpdate?

> `optional` **onTimeUpdate**: `ReactEventHandler`\<`HTMLTextAreaElement`\>

#### Inherited from

`TextareaHTMLAttributes.onTimeUpdate`

#### Defined in

node\_modules/@types/react/index.d.ts:2479

***

### onTimeUpdateCapture?

> `optional` **onTimeUpdateCapture**: `ReactEventHandler`\<`HTMLTextAreaElement`\>

#### Inherited from

`TextareaHTMLAttributes.onTimeUpdateCapture`

#### Defined in

node\_modules/@types/react/index.d.ts:2480

***

### onTouchCancel?

> `optional` **onTouchCancel**: `TouchEventHandler`\<`HTMLTextAreaElement`\>

#### Inherited from

`TextareaHTMLAttributes.onTouchCancel`

#### Defined in

node\_modules/@types/react/index.d.ts:2529

***

### onTouchCancelCapture?

> `optional` **onTouchCancelCapture**: `TouchEventHandler`\<`HTMLTextAreaElement`\>

#### Inherited from

`TextareaHTMLAttributes.onTouchCancelCapture`

#### Defined in

node\_modules/@types/react/index.d.ts:2530

***

### onTouchEnd?

> `optional` **onTouchEnd**: `TouchEventHandler`\<`HTMLTextAreaElement`\>

#### Inherited from

`TextareaHTMLAttributes.onTouchEnd`

#### Defined in

node\_modules/@types/react/index.d.ts:2531

***

### onTouchEndCapture?

> `optional` **onTouchEndCapture**: `TouchEventHandler`\<`HTMLTextAreaElement`\>

#### Inherited from

`TextareaHTMLAttributes.onTouchEndCapture`

#### Defined in

node\_modules/@types/react/index.d.ts:2532

***

### onTouchMove?

> `optional` **onTouchMove**: `TouchEventHandler`\<`HTMLTextAreaElement`\>

#### Inherited from

`TextareaHTMLAttributes.onTouchMove`

#### Defined in

node\_modules/@types/react/index.d.ts:2533

***

### onTouchMoveCapture?

> `optional` **onTouchMoveCapture**: `TouchEventHandler`\<`HTMLTextAreaElement`\>

#### Inherited from

`TextareaHTMLAttributes.onTouchMoveCapture`

#### Defined in

node\_modules/@types/react/index.d.ts:2534

***

### onTouchStart?

> `optional` **onTouchStart**: `TouchEventHandler`\<`HTMLTextAreaElement`\>

#### Inherited from

`TextareaHTMLAttributes.onTouchStart`

#### Defined in

node\_modules/@types/react/index.d.ts:2535

***

### onTouchStartCapture?

> `optional` **onTouchStartCapture**: `TouchEventHandler`\<`HTMLTextAreaElement`\>

#### Inherited from

`TextareaHTMLAttributes.onTouchStartCapture`

#### Defined in

node\_modules/@types/react/index.d.ts:2536

***

### onTransitionEnd?

> `optional` **onTransitionEnd**: `TransitionEventHandler`\<`HTMLTextAreaElement`\>

#### Inherited from

`TextareaHTMLAttributes.onTransitionEnd`

#### Defined in

node\_modules/@types/react/index.d.ts:2575

***

### onTransitionEndCapture?

> `optional` **onTransitionEndCapture**: `TransitionEventHandler`\<`HTMLTextAreaElement`\>

#### Inherited from

`TextareaHTMLAttributes.onTransitionEndCapture`

#### Defined in

node\_modules/@types/react/index.d.ts:2576

***

### onVolumeChange?

> `optional` **onVolumeChange**: `ReactEventHandler`\<`HTMLTextAreaElement`\>

#### Inherited from

`TextareaHTMLAttributes.onVolumeChange`

#### Defined in

node\_modules/@types/react/index.d.ts:2481

***

### onVolumeChangeCapture?

> `optional` **onVolumeChangeCapture**: `ReactEventHandler`\<`HTMLTextAreaElement`\>

#### Inherited from

`TextareaHTMLAttributes.onVolumeChangeCapture`

#### Defined in

node\_modules/@types/react/index.d.ts:2482

***

### onWaiting?

> `optional` **onWaiting**: `ReactEventHandler`\<`HTMLTextAreaElement`\>

#### Inherited from

`TextareaHTMLAttributes.onWaiting`

#### Defined in

node\_modules/@types/react/index.d.ts:2483

***

### onWaitingCapture?

> `optional` **onWaitingCapture**: `ReactEventHandler`\<`HTMLTextAreaElement`\>

#### Inherited from

`TextareaHTMLAttributes.onWaitingCapture`

#### Defined in

node\_modules/@types/react/index.d.ts:2484

***

### onWheel?

> `optional` **onWheel**: `WheelEventHandler`\<`HTMLTextAreaElement`\>

#### Inherited from

`TextareaHTMLAttributes.onWheel`

#### Defined in

node\_modules/@types/react/index.d.ts:2563

***

### onWheelCapture?

> `optional` **onWheelCapture**: `WheelEventHandler`\<`HTMLTextAreaElement`\>

#### Inherited from

`TextareaHTMLAttributes.onWheelCapture`

#### Defined in

node\_modules/@types/react/index.d.ts:2564

***

### placeholder?

> `optional` **placeholder**: `string`

#### Inherited from

`TextareaHTMLAttributes.placeholder`

#### Defined in

node\_modules/@types/react/index.d.ts:3580

***

### prefix?

> `optional` **prefix**: `string`

#### Inherited from

`TextareaHTMLAttributes.prefix`

#### Defined in

node\_modules/@types/react/index.d.ts:2924

***

### property?

> `optional` **property**: `string`

#### Inherited from

`TextareaHTMLAttributes.property`

#### Defined in

node\_modules/@types/react/index.d.ts:2925

***

### radioGroup?

> `optional` **radioGroup**: `string`

#### Inherited from

`TextareaHTMLAttributes.radioGroup`

#### Defined in

node\_modules/@types/react/index.d.ts:2914

***

### readOnly?

> `optional` **readOnly**: `boolean`

#### Inherited from

`TextareaHTMLAttributes.readOnly`

#### Defined in

node\_modules/@types/react/index.d.ts:3581

***

### rel?

> `optional` **rel**: `string`

#### Inherited from

`TextareaHTMLAttributes.rel`

#### Defined in

node\_modules/@types/react/index.d.ts:2926

***

### required?

> `optional` **required**: `boolean`

#### Inherited from

`TextareaHTMLAttributes.required`

#### Defined in

node\_modules/@types/react/index.d.ts:3582

***

### requiredText?

> `optional` **requiredText**: `string`

The text to render besides the label text when the field is requried.

#### Default

```ts
"*"
```

#### Defined in

[packages/web/src/lib/fields/Textarea.component.tsx:42](https://github.com/JoseLion/lynxts/blob/main/packages/web/src/lib/fields/Textarea.component.tsx#L42)

***

### resource?

> `optional` **resource**: `string`

#### Inherited from

`TextareaHTMLAttributes.resource`

#### Defined in

node\_modules/@types/react/index.d.ts:2927

***

### results?

> `optional` **results**: `number`

#### Inherited from

`TextareaHTMLAttributes.results`

#### Defined in

node\_modules/@types/react/index.d.ts:2942

***

### rev?

> `optional` **rev**: `string`

#### Inherited from

`TextareaHTMLAttributes.rev`

#### Defined in

node\_modules/@types/react/index.d.ts:2928

***

### role?

> `optional` **role**: `AriaRole`

#### Inherited from

`TextareaHTMLAttributes.role`

#### Defined in

node\_modules/@types/react/index.d.ts:2917

***

### rows?

> `optional` **rows**: `number`

#### Inherited from

`TextareaHTMLAttributes.rows`

#### Defined in

node\_modules/@types/react/index.d.ts:3583

***

### security?

> `optional` **security**: `string`

#### Inherited from

`TextareaHTMLAttributes.security`

#### Defined in

node\_modules/@types/react/index.d.ts:2943

***

### slot?

> `optional` **slot**: `string`

#### Inherited from

`TextareaHTMLAttributes.slot`

#### Defined in

node\_modules/@types/react/index.d.ts:2906

***

### spellCheck?

> `optional` **spellCheck**: `Booleanish`

#### Inherited from

`TextareaHTMLAttributes.spellCheck`

#### Defined in

node\_modules/@types/react/index.d.ts:2907

***

### style?

> `optional` **style**: `CSSProperties`

#### Inherited from

`TextareaHTMLAttributes.style`

#### Defined in

node\_modules/@types/react/index.d.ts:2908

***

### suppressContentEditableWarning?

> `optional` **suppressContentEditableWarning**: `boolean`

#### Inherited from

`TextareaHTMLAttributes.suppressContentEditableWarning`

#### Defined in

node\_modules/@types/react/index.d.ts:2891

***

### suppressHydrationWarning?

> `optional` **suppressHydrationWarning**: `boolean`

#### Inherited from

`TextareaHTMLAttributes.suppressHydrationWarning`

#### Defined in

node\_modules/@types/react/index.d.ts:2892

***

### tabIndex?

> `optional` **tabIndex**: `number`

#### Inherited from

`TextareaHTMLAttributes.tabIndex`

#### Defined in

node\_modules/@types/react/index.d.ts:2909

***

### title?

> `optional` **title**: `string`

#### Inherited from

`TextareaHTMLAttributes.title`

#### Defined in

node\_modules/@types/react/index.d.ts:2910

***

### translate?

> `optional` **translate**: `"yes"` \| `"no"`

#### Inherited from

`TextareaHTMLAttributes.translate`

#### Defined in

node\_modules/@types/react/index.d.ts:2911

***

### typeof?

> `optional` **typeof**: `string`

#### Inherited from

`TextareaHTMLAttributes.typeof`

#### Defined in

node\_modules/@types/react/index.d.ts:2929

***

### unselectable?

> `optional` **unselectable**: `"on"` \| `"off"`

#### Inherited from

`TextareaHTMLAttributes.unselectable`

#### Defined in

node\_modules/@types/react/index.d.ts:2944

***

### value?

> `optional` **value**: `string` \| `number` \| readonly `string`[]

#### Inherited from

`TextareaHTMLAttributes.value`

#### Defined in

node\_modules/@types/react/index.d.ts:3584

***

### vocab?

> `optional` **vocab**: `string`

#### Inherited from

`TextareaHTMLAttributes.vocab`

#### Defined in

node\_modules/@types/react/index.d.ts:2930

***

### wrap?

> `optional` **wrap**: `string`

#### Inherited from

`TextareaHTMLAttributes.wrap`

#### Defined in

node\_modules/@types/react/index.d.ts:3585
