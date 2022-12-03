import express from 'express'

const port = process.env.PORT || 8000;
const app = express()


//endpoint

app.get('/',(req,res) =>res.status(200).send("Hello this is degraft"));

app.post('/blogCard',(req,res)=>{
    const dbCards=res.body;
    dbCards.create(dbCards,(err,data)=>{
        if(err){
            res.status(500).send(err)
        }else{
            res.status(201).send(data)
        }
    })
})





//port listener

app.listen(port , ()=>console.log(`app is running at : ${port}`));