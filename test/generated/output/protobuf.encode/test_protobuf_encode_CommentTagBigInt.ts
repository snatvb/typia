import typia from "../../../../src";
import { _test_protobuf_encode } from "../../../internal/_test_protobuf_encode";
import { CommentTagBigInt } from "../../../structures/CommentTagBigInt";

export const test_protobuf_createEncode_CommentTagBigInt =
  _test_protobuf_encode("CommentTagBigInt")<CommentTagBigInt>(CommentTagBigInt)(
    {
      encode: (input) =>
        ((input: CommentTagBigInt): Uint8Array => {
          const $Sizer = (typia.protobuf.encode as any).Sizer;
          const $Writer = (typia.protobuf.encode as any).Writer;
          const encoder = (writer: any): any => {
            const $peo0 = (input: any): any => {
              // property "value";
              writer.uint32(8);
              writer.int64(input.value);
              // property "ranged";
              writer.uint32(16);
              writer.int64(input.ranged);
              // property "minimum";
              writer.uint32(24);
              writer.int64(input.minimum);
              // property "maximum";
              writer.uint32(32);
              writer.int64(input.maximum);
              // property "multipleOf";
              writer.uint32(40);
              writer.int64(input.multipleOf);
            };
            //CommentTagBigInt;
            $peo0(input);
            return writer;
          };
          const sizer = encoder(new $Sizer());
          const writer = encoder(new $Writer(sizer));
          return writer.buffer();
        })(input),
      decode: (input: Uint8Array): typia.Resolved<CommentTagBigInt> => {
        const $Reader = (typia.protobuf.createDecode as any).Reader;
        const $pdo0 = (reader: any, length: number = -1): any => {
          length = length < 0 ? reader.size() : reader.index() + length;
          const output = {
            value: undefined as any,
            ranged: undefined as any,
            minimum: undefined as any,
            maximum: undefined as any,
            multipleOf: undefined as any,
          };
          while (reader.index() < length) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
              case 1:
                // int64;
                output.value = reader.int64();
                break;
              case 2:
                // int64;
                output.ranged = reader.int64();
                break;
              case 3:
                // int64;
                output.minimum = reader.int64();
                break;
              case 4:
                // int64;
                output.maximum = reader.int64();
                break;
              case 5:
                // int64;
                output.multipleOf = reader.int64();
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
        'syntax = "proto3";\n\nmessage CommentTagBigInt {\n    required int64 value = 1;\n    required int64 ranged = 2;\n    required int64 minimum = 3;\n    required int64 maximum = 4;\n    required int64 multipleOf = 5;\n}',
    },
  );
