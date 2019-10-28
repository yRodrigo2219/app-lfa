const express = require('express');
const fs = require('fs');

const app = express();

app.use(express.json());

app.post('/pedido', (req, res)=>{
    fs.readFile('./dataBaseUsers.json', (err, data)=>{
        let list = JSON.parse(data);

        for(let i = 0; i < list.length; i++){
            if(req.query.login === list[i].login){
                let a = JSON.parse(req.query.pedido);
                a.id = [list[i].pedidos.length].toString();
                console.log(a);
                list[i].pedidos.push(a);
                fs.writeFile('./dataBaseUsers.json', JSON.stringify(list), (err)=>{
                    res.send({"ok":true});
                });
            }
        }
    });
});

app.get('/menu', (req, res)=>{
    fs.readFile('./dataBaseRest.json', (err, data)=>{
        let f = JSON.parse(data);

        for(let i = 0; i < list.length; i++){
            if(req.query.name === f[i].name){
                res.send(f[i].menu);
                return;
            }
        }
        res.send([]);
    });
});

app.get('/rest', (req, res)=>{
    fs.readFile('./dataBaseRest.json', (err, data)=>{
        let o = JSON.parse(data);
        res.send(o);
    })
});

app.get('/', (req, res)=>{
    fs.readFile('./dataBaseUsers.json', (err, data)=>{
        let list = JSON.parse(data);

        for(let i = 0; i < list.length; i++){
            if(req.query.login === list[i].login){
                res.send(list[i].pedidos);
                return;
            }
        }
        res.send([]);
    });
});

app.post('/signup', (req, res)=>{
    fs.readFile('./dataBaseUsers.json', (err, data)=>{
        let newData = JSON.parse(data);
        newData.push(req.body);
        console.log(req.body);
        newData = JSON.stringify(newData);
        fs.writeFile('./dataBaseUsers.json', newData, (err)=>{
            res.send(true);
        });
    });
});

app.post('/login', (req, res)=>{
    fs.readFile('./dataBaseUsers.json', (err, data)=>{
        let list = JSON.parse(data);

        for(let i = 0; i < list.length; i++){
            if(req.query.login === list[i].login && req.query.senha === list[i].senha){
                res.send(true);
                return;
            }
        }
        res.send(false);
    });
});

app.listen('3000', ()=>{
    console.log('localhost:3000');
});