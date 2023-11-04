import { useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, dataBase } from "../Firebase/config";
import { doc, setDoc } from "firebase/firestore";
import { later } from "../utilities/Functions";
import { Time } from "../utilities/Time";
import SectionWrapper from "../Wrappers/SectionWrapper";
import Button from "../utilities/Button";
import {
  selectCartProductsPrice,
  setAddProductsPrice,
  setCartProductsPrice,
  setReduceProductsPrice,
  setRemoveProductPrice,
} from "../state/slices/cartProductsPriceSlice";
import {
  selectCartProductsQuantity,
  setCardProductsQuantity,
  setMinusOneProductsQuantity,
  setPlusOneProductsQuantity,
  setRemoveProductQuantity,
} from "../state/slices/cartProductsQuantitySlice";
import {
  selectCartTotalProducts,
  setLocalStorageProducts,
  setProduct,
  setRemoveProductFromCart,
} from "../state/slices/cartTotalProductsSlice";
import { useAppDispatch } from "../state/store";
import { selectUserInfo } from "../state/slices/userInfoSlice";
import { TChoosenProduct } from "../Types/types";

export default function ShopCart() {
  const dispatch = useAppDispatch();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [gratefullMessage, setGratefullMessage] = useState<boolean>(false);
  const [isRegistratedUser] = useAuthState(auth);
  const cartTotalProducts = useSelector(selectCartTotalProducts);
  const totalPrice = useSelector(selectCartProductsPrice);
  const totalQuantity = useSelector(selectCartProductsQuantity);
  const userInfo = useSelector(selectUserInfo);
  const cartIsEmpty = cartTotalProducts.length;
  function increaseQuantityOfProduct(product: TChoosenProduct) {
    dispatch(setAddProductsPrice(product.price / product.quantity));
    dispatch(setPlusOneProductsQuantity());
    dispatch(setProduct({ ...product, price: product.price / product.quantity, quantity: 1 }));
  }
  function reduceQuantityOfProduct(product: TChoosenProduct) {
    dispatch(setReduceProductsPrice(product.price / product.quantity));
    dispatch(setMinusOneProductsQuantity());
    dispatch(setProduct({ ...product, price: -(product.price / product.quantity), quantity: -1 }));
  }
  function removeProductFromCart(product: TChoosenProduct) {
    dispatch(setRemoveProductFromCart(product));
    dispatch(setRemoveProductQuantity(product.quantity));
    dispatch(setRemoveProductPrice(product.price));
  }

  async function orderProducts() {
    if (!isRegistratedUser?.email) return null;
    try {
      setIsLoading(!isLoading);
      const cartOrders = doc(dataBase, isRegistratedUser?.email, `${Time} Order`);
      await later(1500);
      await setDoc(cartOrders, {
        ...cartTotalProducts.map((item) => {
          const { name, size, quantity, price } = item;
          return { name: name, size: size, quantity: quantity, price: price };
        }),
        userInfo: userInfo || isRegistratedUser?.email,
        totalPrice: totalPrice,
        totalQuantity: totalQuantity,
        id: auth?.currentUser?.uid,
      });
      dispatch(setLocalStorageProducts([]));
      dispatch(setCardProductsQuantity(0));
      dispatch(setCartProductsPrice(0));
      setIsLoading(!isLoading);
      setGratefullMessage(true);
      await later(3000);
      setGratefullMessage(false);
    } catch (err) {
      console.error(err);
    }
  }
  console.log(cartTotalProducts);
  return (
    <SectionWrapper
      content={
        <div className="super-cart-container">
          <h2>Shoping Cart</h2>
          {!cartIsEmpty ? (
            <div className="empty-cart">
              <div>
                {gratefullMessage ? (
                  <p>Thank you for choosing us! Soon manager will contact you.</p>
                ) : (
                  <p>The cart is empty</p>
                )}
              </div>
              <NavLink to={`/Shop`}>
                <Button text="Start shoping" type="button" />
              </NavLink>
            </div>
          ) : (
            <div className="cart-container">
              {cartTotalProducts.map((product) => (
                <div key={product.name + product.size} className="cart-row">
                  <div className="image-wrapper">
                    <img src={product.image} alt="" />
                  </div>
                  <div className="product-info-wrapper">
                    <div className="product-name-size-wrapper">
                      <div className="product-name-wrapper">
                        <strong>{product.name}</strong>
                      </div>
                      {product.size.length > 0 && (
                        <div className="product-size-wrapper">Size: {product.size}</div>
                      )}
                    </div>
                    <div className="product-quantity-container">
                      <button
                        onClick={() => reduceQuantityOfProduct(product)}
                        disabled={product.quantity === 1}
                      >
                        <div>-</div>
                      </button>
                      <div className="quantity">{product.quantity}</div>
                      <button onClick={() => increaseQuantityOfProduct(product)}>
                        <div>+</div>
                      </button>
                    </div>
                  </div>
                  <div className="product-price-wrapper">
                    <div>$ {product.price}.00</div>
                  </div>
                  <div className="button-remove-wrapper">
                    <button onClick={() => removeProductFromCart(product)}>
                      <div>X</div>
                    </button>
                  </div>
                </div>
              ))}
              <div className="create-order-wrapper">
                <div>
                  <h3>Total Price: ${totalPrice}.00</h3>
                </div>
                <div>
                  <h3>Total Quantity: {totalQuantity}</h3>
                </div>
                <div>
                  {!isRegistratedUser ? (
                    <Button
                      text="To continue need to Subscribe"
                      onClick={orderProducts}
                      disabled={!isRegistratedUser}
                      type="button"
                    />
                  ) : (
                    <Button
                      text={!isLoading ? "Check Out" : "Adding..."}
                      onClick={orderProducts}
                      disabled={isLoading}
                      type="button"
                    />
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      }
    />
  );
}
