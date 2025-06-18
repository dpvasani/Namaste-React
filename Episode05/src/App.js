// app.js
import React from "react";
import Header from "./components/Header";
import ReactDOM from "react-dom/client";
import Body from "./components/Body";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";

import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Contact";

// App Layout Component
const Applayout = () => {
    return (
      <div className="app">
      <Header />
      <Outlet />
      </div>
    )
  }

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

// const appRouter = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />
//   },
//   {
//         path: "/",
//         element: <Body />,
//         errorElement: <Error />,
//   },
//   {
//         path: "/about",
//         element: <About />,
//   },
//   {
//         path: "/contact",
//         element: <Contact />,
//   }
// ]);

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Applayout />,
    children:[ 
      {
        path: "/",
        element: <Body />
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      }
    ]
  }
]);



// 📦 Render to DOM using React 18 method (since you're using Parcel, assume latest React)
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);