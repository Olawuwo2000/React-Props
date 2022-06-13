import React from "react";
import ReactDOM from "react-dom";
// import logo from './images/Abideen.jpg'; 

function Card(props) {
  return (
    <div>
      <h2>{props.name}</h2>
      <img className="img" src={props.img} alt="avatar_img" />
      <p>{props.tel}</p>
      <p>{props.email}</p>
    </div>
  );
}

ReactDOM.render(
  <div>
    <h1>My Contacts</h1>
    <Card
      name="Abideen"
      // img ={logo}
      img ="images/Abideen.jpg"
      tel="+123 456 789"
      email="abideen@b.com"
    />
    <Card
      name="Simon"
      img ="images/Simon.png"
      tel="+7387384587"
      email="simon@nowhere.com"
    />
  </div>,
  document.getElementById("root")
);
