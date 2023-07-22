import { expectTypeOf } from "expect-type";
import { ReactNode } from "react";

import { Path, ValueByPath } from "../../../../src/lib/Form.context";
import { FieldOf, FieldProps } from "../../../../src/lib/components/Field.component";

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
