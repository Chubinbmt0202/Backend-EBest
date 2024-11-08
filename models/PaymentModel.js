// models/Thanhtoan.js
const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db');

const Thanhtoan = sequelize.define('Thanhtoan', {
    idThanhtoan: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    idKhoahoc: {
        type: DataTypes.INTEGER,
        references: {
            model: 'KhoaHoc',
            key: 'idKhoaHoc'
        }
    },
    ngayThanhtoan: {
        type: DataTypes.DATE,
        allowNull: false
    },
    soTien: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
    },
    status: {
        type: DataTypes.ENUM('đã thanh toán', 'Chưa thanh toán'),
        allowNull: false
    }
}, {
    tableName: 'Thanhtoan',
    timestamps: false
});


module.exports = Thanhtoan;
