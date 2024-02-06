import { Button, Container, Grid, Theme, Typography } from "@mui/material"
import { makeStyles } from "@mui/styles"
import { useNavigate } from "react-router-dom"

import Navbar from "../components/Navbar"
import '../App.css'
//@ts-ignore
import Minimalism from '../assets/Minimalism.jpeg'

const useStyles = makeStyles<Theme>(() => ({
  button: {
    overflow: "hidden",
    borderRadius: 20,
    "&:hover": {
      "& img": {
        opacity: 0.3,
        transform: "scale(1.10)"
      },
      "& $middle": {
        opacity: 1
      }
    },
  },
  middle: {
    opacity: 0,
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    textAlign: "center",
  },
}))


export default function Work():JSX.Element {
  const classes = useStyles()
  const navigate = useNavigate()

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
            <Grid container mt={5} justifyContent={'center'}>
              <Grid item xs={10} md={5} mb={1}>
                <Button
                  variant="text" 
                  className={classes.button}
                  onClick={() => {
                    navigate(`/0/work/minimalism`)
                    window.scrollTo(0, 0)
                  }}
                >
                  <img src={Minimalism} alt='Minimalism' width='100%' style={{transition: "transform .2s", borderRadius: 20}}/>
                  <div className={classes.middle}>
                    <Typography variant="h5" style={{fontWeight: 700}}>
                      Minimalism
                    </Typography>
                  </div>
                </Button>
              </Grid>
            </Grid>
          </Container>
        </div>
      </div>
    </>
  )
}
