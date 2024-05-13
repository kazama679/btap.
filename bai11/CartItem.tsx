const CartItem = ({ product, onRemove }) => { 
  return (
    <div className="card mb-3">
      <div className="card-body">
        <div className="d-flex justify-content-between">
          <div className="d-flex flex-row align-items-center">
            <div>
              <img src={product.image} className="img-fluid rounded-3" alt="Shopping item" style={{ width: '65px' }} />
            </div>
            <div className="ms-3">
              <h5>{product.product_name}</h5>
              <p className="small mb-0">{product.description}</p>
            </div>
          </div>
          <div className="d-flex flex-row align-items-center">
            <div style={{ width: '50px' }}>
              <h5 className="fw-normal mb-0">{product.quantity}</h5>
            </div>
            <div style={{ width: '80px' }}>
              <h5 className="mb-0">${product.price}</h5>
            </div>
            <button onClick={() => onRemove(product)} style={{ color: '#cecece', cursor: 'pointer', border: 'none', background: 'none' }}>
              <i className="fas fa-trash-alt"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CartItem;