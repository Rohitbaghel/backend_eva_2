const {Schema,model} = require("mongoose")


const showSchema = new Schema({
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

module.exports= model("singleshow",showSchema)