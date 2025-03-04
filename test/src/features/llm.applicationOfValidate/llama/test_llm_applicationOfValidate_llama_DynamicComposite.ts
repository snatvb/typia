import typia from "typia";

import { _test_llm_applicationOfValidate } from "../../../internal/_test_llm_applicationOfValidate";
import { DynamicComposite } from "../../../structures/DynamicComposite";

export const test_llm_applicationOfValidate_llama_DynamicComposite =
  _test_llm_applicationOfValidate({
    model: "llama",
    name: "DynamicComposite",
    factory: DynamicComposite,
  })(typia.llm.applicationOfValidate<DynamicCompositeApplication, "llama">());

interface DynamicCompositeApplication {
  insert(p: { first: DynamicComposite }): Promise<void>;
  reduce(p: {
    first: DynamicComposite;
    second: DynamicComposite | null;
  }): Promise<DynamicComposite>;
  coalesce(p: {
    first: DynamicComposite | null;
    second: DynamicComposite | null;
    third?: DynamicComposite | null;
  }): Promise<DynamicComposite | null>;
}
