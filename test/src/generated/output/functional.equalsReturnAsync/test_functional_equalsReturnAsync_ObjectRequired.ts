import typia from "typia";

import { _test_functional_equalsReturnAsync } from "../../../internal/_test_functional_equalsReturnAsync";
import { ObjectRequired } from "../../../structures/ObjectRequired";

export const test_functional_equalsReturnAsync_ObjectRequired =
  _test_functional_equalsReturnAsync("ObjectRequired")(ObjectRequired)(
    (p: (input: ObjectRequired) => Promise<ObjectRequired>) =>
      async (input: ObjectRequired): Promise<ObjectRequired | null> => {
        const result = await p(input);
        return ((
          input: any,
          _exceptionable: boolean = true,
        ): input is Required<ObjectRequired.IBase> => {
          const $io0 = (input: any, _exceptionable: boolean = true): boolean =>
            "boolean" === typeof input.boolean &&
            "number" === typeof input.number &&
            Number.isFinite(input.number) &&
            "string" === typeof input.string &&
            Array.isArray(input.array) &&
            input.array.every(
              (elem: any, _index1: number) =>
                "number" === typeof elem && Number.isFinite(elem),
            ) &&
            (null === input.object ||
              ("object" === typeof input.object &&
                null !== input.object &&
                false === Array.isArray(input.object) &&
                $io1(input.object, true && _exceptionable))) &&
            (5 === Object.keys(input).length ||
              Object.keys(input).every((key: any) => {
                if (
                  ["boolean", "number", "string", "array", "object"].some(
                    (prop: any) => key === prop,
                  )
                )
                  return true;
                const value = input[key];
                if (undefined === value) return true;
                return false;
              }));
          const $io1 = (input: any, _exceptionable: boolean = true): boolean =>
            (undefined === input.boolean ||
              "boolean" === typeof input.boolean) &&
            (undefined === input.number ||
              ("number" === typeof input.number &&
                Number.isFinite(input.number))) &&
            (undefined === input.string || "string" === typeof input.string) &&
            (undefined === input.array ||
              (Array.isArray(input.array) &&
                input.array.every(
                  (elem: any, _index2: number) =>
                    "number" === typeof elem && Number.isFinite(elem),
                ))) &&
            (null === input.object ||
              undefined === input.object ||
              ("object" === typeof input.object &&
                null !== input.object &&
                false === Array.isArray(input.object) &&
                $io1(input.object, true && _exceptionable))) &&
            (0 === Object.keys(input).length ||
              Object.keys(input).every((key: any) => {
                if (
                  ["boolean", "number", "string", "array", "object"].some(
                    (prop: any) => key === prop,
                  )
                )
                  return true;
                const value = input[key];
                if (undefined === value) return true;
                return false;
              }));
          return (
            "object" === typeof input && null !== input && $io0(input, true)
          );
        })(result)
          ? result
          : null;
      },
  );
