import logo from './logo.svg';
import './App.css';
import BottomNav from './navBar/BottomNav';
import Category from "./category/index";
import Products from "./Product/index"
import Demo from './demo/demo';
import Carousels from "./carousel/index"

function App() {
  return (
    <>
      <div style={{ zIndex: "100" }}>
        <BottomNav />
      </div>
      <Carousels/>
      <div style={{zIndex: "-2"}}>
        <Category />
      </div>
      <Products />
      <Demo />
    </>
  );
}

export default App;
