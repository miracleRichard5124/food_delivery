import React, { useState, useContext, useEffect } from 'react';
import './FoodDisplay.css'
import { StoreContext } from '../../Context/StoreContext';
import FoodItem from '../FoodItem/FoodItem';
import Verify from '../../pages/Verify/Verify';

const FoodDisplay = ({category}) => {

  const {food_list} = useContext(StoreContext)
  const [loading, setLoading] = useState(true);
  const [filteredList, setFilteredList] = useState([])

  useEffect(() => {
    if (food_list && food_list.length > 0){
      const filtered = food_list.filter(item => category === "All" || category === item.category);
      setFilteredList(filtered);
      setLoading(false);
    }
  }, [food_list, category])

  return (
    <div className='food-display' id='food-display'>
      <h2>Top dishes near you</h2>
      
      {loading ? (
        <Verify/>
      ) : (
        <div className="food-display-list">
        {filteredList.map((item, index) => {
          if(category === "All" || category === item.category){
            return <FoodItem key={index} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image}/>
          }
        })}
      </div>
      )}
    </div>
  );
}

export default FoodDisplay;
