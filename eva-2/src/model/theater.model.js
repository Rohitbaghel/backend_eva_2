const {Schema,model} = require("mongoose")


const theatersSchema = new Schema({
    name:{type:String,required:true},
    location:{type:String,required:true}
}
,{
    timestamps:true,
    versionKey:false,
})

module.exports= model("theater",theatersSchema)