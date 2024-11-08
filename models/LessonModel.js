// models/Baihoc.js
const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db');

const Baihoc = sequelize.define('Baihoc', {
    idChuong: {
        type: DataTypes.INTEGER,
        references: {
            model: 'Chuong',
            key: 'idChuong'
        }
    },
    idBaihoc: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    tenBaihoc: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    moTa: {
        type: DataTypes.TEXT,
        allowNull: true
    }
}, {
    tableName: 'Baihoc',
    timestamps: false
});


module.exports = Baihoc;
