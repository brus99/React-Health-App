import { Link } from "react-router-dom";
import { HomeDiv, HomeH3, StyledButton,  StyledHomeLocationButton,  StyledHospitalIcon, StyledLocationIcon, StyledVaccineIcon } from "../StyledComponents/Styled";
const HomeSection = () => {
  return (
    <div className = 'mainSection'>
        <HomeDiv>
            <HomeH3>Your quality care begins at UCLA Health.</HomeH3>
        </HomeDiv>
        <HomeDiv>
            <Link to = 'SelectDoctor'>
                <StyledButton variant = 'primary' active size = 'lg'>
                    Find A Doctor   
                    <StyledHospitalIcon/>
                </StyledButton>
            </Link>
            <Link to = '/Location'>
                <StyledHomeLocationButton variant = 'primary' active size = 'lg' >
                    Find Your Location
                    <StyledLocationIcon/>
                </StyledHomeLocationButton>
            </Link>
            <Link to = '/Scheduling'>
                <StyledButton variant = 'primary' active size = 'lg' >
                    Appointments
                    <StyledVaccineIcon/>
                </StyledButton>
            </Link>
        </HomeDiv>
    </div>
  )
}

export default HomeSection

