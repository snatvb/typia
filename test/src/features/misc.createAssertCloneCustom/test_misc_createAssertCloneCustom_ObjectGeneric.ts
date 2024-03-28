import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { ObjectGeneric } from "../../structures/ObjectGeneric";

export const test_misc_createAssertCloneCustom_ObjectGeneric =
  _test_misc_assertClone(CustomGuardError)("ObjectGeneric")<ObjectGeneric>(
    ObjectGeneric,
  )(
    typia.misc.createAssertClone<ObjectGeneric>((p) => new CustomGuardError(p)),
  );
