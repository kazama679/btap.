import CartItem from './CartItem'; 
const ListCart = ({ products, onRemove }) => { 
  return (
    <div>
      {products.map((product, index) => (
        <CartItem key={index} product={product} onRemove={onRemove} />
      ))}
    </div>
  );
};
export default ListCart;