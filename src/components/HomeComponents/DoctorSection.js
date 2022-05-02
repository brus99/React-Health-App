import {  Card, Container } from "react-bootstrap"
import NavBarLower from "../NavigationComponents/NavBarLower"
import TopNavigationBar from "../NavigationComponents/TopNavigationBar"
import BottomNav from '../NavigationComponents/BottomNav'
import ScrollToTop from "../../CustomHooks/ScrollToTop";
import { CenterDoctorCard, DoctorOptionsCard, StyledButton, StyledFlexDiv, StyledHospitalIcon, StyledLibraryIcon, StyledLink } from "../StyledComponents/Styled";
const DoctorPage = () => {
  return (
    <div className="doctorPage">
        <ScrollToTop/>
        <TopNavigationBar/>
        <NavBarLower/>
        <CenterDoctorCard>
            <img src = 'PatientHelped.jpg' alt = ""/>
        </CenterDoctorCard>
    <StyledFlexDiv>
        <Container>
            <DoctorOptionsCard>
                <Card.Title>Book An Appointment</Card.Title>
                <Card.Body>See a doctor, virtually or in-person, with our easy online booking options.</Card.Body>
                <StyledLink to = "/Scheduling">
                    <StyledButton variant = 'primary' active size = 'lg'>
                        Schedule Now
                        <StyledHospitalIcon/>
                    </StyledButton>
                </StyledLink>
            </DoctorOptionsCard>
        </Container>
        <Container>
            <DoctorOptionsCard>
                <Card.Title> Why choose UCLA Health?</Card.Title>
                <Card.Body>When you visit UCLA Health, you can feel confident you're being treated by expert doctors,
                    nurses and other care providers who are innovative leaders in their chosen disciplines. PLus, you get all the benefits
                    of an academic medical center, which means that you'll gain access to advanced technology, treatments, and research that may not
                    be available everywhere. 
                </Card.Body>
                <StyledLink to = "/About">
                    <StyledButton variant = 'primary' active size = 'lg'>
                        Learn More
                        <StyledLibraryIcon/>
                    </StyledButton>
                </StyledLink>
            </DoctorOptionsCard>
        </Container>
        <Container>
            <DoctorOptionsCard>
                <Card.Title> Find a Primary Care Doctor</Card.Title>
                <Card.Body>Looking for a primary physician for yourself or your family? Start here.</Card.Body>
                <StyledLink to = "/SelectDoctor">
                    <StyledButton variant = 'primary' active size = 'lg'>
                        See our doctors
                        <StyledHospitalIcon/>
                    </StyledButton>
                </StyledLink>
            </DoctorOptionsCard>
        </Container>
    </StyledFlexDiv>
    <BottomNav/>
    </div>
  )
}
export default DoctorPage

