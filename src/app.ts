import express from 'express';
import path from 'path';
import swaggerUI, { SwaggerUiOptions } from 'swagger-ui-express';
import {
  usersTag,
  userLoginRequestSchema,
  userLoginResponseSchema,
  usersPath,
  userSchema,
  userSignupRequestSchema,
  userSignupResponseSchema,
  loggedInUserResponseSchema,
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

const options: SwaggerUiOptions = {
  customSiteTitle: 'Nutrition Tracker API Documentation',
  customfavIcon: 'logo.svg',
  customCss: `.topbar-wrapper img {content: url(logo.svg)}`,
};

app.use('/logo.svg', express.static(path.join(__dirname, 'logo.svg')));

// register swagger
app.use(
  '/',
  swaggerUI.serve,
  swaggerUI.setup(
    {
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
          User: userSchema,
          UserLoginRequest: userLoginRequestSchema,
          UserLoginResponse: userLoginResponseSchema,
          UserSignupRequest: userSignupRequestSchema,
          UserSignupResponse: userSignupResponseSchema,
          LoggedInUserResponse: loggedInUserResponseSchema,
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
    },
    options,
  ),
);

export default app;
