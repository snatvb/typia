import typia from "typia";

import { _test_protobuf_isEncode } from "../../../internal/_test_protobuf_isEncode";
import { CommentTagTypeBigInt } from "../../../structures/CommentTagTypeBigInt";

export const test_protobuf_isEncode_CommentTagTypeBigInt =
  _test_protobuf_isEncode("CommentTagTypeBigInt")<CommentTagTypeBigInt>(
    CommentTagTypeBigInt,
  )({
    encode: (input) =>
      ((input: CommentTagTypeBigInt): Uint8Array | null => {
        const is = (input: any): input is CommentTagTypeBigInt => {
          return (
            "object" === typeof input &&
            null !== input &&
            "bigint" === typeof (input as any).in64 &&
            "bigint" === typeof (input as any).uint64 &&
            BigInt(0) <= (input as any).uint64
          );
        };
        const encode = (input: CommentTagTypeBigInt): Uint8Array => {
          const $Sizer = (typia.protobuf.isEncode as any).Sizer;
          const $Writer = (typia.protobuf.isEncode as any).Writer;
          const encoder = (writer: any): any => {
            const $peo0 = (input: any): any => {
              // property "in64";
              writer.uint32(8);
              writer.int64(input.in64);
              // property "uint64";
              writer.uint32(16);
              writer.uint64(input.uint64);
            };
            //CommentTagTypeBigInt;
            $peo0(input);
            return writer;
          };
          const sizer = encoder(new $Sizer());
          const writer = encoder(new $Writer(sizer));
          return writer.buffer();
        };
        return is(input) ? encode(input) : null;
      })(input),
    decode: (
      input: Uint8Array,
    ): import("typia").Resolved<CommentTagTypeBigInt> => {
      const $Reader = (typia.protobuf.createDecode as any).Reader;
      const $pdo0 = (reader: any, length: number = -1): any => {
        length = length < 0 ? reader.size() : reader.index() + length;
        const output = {
          in64: undefined as any,
          uint64: undefined as any,
        } as any;
        while (reader.index() < length) {
          const tag = reader.uint32();
          switch (tag >>> 3) {
            case 1:
              // int64;
              output.in64 = reader.int64();
              break;
            case 2:
              // uint64;
              output.uint64 = reader.uint64();
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
      'syntax = "proto3";\n\nmessage CommentTagTypeBigInt {\n  required int64 in64 = 1;\n  required uint64 uint64 = 2;\n}',
  });
