import express from 'express';
import swaggerUI from 'swagger-ui-express';
import {
  usersTag,
  userLoginRequestSchema,
  userLoginResponseSchema,
  usersPath,
  userSchema,
} from './routes/users';

// the app is an express module that has all the express features
const app = express();

const info = {
  info: {
    title: 'Nutrition Tracker API',
    description:
      'This API is used to register users, authorize them and track their daily weight & nutrition consumption',
    version: '1.0.0',
  },
};

// register swagger
app.use(
  '/',
  swaggerUI.serve,
  swaggerUI.setup({
    openapi: '3.0.2',
    ...info,
    servers: [{ url: process.env.SERVER_PATH }],
    tags: [usersTag],
    paths: {
      ...usersPath.reduce(
        (curr, [pathName, pathItem]) => ({ ...curr, [pathName]: pathItem }),
        {},
      ),
    },
    components: {
      securitySchemes: {
        bearerAuth: { type: 'http', scheme: 'bearer', bearerFormat: 'JWT' },
      },
      schemas: {
        UserLoginRequest: userLoginRequestSchema,
        UserLoginResponse: userLoginResponseSchema,
        User: userSchema,
        ApiErrorResponse: {
          type: 'object',
          properties: {
            message: {
              type: 'string',
            },
          },
        },
      },
    },
    security: [
      {
        bearerAuth: [],
      },
    ],
  }),
);
module.exports = app;
