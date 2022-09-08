const express = require("express");
const router = express.Router();
const usuarios = require("./user")
const bcrypt = require('bcryptjs');
const connection = require("../database/database")

router.get("/registrousuario", (req,res)=>{
    res.render("registrousuario")
})

router.post("/usuario/criar", (req, res)=>{
    
    var nome = req.body.nome;
    var sobrenome = req.body.sobrenome;
    var senha = req.body.senha;
    var email = req.body.email;
    var nascimento = req.body.nascimento;

    usuarios.findOne({where:{email: email}}).then((user)=>{
        if(user == undefined){
            
        } 
    })

    var salt = bcrypt.genSalt(10);
    var hash = bcrypt.hash(senha, salt);

    

    usuarios.create({
        nome: nome,
        sobrenome: sobrenome,
        senha: hash,
        email: email,
        nascimento: nascimento
    }).then(()=>{
        res.redirect("/")
    }).catch((erro)=>{
        res.redirect("/cu")
    })
   
})



module.exports = router;