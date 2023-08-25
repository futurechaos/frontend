import "../cssfiles/footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import {
  faInstagram,
  faTwitter,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer id="#footer" className="footer container-fluid">
      <div className="about">
        <h2>About us</h2>
        <p>
          Welcome to Future Chaos, a cutting-edge clothing brand that emerged in
          August 2023. Our brand's mission is to provide high-quality clothes
          that blend contemporary style with a touch of futuristic elements. We
          strive to bring you the latest trends and designs that exude
          creativity and individuality. With a focus on quality craftsmanship
          and sustainable practices, we are committed to outfitting you in
          clothing that is not only fashionable but also environmentally
          conscious. Join us in embracing the chaos of the future with our
          unique and stylish collections!
        </p>
      </div>

      <div className="contact">
        <h2>Contact</h2>
        <br />
        <FontAwesomeIcon icon={faEnvelope} className="contact-i" />
        <h4>
          <a href="mailto: helpfuturechaos@gamil.com">
            helpfuturechaos@gamil.com
          </a>
        </h4>
        <br />
        <FontAwesomeIcon icon={faPhone} className="contact-i" />
        <h4>
          <a href="tel: 8412858295"> 8412858295</a>
        </h4>
        <br />
      </div>

      <div className="help">
        <h2>Help</h2>
        <a
          href=""
          onClick={() => {
            navigate("/terms-conditions");
          }}
        >
          Terms & Conditions
        </a>
        <a
          href=""
          onClick={() => {
            navigate("return-exchange");
          }}
        >
          Return / Exchange – T&C
        </a>
      </div>

      <div className="links">
        <button
          onClick={() => {
            window.open("https://www.instagram.com/futurechaos.in/", "_blank");
          }}
        >
          <FontAwesomeIcon icon={faInstagram} className="insta i" />
        </button>
        <button
          onClick={() =>
            window.open(
              " https://twitter.com/_FutureChaos?t=YVesEdjPSD44w94kzzNPNQ&s=08",
              "_blank"
            )
          }
        >
          <FontAwesomeIcon icon={faTwitter} className="twitter i" />
        </button>
        <button
          onClick={() =>
            window.open("https://www.facebook.com/FutureChaos.in", "_blank")
          }
        >
          <FontAwesomeIcon icon={faFacebook} className="facebook i" />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
