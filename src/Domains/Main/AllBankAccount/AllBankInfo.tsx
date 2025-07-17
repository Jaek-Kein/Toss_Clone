/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import { RiBankCard2Fill } from "react-icons/ri";
import { TossBlue } from "../../../Style/color";
import { 공통애니메이션 } from "../공통애니메이션";

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

const AllBank = styled.div`
    display: grid;
    grid-template-rows: 1fr 1fr;
    height: 40px;
`

const AllAccount = styled.div`
    font-weight: bold;
    font-size: 1rem;
`

const SeeAll = styled.div`
    font-size: 0.75rem;
    color: #292929;
`


function AllBankInfo () {

    return (
        <Wrapper css={공통애니메이션}>
            <LogoArea>
                <RiBankCard2Fill color={TossBlue} size='25px'/>
            </LogoArea>
            <AllBank>
                <AllAccount>
                    내 모든 계좌
                </AllAccount>
                <SeeAll>
                    전체보기
                </SeeAll>
                <div></div>
            </AllBank>
        </Wrapper>
    )
}

export default AllBankInfo;