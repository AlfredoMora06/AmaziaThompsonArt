import { Container, Grid, Typography } from "@mui/material"

import Navbar from "../components/Navbar"
import '../App.css'


export default function Work():JSX.Element {

  return (
    <>
      <div>
        <div
          style={{
            minHeight: "100vh",
          }}
        >
          <Navbar dark={false} />
          <Container className="fade-in-bottom">
            <Grid container mt={5}>
              <Grid item xs={12} mb={1}>
                <Typography variant="h6" align="center">Let me know how you want me to organize here...</Typography>
              </Grid>
            </Grid>
          </Container>
        </div>
      </div>
    </>
  )
}
