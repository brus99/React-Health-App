import { Container, Typography } from "@mui/material"
import { Card, Col, Row } from "react-bootstrap"
import AssistantDirectionIcon from '@mui/icons-material/AssistantDirection';
import PhoneIcon from '@mui/icons-material/Phone';
import { StyledBottomRow,  StyledClassIcon, StyledColumn, StyledLink, StyledLocationCardButton, StyledLocationPageDiv, StyledLocationPaper, StyledRow, StyledRowMargin } from "../StyledComponents/Styled";
const LocationCards = () => {
    const profile = [
        {location:'Santa Monica',center:'2020 Santa Monica Internal Medicine',specialty:'Family Medicine | Internal Medicine',address:'2020 Santa Monica Blvd.',suite:'Suite 210',city:'Santa Monica,',stateInfo:'California 90404', phone:'123-456-7899'},
        {location:'West Los Angeles',center:'Beverly Hills Primary & Speciality Care',specialty:'Internal medicine | Pediatrics | Head and Neck Surgery',address:'9675 Brighton Way Blvd.',suite:'Suite 100',city:'Beverly Hills,',stateInfo:'California 90210', phone:'123-456-7899'},
        {location:'Los Angeles',center:'Beverly Hills Willshire Primary & Specialty Care',specialty:'Cardiology | Endocrinology | Nephrology | Rhuematology',address:'8641 Willshire Blvd.',suite:'Suites 102, 115 & 210',city:'Beverly Hills',stateInfo:'California 90211', phone:'123-456-7899'},
    ]   
  return (
    <StyledLocationPageDiv className = 'centered'>
        {profile.map(profile=> (
        <StyledLocationPaper elevation = '12' >
            <Card>
                <Container>
                    <StyledRow>
                        <Col md = 'auto' >
                            <Typography variant="header" fontWeight={'bold'}>
                                {profile.location}
                            </Typography>
                        </Col>
                    </StyledRow>
                    <StyledRowMargin>
                        <StyledColumn md = 'auto' >
                            <StyledLink  to = '/Scheduling'>
                                <Typography variant = "paragraph" color = {'primary'}>
                                    {profile.center}
                                </Typography>
                            </StyledLink>
                        </StyledColumn>
                    </StyledRowMargin>
                    <StyledRowMargin>
                        <Col md = 'auto'>
                            <Typography variant="paragraph">
                                {profile.specialty}
                            </Typography>
                        </Col>
                    </StyledRowMargin>
                    <Row>
                        <Col md = 'auto'>
                            <AssistantDirectionIcon/>
                        </Col>
                        <Col md = 'auto'>
                            <Row>
                                <Col md = 'auto'>
                                    {profile.address}
                                </Col>
                            </Row>
                            <Row>
                                <Col md = 'auto'>
                                    {profile.suite} 
                                </Col>
                            </Row>
                            <Row>
                                <Col md = 'auto'>
                                    {profile.city}
                                </Col>
                            </Row>
                            <Row>
                                <Col md = 'auto'>
                                    {profile.stateInfo}
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <StyledBottomRow>
                        <Col md = 'auto'>
                            <PhoneIcon/>
                        </Col>
                        <Col md = 'auto'>
                            {profile.phone}
                        </Col>
                    </StyledBottomRow>
                    <Row>
                        <StyledLink to = '/Scheduling'>
                            <StyledLocationCardButton className="centered" variant = 'primary' active size = 'lg' >
                                Schedule Now
                                <StyledClassIcon/>
                            </StyledLocationCardButton>
                        </StyledLink>
                    </Row>
                </Container>
            </Card>
        </StyledLocationPaper>))}
    </StyledLocationPageDiv>
  )
}

export default LocationCards
