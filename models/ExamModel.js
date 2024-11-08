// models/BoDe.js
const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db');
const BoDe = sequelize.define('BoDe', {
    idBoDe: {
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
    idCauHoi: {
        type: DataTypes.INTEGER,
        references: {
            model: 'CauHoi',
            key: 'idCauHoi'
        }
    },
    ngayTao: {
        type: DataTypes.DATE,
        allowNull: false
    }
}, {
    tableName: 'BoDe',
    timestamps: false
});


module.exports = BoDe;
