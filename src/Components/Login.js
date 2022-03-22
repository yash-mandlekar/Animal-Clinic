import React, { useState, useRef, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';


var flag = false;
var flag2 = false;
const App = ({ setLoggedIn,setUser }) => {
  const ref1 = useRef();
  const ref2 = useRef();
  const ref3 = useRef();
  const ref4 = useRef();
  const ref5 = useRef();
  const ref6 = useRef();
  const navigate = useNavigate();
  const [email, setemail] = useState("");
  const [number, setnumber] = useState("");
  const [password, setpassword] = useState("");
  useEffect(() => {
    ref4.current.disabled = true;
    ref4.current.style.backgroundColor = "transparent";
    ref4.current.style.color = "#bababa";
  }, []);
  const submitHandler = () => {
    if (ref1.current.value.length > 0 && ref2.current.value.length > 0 && ref3.current.value.length > 0) {
      ref4.current.disabled = false;
      ref4.current.style.backgroundColor = "darkblue";
      ref4.current.style.color = "white";
      ref4.current.style.boxShadow = "blue 6px 6px 4px -1px";
    } else {
      ref4.current.disabled = true;
      ref4.current.style.backgroundColor = "transparent";
      ref4.current.style.color = "#bababa";
      ref4.current.style.boxShadow = "lightblue 6px 6px 4px -1px";
    }
  }
  const changeHandler = () => {
    if (flag) {
      ref1.current.value.match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/) ?
        setemail("") : setemail("Invalid Email")
    }
    submitHandler();
  }
  const changeHandler2 = () => {
    if (flag2) {
      ref2.current.value.match(/^\d{10}$/) ?
        setnumber("") : setnumber("Invalid Number")
    }
    submitHandler();
  }
  const submitemail = () => {
    if (ref1.current.value.match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/)) {
      flag = false;
      setemail("")
    } else {
      flag = true;
      setemail("Invalid Email")
    }
    if (ref2.current.value.match(/^\d{10}$/)) {
      flag2 = false;
      setnumber("")
    } else {
      flag2 = true;
      setnumber("Invalid Number")
    }
    submitHandler();
  }
  const LoginSubmit = (e) => {
    e.preventDefault();
    const user = JSON.parse(localStorage.getItem(e.target.email.value));
    if (e.target.password.value === user.password && e.target.number.value === user.number) {
      setLoggedIn(true);
      setUser(user.email)
      navigate("/profile")
    }
    if (e.target.number.value !== user.number && e.target.password.value !== user.password) {
      setpassword("Invalid Password")
      setnumber("Invalid Number")
    } else if (e.target.password.value !== user.password) {
      setpassword("Invalid Password")
      setnumber("")
    } else if (e.target.number.value !== user.number) {
      setpassword("")
      setnumber("Invalid Number")
    } else {
      setnumber("")
      setpassword("")

    }
  }
  const show = (e) => {
    ref3.current.type = "text"
    ref5.current.style.display = "none"
    ref5.current.style.position = "absolute"
    ref6.current.style.position = "fixed"
    ref6.current.style.display = "initial"
  }
  const hide = (e) => {
    ref3.current.type = "password"
    ref6.current.style.display = "none"
    ref6.current.style.position = "absolute"
    ref5.current.style.position = "fixed"
    ref5.current.style.display = "initial"
  }
  return (
    <div className='cnt2'>
      <form onSubmit={LoginSubmit}>
        <h1>Login</h1>
        <div>
          <input
            id='inp1'
            type="text"
            name='email'
            onChange={changeHandler}
            ref={ref1}
            autoComplete='off'
            placeholder='Email'
            style={email === "Invalid Email" ? { borderBottom: "0.2vw solid red", color: "red" } : { borderBottom: "0.2vw solid blue", color: "black" }}
          /> <br />
          <small
            style={email === "Invalid Email" ? { color: "red" } : { color: "blue" }}
          >{email}</small>
        </div>
        <div>
          <input
            id='inp2'
            type="text"
            name='number'
            onChange={changeHandler2}
            ref={ref2}
            autoComplete='off'
            placeholder='Mobile Number'
            style={number === "Invalid Number" ? { borderBottom: "0.2vw solid red", color: "red" } : { borderBottom: "0.2vw solid blue", color: "black" }}
          /> <br />
          <small
            style={number === "Invalid Number" ? { color: "red" } : { color: "blue" }}
          >{number}</small>
        </div>
        <div>
          <input
            id='inp3'
            type="password"
            name='password'
            onChange={changeHandler2}
            ref={ref3}
            autoComplete='off'
            placeholder='Password'
            style={password === "Invalid Password" ? { borderBottom: "0.2vw solid red", color: "red" } : { borderBottom: "0.2vw solid blue", color: "black" }}
          /> <br />
          <div className="show" onClick={show} ref={ref5}><ion-icon name="eye-off-outline"></ion-icon></div>
          <div className="show" id='hide' onClick={hide} ref={ref6}><ion-icon name="eye-outline"></ion-icon></div>
          <small
            style={password === "Invalid Password" ? { color: "red" } : { color: "blue" }}
          >{password}</small>
        </div>
        <Link to="/register" >Not a user ? Create an account... </Link>
        <button onClick={submitemail}
          ref={ref4}
          style={number === "Invalid Number" && { boxShadow: "2px 2px 10px red", background: "linear-gradient(to bottom,tomato,#FFCDC4,tomato)" } ||
            email === "Invalid Email" && { boxShadow: "2px 2px 10px red", background: "linear-gradient(to bottom,tomato,#FFCDC4,tomato)" } ||
            { boxShadow: "lightblue 6px 6px 4px -1px", color: "black", backgroundColor: "blue" }}
        >Submit</button>
      </form>
    </div>
  )
}
export default App;