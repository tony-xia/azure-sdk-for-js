/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import {
  OperationURLParameter,
  OperationQueryParameter,
  OperationParameter
} from "@azure/core-http";

export const endpoint: OperationURLParameter = {
  parameterPath: "endpoint",
  mapper: {
    serializedName: "endpoint",
    required: true,
    type: {
      name: "String"
    }
  },
  skipEncoding: true
};

export const schemaId: OperationURLParameter = {
  parameterPath: "schemaId",
  mapper: {
    serializedName: "schema-id",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const apiVersion: OperationQueryParameter = {
  parameterPath: "apiVersion",
  mapper: {
    // TODO: Manually patched for now due to https://github.com/Azure/azure-rest-api-specs/pull/10220#discussion_r469588293
    // defaultValue: "2018-01-01-preview",
    defaultValue: "2017-04",
    isConstant: true,
    serializedName: "api-version",
    type: {
      name: "String"
    }
  }
};

export const contentType: OperationParameter = {
  parameterPath: ["options", "contentType"],
  mapper: {
    defaultValue: "application/json",
    isConstant: true,
    serializedName: "Content-Type",
    type: {
      name: "String"
    }
  }
};

export const schemaContent: OperationParameter = {
  parameterPath: "schemaContent",
  mapper: {
    serializedName: "schemaContent",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const groupName: OperationURLParameter = {
  parameterPath: "groupName",
  mapper: {
    serializedName: "group-name",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const schemaName: OperationURLParameter = {
  parameterPath: "schemaName",
  mapper: {
    serializedName: "schema-name",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const xSchemaType: OperationParameter = {
  parameterPath: "xSchemaType",
  mapper: {
    serializedName: "X-Schema-Type",
    required: true,
    type: {
      name: "String"
    }
  }
};