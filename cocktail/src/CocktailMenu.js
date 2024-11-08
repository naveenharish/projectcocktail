import appleImage from './assets/Applejack-Rabbit-1.jpg'; 
import rumImage from './assets/hot-rum.webp';
import pumpkinImage from './assets/whitepumpkin.webp';
import cranImage from './assets/Cranberry-Mule.webp';

function CocktailMenu() {
  const cocktails = [
    { name: "Cranberry Mule", image: cranImage, description: 'The refreshingly spicy classic we all know and love, with a seasonal twist that’ll make you say… "Wanna Sprite Cranberry?"' },
    { name: "White Pumpkin", image: pumpkinImage, description: "The 'White Girl Fall' version of its Russian counterpart, this cocktail is sure to bring a smile to your face and likes to your Pinterest board." }, 
    { name: "Apple Jackrabbit", image: appleImage, description: 'A very, very boozy caramel apple—so be sure to keep this away from your kids… or not. We love underage drinking!' }, 
    { name: "Hot Buttered Rum", image: rumImage, description: "I thought cocktails were supposed to be cold? Well, you thought wrong. This rich and spicy draught is perfect for snuggling by the fireplace with that special someone—but in this case, the homies will more than suffice. :)" }
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
