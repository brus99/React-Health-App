import { Navbar } from "react-bootstrap"
import { Link } from "@mui/material";
import { BlackStyledNavH3, StyledFacebook, StyledInsta, StyledLinkedIn, StyledNavbar, StyledNavbarBrand, StyledNavH3, StyledPhone, StyledRightNavbarBrand, StyledTwitter, StyledYoutube } from "../StyledComponents/Styled";
const BottomNav = () => {
  return (
    <div className = 'lowerNavbar'>
        <StyledNavbar bg = 'light' variant = 'light' >
            <Navbar.Brand>
                <div className = 'HospitalLogo'>
                    <StyledNavH3>UCLA</StyledNavH3>
                </div>
            </Navbar.Brand>
            <StyledNavbarBrand>
                <div>
                    <BlackStyledNavH3>UCLA Health Group</BlackStyledNavH3>
                </div>
            </StyledNavbarBrand>
            <StyledRightNavbarBrand>
                <Link href = 'https://en.wikipedia.org/wiki/Lorem_ipsum'><StyledPhone/></Link>
            </StyledRightNavbarBrand>
           <Navbar.Brand>
                <Link href = 'https://en.wikipedia.org/wiki/Lorem_ipsum'><StyledTwitter/></Link>
           </Navbar.Brand>
           <Navbar.Brand>
                <Link href = 'https://en.wikipedia.org/wiki/Lorem_ipsum'><StyledFacebook/></Link>
           </Navbar.Brand>
           <Navbar.Brand>
                <Link href = 'https://en.wikipedia.org/wiki/Lorem_ipsum'><StyledLinkedIn/></Link>
           </Navbar.Brand>
           <Navbar.Brand>
                <Link href = 'https://en.wikipedia.org/wiki/Lorem_ipsum'><StyledYoutube/></Link>
           </Navbar.Brand>
           <Navbar.Brand>
                <Link href = 'https://en.wikipedia.org/wiki/Lorem_ipsum'><StyledInsta/></Link>
           </Navbar.Brand>
        </StyledNavbar>
    </div>
  )
}

export default BottomNav
