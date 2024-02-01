import { Container } from "@mui/material"

import Navbar from "../components/Navbar"


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
            Amazia Thompson
          </Container>
        
        </div>
      </div>
    </>
  )
}
