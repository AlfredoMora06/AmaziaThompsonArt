import { Container, Grid, Typography } from "@mui/material"
import Carousel from 'react-material-ui-carousel'

import Navbar from "../components/Navbar"
import '../App.css'
import { MinimalismImages } from "../utils/MinimalismImages"


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
                <Typography variant='h6' fontSize={15} mt={2}>
                  "In my journey of self growth I've realized I struggle in expressing myself in visual creations. So I made a commitment to push myself by creating a piece everyday over a 30 day period."
                </Typography>
                <Typography variant='h6' fontSize={15} mt={2}>
                  Inspired by the color-blocking themes that he sees represented in his life. Amazia mentions that many of his color choices represent the spectrum of emotions which he went through during his unique painting journey.
                </Typography>
              </Grid>
            </Grid>

            <Grid container>
              <Grid item xs={12} marginTop={8} marginBottom={10}>
                <Carousel
                  duration={1000}
                  animation="slide" 
                  navButtonsAlwaysVisible 
                  indicators={true}
                  navButtonsProps={{style: {backgroundColor: "rgba(189, 64, 46, 0.75)" }}}
                >
                  {
                    MinimalismImages.map((item, index) => {
                      return (
                        <div key={`imagen-${index}`}>
                          <img 
                            src={item} 
                            alt={`imagen-${index}`} 
                            style={{
                              width: "100%", 
                              borderRadius: 50,
                              minHeight: 455,
                              maxHeight: 500, 
                              objectFit: "contain", 
                            }}
                          />
                        </div>
                      )
                    })
                  }
                </Carousel>
              </Grid>
            </Grid>

          </Container>
        </div>
      </div>
    </>
  )
}
