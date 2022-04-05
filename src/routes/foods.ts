import { Schema, Tag } from 'swagger-jsdoc';
import { buildResponses } from '../utilities';
import { Path, Property } from './types';

const foodsTag: Tag = {
  name: 'Foods',
  description: 'The Foods Managing API',
};

const image: Property = {
  type: 'string',
  format: 'binary',
  description: 'food image (svg,png,jpg)',
};

const name: Property = {
  type: 'string',
  example: 'Strawberry',
  description: 'food name',
};

const units: Property = {
  type: 'number',
  example: 100,
  description: 'number of units in the specified food',
};

const measurement: Property = {
  type: 'string',
  example: 'gm',
  description: 'measuring unit for the specified food',
};

const calories: Property = {
  type: 'string',
  example: 50,
  description: 'calories content for the given unit of food',
};

const carbs: Property = {
  type: 'number',
  example: 10,
  description: 'carbohydrates content for the given unit of food',
};

const protein: Property = {
  type: 'string',
  example: 2,
  description: 'protein content for the given unit of food',
};

const fat: Property = {
  type: 'string',
  example: 1,
  description: 'fat content for the given unit of food',
};

const _id: Property = {
  type: 'string',
  description: 'the added food id',
  example: '624c237f67b7bd0f7d8c207b',
};

const userId: Property = {
  type: 'string',
  description: 'the id of the user who added this food',
  example: '624c237f67b7bd0f7d8c207b',
};

const responseMessage: Property = {
  type: 'string',
  example: 'Strawberry has been added.',
};

const addFoodResponseSchema: Schema = {
  type: 'object',
  properties: {
    message: responseMessage,
    _id,
    userId,
    image,
    name,
    units,
    measurement,
    calories,
    carbs,
    protein,
    fat,
  },
};

const foodsPaths: Array<Path> = [
  [
    '/users/loggedIn/foods',
    {
      post: {
        tags: ['Foods'],
        summary: 'Add food for the authorized user',
        operationId: 'addFood',
        requestBody: {
          content: {
            'multipart/form-data': {
              schema: {
                type: 'object',
                properties: {
                  image,
                  name,
                  units,
                  measurement,
                  calories,
                  carbs,
                  protein,
                  fat,
                },
              },
            },
          },
          required: true,
        },
        responses: buildResponses([
          [201, '{{provided food}} has been added', 'AddFoodResponse'],
          [401, ''],
          [409, '{{provided food}} is already added'],
        ]),
      },
    },
  ],
];

export { foodsTag, foodsPaths, addFoodResponseSchema };
