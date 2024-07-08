import { describe, expectTypeOf, it, suite } from "vitest";

import type { Path, ValueByPath } from "../../../src/lib/Form.context";

interface Foo {
  x: number;
  y: Array<{ a: boolean; b: string; c: number[]; }>;
  z: {
    m: Date;
    n: { end: "foo"; };
  };
}

suite("[Unit] Form.context.test.ts", () => {
  describe("types definitions", () => {
    it("defines the types of Path", () => {
      expectTypeOf<Path<Foo>>().toEqualTypeOf<
        | "x"
        | "y"
        | `y.${number}`
        | `y.${number}.a`
        | `y.${number}.b`
        | `y.${number}.c`
        | `y.${number}.c.${number}`
        | "z"
        | "z.m"
        | "z.n"
        | "z.n.end"
      >();
      expectTypeOf<Path<Foo, number>>().toEqualTypeOf<"x">();
      expectTypeOf<Path<Foo, unknown[]>>().toEqualTypeOf<"y" | `y.${number}.c`>();
      expectTypeOf<Path<Foo, number[]>>().toEqualTypeOf<`y.${number}.c`>();
      expectTypeOf<Path<Foo, string>>().toEqualTypeOf<`y.${number}.b` | "z.n.end">();
      expectTypeOf<Path<Foo, "foo">>().toEqualTypeOf<"z.n.end">();
    });

    it("defines the types of ValueByPath", () => {
      expectTypeOf<ValueByPath<Foo, "x">>().toEqualTypeOf<number>();
      expectTypeOf<ValueByPath<Foo, "y.0.a">>().toEqualTypeOf<boolean>();
      expectTypeOf<ValueByPath<Foo, "y.0.c">>().toEqualTypeOf<number[]>();
      expectTypeOf<ValueByPath<Foo, "y.0.c.0">>().toEqualTypeOf<number>();
      expectTypeOf<ValueByPath<Foo, "z.m">>().toEqualTypeOf<Date>();
      expectTypeOf<ValueByPath<Foo, "z.n.end">>().toEqualTypeOf<"foo">();
    });
  });
});
