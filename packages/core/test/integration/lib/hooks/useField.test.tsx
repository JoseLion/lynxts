import { expect } from "@assertive-ts/core";
import { RenderHookResult, fireEvent, render, renderHook, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ChangeEvent, ReactElement, useCallback } from "react";
import Sinon from "sinon";
import { ObjectSchema, isSchema, number, object, string } from "yup";
import { z } from "zod";

import { Optional, Path, ValueByPath, useFormSelector } from "../../../../src/lib/Form.context";
import { FormProvider, FormProviderProps } from "../../../../src/lib/Form.provider";
import { UseField, useField } from "../../../../src/lib/hooks/useField";

interface User {
  age: number;
  name: string;
}

interface RenderOptions<K extends Path<User>, D extends Optional<ValueByPath<User, K>>> {
  fallback?: D;
  path: K;
  values?: Partial<User>;
}

interface TestAppProps {
  schema: FormProviderProps<User>["validation"];
}

const yupSchema: ObjectSchema<User> = object({
  age: number().required(),
  name: string().required("This field is required!"),
});

const zodSchema = z.object({
  age: z.number(),
  name: z.string().min(1, { message: "This field is required!" }),
});

function renderWith<
  K extends Path<User>,
  D extends Optional<ValueByPath<User, K>>,
>({ path, fallback, values }: RenderOptions<K, D>): RenderHookResult<UseField<ValueByPath<User, K>, D>, never> {
  return renderHook(() => useField(path, fallback), {
    wrapper(props) {
      return (
        <FormProvider<User> onSubmit={Sinon.fake} validation={yupSchema} values={values}>
          {props.children}
        </FormProvider>
      );
    },
  });
}

function TestApp(props: TestAppProps): ReactElement {
  const { schema } = props;

  return (
    <FormProvider<User> onSubmit={Sinon.fake} validation={schema}>
      <Field />
    </FormProvider>
  );
}

function Field(): ReactElement {
  const { setTouched, setValue, value } = useField<User, string>("name");
  const errors = useFormSelector(ctxt => ctxt.violations);
  const touchMap = useFormSelector(ctxt => ctxt.touched);

  const handleChange = useCallback(({ target }: ChangeEvent<HTMLInputElement>): void => {
    setValue(target.value);
  }, []);

  return (
    <>
      <label>
        {"Name:"}
        <input
          onChange={handleChange}
          onBlur={setTouched}
          value={value ?? ""}
        />
      </label>

      <div>{`Touched: ${touchMap.get("name") ?? false}`}</div>
      <div>{`Error: ${errors.get("name") ?? "--"}`}</div>
    </>
  );
}

describe("[Integration] useField.test.tsx", () => {
  context("when the hook is rendered", () => {
    it("returns the field value and state setters", () => {
      const { result } = renderWith({ path: "name", values: { name: "Alice" } });
      const { current } = result;

      expect(current.value).toBeEqual("Alice");
      expect(current.setTouched).toExist();
      expect(current.setValue).toExist();
    });
  });

  describe("fallback", () => {
    context("when the fallback is not provided", () => {
      it("starts the value as undefined and can change it back to undefined", () => {
        const { result, rerender } = renderWith({ path: "name" });

        expect(result.current.value).toBeUndefined();

        result.current.setValue("Alice");

        rerender();

        expect(result.current.value).toBeEqual("Alice");

        result.current.setValue(undefined);

        rerender();

        expect(result.current.value).toBeUndefined();
      });
    });

    context("when the fallback is defined", () => {
      it("starts the value with a default and falls back if changed to undefined", () => {
        const { result, rerender } = renderWith({ fallback: 0, path: "age" });

        expect(result.current.value).toBeZero();

        result.current.setValue(18);

        rerender();

        expect(result.current.value).toBeEqual(18);

        // TS won't allow, but checking for runtime edge case
        result.current.setValue(undefined as unknown as number);

        rerender();

        expect(result.current.value).toBeZero();
      });
    });
  });

  describe(".setValue", () => {
    it("changes the field value", () => {
      const { result, rerender } = renderWith({ path: "name" });

      expect(result.current.value).toBeUndefined();

      result.current.setValue("Alice");

      rerender();

      expect(result.current.value).toBeEqual("Alice");
    });
  });

  [yupSchema, zodSchema].forEach(schema => {
    const schemaName = isSchema(schema) ? "Yup" : "Zod";

    describe(`[${schemaName}] validation`, () => {
      context("when the field is valid", () => {
        context("and the field is untouched", () => {
          it("does not show any error", async () => {
            const { findByRole, getByText } = render(<TestApp schema={schema} />);

            await waitFor(() => {
              getByText("Touched: false");
              getByText("Error: --");
            });

            const nameInput = await findByRole("textbox", { name: "Name:" });

            await userEvent.type(nameInput, "foo");

            await waitFor(() => {
              getByText("Touched: false");
              getByText("Error: --");
            });
          });
        });

        context("and the field is touched", () => {
          it("does not show any error", async () => {
            const { findByRole, getByText } = render(<TestApp schema={schema} />);

            await waitFor(() => {
              getByText("Touched: false");
              getByText("Error: --");
            });

            const nameInput = await findByRole("textbox", { name: "Name:" });

            await userEvent.type(nameInput, "foo");

            await waitFor(() => {
              getByText("Touched: false");
              getByText("Error: --");
            });

            fireEvent.blur(nameInput);

            await waitFor(() => {
              getByText("Touched: true");
              getByText("Error: --");
            });
          });
        });
      });

      context("when the field is invalid", () => {
        context("and the field is untouched", () => {
          it("does not show the error", async () => {
            const { findByRole, getByText } = render(<TestApp schema={schema} />);

            await waitFor(() => {
              getByText("Touched: false");
              getByText("Error: --");
            });

            const nameInput = await findByRole("textbox", { name: "Name:" });

            await userEvent.type(nameInput, "foo");

            await waitFor(() => {
              getByText("Touched: false");
              getByText("Error: --");
            });

            await userEvent.clear(nameInput);

            await waitFor(() => {
              getByText("Touched: false");
              getByText("Error: --");
            });
          });
        });

        context("and the field is touched", () => {
          it("shows the error", async () => {
            const { findByRole, getByText } = render(<TestApp schema={schema} />);

            await waitFor(() => {
              getByText("Touched: false");
              getByText("Error: --");
            });

            const nameInput = await findByRole("textbox", { name: "Name:" });

            await userEvent.type(nameInput, "foo");

            await waitFor(() => {
              getByText("Touched: false");
              getByText("Error: --");
            });

            await userEvent.clear(nameInput);

            await waitFor(() => {
              getByText("Touched: false");
              getByText("Error: --");
            });

            fireEvent.blur(nameInput);

            await waitFor(() => {
              getByText("Touched: true");
              getByText("Error: This field is required!");
            });
          });
        });
      });
    });
  });
});
