import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../CartSlice';
import CartItem from './CartItem';
import './ProductList.css';

function ProductList() {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);
  const [addedToCart, setAddedToCart] = useState({});
  const [showCart, setShowCart] = useState(false);
  const [showAboutUs, setShowAboutUs] = useState(false);

  // Cálculo total de artículos para el icono de la barra de navegación
  const totalCartItems = cartItems.reduce((total, item) => total + item.quantity, 0);

  const plantsArray = [
    // Categoría 1: Purificadoras de aire
    {
      category: "Plantas Purificadoras",
      name: "Planta Serpiente (Sansevieria)",
      image: "https://cdn.pixabay.com/photo/2021/01/22/06/04/snake-plant-5939187_1280.jpg",
      cost: "$15.00",
      description: "Produce oxígeno por la noche, excelente para el dormitorio."
    },
    {
      category: "Plantas Purificadoras",
      name: "Lirio de la Paz",
      image: "https://cdn.pixabay.com/photo/2018/02/08/10/22/flower-3139178_1280.jpg",
      cost: "$18.00",
      description: "Ayuda a limpiar toxinas del aire interior con elegantes flores blancas."
    },
    {
      category: "Plantas Purificadoras",
      name: "Planta Araña",
      image: "https://cdn.pixabay.com/photo/2018/07/11/08/29/chlorophytum-3530413_1280.jpg",
      cost: "$12.00",
      description: "Muy resistente y excelente purificadora de espacios cerrados."
    },
    {
      category: "Plantas Purificadoras",
      name: "Ficus Elástica",
      image: "https://cdn.pixabay.com/photo/2020/06/09/04/30/rubber-plant-5276709_1280.jpg",
      cost: "$22.00",
      description: "Hojas grandes y brillantes que aportan un toque tropical."
    },
    {
      category: "Plantas Purificadoras",
      name: "Aloe Vera",
      image: "https://cdn.pixabay.com/photo/2018/04/11/17/18/aloe-vera-3311306_1280.jpg",
      cost: "$10.00",
      description: "Planta medicinal muy fácil de cultivar y mantener."
    },
    {
      category: "Plantas Purificadoras",
      name: "Palmera de Salón",
      image: "https://cdn.pixabay.com/photo/2016/03/05/19/02/palm-1238316_1280.jpg",
      cost: "$25.00",
      description: "Segura para mascotas y excelente reguladora de humedad."
    },

    // Categoría 2: Aromáticas y Medicinales
    {
      category: "Aromáticas",
      name: "Lavanda",
      image: "https://cdn.pixabay.com/photo/2017/04/26/14/34/lavender-2262846_1280.jpg",
      cost: "$14.00",
      description: "Aroma relajante ideal para colocar cerca de las ventanas."
    },
    {
      category: "Aromáticas",
      name: "Menta",
      image: "https://cdn.pixabay.com/photo/2016/07/28/19/09/mint-1548446_1280.jpg",
      cost: "$9.00",
      description: "Fácil crecimiento y perfecta para infusiones caseras."
    },
    {
      category: "Aromáticas",
      name: "Romero",
      image: "https://cdn.pixabay.com/photo/2016/09/07/11/42/rosemary-1651347_1280.jpg",
      cost: "$11.00",
      description: "Aromática perenne con múltiples usos culinarios."
    },
    {
      category: "Aromáticas",
      name: "Albahaca",
      image: "https://cdn.pixabay.com/photo/2016/08/30/19/33/basil-1631175_1280.jpg",
      cost: "$8.00",
      description: "Fresca y perfecta para acompañar tus platos favoritos."
    },
    {
      category: "Aromáticas",
      name: "Tomillo",
      image: "https://cdn.pixabay.com/photo/2017/05/31/18/05/thyme-2361284_1280.jpg",
      cost: "$10.00",
      description: "Resistente a la sequía y de gran aroma campestre."
    },
    {
      category: "Aromáticas",
      name: "Manzanilla",
      image: "https://cdn.pixabay.com/photo/2020/05/17/20/20/chamomile-5183424_1280.jpg",
      cost: "$9.50",
      description: "Delicadas flores ideales para tés relajantes."
    },

    // Categoría 3: Suculentas y Cactus
    {
      category: "Suculentas",
      name: "Echeveria",
      image: "https://cdn.pixabay.com/photo/2016/11/18/17/20/living-stones-1835339_1280.jpg",
      cost: "$7.00",
      description: "Hermosa roseta compacta que requiere muy poca agua."
    },
    {
      category: "Suculentas",
      name: "Cactus de Navidad",
      image: "https://cdn.pixabay.com/photo/2018/11/29/10/50/cactus-3845347_1280.jpg",
      cost: "$13.00",
      description: "Hermosas flores de colores brillantes en temporada."
    },
    {
      category: "Suculentas",
      name: "Jade",
      image: "https://cdn.pixabay.com/photo/2020/09/01/14/21/succulent-5535314_1280.jpg",
      cost: "$12.50",
      description: "Conocida como la planta de la buena suerte y prosperidad."
    },
    {
      category: "Suculentas",
      name: "Haworthia",
      image: "https://cdn.pixabay.com/photo/2020/04/28/19/39/plant-5104886_1280.jpg",
      cost: "$8.50",
      description: "Pequeña y perfecta para escritorios u oficinas."
    },
    {
      category: "Suculentas",
      name: "Sedum Burrito",
      image: "https://cdn.pixabay.com/photo/2019/07/04/17/30/succulents-4317135_1280.jpg",
      cost: "$11.00",
      description: "Planta colgante con hojas en forma de pequeñas cuentas."
    },
    {
      category: "Suculentas",
      name: "Cactus Barril",
      image: "https://cdn.pixabay.com/photo/2019/05/27/10/35/cactus-4232353_1280.jpg",
      cost: "$16.00",
      description: "Cactus cilíndrico de gran personalidad y resistencia."
    }
  ];

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
    setAddedToCart(prevState => ({ ...prevState, [plant.name]: true }));
  };

  const handleCartClick = (e) => {
    e.preventDefault();
    setShowCart(true);
  };

  const handlePlantsClick = (e) => {
    e.preventDefault();
    setShowCart(false);
    setShowAboutUs(false);
  };

  return (
    <div>
      {/* Barra de Navegación */}
      <nav className="navbar">
        <div className="navbar-brand" onClick={handlePlantsClick} style={{ cursor: 'pointer' }}>
          🌿 <strong>Paradise Nursery</strong>
        </div>
        <div className="navbar-links">
          <a href="#plants" onClick={handlePlantsClick}>Plantas</a>
          <a href="#cart" onClick={handleCartClick}>
            🛒 Carrito <span className="cart-badge">{totalCartItems}</span>
          </a>
        </div>
      </nav>

      {showCart ? (
        <CartItem onContinueShopping={() => setShowCart(false)} />
      ) : (
        <div className="product-grid-container">
          <h2>Catálogo de Plantas</h2>
          {/* Agrupación por categorías */}
          {['Plantas Purificadoras', 'Aromáticas', 'Suculentas'].map(category => (
            <div key={category} className="category-section">
              <h3 className="category-title">{category}</h3>
              <div className="plants-list">
                {plantsArray
                  .filter(plant => plant.category === category)
                  .map(plant => (
                    <div className="plant-card" key={plant.name}>
                      <img src={plant.image} alt={plant.name} className="plant-image" />
                      <h4>{plant.name}</h4>
                      <p className="plant-desc">{plant.description}</p>
                      <p className="plant-cost">{plant.cost}</p>
                      <button
                        className={`add-to-cart-btn ${addedToCart[plant.name] ? 'added' : ''}`}
                        onClick={() => handleAddToCart(plant)}
                        disabled={addedToCart[plant.name]}
                      >
                        {addedToCart[plant.name] ? 'Agregado' : 'Agregar al Carrito'}
                      </button>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ProductList;