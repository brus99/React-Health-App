import ScrollToTop from "../../CustomHooks/ScrollToTop"
import BottomNav from "../NavigationComponents/BottomNav"
import NavBarLower from "../NavigationComponents/NavBarLower"
import TopNavigationBar from "../NavigationComponents/TopNavigationBar"
import { StyledSelectDoctorDiv } from "../StyledComponents/Styled"
import DoctorProfile from "./DoctorProfile"

const SelectDoctor = () => {
  return (
      <div className="doctorPage">
         <ScrollToTop/>
         <TopNavigationBar/>
         <NavBarLower/>
         <StyledSelectDoctorDiv>
            <DoctorProfile/> 
         </StyledSelectDoctorDiv>
         <BottomNav/>
      </div>
  )
}

export default SelectDoctor
