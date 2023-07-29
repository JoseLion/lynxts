import { FormProvider } from "@lynxts/core";
import { fireEvent, render } from "@testing-library/react-native";
import { Text } from "react-native";
import { act } from "react-test-renderer";
import Sinon from "sinon";

import { SubmitWithoutFeedback } from "../../../src/lib/SubmitWithoutFeedback.component";
import { Foo, foo, schema } from "../../helpers/testSchema";

describe("[Integration] SubmitWithoutFeedback.component.test.tsx", () => {
  context("when the button is pressed", () => {
    context("and the onPress callback is not set", () => {
      it("submits the form", async () => {
        const spySubmit = Sinon.spy<(values: Foo) => void>(() => undefined);
        const { findByText } = render(
          <FormProvider onSubmit={spySubmit} validation={schema} values={foo}>
            <SubmitWithoutFeedback>
              <Text>{"Submit!"}</Text>
            </SubmitWithoutFeedback>
          </FormProvider>,
        );

        const submit = await findByText("Submit!");

        await act(() => fireEvent.press(submit));

        Sinon.assert.calledOnceWithExactly(spySubmit, { name: "foo", other: 5 });
      });
    });

    context("and the onPress callback is set", () => {
      it("submits the form and calls the onPress callback", async () => {
        const spySubmit = Sinon.spy<(values: Foo) => void>(() => undefined);
        const spyOnPress = Sinon.spy<() => void>(() => undefined);
        const { findByText } = render(
          <FormProvider onSubmit={spySubmit} validation={schema} values={foo}>
            <SubmitWithoutFeedback onPress={spyOnPress}>
              <Text>{"Submit!"}</Text>
            </SubmitWithoutFeedback>
          </FormProvider>,
        );

        const submit = await findByText("Submit!");

        await act(() => fireEvent.press(submit));

        Sinon.assert.calledOnceWithExactly(spySubmit, { name: "foo", other: 5 });
        Sinon.assert.calledOnce(spyOnPress);
      });
    });
  });
});
