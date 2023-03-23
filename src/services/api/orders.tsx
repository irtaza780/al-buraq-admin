import { resolve } from "path";
import { dataServer } from "./axios.config";

export const getOrders = () => {
  return new Promise((resolve, reject) => {
    dataServer
      .get("/admin/get/orders", {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      })
      .then((res) => resolve(res))
      .catch((err) => reject(err));
  });
};

export const downloadOrdersFile = (fileName: string) => {
  return new Promise((resolve, reject) => {
    dataServer
      .get(`admin/download/orderfile/${fileName}`, {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      })
      .then((res) => resolve(res))
      .catch((err) => reject(err));
  });
};
