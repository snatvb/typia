import typia from "typia";

import { _test_functional_validateEqualsReturnAsync } from "../../../internal/_test_functional_validateEqualsReturnAsync";
import { AtomicSimple } from "../../../structures/AtomicSimple";

export const test_functional_validateEqualsReturnAsync_AtomicSimple =
  _test_functional_validateEqualsReturnAsync("AtomicSimple")(AtomicSimple)(
    (p: (input: AtomicSimple) => Promise<AtomicSimple>) =>
      async (
        input: AtomicSimple,
      ): Promise<import("typia").IValidation<AtomicSimple>> => {
        const result = ((input: any): typia.IValidation<AtomicSimple> => {
          const errors = [] as any[];
          const __is = (
            input: any,
            _exceptionable: boolean = true,
          ): input is AtomicSimple => {
            return (
              Array.isArray(input) &&
              input.length === 3 &&
              "boolean" === typeof input[0] &&
              "number" === typeof input[1] &&
              Number.isFinite(input[1]) &&
              "string" === typeof input[2]
            );
          };
          if (false === __is(input)) {
            const $report = (
              typia.functional.validateEqualsReturn as any
            ).report(errors);
            ((
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): input is AtomicSimple => {
              return (
                ((Array.isArray(input) ||
                  $report(true, {
                    path: _path + "",
                    expected: "AtomicSimple",
                    value: input,
                  })) &&
                  (input.length === 3 ||
                    $report(true, {
                      path: _path + "",
                      expected: "[boolean, number, string]",
                      value: input,
                    })) &&
                  [
                    "boolean" === typeof input[0] ||
                      $report(true, {
                        path: _path + "[0]",
                        expected: "boolean",
                        value: input[0],
                      }),
                    ("number" === typeof input[1] &&
                      Number.isFinite(input[1])) ||
                      $report(true, {
                        path: _path + "[1]",
                        expected: "number",
                        value: input[1],
                      }),
                    "string" === typeof input[2] ||
                      $report(true, {
                        path: _path + "[2]",
                        expected: "string",
                        value: input[2],
                      }),
                  ].every((flag: boolean) => flag)) ||
                $report(true, {
                  path: _path + "",
                  expected: "AtomicSimple",
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
