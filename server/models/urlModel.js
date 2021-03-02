const mongoose= require('mongoose');

const urlSchema= new mongoose.Schema({
    longUrl:{type:String,required:true},
    shortUrl:{type:String,required:true},
    urlCode:{type:String,required:true},
    clicks:{
        type:Number,required:true,default:0
    }

})


const Url=mongoose.model('url',urlSchema);

module.exports=Url;