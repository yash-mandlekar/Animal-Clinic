import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Profile = ({
  LoggedIn,
  User,
  animalState,
  setanimalState,
  setupdate,
}) => {
  // useEffect(() => {
  //   localStorage.setItem("animals", JSON.stringify([{
  //     Animal: "Elephant",
  //     Health_Status: "Good",
  //     Image: "https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZWxlcGhhbnR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
  //     Other_Issues: "Cold",
  //     Weight: "1095lbs",
  //     animalId: 4783,
  //     owner: "ymandlekar9826@gmail.com"
  //   }]));
  // }, []);
  const navigate = useNavigate();

  const animalSubmit = (e) => {
    e.preventDefault();
    const animalId = Math.round(Math.random() * 10000);
    const animal = {
      owner: User,
      animalId: animalId,
      Image: e.target.image.value,
      Animal: e.target.animal.value,
      Health_Status: e.target.health.value,
      Weight: e.target.weight.value,
      Other_Issues: e.target.issue.value,
    };
    e.target.image.value = "";
    e.target.animal.value = "";
    e.target.health.value = "";
    e.target.weight.value = "";
    e.target.issue.value = "";
    localStorage.setItem(animalId, JSON.stringify(animal));
    const user2 = JSON.parse(localStorage.getItem(animalId));
    const animals = JSON.parse(localStorage.getItem("animals"));
    if (animals === null) {
      localStorage.setItem("animals", JSON.stringify([user2]));
      setanimalState([user2]);
      return;
    }
    animals.push(user2);
    localStorage.setItem("animals", JSON.stringify(animals));
    setanimalState(animals);
  };
  const update = (e) => {
    setupdate(animalState[e]);
    const cpy = [...animalState];
    cpy.splice(e, 1);
    setanimalState(cpy);
    localStorage.setItem("animals", JSON.stringify(animalState));
    navigate("/update");
  };
  return (
    <div>
      {LoggedIn ? (
        <div>
          <h1>
            <center>Add Your Pet :</center>
          </h1>
          <form onSubmit={animalSubmit} className="animalform">
            <input type="text" name="image" placeholder="Image URL" />
            <input type="text" name="animal" placeholder="Animal" />
            <input type="text" name="health" placeholder="Health" />
            <input type="text" name="weight" placeholder="Weight" />
            <input type="text" name="issue" placeholder="Other Issue" />
            <button>Add Pet</button>
          </form>
          <h1>
            <center>Pets in Clinic</center>
          </h1>
          <div className="kards">
            {animalState &&
              animalState.map((e, i) => (
                <div key={i} className="kard">
                  <img src={`${e.Image}`} alt="" />
                  <div className="desc">
                    <div className="animal">Animal : {e.Animal}</div>
                    <div className="animal">
                      Health Status: {e.Health_Status}{" "}
                    </div>
                    <div className="animal">Weight: {e.Weight} </div>
                    <div className="animal">
                      Other Issues: {e.Other_Issues}{" "}
                    </div>
                    <div className="animal">Owner email: {e.owner} </div>
                    <button
                      className="btn btn-success"
                      onClick={() => update(i)}
                    >
                      Update
                    </button>
                  </div>
                </div>
              ))}
          </div>
        </div>
      ) : (
        <div className="cnt3">
          <h1>Login First</h1>
          <Link to="/">Go To LogIn Page</Link>
          <Link to="/">Click Here...</Link>
        </div>
      )}
    </div>
  );
};

export default Profile;
