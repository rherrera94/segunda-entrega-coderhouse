const {persistencia} = require('../config/persistencia')
class Factory{

    constructor(){
        this.persistencia = persistencia;
    }

    getPersistencia(){
        if( this.persistencia == 1 ){
            return {productos: require('../persistencia/models/dao/fs/Archivo'), carrito: require('../persistencia/models/dao/fs/Carrito')}
        } 
        
        throw Error('Error en la seleccion de la persistencia')
    }

}
const tipoPersistencia =  new Factory()
module.exports = tipoPersistencia.getPersistencia()