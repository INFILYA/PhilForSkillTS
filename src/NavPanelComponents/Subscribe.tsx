import { useState, ChangeEvent, FormEvent } from "react";
import SectionWrapper from "../Wrappers/SectionWrapper";
import Button from "../utilities/Button";
import { TUser } from "../Types/types";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, facebookProvider, googleProvider } from "../Firebase/config";
import { useDispatch } from "react-redux";
import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { setUserInformation } from "../state/slices/userInfoSlice";

type TUserTelephone = TUser & { Telephone: string };
type TUserTelephoneKeys = keyof TUserTelephone;

export default function Subscribe() {
  const dispatch = useDispatch();
  const [isRegistratedUser] = useAuthState(auth);
  const [userInfo, setUserInfo] = useState<TUserTelephone>({
    FirstName: "",
    LastName: "",
    Telephone: "",
    Email: "",
  });
  const [userFieldError, setUserFieldError] = useState<TUserTelephone>({
    FirstName: "empty",
    LastName: "empty",
    Telephone: "empty",
    Email: "empty",
  });
  function handleChangeUserInfo(e: ChangeEvent<HTMLInputElement>) {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  }
  async function submitUserInfo(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    Object.entries(userInfo).forEach(([key, value]) => {
      setUserFieldError((prev) => ({ ...prev, [key]: value }));
    });
    if (Object.values(userInfo).some((field) => field === "")) {
      return;
    }
    try {
      await createUserWithEmailAndPassword(auth, userInfo.Email, "666666");
      dispatch(
        setUserInformation(
          `Name: ${userInfo.FirstName} ${userInfo.LastName}, Tel: ${userInfo.Telephone}, Email: ${userInfo.Email}`
        )
      );
    } catch (err) {
      setUserFieldError((prev) => ({
        ...prev,
        Email: "Invalid",
      }));
      console.error(err);
    }
  }
  async function signInWithGoogle() {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (err) {
      console.error(err);
    }
  }
  async function signInWithFaceBook() {
    try {
      await signInWithPopup(auth, facebookProvider);
    } catch (err) {
      console.error(err);
    }
  }
  const usersKeys = Object.keys(userInfo) as TUserTelephoneKeys[];

  return !isRegistratedUser ? (
    <SectionWrapper
      content={
        <div className="newsletter-block html-block">
          <form action="" onSubmit={submitUserInfo}>
            <div>
              <div className="newsletter-header">
                <h2>Subscribe for news and updates</h2>
                <p>
                  Sign up with your email address to receive news and updates and get opportunity to
                  buy something
                </p>
              </div>
              <div className="newsletter-form-body">
                <div className="newsletter-form-fields-wrapper">
                  {usersKeys.map((userKey) => (
                    <div className="newsletter-form-field-wrapper" key={userKey}>
                      {(userFieldError[userKey] === "Invalid" || !userFieldError[userKey]) && (
                        <div className="error-fied">
                          {userFieldError[userKey] === ""
                            ? userKey + " is required"
                            : userFieldError[userKey] + " " + userKey}
                        </div>
                      )}
                      <input
                        type={userKey === "Telephone" ? "tel" : "text"}
                        placeholder={userKey}
                        onChange={handleChangeUserInfo}
                        value={
                          userKey === "Telephone"
                            ? userInfo[userKey].replace(/\D+/g, "")
                            : userInfo[userKey]
                        }
                        name={userKey}
                      />
                    </div>
                  ))}
                </div>
                <div className="newsletter-button-wrapper">
                  <Button text={"Siqn up"} type={"submit"} />
                </div>
                <p>Or sign with:</p>
                <div className="sign-methods-wrapper">
                  <button type="button" className="google" onClick={signInWithGoogle}>
                    <img src="/photos/google.jpg" alt="" />
                  </button>
                  <button type="button" className="facebook" onClick={signInWithFaceBook}>
                    <img src="/photos/facebook.jpg" alt="" />
                  </button>
                </div>
              </div>
              <div>
                <p>We respect your privacy</p>
              </div>
            </div>
          </form>
        </div>
      }
    />
  ) : (
    <div className="logout-button-wrapper">
      <p>Thank you for subscribe {isRegistratedUser?.email}! All news will come on your Email!</p>
    </div>
  );
}
