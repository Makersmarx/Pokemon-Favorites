import React from 'react';

const List = (props) => {
  const { pokemon } = props;

  return pokemon.map((poke) => {
    const { id, name, type, image } = poke;
    return (
      <article key={id} className="pokemon">
        <img src={image} alt={name} />
        <div className="name">
          <h2>{name}</h2>
          <h4>Type: {type}</h4>
        </div>
      </article>
    );
  });
};

export default List;
