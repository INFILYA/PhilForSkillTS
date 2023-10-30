import { useState, ChangeEvent, FormEvent } from "react";
import SectionWrapper from "./SectionWrapper";
import Button from "../utilities/Button";
import { SendFormProps, TUser } from "../Types/types";
import { doc, setDoc } from "firebase/firestore";
import { auth, dataBase } from "../Firebase/config";
import { Time } from "../utilities/Time";
import { later } from "../utilities/Functions";
type TUserMessage = TUser & { Message: string };

export default function SendForm(props: SendFormProps) {
  const { leftSide, text, page } = props;
  const [formIsSended, setFormIsSended] = useState<boolean>(true);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [userInfo, setUserInfo] = useState<TUserMessage>({
    FirstName: "",
    LastName: "",
    Email: "",
    Message: "",
  });
  const [userFieldError, setUserFieldError] = useState<TUserMessage>({
    FirstName: "empty",
    LastName: "empty",
    Email: "empty",
    Message: "empty",
  });
  const FirstNameRequired = !userFieldError?.FirstName;
  const LastNameRequired = !userFieldError?.LastName;
  const emailRequired = !userFieldError?.Email;
  const emailInvalid = userFieldError?.Email === "Invalid";
  const messageRequired = !userFieldError?.Message;
  function handleUserChange(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  }
  function submitUserInfo(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    Object.entries(userInfo).forEach(([key, value]) => {
      setUserFieldError((prev) => ({ ...prev, [key]: value }));
    });
    if (Object.values(userInfo).every((field) => field !== "")) {
      sendToServer();
    }
  }
  async function sendToServer() {
    try {
      setIsLoading(!isLoading);
      const sendForm = doc(dataBase, userInfo?.Email, `${Time} ${page} `);
      await later(1500);
      await setDoc(sendForm, {
        message: userInfo.Message,
        id: auth?.currentUser?.uid,
        name: `${userInfo.FirstName} ${userInfo.LastName}`,
      });
      setFormIsSended(!formIsSended);
    } catch (err) {
      setUserFieldError((prev) => ({
        ...prev,
        Email: "Invalid",
      }));
      console.error(err);
    } finally {
      setIsLoading((prev) => !prev);
    }
  }
  return (
    <SectionWrapper
      content={
        <div className="contact">
          <div className="contact-container">
            {leftSide}
            <div className="right-side-contact">
              <div className="html-block">
                <div className="block-content">
                  <div className="form-wrapper">
                    <form action="" onSubmit={submitUserInfo}>
                      {formIsSended ? (
                        <div className="field-list">
                          <fieldset>
                            <legend>
                              <div className="forspan">
                                <span>
                                  <strong>Name</strong>
                                </span>
                                <span style={{ opacity: 0.5 }}>(required)</span>
                              </div>
                            </legend>
                            <div className="field-first-name field">
                              <label>First Name</label>
                              {FirstNameRequired && (
                                <div className="error-fied">First Name is required</div>
                              )}
                              <input
                                type="text"
                                onChange={handleUserChange}
                                value={userInfo.FirstName}
                                name="FirstName"
                              />
                            </div>
                            <div className="field-last-name field">
                              <label>Last Name</label>
                              {LastNameRequired && (
                                <div className="error-fied">Last Name is required</div>
                              )}
                              <input
                                type="text"
                                onChange={handleUserChange}
                                value={userInfo.LastName}
                                name="LastName"
                              />
                            </div>
                          </fieldset>
                          <div className="field-email field">
                            <legend>
                              <div className="forspan">
                                <span>
                                  <strong>Email</strong>
                                </span>
                                <span style={{ opacity: 0.5 }}>(required)</span>
                              </div>
                            </legend>
                            {emailRequired && <div className="error-fied">Email is required</div>}
                            {emailInvalid && <div className="error-fied">Invalid Email</div>}
                            <input
                              type="text"
                              onChange={handleUserChange}
                              value={userInfo.Email}
                              name="Email"
                            />
                          </div>
                          <div className="field-message field">
                            <legend>
                              <div className="forspan">
                                <span>
                                  <strong>{page}</strong>
                                </span>
                                <span style={{ opacity: 0.5 }}>(required)</span>
                              </div>
                            </legend>
                            {messageRequired && (
                              <div className="error-fied">Message is required</div>
                            )}
                            <textarea
                              onChange={handleUserChange}
                              value={userInfo.Message}
                              name="Message"
                            />
                          </div>
                          <div className="form-button-wrapper">
                            <Button
                              text={isLoading ? "Sending" : "Send"}
                              type="submit"
                              disabled={isLoading}
                            />
                          </div>
                        </div>
                      ) : (
                        <div className="form-sended-wrapper">{text}</div>
                      )}
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      }
    />
  );
}
