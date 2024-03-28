import typia from "typia";

import { _test_functional_isFunctionAsync } from "../../../internal/_test_functional_isFunctionAsync";
import { DynamicEnumeration } from "../../../structures/DynamicEnumeration";

export const test_functional_isFunctionAsync_DynamicEnumeration =
  _test_functional_isFunctionAsync("DynamicEnumeration")(DynamicEnumeration)(
    (p: (input: DynamicEnumeration) => Promise<DynamicEnumeration>) =>
      async (input: DynamicEnumeration): Promise<DynamicEnumeration | null> => {
        if (
          false ===
          ((input: any): input is DynamicEnumeration => {
            const $io0 = (input: any): boolean =>
              "object" === typeof input.value &&
              null !== input.value &&
              false === Array.isArray(input.value) &&
              $io1(input.value);
            const $io1 = (input: any): boolean =>
              (undefined === input.ar || "string" === typeof input.ar) &&
              (undefined === input["zh-Hans"] ||
                "string" === typeof input["zh-Hans"]) &&
              (undefined === input["zh-Hant"] ||
                "string" === typeof input["zh-Hant"]) &&
              (undefined === input.en || "string" === typeof input.en) &&
              (undefined === input.fr || "string" === typeof input.fr) &&
              (undefined === input.de || "string" === typeof input.de) &&
              (undefined === input.ja || "string" === typeof input.ja) &&
              (undefined === input.ko || "string" === typeof input.ko) &&
              (undefined === input.pt || "string" === typeof input.pt) &&
              (undefined === input.ru || "string" === typeof input.ru);
            return "object" === typeof input && null !== input && $io0(input);
          })(input)
        )
          return null;
        const result = await p(input);
        return ((input: any): input is DynamicEnumeration => {
          const $io0 = (input: any): boolean =>
            "object" === typeof input.value &&
            null !== input.value &&
            false === Array.isArray(input.value) &&
            $io1(input.value);
          const $io1 = (input: any): boolean =>
            (undefined === input.ar || "string" === typeof input.ar) &&
            (undefined === input["zh-Hans"] ||
              "string" === typeof input["zh-Hans"]) &&
            (undefined === input["zh-Hant"] ||
              "string" === typeof input["zh-Hant"]) &&
            (undefined === input.en || "string" === typeof input.en) &&
            (undefined === input.fr || "string" === typeof input.fr) &&
            (undefined === input.de || "string" === typeof input.de) &&
            (undefined === input.ja || "string" === typeof input.ja) &&
            (undefined === input.ko || "string" === typeof input.ko) &&
            (undefined === input.pt || "string" === typeof input.pt) &&
            (undefined === input.ru || "string" === typeof input.ru);
          return "object" === typeof input && null !== input && $io0(input);
        })(result)
          ? result
          : null;
      },
  );
