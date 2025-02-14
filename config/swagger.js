const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Kompyuter klubi API",
      version: "1.0.0",
      description: "Kompyuter o‘yin klubi uchun API hujjatlari",
    },
    servers: [
      {
        url: "http://63.177.173.107:5000",
      },
    ],
    components: {
      securitySchemes: {
        BearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT", // Tokenni JWT formatida kiritishingiz mumkin
        },
      },
    },
    security: [
      {
        BearerAuth: [], 
      },
    ],
  },
  apis: ["./routes/*.js"], 
};

const swaggerSpec = swaggerJsdoc(options);

const setupSwagger = (app) => {
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
};

module.exports = setupSwagger;
