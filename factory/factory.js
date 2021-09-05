const {persistencia} = require('../config/persistencia')
class Factory{

    constructor(){
        this.persistencia = persistencia;
    }

    getPersistencia(){
        if( this.persistencia == 1 ){
            return {productos: require('../persistencia/models/dao/fs/Archivo'), carrito: require('../persistencia/models/dao/fs/Carrito')}
        } 
        /*if( this.persistence == 2 ) return require('./mongo/MongoPersistence')
        if( this.persistence == 3 ) return require('./mongoatlas/MongoAtlasPersistence')
        if( this.persistence == 4 ) return require('./mysql/MySqlPersistence')
        */

        throw Error('Error en la seleccion de la persistencia')
    }

}
const tipoPersistencia =  new Factory()
module.exports = tipoPersistencia.getPersistencia()