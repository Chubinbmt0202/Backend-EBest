// app.js
require('dotenv').config(); // Tải các biến môi trường từ .env
require('./models/relationships');
const express = require('express');
const cors = require('cors');
const { connectDB } = require('./config/db');
const teacherRoutes = require('./routers/teacherRouter');

const app = express();
app.use(express.json());
app.use(cors());

// Kết nối tới MySQL
connectDB();

// Sử dụng routes
app.use('/api', teacherRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
