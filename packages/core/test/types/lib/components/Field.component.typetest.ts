import { expectTypeOf } from "expect-type";

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

expectTypeOf<FieldOf<Foo>>().toMatchTypeOf<
  (props: FieldProps<Foo, Path<Foo>, Optional<ValueByPath<Foo, Path<Foo>>>>) => ReactNode
>();
