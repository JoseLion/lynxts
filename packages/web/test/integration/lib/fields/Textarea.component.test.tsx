import { expect } from "@assertive-ts/core";
import { fireEvent, render, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { type ReactElement, useCallback, useState } from "react";
import Sinon from "sinon";
import { type ObjectSchema, object, string } from "yup";

import { Form } from "../../../../src/lib/Form.component";
import { textareaOf } from "../../../../src/lib/fields/Textarea.component";

interface Foo {
  name: string;
  other?: string;
}

interface TestFormProps {
  onSubmit?: (values: Foo) => void;
}

const Textarea = textareaOf<Foo>();

const schema: ObjectSchema<Foo> = object({
  name: string().required("The name is required!"),
  other: string().optional(),
});

function TestForm({ onSubmit = Sinon.fake }: TestFormProps): ReactElement {
  const [foo, setFoo] = useState<Partial<Foo>>({ });

  const updateValues = useCallback((): void => {
    setFoo({
      name: "bar",
      other: "baz",
    });
  }, []);

  return (
    <Form onSubmit={onSubmit} validation={schema} values={foo}>
      <Textarea name="name" label="Name:" />
      <Textarea name="other" label="Other:" />

      <button type="button" onClick={updateValues}>{"Update!"}</button>
      <button type="submit">{"Submit!"}</button>
    </Form>
  );
}

describe("[Integration] Textarea.component.test.tsx", () => {
  context("when the textarea changes", () => {
    it("sets the new value in the form context", async () => {
      const spySubmit = Sinon.spy<(values: Foo) => void>(() => undefined);
      const { findByRole } = render(<TestForm onSubmit={spySubmit} />);

      const nameTextarea = await findByRole("textbox", { name: "Name: *" });

      await userEvent.type(nameTextarea, "foo");

      const submitButton = await findByRole("button", { name: "Submit!" });

      await userEvent.click(submitButton);

      Sinon.assert.calledOnceWithExactly(spySubmit, { name: "foo" });
    });
  });

  context("when the field looses focus", () => {
    it("sets the field as touched", async () => {
      const { findByRole, queryByText, getByText } = render(<TestForm />);

      const nameTextarea = await findByRole("textbox", { name: "Name: *" });

      expect(queryByText("The name is required!")).toBeNull();

      fireEvent.blur(nameTextarea);

      await waitFor(() => getByText("The name is required!"));
    });
  });

  context("when the form context value changes", () => {
    it("changes the textarea value", async () => {
      const { queryByDisplayValue, findByRole, getByDisplayValue } = render(<TestForm />);

      await waitFor(() => {
        expect(queryByDisplayValue("bar")).toBeNull();
        expect(queryByDisplayValue("baz")).toBeNull();
      });

      const updateButton = await findByRole("button", { name: "Update!" });

      await userEvent.click(updateButton);

      await waitFor(() => {
        getByDisplayValue("bar");
        getByDisplayValue("baz");
      });
    });
  });

  context("when the label prop is omitted", () => {
    it("does not render a label on the field", async () => {
      const { getByRole, queryByRole } = render(
        <Form<Foo> onSubmit={Sinon.fake} validation={schema}>
          <Textarea name="name" />
        </Form>,
      );

      await waitFor(() => getByRole("textbox"));

      expect(queryByRole("textbox", { name: "Name: *" })).toBeNull();
    });
  });

  context("when the requiredText prop is changed", () => {
    context("and the required text is not empty", () => {
      it("uses the text instead of the asterisk", async () => {
        const { getByRole } = render(
          <Form<Foo> onSubmit={Sinon.fake} validation={schema}>
            <Textarea name="name" label="Name:" requiredText="(required)" />
            <Textarea name="other" label="Other:" requiredText="(required)" />
          </Form>,
        );

        await waitFor(() => {
          getByRole("textbox", { name: "Name: (required)" });
          getByRole("textbox", { name: "Other:" });
        });
      });
    });

    context("and the reuired text is empty", () => {
      it("does not show the required superscript", async () => {
        const { getByRole } = render(
          <Form<Foo> onSubmit={Sinon.fake} validation={schema}>
            <Textarea name="name" label="Name:" requiredText="" />
            <Textarea name="other" label="Other:" requiredText="" />
          </Form>,
        );

        await waitFor(() => {
          getByRole("textbox", { name: "Name:" });
          getByRole("textbox", { name: "Other:" });
        });
      });
    });
  });
});
