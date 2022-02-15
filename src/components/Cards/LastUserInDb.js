import React, { useState, useEffect } from "react";


function LastUserInDb() {
    const [lastUser, setLastUser] = useState([]);

    useEffect(() => {   
		fetch("http://localhost:3001/api/users")
		.then(response => response.json())
		.then(data => {
			setLastUser(data.users[data.users.length-1])
		})
	},[])
    



    return (
       
        <div className="col-lg-6 mb-4">
        <div className="card shadow mb-4">
            <div className="card-header py-3">
                <h5 className="m-0 font-weight-bold text-gray-800">Ultimo usuario en la base de datos</h5>
            </div>
            <div className="card-body">
                <div className="text-center" >
                    <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 40 +'rem'}} src={lastUser.imagen}  alt="Ultimo usuario" />
                </div>
                <p>ID: {lastUser.id} </p>
                <p>Nombre: {lastUser.name} </p>
                <p>Email: {lastUser.email} </p>
                
            </div>
        </div>
        </div>

    )
}
export default LastUserInDb;