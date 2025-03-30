import React, { useContext } from 'react';
import './FoodItem.css';
import { assets } from '../../assets/frontend_assets/assets';
import { StoreContext } from '../../Context/StoreContext';

const FoodItem = ({id, name, price, description, image}) => {

  const {cartItems, addToCart, removeFromCart, url} = useContext(StoreContext);

  return (
    <div className='food-item'>
      <div className="food-item-image-container">
        <img className='food-item-image' src={url+"/images/"+image} alt="" />
        {!cartItems[id]
          ? <img className='add' src={assets.add_icon_white} alt='add' onClick={() => addToCart(id)}/>
          : <div className="food-item-counter">
              <img onClick={() => removeFromCart(id)} src={assets.remove_icon_red}/>
              <p>{cartItems[id]}</p>
              <img onClick={() => addToCart(id)} src={assets.add_icon_green} alt="" />
          </div>
        }
      </div>
      <div className="food-item-info">
        <div className="food-item-name-rating">
          <p>{name}</p>
          <img src={assets.rating_starts} alt="" />
        </div>
        <p className="food-item-desc">{description}</p>
        <p className="food-item-price">${price}</p>
      </div>
    </div>
  );
}

export default FoodItem;
