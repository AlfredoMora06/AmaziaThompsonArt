import makeStyles from "@mui/styles/makeStyles"
import MuiTextField from "@mui/material/TextField"

const useStyles = makeStyles((theme: any) => ({
  root: {
    background: "transparent",
    "& .MuiOutlinedInput-input": {
      background: "transparent",
    },
    "& .MuiFormHelperText-root": {
      position: "absolute",
      bottom: "-20px",
    }
  },
}))

export default function TextField(props: any) {
  const classes = useStyles()
  return <MuiTextField className={classes.root} variant="outlined" fullWidth={props.fullWidth ?? true} {...props} />
}
