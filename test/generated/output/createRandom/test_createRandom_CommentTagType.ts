import typia from "../../../../src";
import { _test_random } from "../../../internal/_test_random";
import { CommentTagType } from "../../../structures/CommentTagType";

export const test_createRandom_CommentTagType = _test_random(
  "CommentTagType",
)<CommentTagType>(CommentTagType)({
  random: (
    generator: Partial<typia.IRandomGenerator> = (CommentTagType as any).RANDOM,
  ): typia.Resolved<CommentTagType> => {
    const $generator = (typia.createRandom as any).generator;
    const $ro0 = (_recursive: boolean = false, _depth: number = 0): any => ({
      value: (generator?.array ?? $generator.array)(() =>
        $ro1(_recursive, _recursive ? 1 + _depth : _depth),
      ),
    });
    const $ro1 = (_recursive: boolean = false, _depth: number = 0): any => ({
      int:
        (generator?.customs ?? $generator.customs)?.number?.([
          {
            name: 'Type<"int32">',
            kind: "type",
            value: "int32",
          },
        ]) ?? (generator?.integer ?? $generator.integer)(0, 100),
      uint:
        (generator?.customs ?? $generator.customs)?.number?.([
          {
            name: 'Type<"uint32">',
            kind: "type",
            value: "uint32",
          },
        ]) ?? (generator?.integer ?? $generator.integer)(0, 10),
      int32:
        (generator?.customs ?? $generator.customs)?.number?.([
          {
            name: 'Type<"int32">',
            kind: "type",
            value: "int32",
          },
        ]) ?? (generator?.integer ?? $generator.integer)(0, 100),
      uint32:
        (generator?.customs ?? $generator.customs)?.number?.([
          {
            name: 'Type<"uint32">',
            kind: "type",
            value: "uint32",
          },
        ]) ?? (generator?.integer ?? $generator.integer)(0, 10),
      int64:
        (generator?.customs ?? $generator.customs)?.number?.([
          {
            name: 'Type<"int64">',
            kind: "type",
            value: "int64",
          },
        ]) ?? (generator?.integer ?? $generator.integer)(0, 100),
      uint64:
        (generator?.customs ?? $generator.customs)?.number?.([
          {
            name: 'Type<"uint64">',
            kind: "type",
            value: "uint64",
          },
        ]) ?? (generator?.integer ?? $generator.integer)(0, 10),
      float:
        (generator?.customs ?? $generator.customs)?.number?.([
          {
            name: 'Type<"float">',
            kind: "type",
            value: "float",
          },
        ]) ?? (generator?.number ?? $generator.number)(0, 100),
    });
    return $ro0();
  },
  assert: (input: any): CommentTagType => {
    const __is = (input: any): input is CommentTagType => {
      const $io0 = (input: any): boolean =>
        Array.isArray(input.value) &&
        input.value.every(
          (elem: any) =>
            "object" === typeof elem && null !== elem && $io1(elem),
        );
      const $io1 = (input: any): boolean =>
        "number" === typeof input.int &&
        Math.floor(input.int) === input.int &&
        -2147483648 <= input.int &&
        input.int <= 2147483647 &&
        "number" === typeof input.uint &&
        Math.floor(input.uint) === input.uint &&
        0 <= input.uint &&
        input.uint <= 4294967295 &&
        "number" === typeof input.int32 &&
        Math.floor(input.int32) === input.int32 &&
        -2147483648 <= input.int32 &&
        input.int32 <= 2147483647 &&
        "number" === typeof input.uint32 &&
        Math.floor(input.uint32) === input.uint32 &&
        0 <= input.uint32 &&
        input.uint32 <= 4294967295 &&
        "number" === typeof input.int64 &&
        Math.floor(input.int64) === input.int64 &&
        -9223372036854776000 <= input.int64 &&
        input.int64 <= 9223372036854776000 &&
        "number" === typeof input.uint64 &&
        Math.floor(input.uint64) === input.uint64 &&
        0 <= input.uint64 &&
        input.uint64 <= 18446744073709552000 &&
        "number" === typeof input.float &&
        -1.175494351e38 <= input.float &&
        input.float <= 3.4028235e38;
      return "object" === typeof input && null !== input && $io0(input);
    };
    if (false === __is(input))
      ((
        input: any,
        _path: string,
        _exceptionable: boolean = true,
      ): input is CommentTagType => {
        const $guard = (typia.createAssert as any).guard;
        const $ao0 = (
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): boolean =>
          ((Array.isArray(input.value) ||
            $guard(_exceptionable, {
              path: _path + ".value",
              expected: "Array<CommentTagType.Type>",
              value: input.value,
            })) &&
            input.value.every(
              (elem: any, _index1: number) =>
                ((("object" === typeof elem && null !== elem) ||
                  $guard(_exceptionable, {
                    path: _path + ".value[" + _index1 + "]",
                    expected: "CommentTagType.Type",
                    value: elem,
                  })) &&
                  $ao1(
                    elem,
                    _path + ".value[" + _index1 + "]",
                    true && _exceptionable,
                  )) ||
                $guard(_exceptionable, {
                  path: _path + ".value[" + _index1 + "]",
                  expected: "CommentTagType.Type",
                  value: elem,
                }),
            )) ||
          $guard(_exceptionable, {
            path: _path + ".value",
            expected: "Array<CommentTagType.Type>",
            value: input.value,
          });
        const $ao1 = (
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): boolean =>
          (("number" === typeof input.int &&
            ((Math.floor(input.int) === input.int &&
              -2147483648 <= input.int &&
              input.int <= 2147483647) ||
              $guard(_exceptionable, {
                path: _path + ".int",
                expected: 'number & Type<"int32">',
                value: input.int,
              }))) ||
            $guard(_exceptionable, {
              path: _path + ".int",
              expected: '(number & Type<"int32">)',
              value: input.int,
            })) &&
          (("number" === typeof input.uint &&
            ((Math.floor(input.uint) === input.uint &&
              0 <= input.uint &&
              input.uint <= 4294967295) ||
              $guard(_exceptionable, {
                path: _path + ".uint",
                expected: 'number & Type<"uint32">',
                value: input.uint,
              }))) ||
            $guard(_exceptionable, {
              path: _path + ".uint",
              expected: '(number & Type<"uint32">)',
              value: input.uint,
            })) &&
          (("number" === typeof input.int32 &&
            ((Math.floor(input.int32) === input.int32 &&
              -2147483648 <= input.int32 &&
              input.int32 <= 2147483647) ||
              $guard(_exceptionable, {
                path: _path + ".int32",
                expected: 'number & Type<"int32">',
                value: input.int32,
              }))) ||
            $guard(_exceptionable, {
              path: _path + ".int32",
              expected: '(number & Type<"int32">)',
              value: input.int32,
            })) &&
          (("number" === typeof input.uint32 &&
            ((Math.floor(input.uint32) === input.uint32 &&
              0 <= input.uint32 &&
              input.uint32 <= 4294967295) ||
              $guard(_exceptionable, {
                path: _path + ".uint32",
                expected: 'number & Type<"uint32">',
                value: input.uint32,
              }))) ||
            $guard(_exceptionable, {
              path: _path + ".uint32",
              expected: '(number & Type<"uint32">)',
              value: input.uint32,
            })) &&
          (("number" === typeof input.int64 &&
            ((Math.floor(input.int64) === input.int64 &&
              -9223372036854776000 <= input.int64 &&
              input.int64 <= 9223372036854776000) ||
              $guard(_exceptionable, {
                path: _path + ".int64",
                expected: 'number & Type<"int64">',
                value: input.int64,
              }))) ||
            $guard(_exceptionable, {
              path: _path + ".int64",
              expected: '(number & Type<"int64">)',
              value: input.int64,
            })) &&
          (("number" === typeof input.uint64 &&
            ((Math.floor(input.uint64) === input.uint64 &&
              0 <= input.uint64 &&
              input.uint64 <= 18446744073709552000) ||
              $guard(_exceptionable, {
                path: _path + ".uint64",
                expected: 'number & Type<"uint64">',
                value: input.uint64,
              }))) ||
            $guard(_exceptionable, {
              path: _path + ".uint64",
              expected: '(number & Type<"uint64">)',
              value: input.uint64,
            })) &&
          (("number" === typeof input.float &&
            ((-1.175494351e38 <= input.float && input.float <= 3.4028235e38) ||
              $guard(_exceptionable, {
                path: _path + ".float",
                expected: 'number & Type<"float">',
                value: input.float,
              }))) ||
            $guard(_exceptionable, {
              path: _path + ".float",
              expected: '(number & Type<"float">)',
              value: input.float,
            }));
        return (
          ((("object" === typeof input && null !== input) ||
            $guard(true, {
              path: _path + "",
              expected: "CommentTagType",
              value: input,
            })) &&
            $ao0(input, _path + "", true)) ||
          $guard(true, {
            path: _path + "",
            expected: "CommentTagType",
            value: input,
          })
        );
      })(input, "$input", true);
    return input;
  },
});
