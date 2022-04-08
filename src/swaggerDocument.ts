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
  retrieveAllFoodsResponseSchema,
  foodSchema,
  updateFoodSchema,
  updateFoodResponseSchema,
} from './routes/foods';

import {
  recordSchema,
  recordsPaths,
  recordsTag,
  addRecordResponseSchema,
  retrieveRecordsResponseSchema,
} from './routes/records';

import {
  addMetricResponseSchema,
  metricSchema,
  metricsPaths,
  metricsTag,
  retrieveMetricsResponseSchema,
} from './routes/metrics';

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
  tags: [usersTag, foodsTag, recordsTag, metricsTag],
  paths: {
    ...reducePaths(usersPath),
    ...reducePaths(foodsPaths),
    ...reducePaths(recordsPaths),
    ...reducePaths(metricsPaths),
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
      UpdateFood: updateFoodSchema,
      AddFoodResponse: addFoodResponseSchema,
      RetrieveFoodsResponse: retrieveFoodsResponseSchema,
      RetrieveAllFoodsResponse: retrieveAllFoodsResponseSchema,
      UpdateFoodResponse: updateFoodResponseSchema,
      Record: recordSchema,
      AddRecordResponse: addRecordResponseSchema,
      RetrieveRecordsResponse: retrieveRecordsResponseSchema,
      Metric: metricSchema,
      AddMetricResponse: addMetricResponseSchema,
      RetrieveMetricsResponse: retrieveMetricsResponseSchema,
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
