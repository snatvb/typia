import typia from "typia";

import { _test_random } from "../../../internal/_test_random";
import { ConstantConstEnumeration } from "../../../structures/ConstantConstEnumeration";

export const test_createRandom_ConstantConstEnumeration = _test_random(
  "ConstantConstEnumeration",
)<ConstantConstEnumeration>(ConstantConstEnumeration)({
  random: (
    generator: Partial<typia.IRandomGenerator> = (
      ConstantConstEnumeration as any
    ).RANDOM,
  ): import("typia").Resolved<ConstantConstEnumeration> => {
    const $generator = (typia.createRandom as any).generator;
    const $pick = (typia.createRandom as any).pick;
    return (generator?.array ?? $generator.array)(() =>
      $pick([() => 0, () => 1, () => 2, () => "Four", () => "Three"])(),
    );
  },
  assert: (
    input: any,
    errorFactory?: (p: import("typia").TypeGuardError.IProps) => Error,
  ): ConstantConstEnumeration => {
    const __is = (input: any): input is ConstantConstEnumeration => {
      return (
        Array.isArray(input) &&
        input.every(
          (elem: any) =>
            0 === elem ||
            1 === elem ||
            2 === elem ||
            "Four" === elem ||
            "Three" === elem,
        )
      );
    };
    if (false === __is(input))
      ((
        input: any,
        _path: string,
        _exceptionable: boolean = true,
      ): input is ConstantConstEnumeration => {
        const $guard = (typia.createAssert as any).guard;
        return (
          ((Array.isArray(input) ||
            $guard(
              true,
              {
                path: _path + "",
                expected: "ConstantConstEnumeration",
                value: input,
              },
              errorFactory,
            )) &&
            input.every(
              (elem: any, _index1: number) =>
                0 === elem ||
                1 === elem ||
                2 === elem ||
                "Four" === elem ||
                "Three" === elem ||
                $guard(
                  true,
                  {
                    path: _path + "[" + _index1 + "]",
                    expected: '("Four" | "Three" | 0 | 1 | 2)',
                    value: elem,
                  },
                  errorFactory,
                ),
            )) ||
          $guard(
            true,
            {
              path: _path + "",
              expected: "ConstantConstEnumeration",
              value: input,
            },
            errorFactory,
          )
        );
      })(input, "$input", true);
    return input;
  },
});
