import { Container, Grid, Typography } from "@mui/material"

import Navbar from "../components/Navbar"
import ContactUsForm from "../components/forms/ContactUsForm"
import '../App.css'


export default function Contact():JSX.Element {

  return (
    <>
      <div>
        <div
          style={{
            minHeight: "100vh",
          }}
        >
          <Navbar dark={false} />
          <div className="fade-in-bottom">
            <Container>
              <Grid container mt={5}>
                <Grid item xs={12} mb={1}>
                  <Typography variant="h1" fontSize={35} align="center">Contact Information</Typography>
                </Grid>
                <hr style={{width: '25%'}}/>
                <Grid item xs={12} mt={1}>
                  <Typography variant="h6" align="center">Please direct all inqueries to</Typography>
                </Grid>
              </Grid>
            </Container>
          
            <ContactUsForm />
          </div>
        </div>
      </div>
    </>
  )
}
