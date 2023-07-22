import Sinon from "sinon";

export const mochaHooks: () => Mocha.RootHookObject = () => {
  return {
    afterEach() {
      Sinon.restore();
    },
  };
};
