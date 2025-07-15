import styled from "@emotion/styled";
import { BackgroundDark } from "../Style/color";
import TossBankIndex from "../Domains/Main/TossBankAccount/TossBankIndex";
import TopBar from "../Domains/Main/TopBar/TopBar";


const Wallpaper = styled.div`
    background: ${BackgroundDark};
    width: 100vw;
    height: 100vh;
    box-sizing: border-box;
    padding: 2% 3%;

    overflow-y: auto;
`

const View:React.FC = () => {
    return(
        <Wallpaper>
            <TopBar />
            <TossBankIndex/>
        </Wallpaper>
    )
}

export default View;