import  express  from "express";
import { Router } from "express";
import contenedor from "./productos.js";
import fs from "fs";

const router = Router()

router.route("/productos")
      .get((req, res)=>
         contenedor.getAll().then((data) => {
         res.send(data);
       }))
      .post((req, res)=>{
         contenedor.save(req.body)
        res.sendStatus(201)
      })


router.route("/productos/:id")
      .get((req, res) => {
        contenedor.getById(req.params.id).then((data) => {
        res.send(data)})
      })
      .put((req, res)=>{
        let id = req.params.id -1;
    try {
      const baseDatos = JSON.parse(
        fs.readFileSync("./productos.json", "utf8")
      );
      baseDatos[id]["title"] = req.body.title;
      baseDatos[id]["price"] = req.body.price;
      baseDatos[id]["thumbnail"] = req.body.thumbnail;
      console.log(baseDatos[req.params.id]);
      fs.writeFileSync(
        "./productos.json",
        JSON.stringify(baseDatos, null, 2)
      );
     
      res.send(baseDatos);
    } catch (err) {
      console.log(err);
    }

       })
      .delete((req, res)=>{
        contenedor.deleteById(req.params.id);
        res.sendStatus(200);
      })
     
  
      
     

   
      
  
    
    
      
    
    







export default  router;
