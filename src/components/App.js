import React, { useEffect, useState } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [toys, setToys] = useState([])
  const [showForm, setShowForm] = useState(false);

  function onDeleteToy(toyId) {
    const newArra= toys.filter((toy) => toy.id !== toyId);
    setToys(newArra);
  }

  function onUpdateToy(newData){
    const newArr = toys.map((toy) => {
      if (toy.id !== newData) {
        return toy
      }else {
        return newData
      }

    })
    console.log(newArr)
    setToys(newArr);
  }


  useEffect(() => {
    fetch("http://localhost:3001/toys")
    .then((response) => response.json())
    .then((r) => {
      setToys(r);
    });
}, []);


  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  return (
    <>
      <Header />
      {showForm ? <ToyForm /> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer toys={toys} onDeleteToy={onDeleteToy} onUpdateToy={onUpdateToy}/>
    </>
  );
  }

export default App;
