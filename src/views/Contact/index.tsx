import React from "react";

import * as Yup from "yup";
import { Formik } from "formik";
import { Row, Col, Container } from "react-bootstrap";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import SmartphoneOutlinedIcon from "@mui/icons-material/SmartphoneOutlined";

import {
  Box,
  FormControl,
  FormHelperText,
  InputLabel,
  OutlinedInput,
} from "@mui/material";

import { Button } from "react-bootstrap";
const Contact = () => {
  return (
    <>
      <Container className="mb-5">
        <Row style={{ paddingTop: "58px" }}>
          <span className="fw-bold text-muted text-uppercase">Contact</span>
          <h1 className="fw-bold">Contact Us</h1>
        </Row>

        <Row>
          <iframe
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3321.855683779449!2d73.06049841513583!3d33.63498374705055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38df951fe400e221%3A0x7a8552520802df52!2sSaidpur%20Rd%2C%20Block%20E%20Satellite%20Town%2C%20Rawalpindi%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1669411933090!5m2!1sen!2s"
            width="450"
            height="300"
          ></iframe>
        </Row>

        <Row className="pt-5">
          <Col md={5}>
            <Row className="mb-2">
              <Col sm={1} className="mt-3 me-3">
                <span className="bg-primary " style={{ padding: "11px" }}>
                  <LocationOnOutlinedIcon />
                </span>
              </Col>
              <Col>
                <h3>Location</h3>
                <p className="fw-bold text-muted">
                  Saidpur Rd. Block D Satellite Town, Rawalpindi, Punjab,
                  Pakistan
                </p>
              </Col>
            </Row>
            <Row className="mb-2">
              <Col sm={1} className="mt-3 me-3">
                <span className="bg-primary " style={{ padding: "11px" }}>
                  <EmailOutlinedIcon />
                </span>
              </Col>
              <Col>
                <h3>Email</h3>
                <p className="fw-bold text-muted">
                  <a href="http://google.com/" className="text-muted">
                    alburhanprinting@gmail.com
                  </a>
                </p>
              </Col>
            </Row>

            <Row className="mb-2">
              <Col sm={1} className="mt-3 me-3">
                <span className="bg-primary " style={{ padding: "11px" }}>
                  <SmartphoneOutlinedIcon />
                </span>
              </Col>
              <Col>
                <h3>Call</h3>
                <p className="fw-bold text-muted">+92-301-12345678</p>
              </Col>
            </Row>
          </Col>

          <Col>
            <Formik
              initialValues={{
                name: "",
                email: "",
                subject: "",
                message: "",
                submit: null,
              }}
              validationSchema={Yup.object().shape({
                name: Yup.string().max(255).required("Name is required"),
                email: Yup.string().email().required(),
                subject: Yup.string().max(500).required("Subject is required"),
                message: Yup.string().required("Message is required"),
              })}
              onSubmit={async (
                values,
                { setErrors, setStatus, setSubmitting }
              ) => {
                console.log("hello", values);
              }}
            >
              {({
                errors,
                handleBlur,
                handleChange,
                handleSubmit,
                setFieldValue,
                isSubmitting,
                touched,
                values,
              }) => (
                <form noValidate onSubmit={handleSubmit}>
                  <Row className="pb-2">
                    <Col>
                      {/* Name */}

                      <FormControl
                        fullWidth
                        error={Boolean(touched.name && errors.name)}
                      >
                        <InputLabel htmlFor="outlined-adornment-email-login">
                          Name
                        </InputLabel>
                        <OutlinedInput
                          id="outlined-adornment-email-login"
                          type="text"
                          value={values.name}
                          name="name"
                          onBlur={handleBlur}
                          onChange={handleChange}
                          label="name"
                          inputProps={{}}
                        />
                        {touched.name && errors.name && (
                          <FormHelperText error>{errors.name}</FormHelperText>
                        )}
                      </FormControl>
                    </Col>

                    <Col>
                      {/* Email */}
                      <FormControl
                        fullWidth
                        error={Boolean(touched.email && errors.email)}
                      >
                        <InputLabel>Email</InputLabel>
                        <OutlinedInput
                          type="email"
                          value={values.email}
                          name="email"
                          onBlur={handleBlur}
                          onChange={handleChange}
                          label="price"
                          inputProps={{}}
                        />
                        {touched.email && errors.email && (
                          <FormHelperText
                            error
                            id="standard-weight-helper-text-email-login"
                          >
                            {errors.email}
                          </FormHelperText>
                        )}
                      </FormControl>
                    </Col>
                  </Row>

                  {/* Subject */}
                  <Row className="pb-2">
                    <Col>
                      <FormControl
                        fullWidth
                        error={Boolean(touched.subject && errors.subject)}
                      >
                        <InputLabel htmlFor="outlined-adornment-email-login">
                          Subject
                        </InputLabel>
                        <OutlinedInput
                          id="outlined-adornment-email-login"
                          type="text"
                          value={values.subject}
                          name="subject"
                          onBlur={handleBlur}
                          onChange={handleChange}
                          label="subject"
                          inputProps={{}}
                        />
                        {touched.subject && errors.subject && (
                          <FormHelperText error>
                            {errors.subject}
                          </FormHelperText>
                        )}
                      </FormControl>
                    </Col>
                  </Row>
                  {/* Message */}

                  <Row className="pb-2">
                    <Col>
                      <FormControl
                        fullWidth
                        error={Boolean(touched.message && errors.message)}
                      >
                        <InputLabel htmlFor="outlined-adornment-email-login">
                          Message
                        </InputLabel>
                        <OutlinedInput
                          multiline
                          minRows={3}
                          maxRows={4}
                          id="outlined-adornment-email-login"
                          type="text"
                          value={values.message}
                          name="message"
                          onBlur={handleBlur}
                          onChange={handleChange}
                          label="Message"
                          inputProps={{}}
                        />
                        {touched.message && errors.message && (
                          <FormHelperText error>
                            {errors.message}
                          </FormHelperText>
                        )}
                      </FormControl>
                    </Col>
                  </Row>

                  {errors.submit && (
                    <Box sx={{ mt: 3 }}>
                      <FormHelperText error>{errors.submit}</FormHelperText>
                    </Box>
                  )}
                  <div className="text-end">
                    <Button type="submit">Submit</Button>
                  </div>
                </form>
              )}
            </Formik>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Contact;
