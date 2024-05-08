[**@lynxts/web**](../README.md) • **Docs**

***

[@lynxts/web](../README.md) / InputProps

# Interface: InputProps\<T\>

The [Input](../functions/Input.md) component props which extends from the
HTMLInputElement attributes.

## Extends

- `InputHTMLAttributes`\<`HTMLInputElement`\>

## Type parameters

• **T** *extends* `Struct`

struct type of the form values

## Properties

### about?

> `optional` **about**: `string`

#### Inherited from

`InputHTMLAttributes.about`

#### Source

node\_modules/@types/react/index.d.ts:2920

***

### accept?

> `optional` **accept**: `string`

#### Inherited from

`InputHTMLAttributes.accept`

#### Source

node\_modules/@types/react/index.d.ts:3351

***

### accessKey?

> `optional` **accessKey**: `string`

#### Inherited from

`InputHTMLAttributes.accessKey`

#### Source

node\_modules/@types/react/index.d.ts:2895

***

### alt?

> `optional` **alt**: `string`

#### Inherited from

`InputHTMLAttributes.alt`

#### Source

node\_modules/@types/react/index.d.ts:3352

***

### aria-activedescendant?

> `optional` **aria-activedescendant**: `string`

Identifies the currently active element when DOM focus is on a composite widget, textbox, group, or application.

#### Inherited from

`InputHTMLAttributes.aria-activedescendant`

#### Source

node\_modules/@types/react/index.d.ts:2593

***

### aria-atomic?

> `optional` **aria-atomic**: `Booleanish`

Indicates whether assistive technologies will present all, or only parts of, the changed region based on the change notifications defined by the aria-relevant attribute.

#### Inherited from

`InputHTMLAttributes.aria-atomic`

#### Source

node\_modules/@types/react/index.d.ts:2595

***

### aria-autocomplete?

> `optional` **aria-autocomplete**: `"list"` \| `"none"` \| `"inline"` \| `"both"`

Indicates whether inputting text could trigger display of one or more predictions of the user's intended value for an input and specifies how predictions would be
presented if they are made.

#### Inherited from

`InputHTMLAttributes.aria-autocomplete`

#### Source

node\_modules/@types/react/index.d.ts:2600

***

### aria-braillelabel?

> `optional` **aria-braillelabel**: `string`

Defines a string value that labels the current element, which is intended to be converted into Braille.

#### See

aria-label.

#### Inherited from

`InputHTMLAttributes.aria-braillelabel`

#### Source

node\_modules/@types/react/index.d.ts:2606

***

### aria-brailleroledescription?

> `optional` **aria-brailleroledescription**: `string`

Defines a human-readable, author-localized abbreviated description for the role of an element, which is intended to be converted into Braille.

#### See

aria-roledescription.

#### Inherited from

`InputHTMLAttributes.aria-brailleroledescription`

#### Source

node\_modules/@types/react/index.d.ts:2611

***

### aria-busy?

> `optional` **aria-busy**: `Booleanish`

#### Inherited from

`InputHTMLAttributes.aria-busy`

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

`InputHTMLAttributes.aria-checked`

#### Source

node\_modules/@types/react/index.d.ts:2617

***

### aria-colcount?

> `optional` **aria-colcount**: `number`

Defines the total number of columns in a table, grid, or treegrid.

#### See

aria-colindex.

#### Inherited from

`InputHTMLAttributes.aria-colcount`

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

`InputHTMLAttributes.aria-colindex`

#### Source

node\_modules/@types/react/index.d.ts:2627

***

### aria-colindextext?

> `optional` **aria-colindextext**: `string`

Defines a human readable text alternative of aria-colindex.

#### See

aria-rowindextext.

#### Inherited from

`InputHTMLAttributes.aria-colindextext`

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

`InputHTMLAttributes.aria-colspan`

#### Source

node\_modules/@types/react/index.d.ts:2637

***

### aria-controls?

> `optional` **aria-controls**: `string`

Identifies the element (or elements) whose contents or presence are controlled by the current element.

#### See

aria-owns.

#### Inherited from

`InputHTMLAttributes.aria-controls`

#### Source

node\_modules/@types/react/index.d.ts:2642

***

### aria-current?

> `optional` **aria-current**: `boolean` \| `"time"` \| `"true"` \| `"false"` \| `"page"` \| `"step"` \| `"location"` \| `"date"`

Indicates the element that represents the current item within a container or set of related elements.

#### Inherited from

`InputHTMLAttributes.aria-current`

#### Source

node\_modules/@types/react/index.d.ts:2644

***

### aria-describedby?

> `optional` **aria-describedby**: `string`

Identifies the element (or elements) that describes the object.

#### See

aria-labelledby

#### Inherited from

`InputHTMLAttributes.aria-describedby`

#### Source

node\_modules/@types/react/index.d.ts:2649

***

### aria-description?

> `optional` **aria-description**: `string`

Defines a string value that describes or annotates the current element.

#### See

related aria-describedby.

#### Inherited from

`InputHTMLAttributes.aria-description`

#### Source

node\_modules/@types/react/index.d.ts:2654

***

### aria-details?

> `optional` **aria-details**: `string`

Identifies the element that provides a detailed, extended description for the object.

#### See

aria-describedby.

#### Inherited from

`InputHTMLAttributes.aria-details`

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

`InputHTMLAttributes.aria-disabled`

#### Source

node\_modules/@types/react/index.d.ts:2664

***

### ~~aria-dropeffect?~~

> `optional` **aria-dropeffect**: `"link"` \| `"none"` \| `"copy"` \| `"execute"` \| `"move"` \| `"popup"`

Indicates what functions can be performed when a dragged object is released on the drop target.

#### Deprecated

in ARIA 1.1

#### Inherited from

`InputHTMLAttributes.aria-dropeffect`

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

`InputHTMLAttributes.aria-errormessage`

#### Source

node\_modules/@types/react/index.d.ts:2674

***

### aria-expanded?

> `optional` **aria-expanded**: `Booleanish`

Indicates whether the element, or another grouping element it controls, is currently expanded or collapsed.

#### Inherited from

`InputHTMLAttributes.aria-expanded`

#### Source

node\_modules/@types/react/index.d.ts:2676

***

### aria-flowto?

> `optional` **aria-flowto**: `string`

Identifies the next element (or elements) in an alternate reading order of content which, at the user's discretion,
allows assistive technology to override the general default of reading in document source order.

#### Inherited from

`InputHTMLAttributes.aria-flowto`

#### Source

node\_modules/@types/react/index.d.ts:2681

***

### ~~aria-grabbed?~~

> `optional` **aria-grabbed**: `Booleanish`

Indicates an element's "grabbed" state in a drag-and-drop operation.

#### Deprecated

in ARIA 1.1

#### Inherited from

`InputHTMLAttributes.aria-grabbed`

#### Source

node\_modules/@types/react/index.d.ts:2686

***

### aria-haspopup?

> `optional` **aria-haspopup**: `boolean` \| `"dialog"` \| `"menu"` \| `"true"` \| `"false"` \| `"grid"` \| `"listbox"` \| `"tree"`

Indicates the availability and type of interactive popup element, such as menu or dialog, that can be triggered by an element.

#### Inherited from

`InputHTMLAttributes.aria-haspopup`

#### Source

node\_modules/@types/react/index.d.ts:2688

***

### aria-hidden?

> `optional` **aria-hidden**: `Booleanish`

Indicates whether the element is exposed to an accessibility API.

#### See

aria-disabled.

#### Inherited from

`InputHTMLAttributes.aria-hidden`

#### Source

node\_modules/@types/react/index.d.ts:2693

***

### aria-invalid?

> `optional` **aria-invalid**: `boolean` \| `"true"` \| `"false"` \| `"grammar"` \| `"spelling"`

Indicates the entered value does not conform to the format expected by the application.

#### See

aria-errormessage.

#### Inherited from

`InputHTMLAttributes.aria-invalid`

#### Source

node\_modules/@types/react/index.d.ts:2698

***

### aria-keyshortcuts?

> `optional` **aria-keyshortcuts**: `string`

Indicates keyboard shortcuts that an author has implemented to activate or give focus to an element.

#### Inherited from

`InputHTMLAttributes.aria-keyshortcuts`

#### Source

node\_modules/@types/react/index.d.ts:2700

***

### aria-label?

> `optional` **aria-label**: `string`

Defines a string value that labels the current element.

#### See

aria-labelledby.

#### Inherited from

`InputHTMLAttributes.aria-label`

#### Source

node\_modules/@types/react/index.d.ts:2705

***

### aria-labelledby?

> `optional` **aria-labelledby**: `string`

Identifies the element (or elements) that labels the current element.

#### See

aria-describedby.

#### Inherited from

`InputHTMLAttributes.aria-labelledby`

#### Source

node\_modules/@types/react/index.d.ts:2710

***

### aria-level?

> `optional` **aria-level**: `number`

Defines the hierarchical level of an element within a structure.

#### Inherited from

`InputHTMLAttributes.aria-level`

#### Source

node\_modules/@types/react/index.d.ts:2712

***

### aria-live?

> `optional` **aria-live**: `"off"` \| `"assertive"` \| `"polite"`

Indicates that an element will be updated, and describes the types of updates the user agents, assistive technologies, and user can expect from the live region.

#### Inherited from

`InputHTMLAttributes.aria-live`

#### Source

node\_modules/@types/react/index.d.ts:2714

***

### aria-modal?

> `optional` **aria-modal**: `Booleanish`

Indicates whether an element is modal when displayed.

#### Inherited from

`InputHTMLAttributes.aria-modal`

#### Source

node\_modules/@types/react/index.d.ts:2716

***

### aria-multiline?

> `optional` **aria-multiline**: `Booleanish`

Indicates whether a text box accepts multiple lines of input or only a single line.

#### Inherited from

`InputHTMLAttributes.aria-multiline`

#### Source

node\_modules/@types/react/index.d.ts:2718

***

### aria-multiselectable?

> `optional` **aria-multiselectable**: `Booleanish`

Indicates that the user may select more than one item from the current selectable descendants.

#### Inherited from

`InputHTMLAttributes.aria-multiselectable`

#### Source

node\_modules/@types/react/index.d.ts:2720

***

### aria-orientation?

> `optional` **aria-orientation**: `"horizontal"` \| `"vertical"`

Indicates whether the element's orientation is horizontal, vertical, or unknown/ambiguous.

#### Inherited from

`InputHTMLAttributes.aria-orientation`

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

`InputHTMLAttributes.aria-owns`

#### Source

node\_modules/@types/react/index.d.ts:2728

***

### aria-placeholder?

> `optional` **aria-placeholder**: `string`

Defines a short hint (a word or short phrase) intended to aid the user with data entry when the control has no value.
A hint could be a sample value or a brief description of the expected format.

#### Inherited from

`InputHTMLAttributes.aria-placeholder`

#### Source

node\_modules/@types/react/index.d.ts:2733

***

### aria-posinset?

> `optional` **aria-posinset**: `number`

Defines an element's number or position in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.

#### See

aria-setsize.

#### Inherited from

`InputHTMLAttributes.aria-posinset`

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

`InputHTMLAttributes.aria-pressed`

#### Source

node\_modules/@types/react/index.d.ts:2743

***

### aria-readonly?

> `optional` **aria-readonly**: `Booleanish`

Indicates that the element is not editable, but is otherwise operable.

#### See

aria-disabled.

#### Inherited from

`InputHTMLAttributes.aria-readonly`

#### Source

node\_modules/@types/react/index.d.ts:2748

***

### aria-relevant?

> `optional` **aria-relevant**: `"text"` \| `"additions"` \| `"additions removals"` \| `"additions text"` \| `"all"` \| `"removals"` \| `"removals additions"` \| `"removals text"` \| `"text additions"` \| `"text removals"`

Indicates what notifications the user agent will trigger when the accessibility tree within a live region is modified.

#### See

aria-atomic.

#### Inherited from

`InputHTMLAttributes.aria-relevant`

#### Source

node\_modules/@types/react/index.d.ts:2753

***

### aria-required?

> `optional` **aria-required**: `Booleanish`

Indicates that user input is required on the element before a form may be submitted.

#### Inherited from

`InputHTMLAttributes.aria-required`

#### Source

node\_modules/@types/react/index.d.ts:2766

***

### aria-roledescription?

> `optional` **aria-roledescription**: `string`

Defines a human-readable, author-localized description for the role of an element.

#### Inherited from

`InputHTMLAttributes.aria-roledescription`

#### Source

node\_modules/@types/react/index.d.ts:2768

***

### aria-rowcount?

> `optional` **aria-rowcount**: `number`

Defines the total number of rows in a table, grid, or treegrid.

#### See

aria-rowindex.

#### Inherited from

`InputHTMLAttributes.aria-rowcount`

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

`InputHTMLAttributes.aria-rowindex`

#### Source

node\_modules/@types/react/index.d.ts:2778

***

### aria-rowindextext?

> `optional` **aria-rowindextext**: `string`

Defines a human readable text alternative of aria-rowindex.

#### See

aria-colindextext.

#### Inherited from

`InputHTMLAttributes.aria-rowindextext`

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

`InputHTMLAttributes.aria-rowspan`

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

`InputHTMLAttributes.aria-selected`

#### Source

node\_modules/@types/react/index.d.ts:2793

***

### aria-setsize?

> `optional` **aria-setsize**: `number`

Defines the number of items in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.

#### See

aria-posinset.

#### Inherited from

`InputHTMLAttributes.aria-setsize`

#### Source

node\_modules/@types/react/index.d.ts:2798

***

### aria-sort?

> `optional` **aria-sort**: `"none"` \| `"ascending"` \| `"descending"` \| `"other"`

Indicates if items in a table or grid are sorted in ascending or descending order.

#### Inherited from

`InputHTMLAttributes.aria-sort`

#### Source

node\_modules/@types/react/index.d.ts:2800

***

### aria-valuemax?

> `optional` **aria-valuemax**: `number`

Defines the maximum allowed value for a range widget.

#### Inherited from

`InputHTMLAttributes.aria-valuemax`

#### Source

node\_modules/@types/react/index.d.ts:2802

***

### aria-valuemin?

> `optional` **aria-valuemin**: `number`

Defines the minimum allowed value for a range widget.

#### Inherited from

`InputHTMLAttributes.aria-valuemin`

#### Source

node\_modules/@types/react/index.d.ts:2804

***

### aria-valuenow?

> `optional` **aria-valuenow**: `number`

Defines the current value for a range widget.

#### See

aria-valuetext.

#### Inherited from

`InputHTMLAttributes.aria-valuenow`

#### Source

node\_modules/@types/react/index.d.ts:2809

***

### aria-valuetext?

> `optional` **aria-valuetext**: `string`

Defines the human readable text alternative of aria-valuenow for a range widget.

#### Inherited from

`InputHTMLAttributes.aria-valuetext`

#### Source

node\_modules/@types/react/index.d.ts:2811

***

### autoCapitalize?

> `optional` **autoCapitalize**: `string`

#### Inherited from

`InputHTMLAttributes.autoCapitalize`

#### Source

node\_modules/@types/react/index.d.ts:2933

***

### autoComplete?

> `optional` **autoComplete**: `HTMLInputAutoCompleteAttribute`

#### Inherited from

`InputHTMLAttributes.autoComplete`

#### Source

node\_modules/@types/react/index.d.ts:3353

***

### autoCorrect?

> `optional` **autoCorrect**: `string`

#### Inherited from

`InputHTMLAttributes.autoCorrect`

#### Source

node\_modules/@types/react/index.d.ts:2934

***

### autoFocus?

> `optional` **autoFocus**: `boolean`

#### Inherited from

`InputHTMLAttributes.autoFocus`

#### Source

node\_modules/@types/react/index.d.ts:2896

***

### autoSave?

> `optional` **autoSave**: `string`

#### Inherited from

`InputHTMLAttributes.autoSave`

#### Source

node\_modules/@types/react/index.d.ts:2935

***

### capture?

> `optional` **capture**: `boolean` \| `"user"` \| `"environment"`

#### Inherited from

`InputHTMLAttributes.capture`

#### Source

node\_modules/@types/react/index.d.ts:3354

***

### checked?

> `optional` **checked**: `boolean`

#### Inherited from

`InputHTMLAttributes.checked`

#### Source

node\_modules/@types/react/index.d.ts:3355

***

### children?

> `optional` **children**: `ReactNode`

#### Inherited from

`InputHTMLAttributes.children`

#### Source

node\_modules/@types/react/index.d.ts:2379

***

### className?

> `optional` **className**: `string`

#### Inherited from

`InputHTMLAttributes.className`

#### Source

node\_modules/@types/react/index.d.ts:2897

***

### color?

> `optional` **color**: `string`

#### Inherited from

`InputHTMLAttributes.color`

#### Source

node\_modules/@types/react/index.d.ts:2936

***

### content?

> `optional` **content**: `string`

#### Inherited from

`InputHTMLAttributes.content`

#### Source

node\_modules/@types/react/index.d.ts:2921

***

### contentEditable?

> `optional` **contentEditable**: `Booleanish` \| `"inherit"` \| `"plaintext-only"`

#### Inherited from

`InputHTMLAttributes.contentEditable`

#### Source

node\_modules/@types/react/index.d.ts:2898

***

### contextMenu?

> `optional` **contextMenu**: `string`

#### Inherited from

`InputHTMLAttributes.contextMenu`

#### Source

node\_modules/@types/react/index.d.ts:2899

***

### dangerouslySetInnerHTML?

> `optional` **dangerouslySetInnerHTML**: `object`

#### \_\_html

> **\_\_html**: `string` \| `TrustedHTML`

#### Inherited from

`InputHTMLAttributes.dangerouslySetInnerHTML`

#### Source

node\_modules/@types/react/index.d.ts:2380

***

### datatype?

> `optional` **datatype**: `string`

#### Inherited from

`InputHTMLAttributes.datatype`

#### Source

node\_modules/@types/react/index.d.ts:2922

***

### defaultChecked?

> `optional` **defaultChecked**: `boolean`

#### Inherited from

`InputHTMLAttributes.defaultChecked`

#### Source

node\_modules/@types/react/index.d.ts:2889

***

### defaultValue?

> `optional` **defaultValue**: `string` \| `number` \| readonly `string`[]

#### Inherited from

`InputHTMLAttributes.defaultValue`

#### Source

node\_modules/@types/react/index.d.ts:2890

***

### dir?

> `optional` **dir**: `string`

#### Inherited from

`InputHTMLAttributes.dir`

#### Source

node\_modules/@types/react/index.d.ts:2900

***

### disabled?

> `optional` **disabled**: `boolean`

#### Inherited from

`InputHTMLAttributes.disabled`

#### Source

node\_modules/@types/react/index.d.ts:3356

***

### draggable?

> `optional` **draggable**: `Booleanish`

#### Inherited from

`InputHTMLAttributes.draggable`

#### Source

node\_modules/@types/react/index.d.ts:2901

***

### enterKeyHint?

> `optional` **enterKeyHint**: `"search"` \| `"enter"` \| `"done"` \| `"go"` \| `"next"` \| `"previous"` \| `"send"`

#### Inherited from

`InputHTMLAttributes.enterKeyHint`

#### Source

node\_modules/@types/react/index.d.ts:3357

***

### form?

> `optional` **form**: `string`

#### Inherited from

`InputHTMLAttributes.form`

#### Source

node\_modules/@types/react/index.d.ts:3358

***

### formAction?

> `optional` **formAction**: `string`

#### Inherited from

`InputHTMLAttributes.formAction`

#### Source

node\_modules/@types/react/index.d.ts:3359

***

### formEncType?

> `optional` **formEncType**: `string`

#### Inherited from

`InputHTMLAttributes.formEncType`

#### Source

node\_modules/@types/react/index.d.ts:3365

***

### formMethod?

> `optional` **formMethod**: `string`

#### Inherited from

`InputHTMLAttributes.formMethod`

#### Source

node\_modules/@types/react/index.d.ts:3366

***

### formNoValidate?

> `optional` **formNoValidate**: `boolean`

#### Inherited from

`InputHTMLAttributes.formNoValidate`

#### Source

node\_modules/@types/react/index.d.ts:3367

***

### formTarget?

> `optional` **formTarget**: `string`

#### Inherited from

`InputHTMLAttributes.formTarget`

#### Source

node\_modules/@types/react/index.d.ts:3368

***

### height?

> `optional` **height**: `string` \| `number`

#### Inherited from

`InputHTMLAttributes.height`

#### Source

node\_modules/@types/react/index.d.ts:3369

***

### hidden?

> `optional` **hidden**: `boolean`

#### Inherited from

`InputHTMLAttributes.hidden`

#### Source

node\_modules/@types/react/index.d.ts:2902

***

### id?

> `optional` **id**: `string`

#### Inherited from

`InputHTMLAttributes.id`

#### Source

node\_modules/@types/react/index.d.ts:2903

***

### inline?

> `optional` **inline**: `boolean`

Renders the label and input in inline mode when true, block mode otherwise.

#### Default

```ts
false
```

#### Source

[packages/web/src/lib/fields/Input.component.tsx:26](https://github.com/JoseLion/lynxts/blob/main/packages/web/src/lib/fields/Input.component.tsx#L26)

***

### inlist?

> `optional` **inlist**: `any`

#### Inherited from

`InputHTMLAttributes.inlist`

#### Source

node\_modules/@types/react/index.d.ts:2923

***

### inputMode?

> `optional` **inputMode**: `"search"` \| `"text"` \| `"none"` \| `"tel"` \| `"url"` \| `"email"` \| `"numeric"` \| `"decimal"`

Hints at the type of data that might be entered by the user while editing the element or its contents

#### See

[https://html.spec.whatwg.org/multipage/interaction.html#input-modalities:-the-inputmode-attribute](https://html.spec.whatwg.org/multipage/interaction.html#input-modalities:-the-inputmode-attribute)

#### Inherited from

`InputHTMLAttributes.inputMode`

#### Source

node\_modules/@types/react/index.d.ts:2951

***

### is?

> `optional` **is**: `string`

Specify that a standard HTML element should behave like a defined custom built-in element

#### See

[https://html.spec.whatwg.org/multipage/custom-elements.html#attr-is](https://html.spec.whatwg.org/multipage/custom-elements.html#attr-is)

#### Inherited from

`InputHTMLAttributes.is`

#### Source

node\_modules/@types/react/index.d.ts:2956

***

### itemID?

> `optional` **itemID**: `string`

#### Inherited from

`InputHTMLAttributes.itemID`

#### Source

node\_modules/@types/react/index.d.ts:2940

***

### itemProp?

> `optional` **itemProp**: `string`

#### Inherited from

`InputHTMLAttributes.itemProp`

#### Source

node\_modules/@types/react/index.d.ts:2937

***

### itemRef?

> `optional` **itemRef**: `string`

#### Inherited from

`InputHTMLAttributes.itemRef`

#### Source

node\_modules/@types/react/index.d.ts:2941

***

### itemScope?

> `optional` **itemScope**: `boolean`

#### Inherited from

`InputHTMLAttributes.itemScope`

#### Source

node\_modules/@types/react/index.d.ts:2938

***

### itemType?

> `optional` **itemType**: `string`

#### Inherited from

`InputHTMLAttributes.itemType`

#### Source

node\_modules/@types/react/index.d.ts:2939

***

### label?

> `optional` **label**: `string`

The `<label>` text content. The component does not render a `<label>`
element when this prop is omited, `undefined`, or an empty string.

#### Source

[packages/web/src/lib/fields/Input.component.tsx:31](https://github.com/JoseLion/lynxts/blob/main/packages/web/src/lib/fields/Input.component.tsx#L31)

***

### lang?

> `optional` **lang**: `string`

#### Inherited from

`InputHTMLAttributes.lang`

#### Source

node\_modules/@types/react/index.d.ts:2904

***

### list?

> `optional` **list**: `string`

#### Inherited from

`InputHTMLAttributes.list`

#### Source

node\_modules/@types/react/index.d.ts:3370

***

### max?

> `optional` **max**: `string` \| `number`

#### Inherited from

`InputHTMLAttributes.max`

#### Source

node\_modules/@types/react/index.d.ts:3371

***

### maxLength?

> `optional` **maxLength**: `number`

#### Inherited from

`InputHTMLAttributes.maxLength`

#### Source

node\_modules/@types/react/index.d.ts:3372

***

### min?

> `optional` **min**: `string` \| `number`

#### Inherited from

`InputHTMLAttributes.min`

#### Source

node\_modules/@types/react/index.d.ts:3373

***

### minLength?

> `optional` **minLength**: `number`

#### Inherited from

`InputHTMLAttributes.minLength`

#### Source

node\_modules/@types/react/index.d.ts:3374

***

### multiple?

> `optional` **multiple**: `boolean`

#### Inherited from

`InputHTMLAttributes.multiple`

#### Source

node\_modules/@types/react/index.d.ts:3375

***

### name

> **name**: `GetPath`\<`T`, `string`, `T`\>

The name of the field as a Path|Path\<T, string\>.

#### Overrides

`InputHTMLAttributes.name`

#### Source

[packages/web/src/lib/fields/Input.component.tsx:35](https://github.com/JoseLion/lynxts/blob/main/packages/web/src/lib/fields/Input.component.tsx#L35)

***

### nonce?

> `optional` **nonce**: `string`

#### Inherited from

`InputHTMLAttributes.nonce`

#### Source

node\_modules/@types/react/index.d.ts:2905

***

### onAbort?

> `optional` **onAbort**: `ReactEventHandler`\<`HTMLInputElement`\>

#### Inherited from

`InputHTMLAttributes.onAbort`

#### Source

node\_modules/@types/react/index.d.ts:2439

***

### onAbortCapture?

> `optional` **onAbortCapture**: `ReactEventHandler`\<`HTMLInputElement`\>

#### Inherited from

`InputHTMLAttributes.onAbortCapture`

#### Source

node\_modules/@types/react/index.d.ts:2440

***

### onAnimationEnd?

> `optional` **onAnimationEnd**: `AnimationEventHandler`\<`HTMLInputElement`\>

#### Inherited from

`InputHTMLAttributes.onAnimationEnd`

#### Source

node\_modules/@types/react/index.d.ts:2569

***

### onAnimationEndCapture?

> `optional` **onAnimationEndCapture**: `AnimationEventHandler`\<`HTMLInputElement`\>

#### Inherited from

`InputHTMLAttributes.onAnimationEndCapture`

#### Source

node\_modules/@types/react/index.d.ts:2570

***

### onAnimationIteration?

> `optional` **onAnimationIteration**: `AnimationEventHandler`\<`HTMLInputElement`\>

#### Inherited from

`InputHTMLAttributes.onAnimationIteration`

#### Source

node\_modules/@types/react/index.d.ts:2571

***

### onAnimationIterationCapture?

> `optional` **onAnimationIterationCapture**: `AnimationEventHandler`\<`HTMLInputElement`\>

#### Inherited from

`InputHTMLAttributes.onAnimationIterationCapture`

#### Source

node\_modules/@types/react/index.d.ts:2572

***

### onAnimationStart?

> `optional` **onAnimationStart**: `AnimationEventHandler`\<`HTMLInputElement`\>

#### Inherited from

`InputHTMLAttributes.onAnimationStart`

#### Source

node\_modules/@types/react/index.d.ts:2567

***

### onAnimationStartCapture?

> `optional` **onAnimationStartCapture**: `AnimationEventHandler`\<`HTMLInputElement`\>

#### Inherited from

`InputHTMLAttributes.onAnimationStartCapture`

#### Source

node\_modules/@types/react/index.d.ts:2568

***

### onAuxClick?

> `optional` **onAuxClick**: `MouseEventHandler`\<`HTMLInputElement`\>

#### Inherited from

`InputHTMLAttributes.onAuxClick`

#### Source

node\_modules/@types/react/index.d.ts:2487

***

### onAuxClickCapture?

> `optional` **onAuxClickCapture**: `MouseEventHandler`\<`HTMLInputElement`\>

#### Inherited from

`InputHTMLAttributes.onAuxClickCapture`

#### Source

node\_modules/@types/react/index.d.ts:2488

***

### onBeforeInput?

> `optional` **onBeforeInput**: `FormEventHandler`\<`HTMLInputElement`\>

#### Inherited from

`InputHTMLAttributes.onBeforeInput`

#### Source

node\_modules/@types/react/index.d.ts:2411

***

### onBeforeInputCapture?

> `optional` **onBeforeInputCapture**: `FormEventHandler`\<`HTMLInputElement`\>

#### Inherited from

`InputHTMLAttributes.onBeforeInputCapture`

#### Source

node\_modules/@types/react/index.d.ts:2412

***

### onBlur?

> `optional` **onBlur**: `FocusEventHandler`\<`HTMLInputElement`\>

#### Inherited from

`InputHTMLAttributes.onBlur`

#### Source

node\_modules/@types/react/index.d.ts:2405

***

### onBlurCapture?

> `optional` **onBlurCapture**: `FocusEventHandler`\<`HTMLInputElement`\>

#### Inherited from

`InputHTMLAttributes.onBlurCapture`

#### Source

node\_modules/@types/react/index.d.ts:2406

***

### onCanPlay?

> `optional` **onCanPlay**: `ReactEventHandler`\<`HTMLInputElement`\>

#### Inherited from

`InputHTMLAttributes.onCanPlay`

#### Source

node\_modules/@types/react/index.d.ts:2441

***

### onCanPlayCapture?

> `optional` **onCanPlayCapture**: `ReactEventHandler`\<`HTMLInputElement`\>

#### Inherited from

`InputHTMLAttributes.onCanPlayCapture`

#### Source

node\_modules/@types/react/index.d.ts:2442

***

### onCanPlayThrough?

> `optional` **onCanPlayThrough**: `ReactEventHandler`\<`HTMLInputElement`\>

#### Inherited from

`InputHTMLAttributes.onCanPlayThrough`

#### Source

node\_modules/@types/react/index.d.ts:2443

***

### onCanPlayThroughCapture?

> `optional` **onCanPlayThroughCapture**: `ReactEventHandler`\<`HTMLInputElement`\>

#### Inherited from

`InputHTMLAttributes.onCanPlayThroughCapture`

#### Source

node\_modules/@types/react/index.d.ts:2444

***

### onChange?

> `optional` **onChange**: `ChangeEventHandler`\<`HTMLInputElement`\>

#### Inherited from

`InputHTMLAttributes.onChange`

#### Source

node\_modules/@types/react/index.d.ts:3388

***

### onChangeCapture?

> `optional` **onChangeCapture**: `FormEventHandler`\<`HTMLInputElement`\>

#### Inherited from

`InputHTMLAttributes.onChangeCapture`

#### Source

node\_modules/@types/react/index.d.ts:2410

***

### onClick?

> `optional` **onClick**: `MouseEventHandler`\<`HTMLInputElement`\>

#### Inherited from

`InputHTMLAttributes.onClick`

#### Source

node\_modules/@types/react/index.d.ts:2489

***

### onClickCapture?

> `optional` **onClickCapture**: `MouseEventHandler`\<`HTMLInputElement`\>

#### Inherited from

`InputHTMLAttributes.onClickCapture`

#### Source

node\_modules/@types/react/index.d.ts:2490

***

### onCompositionEnd?

> `optional` **onCompositionEnd**: `CompositionEventHandler`\<`HTMLInputElement`\>

#### Inherited from

`InputHTMLAttributes.onCompositionEnd`

#### Source

node\_modules/@types/react/index.d.ts:2395

***

### onCompositionEndCapture?

> `optional` **onCompositionEndCapture**: `CompositionEventHandler`\<`HTMLInputElement`\>

#### Inherited from

`InputHTMLAttributes.onCompositionEndCapture`

#### Source

node\_modules/@types/react/index.d.ts:2396

***

### onCompositionStart?

> `optional` **onCompositionStart**: `CompositionEventHandler`\<`HTMLInputElement`\>

#### Inherited from

`InputHTMLAttributes.onCompositionStart`

#### Source

node\_modules/@types/react/index.d.ts:2397

***

### onCompositionStartCapture?

> `optional` **onCompositionStartCapture**: `CompositionEventHandler`\<`HTMLInputElement`\>

#### Inherited from

`InputHTMLAttributes.onCompositionStartCapture`

#### Source

node\_modules/@types/react/index.d.ts:2398

***

### onCompositionUpdate?

> `optional` **onCompositionUpdate**: `CompositionEventHandler`\<`HTMLInputElement`\>

#### Inherited from

`InputHTMLAttributes.onCompositionUpdate`

#### Source

node\_modules/@types/react/index.d.ts:2399

***

### onCompositionUpdateCapture?

> `optional` **onCompositionUpdateCapture**: `CompositionEventHandler`\<`HTMLInputElement`\>

#### Inherited from

`InputHTMLAttributes.onCompositionUpdateCapture`

#### Source

node\_modules/@types/react/index.d.ts:2400

***

### onContextMenu?

> `optional` **onContextMenu**: `MouseEventHandler`\<`HTMLInputElement`\>

#### Inherited from

`InputHTMLAttributes.onContextMenu`

#### Source

node\_modules/@types/react/index.d.ts:2491

***

### onContextMenuCapture?

> `optional` **onContextMenuCapture**: `MouseEventHandler`\<`HTMLInputElement`\>

#### Inherited from

`InputHTMLAttributes.onContextMenuCapture`

#### Source

node\_modules/@types/react/index.d.ts:2492

***

### onCopy?

> `optional` **onCopy**: `ClipboardEventHandler`\<`HTMLInputElement`\>

#### Inherited from

`InputHTMLAttributes.onCopy`

#### Source

node\_modules/@types/react/index.d.ts:2387

***

### onCopyCapture?

> `optional` **onCopyCapture**: `ClipboardEventHandler`\<`HTMLInputElement`\>

#### Inherited from

`InputHTMLAttributes.onCopyCapture`

#### Source

node\_modules/@types/react/index.d.ts:2388

***

### onCut?

> `optional` **onCut**: `ClipboardEventHandler`\<`HTMLInputElement`\>

#### Inherited from

`InputHTMLAttributes.onCut`

#### Source

node\_modules/@types/react/index.d.ts:2389

***

### onCutCapture?

> `optional` **onCutCapture**: `ClipboardEventHandler`\<`HTMLInputElement`\>

#### Inherited from

`InputHTMLAttributes.onCutCapture`

#### Source

node\_modules/@types/react/index.d.ts:2390

***

### onDoubleClick?

> `optional` **onDoubleClick**: `MouseEventHandler`\<`HTMLInputElement`\>

#### Inherited from

`InputHTMLAttributes.onDoubleClick`

#### Source

node\_modules/@types/react/index.d.ts:2493

***

### onDoubleClickCapture?

> `optional` **onDoubleClickCapture**: `MouseEventHandler`\<`HTMLInputElement`\>

#### Inherited from

`InputHTMLAttributes.onDoubleClickCapture`

#### Source

node\_modules/@types/react/index.d.ts:2494

***

### onDrag?

> `optional` **onDrag**: `DragEventHandler`\<`HTMLInputElement`\>

#### Inherited from

`InputHTMLAttributes.onDrag`

#### Source

node\_modules/@types/react/index.d.ts:2495

***

### onDragCapture?

> `optional` **onDragCapture**: `DragEventHandler`\<`HTMLInputElement`\>

#### Inherited from

`InputHTMLAttributes.onDragCapture`

#### Source

node\_modules/@types/react/index.d.ts:2496

***

### onDragEnd?

> `optional` **onDragEnd**: `DragEventHandler`\<`HTMLInputElement`\>

#### Inherited from

`InputHTMLAttributes.onDragEnd`

#### Source

node\_modules/@types/react/index.d.ts:2497

***

### onDragEndCapture?

> `optional` **onDragEndCapture**: `DragEventHandler`\<`HTMLInputElement`\>

#### Inherited from

`InputHTMLAttributes.onDragEndCapture`

#### Source

node\_modules/@types/react/index.d.ts:2498

***

### onDragEnter?

> `optional` **onDragEnter**: `DragEventHandler`\<`HTMLInputElement`\>

#### Inherited from

`InputHTMLAttributes.onDragEnter`

#### Source

node\_modules/@types/react/index.d.ts:2499

***

### onDragEnterCapture?

> `optional` **onDragEnterCapture**: `DragEventHandler`\<`HTMLInputElement`\>

#### Inherited from

`InputHTMLAttributes.onDragEnterCapture`

#### Source

node\_modules/@types/react/index.d.ts:2500

***

### onDragExit?

> `optional` **onDragExit**: `DragEventHandler`\<`HTMLInputElement`\>

#### Inherited from

`InputHTMLAttributes.onDragExit`

#### Source

node\_modules/@types/react/index.d.ts:2501

***

### onDragExitCapture?

> `optional` **onDragExitCapture**: `DragEventHandler`\<`HTMLInputElement`\>

#### Inherited from

`InputHTMLAttributes.onDragExitCapture`

#### Source

node\_modules/@types/react/index.d.ts:2502

***

### onDragLeave?

> `optional` **onDragLeave**: `DragEventHandler`\<`HTMLInputElement`\>

#### Inherited from

`InputHTMLAttributes.onDragLeave`

#### Source

node\_modules/@types/react/index.d.ts:2503

***

### onDragLeaveCapture?

> `optional` **onDragLeaveCapture**: `DragEventHandler`\<`HTMLInputElement`\>

#### Inherited from

`InputHTMLAttributes.onDragLeaveCapture`

#### Source

node\_modules/@types/react/index.d.ts:2504

***

### onDragOver?

> `optional` **onDragOver**: `DragEventHandler`\<`HTMLInputElement`\>

#### Inherited from

`InputHTMLAttributes.onDragOver`

#### Source

node\_modules/@types/react/index.d.ts:2505

***

### onDragOverCapture?

> `optional` **onDragOverCapture**: `DragEventHandler`\<`HTMLInputElement`\>

#### Inherited from

`InputHTMLAttributes.onDragOverCapture`

#### Source

node\_modules/@types/react/index.d.ts:2506

***

### onDragStart?

> `optional` **onDragStart**: `DragEventHandler`\<`HTMLInputElement`\>

#### Inherited from

`InputHTMLAttributes.onDragStart`

#### Source

node\_modules/@types/react/index.d.ts:2507

***

### onDragStartCapture?

> `optional` **onDragStartCapture**: `DragEventHandler`\<`HTMLInputElement`\>

#### Inherited from

`InputHTMLAttributes.onDragStartCapture`

#### Source

node\_modules/@types/react/index.d.ts:2508

***

### onDrop?

> `optional` **onDrop**: `DragEventHandler`\<`HTMLInputElement`\>

#### Inherited from

`InputHTMLAttributes.onDrop`

#### Source

node\_modules/@types/react/index.d.ts:2509

***

### onDropCapture?

> `optional` **onDropCapture**: `DragEventHandler`\<`HTMLInputElement`\>

#### Inherited from

`InputHTMLAttributes.onDropCapture`

#### Source

node\_modules/@types/react/index.d.ts:2510

***

### onDurationChange?

> `optional` **onDurationChange**: `ReactEventHandler`\<`HTMLInputElement`\>

#### Inherited from

`InputHTMLAttributes.onDurationChange`

#### Source

node\_modules/@types/react/index.d.ts:2445

***

### onDurationChangeCapture?

> `optional` **onDurationChangeCapture**: `ReactEventHandler`\<`HTMLInputElement`\>

#### Inherited from

`InputHTMLAttributes.onDurationChangeCapture`

#### Source

node\_modules/@types/react/index.d.ts:2446

***

### onEmptied?

> `optional` **onEmptied**: `ReactEventHandler`\<`HTMLInputElement`\>

#### Inherited from

`InputHTMLAttributes.onEmptied`

#### Source

node\_modules/@types/react/index.d.ts:2447

***

### onEmptiedCapture?

> `optional` **onEmptiedCapture**: `ReactEventHandler`\<`HTMLInputElement`\>

#### Inherited from

`InputHTMLAttributes.onEmptiedCapture`

#### Source

node\_modules/@types/react/index.d.ts:2448

***

### onEncrypted?

> `optional` **onEncrypted**: `ReactEventHandler`\<`HTMLInputElement`\>

#### Inherited from

`InputHTMLAttributes.onEncrypted`

#### Source

node\_modules/@types/react/index.d.ts:2449

***

### onEncryptedCapture?

> `optional` **onEncryptedCapture**: `ReactEventHandler`\<`HTMLInputElement`\>

#### Inherited from

`InputHTMLAttributes.onEncryptedCapture`

#### Source

node\_modules/@types/react/index.d.ts:2450

***

### onEnded?

> `optional` **onEnded**: `ReactEventHandler`\<`HTMLInputElement`\>

#### Inherited from

`InputHTMLAttributes.onEnded`

#### Source

node\_modules/@types/react/index.d.ts:2451

***

### onEndedCapture?

> `optional` **onEndedCapture**: `ReactEventHandler`\<`HTMLInputElement`\>

#### Inherited from

`InputHTMLAttributes.onEndedCapture`

#### Source

node\_modules/@types/react/index.d.ts:2452

***

### onError?

> `optional` **onError**: `ReactEventHandler`\<`HTMLInputElement`\>

#### Inherited from

`InputHTMLAttributes.onError`

#### Source

node\_modules/@types/react/index.d.ts:2425

***

### onErrorCapture?

> `optional` **onErrorCapture**: `ReactEventHandler`\<`HTMLInputElement`\>

#### Inherited from

`InputHTMLAttributes.onErrorCapture`

#### Source

node\_modules/@types/react/index.d.ts:2426

***

### onFocus?

> `optional` **onFocus**: `FocusEventHandler`\<`HTMLInputElement`\>

#### Inherited from

`InputHTMLAttributes.onFocus`

#### Source

node\_modules/@types/react/index.d.ts:2403

***

### onFocusCapture?

> `optional` **onFocusCapture**: `FocusEventHandler`\<`HTMLInputElement`\>

#### Inherited from

`InputHTMLAttributes.onFocusCapture`

#### Source

node\_modules/@types/react/index.d.ts:2404

***

### onGotPointerCapture?

> `optional` **onGotPointerCapture**: `PointerEventHandler`\<`HTMLInputElement`\>

#### Inherited from

`InputHTMLAttributes.onGotPointerCapture`

#### Source

node\_modules/@types/react/index.d.ts:2553

***

### onGotPointerCaptureCapture?

> `optional` **onGotPointerCaptureCapture**: `PointerEventHandler`\<`HTMLInputElement`\>

#### Inherited from

`InputHTMLAttributes.onGotPointerCaptureCapture`

#### Source

node\_modules/@types/react/index.d.ts:2554

***

### onInput?

> `optional` **onInput**: `FormEventHandler`\<`HTMLInputElement`\>

#### Inherited from

`InputHTMLAttributes.onInput`

#### Source

node\_modules/@types/react/index.d.ts:2413

***

### onInputCapture?

> `optional` **onInputCapture**: `FormEventHandler`\<`HTMLInputElement`\>

#### Inherited from

`InputHTMLAttributes.onInputCapture`

#### Source

node\_modules/@types/react/index.d.ts:2414

***

### onInvalid?

> `optional` **onInvalid**: `FormEventHandler`\<`HTMLInputElement`\>

#### Inherited from

`InputHTMLAttributes.onInvalid`

#### Source

node\_modules/@types/react/index.d.ts:2419

***

### onInvalidCapture?

> `optional` **onInvalidCapture**: `FormEventHandler`\<`HTMLInputElement`\>

#### Inherited from

`InputHTMLAttributes.onInvalidCapture`

#### Source

node\_modules/@types/react/index.d.ts:2420

***

### onKeyDown?

> `optional` **onKeyDown**: `KeyboardEventHandler`\<`HTMLInputElement`\>

#### Inherited from

`InputHTMLAttributes.onKeyDown`

#### Source

node\_modules/@types/react/index.d.ts:2429

***

### onKeyDownCapture?

> `optional` **onKeyDownCapture**: `KeyboardEventHandler`\<`HTMLInputElement`\>

#### Inherited from

`InputHTMLAttributes.onKeyDownCapture`

#### Source

node\_modules/@types/react/index.d.ts:2430

***

### ~~onKeyPress?~~

> `optional` **onKeyPress**: `KeyboardEventHandler`\<`HTMLInputElement`\>

#### Deprecated

#### Inherited from

`InputHTMLAttributes.onKeyPress`

#### Source

node\_modules/@types/react/index.d.ts:2432

***

### ~~onKeyPressCapture?~~

> `optional` **onKeyPressCapture**: `KeyboardEventHandler`\<`HTMLInputElement`\>

#### Deprecated

#### Inherited from

`InputHTMLAttributes.onKeyPressCapture`

#### Source

node\_modules/@types/react/index.d.ts:2434

***

### onKeyUp?

> `optional` **onKeyUp**: `KeyboardEventHandler`\<`HTMLInputElement`\>

#### Inherited from

`InputHTMLAttributes.onKeyUp`

#### Source

node\_modules/@types/react/index.d.ts:2435

***

### onKeyUpCapture?

> `optional` **onKeyUpCapture**: `KeyboardEventHandler`\<`HTMLInputElement`\>

#### Inherited from

`InputHTMLAttributes.onKeyUpCapture`

#### Source

node\_modules/@types/react/index.d.ts:2436

***

### onLoad?

> `optional` **onLoad**: `ReactEventHandler`\<`HTMLInputElement`\>

#### Inherited from

`InputHTMLAttributes.onLoad`

#### Source

node\_modules/@types/react/index.d.ts:2423

***

### onLoadCapture?

> `optional` **onLoadCapture**: `ReactEventHandler`\<`HTMLInputElement`\>

#### Inherited from

`InputHTMLAttributes.onLoadCapture`

#### Source

node\_modules/@types/react/index.d.ts:2424

***

### onLoadStart?

> `optional` **onLoadStart**: `ReactEventHandler`\<`HTMLInputElement`\>

#### Inherited from

`InputHTMLAttributes.onLoadStart`

#### Source

node\_modules/@types/react/index.d.ts:2457

***

### onLoadStartCapture?

> `optional` **onLoadStartCapture**: `ReactEventHandler`\<`HTMLInputElement`\>

#### Inherited from

`InputHTMLAttributes.onLoadStartCapture`

#### Source

node\_modules/@types/react/index.d.ts:2458

***

### onLoadedData?

> `optional` **onLoadedData**: `ReactEventHandler`\<`HTMLInputElement`\>

#### Inherited from

`InputHTMLAttributes.onLoadedData`

#### Source

node\_modules/@types/react/index.d.ts:2453

***

### onLoadedDataCapture?

> `optional` **onLoadedDataCapture**: `ReactEventHandler`\<`HTMLInputElement`\>

#### Inherited from

`InputHTMLAttributes.onLoadedDataCapture`

#### Source

node\_modules/@types/react/index.d.ts:2454

***

### onLoadedMetadata?

> `optional` **onLoadedMetadata**: `ReactEventHandler`\<`HTMLInputElement`\>

#### Inherited from

`InputHTMLAttributes.onLoadedMetadata`

#### Source

node\_modules/@types/react/index.d.ts:2455

***

### onLoadedMetadataCapture?

> `optional` **onLoadedMetadataCapture**: `ReactEventHandler`\<`HTMLInputElement`\>

#### Inherited from

`InputHTMLAttributes.onLoadedMetadataCapture`

#### Source

node\_modules/@types/react/index.d.ts:2456

***

### onLostPointerCapture?

> `optional` **onLostPointerCapture**: `PointerEventHandler`\<`HTMLInputElement`\>

#### Inherited from

`InputHTMLAttributes.onLostPointerCapture`

#### Source

node\_modules/@types/react/index.d.ts:2555

***

### onLostPointerCaptureCapture?

> `optional` **onLostPointerCaptureCapture**: `PointerEventHandler`\<`HTMLInputElement`\>

#### Inherited from

`InputHTMLAttributes.onLostPointerCaptureCapture`

#### Source

node\_modules/@types/react/index.d.ts:2556

***

### onMouseDown?

> `optional` **onMouseDown**: `MouseEventHandler`\<`HTMLInputElement`\>

#### Inherited from

`InputHTMLAttributes.onMouseDown`

#### Source

node\_modules/@types/react/index.d.ts:2511

***

### onMouseDownCapture?

> `optional` **onMouseDownCapture**: `MouseEventHandler`\<`HTMLInputElement`\>

#### Inherited from

`InputHTMLAttributes.onMouseDownCapture`

#### Source

node\_modules/@types/react/index.d.ts:2512

***

### onMouseEnter?

> `optional` **onMouseEnter**: `MouseEventHandler`\<`HTMLInputElement`\>

#### Inherited from

`InputHTMLAttributes.onMouseEnter`

#### Source

node\_modules/@types/react/index.d.ts:2513

***

### onMouseLeave?

> `optional` **onMouseLeave**: `MouseEventHandler`\<`HTMLInputElement`\>

#### Inherited from

`InputHTMLAttributes.onMouseLeave`

#### Source

node\_modules/@types/react/index.d.ts:2514

***

### onMouseMove?

> `optional` **onMouseMove**: `MouseEventHandler`\<`HTMLInputElement`\>

#### Inherited from

`InputHTMLAttributes.onMouseMove`

#### Source

node\_modules/@types/react/index.d.ts:2515

***

### onMouseMoveCapture?

> `optional` **onMouseMoveCapture**: `MouseEventHandler`\<`HTMLInputElement`\>

#### Inherited from

`InputHTMLAttributes.onMouseMoveCapture`

#### Source

node\_modules/@types/react/index.d.ts:2516

***

### onMouseOut?

> `optional` **onMouseOut**: `MouseEventHandler`\<`HTMLInputElement`\>

#### Inherited from

`InputHTMLAttributes.onMouseOut`

#### Source

node\_modules/@types/react/index.d.ts:2517

***

### onMouseOutCapture?

> `optional` **onMouseOutCapture**: `MouseEventHandler`\<`HTMLInputElement`\>

#### Inherited from

`InputHTMLAttributes.onMouseOutCapture`

#### Source

node\_modules/@types/react/index.d.ts:2518

***

### onMouseOver?

> `optional` **onMouseOver**: `MouseEventHandler`\<`HTMLInputElement`\>

#### Inherited from

`InputHTMLAttributes.onMouseOver`

#### Source

node\_modules/@types/react/index.d.ts:2519

***

### onMouseOverCapture?

> `optional` **onMouseOverCapture**: `MouseEventHandler`\<`HTMLInputElement`\>

#### Inherited from

`InputHTMLAttributes.onMouseOverCapture`

#### Source

node\_modules/@types/react/index.d.ts:2520

***

### onMouseUp?

> `optional` **onMouseUp**: `MouseEventHandler`\<`HTMLInputElement`\>

#### Inherited from

`InputHTMLAttributes.onMouseUp`

#### Source

node\_modules/@types/react/index.d.ts:2521

***

### onMouseUpCapture?

> `optional` **onMouseUpCapture**: `MouseEventHandler`\<`HTMLInputElement`\>

#### Inherited from

`InputHTMLAttributes.onMouseUpCapture`

#### Source

node\_modules/@types/react/index.d.ts:2522

***

### onPaste?

> `optional` **onPaste**: `ClipboardEventHandler`\<`HTMLInputElement`\>

#### Inherited from

`InputHTMLAttributes.onPaste`

#### Source

node\_modules/@types/react/index.d.ts:2391

***

### onPasteCapture?

> `optional` **onPasteCapture**: `ClipboardEventHandler`\<`HTMLInputElement`\>

#### Inherited from

`InputHTMLAttributes.onPasteCapture`

#### Source

node\_modules/@types/react/index.d.ts:2392

***

### onPause?

> `optional` **onPause**: `ReactEventHandler`\<`HTMLInputElement`\>

#### Inherited from

`InputHTMLAttributes.onPause`

#### Source

node\_modules/@types/react/index.d.ts:2459

***

### onPauseCapture?

> `optional` **onPauseCapture**: `ReactEventHandler`\<`HTMLInputElement`\>

#### Inherited from

`InputHTMLAttributes.onPauseCapture`

#### Source

node\_modules/@types/react/index.d.ts:2460

***

### onPlay?

> `optional` **onPlay**: `ReactEventHandler`\<`HTMLInputElement`\>

#### Inherited from

`InputHTMLAttributes.onPlay`

#### Source

node\_modules/@types/react/index.d.ts:2461

***

### onPlayCapture?

> `optional` **onPlayCapture**: `ReactEventHandler`\<`HTMLInputElement`\>

#### Inherited from

`InputHTMLAttributes.onPlayCapture`

#### Source

node\_modules/@types/react/index.d.ts:2462

***

### onPlaying?

> `optional` **onPlaying**: `ReactEventHandler`\<`HTMLInputElement`\>

#### Inherited from

`InputHTMLAttributes.onPlaying`

#### Source

node\_modules/@types/react/index.d.ts:2463

***

### onPlayingCapture?

> `optional` **onPlayingCapture**: `ReactEventHandler`\<`HTMLInputElement`\>

#### Inherited from

`InputHTMLAttributes.onPlayingCapture`

#### Source

node\_modules/@types/react/index.d.ts:2464

***

### onPointerCancel?

> `optional` **onPointerCancel**: `PointerEventHandler`\<`HTMLInputElement`\>

#### Inherited from

`InputHTMLAttributes.onPointerCancel`

#### Source

node\_modules/@types/react/index.d.ts:2545

***

### onPointerCancelCapture?

> `optional` **onPointerCancelCapture**: `PointerEventHandler`\<`HTMLInputElement`\>

#### Inherited from

`InputHTMLAttributes.onPointerCancelCapture`

#### Source

node\_modules/@types/react/index.d.ts:2546

***

### onPointerDown?

> `optional` **onPointerDown**: `PointerEventHandler`\<`HTMLInputElement`\>

#### Inherited from

`InputHTMLAttributes.onPointerDown`

#### Source

node\_modules/@types/react/index.d.ts:2539

***

### onPointerDownCapture?

> `optional` **onPointerDownCapture**: `PointerEventHandler`\<`HTMLInputElement`\>

#### Inherited from

`InputHTMLAttributes.onPointerDownCapture`

#### Source

node\_modules/@types/react/index.d.ts:2540

***

### onPointerEnter?

> `optional` **onPointerEnter**: `PointerEventHandler`\<`HTMLInputElement`\>

#### Inherited from

`InputHTMLAttributes.onPointerEnter`

#### Source

node\_modules/@types/react/index.d.ts:2547

***

### onPointerLeave?

> `optional` **onPointerLeave**: `PointerEventHandler`\<`HTMLInputElement`\>

#### Inherited from

`InputHTMLAttributes.onPointerLeave`

#### Source

node\_modules/@types/react/index.d.ts:2548

***

### onPointerMove?

> `optional` **onPointerMove**: `PointerEventHandler`\<`HTMLInputElement`\>

#### Inherited from

`InputHTMLAttributes.onPointerMove`

#### Source

node\_modules/@types/react/index.d.ts:2541

***

### onPointerMoveCapture?

> `optional` **onPointerMoveCapture**: `PointerEventHandler`\<`HTMLInputElement`\>

#### Inherited from

`InputHTMLAttributes.onPointerMoveCapture`

#### Source

node\_modules/@types/react/index.d.ts:2542

***

### onPointerOut?

> `optional` **onPointerOut**: `PointerEventHandler`\<`HTMLInputElement`\>

#### Inherited from

`InputHTMLAttributes.onPointerOut`

#### Source

node\_modules/@types/react/index.d.ts:2551

***

### onPointerOutCapture?

> `optional` **onPointerOutCapture**: `PointerEventHandler`\<`HTMLInputElement`\>

#### Inherited from

`InputHTMLAttributes.onPointerOutCapture`

#### Source

node\_modules/@types/react/index.d.ts:2552

***

### onPointerOver?

> `optional` **onPointerOver**: `PointerEventHandler`\<`HTMLInputElement`\>

#### Inherited from

`InputHTMLAttributes.onPointerOver`

#### Source

node\_modules/@types/react/index.d.ts:2549

***

### onPointerOverCapture?

> `optional` **onPointerOverCapture**: `PointerEventHandler`\<`HTMLInputElement`\>

#### Inherited from

`InputHTMLAttributes.onPointerOverCapture`

#### Source

node\_modules/@types/react/index.d.ts:2550

***

### onPointerUp?

> `optional` **onPointerUp**: `PointerEventHandler`\<`HTMLInputElement`\>

#### Inherited from

`InputHTMLAttributes.onPointerUp`

#### Source

node\_modules/@types/react/index.d.ts:2543

***

### onPointerUpCapture?

> `optional` **onPointerUpCapture**: `PointerEventHandler`\<`HTMLInputElement`\>

#### Inherited from

`InputHTMLAttributes.onPointerUpCapture`

#### Source

node\_modules/@types/react/index.d.ts:2544

***

### onProgress?

> `optional` **onProgress**: `ReactEventHandler`\<`HTMLInputElement`\>

#### Inherited from

`InputHTMLAttributes.onProgress`

#### Source

node\_modules/@types/react/index.d.ts:2465

***

### onProgressCapture?

> `optional` **onProgressCapture**: `ReactEventHandler`\<`HTMLInputElement`\>

#### Inherited from

`InputHTMLAttributes.onProgressCapture`

#### Source

node\_modules/@types/react/index.d.ts:2466

***

### onRateChange?

> `optional` **onRateChange**: `ReactEventHandler`\<`HTMLInputElement`\>

#### Inherited from

`InputHTMLAttributes.onRateChange`

#### Source

node\_modules/@types/react/index.d.ts:2467

***

### onRateChangeCapture?

> `optional` **onRateChangeCapture**: `ReactEventHandler`\<`HTMLInputElement`\>

#### Inherited from

`InputHTMLAttributes.onRateChangeCapture`

#### Source

node\_modules/@types/react/index.d.ts:2468

***

### onReset?

> `optional` **onReset**: `FormEventHandler`\<`HTMLInputElement`\>

#### Inherited from

`InputHTMLAttributes.onReset`

#### Source

node\_modules/@types/react/index.d.ts:2415

***

### onResetCapture?

> `optional` **onResetCapture**: `FormEventHandler`\<`HTMLInputElement`\>

#### Inherited from

`InputHTMLAttributes.onResetCapture`

#### Source

node\_modules/@types/react/index.d.ts:2416

***

### onResize?

> `optional` **onResize**: `ReactEventHandler`\<`HTMLInputElement`\>

#### Inherited from

`InputHTMLAttributes.onResize`

#### Source

node\_modules/@types/react/index.d.ts:2469

***

### onResizeCapture?

> `optional` **onResizeCapture**: `ReactEventHandler`\<`HTMLInputElement`\>

#### Inherited from

`InputHTMLAttributes.onResizeCapture`

#### Source

node\_modules/@types/react/index.d.ts:2470

***

### onScroll?

> `optional` **onScroll**: `UIEventHandler`\<`HTMLInputElement`\>

#### Inherited from

`InputHTMLAttributes.onScroll`

#### Source

node\_modules/@types/react/index.d.ts:2559

***

### onScrollCapture?

> `optional` **onScrollCapture**: `UIEventHandler`\<`HTMLInputElement`\>

#### Inherited from

`InputHTMLAttributes.onScrollCapture`

#### Source

node\_modules/@types/react/index.d.ts:2560

***

### onSeeked?

> `optional` **onSeeked**: `ReactEventHandler`\<`HTMLInputElement`\>

#### Inherited from

`InputHTMLAttributes.onSeeked`

#### Source

node\_modules/@types/react/index.d.ts:2471

***

### onSeekedCapture?

> `optional` **onSeekedCapture**: `ReactEventHandler`\<`HTMLInputElement`\>

#### Inherited from

`InputHTMLAttributes.onSeekedCapture`

#### Source

node\_modules/@types/react/index.d.ts:2472

***

### onSeeking?

> `optional` **onSeeking**: `ReactEventHandler`\<`HTMLInputElement`\>

#### Inherited from

`InputHTMLAttributes.onSeeking`

#### Source

node\_modules/@types/react/index.d.ts:2473

***

### onSeekingCapture?

> `optional` **onSeekingCapture**: `ReactEventHandler`\<`HTMLInputElement`\>

#### Inherited from

`InputHTMLAttributes.onSeekingCapture`

#### Source

node\_modules/@types/react/index.d.ts:2474

***

### onSelect?

> `optional` **onSelect**: `ReactEventHandler`\<`HTMLInputElement`\>

#### Inherited from

`InputHTMLAttributes.onSelect`

#### Source

node\_modules/@types/react/index.d.ts:2525

***

### onSelectCapture?

> `optional` **onSelectCapture**: `ReactEventHandler`\<`HTMLInputElement`\>

#### Inherited from

`InputHTMLAttributes.onSelectCapture`

#### Source

node\_modules/@types/react/index.d.ts:2526

***

### onStalled?

> `optional` **onStalled**: `ReactEventHandler`\<`HTMLInputElement`\>

#### Inherited from

`InputHTMLAttributes.onStalled`

#### Source

node\_modules/@types/react/index.d.ts:2475

***

### onStalledCapture?

> `optional` **onStalledCapture**: `ReactEventHandler`\<`HTMLInputElement`\>

#### Inherited from

`InputHTMLAttributes.onStalledCapture`

#### Source

node\_modules/@types/react/index.d.ts:2476

***

### onSubmit?

> `optional` **onSubmit**: `FormEventHandler`\<`HTMLInputElement`\>

#### Inherited from

`InputHTMLAttributes.onSubmit`

#### Source

node\_modules/@types/react/index.d.ts:2417

***

### onSubmitCapture?

> `optional` **onSubmitCapture**: `FormEventHandler`\<`HTMLInputElement`\>

#### Inherited from

`InputHTMLAttributes.onSubmitCapture`

#### Source

node\_modules/@types/react/index.d.ts:2418

***

### onSuspend?

> `optional` **onSuspend**: `ReactEventHandler`\<`HTMLInputElement`\>

#### Inherited from

`InputHTMLAttributes.onSuspend`

#### Source

node\_modules/@types/react/index.d.ts:2477

***

### onSuspendCapture?

> `optional` **onSuspendCapture**: `ReactEventHandler`\<`HTMLInputElement`\>

#### Inherited from

`InputHTMLAttributes.onSuspendCapture`

#### Source

node\_modules/@types/react/index.d.ts:2478

***

### onTimeUpdate?

> `optional` **onTimeUpdate**: `ReactEventHandler`\<`HTMLInputElement`\>

#### Inherited from

`InputHTMLAttributes.onTimeUpdate`

#### Source

node\_modules/@types/react/index.d.ts:2479

***

### onTimeUpdateCapture?

> `optional` **onTimeUpdateCapture**: `ReactEventHandler`\<`HTMLInputElement`\>

#### Inherited from

`InputHTMLAttributes.onTimeUpdateCapture`

#### Source

node\_modules/@types/react/index.d.ts:2480

***

### onTouchCancel?

> `optional` **onTouchCancel**: `TouchEventHandler`\<`HTMLInputElement`\>

#### Inherited from

`InputHTMLAttributes.onTouchCancel`

#### Source

node\_modules/@types/react/index.d.ts:2529

***

### onTouchCancelCapture?

> `optional` **onTouchCancelCapture**: `TouchEventHandler`\<`HTMLInputElement`\>

#### Inherited from

`InputHTMLAttributes.onTouchCancelCapture`

#### Source

node\_modules/@types/react/index.d.ts:2530

***

### onTouchEnd?

> `optional` **onTouchEnd**: `TouchEventHandler`\<`HTMLInputElement`\>

#### Inherited from

`InputHTMLAttributes.onTouchEnd`

#### Source

node\_modules/@types/react/index.d.ts:2531

***

### onTouchEndCapture?

> `optional` **onTouchEndCapture**: `TouchEventHandler`\<`HTMLInputElement`\>

#### Inherited from

`InputHTMLAttributes.onTouchEndCapture`

#### Source

node\_modules/@types/react/index.d.ts:2532

***

### onTouchMove?

> `optional` **onTouchMove**: `TouchEventHandler`\<`HTMLInputElement`\>

#### Inherited from

`InputHTMLAttributes.onTouchMove`

#### Source

node\_modules/@types/react/index.d.ts:2533

***

### onTouchMoveCapture?

> `optional` **onTouchMoveCapture**: `TouchEventHandler`\<`HTMLInputElement`\>

#### Inherited from

`InputHTMLAttributes.onTouchMoveCapture`

#### Source

node\_modules/@types/react/index.d.ts:2534

***

### onTouchStart?

> `optional` **onTouchStart**: `TouchEventHandler`\<`HTMLInputElement`\>

#### Inherited from

`InputHTMLAttributes.onTouchStart`

#### Source

node\_modules/@types/react/index.d.ts:2535

***

### onTouchStartCapture?

> `optional` **onTouchStartCapture**: `TouchEventHandler`\<`HTMLInputElement`\>

#### Inherited from

`InputHTMLAttributes.onTouchStartCapture`

#### Source

node\_modules/@types/react/index.d.ts:2536

***

### onTransitionEnd?

> `optional` **onTransitionEnd**: `TransitionEventHandler`\<`HTMLInputElement`\>

#### Inherited from

`InputHTMLAttributes.onTransitionEnd`

#### Source

node\_modules/@types/react/index.d.ts:2575

***

### onTransitionEndCapture?

> `optional` **onTransitionEndCapture**: `TransitionEventHandler`\<`HTMLInputElement`\>

#### Inherited from

`InputHTMLAttributes.onTransitionEndCapture`

#### Source

node\_modules/@types/react/index.d.ts:2576

***

### onVolumeChange?

> `optional` **onVolumeChange**: `ReactEventHandler`\<`HTMLInputElement`\>

#### Inherited from

`InputHTMLAttributes.onVolumeChange`

#### Source

node\_modules/@types/react/index.d.ts:2481

***

### onVolumeChangeCapture?

> `optional` **onVolumeChangeCapture**: `ReactEventHandler`\<`HTMLInputElement`\>

#### Inherited from

`InputHTMLAttributes.onVolumeChangeCapture`

#### Source

node\_modules/@types/react/index.d.ts:2482

***

### onWaiting?

> `optional` **onWaiting**: `ReactEventHandler`\<`HTMLInputElement`\>

#### Inherited from

`InputHTMLAttributes.onWaiting`

#### Source

node\_modules/@types/react/index.d.ts:2483

***

### onWaitingCapture?

> `optional` **onWaitingCapture**: `ReactEventHandler`\<`HTMLInputElement`\>

#### Inherited from

`InputHTMLAttributes.onWaitingCapture`

#### Source

node\_modules/@types/react/index.d.ts:2484

***

### onWheel?

> `optional` **onWheel**: `WheelEventHandler`\<`HTMLInputElement`\>

#### Inherited from

`InputHTMLAttributes.onWheel`

#### Source

node\_modules/@types/react/index.d.ts:2563

***

### onWheelCapture?

> `optional` **onWheelCapture**: `WheelEventHandler`\<`HTMLInputElement`\>

#### Inherited from

`InputHTMLAttributes.onWheelCapture`

#### Source

node\_modules/@types/react/index.d.ts:2564

***

### pattern?

> `optional` **pattern**: `string`

#### Inherited from

`InputHTMLAttributes.pattern`

#### Source

node\_modules/@types/react/index.d.ts:3377

***

### placeholder?

> `optional` **placeholder**: `string`

#### Inherited from

`InputHTMLAttributes.placeholder`

#### Source

node\_modules/@types/react/index.d.ts:3378

***

### prefix?

> `optional` **prefix**: `string`

#### Inherited from

`InputHTMLAttributes.prefix`

#### Source

node\_modules/@types/react/index.d.ts:2924

***

### property?

> `optional` **property**: `string`

#### Inherited from

`InputHTMLAttributes.property`

#### Source

node\_modules/@types/react/index.d.ts:2925

***

### radioGroup?

> `optional` **radioGroup**: `string`

#### Inherited from

`InputHTMLAttributes.radioGroup`

#### Source

node\_modules/@types/react/index.d.ts:2914

***

### readOnly?

> `optional` **readOnly**: `boolean`

#### Inherited from

`InputHTMLAttributes.readOnly`

#### Source

node\_modules/@types/react/index.d.ts:3379

***

### rel?

> `optional` **rel**: `string`

#### Inherited from

`InputHTMLAttributes.rel`

#### Source

node\_modules/@types/react/index.d.ts:2926

***

### required?

> `optional` **required**: `boolean`

#### Inherited from

`InputHTMLAttributes.required`

#### Source

node\_modules/@types/react/index.d.ts:3380

***

### requiredText?

> `optional` **requiredText**: `string`

The text to render besides the label text when the field is requried.

#### Default

```ts
"*"
```

#### Source

[packages/web/src/lib/fields/Input.component.tsx:41](https://github.com/JoseLion/lynxts/blob/main/packages/web/src/lib/fields/Input.component.tsx#L41)

***

### resource?

> `optional` **resource**: `string`

#### Inherited from

`InputHTMLAttributes.resource`

#### Source

node\_modules/@types/react/index.d.ts:2927

***

### results?

> `optional` **results**: `number`

#### Inherited from

`InputHTMLAttributes.results`

#### Source

node\_modules/@types/react/index.d.ts:2942

***

### rev?

> `optional` **rev**: `string`

#### Inherited from

`InputHTMLAttributes.rev`

#### Source

node\_modules/@types/react/index.d.ts:2928

***

### role?

> `optional` **role**: `AriaRole`

#### Inherited from

`InputHTMLAttributes.role`

#### Source

node\_modules/@types/react/index.d.ts:2917

***

### security?

> `optional` **security**: `string`

#### Inherited from

`InputHTMLAttributes.security`

#### Source

node\_modules/@types/react/index.d.ts:2943

***

### size?

> `optional` **size**: `number`

#### Inherited from

`InputHTMLAttributes.size`

#### Source

node\_modules/@types/react/index.d.ts:3381

***

### slot?

> `optional` **slot**: `string`

#### Inherited from

`InputHTMLAttributes.slot`

#### Source

node\_modules/@types/react/index.d.ts:2906

***

### spellCheck?

> `optional` **spellCheck**: `Booleanish`

#### Inherited from

`InputHTMLAttributes.spellCheck`

#### Source

node\_modules/@types/react/index.d.ts:2907

***

### src?

> `optional` **src**: `string`

#### Inherited from

`InputHTMLAttributes.src`

#### Source

node\_modules/@types/react/index.d.ts:3382

***

### step?

> `optional` **step**: `string` \| `number`

#### Inherited from

`InputHTMLAttributes.step`

#### Source

node\_modules/@types/react/index.d.ts:3383

***

### style?

> `optional` **style**: `CSSProperties`

#### Inherited from

`InputHTMLAttributes.style`

#### Source

node\_modules/@types/react/index.d.ts:2908

***

### suppressContentEditableWarning?

> `optional` **suppressContentEditableWarning**: `boolean`

#### Inherited from

`InputHTMLAttributes.suppressContentEditableWarning`

#### Source

node\_modules/@types/react/index.d.ts:2891

***

### suppressHydrationWarning?

> `optional` **suppressHydrationWarning**: `boolean`

#### Inherited from

`InputHTMLAttributes.suppressHydrationWarning`

#### Source

node\_modules/@types/react/index.d.ts:2892

***

### tabIndex?

> `optional` **tabIndex**: `number`

#### Inherited from

`InputHTMLAttributes.tabIndex`

#### Source

node\_modules/@types/react/index.d.ts:2909

***

### title?

> `optional` **title**: `string`

#### Inherited from

`InputHTMLAttributes.title`

#### Source

node\_modules/@types/react/index.d.ts:2910

***

### translate?

> `optional` **translate**: `"yes"` \| `"no"`

#### Inherited from

`InputHTMLAttributes.translate`

#### Source

node\_modules/@types/react/index.d.ts:2911

***

### type?

> `optional` **type**: `HTMLInputTypeAttribute`

#### Inherited from

`InputHTMLAttributes.type`

#### Source

node\_modules/@types/react/index.d.ts:3384

***

### typeof?

> `optional` **typeof**: `string`

#### Inherited from

`InputHTMLAttributes.typeof`

#### Source

node\_modules/@types/react/index.d.ts:2929

***

### unselectable?

> `optional` **unselectable**: `"on"` \| `"off"`

#### Inherited from

`InputHTMLAttributes.unselectable`

#### Source

node\_modules/@types/react/index.d.ts:2944

***

### value?

> `optional` **value**: `string` \| `number` \| readonly `string`[]

#### Inherited from

`InputHTMLAttributes.value`

#### Source

node\_modules/@types/react/index.d.ts:3385

***

### vocab?

> `optional` **vocab**: `string`

#### Inherited from

`InputHTMLAttributes.vocab`

#### Source

node\_modules/@types/react/index.d.ts:2930

***

### width?

> `optional` **width**: `string` \| `number`

#### Inherited from

`InputHTMLAttributes.width`

#### Source

node\_modules/@types/react/index.d.ts:3386
