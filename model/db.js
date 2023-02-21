const mongoose=require('mongoose');
mongoose.connect('mongodb+srv://ShnaujYadav:9528492010@cluster0.vgr0wiz.mongodb.net/?retryWrites=true&w=majority',(err)=>{
if(!err){
    console.log("MongoDB Connected ");
    }
else
console.log("Problem Occur"+err);
})