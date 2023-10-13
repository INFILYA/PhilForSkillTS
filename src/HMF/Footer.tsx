import SectionWrapper from "../Wrappers/SectionWrapper";

export default function Footer() {
  return (
    <SectionWrapper
      content={
        <div>
          <h4>Philip Harmash</h4>
          <div className="personal-info-wrapper">
            <p>
              Infilya@ukr.net<br></br>
              +38 (066) 718-38-72
            </p>
          </div>
        </div>
      }
    />
  );
}
