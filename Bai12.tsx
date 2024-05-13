import Control from './bai12/Control';
import StudentList from './bai12/StudentList';
import StudentForm from './bai12/StudentForm';

function Bai12() {
  return (
    <div className="row">
      <div className="col-lg-7 grid-margin stretch-card">
        <Control />
        <StudentList />
      </div>
      <div className="col-5 grid-margin">
        <StudentForm />
      </div>
    </div>
  );
}
export default Bai12;