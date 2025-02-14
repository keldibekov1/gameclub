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
        url: "http://63.177.173.107:5000/api-docs",
        description: "Lokal server",
      },
    ],
  },
  apis: ["./routes/*.js"], // Barcha route fayllarini Swagger'ga qo‘shish
};

const swaggerSpec = swaggerJsdoc(options);

const setupSwagger = (app) => {
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
};

module.exports = setupSwagger;
