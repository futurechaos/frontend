import "../cssfiles/navbar.css";
import "@fortawesome/fontawesome-svg-core";
import {
  faCartShopping,
  faBars,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Cart from "./Cart";
import { useSelector, useDispatch } from "react-redux";
import { setCartOpen } from "../features/cartSlice";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [active, setActive] = useState(false);
  const [order, setOrder] = useState(false);
  const navigate = useNavigate();
  const cartToggle = useSelector((state) => state.cart.value);
  const signupToggle = useSelector((state) => state.login.value);
  const dispatch = useDispatch();

  const handleHome = () => {
    navigate("/");
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const handleAbout = () => {
    window.scrollTo({
      top: 2000,
      behavior: "smooth",
    });
  };
  const handlecatalogue = () => {
    navigate("/allproducts");
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const handleHamburger = () => {};

  const handleUser = () => {
    setActive((prevActive) => !prevActive);
  };
  const handleCart = () => {
    dispatch(setCartOpen(true));
  };

  const handleOrders = () => {
    navigate("/order");
  };

  const handleLogout = () => {
    localStorage.removeItem("userId");
    document.cookie = "userId=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    navigate("/");
    location.reload();
  };

  return (
    <>
      <div className="nav-fluid container-fluid">
        <button className="hamburger">
          <FontAwesomeIcon
            className="ham-icon"
            icon={faBars}
            onClick={handleHamburger}
          />
        </button>
        <div className="nav-header1">
          <a href="/">
            <img src="/images/navbar-title.png" alt="" />
          </a>
        </div>
        <div className="nav-header2">
          <ul className="mt-2 ul">
            <button onClick={handleHome}>
              {" "}
              <li>Home</li>{" "}
            </button>
            <button onClick={handlecatalogue}>
              {" "}
              <li>Catalogue</li>{" "}
            </button>
            <button onClick={handleAbout}>
              {" "}
              <li>About Us</li>{" "}
            </button>
            <button>
              {" "}
              <li>Contact</li>{" "}
            </button>
          </ul>
        </div>
        <div className="nav-header3">
          {signupToggle ? (
            <>
              <button className="usericon-btn" onClick={handleUser}>
                <FontAwesomeIcon icon={faUser} className="usericon" />
              </button>
              {active ? (
                <div className="user-items">
                  <button onClick={handleOrders}>
                    <li>My Orders</li>
                  </button>
                  <br />
                  <button onClick={handleLogout}>
                    <li>Logout</li>
                  </button>
                </div>
              ) : null}
            </>
          ) : (
            <button
              className="btn signin"
              onClick={() => {
                navigate("/signup");
              }}
            >
              Sign Up
            </button>
          )}
          <button onClick={handleCart}>
            <FontAwesomeIcon icon={faCartShopping} className="cart-i" />
          </button>
        </div>
      </div>
      {cartToggle && <Cart />}
    </>
  );
};

export default Navbar;
