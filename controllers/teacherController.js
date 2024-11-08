// controllers/teacherController.js
const Teacher = require('../models/TeacherModel');

// Lấy tất cả giáo viên
const getAllTeachers = async () => {
    try {
        const teachers = await Teacher.findAll();
        return teachers;
    } catch (error) {
        console.error('Error retrieving teachers:', error.message);
        throw error;
    }
};

// Lấy giáo viên theo ID
const getTeacherById = async (id) => {
    try {
        const teacher = await Teacher.findOne({ where: { id } });
        return teacher;
    } catch (error) {
        console.error('Error retrieving teacher:', error.message);
        throw error;
    }
};

module.exports = { getAllTeachers, getTeacherById };
