import { TProduct } from "../../Types/types";
import SectionWrapper from "../../Wrappers/SectionWrapper";
import { getFromLocalStorage } from "../../utilities/Functions";
import AddToCart from "../AddToCart";

export default function Tshirt() {
  const listOfProducts: TProduct[] = getFromLocalStorage("products");
  const product = listOfProducts.find((item) => item.name === "T-shirt");
  if (!product) return null;
  return <SectionWrapper content={<AddToCart product={product} />} />;
}
