import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { ArrayRecursive } from "../../structures/ArrayRecursive";

export const test_misc_createAssertPruneCustom_ArrayRecursive =
  _test_misc_assertPrune(CustomGuardError)("ArrayRecursive")<ArrayRecursive>(
    ArrayRecursive,
  )(
    typia.misc.createAssertPrune<ArrayRecursive>(
      (p) => new CustomGuardError(p),
    ),
  );
