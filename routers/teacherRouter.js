// routes/teacherRoutes.js
const express = require('express');
const { getAllTeachers, getTeacherById } = require('../controllers/teacherController');

const router = express.Router();

// Route lấy tất cả giáo viên
router.get('/teachers', async (req, res) => {
    try {
        const teachers = await getAllTeachers();
        res.json(teachers);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching teachers' });
    }
});

// Route lấy giáo viên theo ID
router.get('/teachers/:id', async (req, res) => {
    try {
        const teacher = await getTeacherById(req.params.id);
        if (teacher) {
            res.json(teacher);
        } else {
            res.status(404).json({ message: 'Teacher not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error fetching teacher' });
    }
});

module.exports = router;
