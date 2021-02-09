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
            res.send('Error ' + err)
        }
     });
     
      
    app.get('/memes/:id', async(req,res) => {
        try{
               const memes = await meme.findById(req.params.id);
                res.status(200).send(memes);
        }catch(err){
            res.status(404).send(err);
        }
     })

     app.post("/memes",async(req,res) =>{
     try{
        const Meme = new meme({
         name: req.body.name,
         url: req.body.url,
         caption: req.body.caption
        })
        const memes= await Meme.save();
         res.status(200).send({id: memes._id});
     }
     catch(err){
         res.send('Error ' + err)
     }
  })
  app.patch('/memes/:id/edit',async(req,res)=> {
    try{
       const memes = await meme.findById(req.params.id) 
       memes.caption = req.body.caption;
       memes.url=req.body.url;
       await memes.save()
        res.status(200).send(200);
     }catch(err){
        res.status(404).send(404);
     }
 })


    //.................render page.....................

    app.get("/" , async(req,res)=>{
    try{
        res.redirect("/show");
    }
    catch(err){
       res.send('Error ' + err);
    }
   })

//get route
app.get("/show", async(req, res) =>{
   try{
           const memes = await meme.find().sort({ _id: -1 }).limit(100);
           res.render("memes", {memes:memes});
       }
   catch(err){
       res.send('Error ' + err)
   }
});

//post route
app.post("/show",async(req,res) =>{
      const Meme = new meme({
       name: req.body.owner,
       caption: req.body.caption,
       url: req.body.url
   })
   try{
       await Meme.save();
       res.redirect("/show");
   }
   catch(err){
       res.send('Error ' + err)
   }
})

//edit get route
app.get("/show/:id/edit", async (req, res)=> {
        
        try{
           const editmeme = await meme.findById(req.params.id) 
            res.render("edit", {meme: editmeme});  
        }
        catch(err){
            console.log(err);
            res.redirect("/")
        }
 });

//update route
app.patch('/show/:id/edit',async(req,res)=> {
   try{
      const memes = await meme.findById(req.params.id) 
      memes.caption = req.body.caption;
      memes.url=req.body.url;
      await memes.save()
       res.redirect("/")
    }catch(err){
       res.status(404).send('Error')
    }
})
app.get("*",(req,res)=>{
   res.status(404).send('404');
})

module.exports = app;