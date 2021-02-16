const http = require('http').createServer()
const io = require('socket.io')(http ,{
    cors: {origin : "*"}
})

io.on('connection' , (socket)=>{
    console.log("New connection made")
    socket.on('message' , (msg)=>{
        console.log(msg)
        socket.emit("message" , `${socket.id} said : ${msg}`)
    })
})
