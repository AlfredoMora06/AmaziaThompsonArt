import { Button, Container, Grid } from "@mui/material"
import { Formik, Form } from "formik"
import * as Yup from "yup"

import TextField from "../Fields/TextField"
import TextArea from "../Fields/TextArea"


export default function ContactUsForm():JSX.Element {
  
  return (
    <Container>
      <Grid container>
        <Grid item xs={12}>
          <Formik
            initialValues={{
              name: "",
              email: "",
              message: "",
            }}
            validationSchema={Yup.object().shape({
              name: Yup.string().required('Name is required'),
              email: Yup.string().required('Email is required'),
              message: Yup.string().required('Message is required'),
            })}
            validateOnMount={true}
            onSubmit={async (values, { setSubmitting, resetForm }) => {
              setSubmitting(true)

              setSubmitting(false)
              resetForm()
            }}
          >
            {({
              errors,
              handleBlur,
              handleChange,
              touched,
              values
            }) => {
              return (
                <Form>
                  <Grid container spacing={3} pt={5} justifyContent={"center"}>
                    <Grid item xs={11} md={10}>
                      <TextField
                        label={'Name'}
                        error={Boolean(touched.name && errors.name)}
                        helperText={touched.name && errors.name}
                        name="name"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.name}
                      />
                    </Grid>
                    <Grid item xs={11} md={10}>
                      <TextField
                        label={'Email'}
                        error={Boolean(touched.email && errors.email)}
                        helperText={touched.email && errors.email}
                        name="email"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.email}
                      />
                    </Grid>
                    <Grid item xs={11} md={10}>
                      <TextArea
                        label={'Message'}
                        error={Boolean(touched.message && errors.message)}
                        helperText={touched.message && errors.message}
                        name="message"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.message}
                      />
                    </Grid>
                    <Grid item xs={11} md={10} container justifyContent={'center'} >
                      <Button
                        type="submit"
                        variant='outlined'
                        sx={{
                          fontSize: 15,
                          fontWeight: 700,
                          borderRadius: 3,
                          paddingX: 8
                        }}
                      >
                        Send Message
                      </Button>
                    </Grid>

                  </Grid>
                </Form>
              )
            }}
          </Formik>
        </Grid>
      </Grid>
    </Container>
  )
}
