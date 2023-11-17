import { JsonAssertStringifyProgrammer } from "../../../programmers/json/JsonAssertStringifyProgrammer";

import { GenericTransformer } from "../../internal/GenericTransformer";

export namespace JsonCreateAssertStringifyTransformer {
  export const transform = GenericTransformer.factory(
    "json.createAssertStringify",
  )(
    (project) => (modulo) =>
      JsonAssertStringifyProgrammer.write(project)(modulo),
  );
}
