import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { ObjectDescription } from "../../structures/ObjectDescription";

export const test_misc_createAssertCloneCustom_ObjectDescription =
  _test_misc_assertClone(CustomGuardError)(
    "ObjectDescription",
  )<ObjectDescription>(ObjectDescription)(
    typia.misc.createAssertClone<ObjectDescription>(
      (p) => new CustomGuardError(p),
    ),
  );
