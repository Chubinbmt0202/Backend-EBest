// models/CauHoi.js
const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db');

const CauHoi = sequelize.define('CauHoi', {
    idCauHoi: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    idBaihoc: {
        type: DataTypes.INTEGER,
        references: {
            model: 'Baihoc',
            key: 'idBaihoc'
        }
    },
    imageCauhoi: {
        type: DataTypes.STRING,
        allowNull: true
    },
    tenCauhoi: {
        type: DataTypes.STRING,
        allowNull: false
    },
    loaiCauhoi: {
        type: DataTypes.ENUM('tracnghiem', 'tuluan'),
        allowNull: false
    },
    luaChon: {
        type: DataTypes.JSON,
        allowNull: true
    },
    dapAnDung: {
        type: DataTypes.STRING,
        allowNull: false
    },
    diem: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    tableName: 'CauHoi',
    timestamps: false
});

module.exports = CauHoi;
