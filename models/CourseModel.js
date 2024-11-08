// models/KhoaHoc.js
const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db');

const KhoaHoc = sequelize.define('KhoaHoc', {
    idKhoaHoc: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    tenKhoaHoc: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    moTa: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    ngayBatDau: {
        type: DataTypes.DATE,
        allowNull: false
    },
    ngayKetThuc: {
        type: DataTypes.DATE,
        allowNull: false
    },
    hocPhi: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
    }
}, {
    tableName: 'KhoaHoc',
    timestamps: false
});

module.exports = KhoaHoc;
