import React, { useState } from "react";
import "./App.css";
import Register from "./Components/Register";
import Login from "./Components/Login";
import Profile from "./Components/Profile";
import { Route, Routes, useNavigate } from "react-router-dom";
import Update from "./Components/Update";

const App = () => {
  const [LoggedIn, setLoggedIn] = useState(false);
  const [User, setUser] = useState("");
  const [animalState, setanimalState] = useState(
    JSON.parse(localStorage.getItem("animals"))
  );
  const [update, setupdate] = useState({});
  const navigate = useNavigate();
  const submitUpdate = (e) => {
    e.preventDefault();
    const obj = {
      owner: User,
      Image: e.target.image.value,
      Animal: e.target.animal.value,
      Health_Status: e.target.health.value,
      Weight: e.target.weight.value,
      Other_Issues: e.target.issue.value,
    };
    const cpy = [...animalState, obj];
    setanimalState(cpy);
    localStorage.setItem("animals", JSON.stringify(animalState));
    navigate("/profile");
  };
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={<Login setLoggedIn={setLoggedIn} setUser={setUser} />}
        />
        <Route
          path="/register"
          element={<Register setLoggedIn={setLoggedIn} setUser={setUser} />}
        />
        <Route
          path="/profile"
          element={
            <Profile
              LoggedIn={LoggedIn}
              User={User}
              animalState={animalState}
              setanimalState={setanimalState}
              setupdate={setupdate}
            />
          }
        />
        <Route
          path="/update"
          element={<Update update={update} submitUpdate={submitUpdate} />}
        />
      </Routes>
    </>
  );
};
export default App;
