const isAdmin=require('../Middleware/funcionAdmin');
const{productoController, productovController, productobController, productoActualizarid}=require('../persistencia/controller/producto')
module.exports=(router)=>{
	//rutas productos
	router.post("/productos/agregar",isAdmin,productoController);//ok
	router.get("/productos/listar/:id?",productovController);//ok
	router.put("/productos/actualizar/:id",isAdmin,productoActualizarid);//ok
	router.delete("/productos/borrar/:id",isAdmin,productobController);
	//Apartir de aca las rutas del carrito de compras
	/*router.post("/carrito/agregar",isAdmin,productoController);//ok
	router.get("/carrito/listar/:id?",productovControllerid);//ok
	router.delete("/carrito/borrar/:id",isAdmin,productobController);*/
	return router;
};