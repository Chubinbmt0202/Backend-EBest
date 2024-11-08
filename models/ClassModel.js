// models/Lop.js
const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db');

const Lop = sequelize.define('Lop', {
    idLop: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    tenLop: {
        type: DataTypes.STRING,
        allowNull: false
    },
    idChuong: {
        type: DataTypes.INTEGER,
        references: {
            model: 'Chuong',
            key: 'idChuong'
        }
    },
    idKhoaHoc: {
        type: DataTypes.INTEGER,
        references: {
            model: 'KhoaHoc',
            key: 'idKhoaHoc'
        }
    }
}, {
    tableName: 'Lop',
    timestamps: false
});

module.exports = Lop;
