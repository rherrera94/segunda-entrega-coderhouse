const tipoPersistencia=require('../../factory/factory')
const CarritoDAO=tipoPersistencia.carrito;

class carritoService{
	constructor(){}
    async agregarProducto(producto){
        return CarritoDAO.agregarProducto(producto);
    }
	async vistaProducto(){
		return CarritoDAO.leer();
	}
	async vistaProductoid(id){
		return CarritoDAO.buscar(id);
	}
	async actualizarProducto(producto){
		return ProductoDAO.modificar(producto);
	}
	async borrarProducto(id){
		return ProductoDAO.borrarProducto(id);
	}
}
module.exports=new carritoService();