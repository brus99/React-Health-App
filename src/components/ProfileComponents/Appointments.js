import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material"
import { StyledAppointDiv, StyledAppointPaper } from "../StyledComponents/Styled";
const Appointments = () => {
    const appointmentData = JSON.parse(sessionStorage.getItem("appoint"))
  return (
    <StyledAppointDiv>
        {appointmentData? 
        <TableContainer component = {Paper} elevation = {12}>
            <Table aria-label = 'simple table'>
                <TableHead>
                    <TableRow>
                        <TableCell>Date</TableCell>
                        <TableCell>Speciality</TableCell>
                        <TableCell>Doctor</TableCell>
                        <TableCell>Referal</TableCell>
                        <TableCell>Location</TableCell>
                        <TableCell>Time</TableCell>
                        <TableCell>Description</TableCell>
                        <TableCell>Insurance</TableCell>
                        <TableCell>Status</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        <TableCell>{appointmentData.date}</TableCell>
                        <TableCell>{appointmentData.specialty}</TableCell>
                        <TableCell>{appointmentData.doctor}</TableCell>
                        <TableCell>{appointmentData.refer}</TableCell>
                        <TableCell>{appointmentData.location}</TableCell>
                        <TableCell>{appointmentData.time}</TableCell>
                        <TableCell>{appointmentData.desc}</TableCell>
                        <TableCell>{appointmentData.insurance}</TableCell>
                        <TableCell>{appointmentData.requested}</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>: null}
        {appointmentData?
        <StyledAppointPaper elevation = {12}>
            <Typography type = 'h1'>Reason for request</Typography>
            {appointmentData.desc ? 
            <Typography type = 'paragraph'>{appointmentData.desc}</Typography>
            :
            <Typography type = 'paragraph'>None</Typography>
            }
        </StyledAppointPaper>:
        null
        }
    </StyledAppointDiv>
  )
}

export default Appointments
