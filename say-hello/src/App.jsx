// import logo from './logo.svg';

import ironhackLogo from './images/ironhack-logo-xs.png';
import menuTop from './images/menu-top-xs.png';
import declarativeIcon from './images/icon1.png';
import componentsIcon from './images/icon2.png';
import singleWayIcon from './images/icon3.png';
import JSXIcon from './images/icon4.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="hero">
        <div className="navbar">
          <img id="ironhack-logo" src={ironhackLogo} alt="ironhack logo" />
          <img id="menu-logo" src={menuTop} alt="" />
        </div>
        <div className="App-header">
          <h1>
            Say hello to <br />
            ReactJS
          </h1>
          <p>
            You will learn how to use <br />
            the most popular frontend library, <br />
            and become a super Ninja developer.
          </p>
          <button>Awesome!</button>
        </div>
      </div>
      <div className="details">
        <div>
          <img className="detailIcons" src={declarativeIcon} alt="" />
          <h3>Declarative</h3>
          <p>React makes it painless to create interactive UIs</p>
        </div>
        <div>
          <img className="detailIcons" src={componentsIcon} alt="" />
          <h3>Components</h3>
          <p>Build encapsulated components that manage tehir state</p>
        </div>
        <div>
          <img className="detailIcons" src={singleWayIcon} alt="" />
          <h3>Single-Way</h3>
          <p>A set of immutable values are passed to the components</p>
        </div>
        <div>
          <img className="detailIcons" src={JSXIcon} alt="" />
          <h3>JSX</h3>
          <p>Statically-typed, designed to run on modern browsers.</p>
        </div>
      </div>
    </div>
  );
}

export default App;
