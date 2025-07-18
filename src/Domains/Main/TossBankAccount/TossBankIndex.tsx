import styled from "@emotion/styled";
import GotoTossBank from "./GotoTossBank";
import 단일콘텐츠Wrapper from "../단일콘텐츠Wrapper";
import TossBankInfo from "./TossBankInfo";
import { CommonDivider } from "../CommonDivider";

const Wrapper = styled.div`
  user-select: none; 
  overflow: hidden;
`;

function TossBankIndex() {
  return (
    <Wrapper>
      <단일콘텐츠Wrapper>
        <TossBankInfo />
        <CommonDivider />
        <GotoTossBank />
      </단일콘텐츠Wrapper>
    </Wrapper>
  );
}

export default TossBankIndex;
