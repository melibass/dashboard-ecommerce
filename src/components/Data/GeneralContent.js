import React, { useState, useEffect } from "react";
import TopBar from "../TopBar";
import SmallCard from './SmallCard';



/*aca pasamos el fetch*/

const GeneralContent = () => {
	const [productos, setproductos] = useState([]);
	const [users, setusers] = useState([]);
	const [categories, setcategories] = useState([]);
		
	
	useEffect(() => {   
		fetch("http://localhost:3001/api/products")
		.then(response => response.json())
		.then(data => {
			setproductos(data)
		})
	},[])

	useEffect(() => {   
		fetch("http://localhost:3001/api/users")
		.then(response => response.json())
		.then(user => {
			setusers(user)
		})
	},[])

	useEffect(() => {   
		fetch("http://localhost:3001/api/categories")
		.then(response => response.json())
		.then(categoria => {
			setcategories(categoria)
		})
	},[])
	
	
	
	const datos = [productos,users,categories]
	
	 
	
	return (
		 <div className="resumen">
			
			<div className="row">
			
			
				{datos.map((dato,i) => (
					 <SmallCard {...dato} key={i} />
				)
					)}
			   
	
			</div></div>
		)
	}
	
	
	export default GeneralContent;