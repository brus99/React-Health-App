import { Menu} from "@mui/icons-material"
import { Button,  Drawer,  List, ListItem, ListItemIcon, ListItemText} from "@mui/material"
import { useState } from "react"
import HomeIcon from '@mui/icons-material/Home';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PersonIcon from '@mui/icons-material/Person';
import Appointments from "./ProfileComponents/Appointments"
import ProfileSection from "./ProfileComponents/ProfileSection"
import {  useNavigate } from "react-router-dom"
import ScrollToTop from "../CustomHooks/ScrollToTop";
import { StyledAccountIconSmall, StyledDrawerHeadDiv, StyledHeaderDiv, StyledIconButton, StyledProfileDiv, StyledProfileDrawerDiv, StyledProfileH3 } from "./StyledComponents/Styled";
const Profile = () => {
    const[drawerOpen,setDrawerOpen] = useState(true);
    const [showAppointments,setShowAppointments] = useState();
    const [showProfile,setShowProfile] = useState();
    const userData = JSON.parse(sessionStorage.getItem("userData"))
    const navigate = useNavigate();
    const closeDrawer = () => {
        setDrawerOpen(!drawerOpen)
    }
    const handleProfileSelect = () =>{
        setShowAppointments(false);
        setShowProfile(true);
    }
    const handleAppointmentSelect = () =>{
        setShowProfile(false);
        setShowAppointments(true);
    }
    const handleHome = (e) =>{
      navigate('/')
    }
    

  return (
    <div>
        <ScrollToTop/>
        <StyledProfileDiv>   
            <Button variant = 'contained' onClick = {closeDrawer}>
                {!drawerOpen ? 
                <Menu/>
                : 
                null }
            </Button>
            <StyledHeaderDiv>
                <StyledProfileH3>UCLA</StyledProfileH3>
            </StyledHeaderDiv>
        </StyledProfileDiv>
        <StyledProfileDrawerDiv>
          <Drawer
            variant="temporary"
            open = {drawerOpen}
            onClose = {closeDrawer}
          >
              <StyledDrawerHeadDiv>
                  <StyledAccountIconSmall/>
              <StyledIconButton onClick={closeDrawer}>
                {!drawerOpen ? null : <ArrowBackIosIcon/> }
              </StyledIconButton>
              </StyledDrawerHeadDiv>
              {userData?
              <List>
                <ListItem button key='User Profile' onClick={handleProfileSelect}>
                  <ListItemIcon><PersonIcon/>
                  </ListItemIcon>
                  <ListItemText primary='Profile' />
                </ListItem>
              </List>:null}
            <List>
              <ListItem button key='Contact Us' onClick = {handleAppointmentSelect}>
                <ListItemIcon><CalendarMonthIcon/>
                </ListItemIcon>
                <ListItemText primary='Requests' />
              </ListItem>
              </List>
                  <ListItem button onClick = {handleHome}>
                    <ListItemIcon><HomeIcon/>
                    </ListItemIcon>
                    <ListItemText primary='Home' />
                  </ListItem>
          </Drawer>
        </StyledProfileDrawerDiv>
            {showProfile ? <ProfileSection/> : null}
            {showAppointments ? <Appointments/>:null} 
    </div>
  )
}

export default Profile
