import styled from "@emotion/styled";
import useDataStore from "../../../Store/useDataStore";

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: auto 1fr auto;
    width: 100%;
    height: fit-content;
    min-width: 0px;
    padding:2% 5%;
    margin-top: 2%;
    justify-content: center;
    align-items: center;
    text-justify: center;
    box-sizing: border-box;
    border-radius: 10px;

    gap: 10px;

    font-family: Noto Sans KR;

    &:active{
        transform: scale(0.95);
        background-color: #0064FF26;
        transition: transform 0.2s ease-in-out;
    }
`

const LogoArea = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 10px;
    overflow: hidden;
    display:flex;
    justify-content: center;
    align-items: center;
    border: 1px solid gray;

    img{
        width:100%;
        height: 100%;
        object-fit: contain;
    }
`

const BalanceAndExplanation = styled.div`
    display: grid;
    grid-template-rows: 1fr 1fr;
    height: 40px;
`

const Balance = styled.div`
    font-weight: bold;
    font-size: 1rem;
`

const AccountDomain = styled.div`
    font-size: 0.75rem;
    color: #292929;
`

const SendMoney = styled.button`
    font-size: 0.75rem;
    color: #292929;

    background-color: #e2e2e2;
    pointer-events: auto;
`

function TossBankInfo () {
    const { TossBank } = useDataStore();

    const handle송금Click = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        alert("송금 클릭")
    }

    return (
        <Wrapper>
            <LogoArea>
                <img src="Toss_App_Icon.png"/>
            </LogoArea>
            <BalanceAndExplanation>
                <Balance>
                    {TossBank.Balance.toLocaleString() } 원
                </Balance>
                <AccountDomain>
                    토스뱅크 통장 · 주계좌
                </AccountDomain>
            </BalanceAndExplanation>
            <SendMoney onClick={handle송금Click}>
                송금
            </SendMoney>
        </Wrapper>
    )
}

export default TossBankInfo;