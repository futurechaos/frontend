import { useDispatch } from "react-redux";
import "../cssfiles/home.css";
import Catalogue from "./Catalogue";
import Limited from "./Limited";
import Testimonial from "./Testimonial";
import { setLoginOpen } from "../features/loginSlice";
import { useEffect } from "react";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const userid = localStorage.getItem("userId");
    const cookieValue = document.cookie.replace(
      /(?:(?:^|.*;\s*)userId\s*\=\s*([^;]*).*$)|^.*$/,
      "$1"
    );

    if (userid && cookieValue === userid) {
      dispatch(setLoginOpen(true));
    }
  }, []);

  return (
    <>
      <div className="home container-fluid">
        <div className="home-holding">
          <img src="/images/wallpaper.jpg" alt="" />
        </div>
        <h1 className="home-holding-text">
          FUTURE
          <br />
          CHAOS
        </h1>
        <br />
        <a href="#" className="explore-btn btn">
          EXPLORE
        </a>
      </div>
      <Catalogue />
      <Limited />
      <Testimonial />
    </>
  );
};

export default Home;
