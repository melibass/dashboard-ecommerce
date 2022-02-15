import React, { useState, useEffect } from "react";
import ChartRow from './ChartRow';




function Chart() {
    const [tableRowsData, setptableRowsData] = useState([]);
    const [page, setPage] = useState(0);
    

    useEffect(() => {
        
        fetch(`http://localhost:3001/api/products/page/${page}`)
		.then(response => response.json())
		.then(data => {
			setptableRowsData(data.products)
		})
	},[page])
    
    

    const previousPage = () => {
        if (page > 0) {
            setPage(page - 1);
        }
    }
    const nextPage = () => {
        setPage(page + 1);
    }

    return (
        /* <!-- DataTales Example --> */<>
        <>
        <div className="card shadow mb-4">
            <div className="card-body">
                <div className="table-responsive">
                    <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Nombre</th>
                                <th>Categoria</th>
                                <th>Origen</th>
                                <th>Color</th>
                            </tr>
                        </thead>
                        
                        <tbody>
                            {
                            tableRowsData.map( ( row , i) => {
                                return <ChartRow { ...row} key={i}/>
                            })
                            }

                        </tbody>
                    </table>

                    <div className="btn-prev-next">
                        <button className="btn-prev" onClick={previousPage}>Anterior</button>
                        <button className="btn-next" onClick={nextPage}>Siguiente</button>
                    </div>
                </div>
            </div>
        </div>
        </>
        </>
    )
    
}

export default Chart;