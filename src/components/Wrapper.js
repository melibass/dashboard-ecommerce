import React from 'react';

import ContentRowTop from './ContentRowTop';


function Wrapper(){
    return (
        <React.Fragment>
            {/*<!-- Content Wrapper -->*/}
            <div id="content-wrapper" className="d-flex flex-column">
                {/*<!-- Main Content -->*/}
                <div id="content">
                
                    
                    <ContentRowTop />
                   
                </div>
            </div>    
        </React.Fragment>
    )
}
export default Wrapper;