// Note: With mysql2 we can not create schema //
// the below are custom functions not schema //


// Define the User model with a constructor function
const User = function (user) {
  this.name = user.name;
  this.email = user.email;
};

User.getAll = async (connection) => {
  try {
    const [rows] = await connection.execute('SELECT * FROM users');
    return rows;
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error;
  }
};

// User.getAll = (result)=>{
//     connection.query('SELECT * FROM users', (err, res) => {
//         if (err) {
//             console.log('Error fetching users:', err);
//             result(err, null);
//             return;
//         }
//         result(null, res);
//     });
// };

// Create the `users` table
// User.createTable = () => {
//     const createTableQuery = `
//         CREATE TABLE IF NOT EXISTS users (
//             id INT AUTO_INCREMENT PRIMARY KEY,
//             name VARCHAR(100),
//             email VARCHAR(100) UNIQUE,
//             password VARCHAR(255),
//             created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
//         )
//     `;
//     connection.query(createTableQuery, (err, res) => {
//         if (err) throw err;
//         console.log('Users table created successfully!');
//     });
// };

// Insert a new user
// User.create = (newUser, result) => {
//     const query = 'INSERT INTO users SET ?';
//     connection.query(query, newUser, (err, res) => {
//         if (err) {
//             console.log('Error inserting user:', err);
//             result(err, null);
//             return;
//         }
//         console.log('User created:', { id: res.insertId, ...newUser });
//         result(null, { id: res.insertId, ...newUser });
//     });
// };


// Fetch all users
// User.getAll = (result) => {
//     const query = 'SELECT * FROM users';
//     connection.query(query, (err, res) => {
//         if (err) {
//             console.log('Error fetching users:', err);
//             result(err, null);
//             return;
//         }
//         result(null, res);
//     });
// };


export default User;