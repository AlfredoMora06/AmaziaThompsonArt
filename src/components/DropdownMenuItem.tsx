import { Button, Menu, MenuItem, useTheme } from "@mui/material"
import { useCallback, useRef } from "react"
import { useNavigate } from "react-router-dom"


export type TMenuItem = {
  title: string
  pathname: string
  subMenus?: TMenuItem[]
};

export default function DropdownMenuItem({
  menuItem,
  menuShowingDropdown,
  setMenuShowingDropdown,
  samePathname
}: {
  menuItem: TMenuItem;
  menuShowingDropdown: string;
  setMenuShowingDropdown: (menuTitle: string) => void;
  samePathname: boolean;
}): JSX.Element {
  const navigate = useNavigate()
  const { title, subMenus } = menuItem
  const buttonRef = useRef<null | HTMLButtonElement>(null);

  const showSubMenu = useCallback(() => {
    setMenuShowingDropdown(menuItem.title);
  }, [menuItem.title, setMenuShowingDropdown]);

  const closeSubMenu = useCallback(() => {
    setMenuShowingDropdown("");
  }, [setMenuShowingDropdown]);

  const subMenusNodes = subMenus?.map((subMenuItem) => {
    return (
      <MenuItem
        sx={{
          background: 'transparent',
          '&.MuiMenuItem-root': {
            justifyContent: 'center',
            fontWeight: 700,
          },
          "&:hover": {
            color: "#BD402E",
            background: "transparent"
          }
        }}
        onClick={() => {
          navigate(subMenuItem.pathname)
        }}
        key={subMenuItem.title}
      >
        {subMenuItem.title}
      </MenuItem>
    )
  })

  const theme = useTheme()

  return (
    <>
      <Button
        id={`menuItem-${title}`}
        variant="text"
        // higher zIndex to make button show submenu when move mouse from another submenu
        sx={{
          zIndex: theme.zIndex.modal + 1,
          display: "block",
          fontSize: 16,
        }}
        ref={buttonRef}
        onClick={() => {
          navigate(menuItem.pathname)
        }}
        onMouseLeave={() => {
          setMenuShowingDropdown("")
        }}
        onMouseEnter={() => {
          if (menuItem.subMenus) {
            showSubMenu()
            return;
          }
        }}
      >
        {title}
      </Button>
      <Menu
        sx={{
          "& .MuiList-root": {
            background: "transparent"
          }
        }}
        PaperProps={{
          onMouseEnter: () => {
            showSubMenu()
          },
          onMouseLeave: () => {
            closeSubMenu()
          }
        }}
        anchorEl={buttonRef.current}
        open={menuShowingDropdown === menuItem.title}
        onClose={closeSubMenu}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        {subMenusNodes}
      </Menu>
    </>
  );
};