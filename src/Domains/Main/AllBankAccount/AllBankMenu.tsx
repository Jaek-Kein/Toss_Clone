import styled from "@emotion/styled";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr auto 1fr auto 1fr auto 1fr;
  font-size: 0.75rem;
  border-radius: 0 0 10px 10px;
  align-items: center;
  justify-items: center;
  width: 100%;
  box-sizing: border-box;

  font-family: noto sans kr;
`;

const Menu = styled.div`
padding: 8% 0;
`

const Divider = styled.div`
  width: 1px;
  height: 100%;
  background: linear-gradient(to bottom, gray 0%, transparent 90%);
`


function AllBankMenu() {
  return (
    <Wrapper>
      <Menu>대출</Menu>
      <Divider></Divider>
      <div>증권</div>
      <Divider></Divider>
      <div>저축</div>
      <Divider></Divider>
      <div>모든 계좌</div>
    </Wrapper>
  );
}

export default AllBankMenu;
