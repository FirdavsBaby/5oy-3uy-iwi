import React from 'react'

const Card = ({ book }) => {
  return (
    <div className="card border-5 p-3">
      <img src={book.image} alt="cardImg" />
      <h2>{book.title}</h2>
      <h3>{book.price}</h3>
      <p>{book.subtitle}</p>
    </div>
  );
};

export default Card
