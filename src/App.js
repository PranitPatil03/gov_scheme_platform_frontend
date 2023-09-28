import React from "react";
import "./App.css";
import HomePage from "./pages/HomePage";
import RegisterPage from "./pages/RegisterPage";
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import LoginPage from "./pages/LoginPage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
          <HomePage></HomePage>
      ),
    },
    {
      path: "/register",
      element: (
          <RegisterPage></RegisterPage>
      ),
    },
    {
      path: "/login",
      element: (
          <LoginPage></LoginPage>
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
