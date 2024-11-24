import typia from "typia";

import { _test_llm_application } from "../../../internal/_test_llm_application";
import { ConstantConstEnumeration } from "../../../structures/ConstantConstEnumeration";

export const test_llm_application_claude_ConstantConstEnumeration =
  _test_llm_application({
    model: "claude",
    name: "ConstantConstEnumeration",
  })(typia.llm.application<ConstantConstEnumerationApplication, "claude">());

interface ConstantConstEnumerationApplication {
  insert(first: ConstantConstEnumeration): Promise<void>;
  reduce(
    first: ConstantConstEnumeration,
    second: ConstantConstEnumeration | null,
  ): Promise<ConstantConstEnumeration>;
  coalesce(
    first: ConstantConstEnumeration | null,
    second: ConstantConstEnumeration | null,
    third?: ConstantConstEnumeration | null,
  ): Promise<ConstantConstEnumeration | null>;
}
