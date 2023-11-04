import { useSearchParams } from "react-router-dom";
import { TProduct } from "../../Types/types";
import SectionWrapper from "../../Wrappers/SectionWrapper";
import { getFromLocalStorage } from "../../utilities/Functions";
import AddToCart from "../AddToCart";

export default function Products() {
  const [searchParams] = useSearchParams();
  const myParam = searchParams.get("product");
  const listOfProducts: TProduct[] = getFromLocalStorage("products");
  const product = listOfProducts.find((item) => item.name === myParam);
  if (!product) return null;
  return <SectionWrapper content={<AddToCart product={product} />} />;
}
