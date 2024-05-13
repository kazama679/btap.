function Control() {
    return (
      <div className="card">
        <div className="card-header">
          <div className="row">
            <div className="col-3">
              <button type="button" className="btn btn-primary btn-icon-text">
                <span className="icon">Thêm mới sinh viên</span>
              </button>
            </div>
            <div className="col-6">
              <form className="search-form" action="#">
                <i className="icon-search"></i>
                <input
                  type="search"
                  className="form-control"
                  placeholder="Search Here"
                  title="Search here"
                />
                <button type="submit" className="btn btn-primary btn-icon-text">
                  <span className="icon">Tìm kiếm</span>
                </button>
              </form>
            </div>
            <div className="col-3 d-flex align-items-center">
              <select className="form-control">
                <option value="">Sắp xếp</option>
                <option value="">ABC def</option>
                <option value="">ABC def</option>
                <option value="">ABC def</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    );
  }
  export default Control;