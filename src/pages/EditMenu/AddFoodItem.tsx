import React from 'react';

const AddFoodItem: React.FC<any> = ({ setIsAddModalShown }) => {
  return (
    <div className="food-item food-item--add" onClick={() => setIsAddModalShown(true)}>
      <span className="food-item__title food-item__title--add-item">Add your own menu item!</span>
    </div >
  )
};


export default AddFoodItem;