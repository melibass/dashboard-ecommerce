import React from 'react';
import GeneralContent from './GeneralContent';
import ExtraCards from './ExtraCards';

 
function Cards() {
  return (
    <React.Fragment>
      
      <ul className="ultimos">
          <li className="list">
            <GeneralContent /></li>
     
          
     <ExtraCards />
     </ul>
     
    </React.Fragment>
  );
}
export default Cards;
