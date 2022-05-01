import { Paper } from "@mui/material"
import { Card,  Table } from "react-bootstrap"
import BottomNav from "./NavigationComponents/BottomNav"
import NavBarLower from "./NavigationComponents/NavBarLower"
import ScrollToTop from "../CustomHooks/ScrollToTop"
import TopNavigationBar from "./NavigationComponents/TopNavigationBar"
import { StyledAboutContainer, StyledAboutH3, StyledAboutImgPaper, StyledAboutPaper, StyledCardTitle, StyledImageContainer, StyledImg, StyledInfoDiv, StyledLogoContainer, StyledTableDiv, StyledThead } from "./StyledComponents/Styled"

const About = () => {
  return (
    <div className="doctorPage">
        <ScrollToTop/>
        <TopNavigationBar/>
        <NavBarLower/>
        <StyledLogoContainer>
            <img src = '../uclaTeam.png' width = {350} alt = ""/>
        </StyledLogoContainer>
        <StyledAboutContainer>
            <StyledAboutPaper elevation = '12'>
                <StyledCardTitle>UCLA Health hospitals rank #1 in L.A. and state, #3 in nation</StyledCardTitle>
                <Card.Body>
                    <p>UCLA Health hospitals ranked #1 in both Los Angeles and California and rose to #3 nationally
                        in an annual evaluation published by U.S. News and World Report-the highest set of rankings UCLA has received
                        in its history.
                    </p>
                </Card.Body>
            </StyledAboutPaper>
        </StyledAboutContainer>
        <StyledInfoDiv>
            <Paper elevation = '12'>
            <Table>
                <StyledThead>
                    <tr>
                        <th>Regional Rankings</th>
                        <th>Awarded By</th>
                    </tr>
                </StyledThead>
                <tbody>
                    <tr>
                        <td>#1</td>
                        <td>California</td>
                    </tr>
                    <tr>
                        <td>#1</td>
                        <td>Los Angeles Metro Area</td>
                    </tr>
                    <tr>
                        <td>#3</td>
                        <td>National Honor Roll</td>
                    </tr>
                </tbody>
            </Table>
        </Paper>
        </StyledInfoDiv>
        <StyledImageContainer>
            <StyledAboutImgPaper>
                <StyledImg src = '../work.jpg'/>
            </StyledAboutImgPaper>
            <StyledAboutH3>US News and World Report 2021 Specialty National Rankings</StyledAboutH3>
        </StyledImageContainer>
        <StyledTableDiv>
            <Paper elevation = '12'>
                <Table>
                    <tbody>
                        <tr>
                            <td>#3</td>
                            <td>Diabetes and Endocrinology</td>
                        </tr>
                        <tr>
                            <td>#4</td>
                            <td>Gastroenterology and GI Surgery</td>
                        </tr>
                        <tr>
                            <td>#4</td>
                            <td>Geriatrics</td>
                        </tr>
                        <tr>
                            <td>#4</td>
                            <td>Pulmonology and Lung Surgery</td>
                        </tr>
                        <tr>
                            <td>#5</td>
                            <td>Ophthalmology</td>
                        </tr>
                        <tr>
                            <td>#5</td>
                            <td>Orthopaedics</td>
                        </tr>
                        <tr>
                            <td>#5</td>
                            <td>Pschiatry</td>
                        </tr>
                        <tr>
                            <td>#8</td>
                            <td>Cancer</td>
                        </tr>
                        <tr>
                            <td>#8</td>
                            <td>Neurology and Neurosurgery</td>
                        </tr>
                        <tr>
                            <td>#8</td>
                            <td>Urology</td>
                        </tr>
                        <tr>
                            <td>#9</td>
                            <td>Cardiology and Heat Surgery</td>
                        </tr>
                        <tr>
                            <td>#9</td>
                            <td>Rheumatology</td>
                        </tr>
                        <tr>
                            <td>#12</td>
                            <td>Ear, Nose and Throat</td>
                        </tr>
                        <tr>
                            <td>#21</td>
                            <td>Gynecology</td>
                        </tr>
                    </tbody>
                </Table>
            </Paper>
        </StyledTableDiv>
        <BottomNav/>
    </div>
  )
}

export default About
