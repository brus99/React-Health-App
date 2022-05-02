import {  Card} from "react-bootstrap"
import { StyledLibraryIcon, StyledNewsButton, StyledNewsCard,  StyledNewsContainer } from "../StyledComponents/Styled";
const NewsArticle = () => {
  return (
    <div>
        <StyledNewsContainer>
            <StyledNewsCard>
                <Card.Img variant = 'top' src = 'Techquity.jpg'></Card.Img>
                <Card.Body>
                    <Card.Title>
                        Tech
                    </Card.Title>
                    <Card.Text>
                        UCLA Health seeks applicants for TechQuity - a health equity - focused innovation accelerator
                    </Card.Text>
                    <Card.Link href = "https://www.hcinnovationgroup.com/population-health-management/health-equity/news/21257068/ucla-health-announces-techquity-accelerator">
                        <StyledNewsButton variant = 'primary' active size = 'lg'  >
                            Learn More
                            <StyledLibraryIcon/>
                        </StyledNewsButton>
                    </Card.Link>
                </Card.Body>
            </StyledNewsCard>
            <StyledNewsCard>
                <Card.Img variant = 'top' src = 'spaceMedicine.jfif'></Card.Img>
                <Card.Body>
                    <Card.Title>
                        Space Fellowship
                    </Card.Title>
                    <Card.Text>
                        UCLA Space Medicine fellowship program aims to prepare next generation of flight surgeons
                    </Card.Text>
                    <Card.Link href = "https://newsroom.ucla.edu/releases/ucla-space-medicine-fellowship-program">
                        <StyledNewsButton variant = 'primary' active size = 'lg'  >
                            Learn More
                            <StyledLibraryIcon/>
                        </StyledNewsButton>
                    </Card.Link>
                </Card.Body>
            </StyledNewsCard>
            <StyledNewsCard>
                <Card.Img variant = 'top' src = 'surgery.jpg'></Card.Img>
                <Card.Body>
                    <Card.Title>
                        UCLA Ranks #1 in California
                    </Card.Title>
                    <Card.Text>
                        UCLA Health Hospitals ranked #1 in L.A. and California and rose to #3 nationally.
                    </Card.Text>
                    <Card.Link href = '/About'>
                        <StyledNewsButton variant = 'primary' active size = 'lg' >
                            Learn More
                            <StyledLibraryIcon/>
                        </StyledNewsButton>
                    </Card.Link>
                </Card.Body>
            </StyledNewsCard>
        </StyledNewsContainer>
    </div>
  )
}
export default NewsArticle
