import React, { useState } from "react";
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
import RegisterCover from "../../../assets/register-cover.jpg";
import { useNavigate, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { RegisterUser } from "../../../services/api/userAuth";
const Register = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>();
  
  return (
    <>
      <Container style={{ marginTop: "40px" }}>
        <Card
          className="shadow rounded-0"
          style={{ marginLeft: "200px", marginRight: "200px" }}
        >
          <Row>
            <Col md={6} className="">
              <div className="text-center mx-5" style={{ marginTop: "100px" }}>
                <h5>Register Account</h5>

                <p className="text-muted" style={{ fontSize: "12px" }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  doLorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  doLorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do
                </p>
              </div>
              <div className="mx-5" style={{}}>
                <Formik
                  initialValues={{
                    firstName: "",
                    lastName: "",
                    email: "",
                    password: "",
                    confirmPassword: "",
                    submit: null,
                  }}
                  validationSchema={Yup.object().shape({
                    firstName: Yup.string()
                      .max(255)
                      .required("First Name is required"),
                    lastName: Yup.string()
                      .max(255)
                      .required("Last Name is required"),
                    email: Yup.string().email().required("Email is required"),
                    password: Yup.string()
                      .max(255)
                      .required("Password is required"),
                    confirmPassword: Yup.string().oneOf(
                      [Yup.ref("password"), null],
                      "Passwords must match"
                    ),
                  })}
                  onSubmit={async (
                    values,
                    { setErrors, setStatus, setSubmitting }
                  ) => {
                    console.log("hello", values);
                    console.log("something else");
                    try {
                      console.log("coming here");
                      let firstName = values.firstName;
                      let lastName = values.lastName;
                      let email = values.email;
                      let password = values.confirmPassword;
                      setEmail(email);
                      const response: any = await RegisterUser({
                        firstName,
                        lastName,
                        email,
                        password,
                      });
                      if (response.data.success) {
                        navigate("/verifyotp", { state: { email } });
                      }
                    } catch (err) {
                      console.log(err);
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
                      <Row className="mb-3">
                        <Col>
                          <FormControl
                            error={Boolean(
                              touched.firstName && errors.firstName
                            )}
                          >
                            <InputLabel htmlFor="outlined-adornment-firstName-Register">
                              First Name
                            </InputLabel>
                            <OutlinedInput
                              id="outlined-adornment-firstName-Register"
                              type="text"
                              value={values.firstName}
                              name="firstName"
                              onBlur={handleBlur}
                              onChange={handleChange}
                              label="firstName"
                              inputProps={{}}
                            />
                            {touched.firstName && errors.firstName && (
                              <FormHelperText error>
                                {errors.firstName}
                              </FormHelperText>
                            )}
                          </FormControl>
                        </Col>

                        <Col>
                          <FormControl
                            error={Boolean(touched.lastName && errors.lastName)}
                          >
                            <InputLabel htmlFor="outlined-adornment-lastName-Register">
                              Last Name
                            </InputLabel>
                            <OutlinedInput
                              id="outlined-adornment-lastName-Register"
                              type="text"
                              value={values.lastName}
                              name="lastName"
                              onBlur={handleBlur}
                              onChange={handleChange}
                              label="lastName"
                              inputProps={{}}
                            />
                            {touched.lastName && errors.lastName && (
                              <FormHelperText error>
                                {errors.lastName}
                              </FormHelperText>
                            )}
                          </FormControl>
                        </Col>
                      </Row>

                      <div className="mb-3">
                        <FormControl
                          fullWidth
                          error={Boolean(touched.email && errors.email)}
                        >
                          <InputLabel htmlFor="outlined-adornment-email-Register">
                            Email
                          </InputLabel>
                          <OutlinedInput
                            id="outlined-adornment-email-Register"
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
                          <InputLabel htmlFor="outlined-adornment-password-Register">
                            Password
                          </InputLabel>
                          <OutlinedInput
                            id="outlined-adornment-password-Register"
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

                      <div className="mb-3">
                        <FormControl
                          fullWidth
                          error={Boolean(
                            touched.confirmPassword && errors.confirmPassword
                          )}
                        >
                          <InputLabel htmlFor="outlined-adornment-confirmPassword-Register">
                            Confirm Password
                          </InputLabel>
                          <OutlinedInput
                            id="outlined-adornment-confirmPassword-Register"
                            type="password"
                            value={values.confirmPassword}
                            name="confirmPassword"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            label="confirmPassword"
                            inputProps={{}}
                          />
                          {touched.confirmPassword &&
                            errors.confirmPassword && (
                              <FormHelperText error>
                                {errors.confirmPassword}
                              </FormHelperText>
                            )}
                        </FormControl>
                      </div>

                      <div
                        className="text-end mb-3"
                        style={{ fontSize: "12px" }}
                      >
                        Already registered? <Link to="/login">Login</Link>
                      </div>

                      <Row className="my-5 mx-5  ">
                        <Button
                          type="submit"
                          className="text-dark text-uppercase fw-bold"
                          style={{ letterSpacing: "0.2em" }}
                        >
                          Register
                        </Button>
                      </Row>
                    </form>
                  )}
                </Formik>
              </div>
            </Col>
            <Col
              md={6}
              style={{
                backgroundImage: `url(${RegisterCover})`,
                backgroundSize: "cover",
              }}
            >
              <div className="text-center" style={{ paddingTop: "150px" }}>
                {/* <h5 className="text-primary">Al-Buraq Printing Press</h5> */}
                <h2 className="text-white text-uppercase">
                  Welcome to{" "}
                  <span className="text-primary">al-buraq printing press</span>
                </h2>
                <p className="mx-5 text-white" style={{ fontSize: "12px" }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  doLorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  doLorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do
                </p>
              </div>
            </Col>
          </Row>
        </Card>
      </Container>
    </>
  );
};

export default Register;
