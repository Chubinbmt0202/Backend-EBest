// models/LichGiangDay.js
const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db');

const LichGiangDay = sequelize.define('LichGiangDay', {
    idLichGiangDay: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    idGiaoVien: {
        type: DataTypes.INTEGER,
        references: {
            model: 'GiaoVien',
            key: 'idGiaoVien'
        }
    },
    ngayDay: {
        type: DataTypes.DATE,
        allowNull: false
    },
    gioBatDau: {
        type: DataTypes.TIME,
        allowNull: false
    },
    gioKetThuc: {
        type: DataTypes.TIME,
        allowNull: false
    },
    phongHoc: {
        type: DataTypes.STRING(255),
        allowNull: false
    }
}, {
    tableName: 'LichGiangDay',
    timestamps: false
});


module.exports = LichGiangDay;
