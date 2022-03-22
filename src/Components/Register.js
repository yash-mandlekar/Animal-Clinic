import React, { useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Register = ({ setLoggedIn,setUser }) => {
    const ref3 = useRef();
    const ref5 = useRef();
    const ref6 = useRef();
    const navigate = useNavigate(); 
    const registerSubmimt = (e) => {
        e.preventDefault();
        const person = {
            email: e.target.email.value,
            name: e.target.name.value,
            password: e.target.password.value,
            number: e.target.number.value
        }
        localStorage.setItem(e.target.email.value, JSON.stringify(person))
        setLoggedIn(true)
        setUser(e.target.email.value)
        navigate("/profile")
    }
    const show = (e) => {
        ref3.current.type = "text"
        ref5.current.style.display = "none"
        ref6.current.style.display = "initial"
    }
    const hide = (e) => {
        ref3.current.type = "password"
        ref6.current.style.display = "none"
        ref5.current.style.display = "initial"
    }
    return (
        <div className='cnt'>
            <form onSubmit={registerSubmimt}>
                <h1>Register</h1>
                <div>
                    <input required autoComplete='off' type="text" name='name' placeholder='UserName' />
                </div>
                <div>
                    <input required autoComplete='off' type="email" name='email' placeholder='Email' />
                </div>
                <div>
                    <input required autoComplete='off' type="text" name='number' placeholder='Mobile Number' />
                </div>
                <div>
                    <input required autoComplete='off' type="password" ref={ref3} name='password' placeholder='Password' />
                    <div className="show" onClick={show} ref={ref5}><ion-icon name="eye-off-outline"></ion-icon></div>
                    <div className="show" id='hide' onClick={hide} ref={ref6}><ion-icon name="eye-outline"></ion-icon></div>
                </div>
                <Link to="/" >Already a user...? </Link>
                <div>
                    <button>Register</button>
                </div>
            </form>
        </div>
    );
}

export default Register;
