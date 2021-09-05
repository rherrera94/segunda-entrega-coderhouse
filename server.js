const express=require('express');
const {NODE_ENV}=require('./persistencia/config/globals')
const routes=require ('./routes/routes');
const cors=require ('cors');
const compression=require ('compression');
const router=express.Router();
const app=express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.json());
app.use(cors());
app.use(compression());
app.use(routes(router));
if (NODE_ENV==="prod"){
    console.log(__dirname)
    app.use(express.static(__dirname+'/public/build'));
    app.get('/',(req,res)=>{
        res.sendFile(__dirname+'/public/build/'+'index.html')
    })
    app.get('*',(req,res)=>{
        res.sendFile(__dirname+'/public/build/'+'index.html')
    })
}
app.use((req, res) => {
    res.json({"error":"Ruta no encontrada","descripcion": `ruta ${req.originalUrl} no implementada` });
})
module.exports={app};