import {  Form } from "react-bootstrap"
import NavBarLower from "./NavigationComponents/NavBarLower"
import TopNavigationBar from "./NavigationComponents/TopNavigationBar"
import { Link } from "react-router-dom";
import {useState} from 'react'
import { useNavigate } from 'react-router';
import Loading from "./Loading";
import ScrollToTop from "../CustomHooks/ScrollToTop";
import { StyledH2, StyledProfileButton, StyledRegisterDiv, StyledRegisterPaper, StyledSchedulingDiv, StyledSchedulingPaper, StyledSendIcon } from "./StyledComponents/Styled";
const Scheduling = () => {
    const navigate = useNavigate();
    const [loading,setLoading] = useState(false);
    const userData = JSON.parse(sessionStorage.getItem("userData"))
    const handleSubmit = (e) =>{
        e.preventDefault();
        const userAppointment = {
            date:e.target.date.value,
            specialty:e.target.specialty.value,
            doctor:e.target.doctor.value,
            refer:e.target.refer.value,
            location:e.target.location.value,
            time:e.target.time.value,
            desc:e.target.desc.value,
            insurance:e.target.insurance.value,
            requested:'Pending',
        }
        sessionStorage.getItem("appoint")
        setLoading(true)
        setTimeout(() => {
            sessionStorage.setItem("appoint",JSON.stringify(userAppointment));
            navigate('/')
            setLoading(false)
        }, 1000);
    }
  return (
    <div>
        <ScrollToTop/>
        <TopNavigationBar/>
        <NavBarLower/>
        {loading? <Loading/>:<div>
        <StyledSchedulingDiv>
            <StyledH2>
                UCLA Health Appointment Request
            </StyledH2>
        </StyledSchedulingDiv>
        {userData? (
        <StyledRegisterDiv>
            <StyledSchedulingPaper elevation = {12}>
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId = 'date'>
                        <Form.Label>Appointment Date Desired</Form.Label>
                        <Form.Control require type = 'text'/>
                    </Form.Group>
                    <Form.Group controlId = 'specialty'>
                        <Form.Label>What speciality doctor would you like to see?</Form.Label>
                        <Form.Control  require type = 'text' />
                    </Form.Group>
                    <Form.Group controlId = 'doctor'>
                        <Form.Label>Doctor Preference</Form.Label>
                        <Form.Control  require type = 'text' />
                    </Form.Group>
                    <Form.Group controlId="refer">
                        <Form.Label>If you were referred by a doctor, what is the referring doctor's name?</Form.Label>
                        <Form.Control  require type = 'text' />
                    </Form.Group>
                    <Form.Group controlId = 'location'>
                        <Form.Label>Location Desired (Eg. North Hollywood)</Form.Label>
                        <Form.Control  require type = 'text' />
                    </Form.Group>
                    <Form.Group controlId = 'time'>
                        <Form.Label>Desired Time</Form.Label>
                        <Form.Control  require type = 'text' />
                    </Form.Group>
                    <Form.Group controlId = 'desc'>
                        <Form.Label>Brief Explanation of the reason for the appointment</Form.Label>
                        <Form.Control  require as = 'textarea' />
                    </Form.Group>
                    <Form.Group controlId="insurance">
                        <Form.Label>Insurance Type</Form.Label>
                        <Form.Select>
                            <option>Please Select</option>
                            <option>HMO</option>
                            <option>PPO</option>
                            <option>POS</option>
                            <option>Self Pay</option>
                            <option>Other</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group className="centered">
                        <StyledProfileButton variant = 'primary' type = 'submit' size = 'lg' >
                            Send Request
                            <StyledSendIcon/>
                        </StyledProfileButton>
                    </Form.Group>
                </Form>
                
            </StyledSchedulingPaper>
        </StyledRegisterDiv>
        ):(
            <StyledRegisterDiv>
                <StyledRegisterPaper elevation = {12}>
                    <h3>Please Create an Account Before Scheduling</h3>
                    <Link to = "/SignUp">
                        <StyledProfileButton variant = 'primary'  size = 'lg'>
                            Sign Up
                            <StyledSendIcon/>
                        </StyledProfileButton>
                    </Link>
                </StyledRegisterPaper>
            </StyledRegisterDiv>
        )}
        </div>}
    </div>
  )
}
export default Scheduling
