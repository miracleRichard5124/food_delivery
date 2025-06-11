import React, { useEffect, useState } from "react";
import "./List.css";
import axios from "axios";
import { toast } from "react-toastify";
import Loading from "../../Components/Loading/Loading";

const List = ({url}) => {

  const [loading, setLoading] = useState(true);
  const [list, setList] = useState([]);
  const fetchList = async () => {
    const response = await axios.get(`${url}/api/food/list`);
    if (response.data.success) {
      setList(response.data.data);
    } else {
      toast.error("Error fething data");
    }
    setLoading(false)
  };

  const removeFood = async(foodId) => {
    const response = await axios.post(`${url}/api/food/remove`, {id:foodId});
    await fetchList();
    if(response.data.success){
      toast.success(response.data.message)
    } else{
      toast.error("Error removing item!")
    }
  }

  useEffect(() => {
    fetchList();
  }, []);

  return (
    <div className="list add flex-col">
      <p>All Foods List</p>
      <div className="list-table">
        <div className="list-table-format title">
          <b>S/N</b>
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b>Action</b>
        </div>
        {loading
          ?
          (
            <Loading/>
          ) : (
          list.map((item, index) => {
          if(list.length > 0){
          return(
            <div className="list-table-format" key={index}>
              <p>{index + 1}</p>
              <img src={`${url}/images/`+ item.image} alt="" />
              <p>{item.name}</p>
              <p>{item.category}</p>
              <p>${item.price}</p>
              <p onClick={() => removeFood(item._id)} className="cursor">X</p>
            </div>
          )
          } else{
            <h2>No Item has been added yet</h2>
          }})
        )}
      </div>
    </div>
  );
};

export default List;
