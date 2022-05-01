import ScrollToTop from "../CustomHooks/ScrollToTop"
import LocationCards from "./Location/LocationCards"
import BottomNav from "./NavigationComponents/BottomNav"
import NavBarLower from "./NavigationComponents/NavBarLower"
import TopNavigationBar from "./NavigationComponents/TopNavigationBar"
import { StyledLocationImgPaper } from "./StyledComponents/Styled"
const Location = () => {
  return (
    <div className="doctorPage">
        <ScrollToTop/>
        <TopNavigationBar/>
        <NavBarLower/>
        <StyledLocationImgPaper elevation = {12} className="centered">
            <img src = 'EntranceImage.jpeg' width = {700} alt = ""/>
        </StyledLocationImgPaper>
        <LocationCards/>
        <BottomNav/>
    </div>
  )
}
export default Location
