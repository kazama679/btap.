import ListCart from './bai11/ListCart'; 

const Bai11 = () => {
  const products = [
    { id: 1, product_name: 'Iphone 11 pro', image: 'https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img1.webp', description: '256GB, Navy Blue', quantity: 2, price: 900 },
    { id: 2, product_name: 'Samsung galaxy Note 10', image: 'https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img2.webp', description: '256GB, Navy Blue', quantity: 2, price: 900 },
    { id: 3, product_name: 'Canon EOS M50', image: 'https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img3.webp', description: 'Onyx Black', quantity: 1, price: 1199 },
    { id: 4, product_name: 'MacBook Pro', image: 'https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img4.webp', description: '1TB, Graphite', quantity: 1, price: 1799 }
  ];
  return (
    <section className="h-100 h-custom" style={{ backgroundColor: '#eee' }}>
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col">
            <div className="card">
              <div className="card-body p-4">
                <div className="row">
                  <div className="col-lg-7">
                    <h5 className="mb-3"><a href="#!" className="text-body"><i className="fas fa-long-arrow-alt-left me-2"></i>Continue shopping</a></h5>
                    <hr />
                    <div className="d-flex justify-content-between align-items-center mb-4">
                      <div>
                        <p className="mb-1">Shopping cart</p>
                        <p className="mb-0">You have {products.length} items in your cart</p>
                      </div>
                      <div>
                        <p className="mb-0"><span className="text-muted">Sort by:</span> <a href="#!" className="text-body">price <i className="fas fa-angle-down mt-1"></i></a></p>
                      </div>
                    </div>
                    <ListCart products={products} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Bai11;