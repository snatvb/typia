import { ILlmApplication, OpenApi } from "@samchon/openapi";
import { LlmSchemaConverter } from "@samchon/openapi/lib/converters/LlmSchemaConverter";
import { ILlmFunction } from "@samchon/openapi/lib/structures/ILlmFunction";

import { MetadataFactory } from "../../factories/MetadataFactory";

import { Metadata } from "../../schemas/metadata/Metadata";
import { MetadataFunction } from "../../schemas/metadata/MetadataFunction";
import { MetadataObjectType } from "../../schemas/metadata/MetadataObjectType";

import { IJsonApplication } from "../../module";
import { JsonApplicationProgrammer } from "../json/JsonApplicationProgrammer";
import { LlmSchemaProgrammer } from "./LlmSchemaProgrammer";

export namespace LlmApplicationProgrammer {
  export const validate = (model: ILlmApplication.Model) => {
    let top: Metadata | undefined;
    return (
      metadata: Metadata,
      explore: MetadataFactory.IExplore,
    ): string[] => {
      top ??= metadata;
      if (explore.top === false)
        if (
          explore.object === top?.objects[0]?.type &&
          typeof explore.property === "string" &&
          metadata.size() === 1 &&
          metadata.nullable === false &&
          metadata.isRequired() === true &&
          metadata.functions.length === 1
        )
          return validateFunction(metadata.functions[0]!);
        else return LlmSchemaProgrammer.validate(model)(metadata);

      const output: string[] = [];
      const valid: boolean =
        metadata.size() === 1 &&
        metadata.objects.length === 1 &&
        metadata.isRequired() === true &&
        metadata.nullable === false;
      if (valid === false)
        output.push(
          "LLM application's generic arugment must be a class/interface type.",
        );

      const object: MetadataObjectType | undefined = metadata.objects[0]?.type;
      if (object !== undefined) {
        if (object.properties.some((p) => p.key.isSoleLiteral() === false))
          output.push("LLM application does not allow dynamic keys.");
        let least: boolean = false;
        for (const p of object.properties) {
          const value: Metadata = p.value;
          if (value.functions.length) {
            least ||= true;
            if (valid === false) {
              if (value.functions.length !== 1 || value.size() !== 1)
                output.push(
                  "LLM application's function type does not allow union type.",
                );
              if (value.isRequired() === false)
                output.push(
                  "LLM application's function type must be required.",
                );
              if (value.nullable === true)
                output.push(
                  "LLM application's function type must not be nullable.",
                );
            }
          }
        }
        if (least === false)
          output.push(
            "LLM application's target type must have at least a function type.",
          );
      }
      return output;
    };
  };

  const validateFunction = (func: MetadataFunction): string[] => {
    const output: string[] = [];
    if (func.output.size() && func.output.isRequired() === false)
      output.push(
        "LLM application's function return type must not be union type with undefined.",
      );
    return output;
  };

  export const write = <Model extends ILlmApplication.Model>(props: {
    model: Model;
    metadata: Metadata;
  }): ILlmApplication<Model> => {
    const errors: string[] = validate(props.model)(props.metadata, {
      top: true,
      object: null,
      property: null,
      parameter: null,
      nested: null,
      aliased: false,
      escaped: false,
      output: false,
    });
    if (errors.length)
      throw new Error("Failed to write LLM application: " + errors.join("\n"));

    const application: IJsonApplication<"3.1"> =
      JsonApplicationProgrammer.write({
        version: "3.1",
        metadata: props.metadata,
      });
    return {
      model: props.model,
      functions: application.functions.map((func) =>
        writeFunction({
          model: props.model,
          components: application.components,
          function: func,
        }),
      ),
      options: DEFAULT_CONFIG,
    };
  };

  const writeFunction = <Model extends ILlmApplication.Model>(props: {
    model: Model;
    components: OpenApi.IComponents;
    function: IJsonApplication.IFunction<OpenApi.IJsonSchema>;
  }): ILlmFunction<ILlmApplication.ModelParameters[Model]> => {
    const parameters: ILlmApplication.ModelParameters[Model] =
      writeParameters(props);
    const output: ILlmApplication.ModelSchema[Model] | null = writeOutput({
      model: props.model,
      parameters,
      components: props.components,
      schema: props.function.output?.schema ?? null,
    });
    if (
      output &&
      output.description === undefined &&
      !!props.function.output?.description?.length
    )
      output.description = props.function.output.description;
    return {
      name: props.function.name,
      parameters,
      output: (output ?? undefined) as
        | ILlmApplication.ModelParameters[Model]["properties"][string]
        | undefined,
      description: (() => {
        if (
          !props.function.summary?.length ||
          !props.function.description?.length
        )
          return props.function.summary || props.function.description;
        const summary: string = props.function.summary.endsWith(".")
          ? props.function.summary.slice(0, -1)
          : props.function.summary;
        return props.function.description.startsWith(summary)
          ? props.function.description
          : summary + ".\n\n" + props.function.description;
      })(),
      deprecated: props.function.deprecated,
      tags: props.function.tags,
      strict: true,
    };
  };

  const writeParameters = <Model extends ILlmApplication.Model>(props: {
    model: Model;
    components: OpenApi.IComponents;
    function: IJsonApplication.IFunction<OpenApi.IJsonSchema>;
  }): ILlmApplication.ModelParameters[Model] => {
    const schema: OpenApi.IJsonSchema.IObject = {
      type: "object",
      properties: Object.fromEntries(
        props.function.parameters.map((p) => [
          p.name,
          {
            ...p.schema,
            title: p.title ?? p.schema.title,
            description: p.description ?? p.schema.description,
          },
        ]),
      ),
      required: props.function.parameters
        .filter((p) => p.required)
        .map((p) => p.name),
      additionalProperties: false,
    };
    const parameters: ILlmApplication.ModelParameters[Model] | null =
      LlmSchemaConverter.parameters(props.model)({
        config: DEFAULT_CONFIG,
        components: props.components,
        schema,
      }) as ILlmApplication.ModelParameters[Model] | null;
    if (parameters === null)
      throw new Error("Failed to write LLM application parameters.");
    return parameters;
  };

  const writeOutput = <Model extends ILlmApplication.Model>(props: {
    model: Model;
    parameters: ILlmApplication.ModelParameters[Model];
    components: OpenApi.IComponents;
    schema: OpenApi.IJsonSchema | null;
  }): ILlmApplication.ModelSchema[Model] | null => {
    if (props.schema === null) return null;
    const output: ILlmApplication.ModelSchema[Model] | null =
      LlmSchemaConverter.schema(props.model)({
        config: DEFAULT_CONFIG,
        components: props.components,
        schema: props.schema,
        $defs: (props.parameters as any).$defs,
      }) as ILlmApplication.ModelSchema[Model] | null;
    if (output === null)
      throw new Error("Failed to write LLM application output.");
    return output;
  };
}

const DEFAULT_CONFIG = {
  separate: null,
  constraint: false,
  recursive: 3,
  reference: false,
};
