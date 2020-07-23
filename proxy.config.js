const apiServer = process.env.VUE_APP_API_SERVER;

module.exports = {
  "/context": {
    target: apiServer
  }
};
