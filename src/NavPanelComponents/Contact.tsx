import SendForm from "../Wrappers/SendForm";

export default function Contact() {
  return (
    <SendForm
      leftSide={
        <div className="left-side-contact">
          <div className="html-block">
            <div className="block-content">
              <h1>Contact me</h1>
              <p>
                Feel free to contact me with any questions
                <br></br>
                <br></br>
                <strong>Email</strong>
                <br></br>
                Infilya@ukr.net
                <br></br>
                <br></br>
                <strong>Phone</strong>
                <br></br>
                +380667183872
              </p>
              <p>
                <strong>Location:</strong>
              </p>
              <p>Ukraine, Poltava, Oputna 108v</p>
              <div className="social-wrapper">
                <a href="https://www.instagram.com/harmash_30/" className="instagram">
                  <img alt="" src="/photos/instagram.jpg"></img>
                </a>
                <a href="https://www.facebook.com/philip.harmash/">
                  <img alt="" src="/photos/facebook.jpg"></img>
                </a>
              </div>
            </div>
          </div>
        </div>
      }
      text={
        <div>
          Thank you for your information.<br></br>Our manager will contact you soon
        </div>
      }
      page={"Message"}
    />
  );
}
