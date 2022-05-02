import Navbar from 'react-bootstrap/Navbar'
import {  Dropdown} from 'react-bootstrap';
import {  Link, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { StyledHealthAndSafetyIcon, StyledHistoryIcon, StyledLink, StyledLogoutButton, StyledNavbarBrandLeft, StyledSignUpButton, StyledTopDropdownToggle, StyledTopFacebookIcon, StyledTopInstaIcon, StyledTopLinkedInIcon, StyledTopNav, StyledTopNavBrand, StyledTopPhoneIcon, StyledTopTwitterIcon, StyledTopYoutubeIcon } from '../StyledComponents/Styled';
                     
const TopNavigationBar = () => {
     const navigate = useNavigate();
    const userData = JSON.parse(sessionStorage.getItem("userData"))
    const handleLogout = () => {
         sessionStorage.removeItem("userData")
         sessionStorage.getItem("userData")
         navigate("/")
    }
  return (
    <div className = 'TopNavigationBar'>
        <StyledTopNav bg = 'secondary' variant = 'dark' className = "navigation">
           <StyledTopNavBrand>
               <Dropdown>
                   <StyledTopDropdownToggle variant = 'success'>
                        <StyledHealthAndSafetyIcon/>
                   </StyledTopDropdownToggle>
                   <Dropdown.Menu>
                       <Dropdown.Item href = 'https://www.cdc.gov/coronavirus/2019-ncov/index.html'>Find Local CDC Guidelines</Dropdown.Item>
                       <Dropdown.Item href = 'https://covid19.ca.gov/masks-and-ppe/'>California Mask/PPE Info</Dropdown.Item>
                       <Dropdown.Item href = 'https://covid-19.ucla.edu/'>UCLA Student Covid Info</Dropdown.Item>
                   </Dropdown.Menu>
                </Dropdown>
           </StyledTopNavBrand>
            <Navbar.Brand>
                <Link href = 'https://en.wikipedia.org/wiki/Lorem_ipsum'><StyledTopPhoneIcon/></Link>
            </Navbar.Brand>
           <Navbar.Brand>
               623-999-1234
           </Navbar.Brand>
           <Navbar.Brand>
                <Link href = 'https://en.wikipedia.org/wiki/Lorem_ipsum'><StyledTopTwitterIcon/></Link>
           </Navbar.Brand>
           <Navbar.Brand>
                <Link href = 'https://en.wikipedia.org/wiki/Lorem_ipsum'><StyledTopFacebookIcon/></Link>
           </Navbar.Brand>
           <Navbar.Brand>
                <Link href = 'https://en.wikipedia.org/wiki/Lorem_ipsum'><StyledTopInstaIcon/></Link>
           </Navbar.Brand>
           <Navbar.Brand>
                <Link href = 'https://en.wikipedia.org/wiki/Lorem_ipsum'><StyledTopLinkedInIcon/></Link>
           </Navbar.Brand>
           <Navbar.Brand>
                <Link href = 'https://en.wikipedia.org/wiki/Lorem_ipsum'><StyledTopYoutubeIcon/></Link>
           </Navbar.Brand>
           {userData ? (
           <StyledNavbarBrandLeft className='col-5'>
               <StyledLogoutButton  onClick = {handleLogout} className="centered" variant = 'contained' >
                    LogOut
                    <StyledHistoryIcon/>
               </StyledLogoutButton>
           </StyledNavbarBrandLeft>
           ):(
          <StyledNavbarBrandLeft className = "col-5">
               <StyledLink to = "/SignUp">
                    <StyledSignUpButton variant = 'secondary'>
                         <Typography variant = 'h8'>Sign Up</Typography> 
                         <StyledHistoryIcon/>
                    </StyledSignUpButton>
               </StyledLink>
          </StyledNavbarBrandLeft>
           )}
        </StyledTopNav>
    </div>
  
     
  )
}

export default TopNavigationBar
