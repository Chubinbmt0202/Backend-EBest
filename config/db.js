const { Sequelize } = require('sequelize');

// Initialize Sequelize with database credentials
const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host: process.env.DB_HOST,
        dialect: 'mysql',
        port: process.env.DB_PORT,
    }
);

// Test the connection
const connectDB = async () => {
    try {
        await sequelize.authenticate();
        console.log('MySQL connected successfully');
    } catch (error) {
        console.error('MySQL connection failed:', error.message);
        process.exit(1);
    }
};

module.exports = { sequelize, connectDB };