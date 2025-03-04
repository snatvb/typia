import typia from "typia";

import { _test_llm_applicationOfValidate } from "../../../internal/_test_llm_applicationOfValidate";
import { ObjectIntersection } from "../../../structures/ObjectIntersection";

export const test_llm_applicationOfValidate_gemini_ObjectIntersection =
  _test_llm_applicationOfValidate({
    model: "gemini",
    name: "ObjectIntersection",
    factory: ObjectIntersection,
  })(
    typia.llm.applicationOfValidate<ObjectIntersectionApplication, "gemini">(),
  );

interface ObjectIntersectionApplication {
  insert(p: { first: ObjectIntersection }): Promise<void>;
  reduce(p: {
    first: ObjectIntersection;
    second: ObjectIntersection | null;
  }): Promise<ObjectIntersection>;
  coalesce(p: {
    first: ObjectIntersection | null;
    second: ObjectIntersection | null;
    third?: ObjectIntersection | null;
  }): Promise<ObjectIntersection | null>;
}
