const mongoose = require ( "mongoose");
const { Schema } = mongoose;

const personPrototype = new Schema({
    name:{type:String,required: true} ,

    age: Number,
    
    favoriteFoods: {type:[String]}  
  }
);
const person = mongoose.model("person", personPrototype);
module.exports=person