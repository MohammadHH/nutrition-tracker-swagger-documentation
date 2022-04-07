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

import {
  foodsTag,
  foodsPaths,
  addFoodResponseSchema,
  retrieveFoodsResponseSchema,
  foodSchema,
} from './routes/foods';
import { reducePaths } from './utilities';

const info = {
  info: {
    title: 'Nutrition Tracker API',
    description:
      'This API is used to register users, authorize them and track their daily weight & nutrition consumption',
    version: '1.0.0',
  },
};

const swaggerDoc = {
  openapi: '3.0.2',
  ...info,
  servers: [{ url: process.env.SERVER_PATH }],
  tags: [usersTag, foodsTag],
  paths: {
    ...reducePaths(usersPath),
    ...reducePaths(foodsPaths),
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
      Food: foodSchema,
      AddFoodResponse: addFoodResponseSchema,
      RetrieveFoodsResponse: retrieveFoodsResponseSchema,
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

export default swaggerDoc;
