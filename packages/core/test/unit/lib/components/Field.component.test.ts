import { describe, expectTypeOf, it, suite } from "vitest";

import type { Optional, Path, ValueByPath } from "../../../../src/lib/Form.context";
import type { FieldOf, FieldProps } from "../../../../src/lib/components/Field.component";
import type { ReactNode } from "react";

interface Foo {
  x: number;
  y: Array<{ a: boolean; b: string; c: number[]; }>;
  z: {
    m: Date;
    n: { end: "foo"; };
  };
}

suite("[Unit] Field.component.test.ts", () => {
  describe("types definitions", () => {
    it("defines the types of FieldOf", () => {
      expectTypeOf<FieldOf<Foo>>().toMatchTypeOf<
        (props: FieldProps<Foo, Path<Foo>, Optional<ValueByPath<Foo, Path<Foo>>>>) => ReactNode
      >();
    });
  });
});
