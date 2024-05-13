// StudentForm.js
import React, { useState } from 'react';

function StudentForm() {
  const [studentInfo, setStudentInfo] = useState({
    maSV: '',
    tenSV: '',
    tuoi: '',
    gioiTinh: '',
    ngaySinh: '',
    noiSinh: '',
    diaChi: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudentInfo({
      ...studentInfo,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(studentInfo);
    // Add your logic to submit the student information here
  };

  return (
    <div className="card">
      <div className="card-body">
        <h3 className="card-title">Thông tin sinh viên</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-3 row">
            <label htmlFor="maSV" className="col-sm-3 col-form-label">Mã sinh viên</label>
            <div className="col-sm-9">
              <input type="text" className="form-control" id="maSV" name="maSV" value={studentInfo.maSV} onChange={handleChange} />
            </div>
          </div>
          <div className="mb-3 row">
            <label htmlFor="tenSV" className="col-sm-3 col-form-label">Tên sinh viên</label>
            <div className="col-sm-9">
              <input type="text" className="form-control" id="tenSV" name="tenSV" value={studentInfo.tenSV} onChange={handleChange} />
            </div>
          </div>
          <div className="mb-3 row">
            <label htmlFor="tuoi" className="col-sm-3 col-form-label">Tuổi</label>
            <div className="col-sm-9">
              <input type="text" className="form-control" id="tuoi" name="tuoi" value={studentInfo.tuoi} onChange={handleChange} />
            </div>
          </div>
          <div className="mb-3 row">
            <label htmlFor="gioiTinh" className="col-sm-3 col-form-label">Giới tính</label>
            <div className="col-sm-9">
              <select className="form-select" id="gioiTinh" name="gioiTinh" value={studentInfo.gioiTinh} onChange={handleChange}>
                <option>Nam</option>
                <option>Nữ</option>
              </select>
            </div>
          </div>
          <div className="mb-3 row">
            <label htmlFor="ngaySinh" className="col-sm-3 col-form-label">Ngày sinh</label>
            <div className="col-sm-9">
              <input type="text" className="form-control" id="ngaySinh" name="ngaySinh" value={studentInfo.ngaySinh} onChange={handleChange} placeholder="dd/mm/yyyy" />
            </div>
          </div>
          <div className="mb-3 row">
            <label htmlFor="noiSinh" className="col-sm-3 col-form-label">Nơi sinh</label>
            <div className="col-sm-9">
              <select className="form-select" id="noiSinh" name="noiSinh" value={studentInfo.noiSinh} onChange={handleChange}>
                <option>Hà Nội</option>
                <option>TP. Hồ Chí Minh</option>
                <option>Đà Nẵng</option>
                <option>Quảng Ninh</option>
              </select>
            </div>
          </div>
          <div className="mb-3 row">
            <label htmlFor="diaChi" className="col-sm-3 col-form-label">Địa chỉ</label>
            <div className="col-sm-9">
              <textarea className="form-control" id="diaChi" name="diaChi" value={studentInfo.diaChi} onChange={handleChange}></textarea>
            </div>
          </div>
          <div className="text-end">
            <button type="submit" className="btn btn-primary">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default StudentForm;