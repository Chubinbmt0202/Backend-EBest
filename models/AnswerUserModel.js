// models/DapAnHocVien.js
const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db');

const DapAnHocVien = sequelize.define('DapAnHocVien', {
    idDapAnHocVien: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    idCauHoi: {
        type: DataTypes.INTEGER,
        references: {
            model: 'CauHoi',
            key: 'idCauHoi'
        }
    },
    idNguoiDung: {
        type: DataTypes.INTEGER,
        references: {
            model: 'NguoiDung',
            key: 'idNguoiDung'
        }
    },
    luaChon: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    tableName: 'DapAnHocVien',
    timestamps: false
});

module.exports = DapAnHocVien;
