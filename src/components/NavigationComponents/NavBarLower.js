import MenuIcon from '@mui/icons-material/Menu';
import { Dropdown } from "react-bootstrap";
import { StyledDropDownToggle, StyledH3Black, StyledLink, StyledLowerNavbarBrand, StyledLowerNavbarBrandMargin, StyledLowerNavDiv, StyledNavbar, StyledNavbarBrand, StyledNavH3, StyledShadowDiv } from "../StyledComponents/Styled";

const NavBarLower = () => {
    const userData = JSON.parse(sessionStorage.getItem("userData"))
  return (
    <StyledLowerNavDiv>
        <StyledNavbar bg = 'light' variant = 'light'>
            <StyledLowerNavbarBrand>
                <StyledLink to = '/'>
                    <StyledShadowDiv className = 'HospitalLogo'>
                        <StyledNavH3>UCLA</StyledNavH3>
                    </StyledShadowDiv>
                </StyledLink>
            </StyledLowerNavbarBrand>
            <StyledLowerNavbarBrandMargin>
               <Dropdown>
                   <StyledDropDownToggle variant = 'success'>
                       <MenuIcon/>
                   </StyledDropDownToggle>
                   <Dropdown.Menu>
                        <StyledLink to = "/SelectDoctor" >
                            <Dropdown.Item href = '/SelectDoctor'>
                                Find A Doctor
                            </Dropdown.Item>
                        </StyledLink>
                        <StyledLink to = "/Location" >
                            <Dropdown.Item href ="/Location">
                                Find a location
                            </Dropdown.Item>
                        </StyledLink>
                        <StyledLink to = "/About" >
                            <Dropdown.Item href = '/About'>
                                About Us
                            </Dropdown.Item>
                        </StyledLink>
                       {userData? <StyledLink to = "/Profile"><Dropdown.Item href = "/Profile">Profile</Dropdown.Item></StyledLink>:null}
                   </Dropdown.Menu>
                </Dropdown>
            </StyledLowerNavbarBrandMargin>
            <StyledNavbarBrand>
                <div>
                    <StyledH3Black>UCLA Health Group</StyledH3Black>
                </div>
            </StyledNavbarBrand>
        </StyledNavbar>
    </StyledLowerNavDiv>
  )
}
export default NavBarLower
