import styled from "@emotion/styled";
import { BackgroundLight } from "../../Style/color";
import type { ReactNode } from "react";


const Wrapper = styled.div`
    width: 100%;
    height: fit-content;
    min-height: 100px;
    box-sizing: border-box;
    background-color: ${BackgroundLight};
    border-radius: 15px;
    display:grid;
    grid-template-rows: auto auto auto;
`

interface TossBankContainerProps{
    children?: ReactNode;
}

function 단일콘텐츠Wrapper({ children }: TossBankContainerProps) {
    return(
        <Wrapper>
            {children}
        </Wrapper>
    )
}
export default 단일콘텐츠Wrapper;