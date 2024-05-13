
export default function Header() {
  return (
    <div>
      <h1 style={{marginLeft:"300px", marginBottom:"25px"}}>Quản lý công việc</h1>
      <div>
        <input className="input" type="text" placeholder="Thêm công việc"/>
        <button>Thêm</button>
      </div>
    </div>
  )
}
