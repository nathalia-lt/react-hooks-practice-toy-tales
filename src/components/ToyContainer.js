import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer( {toys, onDeleteToy, onUpdateToy } ) {

const mapToys = toys.map((toy) => 
  <ToyCard 
    key={toy.id} 
    toyId={toy.id}
    toyName = { toy.name } 
    toyImg = { toy.image }
    toyLikes = { toy.likes }
    onDeleteToy = {onDeleteToy}
    onUpdateToy = {onUpdateToy}
  />)


  return (
    <div id="toy-collection">{mapToys}</div>
  );
}

export default ToyContainer;
