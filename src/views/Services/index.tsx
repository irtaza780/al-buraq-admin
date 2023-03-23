import React, { useState, useEffect } from "react";
import Magazine from "../../ui-components/Magazine";
import { Container, Row, Col } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MUIDataTable from "mui-datatables";
import DeleteIcon from "@mui/icons-material/DeleteOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import {
  getService,
  updateService,
  createService,
  deleteService,
} from "../../services/api/services";
import { Button, Modal } from "react-bootstrap";
import { Formik } from "formik";
import * as Yup from "yup";
import {
  FormControl,
  InputLabel,
  FormHelperText,
  OutlinedInput,
} from "@mui/material";

import { Link } from "react-router-dom";

const createdSuccess = () => toast.success("Service Added Successfully");

const Services = () => {
  const [servicesData, setServicesData] = useState<any>();

  const [fieldsData, setFieldsData] = React.useState({
    id: 0,
    serviceName: "",
    serviceDescription: "",
    price: "",
    pricingType: "",
  });

  const fetchServices = async () => {
    try {
      const response: any = await getService();
      console.log("response is ", response);
      if (response.data.success === true) {
        setServicesData(response.data.data);
      }
    } catch (err) {
      console.log(err);
    }
  };
  const [selectedRow, setSelectedRow] = useState<number>();

  const handleDeleteService = async () => {
    console.log("Service Deleted");
    try {
      const response: any = await deleteService(fieldsData.id);
      if (response.data.success) {
        fetchServices();
        setDeleteModalShow(false);
      } else {
        console.log(response);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchServices();
  }, []);

  const columns = [
    {
      name: "id",
      label: "ID",
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: "serviceName",
      label: "Service Name",
      options: {
        filter: false,
        sort: true,
      },
    },
    {
      name: "serviceDescription",
      label: "Service Description",
      options: {
        filter: false,
        sort: true,
      },
    },
    {
      name: "price",
      label: "Price",
      options: {
        filter: false,
        sort: false,
        customBodyRender: (value, tableMeta, updateValue) => {
          return <div>Rs. {value}</div>;
        },
      },
    },
    {
      name: "pricingType",
      label: "Pricing Type",
      options: {
        filter: false,
        sort: false,
      },
    },
    {
      name: "actions",
      label: "Edit/Delete",
      options: {
        filter: false,
        sort: false,
        empty: true,
        customBodyRender: (value, tableMeta, updateValue) => {
          return (
            <>
              <div className="d-flex justify-content-start m-auto">
                <Button
                  variant="outlined"
                  color="error"
                  onClick={async () => {
                    setUpdateModalShow(true);
                    console.log(tableMeta);
                    setFieldsData({
                      id: tableMeta.rowData[0],
                      serviceName: tableMeta.rowData[1],
                      serviceDescription: tableMeta.rowData[2],
                      price: tableMeta.rowData[3],
                      pricingType: tableMeta.rowData[4],
                    });
                  }}
                >
                  <EditOutlinedIcon sx={{ color: "green" }} />
                </Button>
                <Button
                  variant="outlined"
                  color="error"
                  onClick={() => {
                    console.log("here");
                    setDeleteModalShow(true);
                    setFieldsData({
                      id: tableMeta.rowData[0],
                      serviceName: tableMeta.rowData[1],
                      serviceDescription: tableMeta.rowData[2],
                      price: tableMeta.rowData[3],
                      pricingType: tableMeta.rowData[4],
                    });
                  }}
                >
                  <DeleteIcon sx={{ color: "#d14244" }} />
                </Button>
              </div>
            </>
          );
        },
      },
    },
  ];
  function UpdateServiceModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body>
          <h2>Update Service</h2>
          <Formik
            initialValues={{
              serviceName: fieldsData.serviceName,
              serviceDescription: fieldsData.serviceDescription,
              price: fieldsData.price,
              pricingType: fieldsData.pricingType,
              submit: null,
            }}
            validationSchema={Yup.object().shape({
              serviceName: Yup.string().required("Service Name is required"),
              serviceDescription: Yup.string().required(
                "Service Description is required"
              ),
              price: Yup.number().required("Price is required"),
              pricingType: Yup.string().required("Pricing Type is required"),
            })}
            onSubmit={async (
              values,
              { setErrors, setStatus, setSubmitting }
            ) => {
              console.log("hello", values);
              try {
                const response: any = await updateService(
                  fieldsData.id,
                  values.serviceName,
                  values.serviceDescription,
                  values.price,
                  values.pricingType
                );
                console.log("response is ", response);
                if (response.data.success) {
                  fetchServices();
                  setUpdateModalShow(false);
                } else {
                  console.log(response);
                }
              } catch (err) {
                console.log("err", err);
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
                    error={Boolean(touched.serviceName && errors.serviceName)}
                  >
                    <InputLabel htmlFor="outlined-adornment-email-login">
                      Service Name
                    </InputLabel>
                    <OutlinedInput
                      id="outlined-adornment-email-login"
                      type="text"
                      value={values.serviceName}
                      name="serviceName"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      label="serviceName"
                      inputProps={{}}
                    />
                    {touched.serviceName && errors.serviceName && (
                      <FormHelperText error>
                        {errors.serviceName}
                      </FormHelperText>
                    )}
                  </FormControl>
                </div>

                <div className="mb-3">
                  <FormControl
                    fullWidth
                    error={Boolean(
                      touched.serviceDescription && errors.serviceDescription
                    )}
                  >
                    <InputLabel htmlFor="outlined-adornment-serviceDescription-login">
                      Service Description
                    </InputLabel>
                    <OutlinedInput
                      id="outlined-adornment-serviceDescription-login"
                      type="serviceDescription"
                      value={values.serviceDescription}
                      name="serviceDescription"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      label="serviceDescription"
                      inputProps={{}}
                    />
                    {touched.serviceDescription &&
                      errors.serviceDescription && (
                        <FormHelperText error>
                          {errors.serviceDescription}
                        </FormHelperText>
                      )}
                  </FormControl>
                </div>

                <div className="mb-3">
                  <FormControl
                    fullWidth
                    error={Boolean(touched.price && errors.price)}
                  >
                    <InputLabel htmlFor="outlined-adornment-price-login">
                      Price
                    </InputLabel>
                    <OutlinedInput
                      id="outlined-adornment-price-login"
                      type="price"
                      value={values.price}
                      name="price"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      label="price"
                      inputProps={{}}
                    />
                    {touched.price && errors.price && (
                      <FormHelperText error>{errors.price}</FormHelperText>
                    )}
                  </FormControl>
                </div>

                <div className="mb-3">
                  <FormControl
                    fullWidth
                    error={Boolean(touched.pricingType && errors.pricingType)}
                  >
                    <InputLabel htmlFor="outlined-adornment-pricingType-login">
                      Pricing Type
                    </InputLabel>
                    <OutlinedInput
                      id="outlined-adornment-pricingType-login"
                      type="pricingType"
                      value={values.pricingType}
                      name="pricingType"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      label="pricingType"
                      inputProps={{}}
                    />
                    {touched.pricingType && errors.pricingType && (
                      <FormHelperText error>
                        {errors.pricingType}
                      </FormHelperText>
                    )}
                  </FormControl>
                </div>

                <Row className="my-5 mx-5  ">
                  <Button
                    type="submit"
                    className="text-dark text-uppercase fw-bold"
                    style={{ letterSpacing: "0.2em" }}
                  >
                    Update Service
                  </Button>
                </Row>
              </form>
            )}
          </Formik>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }

  function DeleteServiceModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body>
          <h2>Are you sure you want to delete this service?</h2>
          <Modal.Footer>
            <div className="d-flex justify-content-end">
              <Button
                variant="dark mx-2"
                onClick={() => setDeleteModalShow(false)}
              >
                Disagree
              </Button>
              <Button variant="primary" onClick={() => handleDeleteService()}>
                Agree
              </Button>
            </div>
          </Modal.Footer>
        </Modal.Body>
      </Modal>
    );
  }

  function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body>
          <h2>Create Service</h2>
          <Formik
            initialValues={{
              serviceName: "",
              serviceDescription: "",
              price: "",
              pricingType: "",
              submit: null,
            }}
            validationSchema={Yup.object().shape({
              serviceName: Yup.string().required("Service Name is required"),
              serviceDescription: Yup.string().required(
                "Service Description is required"
              ),
              price: Yup.number().required("Price is required"),
              pricingType: Yup.string().required("Pricing Type is required"),
            })}
            onSubmit={async (
              values,
              { setErrors, setStatus, setSubmitting }
            ) => {
              console.log("hello", values);
              try {
                const response: any = await createService(
                  values.serviceName,
                  values.serviceDescription,
                  values.price,
                  values.pricingType
                );
                console.log("response is ", response);
                if (response.data.success) {
                  fetchServices();
                  props.onHide();
                } else {
                  console.log(response);
                }
              } catch (err) {
                console.log("err", err);
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
                    error={Boolean(touched.serviceName && errors.serviceName)}
                  >
                    <InputLabel htmlFor="outlined-adornment-email-login">
                      Service Name
                    </InputLabel>
                    <OutlinedInput
                      id="outlined-adornment-email-login"
                      type="text"
                      value={values.serviceName}
                      name="serviceName"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      label="serviceName"
                      inputProps={{}}
                    />
                    {touched.serviceName && errors.serviceName && (
                      <FormHelperText error>
                        {errors.serviceName}
                      </FormHelperText>
                    )}
                  </FormControl>
                </div>

                <div className="mb-3">
                  <FormControl
                    fullWidth
                    error={Boolean(
                      touched.serviceDescription && errors.serviceDescription
                    )}
                  >
                    <InputLabel htmlFor="outlined-adornment-serviceDescription-login">
                      Service Description
                    </InputLabel>
                    <OutlinedInput
                      id="outlined-adornment-serviceDescription-login"
                      type="serviceDescription"
                      value={values.serviceDescription}
                      name="serviceDescription"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      label="serviceDescription"
                      inputProps={{}}
                    />
                    {touched.serviceDescription &&
                      errors.serviceDescription && (
                        <FormHelperText error>
                          {errors.serviceDescription}
                        </FormHelperText>
                      )}
                  </FormControl>
                </div>

                <div className="mb-3">
                  <FormControl
                    fullWidth
                    error={Boolean(touched.price && errors.price)}
                  >
                    <InputLabel htmlFor="outlined-adornment-price-login">
                      Price
                    </InputLabel>
                    <OutlinedInput
                      id="outlined-adornment-price-login"
                      type="price"
                      value={values.price}
                      name="price"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      label="price"
                      inputProps={{}}
                    />
                    {touched.price && errors.price && (
                      <FormHelperText error>{errors.price}</FormHelperText>
                    )}
                  </FormControl>
                </div>

                <div className="mb-3">
                  <FormControl
                    fullWidth
                    error={Boolean(touched.pricingType && errors.pricingType)}
                  >
                    <InputLabel htmlFor="outlined-adornment-pricingType-login">
                      Pricing Type
                    </InputLabel>
                    <OutlinedInput
                      id="outlined-adornment-pricingType-login"
                      type="pricingType"
                      value={values.pricingType}
                      name="pricingType"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      label="pricingType"
                      inputProps={{}}
                    />
                    {touched.pricingType && errors.pricingType && (
                      <FormHelperText error>
                        {errors.pricingType}
                      </FormHelperText>
                    )}
                  </FormControl>
                </div>

                <Row className="my-5 mx-5  ">
                  <Button
                    type="submit"
                    className="text-dark text-uppercase fw-bold"
                    style={{ letterSpacing: "0.2em" }}
                  >
                    Create Service
                  </Button>
                </Row>
              </form>
            )}
          </Formik>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
  const [modalShow, setModalShow] = useState<boolean>(false);
  const [updateModalShow, setUpdateModalShow] = useState<boolean>(false);
  const [deleteModalShow, setDeleteModalShow] = useState<boolean>(false);

  return (
    <>
      <Container style={{ marginTop: "100px", marginBottom: "50px" }}>
        <ToastContainer />
        <Button
          variant="primary"
          className="mb-5"
          onClick={() => setModalShow(true)}
        >
          Add New Service
        </Button>
        <MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
        <UpdateServiceModal
          show={updateModalShow}
          onHide={() => setUpdateModalShow(false)}
        />
        <DeleteServiceModal
          show={deleteModalShow}
          onHide={() => setDeleteModalShow(false)}
        />

        <MUIDataTable data={servicesData} columns={columns} />
      </Container>
    </>
  );
};

export default Services;
