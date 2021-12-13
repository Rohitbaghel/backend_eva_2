const {Schema,model} = require("mongoose")


const seatsSchema = new Schema({
   show:{
       type:Schema.Types.ObjectId,
       ref:"show",
       required:true
   }
}
,{
    timestamps:true,
    versionKey:false,
})

module.exports= model("seat",seatsSchema)