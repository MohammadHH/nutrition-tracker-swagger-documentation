import express from 'express';
import path from 'path';
import swaggerUI, { SwaggerUiOptions } from 'swagger-ui-express';
import swaggerDoc from './swaggerDocument';

// the app is an express module that has all the express features
const app = express();

// serve page static assets
app.use('/logo.svg', express.static(path.join(__dirname, 'logo.svg')));
app.use(
  '/swaggerCustomJS.js',
  express.static(path.join(__dirname, 'swaggerCustomJS.js')),
);

const uiOptions: SwaggerUiOptions = {
  customSiteTitle: 'Nutrition Tracker API Documentation',
  customfavIcon: 'logo.svg',
  customCss: `.topbar-wrapper img {content: url(logo.svg)}`,
  customJs: 'swaggerCustomJS.js',
};

// register swagger
app.use('/', swaggerUI.serve, swaggerUI.setup(swaggerDoc, uiOptions));

export default app;
