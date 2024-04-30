import "../STYLES/CART.css";
import { ShopContext } from "../App";
import { useContext } from "react";


function Cart() {
  const { cartItems } = useContext(ShopContext);

  return (
    <div className="Cart">
      <h2>YOUR CART</h2>
      {
        cartItems.map((product, index)=>(
          <div className="cartProduct" key={index}>
            <div className="cartImage">
              <img src={product.IMAGE} alt={product.NAME} />
            </div>
            <div className="cartInfo">
              <div className="cartName">{product.NAME}</div>
              <div className="cartPrice">{product.PRICE}</div>
              <div className="cartNumber">
                <div className="cartDeg">-</div>
                <div className="cartNm"></div>
                <div className="cartInc">+</div>
              </div>
              <button type="button" className="addCart">
                Add to cart
              </button>
            </div>
          </div>
        ))
      }
      
      <div className="total">
        <h3>Total:</h3>
        <h3 className="totalAmount">$ 125486</h3>
      </div>
    </div>
  );
}

export default Cart;
