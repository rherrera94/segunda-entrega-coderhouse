const {PORT}=require("./persistencia/config/globals");
const {app}=require("./persistencia/server");
const{getConnection}=require('./persistencia/models/db/connection')

getConnection().then((message)=>{
    console.log(message)
    app.listen (PORT,()=>console.log(`El servidor esta funcionando ${PORT}`));
}).catch (console.log)