import React from "react";
import { Outlet, Link } from "react-router-dom";
import SiteHeader from "./SiteHeader";
import SiteFooter from "./SiteFooter";
import './StyleLayout.css'

function Layout(props)
{
    return(
        <div className="layoutContainer">
            <div className="header">
                <SiteHeader />
            </div>
            <div className="bodyContainer">
                <div className="bodyNav">
                    <nav>
                        <ul>
                            <li> <Link to="/"> Home </Link> </li>
                            <li> <Link to="/hsMercs"> HearthStone Mercenaries </Link> </li>
                        </ul>
                    </nav>
                </div>
                <div className="bodyOutlet">
                    <Outlet />
                </div>
            </div>
            <div className="footer">
                <SiteFooter />
            </div>
        </div>
    );
}

export default Layout;