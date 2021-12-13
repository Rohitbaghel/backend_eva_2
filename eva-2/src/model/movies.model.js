const {Schema,model} = require("mongoose")


const moviesSchema = new Schema({
    name:{type:String,required:true},
    actors :[{type:String,required:true}],
    languages:[{type:String,required:true}],
    poster_url :[{type:String,required:true}],
    directors:[{type:String,required:true}]
}
,{
    timestamps:true,
    versionKey:false,
})

module.exports= model("movie",moviesSchema)