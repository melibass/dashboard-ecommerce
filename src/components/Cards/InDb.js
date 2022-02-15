import React from 'react';
import LastProductInDb from './LastProductInDb';
import LastUserInDb from './LastUserInDb';

 
function InDb() {
  return (
    <React.Fragment>
    
      
      
        <ul className="ultimos">
          <li className="list">
          <LastProductInDb />
          </li>
          <li>
          <LastUserInDb />{" "}
          </li>
        </ul>
      
    </React.Fragment>
  );
}
export default InDb;
