const isAdmin=require('../Middleware/funcionAdmin');
const{productoController, productovController, productobController, productoActualizarid}=require('../persistencia/controller/producto')
const{carritoController, carritovController, carritobController}=require('../persistencia/controller/carrito')
module.exports=(router)=>{
	//rutas productos
	router.post("/productos/agregar",isAdmin,productoController);//ok
	router.get("/productos/listar/:id?",productovController);//ok
	router.put("/productos/actualizar/:id",isAdmin,productoActualizarid);//ok
	router.delete("/productos/borrar/:id",isAdmin,productobController);
	//Apartir de aca las rutas del carrito de compras
	router.post("/carrito/agregar/:id_producto",isAdmin,carritoController);//ok
	router.get("/carrito/listar/:id?",carritovController);//ok
	router.delete("/carrito/borrar/:id",isAdmin,carritobController);
	return router;
};