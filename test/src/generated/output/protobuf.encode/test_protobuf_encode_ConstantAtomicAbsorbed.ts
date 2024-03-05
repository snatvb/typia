import typia from "typia";

import { _test_protobuf_encode } from "../../../internal/_test_protobuf_encode";
import { ConstantAtomicAbsorbed } from "../../../structures/ConstantAtomicAbsorbed";

export const test_protobuf_encode_ConstantAtomicAbsorbed =
  _test_protobuf_encode("ConstantAtomicAbsorbed")<ConstantAtomicAbsorbed>(
    ConstantAtomicAbsorbed,
  )({
    encode: (input) =>
      ((input: ConstantAtomicAbsorbed): Uint8Array => {
        const $Sizer = (typia.protobuf.encode as any).Sizer;
        const $Writer = (typia.protobuf.encode as any).Writer;
        const encoder = (writer: any): any => {
          const $peo0 = (input: any): any => {
            // property "id";
            writer.uint32(10);
            writer.string(input.id);
            // property "age";
            writer.uint32(17);
            writer.double(input.age);
          };
          //ConstantAtomicAbsorbed;
          $peo0(input);
          return writer;
        };
        const sizer = encoder(new $Sizer());
        const writer = encoder(new $Writer(sizer));
        return writer.buffer();
      })(input),
    decode: (
      input: Uint8Array,
    ): import("typia").Resolved<ConstantAtomicAbsorbed> => {
      const $Reader = (typia.protobuf.createDecode as any).Reader;
      const $pdo0 = (reader: any, length: number = -1): any => {
        length = length < 0 ? reader.size() : reader.index() + length;
        const output = {
          id: "" as any,
          age: undefined as any,
        } as any;
        while (reader.index() < length) {
          const tag = reader.uint32();
          switch (tag >>> 3) {
            case 1:
              // string;
              output.id = reader.string();
              break;
            case 2:
              // double;
              output.age = reader.double();
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
      'syntax = "proto3";\n\nmessage ConstantAtomicAbsorbed {\n  required string id = 1;\n  required double age = 2;\n}',
  });
