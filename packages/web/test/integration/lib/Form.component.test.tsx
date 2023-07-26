import { render, waitFor, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Sinon from "sinon";
import { ObjectSchema, number, object, string } from "yup";

import { Form } from "../../../src/lib/Form.component";

interface Foo {
  name: string;
  other: number;
}

const schema: ObjectSchema<Foo> = object({
  name: string().required(),
  other: number().required(),
});

describe("[Integration] Form.component.test.tsx", () => {
  context("when the From component is rendered", () => {
    it("renders a FormProvider children wrapped around a <form> element", async () => {
      const spySubmit = Sinon.spy<(values: Foo) => void>(() => undefined);
      const { getByText, findByRole } = render(
        <Form
          aria-label="foo-form"
          onSubmit={spySubmit}
          validation={schema}
          values={{ name: "foo", other: 5 }}
        >
          {({ values }) => (
            <>
              <div>{`Name: ${values.name}`}</div>
              <div>{`Other: ${values.other}`}</div>
              <button type="submit">{"Submit!"}</button>
            </>
          )}
        </Form>,
      );

      await waitFor(() => {
        getByText("Name: foo");
        getByText("Other: 5");
      });

      const form = await findByRole("form", { name: "foo-form" });

      const submitButton = await within(form).findByRole("button", { name: "Submit!" });

      await userEvent.click(submitButton);

      Sinon.assert.calledOnceWithExactly(spySubmit, { name: "foo", other: 5 });
    });
  });
});
