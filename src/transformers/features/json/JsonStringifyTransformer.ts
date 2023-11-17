import { JsonStringifyProgrammer } from "../../../programmers/json/JsonStringifyProgrammer";

import { GenericTransformer } from "../../internal/GenericTransformer";

export namespace JsonStringifyTransformer {
  export const transform = GenericTransformer.scalar("json.stringify")(
    (project) => (modulo) => JsonStringifyProgrammer.write(project)(modulo),
  );
}
