import { buildResponses } from "./utilities";

const usersTag = {
  name: "Users",
  description: "The users Managing API",
};

const username = { type: "string", example: "Ahmad" };

const email = { type: "string", format: "email", example: "demo@gmail.com" };

const password = { type: "string", format: "password", example: "demo12345" };

const initialWeight = {
  type: "number",
  format: "kg",
  example: 73,
  description: "The user's initial weight in 'kg'",
};

const goalWeight = {
  type: "number",
  format: "kg",
  example: 70,
  description: "The weight which the user aspires to reach in 'kg'",
};

const height = {
  type: "number",
  format: "cm",
  example: 170,
};

const activityLevel = {
  type: "number",
  example: 1.2,
  description: "desc",
};

const dateOfBirth = {
  type: "string",
  format: "date yyyy-mm-dd",
  example: "2000-01-19",
  description: "desc",
};

const userLoginRequestSchema = {
  required: ["email", "password"],
  type: "object",
  properties: {
    email,
    password,
  },
};

const responseMessage = {
  type: "string",
  example: "Logged in successfully.",
};

const responseToken = {
  type: "string",
  example: "JWT token",
};

const userSchema = {
  type: "object",
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

const userLoginResponseSchema = {
  type: "object",
  properties: {
    message: responseMessage,
    token: responseToken,
    user: { $ref: "#/components/schemas/User" },
  },
};

const usersPath = {
  "/users/login": {
    post: {
      security: {},
      tags: ["Users"],
      summary: "Login a user given its email and password",
      operationId: "loginUser",
      requestBody: {
        content: {
          "application/json": {
            schema: { $ref: "#/components/schemas/UserLoginRequest" },
          },
        },
        required: true,
      },
      responses: buildResponses([
        [200, "Logged in successfully", "UserLoginResponse"],
        [401, "Invalid email and/or password"],
      ]),
    },
  },
  "/users/loggedIn/metrics": {
    get: {
      tags: ["Users"],
      summary: "Get the logged in user metrics",
      operationId: "sth",
    },
  },
};

export {
  usersTag,
  userLoginRequestSchema,
  userLoginResponseSchema,
  userSchema,
  usersPath,
};
