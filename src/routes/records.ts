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

const recordSchema: Schema = {
  type: 'object',
  properties: {
    foodId,
    date,
    amount,
  },
};

export { recordsTag, recordSchema };
