import React from "react";
import Link from 'next/link'

import '../styles/header.css';


const NavbarUnauth = () =>{
    return(
        <div className="Header-Container">
            <div className="Header-Container-Left">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Georgia_Athletics_logo.svg/300px-Georgia_Athletics_logo.svg.png" alt="KnowWhatYouEatLogo"/>
                <h1>Know What You Eat</h1>
            </div>
            <div className="Header-Container-Right">
                <Link href="/login"><button>Login</button></Link>
                <Link href="/registration"><button>Register</button></Link>
            </div>
        </div>
    );
};
export default NavbarUnauth