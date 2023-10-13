import Contact from "../NavPanelComponents/Contact";
import Lesson from "../NavPanelComponents/Lesson";
import Subscribe from "../NavPanelComponents/Subscribe";
import Slider from "./MainComponents/Slider";

export default function Main() {
  return (
    <>
      <Slider />
      <Subscribe />
      <Lesson />
      <Contact />
    </>
  );
}
