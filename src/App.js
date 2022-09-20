import logo from './logo.svg';
import './App.css';

import Category from "./category/index";
import Products from "./Product/index"
import Demo from './demo/demo';
import Carousels from "./carousel/index"

function App() {
  return (
    <>
      
      <Carousels />
      <Category />
      <Products />
      <Demo />
    </>
  );
}

export default App;
