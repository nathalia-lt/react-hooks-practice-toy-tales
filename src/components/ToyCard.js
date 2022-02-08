import React from "react";

function ToyCard({ toyId, toyName, toyImg, toyLikes, onDeleteToy, onUpdateToy}) {
  function handleDeleteClick() {
    fetch(`http://localhost:3001/toys/${toyId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then((r) => r.json())
      .then(() => onDeleteToy(toyId));
  }
  

  function handleLikeClicked(){
    const newLikes = toyLikes + 1
    console.log(toyId)
    fetch(`http://localhost:3001/toys/${toyId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        likes: newLikes
        // dont need quotes bc JSON will do it for you
      }),
    })
      .then((r) => r.json())
      .then((data) => onUpdateToy(data));
  }

  return (
    <div className="card">
      <h2>{toyName}</h2>
      <img
        src={toyImg}
        alt={toyName}
        className="toy-avatar"
      />
      <p>{toyLikes} Likes </p>
      <button className="like-btn" onClick={handleLikeClicked} >Like {"<3"}</button>
      <button className="del-btn" onClick={handleDeleteClick} >Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
