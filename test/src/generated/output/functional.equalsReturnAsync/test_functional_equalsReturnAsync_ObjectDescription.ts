import typia from "typia";

import { _test_functional_equalsReturnAsync } from "../../../internal/_test_functional_equalsReturnAsync";
import { ObjectDescription } from "../../../structures/ObjectDescription";

export const test_functional_equalsReturnAsync_ObjectDescription =
  _test_functional_equalsReturnAsync("ObjectDescription")(ObjectDescription)(
    (p: (input: ObjectDescription) => Promise<ObjectDescription>) =>
      async (input: ObjectDescription): Promise<ObjectDescription | null> => {
        const result = await p(input);
        return ((
          input: any,
          _exceptionable: boolean = true,
        ): input is ObjectDescription => {
          const $io0 = (input: any, _exceptionable: boolean = true): boolean =>
            "string" === typeof input.id &&
            /^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i.test(
              input.id,
            ) &&
            "boolean" === typeof input.deprecated &&
            "string" === typeof input.title &&
            Array.isArray(input.descriptions) &&
            input.descriptions.every(
              (elem: any, _index1: number) => "string" === typeof elem,
            ) &&
            "number" === typeof input.newLine &&
            Number.isFinite(input.newLine) &&
            (5 === Object.keys(input).length ||
              Object.keys(input).every((key: any) => {
                if (
                  ["id", "deprecated", "title", "descriptions", "newLine"].some(
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
