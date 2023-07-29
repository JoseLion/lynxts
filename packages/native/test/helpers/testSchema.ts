import { ObjectSchema, number, object, string } from "yup";

export interface Foo {
  name: string;
  other?: number;
}

export const foo: Foo = {
  name: "foo",
  other: 5,
};

export const schema: ObjectSchema<Foo> = object({
  name: string().required("The name is required!"),
  other: number().optional(),
});
