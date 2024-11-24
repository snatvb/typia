import typia from "typia";

import { _test_llm_application } from "../../../internal/_test_llm_application";
import { ArrayAny } from "../../../structures/ArrayAny";

export const test_llm_application_claude_ArrayAny = _test_llm_application({
  model: "claude",
  name: "ArrayAny",
})(typia.llm.application<ArrayAnyApplication, "claude">());

interface ArrayAnyApplication {
  insert(first: ArrayAny): Promise<void>;
  reduce(first: ArrayAny, second: ArrayAny | null): Promise<ArrayAny>;
  coalesce(
    first: ArrayAny | null,
    second: ArrayAny | null,
    third?: ArrayAny | null,
  ): Promise<ArrayAny | null>;
}
