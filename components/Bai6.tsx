interface Name {
  firstName: string
  lastName: string
}
export default function Bai2() {
    const formatName:Name={
      firstName: 'Nguyễn Xuân',
      lastName: 'Quang'
    }
    return (
      <div>
        Họ và tên: {formatName.firstName} {formatName.lastName}
      </div>
    )
  }