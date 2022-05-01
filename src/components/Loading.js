import { LinearProgress } from "@mui/material"
import { Card } from "react-bootstrap"

const Loading = () => {
  return (
    <div className = 'centered'>
        <Card>
            <h3>Loading...</h3>
            <LinearProgress/>
        </Card>
    </div>
  )
}

export default Loading
