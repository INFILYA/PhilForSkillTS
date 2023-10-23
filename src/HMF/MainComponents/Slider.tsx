import { useEffect, useState } from "react";
import { signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import SectionWrapper from "../../Wrappers/SectionWrapper";
import { later } from "../../utilities/Functions";
import { auth } from "../../Firebase/config";
import Button from "../../utilities/Button";
import { setUserInformation } from "../../state/slices/userInfoSlice";
import { SliderWrap } from "../../css/PhilForSkill.styled";
import { useAppDispatch } from "../../state/store";

function Slider() {
  const dispatch = useAppDispatch();
  const [isRegistratedUser] = useAuthState(auth);
  const pictures = ["/photos/very.jpg", "/photos/team.jpg", "/photos/its.jpg"];
  const PAGE_WIDTH = window.innerWidth;
  const [currentPosition, setCurrentPosition] = useState<number>(0);
  const maxLengthOfAllItems = (pictures.length - 1) * PAGE_WIDTH;
  useEffect(() => {
    async function rollingSlider() {
      await later(5000);
      if (currentPosition > -maxLengthOfAllItems) {
        setCurrentPosition(currentPosition - PAGE_WIDTH);
      }
      if (currentPosition === -maxLengthOfAllItems) {
        setCurrentPosition(0);
      }
    }
    rollingSlider();
  }, [PAGE_WIDTH, maxLengthOfAllItems, currentPosition]);
  async function logout() {
    try {
      await signOut(auth);
      dispatch(setUserInformation(""));
    } catch (err) {
      console.error(err);
    }
  }
  return (
    <SectionWrapper
      background={
        <SliderWrap transform={currentPosition}>
          {pictures.map((pick) => (
            <img src={pick} alt="" className="slider-item" key={pick} />
          ))}
        </SliderWrap>
      }
      content={
        <div className="slider-content-wrapper">
          <div className="logout-wrapper">
            {isRegistratedUser && <Button text="Sign out" type="button" onClick={logout} />}
          </div>
          <div className="remark">
            <h2>
              <em>Transform your Fantasy into your Legacy</em>
            </h2>
          </div>
        </div>
      }
    />
  );
}
export default Slider;
