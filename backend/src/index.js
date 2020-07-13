require("dotenv").config(); //environment variables / variables de entorno
const app = require("./app");
require("./database");

async function main() {
    await app.listen(app.get("port"));
    console.log("server on port ", app.get("port"));
}

main();