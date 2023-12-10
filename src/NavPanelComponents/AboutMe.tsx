import SectionWrapper from "../Wrappers/SectionWrapper";

export default function AboutMe() {
  return (
    <SectionWrapper
      content={
        <div className="lessons-block html-block">
          <figure>
            <div className="intr">
              <div className="block-image">
                <div className="image-container">
                  <img src="/photos/Harmash.jpg" alt="" />
                </div>
              </div>
            </div>
            <figcaption>
              <div className="image-card-container">
                <div className="image-title-wrapper">
                  <h2>Meet Coach Philip</h2>
                </div>
                <div className="image-subtitle-wrapper">
                  <div className="image-subtitle-dynamic-text">
                    <p>
                      Hello.
                      <br></br> My name is Philip Harmash. I'm a former professional volleyball
                      player.<br></br>Right now, I'm a coach of Unity Volleyball Club in Toronto
                      . <br></br>My volleyball adventure started when I was seven years old.
                      And by my senior year, I got an offer from one of the most prestigious volleybal club
                      in Ukraine. At sixteen years old , I signed my first professional contract
                      with that clubs.<br></br> That's how I started playing professionally.
                      <br></br> During my successful volleyball adventure, I've played in Romania,
                      Ukraine. Six years for the National Team of Ukraine. Numerous international
                      competitions and high-level tournaments.
                      <br></br>
                      <strong>At age 24 I become the best Libero in the Country!</strong>
                      <br></br> All this gave me an unforgettable experience of volleyball. During
                      all 15 years of playing in different clubs worldwide, I was trained by other
                      coaches, and not all of them were good ones. Thus I had to analyze my errors
                      and coach myself for better performance on the court.<br></br> I have moved to
                      the Canada full of knowledge and desire to coach. I'm enjoying sharing my
                      volleyball experience with young athletes. Being on different levels and
                      getting the best out of this, I know exactly how to prepare future volleyball
                      stars and get them where they wanted to be.<br></br> My favourite expression
                      is: "Transform your Fantasy into your Legacy"<br></br> Favourite colour:
                      Orange<br></br> Favourite movie: interstellar<br></br> Favourite hobby:
                      Hangout with my daughter<br></br>Please check my Wikipedia page and find more
                      detailed information about me:<br></br>
                      <a href="https://uk.wikipedia.org/wiki/%D0%93%D0%B0%D1%80%D0%BC%D0%B0%D1%88_%D0%9F%D0%B8%D0%BB%D0%B8%D0%BF_%D0%9C%D0%B8%D0%BA%D0%BE%D0%BB%D0%B0%D0%B9%D0%BE%D0%B2%D0%B8%D1%87">
                        https://uk.wikipedia.org/wiki/Philip Harmash
                      </a>
                      <br></br>My highlights:<br></br>
                      <a href="https://www.youtube.com/channel/UCmrrHnBUGM-1sXLtjkyq5pA">
                        https://www.youtube.com/channel/Philip Harmash
                      </a>
                      <br></br>Sincerely yours.
                    </p>
                  </div>
                </div>
              </div>
            </figcaption>
          </figure>
        </div>
      }
    />
  );
}
