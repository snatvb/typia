import typia from "../../../src";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ArrayHierarchical } from "../../structures/ArrayHierarchical";

export const test_assertGuard_ArrayHierarchical = _test_assertGuard(
  "ArrayHierarchical",
)<ArrayHierarchical>(ArrayHierarchical)((input) =>
  typia.assertGuard<ArrayHierarchical>(input),
);
