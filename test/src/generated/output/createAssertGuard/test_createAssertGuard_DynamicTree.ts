import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertGuard } from "../../../internal/_test_assertGuard";
import { DynamicTree } from "../../../structures/DynamicTree";

export const test_createAssertGuard_DynamicTree = _test_assertGuard(
  TypeGuardError,
)("DynamicTree")<DynamicTree>(DynamicTree)(
  (
    input: any,
    errorFactory?: (p: import("typia").TypeGuardError.IProps) => Error,
  ): asserts input is DynamicTree => {
    const __is = (input: any): input is DynamicTree => {
      const $io0 = (input: any): boolean =>
        "string" === typeof input.id &&
        "number" === typeof input.sequence &&
        Number.isFinite(input.sequence) &&
        "object" === typeof input.children &&
        null !== input.children &&
        false === Array.isArray(input.children) &&
        $io1(input.children);
      const $io1 = (input: any): boolean =>
        Object.keys(input).every((key: any) => {
          const value = input[key];
          if (undefined === value) return true;
          return "object" === typeof value && null !== value && $io0(value);
        });
      return "object" === typeof input && null !== input && $io0(input);
    };
    if (false === __is(input))
      ((
        input: any,
        _path: string,
        _exceptionable: boolean = true,
      ): input is DynamicTree => {
        const $guard = (typia.createAssertGuard as any).guard;
        const $join = (typia.createAssertGuard as any).join;
        const $ao0 = (
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): boolean =>
          ("string" === typeof input.id ||
            $guard(
              _exceptionable,
              {
                path: _path + ".id",
                expected: "string",
                value: input.id,
              },
              errorFactory,
            )) &&
          (("number" === typeof input.sequence &&
            Number.isFinite(input.sequence)) ||
            $guard(
              _exceptionable,
              {
                path: _path + ".sequence",
                expected: "number",
                value: input.sequence,
              },
              errorFactory,
            )) &&
          (((("object" === typeof input.children &&
            null !== input.children &&
            false === Array.isArray(input.children)) ||
            $guard(
              _exceptionable,
              {
                path: _path + ".children",
                expected: "Record<string, DynamicTree>",
                value: input.children,
              },
              errorFactory,
            )) &&
            $ao1(
              input.children,
              _path + ".children",
              true && _exceptionable,
            )) ||
            $guard(
              _exceptionable,
              {
                path: _path + ".children",
                expected: "Record<string, DynamicTree>",
                value: input.children,
              },
              errorFactory,
            ));
        const $ao1 = (
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): boolean =>
          false === _exceptionable ||
          Object.keys(input).every((key: any) => {
            const value = input[key];
            if (undefined === value) return true;
            return (
              ((("object" === typeof value && null !== value) ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + $join(key),
                    expected: "DynamicTree",
                    value: value,
                  },
                  errorFactory,
                )) &&
                $ao0(value, _path + $join(key), true && _exceptionable)) ||
              $guard(
                _exceptionable,
                {
                  path: _path + $join(key),
                  expected: "DynamicTree",
                  value: value,
                },
                errorFactory,
              )
            );
          });
        return (
          ((("object" === typeof input && null !== input) ||
            $guard(
              true,
              {
                path: _path + "",
                expected: "DynamicTree",
                value: input,
              },
              errorFactory,
            )) &&
            $ao0(input, _path + "", true)) ||
          $guard(
            true,
            {
              path: _path + "",
              expected: "DynamicTree",
              value: input,
            },
            errorFactory,
          )
        );
      })(input, "$input", true);
  },
);
