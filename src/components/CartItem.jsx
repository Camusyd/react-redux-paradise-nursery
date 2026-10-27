import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from '../CartSlice';
import './CartItem.css';

function CartItem({ onContinueShopping }) {
  const cart = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  // Calcular el costo total general del carrito
  const calculateTotalAmount = () => {
    return cart.reduce((total, item) => {
      const numericCost = parseFloat(item.cost.replace('$', ''));
      return total + numericCost * item.quantity;
    }, 0).toFixed(2);
  };

  const handleIncrement = (item) => {
    dispatch(updateQuantity({ name: item.name, quantity: item.quantity + 1 }));
  };

  const handleDecrement = (item) => {
    if (item.quantity > 1) {
      dispatch(updateQuantity({ name: item.name, quantity: item.quantity - 1 }));
    } else {
      dispatch(removeItem(item.name));
    }
  };

  const handleRemove = (item) => {
    dispatch(removeItem(item.name));
  };

  const handleCheckoutShopping = () => {
    alert('Próximamente - Funcionalidad de pago en desarrollo');
  };

  return (
    <div className="cart-container">
      <h2>🛒 Carrito de Compras</h2>
      <h3 className="cart-total">Total General: ${calculateTotalAmount()}</h3>

      {cart.length === 0 ? (
        <p className="empty-cart">Tu carrito está vacío.</p>
      ) : (
        <div className="cart-items-list">
          {cart.map(item => {
            const unitPrice = parseFloat(item.cost.replace('$', ''));
            const subtotal = (unitPrice * item.quantity).toFixed(2);
            return (
              <div className="cart-item" key={item.name}>
                <img src={item.image} alt={item.name} className="cart-item-image" />
                <div className="cart-item-details">
                  <h4>{item.name}</h4>
                  <p>Precio unitario: {item.cost}</p>
                  <p>Subtotal: ${subtotal}</p>
                  <div className="cart-item-quantity">
                    <button onClick={() => handleDecrement(item)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => handleIncrement(item)}>+</button>
                  </div>
                  <button className="delete-btn" onClick={() => handleRemove(item)}>
                    Eliminar
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}

      <div className="cart-actions">
        <button className="continue-shopping-btn" onClick={onContinueShopping}>
          Continuar Comprando
        </button>
        <button className="checkout-btn" onClick={handleCheckoutShopping}>
          Próximamente (Checkout)
        </button>
      </div>
    </div>
  );
}

export default CartItem;