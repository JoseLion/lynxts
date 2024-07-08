import { render, waitFor } from "@testing-library/react";
import Sinon from "sinon";
import { describe, it, suite } from "vitest";
import { type ObjectSchema, boolean, object, string } from "yup";

import { FormProvider } from "../../../../src/lib/Form.provider";
import { fieldOf } from "../../../../src/lib/components/Field.component";

interface Foo {
  name: string;
  other: boolean;
}

const Field = fieldOf<Foo>();

const schema: ObjectSchema<Foo> = object({
  name: string().required(),
  other: boolean().required(),
});

suite("[Integration] Field.component.test.tsx", () => {
  describe("when the field is rendered", () => {
    it("renders the result of the function in the children", async () => {
      const { getByDisplayValue } = render(
        <FormProvider<Foo>
          onSubmit={Sinon.fake}
          validation={schema}
          values={{ name: "foo" }}
        >
          <Field path="name" fallback="">
            {({ handleChange, setTouched, value }) => (
              <input
                type="text"
                onChange={handleChange(({ target }) => target.value)}
                onBlur={setTouched}
                value={value}
              />
            )}
          </Field>
        </FormProvider>,
      );

      await waitFor(() => getByDisplayValue("foo"));
    });
  });
});
