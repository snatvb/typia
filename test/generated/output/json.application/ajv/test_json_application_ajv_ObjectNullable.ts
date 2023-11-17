import typia from "../../../../../src";
import { _test_json_application } from "../../../../internal/_test_json_application";
import { ObjectNullable } from "../../../../structures/ObjectNullable";

export const test_json_application_ajv_ObjectNullable = _test_json_application(
  "ajv",
)("ObjectNullable")({
  schemas: [
    {
      $ref: "#/components/schemas/ObjectNullable",
    },
  ],
  components: {
    schemas: {
      ObjectNullable: {
        $id: "#/components/schemas/ObjectNullable",
        type: "object",
        properties: {
          value: {
            "x-typia-required": true,
            "x-typia-optional": false,
            type: "array",
            items: {
              $ref: "#/components/schemas/ObjectNullable.IProduct",
            },
          },
        },
        required: ["value"],
        "x-typia-jsDocTags": [],
      },
      "ObjectNullable.IProduct": {
        $id: "#/components/schemas/ObjectNullable.IProduct",
        type: "object",
        properties: {
          name: {
            "x-typia-required": true,
            "x-typia-optional": false,
            type: "string",
          },
          manufacturer: {
            $ref: "#/components/schemas/ObjectNullable.IManufacturer",
          },
          brand: {
            oneOf: [
              {
                "x-typia-required": true,
                "x-typia-optional": false,
                type: "null",
              },
              {
                $ref: "#/components/schemas/ObjectNullable.IBrand",
              },
            ],
            "x-typia-required": true,
            "x-typia-optional": false,
          },
          similar: {
            oneOf: [
              {
                "x-typia-required": true,
                "x-typia-optional": false,
                type: "null",
              },
              {
                $ref: "#/components/schemas/ObjectNullable.IBrand",
              },
              {
                $ref: "#/components/schemas/ObjectNullable.IManufacturer",
              },
            ],
            "x-typia-required": true,
            "x-typia-optional": false,
          },
        },
        required: ["name", "manufacturer", "brand", "similar"],
        "x-typia-jsDocTags": [],
      },
      "ObjectNullable.IManufacturer": {
        $id: "#/components/schemas/ObjectNullable.IManufacturer",
        type: "object",
        properties: {
          type: {
            "x-typia-required": true,
            "x-typia-optional": false,
            type: "string",
            enum: ["manufacturer"],
          },
          name: {
            "x-typia-required": true,
            "x-typia-optional": false,
            type: "string",
          },
        },
        required: ["type", "name"],
        "x-typia-jsDocTags": [],
      },
      "ObjectNullable.IBrand": {
        $id: "#/components/schemas/ObjectNullable.IBrand",
        type: "object",
        properties: {
          type: {
            "x-typia-required": true,
            "x-typia-optional": false,
            type: "string",
            enum: ["brand"],
          },
          name: {
            "x-typia-required": true,
            "x-typia-optional": false,
            type: "string",
          },
        },
        required: ["type", "name"],
        "x-typia-jsDocTags": [],
      },
    },
  },
  purpose: "ajv",
});
