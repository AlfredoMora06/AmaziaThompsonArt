import { Container, Grid, Typography } from "@mui/material"

import Navbar from "../components/Navbar"


export default function About():JSX.Element {

  return (
    <>
      <div>
        <div
          style={{
            minHeight: "100vh",
          }}
        >
          <Navbar dark={false} />
          <Container>
            <Grid container mt={5}>
              <Grid item xs={12} mb={1}>
                <Typography variant="h1" fontSize={35} align="center">Meet Amazia</Typography>
              </Grid>
            </Grid>
            <Grid container mt={5}>
              <Grid item xs={12} mb={1}>
                <Typography variant="h6" align="center">Let me know what you want me to put here...</Typography>
              </Grid>
            </Grid>
          </Container>
        </div>
      </div>
    </>
  )
}
