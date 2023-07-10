import "./App.css";
import AboutPage from "./page/AboutPage";
import HomePage from "./page/HomePage";
import { Routes, Route, Navigate } from "react-router-dom";
import ProductPage from "./page/ProductPage";
import ProductDetail from "./page/ProductDetail";
import Login from "./page/Login";
import { useState } from "react";
import User from "./page/User";

function App() {
  const [auth, setAuth] = useState(false);
  const PrivateRoute = () => {
    return auth ? (
      <User auth={auth} setAuth={setAuth} />
    ) : (
      <Navigate to="/login" />
    );
  };
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/products/:id/:num" element={<ProductDetail />} />
        <Route
          path="/login"
          element={<Login auth={auth} setAuth={setAuth} />}
        />
        <Route path="/user" element={<PrivateRoute />} />
      </Routes>
    </div>
  );
}

export default App;
