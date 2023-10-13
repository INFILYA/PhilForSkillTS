import { TProducts } from "../../Types/types";
import SectionWrapper from "../../Wrappers/SectionWrapper";
import { getFromLocalStorage } from "../../utilities/Functions";
import AddToCart from "../AddToCart";

export default function PhilForYouMentorship() {
  const listOfProducts: TProducts[] = getFromLocalStorage("products");
  const product = listOfProducts.find((item) => item.name === "Phil For You Mentorship");
  if (!product) return null;
  return <SectionWrapper content={<AddToCart product={product} />} />;
}
