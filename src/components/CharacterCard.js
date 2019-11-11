import React from "react";


export default function CharacterCard(props) {
  return <span>todo: character</span>;
  <div key={props.id}>
      <h2>Character Name: {props.name}</h2>
      <p>{props.location}</p>
      <div>
        <p>Species: {props.species}</p>
      </div>
    </div>
}
