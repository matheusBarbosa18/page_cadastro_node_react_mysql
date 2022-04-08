const express = require("express");
const req = require("express/lib/request");
const res = require("express/lib/response");
const app = express();
const router = express.Router();
const bodyParser = require('body-parser');
const cors = require("cors");
const Post = require("./models/Post");
const { sequelize } = require("./models/db");




app.use(cors());
app.use(bodyParser.urlencoded({extended: false}))
app.use(express.json());

app.post('/register',(req,res)=>{
    Post.create({
        name:req.body.name,
        cost:req.body.cost,
        category:req.body.category
    }).then(function(){
        res.redirect('/');
    }).catch(function(error){
        res.send("Ouve um erro " + error)
    })
    
});

app.get("/employees", (req, res) => {
    sequelize.query("SELECT * FROM users", (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    });
  });
  
  app.put("/update", (req, res) => {
    const id = req.body.id;
    
    sequelize.query(
      "UPDATE users SET cost = ? WHERE id = ?",
      [cost, id],
      (err, result) => {
        if (err) {
          console.log(err);
        } else {
          res.send(result);
        }
      }
    );
  });
  
  app.delete("/delete/:id", (req, res) => {
    const id = req.params.id;
    sequelize.query("DELETE FROM users WHERE id = ?", id, (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
    }
}
);
});
  
app.listen(3001,()=>console.log("rodando servidor"));
