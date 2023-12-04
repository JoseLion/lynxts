import { expect } from "@assertive-ts/core";
import { RenderHookResult, renderHook } from "@testing-library/react";
import Sinon from "sinon";
import { ObjectSchema, array, object, string } from "yup";

import { FormProvider } from "../../../../src/lib/Form.provider";
import { UseArrayField, useArrayField } from "../../../../src/lib/hooks/useArrayField";

interface User {
  name: string;
  roles: string[];
}

const schema: ObjectSchema<User> = object({
  name: string().required(),
  roles: array(string().required()).required(),
});

function renderWith(...roles: string[]): RenderHookResult<UseArrayField<string>, never> {
  return renderHook(() => useArrayField<User, string>("roles"), {
    wrapper(props) {
      return (
        <FormProvider<User> onSubmit={Sinon.fake} validation={schema} values={{ roles }}>
          {props.children}
        </FormProvider>
      );
    },
  });
}

describe("[Integration] useArrayField.test.tsx", () => {
  context("when the hook is rendered", () => {
    it("returns the array items and helpers", () => {
      const { result } = renderWith("foo", "bar", "baz");
      const { current } = result;

      expect(current.items).toContainAll("foo", "bar", "baz");
      expect(current.append).toExist();
      expect(current.clear).toExist();
      expect(current.handle).toExist();
      expect(current.insert).toExist();
      expect(current.keygen).toExist();
      expect(current.prepend).toExist();
      expect(current.remove).toExist();
      expect(current.replace).toExist();
    });
  });

  describe(".append", () => {
    it("adds an item to the end of the array", () => {
      const { result, rerender } = renderWith("foo", "bar");

      expect(result.current.items).toBeEqual(["foo", "bar"]);

      result.current.append("baz");

      rerender();

      expect(result.current.items).toBeEqual(["foo", "bar", "baz"]);
    });
  });

  describe(".clear", () => {
    it("reomves all the array values", () => {
      const { result, rerender } = renderWith("foo", "bar", "baz");

      expect(result.current.items).toBeEqual(["foo", "bar", "baz"]);

      result.current.clear();

      rerender();

      expect(result.current.items).toBeEmpty();
    });
  });

  describe(".handle", () => {
    it("creates a handler function of the give function", () => {
      const { result, rerender } = renderWith("foo", "bar");

      expect(result.current.items).toBeEqual(["foo", "bar"]);

      result.current.handle(result.current.append, "baz")();

      rerender();

      expect(result.current.items).toBeEqual(["foo", "bar", "baz"]);
    });
  });

  describe(".insert", () => {
    context("when the index in inbounds", () => {
      it("insters the item at the index", () => {
        const { result, rerender } = renderWith("foo", "baz");

        expect(result.current.items).toBeEqual(["foo", "baz"]);

        result.current.insert("bar", 1);

        rerender();

        expect(result.current.items).toBeEqual(["foo", "bar", "baz"]);
      });
    });

    context("when the index is greater than the array size", () => {
      it("insert the item at the end of the array", () => {
        const { result, rerender } = renderWith("foo", "bar");

        expect(result.current.items).toBeEqual(["foo", "bar"]);

        result.current.insert("baz", 5);

        rerender();

        expect(result.current.items).toBeEqual(["foo", "bar", "baz"]);
      });
    });

    context("when the index is negative", () => {
      it("treats the index as an offset", () => {
        const { result, rerender } = renderWith("foo", "baz");

        expect(result.current.items).toBeEqual(["foo", "baz"]);

        result.current.insert("bar", -1);

        rerender();

        expect(result.current.items).toBeEqual(["foo", "bar", "baz"]);
      });
    });
  });

  describe(".keygen", () => {
    context("when a key is not provided", () => {
      it("returns a generated uuid", () => {
        const pattern = /[A-F0-9]{8}-[A-F0-9]{4}-[A-F0-9]{4}-[A-F0-9]{4}-[A-F0-9]{12}/i;
        const { result } = renderWith("foo", "bar");

        const key1 = result.current.keygen(0);
        const key2 = result.current.keygen(1);

        expect(key1).toMatchRegex(pattern);
        expect(key2).toMatchRegex(pattern);
        expect(key1).not.toBeEqual(key2);
      });
    });

    context("when the key is provided", () => {
      it("prefers the key over the generated uuid", () => {
        const today = new Date();
        const { result } = renderWith("foo", "bar");

        const key1 = result.current.keygen(0, "1034");
        const key2 = result.current.keygen(1, today);

        expect(key1).toBeEqual("1034");
        expect(key2).toBeEqual(today.toString());
      });
    });
  });

  describe(".prepend", () => {
    it("adds an item to the start of the array", () => {
      const { result, rerender } = renderWith("bar", "baz");

      expect(result.current.items).toBeEqual(["bar", "baz"]);

      result.current.prepend("foo");

      rerender();

      expect(result.current.items).toBeEqual(["foo", "bar", "baz"]);
    });
  });

  describe(".remove", () => {
    it("removes the item at the specified index", () => {
      const { result, rerender } = renderWith("foo", "bar", "baz");

      expect(result.current.items).toBeEqual(["foo", "bar", "baz"]);

      result.current.remove(1);

      rerender();

      expect(result.current.items).toBeEqual(["foo", "baz"]);
    });
  });

  describe(".replace", () => {
    context("when the index is inbounds", () => {
      it("replaces the item at the index", () => {
        const { result, rerender } = renderWith("foo", "bar", "baz");

        expect(result.current.items).toBeEqual(["foo", "bar", "baz"]);

        result.current.replace("other", 1);

        rerender();

        expect(result.current.items).toBeEqual(["foo", "other", "baz"]);
      });
    });

    context("when the index is greater than the array size", () => {
      it("insert the item at the end of the array", () => {
        const { result, rerender } = renderWith("foo", "bar", "baz");

        expect(result.current.items).toBeEqual(["foo", "bar", "baz"]);

        result.current.replace("other", 5);

        rerender();

        expect(result.current.items).toBeEqual(["foo", "bar", "baz", "other"]);
      });
    });

    context("when the index is negative", () => {
      it("treats the index as na offset", () => {
        const { result, rerender } = renderWith("foo", "bar", "baz");

        expect(result.current.items).toBeEqual(["foo", "bar", "baz"]);

        result.current.replace("other", -1);

        rerender();

        expect(result.current.items).toBeEqual(["foo", "bar", "other"]);
      });
    });
  });
});
