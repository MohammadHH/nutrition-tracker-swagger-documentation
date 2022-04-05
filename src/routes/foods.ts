import { Schema, Tag } from 'swagger-jsdoc';
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
  example: 13,
  description: 'number of units in the specified food',
};

const measurement: Property = {
  type: 'string',
  example: 'gm, kg, piece, can',
  description: 'measuring unit for the specified food',
};

const calories: Property = {
  type: 'string',
  example: 'Strawberry',
  description: 'calories content for the given unit of food',
};

const carbs: Property = {
  type: 'number',
  example: 50,
  description: 'carbohydrates content for the given unit of food',
};

const protein: Property = {
  type: 'string',
  example: 'Strawberry',
  description: 'protein content for the given unit of food',
};

const fat: Property = {
  type: 'string',
  example: 'Strawberry',
  description: 'fat content for the given unit of food',
};

const responseMessage: Property = {
  type: 'string',
  example: 'Logged in successfully.',
};

const signupResponseMessage: Property = {
  type: 'string',
  example: 'User {{username}} has been created successfully.',
};

const foodsPaths: Array<Path> = [];

export { foodsTag, foodsPaths };
