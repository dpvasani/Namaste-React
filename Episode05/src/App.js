// app.js
import React from "react";
import ReactDOM from "react-dom/client";
import resList from "../List";


// App
// ├── Header
// │   ├── Logo
// │   └── Navigation
// │       └── NavItem(s)
// ├── Main (Body)
// │   ├── SearchBar
// │   └── RestaurantContainer
// │       └── RestaurantCard(s)
// └── Footer
//     ├── Copyright
//     ├── FooterLinks
//     ├── Address
//     └── ContactInfo

//-----------------------------------------------------------------------------------------------------------

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};


  const RestaurantCard = (props) => {
  const { resData } = props;

  const {
    cloudinaryImageId,
    name,
    avgRating,
    cuisines,
    costForTwo,
    deliveryTime,
  } = resData?.data;

  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className="res-logo"
        alt="res-logo"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          cloudinaryImageId
        }
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>₹{costForTwo / 100} FOR TWO</h4>
      <h4>{deliveryTime} minutes</h4>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {resList.map((restaurant) => (
          <RestaurantCard key={restaurant.data.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

  const App = () => {
    return (
      <div className="app">
      <Header />
      <Body />
      </div>
    )
  }














// 📦 Render to DOM using React 18 method (since you're using Parcel, assume latest React)
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
