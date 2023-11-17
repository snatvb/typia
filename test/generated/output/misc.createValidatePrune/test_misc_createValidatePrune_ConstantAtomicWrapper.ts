import typia from "../../../../src";
import { _test_misc_validatePrune } from "../../../internal/_test_misc_validatePrune";
import { ConstantAtomicWrapper } from "../../../structures/ConstantAtomicWrapper";

export const test_misc_createValidatePrune_ConstantAtomicWrapper =
  _test_misc_validatePrune("ConstantAtomicWrapper")<ConstantAtomicWrapper>(
    ConstantAtomicWrapper,
  )((input: any): typia.IValidation<ConstantAtomicWrapper> => {
    const validate = (input: any): typia.IValidation<ConstantAtomicWrapper> => {
      const errors = [] as any[];
      const __is = (input: any): input is ConstantAtomicWrapper => {
        const $io0 = (input: any): boolean => "boolean" === typeof input.value;
        const $io1 = (input: any): boolean =>
          "number" === typeof input.value && Number.isFinite(input.value);
        const $io2 = (input: any): boolean => "string" === typeof input.value;
        return (
          Array.isArray(input) &&
          input.length === 3 &&
          "object" === typeof input[0] &&
          null !== input[0] &&
          $io0(input[0]) &&
          "object" === typeof input[1] &&
          null !== input[1] &&
          $io1(input[1]) &&
          "object" === typeof input[2] &&
          null !== input[2] &&
          $io2(input[2])
        );
      };
      if (false === __is(input)) {
        const $report = (typia.misc.createValidatePrune as any).report(errors);
        ((
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): input is ConstantAtomicWrapper => {
          const $vo0 = (
            input: any,
            _path: string,
            _exceptionable: boolean = true,
          ): boolean =>
            [
              "boolean" === typeof input.value ||
                $report(_exceptionable, {
                  path: _path + ".value",
                  expected: "boolean",
                  value: input.value,
                }),
            ].every((flag: boolean) => flag);
          const $vo1 = (
            input: any,
            _path: string,
            _exceptionable: boolean = true,
          ): boolean =>
            [
              ("number" === typeof input.value &&
                Number.isFinite(input.value)) ||
                $report(_exceptionable, {
                  path: _path + ".value",
                  expected: "number",
                  value: input.value,
                }),
            ].every((flag: boolean) => flag);
          const $vo2 = (
            input: any,
            _path: string,
            _exceptionable: boolean = true,
          ): boolean =>
            [
              "string" === typeof input.value ||
                $report(_exceptionable, {
                  path: _path + ".value",
                  expected: "string",
                  value: input.value,
                }),
            ].every((flag: boolean) => flag);
          return (
            ((Array.isArray(input) ||
              $report(true, {
                path: _path + "",
                expected: "ConstantAtomicWrapper",
                value: input,
              })) &&
              (input.length === 3 ||
                $report(true, {
                  path: _path + "",
                  expected:
                    "[ConstantAtomicWrapper.IPointer<boolean>, ConstantAtomicWrapper.IPointer<number>, ConstantAtomicWrapper.IPointer<string>]",
                  value: input,
                })) &&
              [
                ((("object" === typeof input[0] && null !== input[0]) ||
                  $report(true, {
                    path: _path + "[0]",
                    expected: "ConstantAtomicWrapper.IPointer<boolean>",
                    value: input[0],
                  })) &&
                  $vo0(input[0], _path + "[0]", true)) ||
                  $report(true, {
                    path: _path + "[0]",
                    expected: "ConstantAtomicWrapper.IPointer<boolean>",
                    value: input[0],
                  }),
                ((("object" === typeof input[1] && null !== input[1]) ||
                  $report(true, {
                    path: _path + "[1]",
                    expected: "ConstantAtomicWrapper.IPointer<number>",
                    value: input[1],
                  })) &&
                  $vo1(input[1], _path + "[1]", true)) ||
                  $report(true, {
                    path: _path + "[1]",
                    expected: "ConstantAtomicWrapper.IPointer<number>",
                    value: input[1],
                  }),
                ((("object" === typeof input[2] && null !== input[2]) ||
                  $report(true, {
                    path: _path + "[2]",
                    expected: "ConstantAtomicWrapper.IPointer<string>",
                    value: input[2],
                  })) &&
                  $vo2(input[2], _path + "[2]", true)) ||
                  $report(true, {
                    path: _path + "[2]",
                    expected: "ConstantAtomicWrapper.IPointer<string>",
                    value: input[2],
                  }),
              ].every((flag: boolean) => flag)) ||
            $report(true, {
              path: _path + "",
              expected: "ConstantAtomicWrapper",
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
    };
    const prune = (input: ConstantAtomicWrapper): void => {
      const $io0 = (input: any): boolean => "boolean" === typeof input.value;
      const $io1 = (input: any): boolean => "number" === typeof input.value;
      const $io2 = (input: any): boolean => "string" === typeof input.value;
      const $po0 = (input: any): any => {
        for (const key of Object.keys(input)) {
          if ("value" === key) continue;
          delete input[key];
        }
      };
      const $po1 = (input: any): any => {
        for (const key of Object.keys(input)) {
          if ("value" === key) continue;
          delete input[key];
        }
      };
      const $po2 = (input: any): any => {
        for (const key of Object.keys(input)) {
          if ("value" === key) continue;
          delete input[key];
        }
      };
      if (
        Array.isArray(input) &&
        input.length === 3 &&
        "object" === typeof input[0] &&
        null !== input[0] &&
        $io0(input[0]) &&
        "object" === typeof input[1] &&
        null !== input[1] &&
        $io1(input[1]) &&
        "object" === typeof input[2] &&
        null !== input[2] &&
        $io2(input[2])
      ) {
        if ("object" === typeof input[0] && null !== input[0]) $po0(input[0]);
        if ("object" === typeof input[1] && null !== input[1]) $po1(input[1]);
        if ("object" === typeof input[2] && null !== input[2]) $po2(input[2]);
      }
    };
    const output = validate(input);
    if (output.success) prune(input);
    return output;
  });
