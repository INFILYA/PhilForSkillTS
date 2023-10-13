import SendForm from "../Wrappers/SendForm";

export default function Reviews() {
  return (
    <SendForm
      leftSide={
        <div className="left-side-contact">
          <div className="html-block">
            <div className="block-content">
              <h1>Live review</h1>
              <p>
                Your satisfaction is extremely important to us. Please take just a minute to let us
                know what we’re doing well. And if there’s anything you’d like to see done
                differently, don’t hesitate to tell us. Your feedback can only make us better!
              </p>
            </div>
          </div>
        </div>
      }
      text={"Thank you for your review"}
      page={"Review"}
    />
  );
}
