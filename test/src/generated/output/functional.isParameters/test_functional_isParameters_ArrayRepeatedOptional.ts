import typia from "typia";

import { _test_functional_isParameters } from "../../../internal/_test_functional_isParameters";
import { ArrayRepeatedOptional } from "../../../structures/ArrayRepeatedOptional";

export const test_functional_isParameters_ArrayRepeatedOptional =
  _test_functional_isParameters("ArrayRepeatedOptional")(ArrayRepeatedOptional)(
    (p: (input: ArrayRepeatedOptional) => ArrayRepeatedOptional) =>
      (input: ArrayRepeatedOptional): ArrayRepeatedOptional | null => {
        if (
          false ===
          ((input: any): input is ArrayRepeatedOptional => {
            const $ia0 = (input: any): any =>
              input.every(
                (elem: any) =>
                  null !== elem &&
                  (undefined === elem ||
                    "string" === typeof elem ||
                    ("number" === typeof elem && Number.isFinite(elem)) ||
                    (Array.isArray(elem) && ($ia0(elem) || false))),
              );
            return (
              null !== input &&
              (undefined === input ||
                "string" === typeof input ||
                ("number" === typeof input && Number.isFinite(input)) ||
                (Array.isArray(input) && ($ia0(input) || false)))
            );
          })(input)
        )
          return null;
        return p(input);
      },
  );
