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

const signupResponseMessage: Property = {
  type: 'string',
  example: 'User {{username}} has been created successfully.',
};

const responseToken: Property = {
  type: 'string',
  example: 'JWT token',
};

const userLoginRequestSchema: Schema = {
  type: 'object',
  properties: {
    email,
    password,
  },
  required: ['email', 'password'],
};

const userLoginResponseSchema: Schema = {
  type: 'object',
  properties: {
    message: responseMessage,
    token: responseToken,
    user: { $ref: '#/components/schemas/User' },
  },
};

const userSignupRequestSchema: Schema = {
  type: 'object',
  properties: {
    username,
    email,
    password,
    initialWeight,
    goalWeight,
    height,
    activityLevel,
    dateOfBirth,
  },
  required: [
    'username',
    'email',
    'password',
    'initialWeight',
    'goalWeight',
    'height',
    'activityLevel',
    'dateOfBirth',
  ],
};

const userSignupResponseSchema: Schema = {
  type: 'object',
  properties: {
    message: signupResponseMessage,
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

const loggedInUserResponseSchema: Schema = {
  type: 'object',
  properties: {
    user: { $ref: '#/components/schemas/User' },
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
          [401, 'Incorrect email and/or password'],
        ]),
      },
    },
  ],
  [
    '/users/signup',
    {
      post: {
        security: [],
        tags: ['Users'],
        summary: 'Register a user',
        operationId: 'registerUser',
        requestBody: {
          content: {
            'application/json': {
              schema: { $ref: '#/components/schemas/UserSignupRequest' },
            },
          },
          required: true,
        },
        responses: buildResponses([
          [
            201,
            'User {{username}} has been created successfully.',
            'UserSignupResponse',
          ],
          [409, 'Email {{provided email}} already exists.'],
        ]),
      },
    },
  ],
  [
    '/users',
    {
      get: {
        tags: ['Users'],
        summary: 'Retrieve the logged in user information',
        operationId: 'getLoggedInUser',
        responses: buildResponses([
          [200, '', 'LoggedInUserResponse'],
          [401, 'Authentication failed'],
        ]),
      },
    },
  ],
];

export {
  usersTag,
  userLoginRequestSchema,
  userLoginResponseSchema,
  userSignupRequestSchema,
  userSignupResponseSchema,
  loggedInUserResponseSchema,
  userSchema,
  usersPath,
};
