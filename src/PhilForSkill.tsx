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
import Cap from "./NavPanelComponents/Shop components/Cap";
import Gloves from "./NavPanelComponents/Shop components/Gloves";
import Curry10 from "./NavPanelComponents/Shop components/Curry10";
import Tshirt from "./NavPanelComponents/Shop components/Tshirt";
import CreateVideoHighlights from "./NavPanelComponents/Shop components/CreateVideoHighlights";
import PhilForYouMentorship from "./NavPanelComponents/Shop components/PhilForYouMentorship";
import { setLocalStorageProducts } from "./state/slices/cartTotalProductsSlice";
import { setCardProductsQuantity } from "./state/slices/cartProductsQuantitySlice";
import { setCartProductsPrice } from "./state/slices/cartProductsPriceSlice";
import ShopCart from "./NavPanelComponents/ShopCart";
import { getFromLocalStorage } from "./utilities/Functions";
import { collection, getDocs } from "firebase/firestore";
import { dataBase } from "./Firebase/config";
import BookLesson from "./NavPanelComponents/BookLesson";
import { useAppDispatch } from "./state/store";

export default function PhilForSkill() {
  const dispatch = useAppDispatch();
  const [burgerMenu, setBurgerMenu] = useState<boolean>(false);

  useEffect(() => {
    async function getProducts() {
      try {
        const data = await getDocs(collection(dataBase, "products"));
        const list = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
        localStorage.setItem("products", JSON.stringify(list));
      } catch (error) {
        console.error(error);
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
                <Route path="/Shop/Cap" element={<Cap />} />
                <Route path="/Shop/Curry 10" element={<Curry10 />} />
                <Route path="/Shop/Gloves" element={<Gloves />} />
                <Route path="/Shop/Phil For You Mentorship" element={<PhilForYouMentorship />} />
                <Route path="/Shop/Create Video Highlights" element={<CreateVideoHighlights />} />
                <Route path="/Shop/T-shirt" element={<Tshirt />} />
              </Routes>
            </article>
          </main>
          <footer>
            <Footer />
          </footer>
        </>
      ) : null}
    </>
  );
}
