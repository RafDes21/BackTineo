import  express from "express";
import  "./routes.js"
import router from "./routes.js";

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use("/static", express.static("public"));

app.use("/api",router)

app.listen(8080, () => {
    console.log("servidor escuchado");
  });




