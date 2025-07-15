import styled from "@emotion/styled";
import GotoTossBank from "./GotoTossBank";
import 단일콘텐츠Wrapper from "../단일콘텐츠Wrapper";
import TossBankInfo from "./TossBankInfo";

const Wrapper = styled.div`
  user-select: none;
`;

const Divider = styled.div`
  height: 1px;
  width: 100%;
  background: radial-gradient(ellipse at center, gray 0%, transparent 80%);
`;

function TossBankIndex() {
  return (
    <Wrapper>
      <단일콘텐츠Wrapper>
        <TossBankInfo />
        <Divider />
        <GotoTossBank />
      </단일콘텐츠Wrapper>
    </Wrapper>
  );
}

export default TossBankIndex;
