import User from '../models/indexModelMysql2.js';

export const indexPage = async (req, res) => {
    try {
        const [rows] = await req.app.locals.connection.query('SELECT * FROM test');
        res.status(200).json(rows);
    } catch (error) {
        console.error('Error executing query:', err);
        res.status(500).json({ error: 'Failed to fetch data from the database' })
    }
};

export const getUsers = async (req, res) => {
    try {
        const users = await User.getAll(req.app.locals.connection);
        res.status(200).json(users);
    } catch (error) {
        res.status(500).send({ message: err.message }); 
    }
};
