import express from "express";
import fs from "fs"

const app = express();
const PORT = 8080;
const baseDatos = JSON.parse(fs.readFileSync("./productos.json", "utf-8"));
const listaProductos = baseDatos.map((productos) => productos);

function idRandom() {//esta función nos dará un producto aleatorio, el cual será llamado
  const idRandom = Math.round(Math.random() * (listaProductos.length - 1) + 1)
  const nuevo = listaProductos.find(producto => producto.id == idRandom)
  return nuevo
}
app.get('/productos', (req, res) => {
 
  try {
    res.send(listaProductos);
  } catch (err) {
    console.log(err);
  }
});
app.get('/productoRandom', (req, res) => {

  try {
    res.send(idRandom());
  } catch (err) {
    console.log(err);
    
  }
})
app.listen(PORT, () => {
  console.log("servido escuchado");
});