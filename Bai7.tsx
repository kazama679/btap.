import Footer from "./bai7/Footer";
import Header from "./bai7/Header";
import Main from "./bai7/Main";
import Menu from "./bai7/Menu";

export default function Bai7() {
  return (
    <div>
      <Header ></Header>
      <div className="style">
        <Menu ></Menu>
          <div className="style2">
            <Main ></Main>
            <Footer ></Footer>
        </div>
      </div>
    </div>
  )
}
