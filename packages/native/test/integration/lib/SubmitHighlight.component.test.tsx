import { expect } from "@assertive-ts/core";
import { FormProvider } from "@lynxts/core";
import { render, userEvent, waitFor } from "@testing-library/react-native";
import { Text } from "react-native";
import Sinon from "sinon";
import { describe, it, suite } from "vitest";

import { SubmitHighlight } from "../../../src/lib/SubmitHighlight.component";
import { type Foo, foo, schema } from "../../helpers/testSchema";

suite("[Integration] SubmitHighlight.component.test.tsx", () => {
  describe("when the button is pressed", () => {
    describe("and the onPress callback is not set", () => {
      it("submits the form", async () => {
        const submitSpy = Sinon.spy<(values: Foo) => void>(() => undefined);
        const { findByText } = render(
          <FormProvider onSubmit={submitSpy} validation={schema} values={foo}>
            <SubmitHighlight>
              <Text>{"Submit!"}</Text>
            </SubmitHighlight>
          </FormProvider>,
        );

        const submit = await findByText("Submit!");

        await userEvent.press(submit);

        await waitFor(() => {
          expect(submitSpy)
            .toBeCalledOnce()
            .toHaveArgs({ name: "foo", other: 5 });
        });
      });
    });

    describe("and the onPress callback is set", () => {
      it("submits the form and calls the onPress callback", async () => {
        const submitSpy = Sinon.spy<(values: Foo) => void>(() => undefined);
        const onPressSpy = Sinon.spy<() => void>(() => undefined);
        const { findByText } = render(
          <FormProvider onSubmit={submitSpy} validation={schema} values={foo}>
            <SubmitHighlight onPress={onPressSpy}>
              <Text>{"Submit!"}</Text>
            </SubmitHighlight>
          </FormProvider>,
        );

        const submit = await findByText("Submit!");

        await userEvent.press(submit);

        await waitFor(() => {
          expect(submitSpy)
            .toBeCalledOnce()
            .toHaveArgs({ name: "foo", other: 5 });
          expect(onPressSpy).toBeCalledOnce();
        });
      });
    });
  });
});
