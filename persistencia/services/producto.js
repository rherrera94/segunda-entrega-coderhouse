const tipoPersistencia=require('../../factory/factory')
const ProductoDAO=tipoPersistencia.productos;

class productoService{
	constructor(){}
	async createProducto(producto){
		return ProductoDAO.guardar(producto);
	}
	async vistaProducto(){
		return ProductoDAO.leer();
	}
	async vistaProductoid(id){
		return ProductoDAO.buscar(id);
	}
	async actualizarProducto(producto){
		return ProductoDAO.modificar(producto);
	}
	async borrarProducto(id){
		return ProductoDAO.borrarProducto(id);
	}
}
module.exports=new productoService();