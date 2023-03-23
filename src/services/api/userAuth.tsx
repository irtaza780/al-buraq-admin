import { resolve } from "path";
import { dataServer } from "./axios.config";

interface User {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}
export const RegisterUser = (user: User) => {
  let firstName = user.firstName;
  let lastName = user.lastName;
  let email = user.email;
  let password = user.password;
  let image = null;

  var data = { firstName, lastName, email, password, image };

  return new Promise((resolve, reject) => {
    dataServer
      .post("/user/email/register", data, {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      })
      .then((res) => resolve(res))
      .catch((err) => reject(err));
  });
};

export const verifyOtp = (code, email) => {
  let data = { code, email };
  return new Promise((resolve, reject) => {
    dataServer
      .post("/user/verify/code", data, {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      })
      .then((res) => resolve(res))
      .catch((err) => reject(err));
  });
};

export const login = (email, password) => {
  let data = { email, password };
  return new Promise((resolve, reject) => {
    dataServer
      .post("/user/login", data, {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      })
      .then((res) => resolve(res))
      .catch((err) => reject(err));
  });
};
