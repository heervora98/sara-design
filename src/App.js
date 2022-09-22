import logo from './logo.svg';
import './App.css';

import Category from "./category/index";
import Products from "./Product/index"
import Demo from './demo/demo';
import Carousels from "./carousel/index"
import { useEffect, useState } from 'react';
// import { loader } from "../public/assets/loader/loader.gif"

function App() {

  const [loader, setLoader] = useState(false)

  const loaderSetting = () => {
    setTimeout(() => {
      setLoader(!loader)
    }, 2000)
  }

  useEffect(() => {
    loaderSetting()
  }, [])

  return (
    <>
      {
        !loader ?
          <img src="/assets/loader/loader.gif" alt="" className='loader-gif'/> :
          <>
            <Carousels />
            <Category />
            <Products />
            <Demo />
          </>
      }


    </>
  );
}

export default App;
