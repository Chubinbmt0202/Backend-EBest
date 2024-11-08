// models/ThongBao.js
const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db');
const ThongBao = sequelize.define('ThongBao', {
    idThongBao: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    idNguoiGui: {
        type: DataTypes.INTEGER,
        references: {
            model: 'NguoiDung',
            key: 'idNguoiDung'
        }
    },
    idNguoiNhan: {
        type: DataTypes.INTEGER,
        references: {
            model: 'NguoiDung',
            key: 'idNguoiDung'
        }
    },
    tieuDe: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    noiDung: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    ngayGui: {
        type: DataTypes.DATE,
        allowNull: false
    }
}, {
    tableName: 'ThongBao',
    timestamps: false
});


module.exports = ThongBao;
