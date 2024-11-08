// models/Chuong.js
const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db');

const Chuong = sequelize.define('Chuong', {
    idChuong: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    idLop: {
        type: DataTypes.INTEGER,
        references: {
            model: 'Lop',
            key: 'idLop'
        }
    },
    tenChuong: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    moTa: {
        type: DataTypes.TEXT,
        allowNull: true
    }
}, {
    tableName: 'Chuong',
    timestamps: false
});

module.exports = Chuong;
