import { render, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ReactElement, useCallback, useState } from "react";
import Sinon from "sinon";
import { ObjectSchema, boolean, number, object, string } from "yup";

import { FormProvider } from "../../../src/main";

interface Foo {
  x: number;
  y: string;
  z: boolean;
}

const schema: ObjectSchema<Foo> = object({
  x: number().required(),
  y: string().required(),
  z: boolean().required(),
});

function TestApp(): ReactElement {
  const [data, setData] = useState<Partial<Foo>>({ });

  const changeData = useCallback((): void => {
    setData({
      x: 5,
      y: "foo",
      z: true,
    });
  }, []);

  return (
    <FormProvider<Foo>
      onSubmit={Sinon.fake}
      validation={schema}
      values={data}
    >
      {({ values }) => (
        <>
          <div>{`x: ${values.x}`}</div>
          <div>{`y: ${values.y}`}</div>
          <div>{`z: ${values.z}`}</div>

          <button type="button" onClick={changeData}>
            {"Change!"}
          </button>
        </>
      )}
    </FormProvider>
  );
}

describe("[Integration] Form.provider.test.tsx", () => {
  context("when the provider children is a function", () => {
    it("renders the result passing context as parameters", async () => {
      const { getByText } = render(
        <FormProvider<Foo>
          onSubmit={Sinon.fake}
          validation={schema}
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
          validation={schema}
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
      const submitSpy = Sinon.spy<(v: Foo) => void>(() => undefined);
      const { findByRole } = render(
        <FormProvider<Foo>
          onSubmit={submitSpy}
          validation={schema}
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

      Sinon.assert.calledOnceWithExactly(submitSpy, { x: 1, y: "foo", z: true });
    });
  });
});
