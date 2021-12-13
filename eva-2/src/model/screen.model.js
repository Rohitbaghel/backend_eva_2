const {Schema,model} = require("mongoose")


const screensSchema = new Schema({
    name:{type:String,required:true},
    theater:{
        type:Schema.Types.ObjectId,
        ref:"theater",
        required:true
    }
}
,{
    timestamps:true,
    versionKey:false,
})

module.exports= model("screen",screensSchema)