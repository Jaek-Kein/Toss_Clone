/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import { 공통애니메이션 } from "../공통애니메이션";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 0.75rem;
  padding: 3% 5%;
  border-radius: 10px;

`;

const Chevron = ">";

function GotoTossBank() {
  return (
    <Wrapper css={공통애니메이션}>
      내 토스뱅크
      <div>{Chevron}</div>
    </Wrapper>
  );
}

export default GotoTossBank;
