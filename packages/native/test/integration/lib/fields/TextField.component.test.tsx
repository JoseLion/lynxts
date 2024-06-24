import { expect } from "@assertive-ts/core";
import { FormProvider } from "@lynxts/core";
import { fireEvent, render, waitFor } from "@testing-library/react-native";
import { type ReactElement, useCallback, useState } from "react";
import { Button } from "react-native";
import Sinon from "sinon";
import { type ObjectSchema, object, string } from "yup";

import { SubmitButton } from "../../../../src/lib/SubmitButton.component";
import { textFieldOf } from "../../../../src/lib/fields/TextField.component";

interface Foo {
  name: string;
  other?: string;
}

interface TestFormProps {
  onSubmit?: (values: Foo) => void;
}

const schema: ObjectSchema<Foo> = object({
  name: string().required("The name is required!"),
  other: string().optional(),
});

const TextField = textFieldOf<Foo>();

function TestForm({ onSubmit = Sinon.fake }: TestFormProps): ReactElement {
  const [foo, setFoo] = useState<Partial<Foo>>({ other: "5" });

  const updateValues = useCallback((): void => {
    setFoo({ name: "foo", other: "10" });
  }, []);

  return (
    <FormProvider onSubmit={onSubmit} validation={schema} values={foo}>
      <TextField name="name" label="Name:" />

      <Button title="Update!" onPress={updateValues} />
      <SubmitButton title="Submit!" />
    </FormProvider>
  );
}

describe("[Integration] TextField.component.test.tsx", () => {
  context("when the text field changes", () => {
    it("sets the new value in the form context", async () => {
      const spySubmit = Sinon.spy<(values: Foo) => void>(() => undefined);
      const { findByLabelText, getByDisplayValue, findByRole } = render(<TestForm onSubmit={spySubmit} />);

      const nameField = await findByLabelText("Name: *");

      await waitFor(() => fireEvent.changeText(nameField, "bar"));

      await waitFor(() => getByDisplayValue("bar"));

      const submitButton = await findByRole("button", { name: "Submit!" });

      await waitFor(() => fireEvent.press(submitButton));

      Sinon.assert.calledOnceWithExactly(spySubmit, { name: "bar", other: "5" });
    });
  });

  context("when the field looses focus", () => {
    it("sets the field as touched", async () => {
      const { findByLabelText, queryByText, getByText } = render(<TestForm />);

      const nameField = await findByLabelText("Name: *");

      expect(queryByText("The name is required!")).toBeNull();

      await waitFor(() => fireEvent(nameField, "blur", { }));

      await waitFor(() => getByText("The name is required!"));
    });
  });

  context("when the form context value changes", () => {
    it("changes the text field value", async () => {
      const spySubmit = Sinon.spy<(values: Foo) => void>(() => undefined);
      const { queryByDisplayValue, findByRole, getByDisplayValue } = render(<TestForm onSubmit={spySubmit} />);

      await waitFor(() => {
        expect(queryByDisplayValue("foo")).toBeNull();
      });

      const updateButton = await findByRole("button", { name: "Update!" });

      await waitFor(() => fireEvent.press(updateButton));

      await waitFor(() => getByDisplayValue("foo"));

      const submitButton = await findByRole("button", { name: "Submit!" });

      await waitFor(() => fireEvent.press(submitButton));

      Sinon.assert.calledOnceWithExactly(spySubmit, { name: "foo", other: "10" });
    });
  });

  context("when the label prop is omitted", () => {
    it("does not render a label on the field", async () => {
      const { getByPlaceholderText, queryByText } = render(
        <FormProvider<Foo> onSubmit={Sinon.fake} validation={schema}>
          <TextField name="name" placeholder="Name" />
        </FormProvider>,
      );

      await waitFor(() => getByPlaceholderText("Name"));

      expect(queryByText("Name: *")).toBeNull();
    });
  });

  context("when the requiredText prop is changed", () => {
    context("and the required text is not empty", () => {
      it("uses the text instead of the asterisk", async () => {
        const { getByLabelText } = render(
          <FormProvider<Foo> onSubmit={Sinon.fake} validation={schema}>
            <TextField name="name" label="Name:" requiredText="(required)" />
            <TextField name="other" label="Other:" requiredText="(required)" />
          </FormProvider>,
        );

        await waitFor(() => {
          getByLabelText("Name: (required)");
          getByLabelText("Other:");
        });
      });
    });

    context("and the required text is empty", () => {
      it("does not show the required text", async () => {
        const { getByLabelText } = render(
          <FormProvider<Foo> onSubmit={Sinon.fake} validation={schema}>
            <TextField name="name" label="Name:" requiredText="" />
            <TextField name="other" label="Other:" />
          </FormProvider>,
        );

        await waitFor(() => {
          getByLabelText("Name:");
          getByLabelText("Other:");
        });
      });
    });
  });

  context("when the keyboard submit is pressed", () => {
    it("submits the form", async () => {
      const spySubmit = Sinon.spy<(values: Foo) => void>(() => undefined);
      const { findByLabelText, getByDisplayValue } = render(
        <FormProvider<Foo> onSubmit={spySubmit} validation={schema}>
          <TextField name="name" label="Name:" returnKeyType="done" />
        </FormProvider>,
      );

      const textField = await findByLabelText("Name: *");

      await waitFor(() => fireEvent.changeText(textField, "foo"));

      await waitFor(() => getByDisplayValue("foo"));

      await waitFor(() => fireEvent(textField, "submitEditing"));

      Sinon.assert.calledOnceWithExactly(spySubmit, { name: "foo" });
    });
  });
});
