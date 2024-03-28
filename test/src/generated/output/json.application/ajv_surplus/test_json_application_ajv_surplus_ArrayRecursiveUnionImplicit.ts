import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { ArrayRecursiveUnionImplicit } from "../../../../structures/ArrayRecursiveUnionImplicit";

export const test_json_application_ajv_surplus_ArrayRecursiveUnionImplicit =
  _test_json_application({
    purpose: "ajv",
    surplus: true,
    name: "ArrayRecursiveUnionImplicit",
  })({
    schemas: [
      {
        $ref: "#/components/schemas/ArrayRecursiveUnionImplicit",
      },
    ],
    components: {
      schemas: {
        ArrayRecursiveUnionImplicit: {
          $id: "#/components/schemas/ArrayRecursiveUnionImplicit",
          type: "array",
          items: {
            $ref: "#/components/schemas/ArrayRecursiveUnionImplicit.IBucket",
          },
        },
        "ArrayRecursiveUnionImplicit.IBucket": {
          $id: "#/components/schemas/ArrayRecursiveUnionImplicit.IBucket",
          oneOf: [
            {
              $ref: "#/components/schemas/ArrayRecursiveUnionImplicit.IDirectory",
            },
            {
              $ref: "#/components/schemas/ArrayRecursiveUnionImplicit.ISharedDirectory",
            },
            {
              $ref: "#/components/schemas/ArrayRecursiveUnionImplicit.IImageFile",
            },
            {
              $ref: "#/components/schemas/ArrayRecursiveUnionImplicit.ITextFile",
            },
            {
              $ref: "#/components/schemas/ArrayRecursiveUnionImplicit.IZipFile",
            },
            {
              $ref: "#/components/schemas/ArrayRecursiveUnionImplicit.IShortcut",
            },
          ],
        },
        "ArrayRecursiveUnionImplicit.IDirectory": {
          $id: "#/components/schemas/ArrayRecursiveUnionImplicit.IDirectory",
          type: "object",
          properties: {
            id: {
              type: "number",
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            name: {
              type: "string",
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            path: {
              type: "string",
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            children: {
              type: "array",
              items: {
                $ref: "#/components/schemas/ArrayRecursiveUnionImplicit.IBucket",
              },
              "x-typia-required": true,
              "x-typia-optional": false,
            },
          },
          required: ["id", "name", "path", "children"],
          "x-typia-jsDocTags": [],
        },
        "ArrayRecursiveUnionImplicit.ISharedDirectory": {
          $id: "#/components/schemas/ArrayRecursiveUnionImplicit.ISharedDirectory",
          type: "object",
          properties: {
            access: {
              type: "string",
              enum: ["read", "write"],
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            id: {
              type: "number",
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            name: {
              type: "string",
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            path: {
              type: "string",
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            children: {
              type: "array",
              items: {
                $ref: "#/components/schemas/ArrayRecursiveUnionImplicit.IBucket",
              },
              "x-typia-required": true,
              "x-typia-optional": false,
            },
          },
          required: ["access", "id", "name", "path", "children"],
          "x-typia-jsDocTags": [],
        },
        "ArrayRecursiveUnionImplicit.IImageFile": {
          $id: "#/components/schemas/ArrayRecursiveUnionImplicit.IImageFile",
          type: "object",
          properties: {
            id: {
              type: "number",
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            name: {
              type: "string",
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            path: {
              type: "string",
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            width: {
              type: "number",
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            height: {
              type: "number",
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            url: {
              type: "string",
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            size: {
              type: "number",
              "x-typia-required": true,
              "x-typia-optional": false,
            },
          },
          required: ["id", "name", "path", "width", "height", "url", "size"],
          "x-typia-jsDocTags": [],
        },
        "ArrayRecursiveUnionImplicit.ITextFile": {
          $id: "#/components/schemas/ArrayRecursiveUnionImplicit.ITextFile",
          type: "object",
          properties: {
            id: {
              type: "number",
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            name: {
              type: "string",
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            path: {
              type: "string",
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            size: {
              type: "number",
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            content: {
              type: "string",
              "x-typia-required": true,
              "x-typia-optional": false,
            },
          },
          required: ["id", "name", "path", "size", "content"],
          "x-typia-jsDocTags": [],
        },
        "ArrayRecursiveUnionImplicit.IZipFile": {
          $id: "#/components/schemas/ArrayRecursiveUnionImplicit.IZipFile",
          type: "object",
          properties: {
            id: {
              type: "number",
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            name: {
              type: "string",
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            path: {
              type: "string",
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            size: {
              type: "number",
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            count: {
              type: "number",
              "x-typia-required": true,
              "x-typia-optional": false,
            },
          },
          required: ["id", "name", "path", "size", "count"],
          "x-typia-jsDocTags": [],
        },
        "ArrayRecursiveUnionImplicit.IShortcut": {
          $id: "#/components/schemas/ArrayRecursiveUnionImplicit.IShortcut",
          type: "object",
          properties: {
            id: {
              type: "number",
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            name: {
              type: "string",
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            path: {
              type: "string",
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            target: {
              $ref: "#/components/schemas/ArrayRecursiveUnionImplicit.IBucket",
              "x-typia-required": true,
              "x-typia-optional": false,
            },
          },
          required: ["id", "name", "path", "target"],
          "x-typia-jsDocTags": [],
        },
      },
    },
    purpose: "ajv",
    surplus: true,
  });
