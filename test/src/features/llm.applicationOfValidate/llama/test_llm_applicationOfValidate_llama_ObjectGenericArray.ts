import typia from "typia";

import { _test_llm_applicationOfValidate } from "../../../internal/_test_llm_applicationOfValidate";
import { ObjectGenericArray } from "../../../structures/ObjectGenericArray";

export const test_llm_applicationOfValidate_llama_ObjectGenericArray =
  _test_llm_applicationOfValidate({
    model: "llama",
    name: "ObjectGenericArray",
    factory: ObjectGenericArray,
  })(typia.llm.applicationOfValidate<ObjectGenericArrayApplication, "llama">());

interface ObjectGenericArrayApplication {
  insert(p: { first: ObjectGenericArray }): Promise<void>;
  reduce(p: {
    first: ObjectGenericArray;
    second: ObjectGenericArray | null;
  }): Promise<ObjectGenericArray>;
  coalesce(p: {
    first: ObjectGenericArray | null;
    second: ObjectGenericArray | null;
    third?: ObjectGenericArray | null;
  }): Promise<ObjectGenericArray | null>;
}
