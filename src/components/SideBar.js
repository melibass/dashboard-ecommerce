import React from 'react';
import image from '../assets/images/logo-transparente.png';
import '../assets/css/colors.css';
import { Link } from 'react-router-dom';
 
function SideBar(){
    return(
        <React.Fragment>
            
            {/*<!-- Sidebar -->*/}
            <ul className="navbar-nav color-sidebar sidebar sidebar-dark accordion" id="accordionSidebar">

                {/*<!-- Sidebar - Brand -->*/}
                <a className="sidebar-brand d-flex align-items-center justify-content-center" href="http://localhost:3001">
                    <div className="sidebar-brand-icon">
                        <img className="w-100" src={image} alt="GranBazar"/>
                    </div>
                </a>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider my-0"/>

                {/*<!-- Nav Item - Dashboard -->*/}
                <li className="nav-item active">
                    <a className="nav-link" href="/">
                        <i className="fas fa-fw fa-tachometer-alt"></i>
                        <span>DASHBOARD</span></a>
                </li>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider"/>

                {/*<!-- Heading -->*/}
                <div className=" sidebar-action ">Menu</div>

                {/*<!-- Nav Item - Pages -->*/}
                <li className=" nav-items nav-item">
                    <Link className="nav-links  nav-link collapsed" to="/resumen">
                        
                        <i className="fas fa-archive"></i>
                        <span>Resumen</span>
                    </Link>
                </li>

                {/*<!-- Nav Item - Charts -->*/}
                <li className=" nav-items nav-item">
                    <Link className="nav-links nav-link" to="/last">
                    <i className="fas fa-globe"></i>
                        <span>Ultimos en DB</span></Link>
                </li>
                {/*<!-- Nav Item - Charts -->*/}
                <li className=" nav-items nav-item">
                    <Link className="nav-links nav-link" to="/categories">
                    <i className="fas fa-sitemap"></i>
                        <span>Informacion de categorias</span></Link>
                </li>

                {/*<!-- Nav Item - Tables -->*/}
                <li className="nav-items nav-item">
                    <Link
                     className="nav-links nav-link" to="/list">
                    <i className="fas fa-clipboard-list"></i>
                        <span>Listado de productos</span></Link>
                </li>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider d-none d-md-block"/>
            </ul>
            {/*<!-- End of Sidebar -->*/}
        
        </React.Fragment>
    )
}
export default SideBar;
