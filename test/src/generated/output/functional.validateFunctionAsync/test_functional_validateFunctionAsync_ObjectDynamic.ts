import typia from "typia";

import { _test_functional_validateFunctionAsync } from "../../../internal/_test_functional_validateFunctionAsync";
import { ObjectDynamic } from "../../../structures/ObjectDynamic";

export const test_functional_validateFunctionAsync_ObjectDynamic =
  _test_functional_validateFunctionAsync("ObjectDynamic")(ObjectDynamic)(
    (p: (input: ObjectDynamic) => Promise<ObjectDynamic>) =>
      async (
        input: ObjectDynamic,
      ): Promise<import("typia").IValidation<ObjectDynamic>> => {
        const paramResults = [
          ((input: any): typia.IValidation<ObjectDynamic> => {
            const errors = [] as any[];
            const __is = (input: any): input is ObjectDynamic => {
              const $io0 = (input: any): boolean =>
                Object.keys(input).every((key: any) => {
                  const value = input[key];
                  if (undefined === value) return true;
                  return (
                    "string" === typeof value ||
                    ("number" === typeof value && Number.isFinite(value)) ||
                    "boolean" === typeof value
                  );
                });
              return (
                "object" === typeof input &&
                null !== input &&
                false === Array.isArray(input) &&
                $io0(input)
              );
            };
            if (false === __is(input)) {
              const $report = (typia.functional.validateFunction as any).report(
                errors,
              );
              ((
                input: any,
                _path: string,
                _exceptionable: boolean = true,
              ): input is ObjectDynamic => {
                const $join = (typia.functional.validateFunction as any).join;
                const $vo0 = (
                  input: any,
                  _path: string,
                  _exceptionable: boolean = true,
                ): boolean =>
                  [
                    false === _exceptionable ||
                      Object.keys(input)
                        .map((key: any) => {
                          const value = input[key];
                          if (undefined === value) return true;
                          return (
                            "string" === typeof value ||
                            ("number" === typeof value &&
                              Number.isFinite(value)) ||
                            "boolean" === typeof value ||
                            $report(_exceptionable, {
                              path: _path + $join(key),
                              expected: "(boolean | number | string)",
                              value: value,
                            })
                          );
                        })
                        .every((flag: boolean) => flag),
                  ].every((flag: boolean) => flag);
                return (
                  ((("object" === typeof input &&
                    null !== input &&
                    false === Array.isArray(input)) ||
                    $report(true, {
                      path: _path + "",
                      expected: "ObjectDynamic",
                      value: input,
                    })) &&
                    $vo0(input, _path + "", true)) ||
                  $report(true, {
                    path: _path + "",
                    expected: "ObjectDynamic",
                    value: input,
                  })
                );
              })(input, "$input", true);
            }
            const success = 0 === errors.length;
            return {
              success,
              errors,
              data: success ? input : undefined,
            } as any;
          })(input) as import("typia").IValidation.IFailure,
        ].filter((r: any) => false === r.success);
        if (paramResults.length > 0)
          return {
            success: false,
            errors: paramResults
              .map((r: any, i: any) =>
                r.errors.map((error: any) => ({
                  ...error,
                  path: error.path.replace("$input", `$input.parameters[${i}]`),
                })),
              )
              .flat(),
          };
        const result = ((input: any): typia.IValidation<ObjectDynamic> => {
          const errors = [] as any[];
          const __is = (input: any): input is ObjectDynamic => {
            const $io0 = (input: any): boolean =>
              Object.keys(input).every((key: any) => {
                const value = input[key];
                if (undefined === value) return true;
                return (
                  "string" === typeof value ||
                  ("number" === typeof value && Number.isFinite(value)) ||
                  "boolean" === typeof value
                );
              });
            return (
              "object" === typeof input &&
              null !== input &&
              false === Array.isArray(input) &&
              $io0(input)
            );
          };
          if (false === __is(input)) {
            const $report = (typia.functional.validateFunction as any).report(
              errors,
            );
            ((
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): input is ObjectDynamic => {
              const $join = (typia.functional.validateFunction as any).join;
              const $vo0 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
              ): boolean =>
                [
                  false === _exceptionable ||
                    Object.keys(input)
                      .map((key: any) => {
                        const value = input[key];
                        if (undefined === value) return true;
                        return (
                          "string" === typeof value ||
                          ("number" === typeof value &&
                            Number.isFinite(value)) ||
                          "boolean" === typeof value ||
                          $report(_exceptionable, {
                            path: _path + $join(key),
                            expected: "(boolean | number | string)",
                            value: value,
                          })
                        );
                      })
                      .every((flag: boolean) => flag),
                ].every((flag: boolean) => flag);
              return (
                ((("object" === typeof input &&
                  null !== input &&
                  false === Array.isArray(input)) ||
                  $report(true, {
                    path: _path + "",
                    expected: "ObjectDynamic",
                    value: input,
                  })) &&
                  $vo0(input, _path + "", true)) ||
                $report(true, {
                  path: _path + "",
                  expected: "ObjectDynamic",
                  value: input,
                })
              );
            })(input, "$input", true);
          }
          const success = 0 === errors.length;
          return {
            success,
            errors,
            data: success ? input : undefined,
          } as any;
        })(await p(input));
        if (!result.success)
          result.errors = result.errors.map((error: any) => ({
            ...error,
            path: error.path.replace("$input", "$input.return"),
          }));
        return result;
      },
  );
