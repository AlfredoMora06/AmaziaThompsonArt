import { Container, Grid, Typography } from "@mui/material"

import Navbar from "../components/Navbar"
import '../App.css'


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
            <Grid container mt={5}>
              <Grid item xs={12} mb={1}>
                <Typography variant="h6" align="center">
                  Amazia Thompson is a digital artist based in New York, NY, known for his captivating minimalist and abstract expressionism printed on metal. With a keen eye for sleek design and a passion for pushing boundaries, Amazia's work stands at the intersection of modernity and artistic innovation.
                </Typography>
                <br/>
                <Typography variant="h6" align="center">
                  Originally hailing from Kentucky, Amazia's artistic journey has taken him through various landscapes of digital artistry, honing his craft to perfection. Drawing inspiration from the purity of minimalism and the boundless freedom of abstract expressionism, his pieces evoke a sense of wonder and introspection.
                </Typography>
                <br/>
                <Typography variant="h6" align="center">
                  Amazia's unique style is characterized by clean lines, subtle textures, and a masterful play of negative space, creating compositions that speak volumes with their simplicity. Each piece tells a story, inviting viewers to interpret and immerse themselves in its depths.
                </Typography>
                <br/>
                <Typography variant="h6" align="center">
                  While Amazia's medium may be digital, his art is deeply rooted in personal experiences, emotions, and the essence of the human condition. Through his work, he aims to provoke thought, evoke emotion, and inspire curiosity, leaving a lasting impact on those who encounter it.
                </Typography>
                <br/>
                <Typography variant="h6" align="center">
                  With an ever-growing portfolio and a dedication to pushing the boundaries of digital art, Amazia is poised to leave an indelible mark on the world of contemporary art.
                </Typography>
              </Grid>
            </Grid>
          </Container>
        </div>
      </div>
    </>
  )
}
