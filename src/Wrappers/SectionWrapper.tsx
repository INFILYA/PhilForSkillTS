import { ISectionW } from "../Types/types";
import {
  ContentWrapper,
  Section,
  SectionBackground,
  SectionBorder,
  Content,
} from "../css/PhilForSkill.styled";

export default function SectionWrapper(props: ISectionW) {
  const { background, content } = props;
  return (
    <Section>
      <SectionBorder>
        <SectionBackground>{background}</SectionBackground>
      </SectionBorder>
      <ContentWrapper>
        <Content>{content}</Content>
      </ContentWrapper>
    </Section>
  );
}
