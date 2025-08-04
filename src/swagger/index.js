const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const user = require('./user');
const post = require('./post');

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Quản lý bài viết',
            version: '1.0.0',
        },
        servers: [
            { url: 'http://localhost:3000' }
        ],
        components: {
            securitySchemes: {
                bearerAuth: {
                    type: 'http',
                    scheme: 'bearer',
                    bearerFormat: 'JWT',
                }
            }
        },
        security: [
            {
                bearerAuth: [],
            }
        ],
    },
    apis: [__dirname + '/*.js'],

};

const swaggerSpec = swaggerJSDoc(options);

module.exports = {
    swaggerUi,
    swaggerSpec,
};
