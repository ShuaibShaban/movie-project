import React from 'react'
import { Link } from 'react-router-dom'
export default function SignUpPage() {
    return (
     <div className="reg">
        <div className="text-center m-5-auto">
            <h2 className="join">Join us</h2>
            <h5 className="create">Create your personal account</h5>
            <form className="form-f" action="/home">
                <p>
                    <label>Username</label><br/>
                    <input type="text" name="first_name" required />
                </p>
                <p>
                    <label>Email address</label><br/>
                    <input type="email" name="email" required />
                </p>
                <p>
                    <label>Password</label><br/>
                    <input type="password" name="password" required/>
                </p>
                <p>
                    <input type="checkbox" name="checkbox" id="checkbox" required /> <span>I agree all statements in <a href="https://google.com" target="_blank" rel="noopener noreferrer">terms of service</a></span>.
                </p>
                <p>
                    <button id="sub_btn" type="submit">Register</button>
                </p>
            </form>
            <footer>
                <p className="footer"><Link to="/">Back to Homepage</Link>.</p>
            </footer>
        </div>
        </div>
    )
}