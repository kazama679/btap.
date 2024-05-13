import SonCart from './SonCart'

export default function Cart() {
  const N = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];
  return (
    <div className="cart">
      {N.map((a:number)=>{
        return <SonCart></SonCart>
      })}
    </div>
  )
}