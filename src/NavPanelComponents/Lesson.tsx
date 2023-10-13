import { NavLink } from "react-router-dom";
import SectionWrapper from "../Wrappers/SectionWrapper";
import Button from "../utilities/Button";

export default function Lesson() {
  return (
    <SectionWrapper
      content={
        <div className="lessons-block html-block">
          <figure>
            <div className="intr">
              <div className="block-image">
                <div className="image-container">
                  <img src="/photos/lesson.jpg" alt="" />
                </div>
              </div>
            </div>
            <figcaption>
              <div className="image-card-container">
                <div className="image-title-wrapper">
                  <h2>Private Lesson</h2>
                </div>
                <div className="image-subtitle-wrapper">
                  <div className="image-subtitle-dynamic-text">
                    <p>
                      Private lessons are an excellent way for players to rapidly improve their game
                      through coaching experience. My professional experience offers individualized
                      instruction to players of all ages and skill levels. Whether you are a middle
                      school or high school player hoping to make your school team, a club or
                      varsity player trying to make a collegiate team or an adult player trying to
                      improve your skills for league or tournament competition, my training
                      techniques will help you reach your goal and gain a performance edge. One on
                      One Private lessons are designed specifically for player’s needs and break
                      down every volleyball technique step by step through teaching. Private lessons
                      also can provide athletes with the opportunity to work with positions, tricks
                      and “How To” of each skill set at an intimate and detailed level that
                      group/team settings and general coaches are not able to provide. Private
                      lessons are the quickest and most effective way to develop a solid foundation,
                      break bad habits, provide correct repetition for muscle memory development and
                      learn 100% Technique.
                    </p>
                    <h2 style={{ padding: "2vh 0" }}>Group Lesson</h2>
                    <p>
                      In group lessons, the athletes will be working in a small team environment
                      that covers the needs of the group. Specific drills for the small group that
                      helps them to communicate and perform during the games
                    </p>
                  </div>
                  <div className="image-button-wrapper">
                    <div style={{ marginTop: "6%" }}>
                      <NavLink to={"Book a Lesson"}>
                        <Button text={"Book a Lesson"} type={"button"} />
                      </NavLink>
                    </div>
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
