import { Schema, Tag } from 'swagger-jsdoc';
import { buildResponses } from '../utilities';
import { Path, Property } from './types';

const usersTag: Tag = {
  name: 'Users',
  description: 'The users Managing API',
};

const username: Property = { type: 'string', example: 'Ahmad' };

const email: Property = {
  type: 'string',
  format: 'email',
  example: 'demo@gmail.com',
};

const password: Property = {
  type: 'string',
  format: 'password',
  example: 'demo12345',
};

const initialWeight: Property = {
  type: 'number',
  format: 'kg',
  example: 73,
  description: "The user's initial weight in 'kg'",
};

const goalWeight: Property = {
  type: 'number',
  format: 'kg',
  example: 70,
  description: "The weight which the user aspires to reach in 'kg'",
};

const height: Property = {
  type: 'number',
  format: 'cm',
  example: 170,
};

const activityLevel: Property = {
  type: 'number',
  example: 1.2,
  description: 'desc',
};

const dateOfBirth: Property = {
  type: 'string',
  format: 'date yyyy-mm-dd',
  example: '2000-01-19',
  description: 'desc',
};

const responseMessage: Property = {
  type: 'string',
  example: 'Logged in successfully.',
};

const responseToken: Property = {
  type: 'string',
  example: 'JWT token',
};

const userLoginResponseSchema: Schema = {
  type: 'object',
  properties: {
    message: responseMessage,
    token: responseToken,
    user: { $ref: '#/components/schemas/User' },
  },
};

const userLoginRequestSchema: Schema = {
  required: ['email', 'password'],
  type: 'object',
  properties: {
    email,
    password,
  },
};

const userSchema: Schema = {
  type: 'object',
  properties: {
    username,
    email,
    initialWeight,
    goalWeight,
    height,
    activityLevel,
    dateOfBirth,
  },
};

const usersPath: Array<Path> = [
  [
    '/users/login',
    {
      post: {
        security: [],
        tags: ['Users'],
        summary: 'Login a user given its email and password',
        operationId: 'loginUser',
        requestBody: {
          content: {
            'application/json': {
              schema: { $ref: '#/components/schemas/UserLoginRequest' },
            },
          },
          required: true,
        },
        responses: buildResponses([
          [200, 'Logged in successfully', 'UserLoginResponse'],
          [401, 'Invalid email and/or password'],
        ]),
      },
    },
  ],
];

export {
  usersTag,
  userLoginRequestSchema,
  userLoginResponseSchema,
  userSchema,
  usersPath,
};
