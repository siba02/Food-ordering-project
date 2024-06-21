import React, { useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getRestaurantByUserId } from "../../State/Customers/Restaurant/restaurant.action";
import AddressCard from "../../customers/components/Address/AddressCard";
import AddRestaurantCard from "./AddRestaurantCard";

const AdminDashboard = () => {
  const params = useParams();
  const { restaurant } = useSelector((store) => store);
  console.log("params", params);
  const dispatch = useDispatch();

  console.log("-------------- restaurant", restaurant);

  return (
    <div className="lg:px-20">
      <div className="lg:flex flex-wrap justify-center">
        {restaurant.restaurants.map((item) => (
          <RestaurantCard item={item} />
        ))}
        {restaurant.restaurants?.length < 1 && <AddRestaurantCard />}
      </div>
    </div>
  );
};

export default AdminDashboard;
