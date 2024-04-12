import exterior1 from "../assets/img/exterior1.png";
import exterior2 from "../assets/img/exterior2.png";

import diningtable from "../assets/img/diningtable.png";
import steak3 from "../assets/img/steak3.png";

import logo from "../assets/img/logo1.png";

export default function Home() {
  return (
    <div id="home" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="homelogo-box">
          <img src={logo} className="homelogo-image" />
        </div>
        <div className="carousel-item active" data-bs-interval="7000">
          <img src={exterior1} className="d-block w-100" alt="First Slide" />
        </div>
        <div className="carousel-item" data-bs-interval="4000">
          <img src={diningtable} className="d-block w-100" alt="Second Slide" />
        </div>
        <div className="carousel-item" data-bs-interval="4000">
          <img src={exterior2} className="d-block w-100" alt="Third Slide" />
        </div>
        <div className="carousel-item" data-bs-interval="4000">
          <img src={steak3} className="d-block w-100" alt="Fourth Slide" />
        </div>
        <div className="bubbles">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  );
}
