import { JsonIsParseProgrammer } from "../../../programmers/json/JsonIsParseProgrammer";

import { GenericTransformer } from "../../internal/GenericTransformer";

export namespace JsonIsParseTransformer {
  export const transform = GenericTransformer.scalar("json.isParse")(
    (project) => (modulo) => JsonIsParseProgrammer.write(project)(modulo),
  );
}
