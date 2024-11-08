// models/ThiThu.js
const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db');

const ThiThu = sequelize.define('ThiThu', {
    idBaithi: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    idNguoidung: {
        type: DataTypes.INTEGER,
        references: {
            model: 'NguoiDung',
            key: 'idNguoiDung'
        }
    },
    idBoDe: {
        type: DataTypes.INTEGER,
        references: {
            model: 'BoDe',
            key: 'idBoDe'
        }
    },
    diem: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    thoiGianBatDau: {
        type: DataTypes.DATE,
        allowNull: false
    },
    thoiGianKetThuc: {
        type: DataTypes.DATE,
        allowNull: false
    },
    ngayTao: {
        type: DataTypes.DATE,
        allowNull: false
    }
}, {
    tableName: 'ThiThu',
    timestamps: false
});

module.exports = ThiThu;
