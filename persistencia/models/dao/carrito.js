const carritoModel=require('../schemas/carrito')

class carritoDAO{
	async createProducto({nombre,descripcion,codigo,foto,precio,stock,timestamp,id_producto}){
		return await carritoModel.create({nombre,descripcion,codigo,foto,precio,stock,timestamp,id_producto});
	}
	async vistaProductos(){
		return carritoModel.find();
	}
	async vistaProductosid(id){
		return carritoModel.findById(id);
	}
	async borrarProducto(id){
		await carritoModel.deleteOne({ _id: id})
	}
};
module.exports=new carritoDAO();