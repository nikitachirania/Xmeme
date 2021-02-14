const express = require('express')
const app = express.Router();
const methodOverride = require('method-override')
const meme = require('../models/memes')

app.use(methodOverride('_method'))

//................router...........................

    //....json response..........

    app.get("/memes", async(req, res) =>{
        try{
                const memes = await meme.find().sort({ _id: -1 }).limit(100);
                res.status(200).send(memes);
            }
        catch(err){
            res.status(400).send('Error : ' + err)
        }
     });
     
      
    app.get('/memes/:id', async(req,res) => {
        try{
               const memes = await meme.findById(req.params.id);
                res.status(200).send(memes);
        }catch(err){
            res.status(404).send('Error :' + err);
        }
     })

     app.post("/memes",async(req,res) =>{
     try{
        const ch= await meme.findOne({name : req.body.name,url : req.body.url ,caption : req.body.caption})
        if(ch!==null){
            res.status(409).send('Error : Post already present!')
             return;
         }
        const Meme = new meme({
         name: req.body.name,
         url: req.body.url,
         caption: req.body.caption
        })
        const memes= await Meme.save();
         res.status(201).send({id: memes.id});
        }
        catch(err){
                res.status(400).send('Error : ' + err)
        }
  })
  app.patch('/memes/:id/edit',async(req,res)=> {
    try{
       const memes = await meme.findById(req.params.id) 
       memes.caption = req.body.caption;
       memes.url=req.body.url;
       await memes.save()
        res.status(201).send('201');
     }catch(err){
        res.status(404).send('Error : ' + err);
     }
 })


    //.................page response.....................

    app.get("/" , async(req,res)=>{
    try{
        res.status(200).redirect("/show");
      }
    catch(err){
       res.status(400).send('Error ' + err);
      }
   })

//get route
app.get("/show", async(req, res) =>{
   try{
           const memes = await meme.find().sort({ _id: -1 }).limit(100);
           res.status(200).render("memes", {memes:memes});
       }
   catch(err){
       res.status(400).send('Error ' + err)
   }
});

app.get('/show/:id/read', async(req,res) => {
    try{
           const memes = await meme.findById(req.params.id);
            res.status(200).render("read",{memes:memes});
    }catch(err){
        res.status(404).send('Error :' + err);
    }
 })

//post route
app.post("/show",async(req,res) =>{
    try{
     const ch= await meme.findOne({name : req.body.name,url : req.body.url ,caption : req.body.caption})
     if(ch!==null){
        res.status(409).send('Error : Post already present!')
         return;
     }
      const Meme = new meme({
       name: req.body.name,
       caption: req.body.caption,
       url: req.body.url})
       await Meme.save();
       res.status(201).redirect("/show");
   }
   catch(err){
       res.status(400).send('Error '+err)
   }
})

//edit get route
app.get("/show/:id/edit", async (req, res)=> {
        
        try{
           const editmeme = await meme.findById(req.params.id) 
            res.status(201).render("edit", {meme: editmeme});  
        }
        catch(err){
            console.log(err);
            res.status(404).send("Error : " +err)
        }
 });

//update route
app.patch('/show/:id/edit',async(req,res)=> {
   try{
      const memes = await meme.findById(req.params.id) 
      memes.caption = req.body.caption;
      memes.url=req.body.url;
      await memes.save()
       res.status(201).redirect("/")
    }catch(err){
       res.status(404).send('Error :' + err )
    }
})
app.get("*",(req,res)=>{
   res.status(404).send('Page not found');
})

module.exports = app;