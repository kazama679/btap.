// StudentList.js

function StudentList() {
  const students = [
    { id: 1, maSV: 'SV001', tenSV: 'Nguyễn Văn A', tuoi: 20, gioiTinh: 'Nam' },
    { id: 2, maSV: 'SV002', tenSV: 'Nguyễn Văn B', tuoi: 21, gioiTinh: 'Nữ' },
    { id: 3, maSV: 'SV003', tenSV: 'Nguyễn Văn C', tuoi: 19, gioiTinh: 'Nam' },
  ];

  return (
    <div className="card-body">
      <h3 className="card-title">Danh sách sinh viên</h3>
      <div className="table-responsive pt-3">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>#</th>
              <th>Mã sinh viên</th>
              <th>Tên sinh viên</th>
              <th>Tuổi</th>
              <th>Giới tính</th>
              <th>Hành động</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{student.maSV}</td>
                <td>{student.tenSV}</td>
                <td>{student.tuoi}</td>
                <td>{student.gioiTinh}</td>
                <td>
                  <div className="template-demo">
                    <button type="button" className="btn btn-danger btn-sm mr-2">
                      Xem
                    </button>
                    <button type="button" className="btn btn-warning btn-sm mr-2">
                      Sửa
                    </button>
                    <button type="button" className="btn btn-success btn-sm">
                      Xóa
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default StudentList;
