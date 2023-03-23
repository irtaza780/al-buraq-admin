import { resolve } from "path";
import { dataServer } from "./axios.config";

export const createService = (
  serviceName,
  serviceDescription,
  price,
  pricingType
) => {
  const data = { serviceName, serviceDescription, price, pricingType };

  return new Promise((resolve, reject) => {
    dataServer
      .post("/admin/create/service", data, {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      })
      .then((res) => resolve(res))
      .catch((err) => reject(err));
  });
};

export const getService = () => {
  return new Promise((resolve, reject) => {
    dataServer
      .get("/admin/get/service/all", {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      })
      .then((res) => resolve(res))
      .catch((err) => reject(err));
  });
};

export const updateService = (
  id,
  serviceName,
  serviceDescription,
  price,
  pricingType
) => {
  const data = { id, serviceName, serviceDescription, price, pricingType };

  return new Promise((resolve, reject) => {
    dataServer
      .patch(`/admin/update/service/${id}`, data, {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      })
      .then((res) => resolve(res))
      .catch((err) => reject(err));
  });
};

export const deleteService = (id: number) => {
  return new Promise((resolve, reject) => {
    dataServer
      .delete(`/admin/delete/service/${id}`, {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      })
      .then((res) => resolve(res))
      .catch((err) => reject(err));
  });
};
