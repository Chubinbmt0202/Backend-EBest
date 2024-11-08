// relationships.js
const NguoiDung = require('./UserModel');
const KhoaHoc = require('./CourseModel');
const ThanhToan = require('./PaymentModel');
const Chuong = require('./ChapterModel');
const BaiHoc = require('./LessonModel');
const DangKyKhoaHoc = require('./RegisterCourseModel');
const GiaoVien = require('./TeacherModel');
const BaiTap = require('./AssignmentModel');
const ThongBao = require('./NotificationModel');
const BinhLuan = require('./CommentModel');
const LichGiangDay = require('./ScheduleModel');
const ThiThu = require('./TestModel');
const BoDe = require('./ExamModel');
const CauHoi = require('./QuestionModel');
const DapAnHocVien = require('./AnswerUserModel');
const Lop = require('./ClassModel');

// Thiết lập các quan hệ giữa các bảng

// **NguoiDung** liên kết với nhiều **KhoaHoc** qua **DangKyKhoaHoc**
NguoiDung.hasMany(DangKyKhoaHoc, { foreignKey: 'isNguoiDung' });
DangKyKhoaHoc.belongsTo(NguoiDung, { foreignKey: 'isNguoiDung' });

// **KhoaHoc** có nhiều **Chuong**
KhoaHoc.hasMany(Chuong, { foreignKey: 'idKhoaHoc' });
Chuong.belongsTo(KhoaHoc, { foreignKey: 'idKhoaHoc' });

// **Chuong** có nhiều **BaiHoc**
Chuong.hasMany(BaiHoc, { foreignKey: 'idChuong' });
BaiHoc.belongsTo(Chuong, { foreignKey: 'idChuong' });

// **NguoiDung** liên kết với **KhoaHoc** qua **ThanhToan**
NguoiDung.hasMany(ThanhToan, { foreignKey: 'idNguoiDung' });
ThanhToan.belongsTo(NguoiDung, { foreignKey: 'idNguoiDung' });
KhoaHoc.hasMany(ThanhToan, { foreignKey: 'idKhoaHoc' });
ThanhToan.belongsTo(KhoaHoc, { foreignKey: 'idKhoaHoc' });

// **GiaoVien** liên kết với **NguoiDung**
NguoiDung.hasOne(GiaoVien, { foreignKey: 'idNguoiDung' });
GiaoVien.belongsTo(NguoiDung, { foreignKey: 'idNguoiDung' });

// **GiaoVien** có nhiều **BaiTap**
GiaoVien.hasMany(BaiTap, { foreignKey: 'idGiaoVien' });
BaiTap.belongsTo(GiaoVien, { foreignKey: 'idGiaoVien' });

// **NguoiDung** có nhiều **ThongBao**
NguoiDung.hasMany(ThongBao, { as: 'ThongBaoGui', foreignKey: 'idNguoiGui' });
NguoiDung.hasMany(ThongBao, { as: 'ThongBaoNhan', foreignKey: 'idNguoiNhan' });
ThongBao.belongsTo(NguoiDung, { as: 'NguoiGui', foreignKey: 'idNguoiGui' });
ThongBao.belongsTo(NguoiDung, { as: 'NguoiNhan', foreignKey: 'idNguoiNhan' });

// **BaiHoc** có nhiều **CauHoi**
BaiHoc.hasMany(CauHoi, { foreignKey: 'idBaihoc' });
CauHoi.belongsTo(BaiHoc, { foreignKey: 'idBaihoc' });

// **ThiThu** liên kết với **BoDe**
ThiThu.belongsTo(BoDe, { foreignKey: 'idBoDe' });
BoDe.hasMany(ThiThu, { foreignKey: 'idBoDe' });

// **NguoiDung** có thể thực hiện nhiều **BinhLuan**
NguoiDung.hasMany(BinhLuan, { foreignKey: 'idNguoiBinhLuan' });
BinhLuan.belongsTo(NguoiDung, { foreignKey: 'idNguoiBinhLuan' });

// **GiaoVien** có nhiều **LichGiangDay**
GiaoVien.hasMany(LichGiangDay, { foreignKey: 'idGiaoVien' });
LichGiangDay.belongsTo(GiaoVien, { foreignKey: 'idGiaoVien' });

// **CauHoi** có thể có nhiều **DapAnHocVien**
CauHoi.hasMany(DapAnHocVien, { foreignKey: 'idCauHoi' });
DapAnHocVien.belongsTo(CauHoi, { foreignKey: 'idCauHoi' });

// **NguoiDung** có thể có nhiều **DapAnHocVien**
NguoiDung.hasMany(DapAnHocVien, { foreignKey: 'idNguoiDung' });
DapAnHocVien.belongsTo(NguoiDung, { foreignKey: 'idNguoiDung' });

// **Lop** thuộc **Chuong** và **KhoaHoc**
Chuong.hasMany(Lop, { foreignKey: 'idChuong' });
KhoaHoc.hasMany(Lop, { foreignKey: 'idKhoaHoc' });
Lop.belongsTo(Chuong, { foreignKey: 'idChuong' });
Lop.belongsTo(KhoaHoc, { foreignKey: 'idKhoaHoc' });
