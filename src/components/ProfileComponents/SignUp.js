import {   Form } from "react-bootstrap"
import NavBarLower from "../NavigationComponents/NavBarLower"
import TopNavigationBar from "../NavigationComponents/TopNavigationBar"
import { useNavigate } from 'react-router';
import Loading from "../Loading";
import { useState } from "react";
import ScrollToTop from "../../CustomHooks/ScrollToTop";
import BottomNav from "../NavigationComponents/BottomNav";
import { StyledFormGroup, StyledProfileButton, StyledSendIcon, StyledSignUpPaper } from "../StyledComponents/Styled";
const SignUp = () => {
    const navigate = useNavigate();
    const [loading,setLoading] = useState(false);
    const handleSubmit = ((e)=>{
        e.preventDefault();
        console.log(e.target.value)
      const user = {
        firstName:e.target.firstName.value, 
        lastName:e.target.lastName.value,
        number:e.target.number.value,
        altNumber:e.target.altNumber.value,
        callTime:e.target.callTime.value,
        email:e.target.email.value,
        zip:e.target.zip.value,
        gender:e.target.gender.value,
        dob:e.target.dob.value,
        extra:e.target.extra.value,
      }
      console.log(user);  
      localStorage.setItem("userData",JSON.stringify(user))
      setLoading(true)
      setTimeout(() => {
          navigate('/')
          setLoading(false)
      }, 1000);
    })
  return (
    <div className="doctorPage">
        <ScrollToTop/>
        <TopNavigationBar/>
        <NavBarLower/>
        {loading? 
        (<Loading/>
        ):(
            <div>
            <StyledSignUpPaper elevation={12}>
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId = 'firstName'>
                        <Form.Label>First Name</Form.Label>
                        <Form.Control required type = 'text' />
                    </Form.Group>
                    <Form.Group controlId = 'lastName'>
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control require dtype = 'text' />
                    </Form.Group>
                    <Form.Group controlId = 'number'>
                        <Form.Label>Phone Number</Form.Label>
                        <Form.Control  require type = 'text' />
                    </Form.Group>
                    <Form.Group controlId = 'altNumber'>
                        <Form.Label>Alternative Phone Number</Form.Label>
                        <Form.Control  require type = 'text' />
                    </Form.Group>
                    <Form.Group controlId = 'callTime'>
                        <Form.Label>Best Time to Call</Form.Label>
                        <Form.Select>
                            <option>Please Select</option>
                            <option>Morning (8:00 AM - 10:00 AM PST)</option>
                            <option>Noon (10:00 AM - 12:00 PM PST)</option>
                            <option>Afternoon (12:00 PM - 5:00 PM PST)</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group controlId = 'email'>
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control  require type = 'email' placeholder = 'enter email'/>
                    </Form.Group>
                    <Form.Group controlId = 'zip'>
                        <Form.Label>Zip or Postal Code</Form.Label>
                        <Form.Control  require type = 'text' />
                    </Form.Group>
                    <Form.Group controlId = 'gender'>
                        <Form.Label>Gender</Form.Label>
                        <Form.Select >
                            <option>Please Select</option>
                            <option>Male</option>
                            <option>Female</option>
                            <option>Non-binary</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group controlId = 'dob'>
                        <Form.Label>Date of Birth</Form.Label>
                        <Form.Control  require type = 'text' />
                    </Form.Group>
                    <Form.Group controlId = 'extra'>
                        <Form.Label>Anything else you'd like to add? (your doctor can view this information during an appointment)</Form.Label>
                        <Form.Control   as = 'textarea' />
                    </Form.Group>
                    <StyledFormGroup >
                        <StyledProfileButton type = 'submit' variant = 'primary'>
                            Create Account
                            <StyledSendIcon/>
                        </StyledProfileButton>
                    </StyledFormGroup>
                </Form>
            </StyledSignUpPaper>
            <BottomNav/>
            </div>
        )}
        
    </div>
  )
}

export default SignUp
