
const ProductoService=require('../services/producto')
class ProductoControlador{
	constructor(modelo){
		this.model=modelo;
	}
	async productoController (req,res,next){
		try{
			if (!req.body.nombre || !req.body.descripcion || !req.body.codigo || !req.body.foto 
				|| !req.body.precio|| !req.body.stock){
				throw new Error ("debe rellenar todos los datos solicitados")
			}
			let d=new Date();
			let mes=d.getMonth();
			mes=mes+1;
			let fech=d.getDate()+"/"+mes+"/"+d.getFullYear()+" "+d.getHours()+":"+d.getMinutes()+":"+d.getSeconds();      
		
			let productoGuardar={
				"timestamp":fech,
				"nombre":req.body.nombre,
				"descripcion":req.body.descripcion,
				"codigo":req.body.codigo,
				"foto":req.body.foto,
				"precio":req.body.precio,
				"stock": req.body.stock
			};
			let resultado=await ProductoService.createProducto(productoGuardar);
			if (resultado.length==0){
				throw new Error("Error al guardar el archivo");
			}
			
			res.status(200).json(resultado);
		}catch(e){
			res.status(404).json({"error":e.message});
		}
		
	}
	async productovController(req,res,next){
		try{
			
			if(!req.params.id){
				var contenido= await ProductoService.vistaProducto();
				if (contenido.length==0){
					throw new Error('no hay productos cargados')
				}
			}else{
				var contenido=await ProductoService.vistaProductoid(req.params.id);
				if (contenido.length==0){
					throw new Error('Producto no encontrado');
				}
			}
			
			res.status(200).json(contenido);
		}catch(e){
			res.status(404).json ({"error": e.message});
		}
	}
	async productoActualizarid(req,res,next){
		try{
			//me fijo si el producto existe
			let producto=await ProductoService.vistaProductoid(req.params.id);
			if (producto.length==0){
				throw new Error("El producto buscado no existe");
			}
			let d=new Date();
			let mes=d.getMonth();
			mes=mes+1;
			let fech=d.getDate()+"/"+mes+"/"+d.getFullYear()+" "+d.getHours()+":"+d.getMinutes()+":"+d.getSeconds();      
		
			let productoaModificar={
				"timestamp":fech,
				"nombre":req.body.nombre,
				"descripcion":req.body.descripcion,
				"codigo":req.body.codigo,
				"foto":req.body.foto,
				"precio":req.body.precio,
				"stock": req.body.stock,
				"id":req.params.id
			}
			let productoModificado=await ProductoService.actualizarProducto(productoaModificar);
			if (productoModificado.length==0){
				throw new Error("Se ha producido un error al modificar el producto");
			}else{
				res.json(productoModificado);
			}
	
		}catch(e){
			res.status(404).json({"error": e.message});
		}    
	}
	async productobController(req,res,next){
		try{
			let producto={
				"title":req.body.title,
				"price": req.body.price,
				"thumbnail":req.body.thumbnail,
				"id":req.params.id
			}
			let borrado=await ProductoService.borrarProducto(req.params.id);
			if (borrado!=1){
				throw new Error("error al borrar el producto");
			}
			res.json(producto);
		}catch(e){
			res.json({"error":e.message});
		}
	}
}
module.exports=new ProductoControlador();
