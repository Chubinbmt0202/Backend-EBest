// models/DangKyKhoaHoc.js
const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db');

const DangKyKhoaHoc = sequelize.define('DangKyKhoaHoc', {
    idDangKy: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    isNguoiDung: {
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
    ngayDangKy: {
        type: DataTypes.DATE,
        allowNull: false
    },
    trangThaiThanhToan: {
        type: DataTypes.ENUM('ChuaThanhToan', 'DaThanhToan'),
        allowNull: false
    }
}, {
    tableName: 'DangKyKhoaHoc',
    timestamps: false
});

module.exports = DangKyKhoaHoc;
