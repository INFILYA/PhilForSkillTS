import { Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import Footer from "./HMF/Footer";
import Header from "./HMF/Header";
import Main from "./HMF/Main";
import Contact from "./NavPanelComponents/Contact";
import Lesson from "./NavPanelComponents/Lesson";
import Subscribe from "./NavPanelComponents/Subscribe";
import HighlightVideoMaker from "./NavPanelComponents/HighlightVideoMaker";
import Reviews from "./NavPanelComponents/Reviews";
import Shop from "./NavPanelComponents/Shop";
import AboutMe from "./NavPanelComponents/AboutMe";
import { setLocalStorageProducts } from "./state/slices/cartTotalProductsSlice";
import { setCardProductsQuantity } from "./state/slices/cartProductsQuantitySlice";
import { setCartProductsPrice } from "./state/slices/cartProductsPriceSlice";
import ShopCart from "./NavPanelComponents/ShopCart";
import { getFromLocalStorage, later } from "./utilities/Functions";
import { collection, getDocs } from "firebase/firestore";
import { dataBase } from "./Firebase/config";
import BookLesson from "./NavPanelComponents/BookLesson";
import { useAppDispatch } from "./state/store";
import Products from "./NavPanelComponents/Shop products/Products";
import MyLogo from "./MyLogo";

export default function PhilForSkill() {
  const dispatch = useAppDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [burgerMenu, setBurgerMenu] = useState<boolean>(false);

  useEffect(() => {
    async function getProducts() {
      try {
        setIsLoading(true);
        await later(2500);
        const data = await getDocs(collection(dataBase, "products"));
        const list = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
        localStorage.setItem("products", JSON.stringify(list));
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    }
    getProducts();
    const cartContent = getFromLocalStorage("cartContent");
    const cartProductsQuantity = getFromLocalStorage("cartProductsQuantity");
    const cartProductsPrice = getFromLocalStorage("cartProductsPrice");
    dispatch(setLocalStorageProducts(cartContent || []));
    dispatch(setCardProductsQuantity(cartProductsQuantity || 0));
    dispatch(setCartProductsPrice(cartProductsPrice || 0));
  }, [dispatch]);
  return (
    <>
      <Header burgerMenu={burgerMenu} setBurgerMenu={setBurgerMenu} />
      {!burgerMenu ? (
        <>
          <main>
            {isLoading ? (
              <div className="loading-logo-wrapper">
                <div className="logo-wrapper">
                  <img src="/photos/ball.png" alt="" className="back-photo" />
                  <MyLogo />
                  <div className="backGround"></div>
                </div>
              </div>
            ) : (
              <article>
                <Routes>
                  <Route path="/" element={<Main />} />
                  <Route path="/Contact" element={<Contact />} />
                  <Route path="/Lesson" element={<Lesson />} />
                  <Route path="/Subscribe" element={<Subscribe />} />
                  <Route path="/About me" element={<AboutMe />} />
                  <Route path="/Book a Lesson" element={<BookLesson />} />
                  <Route path="/Highlight Video Maker" element={<HighlightVideoMaker />} />
                  <Route path="/Reviews" element={<Reviews />} />
                  <Route path="/Shoping Cart" element={<ShopCart />} />
                  <Route path="/Shop" element={<Shop />} />
                  <Route path="/Shop/Products" element={<Products />} />
                </Routes>
              </article>
            )}
          </main>
          <footer>
            <Footer />
          </footer>
        </>
      ) : null}
    </>
  );
}
