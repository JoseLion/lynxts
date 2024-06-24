import { expect } from "@assertive-ts/core";
import { fireEvent, render, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { type ReactElement, useCallback, useState } from "react";
import Sinon from "sinon";
import { type ObjectSchema, object, string } from "yup";

import { Form } from "../../../../src/lib/Form.component";
import { selectOf } from "../../../../src/lib/fields/Select.component";

type OS = "win" | "mac" | "linux";

interface Foo {
  os: OS;
  other?: string;
}

interface TestFormProps {
  onSubmit?: (values: Foo) => void;
}

const OS_OPTIONS: OS[] = ["win", "mac", "linux"];

const Select = selectOf<Foo>();

const schema: ObjectSchema<Foo> = object({
  os: string().oneOf(OS_OPTIONS).required("The OS is required!"),
  other: string().optional(),
});

function TestForm({ onSubmit = Sinon.fake }: TestFormProps): ReactElement {
  const [foo, setFoo] = useState<Partial<Foo>>({ });

  const renderOS = useCallback((os: OS): string => {
    switch (os) {
      case "linux": return "Linux";
      case "mac": return "MacOS";
      case "win": return "Windows";
    }
  }, []);

  const updateValues = useCallback((): void => {
    setFoo({ os: "mac", other: "foo" });
  }, []);

  return (
    <Form onSubmit={onSubmit} validation={schema} values={foo}>
      <Select
        name="os"
        label="OS:"
        options={OS_OPTIONS}
        toText={renderOS}
      />
      <Select
        name="other"
        label="Other:"
        options={["foo", "bar"]}
      />

      <button type="button" onClick={updateValues}>{"Update!"}</button>
      <button type="submit">{"Submit!"}</button>
    </Form>
  );
}

describe("[Integration] Select.component.test.tsx", () => {
  context("when the select option changes", () => {
    it("sets the new value in the form context", async () => {
      const spySubmit = Sinon.spy<(values: Foo) => void>(() => undefined);
      const { findByRole } = render(<TestForm onSubmit={spySubmit} />);

      const osSelect = await findByRole("combobox", { name: "OS: *" });

      await userEvent.selectOptions(osSelect, "Windows");

      const submitButton = await findByRole("button", { name: "Submit!" });

      await userEvent.click(submitButton);

      Sinon.assert.calledOnceWithExactly(spySubmit, { os: "win" });
    });
  });

  context("when the field looses focus", () => {
    it("sets the field as touched", async () => {
      const { findByRole, queryByText, getByText } = render(<TestForm />);

      const osSelect = await findByRole("combobox", { name: "OS: *" });

      expect(queryByText("The OS is required!")).toBeNull();

      fireEvent.blur(osSelect);

      await waitFor(() => getByText("The OS is required!"));
    });
  });

  context("when the form context value changes", () => {
    it("changes the input value", async () => {
      const { getAllByDisplayValue, queryByDisplayValue, findByRole, getByDisplayValue } = render(<TestForm />);

      await waitFor(() => {
        expect(getAllByDisplayValue("--")).toHaveSize(2);
        expect(queryByDisplayValue("MacOS")).toBeNull();
        expect(queryByDisplayValue("foo")).toBeNull();
      });

      const updateButton = await findByRole("button", { name: "Update!" });

      await userEvent.click(updateButton);

      await waitFor(() => {
        getByDisplayValue("MacOS");
        getByDisplayValue("foo");
      });
    });
  });

  context("when the label prop is omitted", () => {
    it("does not render a label on the field", async () => {
      const { getByRole, queryByRole } = render(
        <Form<Foo> onSubmit={Sinon.fake} validation={schema}>
          <Select name="os" options={OS_OPTIONS} />
        </Form>,
      );

      await waitFor(() => getByRole("combobox"));

      expect(queryByRole("combobox", { name: "OS: *" })).toBeNull();
    });
  });

  context("when the requiredText prop is changed", () => {
    context("and the required text is not empty", () => {
      it("uses the text instead of the asterisk", async () => {
        const { getByRole } = render(
          <Form<Foo> onSubmit={Sinon.fake} validation={schema}>
            <Select name="os" label="OS:" options={OS_OPTIONS} requiredText="(required)" />
            <Select name="other" label="Other:" options={[]} requiredText="(required)" />
          </Form>,
        );

        await waitFor(() => {
          getByRole("combobox", { name: "OS: (required)" });
          getByRole("combobox", { name: "Other:" });
        });
      });
    });

    context("and the reuired text is empty", () => {
      it("does not show the required superscript", async () => {
        const { getByRole } = render(
          <Form<Foo> onSubmit={Sinon.fake} validation={schema}>
            <Select name="os" label="OS:" options={OS_OPTIONS} requiredText="" />
            <Select name="other" label="Other:" options={[]} requiredText="" />
          </Form>,
        );

        await waitFor(() => {
          getByRole("combobox", { name: "OS:" });
          getByRole("combobox", { name: "Other:" });
        });
      });
    });
  });
});
