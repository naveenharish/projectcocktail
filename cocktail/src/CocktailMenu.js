import React, { useState, useEffect } from "react";
import appleImage from "./assets/Applejack-Rabbit-1.jpg";
import rumImage from "./assets/hot-rum.webp";
import pumpkinImage from "./assets/whitepumpkin.webp";
import cranImage from "./assets/Cranberry-Mule.webp";

function CocktailMenu() {
  const [customerName, setCustomerName] = useState("");
  const [orders, setOrders] = useState([]);

  const cocktails = [
    {
      name: "Cranberry Mule",
      image: cranImage,
      description:
        'The refreshingly spicy classic we all know and love, with a seasonal twist that’ll make you say… "Wanna Sprite Cranberry?"',
    },
    {
      name: "White Pumpkin",
      image: pumpkinImage,
      description:
        "The 'White Girl Fall' version of its Russian counterpart, this cocktail is sure to bring a smile to your face and likes to your Pinterest board.",
    },
    {
      name: "Apple Jackrabbit",
      image: appleImage,
      description:
        "A very, very boozy caramel apple—so be sure to keep this away from your kids… or not.",
    },
    {
      name: "Hot Buttered Rum",
      image: rumImage,
      description:
        "I thought cocktails were supposed to be cold? Well, you thought wrong. This rich and spicy draught is perfect for snuggling by the fireplace with that special someone—but in this case, the homies will more than suffice. :)",
    },
  ];

  useEffect(() => {
    // Check if customer name is stored in localStorage
    const storedName = localStorage.getItem("customerName");
    if (storedName) {
      setCustomerName(storedName);
    } else {
      // Prompt the user for their name
      let name = "";
      while (!name) {
        name = prompt("Please enter your name:");
        if (name) {
          localStorage.setItem("customerName", name);
          setCustomerName(name);
        }
      }
    }
  }, []);

  const placeOrder = (drinkName) => {
    // Send order to backend
    fetch("http://localhost:8080/api/order", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ customerName, drinkName }),
    })
      .then((response) => response.json())
      .then((order) => {
        alert(`Order placed for ${drinkName}!`);
        // Connect to SSE for order updates
        connectToOrderUpdates(order.id, drinkName);
      })
      .catch((error) => {
        console.error("Error placing order:", error);
        alert("Failed to place order. Please try again.");
      });
  };

  const connectToOrderUpdates = (orderId, drinkName) => {
    const eventSource = new EventSource(
      `http://localhost:8080/api/customer/stream/${orderId}`
    );

    eventSource.onmessage = (event) => {
      alert(`Your ${drinkName} is ready!`);
      eventSource.close();
    };

    eventSource.onerror = (err) => {
      console.error("EventSource failed:", err);
      eventSource.close();
    };

    // Store the event source to manage it later if needed
    setOrders((prevOrders) => [...prevOrders, { orderId, eventSource }]);
  };

  return (
    <ul className="cocktail-menu">
      {cocktails.map((cocktail, index) => (
        <li key={index} className="cocktail-item">
          <div className="cocktail-entry">
            <img
              src={cocktail.image}
              alt={cocktail.name}
              className="cocktail-image"
            />
            <h3 className="cocktail-name">{cocktail.name}</h3>
            <p className="cocktail-description">{cocktail.description}</p>
            <button
              className="order-button"
              onClick={() => placeOrder(cocktail.name)}
            >
              Order Now
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default CocktailMenu;
