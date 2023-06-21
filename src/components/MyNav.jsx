import React, { useState } from "react";
const MyNav = () => {
  const [show, setshow] = useState(true);
  function showNav() {
    setshow(!show);
  }
  if (show) {
    document.body.classList.add("overflow-hidden");
  } else {
    document.body.classList.remove("overflow-hidden");
  }
  return (
    <>
      <nav className="py-4 bg-warning">
        <div className="container d-flex justify-content-between">
          <span className="fw-bold fs-4">logo</span>
          <ul className="d-md-flex gap-4 mb-0 d-none d-block">
            <li>
              <a href="youtube.com">home</a>
            </li>
            <li>
              <a href="youtube.com">about</a>
            </li>
            <li>
              <a href="youtube.com">contect</a>
            </li>
            <li>
              <a href="youtube.com">help</a>
            </li>
          </ul>
          <div
            className="d-flex justify-content-between flex-column d-md-none"
            onClick={showNav}
          >
            <span className="menuicon"></span>
            <span className="menuicon"></span>
            <span className="menuicon"></span>
          </div>
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

export default MyNav;
