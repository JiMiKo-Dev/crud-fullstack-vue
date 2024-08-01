const app = require("./app");
const db = require("./models");

const port = process.env.API_PORT || 3300;

db.sequelize
  .sync()
  .then(() => {
    console.log(`Database connected successfully`);
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });
