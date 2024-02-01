import * as React from "react"
import { Link, useLocation, useNavigate } from "react-router-dom"
import { Grid, List, ListItem, ListItemButton, ListItemText, SwipeableDrawer } from "@mui/material"
import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import Toolbar from "@mui/material/Toolbar"
import IconButton from "@mui/material/IconButton"
import MenuIcon from "@mui/icons-material/Menu"
import Container from "@mui/material/Container"
import Button from "@mui/material/Button"


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
    { title: 'About', link: "../0/about" },
    { title: 'Projects', link: "../0/projects" },
    { title: 'Photography', link: "../0/photography"},
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
          <Box display={{xs: "none", md: "flex"}}>
            <Link
              to={'/'}
              style={{ 
                marginRight: 2,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                textDecoration: "none",
                fontSize: 20
               }}
              onClick={() => {window.scrollTo(0, 0)}}
            >
              Alfredo Morales
            </Link>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <Grid container justifyContent={"flex-end"}>
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
          <Box sx={{ flexGrow: 2, display: { xs: "none", md: "flex" } }}>
            {pages.map((page, index) => {
              return (
                <div 
                  key={index} 
                  style={{ 
                    marginBottom: 2, 
                    marginTop: 2 
                  }}
                >
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
          </Box>

        </Toolbar>
      </Container>
    </AppBar>
  )
}
