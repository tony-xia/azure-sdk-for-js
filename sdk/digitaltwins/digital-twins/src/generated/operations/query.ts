/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreHttp from "@azure/core-http";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { AzureDigitalTwinsAPI } from "../azureDigitalTwinsAPI";
import { QuerySpecification, QueryQueryTwinsResponse } from "../models";

/**
 * Class representing a Query.
 */
export class Query {
  private readonly client: AzureDigitalTwinsAPI;

  /**
   * Initialize a new instance of the class Query class.
   * @param client Reference to the service client
   */
  constructor(client: AzureDigitalTwinsAPI) {
    this.client = client;
  }

  /**
   * Executes a query that allows traversing relationships and filtering by property values.
   * Status codes:
   * 200 (OK): Success.
   * 400 (Bad Request): The request is invalid.
   * @param querySpecification The query specification to execute.
   * @param options The options parameters.
   */
  queryTwins(
    querySpecification: QuerySpecification,
    options?: coreHttp.OperationOptions
  ): Promise<QueryQueryTwinsResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { querySpecification, options: operationOptions },
      queryTwinsOperationSpec
    ) as Promise<QueryQueryTwinsResponse>;
  }
}
// Operation Specifications

const serializer = new coreHttp.Serializer(Mappers, /* isXml */ false);

const queryTwinsOperationSpec: coreHttp.OperationSpec = {
  path: "/query",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.QueryResult,
      headersMapper: Mappers.QueryQueryTwinsHeaders
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.querySpecification,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.contentType],
  mediaType: "json",
  serializer
};