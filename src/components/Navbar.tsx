import * as React from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { Grid, List, ListItem, ListItemButton, ListItemText, SwipeableDrawer } from "@mui/material"
import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import Toolbar from "@mui/material/Toolbar"
import IconButton from "@mui/material/IconButton"
import MenuIcon from "@mui/icons-material/Menu"
import Container from "@mui/material/Container"
import Button from "@mui/material/Button"

//@ts-ignore
import ArtLogo from '../assets/Art_Logo.jpg'


type NavbarProps = {
  dark: boolean
}

export default function Navbar (
  { dark }: NavbarProps
): JSX.Element {
  const [drawer, setDrawer] = React.useState(false)
  const navigate = useNavigate()
  const location = useLocation()  

  const pages = [
    { title: 'Home', link: "../"},
    { title: 'Work', link: "../0/work" },
    { title: 'About', link: "../0/about" },
    { title: 'Contact', link: "../0/contact"},
  ]
  
  const pagesMobile = [
    { title: 'Home', link: "../"},
    { title: 'Work', link: "../0/work" },
    { title: 'About', link: "../0/about"},
    { title: 'Contact', link: "../0/contact"},
  ]

  const toggleDrawer = (open: boolean) =>  (event: React.KeyboardEvent | React.MouseEvent) => { 
    setDrawer(open)
  }

  const handleCloseNavMenuRedirect = (link: string) => {
    navigate(link)
    toggleDrawer(false)
  }

  const list = () => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {pagesMobile.map((page) => {
          const samePathname = location.pathname === page.link.slice(2)

          return (
            <ListItem key={page.title} disablePadding sx={{width: '100%'}}>
              <ListItemButton onClick={() => {handleCloseNavMenuRedirect(page.link)}}>
                <ListItemText primary={page.title} sx={{fontWeight: 500, color: samePathname ? '#BD402E' : 'black'}}/>
              </ListItemButton>
            </ListItem>
          )
        })}
      </List>
    </Box>
  )

  return (
    <AppBar
      position="static"
      sx={{ background: "transparent", boxShadow: "none" }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <Grid container justifyContent={'space-between'}>
              <Grid item xs={1} mt={1}>
                <img width={"100%"} src={ArtLogo} alt="Logo" />
              </Grid>
              <IconButton
                size='large'
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={toggleDrawer(true)}
                sx={{color: '#BD402E'}}
              >
                <MenuIcon />
              </IconButton>
              <SwipeableDrawer
                anchor="right"
                PaperProps={{
                  sx: { width: "50%" , overflow: "hidden",},
                }}
                open={drawer}
                onClose={toggleDrawer(false)}
                onOpen={toggleDrawer(true)}
              >
                {list()}
              </SwipeableDrawer>
            </Grid>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Grid item xs={1} m={2}>
              <img width={"25%"} src={ArtLogo} alt="Logo" />
            </Grid>
            <Grid container item xs={11} justifyContent={"flex-end"} alignContent={"center"} ml={8}>
              {pages.map((page, index) => {
                return (
                  <div key={index}>
                    <Button
                      variant="text"
                      onClick={() => navigate(page.link)}
                      sx={{
                        display: "block",
                        fontSize: 16,
                      }}
                    >
                      {page.title}
                    </Button>
                  </div>
                )
              })}
            </Grid>
          </Box>

        </Toolbar>
      </Container>
    </AppBar>
  )
}
