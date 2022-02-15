import React from 'react';
import SideBar from './SideBar';
import Wrapper from './Wrapper';
import '../assets/css/app.css'

import Footer from './Footer/Footer';
import CategoriesInDb from './Cards/CategoriesInDb';
import Chart from './Tablas/Chart';
import InDb from './Cards/InDb';
import TopBar from './TopBar';
import { BrowserRouter , Routes , Route } from 'react-router-dom';
import NotFound from './NotFound';
import Cards from './Data/Cards';

function App() {
  return (
   
     <React.Fragment>
       
      <div id="wrapper" width="100%">
       
      <SideBar /> 
      <div className="divmaldito">
      <TopBar />
      <Routes >
      <Route path='*' element={<NotFound />} />
      <Route exact path="/" element= {<Wrapper />}> </Route>
      <Route path="last" element= {<InDb />}> </Route>
      <Route path="resumen" element= {<Cards />}> </Route>
      <Route path="categories" element= {<CategoriesInDb />}> </Route>
      <Route path="list" element= {<Chart />}> </Route>
      
      
     </Routes>
     </div>
     </div>
     
     <Footer />
    </React.Fragment>
    
  );
}

export default App;
