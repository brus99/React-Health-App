import { Link } from "react-router-dom";
import { AwardH2, AwardH3, BottomAwardH2, BottomAwardH3,  StyledClassIcon, StyledDiscoverButton,  StyledHospitalImage } from "../StyledComponents/Styled";
const AwardInfo = ({ className, children }) => {
  return (
    <div className="awardInfo">
        <div className="centered">
            <StyledHospitalImage src = 'public/adult-hospitals.png' className="centered" width = {450} />
        </div>
        <div className="centered">
            <AwardH3>#1 in California</AwardH3> 
            <AwardH2>and top 3 in the nation-</AwardH2>
            <BottomAwardH2>Our ranking gives you and your family the confidence you need</BottomAwardH2>
        </div>
        <div className = 'centered'>
            <BottomAwardH3 >As the global Pandemic has shown, we cannot
            take our health for granted.
            </BottomAwardH3> 
            <BottomAwardH3 > Where you go for health care matters.</BottomAwardH3>
            <Link to = 'AboutDoctors'>
                <StyledDiscoverButton variant = 'primary' active size = 'lg' >
                    Discover More  
                    <StyledClassIcon/>
                </StyledDiscoverButton>
            </Link>
        </div>
    </div>
  )
}

export default AwardInfo
