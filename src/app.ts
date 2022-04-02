import express from "express"
import swaggerUI from "swagger-ui-express";
import {
  usersTag,
  userLoginRequestSchema,
  userLoginResponseSchema,
  usersPath,
  userSchema,
} from "./users";

// the app is an express module that has all the express features
const app = express();

const bearerToken = `Bearer ${process.env.BEARER_TOKEN || "bearer token"} `;
const info = {
  info: {
    title: "Nutrition Tracker API",
    description:
      "This API is used to register users, authorize them and track their daily weight & nutrition consumption",
    version: "1.0.0",
  },
};

// register swagger
app.use(
  "/",
  swaggerUI.serve,
  swaggerUI.setup({
    openapi: "3.0.2",
    ...info,
    servers: [{ url: process.env.HOST_NAME }],
    tags: [usersTag],
    paths: {
      ...usersPath,
    },
    components: {
      securitySchemes: {
        bearerAuth: { type: "http", scheme: "bearer", bearerFormat: "JWT" },
      },
      schemas: {
        UserLoginRequest: userLoginRequestSchema,
        UserLoginResponse: userLoginResponseSchema,
        User: userSchema,
        ApiErrorResponse: {
          type: "object",
          properties: {
            message: {
              type: "string",
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
  })
);
module.exports = app;
