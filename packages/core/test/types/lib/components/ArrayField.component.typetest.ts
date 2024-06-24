import { expectTypeOf } from "expect-type";

import type { ArrayFieldOf, ArrayFieldProps, ArrayValue } from "../../../../src/lib/components/ArrayField.component";
import type { ReactNode } from "react";

interface Foo {
  x: number;
  y: Array<{ a: boolean; b: string; c: string[]; }>;
  z: {
    m: Date;
    n: number[];
  };
}

expectTypeOf<ArrayValue<Foo, "x">>().toBeNever();
expectTypeOf<ArrayValue<Foo, "y">>().toEqualTypeOf<{ a: boolean; b: string; c: string[]; }>();
expectTypeOf<ArrayValue<Foo, "y.0.c">>().toEqualTypeOf<string>();
expectTypeOf<ArrayValue<Foo, "z.n">>().toEqualTypeOf<number>();

expectTypeOf<ArrayFieldOf<Foo>>().toMatchTypeOf<
 (props: ArrayFieldProps<Foo, "y" | `y.${number}.c` | "z.n">) => ReactNode
>();
