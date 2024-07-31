// netlify/functions/proxy.js

const request = require("request");

exports.handler = async (event, context) => {
  const url =
    "https://cors-proxy.htmldriven.com/?url=www.swiggy.com/dapi/restaurants/list/v5?lat=13.0153961&lng=77.6346399&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";
  +event.path;
  return new Promise((resolve, reject) => {
    request(url, (error, response, body) => {
      if (error) {
        reject({ statusCode: 500, body: "Internal Server Error" });
      } else {
        resolve({
          statusCode: response.statusCode,
          body,
          headers: { "Content-Type": "application/json" },
        });
      }
    });
  });
};
