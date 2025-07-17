import styled from "@emotion/styled";
import { BackgroundDark } from "../Style/color";
import TossBankIndex from "../Domains/Main/TossBankAccount/TossBankIndex";
import TopBar from "../Domains/Main/TopBar/TopBar";
import AllBankIndex from "../Domains/Main/AllBankAccount/AllBankIndex";


const Wallpaper = styled.div`
    background: ${BackgroundDark};
    width: 100vw;
    height: 100vh;
    box-sizing: border-box;
    padding: 2% 3%;

    overflow-y: auto;
    display: flex;
    flex-direction: column;
    gap: 10px;
`

const View:React.FC = () => {
    return(
        <Wallpaper>
            <TopBar />
            <TossBankIndex/>
            <AllBankIndex/>
        </Wallpaper>
    )
}

export default View;