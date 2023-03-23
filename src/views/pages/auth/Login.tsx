import React from "react";
import { Container, Card, Row, Col, Button } from "react-bootstrap";
import {
  FormControl,
  InputLabel,
  FormHelperText,
  OutlinedInput,
} from "@mui/material";

import { Formik } from "formik";
import * as Yup from "yup";

import { Link } from "react-router-dom";

import LoginCover from "../../../assets/login-cover.jpg";
const Login = () => {
  return (
    <>
      <Container style={{ marginTop: "80px" }}>
        <Card
          className="shadow rounded-0"
          style={{ marginLeft: "200px", marginRight: "200px" }}
        >
          <Row>
            <Col
              md={6}
              style={{
                backgroundImage: `url(${LoginCover})`,
                backgroundSize: "cover",
              }}
            >
              <div className="text-center" style={{ paddingTop: "150px" }}>
                <h5 className="text-primary">Al-Buraq Printing Press</h5>
                <h1 className="text-white text-uppercase">Welcome Back</h1>
                <p className="mx-5 text-white" style={{ fontSize: "12px" }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  doLorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  doLorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do
                </p>
              </div>
            </Col>
            <Col md={6} className="">
              <div className="text-center mx-5" style={{ marginTop: "100px" }}>
                <h5>Login Account</h5>

                <p className="text-muted" style={{ fontSize: "12px" }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  doLorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  doLorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do
                </p>
              </div>
              <div className="mx-5" style={{ marginTop: "50px" }}>
                <Formik
                  initialValues={{
                    email: "",
                    password: "",
                    submit: null,
                  }}
                  validationSchema={Yup.object().shape({
                    email: Yup.string().email().required("Email is required"),
                    password: Yup.string()
                      .max(255)
                      .required("Password is required"),
                  })}
                  onSubmit={async (
                    values,
                    { setErrors, setStatus, setSubmitting }
                  ) => {
                    console.log("hello", values);
                    try {

                    } catch (err) {
                      
                    }
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
                      <div className="mb-3">
                        <FormControl
                          fullWidth
                          error={Boolean(touched.email && errors.email)}
                        >
                          <InputLabel htmlFor="outlined-adornment-email-login">
                            Email
                          </InputLabel>
                          <OutlinedInput
                            id="outlined-adornment-email-login"
                            type="email"
                            value={values.email}
                            name="email"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            label="email"
                            inputProps={{}}
                          />
                          {touched.email && errors.email && (
                            <FormHelperText error>
                              {errors.email}
                            </FormHelperText>
                          )}
                        </FormControl>
                      </div>

                      <div className="mb-3">
                        <FormControl
                          fullWidth
                          error={Boolean(touched.password && errors.password)}
                        >
                          <InputLabel htmlFor="outlined-adornment-password-login">
                            Password
                          </InputLabel>
                          <OutlinedInput
                            id="outlined-adornment-password-login"
                            type="password"
                            value={values.password}
                            name="password"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            label="password"
                            inputProps={{}}
                          />
                          {touched.password && errors.password && (
                            <FormHelperText error>
                              {errors.password}
                            </FormHelperText>
                          )}
                        </FormControl>
                      </div>

                      <div className=" mb-3" style={{ fontSize: "12px" }}>
                        <span>
                          {" "}
                          <Link to="">Forgot Password?</Link>{" "}
                        </span>

                        <span
                          className="text-end"
                          style={{ marginLeft: "90px" }}
                        >
                          {" "}
                          Already a member? <Link to="/register"> Register</Link>{" "}
                        </span>
                      </div>

                      <Row className="my-5 mx-5  ">
                        <Button
                          type="submit"
                          className="text-dark text-uppercase fw-bold"
                          style={{ letterSpacing: "0.2em" }}
                        >
                          Login
                        </Button>
                      </Row>
                    </form>
                  )}
                </Formik>
              </div>
            </Col>
          </Row>
        </Card>
      </Container>
    </>
  );
};

export default Login;
