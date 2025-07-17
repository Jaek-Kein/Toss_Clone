import styled from "@emotion/styled";
import 단일콘텐츠Wrapper from "../단일콘텐츠Wrapper";
import AllBankInfo from "./AllBankInfo";
import AllBankMenu from "./AllBankMenu";
import { CommonDivider } from "../CommonDivider";

const Wrapper = styled.div`
  user-select: none; 
  overflow: hidden;
`;

function AllBankIndex() {
  return (
    <Wrapper>
      <단일콘텐츠Wrapper>
        <AllBankInfo />
        <CommonDivider />
        <AllBankMenu />
      </단일콘텐츠Wrapper>
    </Wrapper>
  );
}

export default AllBankIndex;
