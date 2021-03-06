import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "CharacterCard";

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [chacters, setCharacters] = useState([]);

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array
    axios
      .get(`https://rickandmortyapi.com/api/character/`)
      .then(response => {
        console.log(response.data);
        setCharacters(response.data);
      })
      .catch(error => {
        console.log("the data was not return", error);
      });
  }, []);


  return (
    <section className="character-list">
      <h2>TODO: `array.map()` over your state here!</h2>
      {chacters.map(chacter => {
        return (
          <CharacterCard
            key={chacter.id}
            name={chacter.name}
            species={chacter.species}
          />
        );
      })}
    </section>
  );
}
