// import express from 'express';
import dotenv from 'dotenv';
dotenv.config({ path: './.env' });
import sqlConnection from './db/indexMysql2.js';
import { app, port } from './app.js';

// IIFE Immediately Invoke Function
(async () => {
    try {
        // connection
        const connection = await sqlConnection();
        app.locals.connection = connection; // Store connection in app locals for reuse across routes

        // pool
        // const connection = await sqlConnection();
        // app.locals.connection = connection;

        app.listen(port, () => {
            console.log(`Server is running on port: ${port}`);
        });
    } catch (error) {
        console.error('Error starting the server:', error);
    }
})();