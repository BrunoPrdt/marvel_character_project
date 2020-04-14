import React from 'react';
import '../CharactersPage/index.css';

export default function CharacterDetails(props) {
  // eslint-disable-next-line react/prop-types
  const { character } = props;

  return (
    <div className="detailsCard">
      <figure>
        <img
          src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
          alt={character.name}
        />
      </figure>
      <figcaption className="figcaption">{character.description}</figcaption>
    </div>
  );
}
