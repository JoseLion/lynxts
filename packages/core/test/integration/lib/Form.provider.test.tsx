import { expect } from "@stackbuilders/assertive-ts";
import { render, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ReactElement, useCallback, useState } from "react";
import Sinon from "sinon";
import { ObjectSchema, boolean, isSchema, number, object, string } from "yup";
import { z } from "zod";

import { useFormSelector } from "../../../src/lib/Form.context";
import { FormProvider, FormProviderProps } from "../../../src/lib/Form.provider";

interface Foo {
  x: number;
  y: string;
  z: boolean;
}

const yupSchema: ObjectSchema<Foo> = object({
  x: number().required(),
  y: string().required(),
  z: boolean().required(),
});

const zodSchema = z.object({
  x: z.number(),
  y: z.string(),
  z: z.boolean(),
})
.strict();

interface TestAppProps {
  init?: Partial<Foo>;
  onSubmit?: (values: Foo) => void;
  schema?: FormProviderProps<Foo>["validation"];
}

function TestApp(props: TestAppProps): ReactElement {
  const { init = { }, onSubmit = Sinon.fake, schema = yupSchema } = props;

  const [data, setData] = useState<Partial<Foo>>(init);

  const changeData = useCallback((): void => {
    setData({
      x: 5,
      y: "foo",
      z: true,
    });
  }, []);

  return (
    <FormProvider<Foo>
      onSubmit={onSubmit}
      validation={schema}
      values={data}
    >
      {({ submit, values }) => (
        <>
          <div>{`x: ${values.x}`}</div>
          <div>{`y: ${values.y}`}</div>
          <div>{`z: ${values.z}`}</div>
          <Errors />
          <WasSubmitted />

          <button type="button" onClick={changeData}>
            {"Change!"}
          </button>

          <button type="button" onClick={submit}>
            {"Submit!"}
          </button>
        </>
      )}
    </FormProvider>
  );
}

function Errors(): ReactElement | null {
  const violations = useFormSelector(ctxt => ctxt.violations);

  if (violations.size === 0) {
    return null;
  }

  return (
    <div>{`Errors: ${[...violations.keys()].join(", ")}`}</div>
  );
}

function WasSubmitted(): ReactElement {
  const submmited = useFormSelector(ctxt => ctxt.submitted);

  return (
    <div>{`Submitted? ${submmited}`}</div>
  );
}

describe("[Integration] Form.provider.test.tsx", () => {
  context("when the provider children is a function", () => {
    it("renders the result passing context as parameters", async () => {
      const { getByText } = render(
        <FormProvider<Foo>
          onSubmit={Sinon.fake}
          validation={yupSchema}
          values={{ y: "foo" }}
        >
          {({ values }) => (
            <>
              <div>{`x: ${values.x}`}</div>
              <div>{`y: ${values.y}`}</div>
              <div>{`z: ${values.z}`}</div>
            </>
          )}
        </FormProvider>,
      );

      await waitFor(() => {
        getByText("x: undefined");
        getByText("y: foo");
        getByText("z: undefined");
      });
    });
  });

  context("when the provider children is not a function", () => {
    it("renders the children elements", async () => {
      const { getByText } = render(
        <FormProvider<Foo>
          onSubmit={Sinon.fake}
          validation={yupSchema}
          values={{ y: "foo" }}
        >
          <div>{"foo"}</div>
        </FormProvider>,
      );

      await waitFor(() => getByText("foo"));
    });
  });

  context("when the values prop changes", () => {
    it("updates the from values in the context", async () => {
      const { getByText, findByRole } = render(<TestApp />);

      await waitFor(() => {
        getByText("x: undefined");
        getByText("y: undefined");
        getByText("z: undefined");
      });

      const changeButton = await findByRole("button", { name: "Change!" });

      await userEvent.click(changeButton);

      await waitFor(() => {
        getByText("x: 5");
        getByText("y: foo");
        getByText("z: true");
      });
    });
  });

  context("when the submit function is called from the context", () => {
    it("calls the onSubmit callback once", async () => {
      const spySubmit = Sinon.spy<(v: Foo) => void>(() => undefined);
      const { findByRole } = render(
        <FormProvider<Foo>
          onSubmit={spySubmit}
          validation={yupSchema}
          values={{ x: 1, y: "foo", z: true }}
        >
          {({ submit }) => (
            <button type="button" onClick={submit}>
              {"Submit!"}
            </button>
          )}
        </FormProvider>,
      );

      const submitButton = await findByRole("button", { name: "Submit!" });

      await userEvent.click(submitButton);

      Sinon.assert.calledOnceWithExactly(spySubmit, { x: 1, y: "foo", z: true });
    });
  });

  [yupSchema, zodSchema].forEach(schema => {
    const schemaName = isSchema(schema) ? "Yup" : "Zod";

    context("when the validation fails", () => {
      it("sets all the violations, does not call the onSubmit callback, sets the form as submitted", async () => {
        const spySubmit = Sinon.spy<(v: Foo) => void>(() => undefined);
          const { findByRole, getByText } = render(
            <TestApp
              onSubmit={spySubmit}
              schema={schema}
            />,
          );

          await waitFor(() => getByText("Submitted? false"));

          const submitButton = await findByRole("button", { name: "Submit!" });

          await userEvent.click(submitButton);

          await waitFor(() => getByText("Errors: x, y, z"));

          Sinon.assert.notCalled(spySubmit);

          await waitFor(() => getByText("Submitted? true"));
      });
    });

    describe(`[${schemaName}] validate`, () => {
      context("when the validation success", () => {
        it("clears the errors, calls the onSubmit callback once, and sets the form as submitted", async () => {
          const spySubmit = Sinon.spy<(v: Foo) => void>(() => undefined);
          const { findByRole, getByText, queryByText } = render(
            <TestApp
              onSubmit={spySubmit}
              schema={schema}
            />,
          );

          await waitFor(() => getByText("Submitted? false"));

          const submitButton = await findByRole("button", { name: "Submit!" });

          await userEvent.click(submitButton);

          await waitFor(() => getByText("Errors: x, y, z"));

          const changeButton = await findByRole("button", { name: "Change!" });

          await userEvent.click(changeButton);

          await waitFor(() => {
            getByText("x: 5");
            getByText("y: foo");
            getByText("z: true");
          });

          await userEvent.click(submitButton);

          await waitFor(() => {
            expect(queryByText("Errors: x, y, z")).toBeNull();
          });

          Sinon.assert.calledWithExactly(spySubmit, { x: 5, y: "foo", z: true });

          await waitFor(() => getByText("Submitted? true"));
        });
      });
    });
  });
});
