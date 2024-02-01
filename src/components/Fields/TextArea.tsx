import React from "react"
import TextField from "./TextField"

export default function TextArea({ rows, initialValue, ...props }: any) {
  const [value, setValue] = React.useState(initialValue)
  return (
    <TextField
      multiline
      maxRows={10}
      minRows={rows || 3}
      onChange={(event: any) => setValue(event.target.value)}
      value={value}
      {...props}
    />
  )
}
