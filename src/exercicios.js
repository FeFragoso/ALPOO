// Minimo necessário para funcionar.
    const express = require('express');
    const app = express();
    app.use(express.json());

// Exercício 1.
    // 1.a
    app.get('/dadospessoais', (req, res) => {
        res.json(
            {
                nome: 'Felipe',
                idade: 18
            }
        )
    })

    // 1.b
    app.get('/formacao', (req, res) => {
        res.json(
            {
                segundoGrau: true,
                tecnico: true,
                graduacao: true
            }
        )
    })

    // 1.c
    app.get('/projetos', (req, res) => {
        res.json(
            {
                situacao: 'Sem ideias!'
            }
        )
    })

    // 1.d
    app.get('/experiencia', (req, res) => {
        res.json(
            {
                experiencia: 0
            }
        )
    })

    // 1.e
    app.get('/lazer', (req, res) => {
        res.json(
            {
                exemplos: ['Games', 'Volei', 'Amigos']
            }
        )
    })

// Exercício 2.
    app.post('/cliente', (req, res) => {
        const {nome, telefone, idade, profissao, email} = req.body;
        res.send('\nCadastro concluído!\n\n\n' + nome + telefone + idade + profissao + email);
    })

// Exercício 3.
    app.put('/cliente/:id', (req, res) => {
        const {nome, telefone, idade, profissao, email} = req.body;
        res.send('\nCadastro concluído!\n\n\n' + nome + telefone + idade + profissao + email);
    })

// Exercício 4.
    app.delete('/cliente/:id', (req, res) => {
        const {id} = req.params;
        res.send('Cliente número: ' + id + ' foi deletado!');
    })

// Confirmação de Saída.
    app.listen(3333, () => {
        console.log('BackEnd Funfando!');
    })