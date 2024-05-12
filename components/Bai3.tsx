interface User{
  name:string;
  sex:string;
  date:string;
  email:string;
  address:string;
}

export default function Bai2() {
  
  const User1:User={
    name: 'Quang',
    sex:'Nam',  
    date:'02/07/2005',
    email:'quang@gmail.com',
    address:'Hà Nội',
  }
    return (
      <div>
      <h3>Hiển thị thông tin người dùng</h3>
      <p>Name: {User1.name}</p>
      <p>Sex: {User1.sex}</p>
      <p>Date: {User1.date}</p>
      <p>Email: {User1.email}</p>
      <p>Address: {User1.address}</p>
      </div>
    )
  }
  