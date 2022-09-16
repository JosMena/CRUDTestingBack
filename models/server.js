const express = require('express');
const cors    = require('cors');

const db = require('../database/connection');

class Server {

    constructor() {

        this.app = express();
        this.port = process.env.PORT;

        this.apiPaths = {
            users:  '/api/users',
        }

        // Métodos iniciales
        this.dbConnection();
        this.middlewares();
        this.routes();
    }

    async dbConnection() {
        try {
            await db.sync({ force: true }).then(() => {
                console.log('Database online');
            });

        } catch (error) {
            throw new Error('Unable to connect to database', error ); 
        }
    }

    middlewares() {

        // CORS
        this.app.use( cors() );

        // Lectura del body
        this.app.use( express.json() );
        
    }

    routes() {
        this.app.use(this.apiPaths.users, require('../routes/users') );
    }

    listen() {

        this.app.listen( this.port, () => {
            console.log('Servidor corriendo en puerto', this.port );
        });
    }

}

module.exports = Server;