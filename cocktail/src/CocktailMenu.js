import appleImage from './assets/Applejack-Rabbit-1.jpg'; 
import rumImage from './assets/hot-rum.webp';
import pumpkinImage from './assets/whitepumpkin.webp';
import cranImage from './assets/Cranberry-Mule.webp';

function CocktailMenu() {
  const cocktails = [
    { name: "Cranberry Mule", image: cranImage, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
    { name: "White Pumpkin", image: pumpkinImage, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." }, 
    { name: "Apple Jackrabbit", image: appleImage, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." }, 
    { name: "Hot Buttered Rum", image: rumImage, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." }
  ];

  return (
    <ul className="cocktail-menu">
      {cocktails.map((cocktail, index) => (
        <li key={index} className="cocktail-item">
          <div className="cocktail-entry">
            <img src={cocktail.image} alt={cocktail.name} className="cocktail-image" />
            <h3 className="cocktail-name">{cocktail.name}</h3>
            <p className="cocktail-description">{cocktail.description}</p>
            <button className="order-button">Order Now</button>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default CocktailMenu;
