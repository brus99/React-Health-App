import styled from "styled-components";
import YouTubeIcon from '@mui/icons-material/YouTube';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FavoriteIcon from '@mui/icons-material/Favorite';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import HistoryEduIcon from '@mui/icons-material/HistoryEdu';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Dropdown, Form, Navbar } from "react-bootstrap"
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import ClassIcon from '@mui/icons-material/Class';
import VaccinesIcon from '@mui/icons-material/Vaccines';
import AddLocationIcon from '@mui/icons-material/AddLocation';
import { IconButton, Menu, Paper, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Send from "@mui/icons-material/Send";

//Main Home Navigation/Award Section
export const AwardH3 = styled.h3`
    font-weight:bold;
    margin-top:4px;
    color:white;
    font-size:40px;
`;
export const StyledButtonContainer = styled.div`
   margin:0 auto;
`
export const HomeH3 = styled(AwardH3)`
    color:black;
    font-size:70px;
    font-weight:bold;
`
export const StyledHospitalImage = styled.img`
    margin: 0 auto;
    margin-top: 6%;
`
export const AwardH2 = styled.h2`
    font-weight:bold;
    margin-top:4px;
    color:white;
`;
export const BottomAwardH2 = styled(AwardH2)`
    margin-top:25px;
    margin-bottom:25px;
`;
export const BottomAwardH3 = styled(AwardH3)`
    font-size:15px;
`

export const StyledButton = styled(Button)`
    margin-bottom:2%;
    padding-left:50px;
    padding-right:50px;
    width:300px;
    box-shadow: 1px 3px 1px #9E9E9E;
`
export const StyledDiscoverButton = styled(StyledButton)`
    box-shadow: none;
`
export const StyledHomeLocationButton = styled(StyledButton)`
    margin-left:3%;
`
export const StyledLocationButton = styled(StyledButton)`
    margin-bottom:0%;
    margin-top:7%;
`
export const StyledClassIcon = styled(ClassIcon)`
    margin-left:4%;
    margin-top:1%;
`
export const DoctorParagraph = styled.p`
    font-weight:300;
    margin-top:20px;
    color:black;
`
export const DoctorH1 = styled.h1`
    font-weight:400;
    margin-top:4px;
    color:black;
    margin-top:25px;
`
export const DoctorCard = styled(Card)`
    width:350px;
`
export const DoctorOptionsCard = styled(Card)`
    width:350px;
    margin-top:30px;
    padding:2%;
    margin:0 auto;
    text-align:center;
    margin-bottom:30px;
`
export const CenterDoctorCard = styled(Card)`
    margin:0 auto;
    text-align:center;
    width:350px;
    margin-top:100px;
    margin-bottom:5%;
    padding:1%;
`
export const DoctorDescriptionCard = styled(Card)`
    width:800px;
    padding:5%;
    margin:0 auto;
    text-align:center
`
export const DoctorImageContainer = styled(Container)`
    margin-left:100px
`
export const StyledHospitalIcon = styled(LocalHospitalIcon)`
    margin-left:4%;
    margin-bottom:1%;
`
export const StyledLocationIcon = styled(AddLocationIcon)`
    margin-left:4%;
`
export const StyledVaccineIcon = styled(VaccinesIcon)`
    margin-left:4%;
`
export const DoctorDiv = styled.div`
    margin-left:25px;
`
export const DoctorSectionDiv = styled.div`
    margin:0 auto;
    text-align:center;
    display:flex;
    margin-right:200px;
`
export const DoctorPhoto = styled.img`
    margin:0 auto;
    margin-top:25px;
    margin-bottom:25px;
    height:400px;
`
export const HomeDiv = styled.div`
    margin:0 auto;
    padding-top:8%;
    width:60%;
    text-align:center;
`
//Location Section
export const LocationDiv = styled.div`
    background-image: url(../public/backdrop.jfif);
    background-repeat: no-repeat;
    background-size:cover;
    padding:40px;
    margin-bottom:5%;
`
export const LocationInnerDiv = styled.div`
    width:500px;
`
export const LocationInnerMostDiv = styled.div`
    margin-top:8%;
`
export const StyledPaper = styled(Paper)`
    height:70vh;
    padding:10%;
`
export const StyledTypography = styled(Typography)`
    font-weight:light;
    margin-top:2%;
    color:black;
`
export const StyledParagraphTypography = styled(StyledTypography)`
    font-size:20px;
    color:black;
`
//News Section
export const StyledNewsContainer = styled(Container)`
    margin-top:75px;
    display:flex;
    margin-bottom:25px;
`
export const StyledNewsCard = styled(Card)`
    width:18rem;
    margin:0 auto;
`
export const StyledLibraryIcon = styled(LocalLibraryIcon)`
    margin-left:4%;
    margin-bottom:2%;
`
export const StyledNewsButton = styled(Button)`
    padding-left:25px;
    padding-right:25px;
    width:250px;
    margin-top:20px;
    margin-bottom:20px;
`
//Location Page
export const StyledLocationPaper = styled(Paper)`
    margin-bottom:15%;
    margin-top:15%;
    padding:3%;
`
export const StyledLocationPageDiv = styled.div`
    width:40%;
`
export const StyledRow = styled(Row)`
    margin-bottom:2%;
`
export const StyledRowMargin = styled(Row)`
    margin-bottom:4%;
`
export const StyledBottomRow = styled(Row)`
    margin-top:4%;
`
export const StyledLocationCardButton = styled(StyledButton)`
    margin-top: 4%;
    margin-bottom:4%;
`
export const StyledColumn = styled(Col)`
    float:left;
`
export const StyledLink = styled(Link)`
    text-decoration:none;
`
// BOTTOM NAVBAR Style Sheet
export const StyledNavbar = styled(Navbar)`
    height:75px;
`
export const StyledNavH3 = styled.h3`
    font-weight:bold;
    margin-top:4px;
    color:white;
`
export const BlackStyledNavH3 = styled(StyledNavH3)`
    color:black;
`
export const StyledNavbarBrand = styled(Navbar.Brand)`
    margin-left:3%;
`
export const StyledRightNavbarBrand = styled(Navbar.Brand)`
    margin-left:50%;
`
export const StyledPhone = styled(PhoneAndroidIcon)`
    color:black;
`
export const StyledTwitter = styled(TwitterIcon)`
    color:black;
`
export const StyledFacebook = styled(FacebookIcon)`
    color:black;
`
export const StyledInsta = styled(InstagramIcon)`
    color:black;
`
export const StyledYoutube = styled(YouTubeIcon)`
    color:black;
`;
export const StyledLinkedIn = styled(LinkedInIcon)`
    color:black;
`;

//Lower Top Navbar Style Sheet
export const StyledLowerNavDiv = styled.div`
    float:left;
    width:100%;
`;
export const StyledLowerNavbarBrand = styled(Navbar.Brand)`
    margin-left:1%;
`;
export const StyledLowerNavbarBrandMargin = styled(Navbar.Brand)`
    float:right;
`;
export const StyledH3Black = styled.h3`
    font-weight:bold;
    margin-top:4px;
    color:black;
`;
export const StyledShadowDiv = styled.div`
    box-shadow: 1px 3px 1px #9E9E9E
`;
export const StyledDropDownToggle = styled(Dropdown.Toggle)`
    background-color:gray;
    border-color:black;
    box-shadow:1px 3px 1px #9E9E9E;
    border-radius:30px;
    margin-top:5px;
    height:35px;
`;
//Top Navbar Style sheet
export const StyledTopNav = styled(Navbar)`
    height:40px;
`;
export const StyledTopNavBrand = styled(Navbar.Brand)`
    margin-bottom:5px;
    margin-left:1%;
`;
export const StyledTopDropdownToggle = styled(Dropdown.Toggle)`
    background-color:gray;
    border-color:black;
    border-radius:30px;
    margin-top:5px;
    height:35px;
`;
export const StyledHealthAndSafetyIcon = styled(HealthAndSafetyIcon)`
    margin-bottom:10px;
`;

export const StyledTopPhoneIcon = styled(PhoneAndroidIcon)`
    color:white;
`;
export const StyledTopTwitterIcon = styled(TwitterIcon)`
    color:white;
`;
export const StyledTopFacebookIcon = styled(FacebookIcon)`
    color:white;
`;
export const StyledTopInstaIcon = styled(InstagramIcon)`
    color:white;
`;
export const StyledTopYoutubeIcon = styled(YouTubeIcon)`
    color:white;
`;
export const StyledTopLinkedInIcon = styled(LinkedInIcon)`
    color:white;
`;
export const StyledNavbarBrandLeft = styled(Navbar.Brand)`
    margin-left:23%;
`;
export const StyledHistoryIcon = styled(HistoryEduIcon)`
    margin-left:10px;
    margin-bottom:2px;
`;
export const StyledLogoutButton = styled(Button)`
    padding-left:5px;
    padding-right:5px;
    width:150px;
    margin-top:20px;
    margin-bottom:20px;
    float:right;
    background-color:rgb(226,185,21)
`;
export const StyledSignUpButton = styled(Button)`
    padding-left:5px;
    width:150px;
    float:right;
    background-color:rgb(226,185,21)
`
//Profile Section Style Sheet

//////Appointments style

export const StyledAppointDiv = styled.div`
    width:80%;
    margin:2% auto ;
    text-align:center;
`
export const StyledAppointPaper = styled(Paper)`
    margin-top:5%;
`
//profileDrawer.js
export const StyledDrawerDiv = styled.div`
    background-color:rgb(48,129,175);
    padding:2%;
    display:flex;
`
export const StyledDrawerToggleDiv = styled.div`
    width:10%;
    margin-bottom:1%;
    float:left;
`
export const StyledDrawerH2 = styled(AwardH2)`
    
`
export const StyledDrawerItems = styled.div`
    float:left;
`
export const StyledIconButton = styled(IconButton)`
    margin-left:8%
`
//ProfileSection.js
export const StyledTitleRow = styled(Row)`
    margin-top:2%;
    margin-bottom:1%;
`
export const StyledProfileInfoDiv = styled.div`
    padding:2%;
`
export const StyledProfilePaper = styled(Paper)`
    width:75%;
    margin-top:3%
`
export const StyledProfRow = styled(Row)`
    height:20vh;
`
export const StyledDrawerHeadDiv = styled.div`
  background-color:lightskyblue;
  padding: 4px;
  text-align: center;
`
export const StyledProfileCard = styled(Card)`
    width:80%;
    padding:1%;
`
export const StyledProfileText = styled(Typography)`
    float:left;
    color:black;
`
export const StyledDescHeader = styled(Typography)`
`
export const StyledInfoPaper = styled(Paper)`
    height:100%;
`
export const StyledTableHead = styled.div`
    margin:0;
    background-color:lightskyblue;
    padding: 20px;
    border-radius:4px;
    box-shadow: "10px 3px 1px #9E9E9E";
    text-align: center;
    border-bottom-right-radius:20px;
    border-bottom-left-radius:20px;
`
//SignUp

export const StyledSignUpPaper = styled(Paper)`
    width:55%;
    margin:0 auto;
    padding:3%;
    margin-top:10%;
    margin-bottom:5%
`
export const StyledSendIcon = styled(Send)`
    margin-left:10px;
    margin-bottom:2px;
`
export const StyledFormGroup = styled(Form.Group)`
    margin:0 auto;
    text-align:center;
    margin-top:4%;
`

//Scheduling
//////Doctor profile
export const StyledDoctorDiv = styled.div`
    width:30%;
    margin:0 auto;
    text-align:center;
`
export const StyledDoctorPaper = styled(Paper)`
    margin-bottom:15%;
    margin-top:15%;
`
export const StyledCardHeader = styled(Card.Header)`
    width:100%;
    padding:0px;
    margin-bottom:3%
`

export const StyledProfileButton = styled(Button)`
    padding-left:25px;
    padding-right:25px;
    width:250px;
    margin-top:20px;
    margin-bottom:20px
`
export const StyledFavoriteIcon = styled(FavoriteIcon)`
    color:red;
`
export const StyledOpacFavoriteIcon = styled(StyledFavoriteIcon)`
    opacity:50%;
`
//select doctor section

export const StyledSelectDoctorDiv = styled.div`
    margin-top:10%
`
export const StyledFlexDiv = styled.div`
    display:flex;
`
//About.js
export const StyledLogoContainer = styled.div`
    margin:0 auto;
    text-align:center;
    margin-top:100px;
    margin-bottom:30px;
`
export const StyledImageContainer = styled.div`
    margin:0 auto;
    text-align:center;
    margin-top:100px;
    margin-bottom:30px;
`
export const StyledAboutPaper = styled(Paper)`
    text-align:center;
    padding-top:1%;
`
export const StyledCardTitle = styled(Card.Title)`
    margin-top:3%;
    font-weight:bold;
    font-size:25px;
`
export const StyledInfoDiv = styled.div`
    width:70%;
    margin-top:3%;
    margin:0 auto;
    text-align:center;
`
export const StyledThead = styled.thead`
    text-align:center;
`
export const StyledImgCard = styled(Card)`

    padding:1%

`
export const StyledImg = styled.img`
    height:400px;
    width:auto;
`
export const StyledAboutH3 = styled(AwardH3)`
    margin:0 auto;
`
export const StyledAboutContainer = styled(Container)`
    margin-bottom:5%;
`
export const StyledAboutImgPaper = styled(Paper)`
    width:24%;
    margin:0 auto;
    padding:1%;
`
export const StyledTableDiv = styled.div`
    width:80%;
    padding:1%;
    
    margin:0 auto;
    text-align:center
`

//Location.js

export const StyledLocationImgPaper = styled(Paper)`
    width:52%;
    margin-top:10%;
    padding:1%
`
//profile.js
export const StyledProfileDiv = styled.div`
    background-color:rgb(48,129,175);
    padding:2%;
    display:flex;
`
export const StyledHeaderDiv = styled.div`
    width:10%;
    margin-left:2%;
`
export const StyledProfileH3 = styled.h3`
    font-weight:bold;
    margin-top:4%;
    color:white;
    float:left;
`
export const StyledMenu = styled(Menu)`
    margin-top:4%;
`
export const StyledProfileDrawerDiv = styled.div`
    float:left;
`
export const StyledAccountIconSmall = styled(AccountCircleIcon)`
    width:50px;
    height:50px;
`

//Scheduling

export const StyledSchedulingDiv = styled.div`
    background-color:rgb(48,129,175);
    padding: 3%;
    margin:0 auto;
    text-align:center;
`
export const StyledH2 = styled.h2`
    padding-top:5%;
    color:white;
`
export const StyledSchedulingPaper = styled(Paper)`
    width:55%;
    margin:0 auto;
    padding:3%;
    margin-top:5%
`
export const StyledRegisterPaper = styled(Paper)`
    margin-bottom:0;
    width:50%;
    text-align:center;
    margin:0 auto;
    padding:2%;
`
export const StyledRegisterDiv = styled.div`
    margin-top:5%;    
    margin-bottom:2%;
`