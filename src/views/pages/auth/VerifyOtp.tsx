import React from "react";
import { Container, Button, Row, Col, Card } from "react-bootstrap";
import {
  FormControl,
  InputLabel,
  OutlinedInput,
  FormHelperText,
} from "@mui/material";
import { Formik } from "formik";
import * as Yup from "yup";
import { useLocation, useNavigate } from "react-router-dom";
import { verifyOtp } from "../../../services/api/userAuth";

import { Link } from "react-router-dom";

const VerifyOtp: React.FC = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  return (
    <>
      <Row className="d-flex justify-content-center align-items-center vh-100 mx-0">
        <Col md={4}>
          <Card className="shadow text-center">
            <Card.Body>
              <h1 className="text-uppercase">Verify OTP</h1>
              <p>Check Your email for OTP </p>
              <Row>
                <Col>
                  <Formik
                    initialValues={{
                      code: "",
                      submit: null,
                    }}
                    validationSchema={Yup.object().shape({
                      code: Yup.string()
                        .max(4)
                        .required("Please Enter Your OTP"),
                    })}
                    onSubmit={async (
                      values,
                      { setErrors, setStatus, setSubmitting }
                    ) => {
                      console.log("hello", values);
                      try {
                        let code = values.code;
                        let email = state.email;
                        const response: any = await verifyOtp(code, email);
                        if (response.data.success) {
                          navigate("/login");
                        } else {
                          console.log("response is ", response);
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
                        <Row className="my-3">
                          <Col>
                            <FormControl
                              error={Boolean(touched.code && errors.code)}
                            >
                              <InputLabel htmlFor="outlined-adornment-code-Register">
                                OTP
                              </InputLabel>
                              <OutlinedInput
                                id="outlined-adornment-code-Register"
                                type="text"
                                value={values.code}
                                name="code"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                label="code"
                                inputProps={{}}
                              />
                              {touched.code && errors.code && (
                                <FormHelperText error>
                                  {errors.code}
                                </FormHelperText>
                              )}
                            </FormControl>
                          </Col>
                        </Row>

                        <Row className="mx-5">
                          <Col>
                            <Button
                              type="submit"
                              className="text-dark text-uppercase fw-bold"
                              style={{ letterSpacing: "0.2em" }}
                            >
                              Verify
                            </Button>
                          </Col>
                        </Row>
                      </form>
                    )}
                  </Formik>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default VerifyOtp;
