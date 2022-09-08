//iniciando o express
const express = require("express");
const app = express();
//body parser
const bodyparser = require("body-parser");
// banco de dados
const conection = require("./database/database");
const userController = require("./usuarios/userController");

conection
    .authenticate()
    .then(()=>{
        console.log("Banco de dados 'pontoinova' conectado com sucesso!");
    })
    .catch((msgerro)=>{
        console.log(msgerro);
    })

//usando ejs como view engine

app.set("view engine", "ejs");
//importando o bootstrap
app.use(express.static('public'));
//importando o body-parser
app.use(bodyparser.urlencoded({extended: false}));
app.use(bodyparser.json());

//rotas

app.get("/", (req, res)=>{
    res.render("index")
})

app.use("/", userController);



app.listen(3000, (erro)=>{
    if(erro){
        console.log(erro)
    }else{
        console.log("Servidor localhost iniciado com sucesso!")
    }
})