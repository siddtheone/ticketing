import axios from "axios";

const buildClient = ({ req }) => {
  if (typeof window === "undefined") {
    return axios.create({
      baseURL: "http://cheapest-ticketing.site",
      headers: req.headers,
    });
  }
  return axios.create({
    baseURL: "/",
  });
};

export default buildClient;
