import { Col, Container, Row } from "react-bootstrap"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import {  Typography } from "@mui/material";
import {  StyledProfileInfoDiv, StyledDescHeader, StyledInfoPaper,  StyledProfilePaper, StyledProfileText, StyledProfRow, StyledTableHead, StyledTitleRow } from "../StyledComponents/Styled";
const ProfileSection = () => {
    const userData = JSON.parse(sessionStorage.getItem("userData"))
  return (
    <div>
        <StyledProfilePaper elevation = {12} className = 'centered'>  
            <Container>
                    <StyledProfRow>
                        <StyledTableHead>
                            <Col>
                                <StyledProfileText variant="h2">{userData.firstName}</StyledProfileText>
                                <StyledProfileText variant="h2">&nbsp;{userData.lastName}</StyledProfileText>
                                <AccountCircleIcon style = {{width:'100px',height:'100px',float:'right'}}/>
                            </Col>
                        </StyledTableHead>
                    </StyledProfRow>
                    <StyledTitleRow>
                        <Col>
                            <StyledDescHeader variant = 'h4'>Description:</StyledDescHeader>
                        </Col>
                        <Col>
                            <Typography variant = 'h4'>Personal Details:</Typography>
                        </Col>
                    </StyledTitleRow>
                    <StyledProfileInfoDiv>
                    <Row>
                        <Col md = {{span:6}}>
                            <StyledInfoPaper>
                                <Typography variant = 'body'>{userData.extra}</Typography>
                            </StyledInfoPaper>
                        </Col>
                        <Col md = {{span:3}}>
                            <StyledInfoPaper>
                                <Typography variant = 'h6'>Phone:</Typography>
                                <Typography variant = 'body'>{userData.number}</Typography>
                                
                                <Typography variant = 'h6' style = {{overflow:'hidden'}}>Email:</Typography>
                                <Typography variant = 'body'>{userData.email}</Typography>
                                
                                <Typography variant = 'h6' md = {{marginLeft:'5%'}}>Zip:</Typography>
                                <Typography variant = 'body'>{userData.zip}</Typography>

                                <Typography variant = 'h6' md = {{marginLeft:'5%'}}>DOB:</Typography>
                                <Typography variant = 'body'>{userData.dob}</Typography>
                            </StyledInfoPaper>
                        </Col>
                        
                        <Col md = {{span:3}}>
                            <StyledInfoPaper>
                                <Typography variant = 'h6'>Alternative:</Typography>
                                <Typography variant = 'body'>{userData.altNumber}</Typography>
                                
                                <Typography variant = 'h6'>Best Call Time:</Typography>
                                <Typography variant = 'body'>{userData.callTime}</Typography>
                                
                                <Typography variant = 'h6' md = {{marginLeft:'5%'}}>Gender:</Typography>
                                <Typography variant = 'body'>{userData.gender}</Typography>
                            </StyledInfoPaper>
                        </Col>
                    </Row>
                    </StyledProfileInfoDiv>
            </Container>
        </StyledProfilePaper>
    </div>
  )
}
export default ProfileSection
