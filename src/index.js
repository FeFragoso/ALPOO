// Armazena a dependencia "express" na variável "express".
    const express = require('express');

// Cria a função "app" para chamar a dependencia "express".
    const app = express();

// Avisar o "express" que vamos trabalhar com json.
    app.use(express.json());

// Cria um endpoint "/home".
    app.get('/home', (req, res) => {
        res.send('\nDeu certo.');
    });

// Cria um endpoint "/mensagem" retornando um valor em json.
    app.get('/mensagem', (req, res) => {
        res.json( 
            {
                mensagem01: "Deu certo!",
                mensagem02: "Deu certo 2!"
            }
        )
    })

// API no padrão "Body".
    app.post('/body', (req, res) => {
        const {msg} = req.body;
        res.send("Você enviou o texto: " + msg);
    })

// API no padrão "Route".
    app.post('/route/:id', (req, res) => {
        const {id} = req.params;
        res.send('O id do padrão route foi: ' + id);
        console.log(id);
    })

// API no padrão "Query".
    app.get("/query", (req, res) => {
        const {valorQuery, valorQuery2} = req.query;
        res.send('O query param enviado foi: ' + valorQuery + '\nE o segundo foi: ' + valorQuery2);
    })

// "Listen" => Especifica a porta à ser acessada.
    app.listen(3333, () => {
        console.log('BackEnd Funfando!');
    });