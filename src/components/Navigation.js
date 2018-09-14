import React from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import { NavLink } from 'react-router-dom';

const Navigation = () => {

    const img = <img
        alt=''
        className='rounded-circle'
        src="https://pbs.twimg.com/profile_images/951074383988129792/irXgsfjV_400x400.jpg"
        width="45px"
        height="45px"
    />;

    return(
        <div>
            <Navbar color="info" info expand="md">
            <NavbarBrand>
                <NavLink 
                    exact 
                    to="/">
                    {img}
                </NavLink>
            </NavbarBrand>
            </Navbar>
        </div>
    )
}

export default Navigation;