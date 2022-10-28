const express =require('express')
const app = express();
const cors = require('cors');
app.use(cors());
const port = process.env.port || 4000;
const data=require('./data/data.json');



app.get('/',(req,res)=>{
    res.send('news api running')
});
app.get('/allCourse',(req,res)=>{
    res.send(data)
});
app.get('/course/:id',(req,res)=>{
const id =(req.params.id);
const getSingleCourse=data?.find((p) => p.id==id);
res.send(getSingleCourse)
})
 
app.get('/checkout/:id',(req,res)=>{
    const checkOut=(req.params.id);
    const getCheckout =data?.find ((c)=>c.id==checkOut);
    res.send(getCheckout)
})

app.listen(port,()=>{
    console.log("Corer ninja server running on port ",port);
})
module.exports = app;
