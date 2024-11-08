// models/BaiTap.js
const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db');
const BaiTap = sequelize.define('BaiTap', {
    idBaitap: {
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
    idNguoiDung: {
        type: DataTypes.INTEGER,
        references: {
            model: 'NguoiDung',
            key: 'idNguoiDung'
        }
    },
    idKhoaHoc: {
        type: DataTypes.INTEGER,
        references: {
            model: 'KhoaHoc',
            key: 'idKhoaHoc'
        }
    },
    tenBaiTap: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    mota: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    ngayTao: {
        type: DataTypes.DATE,
        allowNull: false
    },
    hanNop: {
        type: DataTypes.DATE,
        allowNull: false
    }
}, {
    tableName: 'BaiTap',
    timestamps: false
});


module.exports = BaiTap;
