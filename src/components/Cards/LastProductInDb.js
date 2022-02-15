import React, { useState, useEffect } from "react";


function LastProductInDb() {
    const [lastProduct, setpLastPoducts] = useState([]);

    useEffect(() => {   
		fetch("http://localhost:3001/api/products")
		.then(response => response.json())
		.then(data => {
			setpLastPoducts(data.products[data.products.length-1])
		})
	},[])
    



    return (
       
        <div className="col-lg-6 mb-4">
        <div className="card shadow mb-4">
            <div className="card-header py-3">
                <h5 className="m-0 font-weight-bold text-gray-800">Ultimo producto en la base de datos</h5>
            </div>
            <div className="card-body">
                <div className="text-center" >
                    <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 40 +'rem'}} src={lastProduct.img}  alt="Ultimo producto" />
                </div>
                <p>{lastProduct.descripcion} </p>
                <a className="button" target="_blank" href={lastProduct.detail}  rel="nofollow">Ver detalle de producto</a>
            </div>
        </div>
        </div>

    )
}
export default LastProductInDb;