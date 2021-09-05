const productModel=require("../schemas/producto");

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
	async modificar({id,nombre,descripcion,codigo,foto,precio,stock}){
		const productoModificar=await productModel.findByIdAndUpdate(id,{nombre,descripcion,codigo,foto,precio,stock},{new:true})
		return productoModificar
	}
	async borrarProducto(id){
		await productModel.deleteOne({ _id: id})
	}
};
module.exports=new productoDAO();