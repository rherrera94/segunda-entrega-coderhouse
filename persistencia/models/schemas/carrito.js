const {Schema, model}=require("mongoose");

const carritoSchema= new Schema(
    {
        nombre:String,
        descripcion:String,
        codigo:Number,
        foto:String,
        precio:Number,
        stock:Number,
        timestamp:{type: Date, default:Date.now()},
        id_producto:Schema.Types.ObjectId,
        timestampcarrito:{type: Date, default:Date.now()}
    },
    {
        versionKey:false
    })

module.exports=model('carrito', carritoSchema);