import { render, waitFor } from "@testing-library/react";
import Sinon from "sinon";
import { ObjectSchema, array, number, object, string } from "yup";

import { FormProvider } from "../../../../src/lib/Form.provider";
import { arrayFieldOf } from "../../../../src/lib/components/ArrayField.component";

interface Foo {
  levels: number[];
  name: string;
}

const ArrayField = arrayFieldOf<Foo>();

const schema: ObjectSchema<Foo> = object({
  levels: array(number().required()).required(),
  name: string().required(),
});

describe("[Integration] ArrayField.component.test.tsx", () => {
  context("when the array field is rendered", () => {
    it("renders the result of the function in the children", async () => {
      const { getByRole } = render(
        <FormProvider<Foo>
          onSubmit={Sinon.fake}
          validation={schema}
          values={{ levels: [1, 2, 3] }}
        >
          <ArrayField name="levels">
            {({ items, keygen }) => items.map((item, i) => (
              <h1 key={keygen(i)}>{`Item ${item}`}</h1>
            ))}
          </ArrayField>
        </FormProvider>,
      );

      await waitFor(() => {
        getByRole("heading", { name: "Item 1" });
        getByRole("heading", { name: "Item 2" });
        getByRole("heading", { name: "Item 3" });
      });
    });
  });
});
