import typia from "typia";

import { _test_llm_applicationOfValidate } from "../../../internal/_test_llm_applicationOfValidate";
import { TemplateAtomic } from "../../../structures/TemplateAtomic";

export const test_llm_applicationOfValidate_chatgpt_TemplateAtomic =
  _test_llm_applicationOfValidate({
    model: "chatgpt",
    name: "TemplateAtomic",
    factory: TemplateAtomic,
  })(typia.llm.applicationOfValidate<TemplateAtomicApplication, "chatgpt">());

interface TemplateAtomicApplication {
  insert(p: { first: TemplateAtomic }): Promise<void>;
  reduce(p: {
    first: TemplateAtomic;
    second: TemplateAtomic | null;
  }): Promise<TemplateAtomic>;
  coalesce(p: {
    first: TemplateAtomic | null;
    second: TemplateAtomic | null;
    third?: TemplateAtomic | null;
  }): Promise<TemplateAtomic | null>;
}
