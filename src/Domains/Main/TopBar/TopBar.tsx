import styled from "@emotion/styled";
import { FaNoteSticky } from "react-icons/fa6";
import { GoBellFill } from "react-icons/go";

const Wrapper = styled.div`
  display: flex;
  width: 95%;
  justify-content: space-between;
  align-items: center;
  margin: 2% 3%;
  box-sizing: border-box;
`;

const ContentWrapper = styled.div`
    width: fit-content;
    display:flex;
    gap: 10px;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
`

function TopBar() {
  return (
    <Wrapper>
      <ContentWrapper>
        <FaNoteSticky size="20px" color="gray" /> 할일
      </ContentWrapper>
      <ContentWrapper>
        결제 <GoBellFill size="20px" color="gray" />
      </ContentWrapper>
    </Wrapper>
  );
}

export default TopBar;
