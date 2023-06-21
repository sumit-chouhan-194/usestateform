import { useState } from "react";
import { Container, Row } from "react-bootstrap";
import overview_big from "../images/overview_big-img.png";
import overview1img from "../images/overview_img1.png";
import overview2img from "../images/overview_img2.png";
import overview3img from "../images/overview_img3.png";
const Form = () => {
  // images change onclick
  const [first, setfirst] = useState(0);
  // ca dropdown
  const [isActive, setIsActive] = useState(false);
  const [selected, setIsSelected] = useState("CA");
  // Doheny State Beach
  const [IsFirst, setIsFirst] = useState(false);
  const [second, setIsSecond] = useState("Doheny State Beach");
  // Rv dropdown
  const [Is3, setIs3] = useState(false);
  const [a, setIsA] = useState("RV");
  // 10 ft. dropdown
  const [Is4, setIs4] = useState(false);
  const [b, setIsB] = useState("10ft.");
  // 01
  const [Is5, setIs5] = useState(false);
  const [c, setIsC] = useState("01");
  // in date
  const [Is6, setIs6] = useState(false);
  const [d, setIsD] = useState("Friday,May 13/2022");
  // out date
  const [Is7, setIs7] = useState(false);
  const [f, setIsF] = useState("Sunday,May 15/2022");

  return (
    <>
      <section className="py-5 overview_s bg_off_white">
        <Container>
          <Row className=" justify-content-center ">
            <div className="col-xl-6 col-lg-11">
              <h2 className=" fw-bold fs_lg ff_comic_gecko">Overview</h2>
              <ul>
                <li className="ff_calibri fs_sm fw-normal color_black opecity_07">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </li>
                <li className="ff_calibri fs_sm fw-normal color_black opecity_07">
                  Commodo venenatis nec enim nisi id. Vestibulum interdum
                  dictumst rhoncus ultrices amet amet.
                </li>
                <li className="ff_calibri fs_sm fw-normal color_black opecity_07">
                  Tellus adipiscing augue curabitur leo, pretium habitant turpis
                  quis.
                </li>
                <li className="ff_calibri fs_sm fw-normal color_black opecity_07">
                  Quam mattis senectus odio mattis gravida gravida sollicitudin
                  commodo. Cursus faucibus ut egestas in metus.
                </li>
                <li className="ff_calibri fs_sm fw-normal color_black opecity_07">
                  Consequat, suspendisse duis eget purus ornare.
                </li>
              </ul>

              <div>
                <img
                  className={first === 0 ? "d-block w_xl_75 w_100 mh_315":"d-none"}
                  src={overview2img}
                  alt="nature_img"
                />
                <img
                  className={first === 1 ? "d-block w_xl_75 w_100 mh_315":"d-none"}
                  src={overview1img}
                  alt="nature_img"
                />
                <img
                  className={first === 2 ? "d-block w_xl_75 w_100 mh_315":"d-none"}
                  src={overview3img}
                  alt="nature_img"
                />
              </div>
              <div className="ms-xl-5 d-flex justify-content-center justify-content-xl-start mb-xl-2 ">
                <div className="img_box d-flex gap-3 ms-xl-2 mt-xl-4 mt-3 align-items-center">
                  <div>
                    <img
                      onClick={() => setfirst(0)}
                      className="w-100 "
                      src={overview2img}
                      alt="nature_img"
                    />
                  </div>
                  <div>
                    <img
                      onClick={() => setfirst(1)}
                      className="w-100"
                      src={overview1img}
                      alt="nature_img"
                    />
                  </div>
                  <div>
                    <img
                      onClick={() => setfirst(2)}
                      className="w-100 "
                      src={overview3img}
                      alt="nature_img"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6 mt-3 mt_xl-0 col-lg-11">
              <div className="form_col position-relative z-0">
                <h2 className="ff_comic_gecko color_white fs_lg ">
                  Platte River Sold Out? We can get you a reservation!
                </h2>
                <form className="form_box w-100 mt-4 position-relative z-5">
                  <h3 className="text-center ff_comic_gecko color_white fs_md justify-content-between">
                    GET STARTED HERE
                  </h3>
                  {/*=========================== first dropdown ==================================*/}
                  <div className="d-flex flex-column flex-sm-row align-items-center mt_24 justify-content-between gap-2">
                    <div className="dropdown mw_92 mb-1 mb-sm-0">
                      <div
                        onClick={(e) => {
                          setIsActive(!isActive);
                        }}
                        className="dropdown-btn"
                      >
                        {selected}
                        <span
                          className={
                            isActive ? "fas fa-caret-up" : "fas fa-caret-down "
                          }
                        />
                      </div>
                      <div
                        className="dropdown-content"
                        style={{ display: isActive ? "block" : "none" }}
                      >
                        <div
                          onClick={(e) => {
                            setIsSelected(e.target.textContent);
                            setIsActive(!isActive);
                          }}
                          className="item"
                        >
                          EA
                        </div>
                        <div
                          className="item"
                          onClick={(e) => {
                            setIsSelected(e.target.textContent);
                            setIsActive(!isActive);
                          }}
                        >
                          DA
                        </div>
                      </div>
                    </div>
                    {/*============================ secound dropdown============================= */}
                    <div className="dropdown mw_252 ">
                      <div
                        onClick={(e) => {
                          setIsFirst(!IsFirst);
                        }}
                        className="dropdown-btn"
                      >
                        {second}
                        <span
                          className={
                            IsFirst ? "fas fa-caret-up" : "fas fa-caret-down "
                          }
                        />
                      </div>
                      <div
                        className="dropdown-content"
                        style={{ display: IsFirst ? "block" : "none" }}
                      >
                        <div
                          onClick={(e) => {
                            setIsSecond(e.target.textContent);
                            setIsFirst(!IsFirst);
                          }}
                          className="item"
                        >
                          Haryana state branch
                        </div>
                        <div
                          className="item"
                          onClick={(e) => {
                            setIsSecond(e.target.textContent);
                            setIsFirst(!IsFirst);
                          }}
                        >
                          hansi state branch
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex  mt_24 align-items-center justify-content-sm-between justify-content-center flex-column flex-sm-row">
                    <p className="w_no_wrap pb-2 pb-sm-0">Site Type:</p>
                    <div className="d-flex w-100 justify-content-sm-end justify-content-center">
                      {/* ========================================== rv ==============================*/}
                      <div className="dropdown mw_134 pe-2">
                        <div
                          onClick={(e) => {
                            setIs3(!Is3);
                          }}
                          className="dropdown-btn"
                        >
                          {a}
                          <span
                            className={
                              setIs3 ? "fas fa-caret-up" : "fas fa-caret-down "
                            }
                          />
                        </div>
                        <div
                          className="dropdown-content"
                          style={{ display: Is3 ? "block" : "none" }}
                        >
                          <div
                            onClick={(e) => {
                              setIsA(e.target.textContent);
                              setIs3(!Is3);
                            }}
                            className="item"
                          >
                            RM
                          </div>
                          <div
                            className="item"
                            onClick={(e) => {
                              setIsA(e.target.textContent);
                              setIs3(!Is3);
                            }}
                          >
                            PW
                          </div>
                        </div>
                      </div>
                      {/*============================================ 10 ft =============================*/}
                      <div className="dropdown mw_108 ms-2 ">
                        <div
                          onClick={(e) => {
                            setIs4(!Is4);
                          }}
                          className="dropdown-btn"
                        >
                          {b}
                          <span
                            className={
                              setIs4 ? "fas fa-caret-up" : "fas fa-caret-down "
                            }
                          />
                        </div>
                        <div
                          className="dropdown-content"
                          style={{ display: Is4 ? "block" : "none" }}
                        >
                          <div
                            onClick={(e) => {
                              setIsB(e.target.textContent);
                              setIs4(!Is4);
                            }}
                            className="item"
                          >
                            15 Ft.
                          </div>
                          <div
                            className="item"
                            onClick={(e) => {
                              setIsB(e.target.textContent);
                              setIs4(!Is4);
                            }}
                          >
                            20 Ft.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex  align-items-center mt_24 justify-content-between flex-column flex-sm-row">
                    <p className="pb-2 pb-sm-0">Number in your party:</p>
                    <div className="dropdown mw_108 ">
                      <div
                        onClick={(e) => {
                          setIs5(!Is5);
                        }}
                        className="dropdown-btn"
                      >
                        {c}
                        <span
                          className={
                            Is5 ? "fas fa-caret-up" : "fas fa-caret-down "
                          }
                        />
                      </div>
                      <div
                        className="dropdown-content"
                        style={{ display: Is5 ? "block" : "none" }}
                      >
                        <div
                          onClick={(e) => {
                            setIsC(e.target.textContent);
                            setIs5(!Is5);
                          }}
                          className="item"
                        >
                          02
                        </div>
                        <div
                          className="item"
                          onClick={(e) => {
                            setIsC(e.target.textContent);
                            setIs5(!Is5);
                          }}
                        >
                          03
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex justify-content-between mt_24 flex-column flex-sm-row align-items-center">
                    <p className="pb-2 pb-sm-0">Check in Date:</p>
                    <div className="dropdown mw_214 ">
                      <div
                        onClick={(e) => {
                          setIs6(!Is6);
                        }}
                        className="dropdown-btn"
                      >
                        {d}
                        <span
                          className={
                            Is6 ? "fas fa-caret-up" : "fas fa-caret-down "
                          }
                        />
                      </div>
                      <div
                        className="dropdown-content"
                        style={{ display: Is6 ? "block" : "none" }}
                      >
                        <div
                          onClick={(e) => {
                            setIsD(e.target.textContent);
                            setIs6(!Is6);
                          }}
                          className="item"
                        >
                          saturday,july 14/2023
                        </div>
                        <div
                          className="item"
                          onClick={(e) => {
                            setIsD(e.target.textContent);
                            setIs6(!Is6);
                          }}
                        >
                          monday,june 14/2023
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex justify-content-between mt_24 flex-column flex-sm-row align-items-center pb-5">
                    <p className="pb-2 pb-sm-0">Check Out Date:</p>
                    <div className="dropdown mw_214 ">
                      <div
                        onClick={(e) => {
                          setIs7(!Is7);
                        }}
                        className="dropdown-btn"
                      >
                        {f}
                        <span
                          className={
                            Is7 ? "fas fa-caret-up" : "fas fa-caret-down "
                          }
                        />
                      </div>
                      <div
                        className="dropdown-content"
                        style={{ display: Is7 ? "block" : "none" }}
                      >
                        <div
                          onClick={(e) => {
                            setIsF(e.target.textContent);
                            setIs7(!Is7);
                          }}
                          className="item"
                        >
                          monday,August 14/2023
                        </div>
                        <div
                          className="item"
                          onClick={(e) => {
                            setIsF(e.target.textContent);
                            setIs7(!Is7);
                          }}
                        >
                          monday,August 14/2023
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="ps-md-5 pb-3">
                    {" "}
                    <button className="ff_comic_gecko fw-bold color_white bg_green rounded-5 border-0 fs_sm px-4 py-2 w_no_wrap mx-auto">
                      Continue to Step 2
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Form;
