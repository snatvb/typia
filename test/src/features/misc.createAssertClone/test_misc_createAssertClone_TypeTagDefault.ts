import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { TypeTagDefault } from "../../structures/TypeTagDefault";

export const test_misc_createAssertClone_TypeTagDefault =
  _test_misc_assertClone(TypeGuardError)("TypeTagDefault")<TypeTagDefault>(
    TypeTagDefault,
  )(typia.misc.createAssertClone<TypeTagDefault>());
