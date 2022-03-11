const express = require("express");
const swaggerUI = require("swagger-ui-express");
const swaggerJsDoc = require("swagger-jsdoc");

const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Nutrition Tracker API",
      version: "1.0.0",
      description:
        "This API is used to register users, authorize them and track their daily weight & nutrition consumption",
    },
    servers: [
      {
        url:
          process.env.HOST_NAME ||
          "https://nutrition-tracker-rest-api.herokuapp.com/api/v1",
      },
    ],
  },
  apis: ["./api/routes/*.js"],
};

const swaggerSpecifications = swaggerJsDoc(swaggerOptions);

// the app is an express module that has all the express features
const app = express();

// register swagger
app.use("/", swaggerUI.serve, swaggerUI.setup(swaggerSpecifications));
module.exports = app;
