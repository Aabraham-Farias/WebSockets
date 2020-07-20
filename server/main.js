var express= require('express')
var app= express();
var server= require('http').Server(app);
var io= require('socket.io')(server);


app.use(express.static('public'))

app.get('/',function(req,res){
    res.status(200).send("Hello World")
})

io.on('connection',function(socket){
    console.log("Alguien esta tratando de comunicarse")
})

server.listen(8080,function(){
     console.log("Servidor Corrriendo en http://localhost:8080")
})