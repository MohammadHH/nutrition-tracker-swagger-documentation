import { Schema, Tag } from 'swagger-jsdoc';
import { buildResponses } from '../utilities';
import { Path, Property } from './types';

const metricsTag: Tag = {
  name: 'Metrics',
  description: 'Metrics Managing API',
};

const metricId: Property = {
  type: 'string',
  description: 'the id of the food that relates to this record',
};

const date: Property = {
  type: 'string',
  format: 'date',
  example: '2021/08/28',
  description: 'the date on which the metric was measured',
};

const weight: Property = {
  type: 'number',
  example: 200,
  description: "the user's measured weight at the specified date",
};

const _id: Property = {
  type: 'string',
  description: 'metric id',
};

const userId: Property = {
  type: 'string',
  description: 'the id of the user who added this metric',
};

const responseMessage: Property = {
  type: 'string',
  example: 'Metric has been added successfully',
};

const metricSchema: Schema = {
  type: 'object',
  properties: {
    metricId,
    date,
    weight,
  },
};

const addMetricResponseSchema: Schema = {
  type: 'object',
  properties: {
    message: responseMessage,
    _id,
    metricId,
    userId,
    weight,
    date,
  },
};

const retrieveMetricsResponseSchema: Schema = {
  type: 'array',
  items: { $ref: '#/components/schemas/AddMetricResponse' },
};

const metricsPaths: Array<Path> = [
  [
    '/users/loggedIn/metrics',
    {
      post: {
        tags: ['Metrics'],
        summary: 'Add metric for the authorized user',
        operationId: 'addMetric',
        requestBody: {
          content: {
            'application/json': {
              schema: { $ref: '#/components/schemas/Metric' },
            },
          },
          required: true,
        },
        responses: buildResponses([
          [201, 'Metric is been added successfully', 'AddMetricResponse'],
          [401, 'Authentication failed'],
        ]),
      },
      get: {
        tags: ['Metrics'],
        summary: 'Retrieve all metrics',
        operationId: 'getAllMetrics',
        responses: buildResponses([
          [200, '', 'RetrieveMetricsResponse'],
          [401, 'Authentication failed'],
        ]),
      },
    },
  ],
];

export {
  metricsTag,
  metricSchema,
  addMetricResponseSchema,
  retrieveMetricsResponseSchema,
  metricsPaths,
};
