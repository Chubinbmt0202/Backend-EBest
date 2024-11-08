// models/BinhLuan.js
const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db');

const BinhLuan = sequelize.define('BinhLuan', {
    idBinhLuan: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    idNguoiBinhLuan: {
        type: DataTypes.INTEGER,
        references: {
            model: 'NguoiDung',
            key: 'idNguoiDung'
        }
    },
    noiDung: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    ngayBinhLuan: {
        type: DataTypes.DATE,
        allowNull: false
    }
}, {
    tableName: 'BinhLuan',
    timestamps: false
});


module.exports = BinhLuan;
