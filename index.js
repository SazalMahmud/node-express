
const express = require('express');
const cors = require('cors')
const app = express();
app.use(cors()) 

//
app.use(express.json());
const port = 5000;
// req = request , res = respons
app.get('/',(req,res) =>{
    res.send('hi i am sazal ');
});

const users =[
    { id :0, name :'sazal' ,email:'sazal@bat.com',phone:'0175235235'},
    { id :1, name :'arafin' ,email:'arafin@bat.com',phone:'0175434355'},
    { id :2, name :'saddam' ,email:'saddam@bat.com',phone:'017500000'},
    { id :3, name :'monir' ,email:'monir@bat.com',phone:'0175333333'},
    { id :4, name :'ashad' ,email:'adhad@bat.com',phone:'01707u897'},
    { id :5, name :'monim' ,email:'monim@bat.com',phone:'017340000'},
    { id :6, name :'kausar' ,email:'kausar@bat.com',phone:'017644444'},

]
// users all information ber korte use kora hoy
app.get('/users',(req ,res)=>{
    const search = req.query.search;
    if(search){
           const searchResult =users.filter(user =>user.name.toLocaleLowerCase().includes(search));
           res.send(searchResult);
    }
    else{
        res.send(users);
    }
    
});
//app method
app.post("/users" ,(req,res) =>{
    const newUser = req.body;
    newUser.id =users.length;
    // newUser ke push korlam apps a.
    users.push(newUser);
    //res.send('insite the post')
    res.json(newUser)
})

// only id onojaiee information ber korte
app.get('/users/:id',(req,res)=>{
    const id = req.params.id; //id use kora information ber kora
    const user = users[id]
    res.send(user);
})
app.listen(port,() =>{
    console.log('port identify in Cmd te , thik ashe naki', port);
});
