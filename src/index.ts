import fs from 'fs';
import swaggerDocument from './swaggerDocument';

const htmlIndex = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Nutrition Tracker API Documentation</title>
    <link rel="stylesheet" href="swaggerCustomStyles.css" />
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
    <link rel="manifest" href="/site.webmanifest" />
    <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
    <link
      rel="stylesheet"
      href="https://unpkg.com/swagger-ui-dist@4.5.0/swagger-ui.css"
    />
    <meta name="msapplication-TileColor" content="#da532c" />
    <meta name="theme-color" content="#ffffff" />
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta
      name="description"
      content="an API that is used to register users, authorize them and track their daily weight & nutrition consumption"
    />
  </head>
  <body>
    <div id="swagger-ui" style="max-width: 100%;"></div>
    <script
      src="https://unpkg.com/swagger-ui-dist@4.5.0/swagger-ui-bundle.js"
      crossorigin
    ></script>
    <script>
      window.onload = () => {
        window.ui = SwaggerUIBundle({
          url: "nutrition-tracker-schema.json",
          dom_id: "#swagger-ui",
          presets: [SwaggerUIBundle.presets.apis],
        });
      };
    </script>
  </body>
</html>
`;

async function main() {
  await Promise.all([
    fs.promises.writeFile('.output/index.html', htmlIndex),
    fs.promises.writeFile(
      '.output/nutrition-tracker-schema.json',
      JSON.stringify(swaggerDocument),
    ),
  ]);
}

main();
