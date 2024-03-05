import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_protobuf_assertEncode } from "../../../internal/_test_protobuf_assertEncode";
import { MapSimpleProtobufOptional } from "../../../structures/MapSimpleProtobufOptional";

export const test_protobuf_assertEncode_MapSimpleProtobufOptional =
  _test_protobuf_assertEncode(TypeGuardError)(
    "MapSimpleProtobufOptional",
  )<MapSimpleProtobufOptional>(MapSimpleProtobufOptional)({
    encode: (input) =>
      ((
        input: any,
        errorFactory?: (p: import("typia").TypeGuardError.IProps) => Error,
      ): Uint8Array => {
        const assert = (
          input: any,
          errorFactory?: (p: import("typia").TypeGuardError.IProps) => Error,
        ): MapSimpleProtobufOptional => {
          const __is = (input: any): input is MapSimpleProtobufOptional => {
            const $io0 = (input: any): boolean =>
              (undefined === input.boolean ||
                (input.boolean instanceof Map &&
                  (() =>
                    [...input.boolean].every(
                      (elem: any) =>
                        Array.isArray(elem) &&
                        elem.length === 2 &&
                        "string" === typeof elem[0] &&
                        "boolean" === typeof elem[1],
                    ))())) &&
              (undefined === input.int32 ||
                (input.int32 instanceof Map &&
                  (() =>
                    [...input.int32].every(
                      (elem: any) =>
                        Array.isArray(elem) &&
                        elem.length === 2 &&
                        "string" === typeof elem[0] &&
                        "number" === typeof elem[1] &&
                        Math.floor(elem[1]) === elem[1] &&
                        -2147483648 <= elem[1] &&
                        elem[1] <= 2147483647,
                    ))())) &&
              (undefined === input.bigint ||
                (input.bigint instanceof Map &&
                  (() =>
                    [...input.bigint].every(
                      (elem: any) =>
                        Array.isArray(elem) &&
                        elem.length === 2 &&
                        "string" === typeof elem[0] &&
                        "bigint" === typeof elem[1],
                    ))())) &&
              (undefined === input.double ||
                (input.double instanceof Map &&
                  (() =>
                    [...input.double].every(
                      (elem: any) =>
                        Array.isArray(elem) &&
                        elem.length === 2 &&
                        "string" === typeof elem[0] &&
                        "number" === typeof elem[1] &&
                        Number.isFinite(elem[1]),
                    ))())) &&
              (undefined === input.string ||
                (input.string instanceof Map &&
                  (() =>
                    [...input.string].every(
                      (elem: any) =>
                        Array.isArray(elem) &&
                        elem.length === 2 &&
                        "string" === typeof elem[0] &&
                        "string" === typeof elem[1] &&
                        1 <= elem[1].length,
                    ))())) &&
              (undefined === input.bytes ||
                (input.bytes instanceof Map &&
                  (() =>
                    [...input.bytes].every(
                      (elem: any) =>
                        Array.isArray(elem) &&
                        elem.length === 2 &&
                        "string" === typeof elem[0] &&
                        elem[1] instanceof Uint8Array,
                    ))())) &&
              (undefined === input.objects ||
                (input.objects instanceof Map &&
                  (() =>
                    [...input.objects].every(
                      (elem: any) =>
                        Array.isArray(elem) &&
                        elem.length === 2 &&
                        "string" === typeof elem[0] &&
                        "object" === typeof elem[1] &&
                        null !== elem[1] &&
                        false === Array.isArray(elem[1]) &&
                        $io0(elem[1]),
                    ))()));
            return (
              "object" === typeof input &&
              null !== input &&
              false === Array.isArray(input) &&
              $io0(input)
            );
          };
          if (false === __is(input))
            ((
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): input is MapSimpleProtobufOptional => {
              const $guard = (typia.protobuf.assertEncode as any).guard;
              const $ao0 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
              ): boolean =>
                (undefined === input.boolean ||
                  ((input.boolean instanceof Map ||
                    $guard(
                      _exceptionable,
                      {
                        path: _path + ".boolean",
                        expected: "(Map<string, boolean> | undefined)",
                        value: input.boolean,
                      },
                      errorFactory,
                    )) &&
                    (() =>
                      [...input.boolean].every(
                        (elem: any, _index1: number) =>
                          ((Array.isArray(elem) ||
                            $guard(
                              _exceptionable,
                              {
                                path: _path + ".boolean[" + _index1 + "]",
                                expected: "[string, boolean]",
                                value: elem,
                              },
                              errorFactory,
                            )) &&
                            (elem.length === 2 ||
                              $guard(
                                _exceptionable,
                                {
                                  path: _path + ".boolean[" + _index1 + "]",
                                  expected: "[string, boolean]",
                                  value: elem,
                                },
                                errorFactory,
                              )) &&
                            ("string" === typeof elem[0] ||
                              $guard(
                                _exceptionable,
                                {
                                  path: _path + ".boolean[" + _index1 + "][0]",
                                  expected: "string",
                                  value: elem[0],
                                },
                                errorFactory,
                              )) &&
                            ("boolean" === typeof elem[1] ||
                              $guard(
                                _exceptionable,
                                {
                                  path: _path + ".boolean[" + _index1 + "][1]",
                                  expected: "boolean",
                                  value: elem[1],
                                },
                                errorFactory,
                              ))) ||
                          $guard(
                            _exceptionable,
                            {
                              path: _path + ".boolean[" + _index1 + "]",
                              expected: "[string, boolean]",
                              value: elem,
                            },
                            errorFactory,
                          ),
                      ))()) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".boolean",
                      expected: "(Map<string, boolean> | undefined)",
                      value: input.boolean,
                    },
                    errorFactory,
                  )) &&
                (undefined === input.int32 ||
                  ((input.int32 instanceof Map ||
                    $guard(
                      _exceptionable,
                      {
                        path: _path + ".int32",
                        expected:
                          '(Map<string, (number & Type<"int32">)> | undefined)',
                        value: input.int32,
                      },
                      errorFactory,
                    )) &&
                    (() =>
                      [...input.int32].every(
                        (elem: any, _index2: number) =>
                          ((Array.isArray(elem) ||
                            $guard(
                              _exceptionable,
                              {
                                path: _path + ".int32[" + _index2 + "]",
                                expected: '[string, (number & Type<"int32">)]',
                                value: elem,
                              },
                              errorFactory,
                            )) &&
                            (elem.length === 2 ||
                              $guard(
                                _exceptionable,
                                {
                                  path: _path + ".int32[" + _index2 + "]",
                                  expected:
                                    '[string, (number & Type<"int32">)]',
                                  value: elem,
                                },
                                errorFactory,
                              )) &&
                            ("string" === typeof elem[0] ||
                              $guard(
                                _exceptionable,
                                {
                                  path: _path + ".int32[" + _index2 + "][0]",
                                  expected: "string",
                                  value: elem[0],
                                },
                                errorFactory,
                              )) &&
                            (("number" === typeof elem[1] &&
                              ((Math.floor(elem[1]) === elem[1] &&
                                -2147483648 <= elem[1] &&
                                elem[1] <= 2147483647) ||
                                $guard(
                                  _exceptionable,
                                  {
                                    path: _path + ".int32[" + _index2 + "][1]",
                                    expected: 'number & Type<"int32">',
                                    value: elem[1],
                                  },
                                  errorFactory,
                                ))) ||
                              $guard(
                                _exceptionable,
                                {
                                  path: _path + ".int32[" + _index2 + "][1]",
                                  expected: '(number & Type<"int32">)',
                                  value: elem[1],
                                },
                                errorFactory,
                              ))) ||
                          $guard(
                            _exceptionable,
                            {
                              path: _path + ".int32[" + _index2 + "]",
                              expected: '[string, (number & Type<"int32">)]',
                              value: elem,
                            },
                            errorFactory,
                          ),
                      ))()) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".int32",
                      expected:
                        '(Map<string, (number & Type<"int32">)> | undefined)',
                      value: input.int32,
                    },
                    errorFactory,
                  )) &&
                (undefined === input.bigint ||
                  ((input.bigint instanceof Map ||
                    $guard(
                      _exceptionable,
                      {
                        path: _path + ".bigint",
                        expected: "(Map<string, bigint> | undefined)",
                        value: input.bigint,
                      },
                      errorFactory,
                    )) &&
                    (() =>
                      [...input.bigint].every(
                        (elem: any, _index3: number) =>
                          ((Array.isArray(elem) ||
                            $guard(
                              _exceptionable,
                              {
                                path: _path + ".bigint[" + _index3 + "]",
                                expected: "[string, bigint]",
                                value: elem,
                              },
                              errorFactory,
                            )) &&
                            (elem.length === 2 ||
                              $guard(
                                _exceptionable,
                                {
                                  path: _path + ".bigint[" + _index3 + "]",
                                  expected: "[string, bigint]",
                                  value: elem,
                                },
                                errorFactory,
                              )) &&
                            ("string" === typeof elem[0] ||
                              $guard(
                                _exceptionable,
                                {
                                  path: _path + ".bigint[" + _index3 + "][0]",
                                  expected: "string",
                                  value: elem[0],
                                },
                                errorFactory,
                              )) &&
                            ("bigint" === typeof elem[1] ||
                              $guard(
                                _exceptionable,
                                {
                                  path: _path + ".bigint[" + _index3 + "][1]",
                                  expected: "bigint",
                                  value: elem[1],
                                },
                                errorFactory,
                              ))) ||
                          $guard(
                            _exceptionable,
                            {
                              path: _path + ".bigint[" + _index3 + "]",
                              expected: "[string, bigint]",
                              value: elem,
                            },
                            errorFactory,
                          ),
                      ))()) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".bigint",
                      expected: "(Map<string, bigint> | undefined)",
                      value: input.bigint,
                    },
                    errorFactory,
                  )) &&
                (undefined === input.double ||
                  ((input.double instanceof Map ||
                    $guard(
                      _exceptionable,
                      {
                        path: _path + ".double",
                        expected: "(Map<string, number> | undefined)",
                        value: input.double,
                      },
                      errorFactory,
                    )) &&
                    (() =>
                      [...input.double].every(
                        (elem: any, _index4: number) =>
                          ((Array.isArray(elem) ||
                            $guard(
                              _exceptionable,
                              {
                                path: _path + ".double[" + _index4 + "]",
                                expected: "[string, number]",
                                value: elem,
                              },
                              errorFactory,
                            )) &&
                            (elem.length === 2 ||
                              $guard(
                                _exceptionable,
                                {
                                  path: _path + ".double[" + _index4 + "]",
                                  expected: "[string, number]",
                                  value: elem,
                                },
                                errorFactory,
                              )) &&
                            ("string" === typeof elem[0] ||
                              $guard(
                                _exceptionable,
                                {
                                  path: _path + ".double[" + _index4 + "][0]",
                                  expected: "string",
                                  value: elem[0],
                                },
                                errorFactory,
                              )) &&
                            (("number" === typeof elem[1] &&
                              Number.isFinite(elem[1])) ||
                              $guard(
                                _exceptionable,
                                {
                                  path: _path + ".double[" + _index4 + "][1]",
                                  expected: "number",
                                  value: elem[1],
                                },
                                errorFactory,
                              ))) ||
                          $guard(
                            _exceptionable,
                            {
                              path: _path + ".double[" + _index4 + "]",
                              expected: "[string, number]",
                              value: elem,
                            },
                            errorFactory,
                          ),
                      ))()) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".double",
                      expected: "(Map<string, number> | undefined)",
                      value: input.double,
                    },
                    errorFactory,
                  )) &&
                (undefined === input.string ||
                  ((input.string instanceof Map ||
                    $guard(
                      _exceptionable,
                      {
                        path: _path + ".string",
                        expected:
                          "(Map<string, (string & MinLength<1>)> | undefined)",
                        value: input.string,
                      },
                      errorFactory,
                    )) &&
                    (() =>
                      [...input.string].every(
                        (elem: any, _index5: number) =>
                          ((Array.isArray(elem) ||
                            $guard(
                              _exceptionable,
                              {
                                path: _path + ".string[" + _index5 + "]",
                                expected: "[string, (string & MinLength<1>)]",
                                value: elem,
                              },
                              errorFactory,
                            )) &&
                            (elem.length === 2 ||
                              $guard(
                                _exceptionable,
                                {
                                  path: _path + ".string[" + _index5 + "]",
                                  expected: "[string, (string & MinLength<1>)]",
                                  value: elem,
                                },
                                errorFactory,
                              )) &&
                            ("string" === typeof elem[0] ||
                              $guard(
                                _exceptionable,
                                {
                                  path: _path + ".string[" + _index5 + "][0]",
                                  expected: "string",
                                  value: elem[0],
                                },
                                errorFactory,
                              )) &&
                            (("string" === typeof elem[1] &&
                              (1 <= elem[1].length ||
                                $guard(
                                  _exceptionable,
                                  {
                                    path: _path + ".string[" + _index5 + "][1]",
                                    expected: "string & MinLength<1>",
                                    value: elem[1],
                                  },
                                  errorFactory,
                                ))) ||
                              $guard(
                                _exceptionable,
                                {
                                  path: _path + ".string[" + _index5 + "][1]",
                                  expected: "(string & MinLength<1>)",
                                  value: elem[1],
                                },
                                errorFactory,
                              ))) ||
                          $guard(
                            _exceptionable,
                            {
                              path: _path + ".string[" + _index5 + "]",
                              expected: "[string, (string & MinLength<1>)]",
                              value: elem,
                            },
                            errorFactory,
                          ),
                      ))()) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".string",
                      expected:
                        "(Map<string, (string & MinLength<1>)> | undefined)",
                      value: input.string,
                    },
                    errorFactory,
                  )) &&
                (undefined === input.bytes ||
                  ((input.bytes instanceof Map ||
                    $guard(
                      _exceptionable,
                      {
                        path: _path + ".bytes",
                        expected: "(Map<string, Uint8Array> | undefined)",
                        value: input.bytes,
                      },
                      errorFactory,
                    )) &&
                    (() =>
                      [...input.bytes].every(
                        (elem: any, _index6: number) =>
                          ((Array.isArray(elem) ||
                            $guard(
                              _exceptionable,
                              {
                                path: _path + ".bytes[" + _index6 + "]",
                                expected: "[string, Uint8Array]",
                                value: elem,
                              },
                              errorFactory,
                            )) &&
                            (elem.length === 2 ||
                              $guard(
                                _exceptionable,
                                {
                                  path: _path + ".bytes[" + _index6 + "]",
                                  expected: "[string, Uint8Array]",
                                  value: elem,
                                },
                                errorFactory,
                              )) &&
                            ("string" === typeof elem[0] ||
                              $guard(
                                _exceptionable,
                                {
                                  path: _path + ".bytes[" + _index6 + "][0]",
                                  expected: "string",
                                  value: elem[0],
                                },
                                errorFactory,
                              )) &&
                            (elem[1] instanceof Uint8Array ||
                              $guard(
                                _exceptionable,
                                {
                                  path: _path + ".bytes[" + _index6 + "][1]",
                                  expected: "Uint8Array",
                                  value: elem[1],
                                },
                                errorFactory,
                              ))) ||
                          $guard(
                            _exceptionable,
                            {
                              path: _path + ".bytes[" + _index6 + "]",
                              expected: "[string, Uint8Array]",
                              value: elem,
                            },
                            errorFactory,
                          ),
                      ))()) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".bytes",
                      expected: "(Map<string, Uint8Array> | undefined)",
                      value: input.bytes,
                    },
                    errorFactory,
                  )) &&
                (undefined === input.objects ||
                  ((input.objects instanceof Map ||
                    $guard(
                      _exceptionable,
                      {
                        path: _path + ".objects",
                        expected:
                          "(Map<string, MapSimpleProtobufOptional> | undefined)",
                        value: input.objects,
                      },
                      errorFactory,
                    )) &&
                    (() =>
                      [...input.objects].every(
                        (elem: any, _index7: number) =>
                          ((Array.isArray(elem) ||
                            $guard(
                              _exceptionable,
                              {
                                path: _path + ".objects[" + _index7 + "]",
                                expected: "[string, MapSimpleProtobufOptional]",
                                value: elem,
                              },
                              errorFactory,
                            )) &&
                            (elem.length === 2 ||
                              $guard(
                                _exceptionable,
                                {
                                  path: _path + ".objects[" + _index7 + "]",
                                  expected:
                                    "[string, MapSimpleProtobufOptional]",
                                  value: elem,
                                },
                                errorFactory,
                              )) &&
                            ("string" === typeof elem[0] ||
                              $guard(
                                _exceptionable,
                                {
                                  path: _path + ".objects[" + _index7 + "][0]",
                                  expected: "string",
                                  value: elem[0],
                                },
                                errorFactory,
                              )) &&
                            (((("object" === typeof elem[1] &&
                              null !== elem[1] &&
                              false === Array.isArray(elem[1])) ||
                              $guard(
                                _exceptionable,
                                {
                                  path: _path + ".objects[" + _index7 + "][1]",
                                  expected: "MapSimpleProtobufOptional",
                                  value: elem[1],
                                },
                                errorFactory,
                              )) &&
                              $ao0(
                                elem[1],
                                _path + ".objects[" + _index7 + "][1]",
                                true && _exceptionable,
                              )) ||
                              $guard(
                                _exceptionable,
                                {
                                  path: _path + ".objects[" + _index7 + "][1]",
                                  expected: "MapSimpleProtobufOptional",
                                  value: elem[1],
                                },
                                errorFactory,
                              ))) ||
                          $guard(
                            _exceptionable,
                            {
                              path: _path + ".objects[" + _index7 + "]",
                              expected: "[string, MapSimpleProtobufOptional]",
                              value: elem,
                            },
                            errorFactory,
                          ),
                      ))()) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".objects",
                      expected:
                        "(Map<string, MapSimpleProtobufOptional> | undefined)",
                      value: input.objects,
                    },
                    errorFactory,
                  ));
              return (
                ((("object" === typeof input &&
                  null !== input &&
                  false === Array.isArray(input)) ||
                  $guard(
                    true,
                    {
                      path: _path + "",
                      expected: "MapSimpleProtobufOptional",
                      value: input,
                    },
                    errorFactory,
                  )) &&
                  $ao0(input, _path + "", true)) ||
                $guard(
                  true,
                  {
                    path: _path + "",
                    expected: "MapSimpleProtobufOptional",
                    value: input,
                  },
                  errorFactory,
                )
              );
            })(input, "$input", true);
          return input;
        };
        const encode = (input: MapSimpleProtobufOptional): Uint8Array => {
          const $Sizer = (typia.protobuf.assertEncode as any).Sizer;
          const $Writer = (typia.protobuf.assertEncode as any).Writer;
          const encoder = (writer: any): any => {
            const $peo0 = (input: any): any => {
              // property "boolean";
              if (undefined !== input.boolean) {
                for (const [key, value] of input.boolean) {
                  writer.uint32(10);
                  writer.fork();
                  writer.uint32(10);
                  writer.string(key);
                  writer.uint32(16);
                  writer.bool(value);
                  writer.ldelim();
                }
              }
              // property "int32";
              if (undefined !== input.int32) {
                for (const [key, value] of input.int32) {
                  writer.uint32(18);
                  writer.fork();
                  writer.uint32(10);
                  writer.string(key);
                  writer.uint32(16);
                  writer.int32(value);
                  writer.ldelim();
                }
              }
              // property "bigint";
              if (undefined !== input.bigint) {
                for (const [key, value] of input.bigint) {
                  writer.uint32(26);
                  writer.fork();
                  writer.uint32(10);
                  writer.string(key);
                  writer.uint32(16);
                  writer.int64(value);
                  writer.ldelim();
                }
              }
              // property "double";
              if (undefined !== input.double) {
                for (const [key, value] of input.double) {
                  writer.uint32(34);
                  writer.fork();
                  writer.uint32(10);
                  writer.string(key);
                  writer.uint32(17);
                  writer.double(value);
                  writer.ldelim();
                }
              }
              // property "string";
              if (undefined !== input.string) {
                for (const [key, value] of input.string) {
                  writer.uint32(42);
                  writer.fork();
                  writer.uint32(10);
                  writer.string(key);
                  writer.uint32(18);
                  writer.string(value);
                  writer.ldelim();
                }
              }
              // property "bytes";
              if (undefined !== input.bytes) {
                for (const [key, value] of input.bytes) {
                  writer.uint32(50);
                  writer.fork();
                  writer.uint32(10);
                  writer.string(key);
                  writer.uint32(18);
                  writer.bytes(value);
                  writer.ldelim();
                }
              }
              // property "objects";
              if (undefined !== input.objects) {
                for (const [key, value] of input.objects) {
                  writer.uint32(58);
                  writer.fork();
                  writer.uint32(10);
                  writer.string(key);
                  // 2 -> MapSimpleProtobufOptional;
                  writer.uint32(18);
                  writer.fork();
                  $peo0(value);
                  writer.ldelim();
                  writer.ldelim();
                }
              }
            };
            const $io0 = (input: any): boolean =>
              (undefined === input.boolean ||
                (input.boolean instanceof Map &&
                  (() =>
                    [...input.boolean].every(
                      (elem: any) =>
                        Array.isArray(elem) &&
                        elem.length === 2 &&
                        "string" === typeof elem[0] &&
                        "boolean" === typeof elem[1],
                    ))())) &&
              (undefined === input.int32 ||
                (input.int32 instanceof Map &&
                  (() =>
                    [...input.int32].every(
                      (elem: any) =>
                        Array.isArray(elem) &&
                        elem.length === 2 &&
                        "string" === typeof elem[0] &&
                        "number" === typeof elem[1] &&
                        Math.floor(elem[1]) === elem[1] &&
                        -2147483648 <= elem[1] &&
                        elem[1] <= 2147483647,
                    ))())) &&
              (undefined === input.bigint ||
                (input.bigint instanceof Map &&
                  (() =>
                    [...input.bigint].every(
                      (elem: any) =>
                        Array.isArray(elem) &&
                        elem.length === 2 &&
                        "string" === typeof elem[0] &&
                        "bigint" === typeof elem[1],
                    ))())) &&
              (undefined === input.double ||
                (input.double instanceof Map &&
                  (() =>
                    [...input.double].every(
                      (elem: any) =>
                        Array.isArray(elem) &&
                        elem.length === 2 &&
                        "string" === typeof elem[0] &&
                        "number" === typeof elem[1],
                    ))())) &&
              (undefined === input.string ||
                (input.string instanceof Map &&
                  (() =>
                    [...input.string].every(
                      (elem: any) =>
                        Array.isArray(elem) &&
                        elem.length === 2 &&
                        "string" === typeof elem[0] &&
                        "string" === typeof elem[1] &&
                        1 <= elem[1].length,
                    ))())) &&
              (undefined === input.bytes ||
                (input.bytes instanceof Map &&
                  (() =>
                    [...input.bytes].every(
                      (elem: any) =>
                        Array.isArray(elem) &&
                        elem.length === 2 &&
                        "string" === typeof elem[0] &&
                        elem[1] instanceof Uint8Array,
                    ))())) &&
              (undefined === input.objects ||
                (input.objects instanceof Map &&
                  (() =>
                    [...input.objects].every(
                      (elem: any) =>
                        Array.isArray(elem) &&
                        elem.length === 2 &&
                        "string" === typeof elem[0] &&
                        "object" === typeof elem[1] &&
                        null !== elem[1] &&
                        false === Array.isArray(elem[1]) &&
                        $io0(elem[1]),
                    ))()));
            //MapSimpleProtobufOptional;
            $peo0(input);
            return writer;
          };
          const sizer = encoder(new $Sizer());
          const writer = encoder(new $Writer(sizer));
          return writer.buffer();
        };
        return encode(assert(input, errorFactory));
      })(input),
    decode: (
      input: Uint8Array,
    ): import("typia").Resolved<MapSimpleProtobufOptional> => {
      const $Reader = (typia.protobuf.createDecode as any).Reader;
      const $pdo0 = (reader: any, length: number = -1): any => {
        length = length < 0 ? reader.size() : reader.index() + length;
        const output = {} as any;
        while (reader.index() < length) {
          const tag = reader.uint32();
          switch (tag >>> 3) {
            case 1:
              // type: Map<string, boolean>;
              (() => {
                output.boolean ??= new Map<any, any>();
                const piece = reader.uint32() + reader.index();
                const entry = {
                  key: "" as any,
                  value: undefined as any,
                } as any;
                while (reader.index() < piece) {
                  const kind = reader.uint32();
                  switch (kind >>> 3) {
                    case 1:
                      // string;
                      entry.key = reader.string();
                      break;
                    case 2:
                      // bool;
                      entry.value = reader.bool();
                      break;
                    default:
                      reader.skipType(kind & 7);
                      break;
                  }
                }
                output.boolean.set(entry.key, entry.value);
              })();
              break;
            case 2:
              // type: Map<string, (number & Type<"int32">)>;
              (() => {
                output.int32 ??= new Map<any, any>();
                const piece = reader.uint32() + reader.index();
                const entry = {
                  key: "" as any,
                  value: undefined as any,
                } as any;
                while (reader.index() < piece) {
                  const kind = reader.uint32();
                  switch (kind >>> 3) {
                    case 1:
                      // string;
                      entry.key = reader.string();
                      break;
                    case 2:
                      // int32;
                      entry.value = reader.int32();
                      break;
                    default:
                      reader.skipType(kind & 7);
                      break;
                  }
                }
                output.int32.set(entry.key, entry.value);
              })();
              break;
            case 3:
              // type: Map<string, bigint>;
              (() => {
                output.bigint ??= new Map<any, any>();
                const piece = reader.uint32() + reader.index();
                const entry = {
                  key: "" as any,
                  value: undefined as any,
                } as any;
                while (reader.index() < piece) {
                  const kind = reader.uint32();
                  switch (kind >>> 3) {
                    case 1:
                      // string;
                      entry.key = reader.string();
                      break;
                    case 2:
                      // int64;
                      entry.value = reader.int64();
                      break;
                    default:
                      reader.skipType(kind & 7);
                      break;
                  }
                }
                output.bigint.set(entry.key, entry.value);
              })();
              break;
            case 4:
              // type: Map<string, number>;
              (() => {
                output.double ??= new Map<any, any>();
                const piece = reader.uint32() + reader.index();
                const entry = {
                  key: "" as any,
                  value: undefined as any,
                } as any;
                while (reader.index() < piece) {
                  const kind = reader.uint32();
                  switch (kind >>> 3) {
                    case 1:
                      // string;
                      entry.key = reader.string();
                      break;
                    case 2:
                      // double;
                      entry.value = reader.double();
                      break;
                    default:
                      reader.skipType(kind & 7);
                      break;
                  }
                }
                output.double.set(entry.key, entry.value);
              })();
              break;
            case 5:
              // type: Map<string, (string & MinLength<1>)>;
              (() => {
                output.string ??= new Map<any, any>();
                const piece = reader.uint32() + reader.index();
                const entry = {
                  key: "" as any,
                  value: "" as any,
                } as any;
                while (reader.index() < piece) {
                  const kind = reader.uint32();
                  switch (kind >>> 3) {
                    case 1:
                      // string;
                      entry.key = reader.string();
                      break;
                    case 2:
                      // string;
                      entry.value = reader.string();
                      break;
                    default:
                      reader.skipType(kind & 7);
                      break;
                  }
                }
                output.string.set(entry.key, entry.value);
              })();
              break;
            case 6:
              // type: Map<string, Uint8Array>;
              (() => {
                output.bytes ??= new Map<any, any>();
                const piece = reader.uint32() + reader.index();
                const entry = {
                  key: "" as any,
                  value: new Uint8Array() as any,
                } as any;
                while (reader.index() < piece) {
                  const kind = reader.uint32();
                  switch (kind >>> 3) {
                    case 1:
                      // string;
                      entry.key = reader.string();
                      break;
                    case 2:
                      // bytes;
                      entry.value = reader.bytes();
                      break;
                    default:
                      reader.skipType(kind & 7);
                      break;
                  }
                }
                output.bytes.set(entry.key, entry.value);
              })();
              break;
            case 7:
              // type: Map<string, MapSimpleProtobufOptional>;
              (() => {
                output.objects ??= new Map<any, any>();
                const piece = reader.uint32() + reader.index();
                const entry = {
                  key: "" as any,
                  value: undefined as any,
                } as any;
                while (reader.index() < piece) {
                  const kind = reader.uint32();
                  switch (kind >>> 3) {
                    case 1:
                      // string;
                      entry.key = reader.string();
                      break;
                    case 2:
                      // MapSimpleProtobufOptional;
                      entry.value = $pdo0(reader, reader.uint32());
                      break;
                    default:
                      reader.skipType(kind & 7);
                      break;
                  }
                }
                output.objects.set(entry.key, entry.value);
              })();
              break;
            default:
              reader.skipType(tag & 7);
              break;
          }
        }
        return output;
      };
      const reader = new $Reader(input);
      return $pdo0(reader);
    },
    message:
      'syntax = "proto3";\n\nmessage MapSimpleProtobufOptional {\n  map<string, bool> boolean = 1;\n  map<string, int32> int32 = 2;\n  map<string, int64> bigint = 3;\n  map<string, double> double = 4;\n  map<string, string> string = 5;\n  map<string, bytes> bytes = 6;\n  map<string, MapSimpleProtobufOptional> objects = 7;\n}',
  });
