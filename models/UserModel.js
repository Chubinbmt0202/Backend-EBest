// models/NguoiDung.js
const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db');

const NguoiDung = sequelize.define('NguoiDung', {
    idNguoiDung: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    hoTen: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    email: {
        type: DataTypes.STRING(255),
        unique: true,
        allowNull: false
    },
    matKhau: {
        type: DataTypes.STRING(10),
        allowNull: false
    },
    SDT: {
        type: DataTypes.STRING(10),
        allowNull: true
    },
    diaChi: {
        type: DataTypes.STRING(255),
        allowNull: true
    },
    vaiTro: {
        type: DataTypes.ENUM('VangLai', 'HocVien', 'GiaoVien', 'Admin'),
        allowNull: false
    },
    trangThai: {
        type: DataTypes.ENUM('Active', 'Inactive'),
        allowNull: false
    },
    ngayDangKy: {
        type: DataTypes.DATE,
        allowNull: false
    }
}, {
    tableName: 'NguoiDung',
    timestamps: false
});

module.exports = NguoiDung;
