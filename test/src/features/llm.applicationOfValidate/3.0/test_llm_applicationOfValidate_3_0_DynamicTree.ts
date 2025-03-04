import typia from "typia";

import { _test_llm_applicationOfValidate } from "../../../internal/_test_llm_applicationOfValidate";
import { DynamicTree } from "../../../structures/DynamicTree";

export const test_llm_applicationOfValidate_3_0_DynamicTree =
  _test_llm_applicationOfValidate({
    model: "3.0",
    name: "DynamicTree",
    factory: DynamicTree,
  })(typia.llm.applicationOfValidate<DynamicTreeApplication, "3.0">());

interface DynamicTreeApplication {
  insert(p: { first: DynamicTree }): Promise<void>;
  reduce(p: {
    first: DynamicTree;
    second: DynamicTree | null;
  }): Promise<DynamicTree>;
  coalesce(p: {
    first: DynamicTree | null;
    second: DynamicTree | null;
    third?: DynamicTree | null;
  }): Promise<DynamicTree | null>;
}
