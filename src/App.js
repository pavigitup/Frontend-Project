import * as React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SideNavBar from './components/sideNavBar';
import Home from "./components/Home";
import GraphPopulationData from "./components/graphPopulationData";
import CryptoCurrencyPrices from "./components/cryptoCurrencyPrices";
import MetaMask from './components/MetaMask';
import NotFound from './components/NotFound';

const App = () =>{
const [open, setOpen] = React.useState(false);

const handleDrawerOpen = () => {
  setOpen(true);
};

const handleDrawerClose = () => {
  setOpen(false);
};
return(
<BrowserRouter>
  <div className='container-fluid w-100 overflow-hidden body-color'>
    <div className='row padding-change'>
        <div className='col-1 m-0 p-0 ' style={{backgroundColor: "010416" , minHeight: "100vh"}}>
            <SideNavBar handleToggleSideNav={open ? handleDrawerClose : handleDrawerOpen}/>
        </div>  
  <div className="flex-grow-1 col-10 m-0 pl-sm-5 pl-lg-1" >
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/population-data" element={<GraphPopulationData />} />
      <Route path="/currency-data" element={<CryptoCurrencyPrices />} />
      <Route path='/metamask-data' element={<MetaMask/>} />
      <Route path="/not-found" element={<NotFound />} />
    </Routes>
  </div>
</div>
</div>
</BrowserRouter>
);
}

export default App;
