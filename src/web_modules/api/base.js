require("es6-promise").polyfill();
import config from "../config";
import axios from "axios";

export default (url, data) => {
  console.log("$Purl", url);
  return axios({
    method: "post",
    url: `http://47.92.123.27:8081${url}`
    // url
  })
    .then(res => {
      if (res.data.code === 10000) {
        return res.data;
      }
    })
    .catch(err => {
      console.log("$err", err);
      throw err;
    });
};

// export const baseReq = axios;
