import { Schema, Tag } from 'swagger-jsdoc';
import { buildResponses } from '../utilities';
import { Path, Property } from './types';

const recordsTag: Tag = {
  name: 'Records',
  description: 'Records Managing API',
};

const foodId: Property = {
  type: 'string',
  description: 'the id of the food that relates to this record',
};

const date: Property = {
  type: 'string',
  format: 'date',
  example: '2021/08/28',
  description: 'the date on which the record was taken',
};

const amount: Property = {
  type: 'number',
  example: 200,
  description:
    'the number of units consumed from the relevant food which is specified by its id',
};

const _id: Property = {
  type: 'string',
  description: 'the added record id',
};

const userId: Property = {
  type: 'string',
  description: 'the id of the user who added this record',
};

const responseMessage: Property = {
  type: 'string',
  example: 'Record has been added successfully',
};

const recordSchema: Schema = {
  type: 'object',
  properties: {
    foodId,
    date,
    amount,
  },
};

const addRecordResponseSchema: Schema = {
  type: 'object',
  properties: {
    message: responseMessage,
    _id,
    foodId,
    userId,
    amount,
    date,
  },
};

const recordsPaths: Array<Path> = [
  [
    '/users/loggedIn/records',
    {
      post: {
        tags: ['Records'],
        summary: 'Add record for the authorized user',
        operationId: 'addRecord',
        requestBody: {
          content: {
            'application/json': {
              schema: { $ref: '#/components/schemas/Record' },
            },
          },
          required: true,
        },
        responses: buildResponses([
          [201, 'Record is been added successfully', 'AddRecordResponse'],
          [401, 'Authentication failed'],
        ]),
      },
    },
  ],
];

export { recordsTag, recordSchema, addRecordResponseSchema, recordsPaths };
