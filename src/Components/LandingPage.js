import React from 'react'
import { Link } from 'react-router-dom'
export default function LandingPage() {
    return (
        <header className= "LandingPage-body" style={ HeaderStyle }>
            <h1 className="main-title text-center"> SIGN-UP </h1>
            <p className="main-para text-center">
                </p>
            <div className="buttons text-center">
                <Link to="/login">
                    <button className="primary-button">log in</button>
                </Link>
                <Link to="/register">
                    <button className="primary-button" id="reg_btn"><span>register </span></button>
                </Link>
            </div>
        </header>
    )
}
const HeaderStyle = {
    width: "100%",
    height: "100vh",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"
}