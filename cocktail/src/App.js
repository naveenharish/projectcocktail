import { useEffect } from 'react';
import './App.css';
import anishImage from './assets/anishpfp.png';
import naveenImage from './assets/pfp.JPG';
import CocktailMenu from './CocktailMenu';

function App() {
  useEffect(() => {
    const title = document.querySelector(".title-container");

    const handleScroll = () => {
      if (window.scrollY > title.offsetTop + title.offsetHeight) {
        title.classList.add("sticky");
      } else {
        title.classList.remove("sticky");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className="App">
      <div className="full-screen-background">
        <div className="title-container">
          <h1>PROJECT C.A.B.I.N</h1>
        </div>
      </div>
      <div id="container">
        <div id="host-section">
          <h3>Our Hosts</h3>
          <div id="host-carousel" className="carousel slide" data-ride="carousel" data-interval="5000">
            <ol className="carousel-indicators">
              <li data-target="#host-carousel" data-slide-to="0" className="active"></li>
              <li data-target="#host-carousel" data-slide-to="1"></li>
            </ol>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img className="d-block w-100" src={anishImage} alt="First slide" />
                <div className="carousel-caption d-none d-md-block">
                  <h5>Anish Babu</h5>
                  <p>Host</p>
                </div>
              </div>
              <div className="carousel-item">
                <img className="d-block w-100" src={naveenImage} alt="Second slide" />
                <div className="carousel-caption d-none d-md-block">
                  <h5>Naveen Harish</h5>
                  <p>Lead Bartender</p>
                </div>
              </div>
            </div>
            <a className="carousel-control-prev" href="#host-carousel" role="button" data-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#host-carousel" role="button" data-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>

        <div id="host-message">
          <h4>Word from the Staff</h4>
          <p>We warmly welcome you to the 2025 Cabin Trip Cocktail Night, fondly named Project C.A.B.I.N. Below, you’ll find our curated menu of decadent cocktails, each thoughtfully selected by our lead bartender and host to celebrate the season and occasion. We’re certain you’ll have an amazing time. Enjoy!</p>
        </div>

        <div id="menu">
          <h3>Menu</h3>
          <CocktailMenu/>
        </div>
      </div>
    </div>
  );
}

export default App;
