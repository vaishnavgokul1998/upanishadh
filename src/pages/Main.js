import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './component/header/Header';

const Main = () => {
    return ( 
        <>
          <Header/>
          <Outlet/>
        </>
     );
}
 
export default Main;