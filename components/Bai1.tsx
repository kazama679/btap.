// import React from 'react'

export default function Bai1() {
  return (
    <div>
        <h3>Danh sách khóa học</h3>
        <p>1. HTML</p>
        <p>2. CSS</p>
        <p>3. JavaScript</p>
        <p>4. ReactJS</p>
    </div>
  )
}


/*
import React from 'react'
interface Product{
    name:string,
    price:number,
    id:number
}
export default function Bai1() {
    // render dữ liệu đối với function component
    let fullName:string = "Minh Thu";
    let age:number = 25;
    let student = {
        name:'hoa',
        age:20,
        address: 'Hà Nội'
    }
    let numbers:number[]=[1,23,34,5,6];
    let students:string[]=['thu', 'ngoc'];

    // khai báo kiểu dữ liệu interface
    let products:Product[]=[
        {
            name: 'iphone5',
            price: 5000,
            id: 1
        },
        {
            name: 'iphone6',
            price: 6000,
            id: 12
        }
        ,
        {
            name: 'iphone7',
            price: 11000,
            id: 13
        }
    ]
  return (
    <div>
        <p>Bài tập 1</p>
        <p>Nội dung bài tập</p>
        <p>Hiển thị fullName: {fullName}</p>
        <p>{fullName} năm nay {age} tuổi!</p>
        <p>{student.name}</p>
        <p>chuyển sang dạng JSON để hiển thị {JSON.stringify(student)}</p>
        <p>hiển thị array(mảng)</p>
        <p>{numbers.map((a,b,c)=>{
            return <li key={b}>{a}</li>
        })}</p>
        <p>{students.map((a,b,c)=>{
            return <li key={b}>{a}</li>
        })}</p>
        <table>
            <thead>
                <tr>
                    <th>STT</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>ID</th>
                </tr>
            </thead>
            <tbody>
            {products.map((a,b,c)=>{
                return <tr key={a.id}>
                            <td>{b+1}</td>
                            <td>{a.name}</td>
                            <td>{a.price}</td>
                            <td>{a.id}</td>
                        </tr>
            })}
                
            </tbody>
        </table>
    </div>
      )
    }
    
*/