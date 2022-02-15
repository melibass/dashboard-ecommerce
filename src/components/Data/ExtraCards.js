import React, { useState, useEffect } from "react";
import ExtraSmallCard from './ExtraSmallCard';



/*aca pasamos el fetch*/

const ExtraCards = () => {
	const [compras, setcompras] = useState([]);
	const [favoritos, setfavoritos] = useState([]);
	
		
	
	useEffect(() => {   
		fetch("http://localhost:3001/api/compras")
		.then(response => response.json())
		.then(compras => {
			setcompras(compras)
		})
	},[])

	useEffect(() => {   
		fetch("http://localhost:3001/api/favoritos")
		.then(response => response.json())
		.then(favoritos => {
			setfavoritos(favoritos)
		})
	},[])

	
	
	const datos = [compras,favoritos]
	console.log(compras)
	 
	
	return (
		 <div className="resumen">
			
			<div className="row">
			
			
				{datos.map((dato,i) => (
					 <ExtraSmallCard {...dato} key={i} />
				)
					)}
			   
	
			</div></div>
		)
	}
	
	
	export default ExtraCards;