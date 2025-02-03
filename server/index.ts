import express from "express"
import { getLocalIPAddress } from "./util/my-pc-adr";
const app= express()


app.use(express.static("./dist"))
const port = 3000;
const MY_PC_IP = getLocalIPAddress();


app.get("/", (req, res) => {
    res.send("hello world");
  });
  
  app.listen(port, () => {
    console.log(`IP del mio PC:  http://${MY_PC_IP}:${port}`);
    console.log(`Example app listening on port ${port}`);
  });

