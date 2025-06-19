import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CDN_URL, MENU_API_URL } from "../utils/constant";
import Shimmer from "./Shimmer";
import "./RestaurentMenu.css";

const RestaurentMenu = () => {
  const { resId } = useParams();
  const [restInfo, setRestInfo] = useState(null);

  useEffect(() => {
    fetchMenu();
    // eslint-disable-next-line
  }, [resId]);

  const fetchMenu = async () => {
    const data = await fetch(MENU_API_URL + resId);
    const json = await data.json();
    setRestInfo(json?.data);
  };

  if (!restInfo) return <Shimmer />;

  // Extract restaurant info
  const restaurant = restInfo?.cards?.find(
    (c) => c?.card?.card?.info?.name
  )?.card?.card?.info;

  const menuCards =
    restInfo?.cards
      ?.find((c) => c.groupedCard?.cardGroupMap?.REGULAR)
      ?.groupedCard.cardGroupMap.REGULAR.cards || [];

  // Get all menu items grouped by section
  const menuSections = menuCards
    .filter((c) => c.card?.card?.title && c.card?.card?.itemCards)
    .map((section) => ({
      title: section.card.card.title,
      items: section.card.card.itemCards,
    }));

  return (
    <div className="menu-container">
      {/* Hero Section */}
      <div className="menu-header">
        {restaurant?.cloudinaryImageId && (
          <img
            className="menu-item-img"
            src={CDN_URL + restaurant?.cloudinaryImageId}
            alt={restaurant?.name}
            style={{ width: 120, height: 120, marginBottom: 16, borderRadius: 20, boxShadow: "0 4px 16px #764ba233" }}
          />
        )}
        <div className="menu-title">{restaurant?.name}</div>
        <div className="menu-subtitle">{restaurant?.cuisines?.join(", ")}</div>
        <div style={{ color: "#888", margin: "8px 0" }}>
          {restaurant?.areaName}, {restaurant?.city}
        </div>
        <div style={{ fontWeight: 600, color: "#764ba2" }}>
          ⭐ {restaurant?.avgRating} <span style={{ color: "#aaa", fontWeight: 400 }}>({restaurant?.totalRatingsString})</span>
        </div>
        <div style={{ color: "#667eea", marginTop: 4 }}>{restaurant?.costForTwoMessage}</div>
      </div>

      {/* Menu Sections */}
      {menuSections.map((section) => (
        <div className="menu-section" key={section.title}>
          <div className="menu-section-title">{section.title}</div>
          <div className="menu-items-list">
            {section.items.map((item) => {
              const info = item.card.info;
              return (
                <div className="menu-item-card" key={info.id}>
                  {info.imageId && (
                    <img
                      className="menu-item-img"
                      src={CDN_URL + info.imageId}
                      alt={info.name}
                    />
                  )}
                  <div className="menu-item-title">
                    {info.name} {info.isVeg ? <span title="Veg">🥦</span> : <span title="Non-Veg">🍗</span>}
                    {info.isBestseller && (
                      <span style={{ marginLeft: 8, color: "#ff9800", fontWeight: 700, fontSize: "0.9em" }}>★ Bestseller</span>
                    )}
                  </div>
                  <div className="menu-item-desc">
                    {info.description ? info.description.slice(0, 80) + (info.description.length > 80 ? "..." : "") : "No description."}
                  </div>
                  <div className="menu-item-price">
                    ₹{info.price / 100 || info.defaultPrice / 100 || "-"}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
};

export default RestaurentMenu;
