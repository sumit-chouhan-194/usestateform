import React from "react";
import useState from "react";
const NavBar = () => {
    const [show, setshow] = useState(true);
    function showNav() {
      setshow(!show);
    }
    if (!show) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  return (
    <>
      <nav>
        <div className="container d-flex justify-content-between py-4 align-items-center">
          <span>logo</span>
          <ul className="d-md-flex gap-4 mb-0 d-none d-md-block">
            <li>
              <a href="youtube.com">home</a>
            </li>
            <li>
              <a href="youtube.com">about</a>
            </li>
            <li>
              <a href="youtube.com">contact us</a>
            </li>
            <li>
              <a href="youtube.com">help</a>
            </li>
          </ul>
          <button
            className="px-2 py-2 rounded-4 bg-black text-white d-md-none"
            onClick={showNav}
          >
            open
          </button>
          <ul
            className={`d-flex gap-4 mb-0 sm_nav mb-0 ps-0 d-md-none ${
              show ? "" : "start-0" 
            }`}
          >
            <li>
              <a href="youtube.com">home</a>
            </li>
            <li>
              <a href="youtube.com">about</a>
            </li>
            <li>
              <a href="youtube.com">contact</a>
            </li>
            <li>
              <a href="youtube.com">help</a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
