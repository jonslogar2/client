import { Link } from "react-router-dom";

import style from "./Navbar.module.css";
import cynLogo from "../../assets/cyn-logo.webp";

const Navbar = () => {
  return (
    <nav className={style.nav}>
      <section className={style.flex_wrapper}>
        <Link to="/">
          <img
            src={cynLogo}
            alt="CYN Solutions Inc. Logo"
            className={style.cyn_logo}
          />
        </Link>
        <div className={style.links_wrapper}>
          <Link to="/" className={style.links}>
            Home
          </Link>
          <Link to="/about-us" className={style.links}>
            About Us
          </Link>
          <Link to="/viber-page" className={style.links}>
            Viber API
          </Link>
          <Link to="/sms-page" className={style.links}>
            Send SMS
          </Link>
          <Link to="/call-page" className={style.links}>
            Call Customer
          </Link>
        </div>
      </section>
    </nav>
  );
};

export default Navbar;
