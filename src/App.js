import React from "react";
import "./App.css";
import HomePage from "./pages/HomePage";
import { createBrowserRouter,RouterProvider } from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
          <HomePage></HomePage>
      ),
    },
  ]);

  return (
    <>
      <div className="App">
        {<RouterProvider router={router} />}
      </div>
    </>
  );
}

export default App;
