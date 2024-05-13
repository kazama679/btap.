import Cart from "./Cart";
import Menu from "./Menu";

const Main = () => {
  
  return (
    <div style={{display:"flex"}}>
      <div>
        <Menu></Menu>
      </div>
      <div>
          <Cart></Cart>
      </div>
      <div className="article">
        article
    </div>
    </div>
  );
}
export default Main;