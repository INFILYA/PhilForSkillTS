import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import Button from "../utilities/Button";
import { auth } from "../Firebase/config";
import { useAuthState } from "react-firebase-hooks/auth";

type THeaderParams = {
  burgerMenu: boolean;
  setBurgerMenu(arg: boolean): void;
};

export default function Header(props: THeaderParams) {
  const [isRegistratedUser] = useAuthState(auth);
  const { burgerMenu, setBurgerMenu } = props;
  const [width, setWidth] = useState<number>(window.innerWidth);
  const [sandwichMenu, setSandwichMenu] = useState<boolean>(false);
  const navItems = [
    "About me",
    "Lesson",
    "Highlight Video Maker",
    "Contact",
    "Reviews",
    "Shop",
    "Subscribe",
  ];
  const cartProductsQuantity = useSelector(
    (state) => state.cartProductsQuantity.cartProductsQuantity
  );
  function checkWidthOfWindow() {
    setWidth(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener("resize", checkWidthOfWindow);
    width > 768 ? setSandwichMenu(false) : setSandwichMenu(true);
    return () => {
      window.removeEventListener("resize", checkWidthOfWindow);
    };
  }, [width]);
  return (
    <header>
      <div className="barWrapper" style={burgerMenu ? { backgroundColor: "white" } : {}}>
        <div className="header-border"></div>
        <div className="innerContainer">
          <div className="titleNavWrapper">
            <div className="logo">
              <NavLink to={"/"}>
                <img src="/photos/Logo.jpg" alt="" onClick={() => setBurgerMenu(false)}></img>
                <div className="user-photo-wrapper">
                  <img src={isRegistratedUser?.photoURL as string} alt="" />
                </div>
              </NavLink>
            </div>
            {!sandwichMenu && (
              <div className="navigation">
                <nav>
                  {navItems.map((item) => (
                    <NavLink to={`/${item}`} key={item}>
                      {item}
                    </NavLink>
                  ))}
                </nav>
              </div>
            )}
          </div>
          {!sandwichMenu ? (
            <div className="actions">
              <div className="social">
                <a href="https://www.instagram.com/harmash_30/" className="instagram">
                  <img alt="" src="/photos/instagram.jpg"></img>
                </a>
                <a href="https://www.facebook.com/philip.harmash/">
                  <img alt="" src="/photos/facebook.jpg"></img>
                </a>
                <div className="shoping-cart-wrapper">
                  <NavLink to="/Shoping Cart">
                    <img alt="" src="/photos/shop-cart.jpg"></img>
                  </NavLink>
                  <div className="count">
                    {cartProductsQuantity === 0 ? "" : cartProductsQuantity}
                  </div>
                </div>
                <div className="lessonBtn">
                  <NavLink to={"Book a Lesson"}>
                    <Button text="Book a Lesson" type="button" />
                  </NavLink>
                </div>
              </div>
            </div>
          ) : (
            <div className="header-burger">
              <div className="shoping-cart-wrapper">
                <div style={{ display: "flex", alignItems: "center" }}>
                  <NavLink to="/Shoping Cart">
                    <img
                      alt=""
                      src="/photos/shop-cart.jpg"
                      onClick={() => setBurgerMenu(false)}
                    ></img>
                  </NavLink>
                  <div className="count" style={burgerMenu ? { color: "black" } : {}}>
                    {cartProductsQuantity}
                  </div>
                  <button type="button" onClick={() => setBurgerMenu(!burgerMenu)}>
                    {!burgerMenu ? (
                      <div className="burger-box">
                        <div className="burger-inner">
                          <div></div>
                          <div></div>
                          <div></div>
                        </div>
                      </div>
                    ) : (
                      <div
                        className="close-burger-menu"
                        style={burgerMenu ? { color: "black" } : {}}
                      >
                        X
                      </div>
                    )}
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      {burgerMenu && (
        <div className="header-menu-nav">
          <nav>
            <div className="header-menu-nav-folder-content">
              {navItems.map((item) => (
                <div className="container-header-menu-item" key={item}>
                  <NavLink to={`/${item}`}>
                    <div onClick={() => setBurgerMenu(!burgerMenu)}>{item}</div>
                  </NavLink>
                </div>
              ))}
            </div>
            <div className="header-menu-actions">
              <div className="social">
                <a href="https://www.instagram.com/harmash_30/" className="instagram">
                  <img alt="" src="/photos/instagram.jpg"></img>
                </a>
                <a href="https://www.facebook.com/philip.harmash/">
                  <img alt="" src="/photos/facebook.jpg"></img>
                </a>
              </div>
            </div>
            <div className="header-menu-booklesson-button">
              <div className="lessonBtn">
                <NavLink to={"Book a Lesson"}>
                  <Button
                    text="Book a Lesson"
                    type="button"
                    onClick={() => setBurgerMenu(!burgerMenu)}
                  />
                </NavLink>
              </div>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
