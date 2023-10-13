import { NavLink } from "react-router-dom";
import SectionWrapper from "../Wrappers/SectionWrapper";
import Button from "../utilities/Button";

export default function HighlightVideoMaker() {
  return (
    <SectionWrapper
      content={
        <div className="lessons-block html-block">
          <figure>
            <div className="intr">
              <div className="block-image">
                <div className="image-container filtered">
                  <img src="/photos/VideoMaker.jpg" alt="" />
                </div>
              </div>
            </div>
            <figcaption>
              <div className="image-card-container">
                <div className="image-title-wrapper">
                  <h2>Highlight Video Maker</h2>
                </div>
                <div className="image-subtitle-wrapper">
                  <div className="image-subtitle-dynamic-text">
                    <p>
                      <strong>
                        Having a quality volleyball recruiting video can prove quite helpful during
                        the recruiting process.
                      </strong>{" "}
                      College coaches generally don’t have the time or budget it takes to see
                      hundreds of volleyball recruits in person each year. Video can be a helpful
                      first step in getting a college coach's attention or following up with one
                      after an event. A well-done video and effective distribution strategy is an
                      essential steps in the recruiting process.
                      <br></br>
                    </p>
                    <p>
                      If you want to have a great high-quality video for recruiting purposes or just
                      for a great memory, Volleyball Advice can help you with that.
                    </p>
                    <p>
                      With our professional volleyball experience, we will select the best moments
                      with the best skill exhibition.
                    </p>
                    <p>
                      You provide us with video footage, and within 2-3 days, you will have a 3-5
                      min long highlight video for your needs.
                    </p>
                    <p>
                      The software that we use is Adobe Premiere Pro with the best settings to have
                      great results.
                    </p>
                    <p>Very flexible feedback schedule to make sure we hear all your needs.</p>
                    <p>
                      <strong>
                        After purchase, you will receive an email with more instructions.
                      </strong>
                    </p>
                    <p>
                      <a href="https://www.youtube.com/watch?v=behnePukpu8&ab_channel=PhilipHarmash">
                        <strong>Highlights Video Example</strong>
                      </a>
                    </p>
                  </div>
                  <div className="image-button-wrapper">
                    <div style={{ marginTop: "6%" }}>
                      <NavLink to={"/Shop/Create Video Highlights"}>
                        <Button text="Make it" type="button" />
                      </NavLink>
                    </div>
                  </div>
                </div>
              </div>
            </figcaption>
          </figure>
          <div className="iframe-wrapper">
            <iframe
              src="https://www.youtube.com/embed/behnePukpu8?si=j4dK90iaOUkfW2F4"
              title="YouTube video player"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      }
    />
  );
}
