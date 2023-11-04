import { Link, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import SectionWrapper from "../Wrappers/SectionWrapper";
import { TProduct } from "../Types/types";
import { getFromLocalStorage } from "../utilities/Functions";

export default function Shop() {
  const [categoryChecked, setCategoryChecked] = useState<string>("Show All");
  const [products, setProducts] = useState<TProduct[]>([]);
  const categorys: string[] = ["Accessories", "Online Services", "Clothes", "Shoes", "Show All"];
  useEffect(() => {
    setProducts(getFromLocalStorage("products"));
  }, []);

  const filteredProducts = products
    .filter((item) => (categoryChecked === "Show All" ? item : item.category === categoryChecked))
    .sort((a, b) => (a.category > b.category ? -1 : 1));
  return (
    <SectionWrapper
      background={<div className="shop-background"></div>}
      content={
        <div className="shop-content-wrapper">
          <h2>Shop</h2>
          <ul className="nested-category-children">
            {categorys.map((category) => (
              <li key={category}>
                <NavLink to={`/Shop`} onClick={() => setCategoryChecked(category)}>
                  {category}
                </NavLink>
                <span>|</span>
              </li>
            ))}
          </ul>
          <div className="product-flex-container">
            <div className="list-grid">
              {filteredProducts.map((category) => (
                <div key={category.name} className="product">
                  <Link to={`/Shop/Products?product=${category.name}`}>
                    <div className="product-image-wrapper">
                      <div className="grid-image-wrapper">
                        <img src={category.image} alt="" />
                      </div>
                    </div>
                    <div className="product-prise-name-wrapper">
                      <h4 className="product-name">{category.name}</h4>
                      <div className="product-prise">$ {category.price}.00</div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      }
    />
  );
}
