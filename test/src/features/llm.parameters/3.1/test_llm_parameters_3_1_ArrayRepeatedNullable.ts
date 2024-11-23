import typia from "typia";

import { _test_llm_parameters } from "../../../internal/_test_llm_parameters";
import { ArrayRepeatedNullable } from "../../../structures/ArrayRepeatedNullable";

export const test_llm_parameters_3_1_ArrayRepeatedNullable =
  _test_llm_parameters({
    model: "3.1",
    name: "ArrayRepeatedNullable",
  })(typia.llm.parameters<ArrayRepeatedNullableParameters, "3.1">());

interface ArrayRepeatedNullableParameters {
  regular: ArrayRepeatedNullable;
  nullable: ArrayRepeatedNullable | null;
  optional: ArrayRepeatedNullable | undefined;
  faint: ArrayRepeatedNullable | null | undefined;
  array: Array<ArrayRepeatedNullable>;
}
