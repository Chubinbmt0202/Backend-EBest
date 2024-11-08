// models/GiaoVien.js
const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db');

const GiaoVien = sequelize.define('GiaoVien', {
    idGiaoVien: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    idNguoiDung: {
        type: DataTypes.INTEGER,
        references: {
            model: 'NguoiDung',
            key: 'idNguoiDung'
        }
    },
    idKhoaHoc: {
        type: DataTypes.INTEGER,
        references: {
            model: 'KhoaHoc',
            key: 'idKhoaHoc'
        }
    },
    kinhNghiem: {
        type: DataTypes.TEXT,
        allowNull: true
    }
}, {
    tableName: 'GiaoVien',
    timestamps: false
});


module.exports = GiaoVien;
