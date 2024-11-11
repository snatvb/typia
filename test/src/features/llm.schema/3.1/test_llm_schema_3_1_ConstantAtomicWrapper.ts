import typia from "typia";

import { _test_llm_schema } from "../../../internal/_test_llm_schema";
import { ConstantAtomicWrapper } from "../../../structures/ConstantAtomicWrapper";

export const test_llm_schema_3_1_ConstantAtomicWrapper = _test_llm_schema({
  model: "3.1",
  name: "ConstantAtomicWrapper",
})(typia.llm.schema<ConstantAtomicWrapper, "3.1">());
