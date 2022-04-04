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

const info = {
  info: {
    title: 'Nutrition Tracker API',
    description:
      'This API is used to register users, authorize them and track their daily weight & nutrition consumption',
    version: '1.0.0',
  },
};

export default {
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
};
