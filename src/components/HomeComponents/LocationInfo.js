import { LocationDiv, LocationInnerDiv, LocationInnerMostDiv, StyledLink, StyledLocationButton, StyledLocationIcon, StyledPaper, StyledParagraphTypography, StyledTypography } from "../StyledComponents/Styled";
const LocationInfo = () => {
  return (
    <LocationDiv>
        <LocationInnerDiv className = 'centered' >
            <StyledPaper elevation = {12}>
                <StyledTypography variant="h3">From the Central Coast to the South Bay</StyledTypography>
                <LocationInnerMostDiv>
                    <StyledParagraphTypography variant = 'paragraph' >With over 250 locations across southern California, your best care is closer than you think.</StyledParagraphTypography>
                </LocationInnerMostDiv>
                    <StyledLink to = '/Location'>
                        <StyledLocationButton variant = 'primary' active size = 'lg'>
                            Find Your Location
                            <StyledLocationIcon/>
                        </StyledLocationButton>
                    </StyledLink>
            </StyledPaper>
        </LocationInnerDiv>
    </LocationDiv>
  )
}

export default LocationInfo

