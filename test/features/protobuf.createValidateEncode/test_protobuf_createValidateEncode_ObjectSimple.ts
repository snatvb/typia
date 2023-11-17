import typia from "../../../src";
import { _test_protobuf_validateEncode } from "../../internal/_test_protobuf_validateEncode";
import { ObjectSimple } from "../../structures/ObjectSimple";

export const test_protobuf_createValidateEncode_ObjectSimple =
  _test_protobuf_validateEncode("ObjectSimple")<ObjectSimple>(ObjectSimple)({
    encode: typia.protobuf.createValidateEncode<ObjectSimple>(),
    decode: typia.protobuf.createDecode<ObjectSimple>(),
    message: typia.protobuf.message<ObjectSimple>(),
  });
