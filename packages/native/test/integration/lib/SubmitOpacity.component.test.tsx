import { FormProvider } from "@lynxts/core";
import { fireEvent, render, waitFor } from "@testing-library/react-native";
import { Text } from "react-native";
import Sinon from "sinon";

import { SubmitOpacity } from "../../../src/lib/SubmitOpacity.component";
import { type Foo, foo, schema } from "../../helpers/testSchema";

describe("[Integration] SubmitOpacity.component.test.tsx", () => {
  context("when the button is pressed", () => {
    context("and the onPress callback is not set", () => {
      it("submits the form", async () => {
        const spySubmit = Sinon.spy<(values: Foo) => void>(() => undefined);
        const { findByText } = render(
          <FormProvider onSubmit={spySubmit} validation={schema} values={foo}>
            <SubmitOpacity>
              <Text>{"Submit!"}</Text>
            </SubmitOpacity>
          </FormProvider>,
        );

        const submit = await findByText("Submit!");

        await waitFor(() => fireEvent.press(submit));

        Sinon.assert.calledOnceWithExactly(spySubmit, { name: "foo", other: 5 });
      });
    });

    context("and the onPress callback is set", () => {
      it("submits the form and calls the onPress callback", async () => {
        const spySubmit = Sinon.spy<(values: Foo) => void>(() => undefined);
        const spyOnPress = Sinon.spy<() => void>(() => undefined);
        const { findByText } = render(
          <FormProvider onSubmit={spySubmit} validation={schema} values={foo}>
            <SubmitOpacity onPress={spyOnPress}>
              <Text>{"Submit!"}</Text>
            </SubmitOpacity>
          </FormProvider>,
        );

        const submit = await findByText("Submit!");

        await waitFor(() => fireEvent.press(submit));

        Sinon.assert.calledOnceWithExactly(spySubmit, { name: "foo", other: 5 });
        Sinon.assert.calledOnce(spyOnPress);
      });
    });
  });
});
