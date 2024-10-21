import mysql from 'mysql2/promise'; // Use promise-based mysql2 for better async support

// createConnection
const sqlConnection = async () => {
    try {
        const connection = await mysql.createConnection({
            host: process.env.SQL_HOST,
            port: process.env.SQL_PORT,
            user: process.env.SQL_USER,
            password: process.env.SQL_PASSWORD,
            database: 'vsCode_data'
          });
        console.log('Database connected as id', connection.threadId);
        return connection;
    } catch (error) {
        console.error('Database connection failed:', error.stack);
    throw error;
    }
};

// createPool
// const sqlConnection = async () => {
//     try {
//         const connection = mysql.createPool({
//             host: process.env.SQL_HOST,
//             port: process.env.SQL_PORT,
//             user: process.env.SQL_USER,
//             password: process.env.SQL_PASSWORD,
//             database: 'vsCode_data',
//             waitForConnections: true,
//             connectionLimit: 10, // Set a reasonable connection limit
//             queueLimit: 0 // Unlimited connection requests
//           });
//         console.log('Database connected as id');
//         return connection;
//     } catch (error) {
//         console.error('Database connection failed:', error.stack);
//     throw error;
//     }
// };

export default sqlConnection;