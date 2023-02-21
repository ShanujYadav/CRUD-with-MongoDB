const express=require('express')
const ex=require('express-handlebars')
const Handlebars=require('handlebars')
const {allowInsecurePrototypeAccess}=require('@handlebars/allow-prototype-access');
require('./model/db')
const app=express()


//Middlewares
app.engine('handlebars',ex.engine({
handlebars:allowInsecurePrototypeAccess(Handlebars),}));
app.set('view engine', 'handlebars');
app.set('views', './views');
app.use(express.json())
app.use(express.urlencoded({urlencoded :true}))

app.use("/emp",require('./controllers/routes'))
app.use("/emp/show-all-emp",require('./controllers/routes'))
app.use("/emp/deleteEmp",require('./controllers/routes'))
// app.use("/emp/showOne"),require('./controllers/routes')



const port=3000
app.listen(port,()=>console.log(`server is running at${port}`))