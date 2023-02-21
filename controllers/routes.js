const express=require('express')
const Employee=require('../model/employee.model')
const router=express.Router();

router.get("/",(req,res)=>{
    res.render("home")
})
router.get('/add-emp',(req,res)=>{
    res.render('addEmp')
})
// save data
router.post('/save-emp',(req,res)=>{
let Emp=new Employee()
Emp.fullName=req.body.fullname
Emp.email=req.body.email
Emp.mobile=req.body.phone
Emp.city=req.body.city
Emp.save((err,result)=>{
    if(!err){
        res.redirect("/emp")
    }
    else{
        throw(err)
    }
})
})
// show all emp
router.get('/show-all-emp',(req,res)=>{
    Employee.find((err,result)=>{
        if(!err){
            res.render('showEmp',{list:result})
        }
        else{
            console.log(err)
        } 
    }) 
})

// delete a row
router.get('/deletePage',(req,res)=>{
    Employee.find((err,result)=>{
        if(!err){
            res.render('delete',{list:result})
        }
        else{
            console.log(err)
        } 
    }) 
})

router.get('/deleteEmp/:id',(req,res)=>{
      Employee.findByIdAndRemove(req.params.id,(err,result)=>{
        if(!err){
            // res.render('delete')
            res.redirect('/emp/deletePage')
        }
        else{
            console.log(err)
        }
      })
})
// preupdate
router.get('/preUpdate',(req,res)=>{
    Employee.find((err,result)=>{
        if(!err){
            res.render('preUpd',{list:result})
        }
        else{
            console.log(err)
        } 
    }) 
})

// show specific row
router.get('/showOne/:id',(req,res)=>{
  Employee.findById(req.params.id,(err,result)=>{
    if(err){
        console.log(err)    
    }
    else{
     res.render('update',{emp:result})
    }
})
})
// final update
router.post('/final-update',(req,res)=>{
Employee.findByIdAndUpdate(req.body.id,req.body,(err,result)=>{
   if(err){
    console.log(err)
   }
   else{
    console.log(req.body)
    res.redirect('/emp/preUpdate')
   }
})
})
module.exports=router