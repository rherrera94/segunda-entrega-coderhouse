const {PORT}=require("./persistencia/config/globals");
const {app}=require("./persistencia/server");

app.listen (PORT,()=>console.log(`El servidor esta funcionando ${PORT}`));

