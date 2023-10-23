import { TProduct } from "../../Types/types";
import SectionWrapper from "../../Wrappers/SectionWrapper";
import { getFromLocalStorage } from "../../utilities/Functions";
import AddToCart from "../AddToCart";

export default function Curry10() {
  const listOfProducts: TProduct[] = getFromLocalStorage("products");
  const product = listOfProducts.find((item) => item.name === "Curry 10");
  if (!product) return null;
  return <SectionWrapper content={<AddToCart product={product} />} />;
}
