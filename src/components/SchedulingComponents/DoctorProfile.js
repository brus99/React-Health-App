import { Rating, Typography } from "@mui/material"
import {  Card } from "react-bootstrap"
import { Link } from "react-router-dom";
import { StyledCardHeader, StyledDoctorDiv, StyledDoctorPaper, StyledFavoriteIcon, StyledHospitalIcon, StyledOpacFavoriteIcon, StyledProfileButton } from "../StyledComponents/Styled";
    const profile = [
        {pic:'doctorSarah.jpg',name:'Sarah Smith M.D.',body:'Doctor Sarah Smith is a Harvard Medical graduate with over 20 years of Pulmonology experience. He completed his fellowship at UCLA and has been the lead for the pulmonology unit for 5 years.'},
        {pic:'jane.jpg',name:'Jane Bright M.D.',body:'Doctor Jane Bright is a Yale Medical School graduate with a passion for pediatric care. She has received the nobel prize and a valued member of UCLA Health for 30 years.'},
        {pic:'doctorDan.webp',name:'Dave Matthews M.D.',body:'Doctor Dave Matthews is a Cambridge University graduate with a speciality in neurology. He has made strides in his field with his research on neuropathy treatments. Dr. Ajay joined UCLA Health after his fellowship at University of Chicago and has been a member of UCLA for 15 years.'},
    ]   
const DoctorProfile = () => {
  return (
    <StyledDoctorDiv>
        {profile.map(profile=> (
        <StyledDoctorPaper elevation = '12'>
            <Card>
                <StyledCardHeader>
                    <Card.Img src = {profile.pic}></Card.Img>
                </StyledCardHeader>
                    <Card.Title>{profile.name}</Card.Title>
                    <Link to = '/Scheduling'>
                        <StyledProfileButton className="centered" variant = 'primary' active size = 'lg' >
                            Schedule
                            <StyledHospitalIcon/>
                        </StyledProfileButton>
                    </Link>
                    <Card.Body>{profile.body}</Card.Body>
                    <Card.Body>
                        <Typography component="legend">Medical Board Rating</Typography>
                        <Rating 
                        name = 'read-only' 
                        defaultValue = {5}
                        readOnly
                        />
                    </Card.Body>
                    <Card.Body>
                        <Typography component="legend">Patient Reviews</Typography>
                        <Rating
                         name = 'read-only'
                        defaultValue = {5} 
                        icon = {<StyledFavoriteIcon/>}
                        emptyIcon = {<StyledOpacFavoriteIcon/>}
                        />
                    </Card.Body>
            </Card>
        </StyledDoctorPaper>))}
    </StyledDoctorDiv>
  )
}

export default DoctorProfile

