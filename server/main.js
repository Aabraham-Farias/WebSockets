var express= require('express')
var app= express();
var server= require('http').Server(app);
var io= require('socket.io')(server);

var messages =[{
        id:1,
        text:"Hola soy un mensaje",
        author:"IQA"
}];

app.use(express.static('public'))

app.get('/',function(req,res){
    res.status(200).send("Hello World")
})

io.on('connection',function(socket){
    console.log("Alguien esta tratando de comunicarse");
    socket.emit('messages',messages);
    socket.on('new-message',function(data){
        messages.push(data);
        io.sockets.emit('messages',messages);
        });
});

server.listen(8081,function(){
     console.log("Servidor Corrriendo en http://localhost:8081")
})