import { Container, Grid } from "@mui/material"

import Navbar from "../components/Navbar"
//@ts-ignore
import LogoBW from '../assets/LogoBW.jpg'
import '../App.css'



export default function Home():JSX.Element {
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
            <Grid container justifyContent={'center'}>
              <Grid item xs={5} md={4} className="fade-in-bottom">
                <img src={LogoBW} alt={'Logo'} width={'100%'} style={{borderRadius: 30}}/>
              </Grid>
            </Grid>
          </Container>
        
        </div>
      </div>
    </>
  )
}
