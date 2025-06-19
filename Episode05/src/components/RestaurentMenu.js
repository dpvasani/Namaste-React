import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CDN_URL,MENU_API_URL } from "../utils/constant"; // if using cloudinary image base URL
import Shimmer from "./Shimmer";

const RestaurentMenu = () => {
  const { resId } = useParams(); // in case route has /menu/:resId
  const [restInfo, setRestInfo] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
        MENU_API_URL + resId
    );
    const json = await data.json();
    console.log(json?.data);
    setRestInfo(json?.data);
  };

  // Guard clause
  if (!restInfo) return <Shimmer />;

  // Extract restaurant info
  const restaurant = restInfo?.cards?.find(
    (c) => c?.card?.card?.info?.name
  )?.card?.card?.info;

  const menuItems =
    restInfo?.cards
      ?.find((c) => c.groupedCard?.cardGroupMap?.REGULAR)
      ?.groupedCard.cardGroupMap.REGULAR.cards
      ?.find((c) => c.card?.card?.itemCards)?.card?.card?.itemCards || [];

  return (
    <div className="menu">
      <h1>{restaurant?.name}</h1>
      <p>{restaurant?.cuisines?.join(", ")}</p>
      <p>{restaurant?.areaName}, {restaurant?.city}</p>
      <p>⭐ {restaurant?.avgRating} ({restaurant?.totalRatingsString})</p>
      <p>💰 {restaurant?.costForTwoMessage}</p>

      {restaurant?.cloudinaryImageId && (
        <img
          src={CDN_URL + restaurant?.cloudinaryImageId}
          alt={restaurant?.name}
          width="250"
        />
      )}

      <h2>📋 Menu</h2>
      <ul>
        {menuItems.map((item) => (
          <li key={item.card.info.id}>
            <h4>{item.card.info.name} {item.card.info.isVeg ? "🥦" : "🍗"}</h4>
            <p>₹{item.card.info.price / 100 || item.card.info.defaultPrice / 100}</p>
            <p>{item.card.info.description?.slice(0, 80)}...</p>
            {item.card.info.imageId && (
              <img
                src={CDN_URL + item.card.info.imageId}
                alt={item.card.info.name}
                width="120"
                style={{ borderRadius: "8px", marginTop: "5px" }}
              />
            )}
            <hr />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurentMenu;
