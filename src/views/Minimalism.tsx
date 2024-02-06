import { Container, Grid, Typography } from "@mui/material"

import Navbar from "../components/Navbar"
import '../App.css'



export default function Minimalism():JSX.Element {
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
            <Grid container justifyContent={'center'} className="fade-in-bottom">
              <Grid item xs={12} mt={5}>
                <Typography variant='h1' align="center" fontSize={35}>
                  A Digital Minimalistic And Abstract Expression 
                </Typography>
                <Typography variant='h1' align="center" sx={{mt: 2}} fontSize={35}>
                  Printed on Metal
                </Typography>
              </Grid>

              <Grid item xs={12} mt={4}>
                <Typography variant='h6' fontSize={15}>
                  In a world inundated with digital noise, a lone artist emerges, embracing the simplicity of digital minimalism. Their canvas: sleek metal, a reflection of modernity and durability. With a deft hand, they craft an abstract expression, each pixel a deliberate stroke in the symphony of simplicity. Void of clutter, yet rich in depth, their creation invites viewers to pause, to contemplate the essence of existence in an increasingly complex digital age.
                </Typography>
              </Grid>
            </Grid>
          </Container>
        
        </div>
      </div>
    </>
  )
}
