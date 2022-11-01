const mongoose = require("mongoose");
const express = require('express');
const app = express();

require ("dotenv").config();
const person= require("./model/person");
const port = 3000;
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    // eslint-disable-next-line
    console.log("Database Connection Established...!");
  })
  .catch((err) => {
    // eslint-disable-next-line
    console.log("Error: Database connection can not be established...!", err);
  });
  //Créer et enregistrer un enregistrement d’un modèle 
//   const addPerson = async function (req, res) { 
//     try {
//         const newPerson =new person({
//             name:"mehdi" ,

//             age:300,
            
//             favoriteFoods: ["gfdff","sfudf"] }
//         )
// console.log(newPerson);
// newPerson.save((err,result)=>{
//     if(err) {
//         console.log(err.message);
    
//     }
//     else {console.log("person saved successfully")}
// })
        
//     } catch (error) {
//         console.log(error) } }
//   addPerson();
 

//Create Many Records with model.create()

//   const manyPerson =async function(req, res){
//     try {
//         let many=[
//             {   name: 'John' ,   age:20,favoriteFoods: ["gfdff","sfudf"]
//             },
//             {name: 'media' , age:200,favoriteFoods: ["gfdff","sfudf"] }]
//     const newPerson = await person.create(many)} catch (error) {
//         console.log(error)}
//   }
//   manyPerson()


// const search = async function(req, res){
//     try {
//         const ylawej= await person.find({name:"John"})
//         console.log(ylawej)
//     } catch (error) {
//         console.log(error.msg)
//     }

// }
// search()

//Use model.findOne() to Return a Single Matching Document from Your Database
// const searchOne = async function (req, res) {
//   try {
//     const filtr = await person.findOne({ name: "John" });
//     console.log(filtr);
//   } catch (error) {
//     console.log(error.message);
//   }
// };
// searchOne();
//Use model.findById() to Search Your Database By _id
// const searchById = async function (req, res) {
//   try {
//     const filtr = await person.findById({_id:"635fbd63705eaf364878eb5f"});
//     console.log(filtr);
//   } catch (error) {
//     console.log(error.message);
//   }
// };
// searchById();
// Perform Classic Updates by Running Find, Edit, then Save
// const findEditSave = async function (id,food){
//     try {
//         const personId = await person.findById({_id:id});
//         await personId.favoriteFoods.push(food)
//         await personId.save();
//     }catch(err){console.log(err.message)}
// }
//   findEditSave("635fbd63705eaf364878eb5f", "hamburger");
//   console.log(findEditSave("635fbd63705eaf364878eb5f", "hamburger"));

// Perform New Updates on a Document Using model.findOneAndUpdate()
// async function update(names, age) {
//   try {
//     const personUp = await person.findOne({ name: names });
//     personUp.age = age;
//     await personUp.save();
//   } catch (err) {
//     console.log(err.message);
//   }
// }
// update("John", 20);
// console.log(update("John", 20));

//Delete One Document Using model.findByIdAndRemove
// const deletebyId = async function (id) {
//   try {
//     const personId =await person.findByIdAndRemove({ _id: id });
//     await personId.save();
//   } catch (err) {
//     console.log(err.message);
//   }
// };
// deletebyId("635fbd63705eaf364878eb5f");

//MongoDB and Mongoose - Delete Many Documents with model.remove()
// const mongooseDelete = async function (name) {
//   try {
//     await person.deleteMany({ name: name });
//     // await person.deleteMany(names);
//   } catch (err) {
//     console.log(err.message);
//   }
// }
// mongooseDelete("media");

//Chain Search Query Helpers to Narrow Search
// const QuerySearch = async function (food) {
//   try {
//     await person
//       .find({ favoriteFoods: food})
//       .sort({ name: "desc" })
//       .limit(2)
//       .select("-age")
//       .exec();
//   } catch (err) {
//     console.log(err.message);
//   }
// };
// QuerySearch();


app.listen(port, () => console.log(`Example app listening on port ${port}!`))