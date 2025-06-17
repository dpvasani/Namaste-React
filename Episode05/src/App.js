// app.js
import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";



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
