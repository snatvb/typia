import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { CommentTagRangeBigInt } from "../../structures/CommentTagRangeBigInt";

export const test_protobuf_assertEncodeCustom_CommentTagRangeBigInt =
  _test_protobuf_assertEncode(CustomGuardError)(
    "CommentTagRangeBigInt",
  )<CommentTagRangeBigInt>(CommentTagRangeBigInt)({
    encode: (input) =>
      typia.protobuf.assertEncode<CommentTagRangeBigInt>(
        input,
        (p) => new CustomGuardError(p),
      ),
    decode: typia.protobuf.createDecode<CommentTagRangeBigInt>(),
    message: typia.protobuf.message<CommentTagRangeBigInt>(),
  });
