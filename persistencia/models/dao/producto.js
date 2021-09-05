const productModel=require("../producto");

class productoDAO{
	async createProducto({nombre,descripcion,codigo,foto,precio,stock}){
		return await productModel.create({nombre,descripcion,codigo,foto,precio,stock});
	}
	async vistaProductos(){
		return productModel.find();
	}
	async vistaProductosid(id){
		return productModel.findById(id);
	}
	async modificar({nombre,descripcion,codigo,foto,precio,stock}){
		
	}
	async borrarProducto(id){
		await productModel.deleteOne({ _id: id})
	}
};
module.exports=new productoDAO();