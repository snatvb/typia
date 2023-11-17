import typia from "../../../src";
import { _test_protobuf_validateEncode } from "../../internal/_test_protobuf_validateEncode";
import { ObjectSimpleProtobufNullable } from "../../structures/ObjectSimpleProtobufNullable";

export const test_protobuf_createValidateEncode_ObjectSimpleProtobufNullable =
  _test_protobuf_validateEncode(
    "ObjectSimpleProtobufNullable",
  )<ObjectSimpleProtobufNullable>(ObjectSimpleProtobufNullable)({
    encode: (input) =>
      typia.protobuf.validateEncode<ObjectSimpleProtobufNullable>(input),
    decode: typia.protobuf.createDecode<ObjectSimpleProtobufNullable>(),
    message: typia.protobuf.message<ObjectSimpleProtobufNullable>(),
  });
