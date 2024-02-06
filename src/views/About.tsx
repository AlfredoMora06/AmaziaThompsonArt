import { Button, Container, Grid, Typography } from "@mui/material"

import Navbar from "../components/Navbar"
import '../App.css'
//@ts-ignore
import ArtLogo from '../assets/Art_Logo.jpg'


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
          <Container className="fade-in-bottom">
            <Grid container mt={5}>
              <Grid item xs={12} mb={1}>
                <Typography variant="h1" fontSize={35} align="center">Meet Amazia</Typography>
              </Grid>
            </Grid>
            <Grid container mt={3} justifyContent={'center'}>
              <Grid item xs={12} mb={5}>
                <Typography variant="h6" fontSize={15}>
                  Amazia Thompson is a digital artist based in New York, NY, known for his captivating minimalist and abstract expressionism printed on metal. With a keen eye for sleek design and a passion for pushing boundaries, Amazia's work stands at the intersection of modernity and artistic innovation.
                </Typography>
                <br/>
                <Typography variant="h6" fontSize={15}>
                  Originally hailing from Kentucky, Amazia's artistic journey has taken him through various landscapes of digital artistry, honing his craft to perfection. Drawing inspiration from the purity of minimalism and the boundless freedom of abstract expressionism, his pieces evoke a sense of wonder and introspection.
                </Typography>
                <br/>
                <Typography variant="h6" fontSize={15}>
                  Amazia's unique style is characterized by clean lines, subtle textures, and a masterful play of negative space, creating compositions that speak volumes with their simplicity. Each piece tells a story, inviting viewers to interpret and immerse themselves in its depths.
                </Typography>
                <br/>
                <Typography variant="h6" fontSize={15}>
                  While Amazia's medium may be digital, his art is deeply rooted in personal experiences, emotions, and the essence of the human condition. Through his work, he aims to provoke thought, evoke emotion, and inspire curiosity, leaving a lasting impact on those who encounter it.
                </Typography>
                <br/>
                <Typography variant="h6" fontSize={15}>
                  With an ever-growing portfolio and a dedication to pushing the boundaries of digital art, Amazia Thompson is poised to leave an indelible mark on the world of contemporary art.
                </Typography>
              </Grid>

              <Grid item xs={12} mb={2}>
                <hr style={{width: '80%', border: "0.1px solid #000000", opacity: 0.5}}/>
              </Grid>

              <Grid item xs={12} my={1}>
                <Typography variant="h4" fontWeight={700}>
                  CV
                </Typography>
              </Grid>

              <Grid item xs={12} my={1}>
                <Typography variant="h6" fontSize={15}>
                  Selected Exhibitions
                </Typography>
              </Grid>

              <Grid item xs={12}>
                <Button
                  variant="text"
                  sx={{color: "black", textTransform: 'inherit', paddingX: 0}}
                  onClick={() => {
                    window.open(
                      'https://moonoura.com/artist-spotlight',
                      "_blank"
                    )
                  }} 
                >
                  <Typography variant="h6" fontSize={14} mb={1} sx={{opacity: 0.8}}>
                    2023 | Moonoura, Artist Spotlight: Self-connection exhibit
                  </Typography>
                </Button>
              </Grid>

              <Grid item xs={12} my={1}>
                <Typography variant="h6" fontSize={15}>
                  COLLECTIONS
                </Typography>
              </Grid>

              <Grid item xs={12}>
                <Typography variant="h6" fontSize={14} my={1} sx={{opacity: 0.8}}>
                  2023 | A Digital Minimalistic And Abstract Expression printed on metal
                </Typography>
              </Grid>

               

              

              
              <Grid item xs={3} md={1} mt={1} mb={5}>
                <img width={"100%"} src={ArtLogo} alt="Logo" />
              </Grid>

              
            </Grid>
          </Container>
        </div>
      </div>
    </>
  )
}
