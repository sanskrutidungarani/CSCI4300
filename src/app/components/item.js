import React from 'react';

const ItemComponent = ({ title, imageUrl }) => {
  return (
    <div>
      <img src={imageUrl} alt={title} />
      <h3>{title}</h3>
    </div>
  );
};

export default ItemComponent;
