import React from "react";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import Home from "./pages/home/Home";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";
import "./App.css";
import Login from "./pages/login/Login";
import { useSelector } from "react-redux";

function App() {
  // const admin = useSelector((state) => state.user.currentUser.isAdmin);

  return (
    <React.Fragment>
      <Routes>
        <Route to="/login" path={<Login />} />
      </Routes>
      {/* {admin && (
        <React.Fragment>
          <Topbar />
          <div className="container">
            <Sidebar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/users" element={<UserList />} />
              <Route path="/user/:userId" element={<User />} />
              <Route path="/newUser" element={<NewUser />} />
              <Route path="/products" element={<ProductList />} />
              <Route path="/product/:productId" element={<Product />} />
              <Route path="/newProduct" element={<NewProduct />} />
              <Route path="*" element={<h1>Page Not Found</h1>} />
            </Routes>
          </div>
        </React.Fragment>
      )} */}
    </React.Fragment>
  );
}

export default App;
