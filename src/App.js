import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import Quotes from "./quotes";

const TechCardItem = (props) => {
  const { TechCardData } = props;

  return <div className="rect194"></div>;
};

function App() {
  const [result, setData] = useState([]);
  const [course, setcourse] = useState([]);

  function getsomething() {
    console.log(course);
  }
  function handleclickevents(event) {
    console.log(event.currentTarget.textContent);
  }
  useEffect(() => {
    let courses = Quotes();
    courses.then(function (result) {
      console.log(result);
      setData(result);
    });
  }, ["test1"]);
  return (
    <div className="App">
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
        integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l"
        crossorigin="anonymous"
      ></link>
      <script
        src="https://code.jquery.com/jquery-3.5.1.slim.min.js"
        integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"
        crossorigin="anonymous"
      ></script>
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-Piv4xVNRyMGpqkS2by6br4gNJ7DXjqk09RmUpJ8jgGtD7zP9yug3goQfGII0yAns"
        crossorigin="anonymous"
      ></script>

      <nav
        className="navbar navbar-expand-lg navbar-light bg-light "
        id="mynav"
      >
        <a className="navbar-brand" href="#">
          <img
            src="/docs/4.6/assets/brand/bootstrap-solid.svg"
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt=""
          ></img>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                Engineering
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Course Material
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" tabindex="-1">
                Upskill
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" tabindex="-1">
                Books
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" tabindex="-1">
                Universities
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <header className="App-header">
        <div className="pdiv">
          <div className="svgdiv"></div>
          <hr className="line1"></hr>
          <h1 className="name">Anisha</h1>
          <p className="npara">Dummy text</p>
          <p className="npara1">
            lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s,
          </p>
          <div className="rect1"></div>
          <div className="rect268"></div>
        </div>
        <div className="rightdiv">
          <h1 className="rhead1">Try SmartStudy</h1>
          <hr className="line"></hr>
          <div className="rdiv alc">
            <div className="reclipse1"></div>
            <p className="ps">step 1</p>
          </div>
          <p className="cour">Course</p>
          <div className="rdiv r1">
            {result.map((e) => (
              <div className="rect194" onClick={handleclickevents}>
                {e}
              </div>
            ))}
          </div>

          <div className="dn">
            <div className="rdiv r3">
              <p className="st">stream</p>
              <p className="vsp">see all</p>
            </div>
            <div className="rect195"></div>
            <div className="rect195"></div>
            <div className="rect195"></div>
            <div className="rect195"></div>
            <div className="rect195"></div>
          </div>
          <div className="rdiv alc">
            <div className="reclipse1"></div>
            <p className="ps">step 2</p>
          </div>
          <p className="cour">Your University</p>
          <div className="rdiv alc">
            <div className="reclipse1"></div>
            <p className="ps">step 3</p>
          </div>
          <p className="cour">Your Semester</p>
          <div className="rdiv alc">
            <div className="reclipse1"></div>
            <p className="ps">step 4</p>
          </div>
          <p className="cour">Try for free</p>
        </div>
      </header>
    </div>
  );
}

export default App;
