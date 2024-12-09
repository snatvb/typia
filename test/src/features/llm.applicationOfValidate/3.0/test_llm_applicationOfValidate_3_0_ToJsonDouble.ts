import typia from "typia";

import { _test_llm_applicationOfValidate } from "../../../internal/_test_llm_applicationOfValidate";
import { ToJsonDouble } from "../../../structures/ToJsonDouble";

export const test_llm_applicationOfValidate_3_0_ToJsonDouble =
  _test_llm_applicationOfValidate({
    model: "3.0",
    name: "ToJsonDouble",
    factory: ToJsonDouble,
  })(typia.llm.applicationOfValidate<ToJsonDoubleApplication, "3.0">());

interface ToJsonDoubleApplication {
  insert(p: { first: ToJsonDouble }): Promise<void>;
  reduce(p: {
    first: ToJsonDouble;
    second: ToJsonDouble | null;
  }): Promise<ToJsonDouble>;
  coalesce(p: {
    first: ToJsonDouble | null;
    second: ToJsonDouble | null;
    third?: ToJsonDouble | null;
  }): Promise<ToJsonDouble | null>;
}
