import styled from "@emotion/styled";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 0.75rem;
  padding: 3% 5%;
  border-radius: 10px;
  &:active {
    transform: scale(0.95);
    background-color: #00000013;
    transition: transform 0.2s ease-in-out;
  }
`;

const Chevron = ">";

function GotoTossBank() {
  return (
    <Wrapper>
      내 토스뱅크
      <div>{Chevron}</div>
    </Wrapper>
  );
}

export default GotoTossBank;
