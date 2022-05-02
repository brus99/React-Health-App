import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { DoctorCard, DoctorDescriptionCard, DoctorDiv, DoctorH1, DoctorImageContainer, DoctorParagraph, DoctorPhoto, DoctorSectionDiv, StyledButton, StyledHospitalIcon } from "../StyledComponents/Styled";
const ChooseDoctorSection = () => {
  return (
    <DoctorSectionDiv>
        <DoctorImageContainer>
            <DoctorCard>
                <DoctorPhoto src = 'find-a-provider.png'/>
            </DoctorCard>
        </DoctorImageContainer>
        <DoctorDiv>
            <DoctorDescriptionCard>
                <DoctorH1>Your best life is powered by your personalized primary care team</DoctorH1>
                <Card.Text>The primary care physicians at UCLA Health are here for you in all stages of your life. Whether you are sick or injured
                    or have a general health concern, your primary care doctor is your point person for connecting you to our network of specialists.
                </Card.Text>
                <Link to = '/SelectDoctor'>
                    <StyledButton variant = 'primary' active size = 'lg'>
                        Find A Doctor   
                        <StyledHospitalIcon/>
                    </StyledButton>
                </Link>
            </DoctorDescriptionCard>
        </DoctorDiv>
    </DoctorSectionDiv>
  )
}
export default ChooseDoctorSection